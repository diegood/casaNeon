"""Spoken answers of the locating feature, straight from Home Assistant (no screen needed):
"¿Dónde está Lucía?", "¿Dónde está mi iPhone?", "¿Quién está en casa?", "Haz sonar mi iPhone"."""

from __future__ import annotations

import re
import time
from typing import Any

from homeassistant.core import HomeAssistant

from .service import LocateService

_ART = r"(?:(?:mis|mi|los|las|el|la)\s+)?"
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


def _match(hass: HomeAssistant, service: LocateService, what: str) -> tuple[str, list[dict[str, Any]]] | None:
    """The devices a name means: a device by its name, or every device of a person (watch first)."""
    want = _norm(what)
    for device in service.devices:
        if _norm(device["name"]) == want or want in _norm(device["name"]).split(" "):
            return device["name"], [device]
    for device in service.devices:
        if want and want in _norm(device["name"]):
            return device["name"], [device]
    by_person: dict[str, list[dict[str, Any]]] = {}
    for device in service.devices:
        if device.get("person"):
            by_person.setdefault(device["person"], []).append(device)
    for person, devices in by_person.items():
        name = _person_name(hass, person) or ""
        if want and (want == _norm(name) or want in _norm(name).split(" ")):
            return name, devices
    return None


def _where(hass: HomeAssistant, service: LocateService, who: str, devices: list[dict[str, Any]], lang: str) -> str:
    t = _TEXT[lang]
    person = devices[0].get("person")
    if person and (state := hass.states.get(person)) and state.state not in ("home", "on"):
        return t["away"].format(who=who)
    # a worn device heard in the last two minutes tells where the person is; else the freshest one
    now = time.time()
    placed = [(d, service.state.get(d["id"]) or {}) for d in devices]
    placed = [(d, st) for d, st in placed if st.get("room_name")]
    worn = [st for d, st in placed if d.get("wearable") and now - (st.get("last_seen") or 0) < 120]
    pool = worn or [st for _d, st in placed]
    best = max(pool, key=lambda st: st.get("last_seen") or 0, default=None)
    if best is None:
        return t["unheard"].format(who=who)
    ago = int((time.time() - (best.get("last_seen") or time.time())) // 60)
    if ago >= 3:
        return t["in_ago"].format(who=who, room=best["room_name"], min=ago)
    return t["in"].format(who=who, room=best["room_name"])


async def async_answer(hass: HomeAssistant, service: LocateService | None, text: str, language: str) -> str | None:
    """The answer to a locating question, or None when the sentence is no such question."""
    if service is None or not service.devices:
        return None
    lang = language if language in _TEXT else "es"
    sentence = _norm(text)
    t = _TEXT[lang]
    if _WHO[lang].match(sentence):
        names: list[str] = []
        for device in service.devices:
            st = service.state.get(device["id"]) or {}
            if not st.get("room_name"):
                continue
            who = _person_name(hass, device.get("person")) or device["name"]
            if who not in [n.split(" (")[0] for n in names]:
                names.append(f"{who} ({st['room_name']})")
        return t["home"].format(list=", ".join(names)) if names else t["nobody"]
    if m := _RING[lang].match(sentence):
        found = _match(hass, service, m["what"])
        if found is None:
            return None
        who, devices = found
        notify = next((d.get("notify") for d in devices if d.get("notify")), None)
        if not notify:
            return t["no_ring"].format(who=who)
        await ring(hass, notify, lang)
        return t["ring"].format(who=who)
    if m := _WHERE[lang].match(sentence):
        found = _match(hass, service, m["what"])
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
