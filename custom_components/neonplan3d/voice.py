"""Assist asks the house: the service `neonplan3d.ask` and the intent `NeonPlanAsk`.

A sentence said to Assist (a voice satellite, the Assist dialog, an automation) is handed to the open CasaNeon
views: the first one that understands it answers, shows the place and, when asked to, speaks. The sentences
Assist recognises come from `custom_sentences/<lang>/neonplan3d.yaml`, which is written only when an admin picks
the sentences in the voice settings (never on setup, never over a file the user changed, removed with the
integration); the user may add their own sentences to the same intent in another file.
"""

from __future__ import annotations

import asyncio
from collections.abc import Callable
import hashlib
import json
import logging
from pathlib import Path
from typing import Any, ClassVar
import uuid

from homeassistant.core import Context, HomeAssistant, ServiceCall, ServiceResponse, SupportsResponse, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import intent
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.storage import Store
from homeassistant.util.yaml import parse_yaml
import voluptuous as vol

from .const import DATA_ASK, DATA_VOICE, DOMAIN, SIGNAL_ASK, STORAGE_KEY_VOICE
from .locate.answers import Located, async_locate
from .locate.service import DATA_LOCATE, SIGNAL_LOCATE_DEVICES

_LOGGER = logging.getLogger(__name__)

SERVICE_ASK = "ask"
INTENT_ASK = "NeonPlanAsk"
# a view answers within a moment; a voice satellite waits for Assist, so the wait stays short
ANSWER_TIMEOUT = 6.0
SENTENCES_FILE = "neonplan3d.yaml"

ASK_SCHEMA = vol.Schema(
    {
        vol.Required("text"): vol.All(cv.string, vol.Length(min=1, max=300)),
        vol.Optional("screen"): vol.All(cv.string, vol.Length(max=60)),
        vol.Optional("speak", default=False): cv.boolean,
    }
)

# what Assist says when no view answers (the interface speaks Spanish only)
_NO_SCREEN = {"es": "No hay ninguna pantalla de CasaNeon abierta ahora mismo."}
_NOT_UNDERSTOOD = {"es": "CasaNeon no lo ha entendido."}

# which sentences Assist hands to CasaNeon: only the distinct ones (default), every question, or none at all
SENTENCE_MODES = ("distinct", "all", "off")
DEFAULT_SENTENCE_MODE = "off"

# the distinct sentences: nobody says them to Home Assistant itself, so they never take a sentence meant for it
_DISTINCT = {
    "es": [
        "(muestra|muéstrame|muestrame|enseña|enséñame|ensename) [por favor] {text}",
        "(ve|vete|ir|llévame|llevame|vamos) (a|al|a la|a las|a los) {text}",
        "pregunta a la casa {text}",
        "(casa|casaneon|casa neon) {text}",
        "(dónde|donde) (está|esta|están|estan) (mi|mis) {text}",
        "(quién|quien) (está|esta|hay) [ahora] en casa",
        "haz sonar [mi|el|la] {text}",
        "(encuentra|busca) [mi|mis] {text}",
    ],
}

# the questions: handy, but some of them Home Assistant answers itself, so they go to CasaNeon only with the
# setting "all"; without modules the views answer where something is by showing it
_QUESTIONS = {
    "es": [
        "(dónde|donde) (está|esta|están|estan) {text}",
    ],
}


# "¿Dónde está Lucía?": the names locating knows, as a list (not a wildcard), so Assist matches them even when it
# prefers its local commands and leaves everything else to an AI agent (which would only say "is at home")
WHO_LIST = "neonplan_who"
_WHO_SENTENCES = {
    "es": [f"(dónde|donde) (está|esta|están|estan) [el|la|los|las|mi|mis] {{{WHO_LIST}}}"],
}


def located_names(hass: HomeAssistant) -> list[str]:
    """The people and things locating knows, the way they are said: device names ("iPhone de Lucía", also
    "Lucía"), the person's name and first name."""
    service = hass.data.get(DATA_LOCATE)
    if service is None or not service.enabled:
        return []
    names: list[str] = []

    def add(name: str) -> None:
        name = " ".join(name.replace('"', "").split())
        if len(name) >= 3 and name.lower() not in (n.lower() for n in names):
            names.append(name)

    for device in service.devices:
        add(str(device.get("name") or ""))
        person = device.get("person")
        state = hass.states.get(person) if person else None
        if state is None:
            continue
        full = str(state.attributes.get("friendly_name") or "")
        add(full)
        add(full.split()[0] if full.split() else "")
        name = str(device.get("name") or "")
        if " de " in name:
            # the owner's name after "de" ("iPhone de Lucía"): the name alone
            add(name.rsplit(" de ", 1)[1])
    return names[:200]


def sentences_of(language: str, mode: str = DEFAULT_SENTENCE_MODE) -> list[str]:
    """The sentences of a language in a mode (none for "off")."""
    if mode == "off":
        return []
    return _DISTINCT[language] + (_QUESTIONS[language] if mode == "all" else [])


def sentences_yaml(language: str, mode: str = DEFAULT_SENTENCE_MODE, names: list[str] | tuple[str, ...] = ()) -> str:
    """The custom sentences file of a language (written by hand: the file stays readable for the user); `names`
    are the people and things locating knows ("¿Dónde está Lucía?")."""
    sentences = sentences_of(language, mode)
    if names and sentences:
        sentences = sentences + _WHO_SENTENCES[language]
    return _yaml(language, sentences, names)


def _yaml(language: str, sentences: list[str], names: list[str] | tuple[str, ...] = ()) -> str:
    lines = [
        "# Written by CasaNeon: the sentences Assist hands to the open CasaNeon views (the first one that",
        "# understands answers). Put your own sentences for NeonPlanAsk into another file.",
        "# Which sentences stand here is set in the editor: ⚙ Settings → Voice control → Sentences for Assist.",
        "# Changed by hand, the file is never overwritten; removing the integration removes it.",
        f'language: "{language}"',
        "intents:",
        f"  {INTENT_ASK}:",
        "    data:",
        "      - sentences:",
    ]
    lines += [f'          - "{s}"' for s in sentences]
    lines += ["lists:", "  text:", "    wildcard: true"]
    if names and sentences:
        lines += [f"  {WHO_LIST}:", "    values:"] + [f"      - {json.dumps(n, ensure_ascii=False)}" for n in names]
    lines.append("")
    return "\n".join(lines)


def _sha(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def _path(config_dir: Path, language: str) -> Path:
    return config_dir / "custom_sentences" / language / SENTENCES_FILE


def _ours(text: str) -> bool:
    """A file CasaNeon wrote (in any mode, by any version): the user has not changed it."""
    return (
        any(text == sentences_yaml(language, mode) for language in _DISTINCT for mode in ("distinct", "all"))
        or (text.startswith("# Written by CasaNeon") and text in _old_files())
        or _only_our_sentences(text)
    )


def _only_our_sentences(text: str) -> bool:
    """CasaNeon's header and nothing but sentences CasaNeon writes: an older version's file (it had fewer
    sentences, the names of other people), never one the user added a sentence or an intent to."""
    if not text.startswith("# Written by CasaNeon"):
        return False
    try:
        data = parse_yaml(text)
    except Exception:  # anything unreadable is not ours to overwrite
        return False
    if not isinstance(data, dict) or set(data) != {"language", "intents", "lists"}:
        return False
    language = data.get("language")
    intents = data.get("intents")
    lists = data.get("lists")
    if language not in _DISTINCT or not isinstance(intents, dict) or set(intents) != {INTENT_ASK}:
        return False
    blocks = (intents[INTENT_ASK] or {}).get("data")
    if not isinstance(blocks, list) or len(blocks) != 1 or set(blocks[0]) != {"sentences"}:
        return False
    known = set(_DISTINCT[language]) | set(_QUESTIONS[language]) | set(_WHO_SENTENCES[language])
    if not set(blocks[0]["sentences"] or []) <= known:
        return False
    return isinstance(lists, dict) and lists.get("text") == {"wildcard": True} and set(lists) <= {"text", WHO_LIST}


# the file as 1.22.0 - 1.23 wrote it (the header without the line about changed files): still ours
_CHANGED_LINE = "# Changed by hand, the file is never overwritten; removing the integration removes it.\n"
_OLD_SECOND_LINE = (
    "# understands answers). Rewritten on every start: put your own sentences for NeonPlanAsk into another file.\n"
)
_NEW_SECOND_LINE = "# understands answers). Put your own sentences for NeonPlanAsk into another file.\n"

# the distinct sentences of 1.22.0 (before locating)
_OLD_DISTINCT = {"es": _DISTINCT["es"][:4]}


def _old_files() -> tuple[str, ...]:
    out = []
    for language, distinct in _OLD_DISTINCT.items():
        for extra in ([], _QUESTIONS[language]):
            text = _yaml(language, distinct + extra)
            out.append(text.replace(_NEW_SECOND_LINE, _OLD_SECOND_LINE).replace(_CHANGED_LINE, ""))
    return tuple(out)


def write_sentences(
    config_dir: Path, mode: str, written: dict[str, str], names: list[str] | tuple[str, ...] = ()
) -> tuple[dict[str, str], list[str], bool]:
    """Writes the sentence files for a mode (removes them for "off") - never over a file the user changed.

    `written`: the hash of what CasaNeon last wrote per language. Returns the new hashes, the languages whose
    file was left alone because the user changed it, and whether any file changed (Assist then reloads).
    """
    hashes = dict(written)
    kept: list[str] = []
    changed = False
    for language in _DISTINCT:
        path = _path(config_dir, language)
        try:
            current: str | None = path.read_text(encoding="utf-8")
        except OSError:
            current = None
        if current is not None and _sha(current) != written.get(language) and not _ours(current):
            # the user wrote or changed this file: it stays as it is
            kept.append(language)
            continue
        if mode == "off":
            if current is not None:
                path.unlink()
                changed = True
            hashes.pop(language, None)
            continue
        text = sentences_yaml(language, mode, names)
        if current != text:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding="utf-8")
            changed = True
        hashes[language] = _sha(text)
    return hashes, kept, changed


def remove_sentences(config_dir: Path, written: dict[str, str]) -> None:
    """Removes the files CasaNeon wrote (and the user did not change) when the integration is removed."""
    for language in _DISTINCT:
        path = _path(config_dir, language)
        try:
            current = path.read_text(encoding="utf-8")
        except OSError:
            continue
        if _sha(current) == written.get(language) or _ours(current):
            path.unlink()


class VoiceSettings:
    """The voice settings of the installation (.storage/neonplan3d.voice): which sentences Assist hands on, and the
    hash of each sentence file CasaNeon wrote (so a file the user changed is never overwritten). Nothing is written
    on setup: only when an admin picks the sentences in the voice settings."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_VOICE)
        self.sentences = DEFAULT_SENTENCE_MODE
        self.written: dict[str, str] = {}
        self.unsub: Callable[[], None] | None = None

    async def async_load(self) -> None:
        data = await self._store.async_load() or {}
        mode = data.get("sentences")
        if mode in SENTENCE_MODES:
            self.sentences = mode
        written = data.get("written")
        if isinstance(written, dict) and written:
            self.written = {str(k): str(v) for k, v in written.items()}
        elif mode in SENTENCE_MODES and mode != "off":
            # stored by 1.22.1 - 1.23 (no hashes yet), or nothing recognised then: the files there are ours as
            # long as they hold nothing but CasaNeon's sentences
            self.written = await self.hass.async_add_executor_job(self._adopt)

    def _adopt(self) -> dict[str, str]:
        out: dict[str, str] = {}
        for language in _DISTINCT:
            try:
                text = _path(Path(self.hass.config.config_dir), language).read_text(encoding="utf-8")
            except OSError:
                continue
            if _ours(text):
                out[language] = _sha(text)
        return out

    async def async_refresh(self) -> None:
        """After an update: the sentence files an admin picked get the sentences of this version (a file the user
        changed stays as it is). Nothing happens while the sentences are off."""
        if self.sentences == "off" or not self.written:
            return
        try:
            hashes, _kept, changed = await self.hass.async_add_executor_job(
                write_sentences,
                Path(self.hass.config.config_dir),
                self.sentences,
                self.written,
                located_names(self.hass),
            )
        except OSError:
            _LOGGER.warning("Could not refresh the Assist sentences", exc_info=True)
            return
        if not changed:
            return
        self.written = hashes
        await self._store.async_save({"sentences": self.sentences, "written": hashes})
        if self.hass.services.has_service("conversation", "reload"):
            await self.hass.services.async_call("conversation", "reload", {}, blocking=False)

    async def async_set_sentences(self, mode: str) -> list[str]:
        """An admin picked the sentences: writes (or removes) the files, Assist reloads them. Returns the
        languages whose file was left alone because the user changed it."""
        if mode not in SENTENCE_MODES:
            raise ValueError(mode)
        try:
            hashes, kept, changed = await self.hass.async_add_executor_job(
                write_sentences, Path(self.hass.config.config_dir), mode, self.written, located_names(self.hass)
            )
        except OSError:
            _LOGGER.warning("Could not write the Assist sentences", exc_info=True)
            raise
        self.sentences = mode
        self.written = hashes
        await self._store.async_save({"sentences": mode, "written": hashes})
        # Assist reads custom sentences at its start: a changed file is loaded now
        if changed and self.hass.services.has_service("conversation", "reload"):
            await self.hass.services.async_call("conversation", "reload", {}, blocking=False)
        return kept


async def async_remove_sentences(hass: HomeAssistant) -> None:
    """The integration is removed: the sentence files CasaNeon wrote go with it."""
    settings = VoiceSettings(hass)
    await settings.async_load()
    if not settings.written:
        return
    await hass.async_add_executor_job(remove_sentences, Path(hass.config.config_dir), settings.written)
    await settings._store.async_remove()


class AskBroker:
    """Hands a sentence to the views and waits for the first answer."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._pending: dict[str, asyncio.Future[dict[str, Any]]] = {}

    async def ask(self, text: str, screen: str | None, speak: bool) -> dict[str, Any] | None:
        """The answer of the first view ({"text", "answered"}), None when no view is open or none answered in time."""
        ask_id = uuid.uuid4().hex
        future: asyncio.Future[dict[str, Any]] = self.hass.loop.create_future()
        self._pending[ask_id] = future
        try:
            ask = {"ask_id": ask_id, "text": text, "screen": screen, "speak": speak}
            async_dispatcher_send(self.hass, SIGNAL_ASK, ask)
            async with asyncio.timeout(ANSWER_TIMEOUT):
                return await future
        except TimeoutError:
            return None
        finally:
            self._pending.pop(ask_id, None)

    def answer(self, ask_id: str, text: str, answered: bool) -> bool:
        """A view's answer; only the first one counts. False when the question is unknown (or answered already)."""
        future = self._pending.get(ask_id)
        if future is None or future.done():
            return False
        future.set_result({"text": text, "answered": answered})
        return True


def show_located(hass: HomeAssistant, located: Located, screen: str | None = None) -> None:
    """The open views fly into the room of the answer ("¿Dónde está Lucía?"), or tour the rooms of everyone at home.
    Nobody waits for them. Not when switched off in the locating settings; while people are shown to admins only,
    a view of someone else does not fly to people (a wall tablet would show everyone where they are)."""
    service = hass.data.get(DATA_LOCATE)
    if not located.rooms or service is None or not service.fly:
        return
    async_dispatcher_send(
        hass,
        SIGNAL_ASK,
        {
            "ask_id": "",
            "text": "",
            "screen": screen,
            "speak": False,
            "show_rooms": located.rooms,
            "admins_only": located.persons and service.admins_only,
        },
    )


def area_device(hass: HomeAssistant, area_id: str) -> str | None:
    """A device of the area that a wall tablet's sentence is said in. Assist takes a sentence's room from the device
    that heard it ("enciende la luz" switches the lights there); a tablet that only runs a browser is no device of Home
    Assistant's, so a device of its room stands in for it. None when the area is gone or has no device."""
    if ar.async_get(hass).async_get_area(area_id) is None:
        return None
    devices = [d for d in dr.async_entries_for_area(dr.async_get(hass), area_id) if d.disabled_by is None]
    return min(devices, key=lambda d: d.id).id if devices else None


async def async_converse_here(
    hass: HomeAssistant, text: str, language: str | None, area_id: str, context: Context
) -> dict[str, Any]:
    """A sentence for Assist, said in a room ("enciende la luz" on the kitchen's tablet lights the kitchen)."""
    from homeassistant.components import conversation  # not a dependency: Assist may be off

    result = await conversation.async_converse(
        hass, text, None, context, language=language, device_id=area_device(hass, area_id)
    )
    return result.as_dict()


class AskIntentHandler(intent.IntentHandler):
    """Assist's "show me the living room" and the questions the modules answer."""

    intent_type = INTENT_ASK
    description = "Shows a place or device in NeonPlan 3D or asks the house a question (the open NeonPlan views answer)"
    slot_schema: ClassVar[dict] = {vol.Optional("text"): cv.string, vol.Optional(WHO_LIST): cv.string}

    def __init__(self, broker: AskBroker) -> None:
        self.broker = broker

    async def async_handle(self, intent_obj: intent.Intent) -> intent.IntentResponse:
        slots = self.async_validate_slots(intent_obj.slots)
        # the views understand the whole sentence ("show the living room"); the wildcard alone is the fallback
        text = (intent_obj.text_input or str(slots.get("text", {}).get("value") or "")).strip()
        if not text:
            raise intent.InvalidSlotInfo("no sentence")
        language = (intent_obj.language or intent_obj.hass.config.language or "es").split("-")[0]
        response = intent_obj.create_response()
        # where people and things are: answered here, no screen needed
        located = await async_locate(
            intent_obj.hass, intent_obj.hass.data.get(DATA_LOCATE), text, language, intent_obj.context.user_id
        )
        if located is not None:
            show_located(intent_obj.hass, located)
            response.async_set_speech(located.text)
            return response
        answer = await self.broker.ask(text, None, False)
        if answer is None:
            response.async_set_speech(_NO_SCREEN["es"])
        elif not answer["answered"]:
            response.async_set_speech(_NOT_UNDERSTOOD["es"])
        else:
            response.async_set_speech(answer["text"])
        return response


async def async_setup_voice(hass: HomeAssistant) -> None:
    """Registers the service and the intent and writes the sentences Assist understands."""
    broker = AskBroker(hass)
    hass.data[DATA_ASK] = broker

    async def handle_ask(call: ServiceCall) -> ServiceResponse:
        language = (hass.config.language or "es").split("-")[0]
        locate = hass.data.get(DATA_LOCATE)
        located = await async_locate(hass, locate, call.data["text"], language, call.context.user_id)
        if located is not None:
            show_located(hass, located, call.data.get("screen"))
            return {"answered": True, "answer": located.text, "screen_open": False}
        answer = await broker.ask(call.data["text"], call.data.get("screen"), call.data["speak"])
        if answer is None:
            return {"answered": False, "answer": "", "screen_open": False}
        return {"answered": answer["answered"], "answer": answer["text"], "screen_open": True}

    hass.services.async_register(
        DOMAIN, SERVICE_ASK, handle_ask, schema=ASK_SCHEMA, supports_response=SupportsResponse.OPTIONAL
    )
    intent.async_register(hass, AskIntentHandler(broker))

    # the sentence files are written only when an admin picks them in the voice settings (never on setup)
    settings = VoiceSettings(hass)
    await settings.async_load()
    hass.data[DATA_VOICE] = settings
    await settings.async_refresh()

    # a device added or renamed, locating switched on or off: "Wo ist …?" learns the names
    @callback
    def names_changed() -> None:
        hass.async_create_task(settings.async_refresh())

    settings.unsub = async_dispatcher_connect(hass, SIGNAL_LOCATE_DEVICES, names_changed)


def async_unload_voice(hass: HomeAssistant) -> None:
    """Service and intent go with the integration."""
    hass.services.async_remove(DOMAIN, SERVICE_ASK)
    intent.async_remove(hass, INTENT_ASK)
    hass.data.pop(DATA_ASK, None)
    settings: VoiceSettings | None = hass.data.pop(DATA_VOICE, None)
    if settings is not None and settings.unsub is not None:
        settings.unsub()
