"""Websocket commands used by the panel, the card and the editor."""

from __future__ import annotations

import contextlib
import json
import time
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import instance_id
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.loader import async_get_integration
import voluptuous as vol

from .const import (
    DATA_ASK,
    DATA_VOICE,
    DOMAIN,
    MAIN_PLAN,
    SIGNAL_ANNOUNCE,
    SIGNAL_ASK,
    SIGNAL_BUILDING_UPDATED,
    SIGNAL_PLANS_UPDATED,
    SIGNAL_RELOAD,
)
from .locate.recorder import ws_locate_rec
from .locate.ws import COMMANDS as LOCATE_COMMANDS
from .packs import MAX_PACK_SIZE, PackError, fingerprint, parts_of, verify_pack
from .schema import BUILDING_SCHEMA, IMAGE_DATA, empty_building
from .screens import KINDS, screens_of
from .storage import FloorplanData, PlanData, complete
from .timetravel import ws_timetravel_history
from .voice import SENTENCE_MODES, AskBroker, VoiceSettings, async_converse_here

_IMAGE_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))
# a floor plan; every command without one means the main plan (as older frontends send them)
_PLAN_ID = vol.All(str, vol.Match(r"^[a-z0-9_]{1,32}$"))
_PLAN = vol.Optional("plan", default=MAIN_PLAN)
_PLAN_NAME = vol.All(str, vol.Length(min=1, max=60))
_PLAN_ICON = vol.Any(None, vol.All(str, vol.Length(max=16)))
_SITE = vol.Any(
    None,
    vol.Schema(
        {
            vol.Required("on"): bool,
            vol.Required("x"): vol.Coerce(float),
            vol.Required("y"): vol.Coerce(float),
            vol.Required("rot"): vol.Coerce(float),
        }
    ),
)


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register all websocket commands."""
    for command in (
        ws_get_building,
        ws_save_building,
        ws_subscribe_building,
        ws_get_image,
        ws_set_image,
        ws_delete_image,
        ws_history_list,
        ws_history_snapshot,
        ws_history_restore,
        ws_plans_list,
        ws_plans_subscribe,
        ws_plans_create,
        ws_plans_update,
        ws_plans_order,
        ws_plans_delete,
        ws_plans_restore,
        ws_plans_locate,
        ws_packs_list,
        ws_packs_import,
        ws_packs_remove,
        ws_backup_export,
        ws_backup_import,
        ws_timetravel_history,
        ws_voice_subscribe,
        ws_screens_list,
        ws_screens_reload,
        ws_voice_answer,
        ws_voice_settings,
        ws_voice_settings_set,
        ws_voice_converse,
        ws_locate_rec,
    ):
        websocket_api.async_register_command(hass, command)
    for command in LOCATE_COMMANDS:
        websocket_api.async_register_command(hass, command)


async def async_instance_fingerprint(hass: HomeAssistant) -> str:
    """This installation's fingerprint: what a pack bound to it carries."""
    return fingerprint(await instance_id.async_get(hass))


def _data(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> FloorplanData | None:
    data: FloorplanData | None = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "CasaNeon is not set up")
    return data


def _plan(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> PlanData | None:
    if (data := _data(hass, connection, msg)) is None:
        return None
    plan = data.plan(msg["plan"])
    if plan is None:
        connection.send_error(msg["id"], "not_found", "Floor plan not found")
    return plan


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/building/get", _PLAN: _PLAN_ID})
@websocket_api.async_response
async def ws_get_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the building, its revision and the running integration version.

    The frontend compares the version with its own: after an update the new frontend files are served
    at once, but the backend (and its validation) only changes with a restart.
    """
    if (plan := _plan(hass, connection, msg)) is None:
        return
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(
        msg["id"],
        {"building": plan.building, "revision": plan.revision, "plan": plan.id, "version": str(integration.version)},
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/building/save",
        vol.Required("building"): BUILDING_SCHEMA,
        _PLAN: _PLAN_ID,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_building(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the building."""
    if (plan := _plan(hass, connection, msg)) is None:
        return
    revision = await plan.async_save_building(msg["building"])
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/building/subscribe",
        vol.Optional("plan", default=MAIN_PLAN): vol.Any("*", _PLAN_ID),
    }
)
@callback
def ws_subscribe_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the new revision whenever the plan changes ("*": any plan, with its id)."""

    @callback
    def forward(revision: int, plan_id: str = MAIN_PLAN) -> None:
        if msg["plan"] in ("*", plan_id):
            connection.send_message(websocket_api.event_message(msg["id"], {"revision": revision, "plan": plan_id}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/image/get", vol.Required("image_id"): _IMAGE_ID})
@callback
def ws_get_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return a background image as data URL."""
    if (data := _data(hass, connection, msg)) is None:
        return
    image = data.get_image(msg["image_id"])
    if image is None:
        connection.send_error(msg["id"], "not_found", "Image not found")
        return
    connection.send_result(msg["id"], {"data": image})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/image/set",
        vol.Required("image_id"): _IMAGE_ID,
        vol.Required("data"): IMAGE_DATA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_set_image(msg["image_id"], msg["data"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/image/delete", vol.Required("image_id"): _IMAGE_ID, _PLAN: _PLAN_ID}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_delete_image(msg["image_id"], msg["plan"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/list", _PLAN: _PLAN_ID})
@websocket_api.require_admin
@callback
def ws_history_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """List the restore points (newest first)."""
    if (plan := _plan(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"snapshots": plan.history()})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/snapshot", _PLAN: _PLAN_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_snapshot(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Keep the current building as a restore point (e.g. before an import)."""
    if (plan := _plan(hass, connection, msg)) is None:
        return
    await plan.async_snapshot()
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/history/restore", vol.Required("snapshot_id"): _IMAGE_ID, _PLAN: _PLAN_ID}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Go back to a restore point; the current state becomes a restore point itself."""
    if (plan := _plan(hass, connection, msg)) is None:
        return
    building = plan.snapshot(msg["snapshot_id"])
    if building is None:
        connection.send_error(msg["id"], "not_found", "Restore point not found")
        return
    await plan.async_snapshot()
    revision = await plan.async_save_building(complete(building))
    connection.send_result(msg["id"], {"revision": revision})


# ---------------------------------------------------------------------------- floor plans


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/list"})
@callback
def ws_plans_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The floor plans in their order, the bin and the plan Live Presence works on."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], data.plan_list())


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/subscribe"})
@callback
def ws_plans_subscribe(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the list again whenever a plan is added, renamed, moved or deleted."""
    if (data := _data(hass, connection, msg)) is None:
        return

    @callback
    def forward() -> None:
        connection.send_message(websocket_api.event_message(msg["id"], data.plan_list()))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_PLANS_UPDATED, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/plans/create",
        vol.Required("name"): _PLAN_NAME,
        vol.Optional("icon"): _PLAN_ICON,
        # empty, a copy of another plan, or a plan from a file
        vol.Optional("copy_of"): _PLAN_ID,
        vol.Optional("building"): BUILDING_SCHEMA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_create(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Add a floor plan; returns its id."""
    if (data := _data(hass, connection, msg)) is None:
        return
    building = msg.get("building") or BUILDING_SCHEMA(empty_building())
    if "copy_of" in msg:
        source = data.plan(msg["copy_of"])
        if source is None:
            connection.send_error(msg["id"], "not_found", "Floor plan not found")
            return
        building = source.building
    try:
        plan_id = await data.async_create_plan(msg["name"], building, msg.get("icon"))
    except ValueError as err:
        connection.send_error(msg["id"], str(err), "Too many floor plans")
        return
    connection.send_result(msg["id"], {"plan": plan_id})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/plans/update",
        vol.Required("plan"): _PLAN_ID,
        vol.Optional("name"): vol.Any(None, _PLAN_NAME),
        vol.Optional("icon"): _PLAN_ICON,
        vol.Optional("site"): _SITE,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_update(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Rename a plan, change its icon or its place on the property."""
    if (data := _data(hass, connection, msg)) is None:
        return
    changes: dict[str, Any] = {k: msg[k] for k in ("name", "icon", "site") if k in msg}
    if not await data.async_update_plan(msg["plan"], changes):
        connection.send_error(msg["id"], "not_found", "Floor plan not found")
        return
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/order", vol.Required("plans"): [_PLAN_ID]})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_order(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Put the plans in a new order."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_order_plans(msg["plans"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/delete", vol.Required("plan"): _PLAN_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_delete(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Move a plan into the bin (the main plan stays)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_delete_plan(msg["plan"]):
        connection.send_error(msg["id"], "not_found", "Floor plan not found or not deletable")
        return
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/restore", vol.Required("plan"): _PLAN_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Take a plan back out of the bin."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_restore_plan(msg["plan"]):
        connection.send_error(msg["id"], "not_found", "Floor plan not in the bin")
        return
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/plans/locate", vol.Required("plan"): _PLAN_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_plans_locate(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Choose the plan Live Presence works on."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_set_locate_plan(msg["plan"]):
        connection.send_error(msg["id"], "not_found", "Floor plan not found")
        return
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/packs/list"})
@callback
def ws_packs_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the imported furniture packs (every user needs them to see the furniture)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"packs": data.packs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/packs/import",
        vol.Required("pack"): vol.All(str, vol.Length(max=MAX_PACK_SIZE)),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check a pack file's content, then keep it."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        payload = verify_pack(msg["pack"], instance=await async_instance_fingerprint(hass))
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    await data.async_add_pack(payload, parts_of(msg["pack"]))
    connection.send_result(
        msg["id"],
        {
            "id": payload["id"],
            "name": payload["name"],
            "publisher": payload["publisher"],
            "licensee": payload["licensee"],
            "items": len(payload["items"]),
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/packs/remove", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an imported pack."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_remove_pack(msg["pack_id"]):
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    connection.send_result(msg["id"])


# ---------------------------------------------------------------------------- backup

BACKUP_FORMAT = "neonplan3d-backup"


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/backup/export"})
@websocket_api.require_admin
@callback
def ws_backup_export(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The plans and the packs for a backup file (the frontend adds the images one by one).

    Version 2: `building` is still the main plan (a version-1 reader restores just that), `main` its entry in the
    list of plans, `plans` every further plan with its building."""
    if (data := _data(hass, connection, msg)) is None:
        return
    main = next(e for e in data.index if e["id"] == MAIN_PLAN)
    others = [{**e, "building": data.plans[e["id"]].building} for e in data.index if e["id"] != MAIN_PLAN]
    connection.send_result(
        msg["id"],
        {
            "format": BACKUP_FORMAT,
            "version": 2,
            "building": data.building,
            "main": {k: main.get(k) for k in ("name", "icon", "site")},
            "plans": others,
            "packs": data.packs,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/backup/import",
        vol.Required("building"): dict,
        vol.Optional("packs", default=[]): [dict],
        vol.Optional("main"): dict,
        vol.Optional("plans"): [dict],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_backup_import(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the plan and the packs from a backup. Packs are checked again: only ones with valid
    content (and that are not bound to another installation) come back; the rest are reported as
    skipped. The state before becomes a restore point.

    A backup with further plans (version 2) brings them back too: the plans there are now go into the bin first
    (nothing is lost), then the backup's plans are added. A version-1 backup touches only the main plan."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        building = BUILDING_SCHEMA(msg["building"])
        others = [
            {**e, "building": BUILDING_SCHEMA(e.get("building") or {})}
            for e in msg.get("plans", [])
            if isinstance(e.get("building"), dict)
        ]
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    instance = await async_instance_fingerprint(hass)
    packs: list[dict[str, Any]] = []
    skipped: list[dict[str, str]] = []
    for entry in msg["packs"]:
        signature = entry.get("signature")
        source = entry.get("source")
        name = str(entry.get("id") or "?")
        if not isinstance(source, dict):
            skipped.append({"id": name, "reason": "not_a_pack"})
            continue
        try:
            text = json.dumps({"payload": source, "signature": signature if isinstance(signature, dict) else {}})
            clean = verify_pack(text, instance=instance)
        except (PackError, TypeError, ValueError) as err:
            skipped.append({"id": name, "reason": getattr(err, "code", "bad_signature")})
            continue
        packs.append({**clean, "source": source, "signature": parts_of(text)[1], "imported_at": time.time()})
    revision = await data.async_restore(complete(building), packs)
    if "plans" in msg:
        main = msg.get("main") or {}
        await data.async_update_plan(MAIN_PLAN, {k: main.get(k) for k in ("name", "icon", "site") if k in main})
        for plan_id in [e["id"] for e in data.index if e["id"] != MAIN_PLAN]:
            await data.async_delete_plan(plan_id)
        for entry in others:
            name = str(entry.get("name") or "?")[:60]
            icon = entry.get("icon") if isinstance(entry.get("icon"), str) else None
            plan_id = await data.async_create_plan(name, complete(entry["building"]), icon)
            if isinstance(entry.get("site"), dict):
                with contextlib.suppress(vol.Invalid):
                    await data.async_update_plan(plan_id, {"site": _SITE(entry["site"])})
    connection.send_result(
        msg["id"],
        {
            "revision": revision,
            "building": data.building,
            "packs": len(packs),
            "skipped": skipped,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/voice/subscribe",
        vol.Optional("announce", default=False): bool,
        vol.Optional("reload", default=False): bool,
        # what the view shows, for the card templates' overview of the open screens
        vol.Optional("view"): {
            vol.Optional("kind", default="panel"): vol.In(KINDS),
            vol.Optional("screen"): vol.Any(None, vol.All(str, vol.Length(max=60))),
            vol.Optional("template"): vol.Any(None, vol.All(str, vol.Length(max=60))),
            vol.Optional("device"): vol.Any(None, vol.All(str, vol.Length(max=80))),
            vol.Optional("version"): vol.Any(None, vol.All(str, vol.Length(max=24))),
        },
    }
)
@callback
def ws_voice_subscribe(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Every sentence Assist (or the service `neonplan3d.ask`) hands to the views; each open view listens. A view
    that knows them (`announce`) also gets the announcements of the service `neonplan3d.announce` for the screens."""

    @callback
    def forward(ask: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], ask))

    @callback
    def forward_announce(announce: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"announce": announce}))

    @callback
    def forward_reload(reload: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"reload": reload}))

    unsubs = [async_dispatcher_connect(hass, SIGNAL_ASK, forward)]
    if msg["announce"]:
        unsubs.append(async_dispatcher_connect(hass, SIGNAL_ANNOUNCE, forward_announce))
    if msg["reload"]:
        # asked for by name: an older frontend would take the call for a sentence
        unsubs.append(async_dispatcher_connect(hass, SIGNAL_RELOAD, forward_reload))

    screen_key: str | None = None
    if "view" in msg:
        user = connection.user
        info = {**msg["view"], "user": user.name if user else None}
        screen_key = screens_of(hass).add(info, forward_reload if msg["reload"] else None)

    @callback
    def unsubscribe() -> None:
        for unsub in unsubs:
            unsub()
        if screen_key:
            screens_of(hass).remove(screen_key)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/screens/list"})
@websocket_api.require_admin
@callback
def ws_screens_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The NeonPlan views open now: panels and dashboard cards, what they show, since when (card templates)."""
    connection.send_result(msg["id"], {"screens": screens_of(hass).listed()})


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/screens/reload", vol.Required("screen_id"): vol.All(str, vol.Length(max=24))}
)
@websocket_api.require_admin
@callback
def ws_screens_reload(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """One open view loads its page again (its row in the overview)."""
    connection.send_result(msg["id"], {"sent": screens_of(hass).reload(msg["screen_id"])})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/voice/answer",
        vol.Required("ask_id"): vol.All(str, vol.Length(max=64)),
        vol.Required("text"): vol.All(str, vol.Length(max=2000)),
        vol.Optional("answered", default=True): bool,
    }
)
@callback
def ws_voice_answer(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """A view's answer to a sentence: the first one is taken, later ones are told so (`taken: false`)."""
    broker: AskBroker | None = hass.data.get(DATA_ASK)
    taken = broker.answer(msg["ask_id"], msg["text"], msg["answered"]) if broker else False
    connection.send_result(msg["id"], {"taken": taken})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/voice/settings"})
@callback
def ws_voice_settings(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The voice settings: which sentences Assist hands to NeonPlan."""
    settings: VoiceSettings | None = hass.data.get(DATA_VOICE)
    connection.send_result(msg["id"], {"sentences": settings.sentences if settings else "off"})


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/voice/settings/set", vol.Required("sentences"): vol.In(SENTENCE_MODES)}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_voice_settings_set(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Sets which sentences Assist hands to NeonPlan; the sentence files are rewritten and Assist reloads them."""
    settings: VoiceSettings | None = hass.data.get(DATA_VOICE)
    if settings is None:
        connection.send_error(msg["id"], "not_ready", "voice settings not loaded")
        return
    try:
        kept = await settings.async_set_sentences(msg["sentences"])
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", str(err))
        return
    connection.send_result(msg["id"], {"sentences": settings.sentences, "kept": kept})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/voice/converse",
        vol.Required("text"): vol.All(str, vol.Length(min=1, max=300)),
        vol.Required("area_id"): vol.All(str, vol.Length(min=1, max=64)),
        vol.Optional("language"): vol.All(str, vol.Length(max=16)),
    }
)
@websocket_api.async_response
async def ws_voice_converse(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """A sentence for Assist from a wall tablet that hangs in a room (any user, like Assist's own
    `conversation/process`): "Licht an" switches the lights of that room."""
    try:
        result = await async_converse_here(
            hass, msg["text"], msg.get("language"), msg["area_id"], connection.context(msg)
        )
    except (KeyError, ValueError, HomeAssistantError) as err:
        # Assist is not set up: the view hands the sentence to Assist the usual way
        connection.send_error(msg["id"], "converse_failed", str(err))
        return
    connection.send_result(msg["id"], result)
