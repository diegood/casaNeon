// Wi-Fi access points (UniFi and the like): a flat disc on the ceiling or the wall with its LED ring. One of the
// access point's entities is chosen; its state, clients, LED, CPU, memory and restart button are found on the same
// device. The ring glows blue while it is connected and its LED is on, red while it is offline, amber while it updates
// or adopts. A tap switches its LED, a long press restarts it (after asking).

import type { Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

/** Size of the disc on the ceiling (diameter across and deep, its height) and on the wall (standing upright). */
export const ACCESS_POINT_SIZE: [number, number, number] = [0.16, 0.16, 0.035];
export const ACCESS_POINT_WALL_SIZE: [number, number, number] = [0.16, 0.035, 0.16];
/** Height of a wall-mounted access point's bottom edge above the floor. */
export const ACCESS_POINT_WALL_Y = 2.1;

/** On the wall (variant "wall") or on the ceiling (default). */
export function apOnWall(f: Pick<Furniture, "variant">): boolean {
  return f.variant === "wall";
}

/** The devices that are access points: they have a state sensor (UniFi's) and a client count. */
export function accessPointDevices(hass: HomeAssistant): Set<string> {
  const byDevice = new Map<string, string[]>();
  for (const e of Object.values(hass.entities ?? {})) if (e.device_id) byDevice.set(e.device_id, [...(byDevice.get(e.device_id) ?? []), e.entity_id]);
  const out = new Set<string>();
  for (const [device, ids] of byDevice) {
    const name = (id: string) => `${id} ${(hass.states[id]?.attributes.friendly_name as string | undefined) ?? ""}`.toLowerCase();
    if (ids.some((id) => id.startsWith("sensor.") && isStateSensor(hass.states[id])) && ids.some((id) => id.startsWith("sensor.") && /clients|clientes/.test(name(id)))) out.add(device);
  }
  return out;
}

export interface ApEntities {
  state: string | null;
  clients: string | null;
  led: string | null;
  cpu: string | null;
  memory: string | null;
  restart: string | null;
}

const BUSY_STATES = new Set(["pending", "firmware_mismatch", "upgrading", "provisioning", "adopting", "deleting"]);
const DOWN_STATES = new Set(["disconnected", "heartbeat_missed", "inform_error", "adoption_failed", "isolated"]);

function siblingsOf(hass: HomeAssistant, entity: string | null | undefined): string[] {
  const device = entity && entity !== "none" ? hass.entities?.[entity]?.device_id : null;
  return device && hass.entities ? Object.values(hass.entities).filter((e) => e.device_id === device).map((e) => e.entity_id) : [];
}

/** A device's state sensor (an enum that knows "heartbeat_missed", as UniFi's does). */
function isStateSensor(st: HassEntity | undefined): boolean {
  const options = st?.attributes.options;
  return Array.isArray(options) && options.includes("connected") && options.includes("disconnected");
}

/** Whether an entity belongs to an access point (its device has such a state sensor and a client count). */
export function isAccessPoint(hass: HomeAssistant, entity: string): boolean {
  const e = apEntities(hass, { entity });
  return !!e.state && !!e.clients;
}

/** The access point's entities, found beside the chosen one on its device. */
export function apEntities(hass: HomeAssistant, f: Pick<Furniture, "entity">): ApEntities {
  const siblings = siblingsOf(hass, f.entity);
  const key = (id: string) => `${id} ${(hass.states[id]?.attributes.friendly_name as string | undefined) ?? ""} ${hass.entities?.[id]?.translation_key ?? ""}`.toLowerCase();
  const sensor = (pattern: RegExp) => siblings.find((id) => id.startsWith("sensor.") && pattern.test(key(id))) ?? null;
  return {
    state: siblings.find((id) => id.startsWith("sensor.") && isStateSensor(hass.states[id])) ?? null,
    // "clients" or "clientes" – not a port's "client link speed" on the same device
    clients: sensor(/clients|clientes/),
    led: siblings.find((id) => id.startsWith("light.")) ?? null,
    cpu: sensor(/cpu/),
    memory: sensor(/memor/),
    restart: siblings.find((id) => id.startsWith("button.") && (hass.states[id]?.attributes.device_class === "restart" || /restart|reinici/.test(key(id)))) ?? null,
  };
}

export interface ApState {
  status: "up" | "down" | "busy";
  /** Its LED ring is switched on. */
  led: boolean;
  clients: number | null;
  cpu: number | null;
  memory: number | null;
}

const num = (st: HassEntity | undefined): number | null => {
  const v = st ? Number(st.state) : NaN;
  return Number.isFinite(v) ? v : null;
};

export function apState(hass: HomeAssistant, e: ApEntities): ApState | null {
  const st = e.state ? hass.states[e.state] : undefined;
  if (!st) return null;
  const status = DOWN_STATES.has(st.state) || st.state === "unavailable" ? "down" : BUSY_STATES.has(st.state) ? "busy" : "up";
  return {
    status,
    led: e.led ? hass.states[e.led]?.state === "on" : true,
    clients: num(e.clients ? hass.states[e.clients] : undefined),
    cpu: num(e.cpu ? hass.states[e.cpu] : undefined),
    memory: num(e.memory ? hass.states[e.memory] : undefined),
  };
}

/** The access point's name: its device's (the UniFi device trackers repeat it in their own name). */
export function apName(hass: HomeAssistant, entity: string): string {
  const device = hass.entities?.[entity]?.device_id;
  const d = device ? hass.devices?.[device] : undefined;
  return d?.name_by_user || d?.name || (hass.states[entity]?.attributes.friendly_name as string | undefined) || entity;
}

/** The colour of the ring (null: dark). Offline is red whatever the LED says: that is the point of showing it. */
export function apRing(s: ApState): [number, number, number] | null {
  if (s.status === "down") return [1, 0.22, 0.25];
  if (s.status === "busy") return [1, 0.65, 0.15];
  return s.led ? [0.35, 0.65, 1] : null;
}
