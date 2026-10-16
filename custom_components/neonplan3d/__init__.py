"""CasaNeon: draw your home in Home Assistant and control it in 3D."""

from __future__ import annotations

import contextlib
import hashlib
import logging
from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from .card_resource import (
    LOADER_URL,
    async_remove_card_resource,
    async_schedule_card_resource,
    remove_loader,
    write_loader,
)
from .const import (
    DOMAIN,
    MAIN_BUNDLE,
    PANEL_COMPONENT,
    PANEL_ICON,
    PANEL_TITLE,
    PANEL_URL_PATH,
    URL_BASE,
)
from .storage import FloorplanData
from .websocket import async_register_commands

_LOGGER = logging.getLogger(__name__)

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

_STATIC_REGISTERED = f"{DOMAIN}_static_registered"


_LOCAL_SERVED = f"{DOMAIN}_local_served"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register the websocket commands and the static path once, as early as possible (#461)."""
    async_register_commands(hass)
    await _async_register_static(hass)
    # Home Assistant serves www as /local only when the folder was there when it started (the loader lives there)
    www = Path(hass.config.path("www"))
    hass.data[_LOCAL_SERVED] = await hass.async_add_executor_job(www.is_dir)
    return True


async def _async_register_static(hass: HomeAssistant) -> None:
    # static paths cannot be unregistered, so they are registered once per run
    if hass.data.get(_STATIC_REGISTERED):
        return
    await hass.http.async_register_static_paths(
        [StaticPathConfig(URL_BASE, str(Path(__file__).parent / "frontend"), cache_headers=False)]
    )
    hass.data[_STATIC_REGISTERED] = True


_MAIN_URL = f"{DOMAIN}_main_url"


def _bundle_hash() -> str:
    """A short hash of the main bundle: a rebuilt bundle gets a new URL even when the version stays."""
    path = Path(__file__).parent / "frontend" / MAIN_BUNDLE
    try:
        return hashlib.sha256(path.read_bytes()).hexdigest()[:10]
    except OSError:
        return "0"


async def _async_main_url(hass: HomeAssistant) -> str:
    # computed once per run, so adding and removing the script use the same URL
    if url := hass.data.get(_MAIN_URL):
        return url
    integration = await async_get_integration(hass, DOMAIN)
    digest = await hass.async_add_executor_job(_bundle_hash)
    url = f"{URL_BASE}/{MAIN_BUNDLE}?v={integration.version}-{digest}"
    hass.data[_MAIN_URL] = url
    return url


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Load the stores and register the frontend (panel and card)."""
    data = FloorplanData(hass)
    await data.async_load()
    hass.data[DOMAIN] = data

    await _async_register_static(hass)

    url = await _async_main_url(hass)
    frontend.add_extra_js_url(hass, url)
    # and as a dashboard resource, so a dashboard never draws the card before its script is there (#252), through
    # the loader in www, which is served from the start and tries again while the bundle is not there yet (#461)
    www = Path(hass.config.path("www"))
    try:
        await hass.async_add_executor_job(write_loader, www, url)
        loader_ok = True
    except OSError:
        _LOGGER.debug("Could not write the card loader", exc_info=True)
        loader_ok = False
    resource = f"{LOADER_URL}?{url.split('?', 1)[1]}" if loader_ok and hass.data.get(_LOCAL_SERVED) else url
    async_schedule_card_resource(hass, resource)
    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=PANEL_URL_PATH,
        webcomponent_name=PANEL_COMPONENT,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        module_url=url,
        require_admin=False,
        config={},
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Remove panel and card."""
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    frontend.remove_extra_js_url(hass, await _async_main_url(hass))
    hass.data.pop(DOMAIN, None)
    return True


async def async_remove_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """The plan, its pictures and packs stay in .storage when the integration is removed: they are the
    user's work, and removing and re-adding the integration must never cost it."""
    await async_remove_card_resource(hass)
    with contextlib.suppress(OSError):
        await hass.async_add_executor_job(remove_loader, Path(hass.config.path("www")))
