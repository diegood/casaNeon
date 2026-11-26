"""The CasaNeon views open now: every panel and dashboard card that listens (voice/subscribe) tells what it shows.

The editor's card templates list them ("the kitchen tablet shows "Küche", version 2.3.0, since 7:02") and can let
one of them load its page again. Kept in memory only: a view that goes away (closed, the tablet asleep and cut off)
leaves the list with its connection. The service `neonplan3d.reload_screens` lets automations do the same, and
`neonplan3d.set_style` shows a style on the open views.
"""

from __future__ import annotations

from collections.abc import Callable
import time
from typing import Any
import uuid

from homeassistant.core import HomeAssistant, ServiceCall, callback
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.dispatcher import async_dispatcher_send
import voluptuous as vol

from .const import DATA_SCREENS, DOMAIN, SIGNAL_RELOAD, SIGNAL_STYLE

SERVICE_RELOAD = "reload_screens"
RELOAD_SCHEMA = vol.Schema(
    {
        vol.Optional("templates", default=[]): vol.All(cv.ensure_list, [vol.All(cv.string, vol.Length(max=60))]),
        # only the views of this floor plan (its id); templates belong to their plan
        vol.Optional("plan"): vol.All(cv.string, vol.Length(max=32)),
    }
)

SERVICE_STYLE = "set_style"
STYLE_SCHEMA = vol.Schema(
    {
        # a style id or name ("cozy", "Acogedor"); "reset" or empty: the screens go back to their own setting
        vol.Required("style"): vol.All(cv.string, vol.Length(max=60)),
        vol.Optional("screens", default=[]): vol.All(cv.ensure_list, [vol.All(cv.string, vol.Length(max=60))]),
        vol.Optional("minutes"): vol.Any(None, vol.All(vol.Coerce(int), vol.Range(min=1, max=10080))),
    }
)

KINDS = ("panel", "card", "preview")


class Screens:
    """The open views by an id of their own, each with a way to call it to reload."""

    def __init__(self) -> None:
        self._open: dict[str, tuple[dict[str, Any], Callable[[dict[str, Any]], None] | None]] = {}

    @callback
    def add(self, info: dict[str, Any], reload: Callable[[dict[str, Any]], None] | None) -> str:
        key = uuid.uuid4().hex[:12]
        self._open[key] = ({**info, "id": key, "since": time.time()}, reload)
        return key

    @callback
    def remove(self, key: str) -> None:
        self._open.pop(key, None)

    @callback
    def listed(self) -> list[dict[str, Any]]:
        """The views to show (a template's preview in the editor is none), the longest open first."""
        out = [
            dict(info, reloadable=send is not None) for info, send in self._open.values() if info["kind"] != "preview"
        ]
        return sorted(out, key=lambda x: x["since"])

    @callback
    def reload(self, key: str) -> bool:
        entry = self._open.get(key)
        if not entry or entry[1] is None:
            return False
        entry[1]({"id": uuid.uuid4().hex[:12], "templates": []})
        return True


@callback
def screens_of(hass: HomeAssistant) -> Screens:
    screens = hass.data.get(DATA_SCREENS)
    if screens is None:
        screens = hass.data[DATA_SCREENS] = Screens()
    return screens


@callback
def async_setup_screens(hass: HomeAssistant) -> None:
    """Registers the services that let the open views (some card templates or all) load their page again or show
    a style."""

    async def reload(call: ServiceCall) -> None:
        # the wall tablets showing these card templates (none named: every open view) load the page again, so a new
        # version reaches them without a ladder
        async_dispatcher_send(
            hass,
            SIGNAL_RELOAD,
            {"id": uuid.uuid4().hex[:12], "templates": call.data["templates"], "plan": call.data.get("plan")},
        )

    hass.services.async_register(DOMAIN, SERVICE_RELOAD, reload, schema=RELOAD_SCHEMA)

    async def set_style(call: ServiceCall) -> None:
        # the open views (the screens named, or every one) show this style, for some minutes or until changed
        async_dispatcher_send(
            hass,
            SIGNAL_STYLE,
            {
                "id": uuid.uuid4().hex[:12],
                "style": call.data["style"].strip(),
                "screens": call.data["screens"],
                "minutes": call.data.get("minutes"),
            },
        )

    hass.services.async_register(DOMAIN, SERVICE_STYLE, set_style, schema=STYLE_SCHEMA)


@callback
def async_unload_screens(hass: HomeAssistant) -> None:
    """The services go with the integration."""
    hass.services.async_remove(DOMAIN, SERVICE_RELOAD)
    hass.services.async_remove(DOMAIN, SERVICE_STYLE)
