"""Assist asks the house: service, intent, sentences and the views' answers."""

from __future__ import annotations

from pathlib import Path
import sys
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock, patch

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import intent
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d.const import DOMAIN
from custom_components.neonplan3d.voice import area_device, remove_sentences, sentences_yaml, write_sentences

from .test_init import _setup


async def _view(hass_ws_client, hass: HomeAssistant):
    """An open CasaNeon view: subscribed to the sentences."""
    client = await hass_ws_client(hass)
    await client.send_json({"id": 1, "type": "neonplan3d/voice/subscribe"})
    assert (await client.receive_json())["success"]
    return client


async def test_service_hands_the_sentence_to_the_views_and_returns_the_first_answer(
    hass: HomeAssistant, hass_ws_client
) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)
    other = await _view(hass_ws_client, hass)

    task = hass.async_create_task(
        hass.services.async_call(
            DOMAIN, "ask", {"text": "Muestra el salón", "speak": True}, blocking=True, return_response=True
        )
    )
    ask = (await view.receive_json())["event"]
    assert ask["text"] == "Muestra el salón"
    assert ask["speak"] is True
    assert ask["screen"] is None
    assert (await other.receive_json())["event"]["ask_id"] == ask["ask_id"]

    await view.send_json(
        {"id": 2, "type": "neonplan3d/voice/answer", "ask_id": ask["ask_id"], "text": "Mostrando el salón."}
    )
    assert (await view.receive_json())["result"] == {"taken": True}
    # the second view is late
    await other.send_json({"id": 2, "type": "neonplan3d/voice/answer", "ask_id": ask["ask_id"], "text": "Salón"})
    assert (await other.receive_json())["result"] == {"taken": False}

    assert await task == {"answered": True, "answer": "Mostrando el salón.", "screen_open": True}


async def test_service_without_an_open_view_says_so(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.neonplan3d.voice.ANSWER_TIMEOUT", 0.05):
        result = await hass.services.async_call(
            DOMAIN, "ask", {"text": "Zeig die Küche", "screen": "Flur"}, blocking=True, return_response=True
        )
    assert result == {"answered": False, "answer": "", "screen_open": False}


async def test_intent_speaks_the_answer_or_that_nothing_was_understood(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)

    ids = iter(range(10, 100))

    async def answer(text: str, answered: bool) -> intent.IntentResponse:
        task = hass.async_create_task(
            intent.async_handle(hass, "test", "NeonPlanAsk", {"text": {"value": text}}, text_input=text, language="es")
        )
        ask = (await view.receive_json())["event"]
        assert ask["text"] == text
        await view.send_json(
            {
                "id": next(ids),
                "type": "neonplan3d/voice/answer",
                "ask_id": ask["ask_id"],
                "text": "Hay tres ventanas abiertas.",
                "answered": answered,
            }
        )
        await view.receive_json()
        return await task

    assert (await answer("Qué está abierto", True)).speech["plain"]["speech"] == "Hay tres ventanas abiertas."
    assert (await answer("Bla", False)).speech["plain"]["speech"] == "CasaNeon no lo ha entendido."


async def test_intent_without_a_view(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.neonplan3d.voice.ANSWER_TIMEOUT", 0.05):
        response = await intent.async_handle(hass, "test", "NeonPlanAsk", {"text": {"value": "salón"}}, language="es")
    assert response.speech["plain"]["speech"] == "No hay ninguna pantalla de CasaNeon abierta ahora mismo."


def test_sentences_are_written_only_on_request_and_never_over_a_changed_file(tmp_path: Path) -> None:
    es = tmp_path / "custom_sentences" / "es" / "neonplan3d.yaml"
    hashes, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert changed and kept == []
    text = es.read_text(encoding="utf-8")
    assert text == sentences_yaml("es", "distinct")
    assert "(muestra|muéstrame|muestrame|enseña|enséñame|ensename) [por favor] {text}" in text
    # only the distinct sentences: a question Home Assistant answers itself is not taken (#641)
    assert "(dónde|donde) (está|esta|están|estan) {text}" not in text
    # unchanged: nothing written
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert not changed
    # "all" adds the questions
    hashes, kept, changed = write_sentences(tmp_path, "all", hashes)
    assert changed and "(dónde|donde) (está|esta|están|estan) {text}" in es.read_text(encoding="utf-8")
    # a file the user changed is never overwritten, nor removed
    es.write_text("my own sentences", encoding="utf-8")
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert kept == ["es"]
    assert es.read_text(encoding="utf-8") == "my own sentences"
    hashes, kept, _ = write_sentences(tmp_path, "off", hashes)
    assert kept == ["es"] and es.exists()
    # removing the integration takes only CasaNeon's own files
    es.unlink()
    hashes, _, _ = write_sentences(tmp_path, "distinct", hashes)
    assert es.exists()
    remove_sentences(tmp_path, hashes)
    assert not es.exists()


def test_a_file_an_older_version_wrote_is_still_ours(tmp_path: Path) -> None:
    """The file 1.22.0 wrote (older header, the sentences before locating) is replaced, not kept as the user's."""
    es = tmp_path / "custom_sentences" / "es" / "neonplan3d.yaml"
    es.parent.mkdir(parents=True)
    old = "\n".join(
        [
            "# Written by CasaNeon: the sentences Assist hands to the open CasaNeon views (the first one that",
            "# understands answers). Rewritten on every start: "
            "put your own sentences for NeonPlanAsk into another file.",
            "# Which sentences stand here is set in the editor: ⚙ Settings → Voice control → Sentences for Assist.",
            'language: "es"',
            "intents:",
            "  NeonPlanAsk:",
            "    data:",
            "      - sentences:",
            '          - "(muestra|muéstrame|muestrame|enseña|enséñame|ensename) [por favor] {text}"',
            '          - "(ve|vete|ir|llévame|llevame|vamos) (a|al|a la|a las|a los) {text}"',
            '          - "pregunta a la casa {text}"',
            '          - "(casa|casaneon|casa neon) {text}"',
            "lists:",
            "  text:",
            "    wildcard: true",
            "",
        ]
    )
    es.write_text(old, encoding="utf-8")
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert es.read_text(encoding="utf-8") == sentences_yaml("es", "distinct")


async def test_setup_writes_no_sentence_file(hass: HomeAssistant) -> None:
    """Nothing lands in the configuration folder unless an admin picks the sentences."""
    await _setup(hass)
    assert not (Path(hass.config.config_dir) / "custom_sentences").exists()


async def test_unload_removes_service_and_intent(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert hass.services.has_service(DOMAIN, "ask")
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert not hass.services.has_service(DOMAIN, "ask")


# a file an early version wrote with its own, shorter set of sentences
_EARLY_FILE = """# Written by CasaNeon: the sentences Assist hands to the open CasaNeon views (the first one that
# understands answers). Rewritten on every start: put your own sentences for NeonPlanAsk into another file.
language: "es"
intents:
  NeonPlanAsk:
    data:
      - sentences:
          - "(muestra|muéstrame|muestrame|enseña|enséñame|ensename) [por favor] {text}"
          - "(dónde|donde) (está|esta|están|estan) {text}"
          - "pregunta a la casa {text}"
lists:
  text:
    wildcard: true
"""


def test_an_early_file_with_other_sentences_is_still_ours(tmp_path: Path) -> None:
    """Only CasaNeon's sentences under CasaNeon's header: replaced (it lacked "quién está en casa"); one sentence
    of the user's own in it, and it stays."""
    es = tmp_path / "custom_sentences" / "es" / "neonplan3d.yaml"
    es.parent.mkdir(parents=True)
    es.write_text(_EARLY_FILE, encoding="utf-8")
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert "(quién|quien) (está|esta|hay) [ahora] en casa" in es.read_text(encoding="utf-8")
    es.write_text(
        _EARLY_FILE.replace('          - "pregunta a la casa {text}"\n', '          - "apaga la luz"\n'),
        encoding="utf-8",
    )
    _, kept, _ = write_sentences(tmp_path, "distinct", {})
    assert kept == ["es"]


def test_the_names_locating_knows_are_a_list_not_a_wildcard(tmp_path: Path) -> None:
    """ "¿Dónde está Lucía?" matches a list of names exactly, so Assist handles it locally and an AI agent behind
    it never gets the question."""
    es = tmp_path / "custom_sentences" / "es" / "neonplan3d.yaml"
    hashes, _, _ = write_sentences(tmp_path, "distinct", {}, ["Apple Watch de Lucía", "Lucía", 'Ma "M"'])
    text = es.read_text(encoding="utf-8")
    assert "(dónde|donde) (está|esta|están|estan) [el|la|los|las|mi|mis] {neonplan_who}" in text
    assert '      - "Apple Watch de Lucía"' in text and '      - "Ma \\"M\\""' in text
    # the names change: the file follows; no names: the list goes
    _, kept, changed = write_sentences(tmp_path, "distinct", hashes, ["Lucía"])
    assert kept == [] and changed and "Apple Watch" not in es.read_text(encoding="utf-8")
    write_sentences(tmp_path, "distinct", {}, [])
    assert "neonplan_who" not in es.read_text(encoding="utf-8")


async def test_a_sentence_said_in_a_room_goes_to_assist_with_a_device_of_that_room(
    hass: HomeAssistant, hass_ws_client
) -> None:
    """On the kitchen's tablet "enciende la luz" reaches Assist from a device in the kitchen (the room is its area)."""
    await _setup(hass)
    kitchen = ar.async_get(hass).async_create("Cocina")
    hall = ar.async_get(hass).async_create("Pasillo")
    entry = MockConfigEntry(domain="hue", data={})
    entry.add_to_hass(hass)
    devices = dr.async_get(hass)
    lamp = devices.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("hue", "lamp")})
    devices.async_update_device(lamp.id, area_id=kitchen.id)
    off = devices.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("hue", "off")})
    devices.async_update_device(off.id, area_id=kitchen.id, disabled_by=dr.DeviceEntryDisabler.USER)
    assert area_device(hass, kitchen.id) == lamp.id
    assert area_device(hass, hall.id) is None
    assert area_device(hass, "gone") is None

    result = MagicMock()
    result.as_dict.return_value = {"response": {"speech": {"plain": {"speech": "Luz encendida"}}}}
    converse = AsyncMock(return_value=result)
    client = await hass_ws_client(hass)
    # Assist itself stands in: its requirements (hassil) are not installed for the tests
    with patch.dict(sys.modules, {"homeassistant.components.conversation": SimpleNamespace(async_converse=converse)}):
        await client.send_json(
            {
                "id": 1,
                "type": "neonplan3d/voice/converse",
                "text": "enciende la luz",
                "area_id": kitchen.id,
                "language": "es",
            }
        )
        res = await client.receive_json()
    assert res["success"]
    assert res["result"]["response"]["speech"]["plain"]["speech"] == "Luz encendida"
    assert converse.await_args.args[1] == "enciende la luz"
    assert converse.await_args.kwargs == {"language": "es", "device_id": lamp.id}
