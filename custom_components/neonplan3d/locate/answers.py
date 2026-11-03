"""Spoken answers of the locating feature, straight from Home Assistant (no screen needed):
"¿Dónde está Lucía?", "¿Dónde está mi iPhone?", "¿Quién está en casa?", "Haz sonar mi iPhone"."""

from __future__ import annotations

from difflib import SequenceMatcher
import re
import time
from typing import Any, NamedTuple
import unicodedata

from homeassistant.core import HomeAssistant

from .service import LocateService

WORN_FRESH = 120  # a worn device heard this recently tells where its person is
BOTH_FRESH = 30  # worn and carried device both heard this recently: they may disagree
WORN_BONUS = 0.15  # the worn device wins a disagreement unless the other is this much surer
LEFT_BEHIND = 120  # the other device stayed in its room this much longer than the worn one: left lying there
TAKEN_OFF = 600  # the worn device lay this long in one room while the phone walked on: taken off


class Located(NamedTuple):
    """A spoken answer and the plan rooms it talks about (the open views fly there)."""

    text: str
    rooms: list[str]
    persons: bool


def person_state(
    service: LocateService, devices: list[dict[str, Any]], now: float | None = None
) -> dict[str, Any] | None:
    """Where a person is, from all their devices: the worn one heard lately, unless a phone heard at the same time
    is clearly surer about another room (a shared wall fools the watch); a phone that stayed put while the watch
    walked on was left lying; a watch that lay still while the phone walked on was taken off (the phone decides).
    Without a worn device heard lately: the freshest device."""
    now = time.time() if now is None else now

    def seen(st: dict[str, Any]) -> float:
        return float(st.get("last_seen") or 0)

    placed = [(d, st) for d in devices if (st := service.state.get(d["id"]) or {}).get("room")]
    if not placed:
        return None
    worn = [st for d, st in placed if d.get("wearable") and now - seen(st) < WORN_FRESH]
    if not worn:
        return max((st for _d, st in placed), key=seen)
    main = max(worn, key=seen)
    if now - seen(main) >= BOTH_FRESH:
        return main
    others = [
        st
        for d, st in placed
        if not d.get("wearable") and now - seen(st) < BOTH_FRESH and st.get("room") != main.get("room")
    ]
    if not others:
        return main
    other = max(others, key=lambda st: float(st.get("probability") or 0))
    if float(other.get("since") or 0) < float(main.get("since") or 0) - LEFT_BEHIND:
        return main
    if taken_off(main, other, now):
        return other
    if float(other.get("probability") or 0) > float(main.get("probability") or 0) + WORN_BONUS:
        return other
    return main


def taken_off(worn: dict[str, Any], other: dict[str, Any], now: float) -> bool:
    """The worn device lies in one room for ten minutes while the other one changed rooms after it: taken off."""
    worn_since = float(worn.get("since") or now)
    return now - worn_since >= TAKEN_OFF and float(other.get("since") or 0) > worn_since + LEFT_BEHIND


_ART = r"(?:(?P<art>mis|mi|los|las|el|la)\s+)?"
_WHERE = {
    "es": re.compile(
        r"^[¿]?(?:d[oó]nde (?:est[aá]|est[aá]n|anda|se encuentra)|encuentra|busca)\s+"
        + _ART
        + r"\s*(?P<what>.+?)[?.!]*$"
    ),
}
_WHO = {
    "es": re.compile(r"^[¿]?qui[eé]n (?:est[aá]|hay) (?:ahora )?(?:en casa|aqu[ií])[?.!]*$"),
}
_RING = {
    "es": re.compile(r"^(?:haz|hacer) (?:sonar|que suene)\s+" + _ART + r"(?P<what>.+?)[?.!]*$"),
}
_TEXT = {
    "es": {
        "in": "{who} está en {room}.",
        "in_ago": "{who} estuvo por última vez en {room}, hace {min} minutos.",
        "away": "{who} no está en casa ahora mismo.",
        "unheard": "Ahora mismo no oigo a {who}.",
        "nobody": "Ahora mismo no hay nadie en casa a quien pueda localizar.",
        "home": "En casa: {list}.",
        "ring": "{who} está sonando.",
        "no_ring": "No hay ninguna app configurada para hacer sonar {who}.",
    },
}


def _norm(text: str) -> str:
    return re.sub(r"\s+", " ", text.lower().replace("\u2019", "'")).strip()


def _person_name(hass: HomeAssistant, entity_id: str | None) -> str | None:
    state = hass.states.get(entity_id) if entity_id else None
    return str(state.attributes.get("friendly_name") or entity_id) if state else None


MINE = {"mi", "mis"}
# words a spoken name carries that no device name needs ("el iPhone de Lucía")
_FILLER = {"de", "del"}


def _tokens(text: str) -> list[str]:
    """Words as speech recognition may write them: lower case, without accents, "th" as "t", no punctuation."""
    text = unicodedata.normalize("NFKD", _norm(text)).encode("ascii", "ignore").decode().replace("th", "t")
    return [w for w in re.split(r"[^a-z0-9]+", text) if w]


def _same(spoken: str, name: str) -> bool:
    """One spoken word against one word of a name: equal, a possessive, or a small mishearing."""
    if spoken == name or (spoken.endswith("s") and spoken[:-1] == name):
        return True
    return len(spoken) > 3 and len(name) > 3 and SequenceMatcher(None, spoken, name).ratio() >= 0.8


def _score(spoken: list[str], name: str) -> float:
    """Share of the spoken words found in the name (0 when none)."""
    words = _tokens(name)
    if not spoken or not words:
        return 0.0
    return sum(1 for w in spoken if any(_same(w, n) for n in words)) / len(spoken)


def _speaker(hass: HomeAssistant, user_id: str | None) -> str | None:
    """The person entity of the Home Assistant user who asked."""
    if not user_id:
        return None
    for state in hass.states.async_all("person"):
        if state.attributes.get("user_id") == user_id:
            return state.entity_id
    return None


def _match(
    hass: HomeAssistant, service: LocateService, what: str, mine: bool = False, user_id: str | None = None
) -> tuple[str, list[dict[str, Any]]] | None:
    """The devices a spoken name means - tolerant of how speech recognition writes it ("el Apple Watch de Lucia").
    A person's name alone means all their devices; "my" prefers the devices of the person who asked."""
    spoken = [w for w in _tokens(what) if w not in MINE and w not in _FILLER]
    if not spoken:
        return None
    speaker = _speaker(hass, user_id)
    scored = [(_score(spoken, d["name"]), d) for d in service.devices]
    best = max((sc for sc, _d in scored), default=0.0)
    if best < 0.6:
        # maybe a person's name from Home Assistant ("¿Dónde está Lucía?")
        by_person: dict[str, list[dict[str, Any]]] = {}
        for device in service.devices:
            if device.get("person"):
                by_person.setdefault(device["person"], []).append(device)
        named = [(_score(spoken, _person_name(hass, p) or ""), p, devs) for p, devs in by_person.items()]
        top = max(named, key=lambda x: x[0], default=None)
        if top and top[0] >= 0.6:
            return _person_name(hass, top[1]) or top[1], top[2]
        return None
    hits = [d for sc, d in scored if sc == best]
    if len(hits) > 1 and speaker:
        own = [d for d in hits if d.get("person") == speaker]
        hits = own or hits
    device = hits[0]
    # only a person's name said ("¿Dónde está Lucía?"): the words sit in every device of that person -> the person
    person = device.get("person")
    if person:
        theirs = [d for d in service.devices if d.get("person") == person]
        if len(theirs) > 1 and all(_score(spoken, d["name"]) >= best for d in theirs):
            # the person as said, accents kept ("Lucía")
            said = [w for w in _norm(what).split() if _tokens(w) and _tokens(w)[0] not in MINE | _FILLER]
            who = " ".join(w.capitalize() for w in said)
            return who, theirs
    return device["name"], [device]


_NOT_AWAY = ("home", "on", "unknown", "unavailable", "")


def _where(hass: HomeAssistant, service: LocateService, who: str, devices: list[dict[str, Any]], lang: str) -> Located:
    t = _TEXT[lang]
    person = devices[0].get("person")
    persons = any(d.get("person") for d in devices)
    # away, but not merely unknown: a person without a tracker of their own is home when located (#744)
    if person and (state := hass.states.get(person)) and state.state not in _NOT_AWAY:
        return Located(t["away"].format(who=who), [], persons)
    best = person_state(service, devices)
    if best is None:
        return Located(t["unheard"].format(who=who), [], persons)
    ago = int((time.time() - (best.get("last_seen") or time.time())) // 60)
    if ago >= 3:
        return Located(t["in_ago"].format(who=who, room=best["room_name"], min=ago), [best["room"]], persons)
    return Located(t["in"].format(who=who, room=best["room_name"]), [best["room"]], persons)


async def async_answer(
    hass: HomeAssistant, service: LocateService | None, text: str, language: str, user_id: str | None = None
) -> str | None:
    """The answer to a locating question, or None when the sentence is no such question."""
    located = await async_locate(hass, service, text, language, user_id)
    return located.text if located else None


async def async_locate(
    hass: HomeAssistant, service: LocateService | None, text: str, language: str, user_id: str | None = None
) -> Located | None:
    """The answer to a locating question with the rooms it names, or None when the sentence is no such question."""
    if service is None or not service.devices:
        return None
    lang = language if language in _TEXT else "es"
    sentence = _norm(text)
    t = _TEXT[lang]
    if _WHO[lang].match(sentence):
        names: list[str] = []
        rooms: list[str] = []
        done: set[str] = set()
        for device in service.devices:
            person = device.get("person")
            if person:
                if person in done:
                    continue
                done.add(person)
                st = person_state(service, [d for d in service.devices if d.get("person") == person]) or {}
            else:
                st = service.state.get(device["id"]) or {}
            if not st.get("room_name"):
                continue
            who = _person_name(hass, person) or device["name"]
            names.append(f"{who} ({st['room_name']})")
            if st["room"] not in rooms:
                rooms.append(st["room"])
        if not names:
            return Located(t["nobody"], [], True)
        return Located(t["home"].format(list=", ".join(names)), rooms, True)
    if m := _RING[lang].match(sentence):
        found = _match(hass, service, m["what"], (m["art"] or "") in MINE, user_id)
        if found is None:
            return None
        who, devices = found
        notify = next((d.get("notify") for d in devices if d.get("notify")), None)
        if not notify:
            return Located(t["no_ring"].format(who=who), [], False)
        await ring(hass, notify, lang)
        return Located(t["ring"].format(who=who), [], False)
    if m := _WHERE[lang].match(sentence):
        found = _match(hass, service, m["what"], (m["art"] or "") in MINE, user_id)
        if found is None:
            return None
        who, devices = found
        return _where(hass, service, who, devices, lang)
    return None


async def ring(hass: HomeAssistant, notify: str, lang: str = "es") -> None:
    """A loud notification through the Home Assistant app (critical on iPhone, alarm channel on Android)."""
    service = notify.removeprefix("notify.")
    message = "CasaNeon te está buscando 🔔"
    await hass.services.async_call(
        "notify",
        service,
        {
            "title": "CasaNeon",
            "message": message,
            "data": {
                "push": {"sound": {"name": "default", "critical": 1, "volume": 1.0}},
                "ttl": 0,
                "priority": "high",
                "channel": "alarm_stream",
            },
        },
        blocking=False,
    )
