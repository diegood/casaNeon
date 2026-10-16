// Wall switches and sockets: a plate on the wall of one to four square modules. A switch's keys each toggle their
// own entity (a light, a switch, a fan or a cover), their LED glows while it is on (a cover: open). A socket's outlets
// may each have a smart plug's switch (a tap toggles it, a small LED shows it is on) and a power sensor (it counts
// as a consumer of the energy balance).

import type { Furniture } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export const MAX_SWITCH_KEYS = 4;

/** Entities a key can switch: they all know the "toggle" service. */
export const SWITCH_KEY_DOMAINS = /^(light|switch|input_boolean|fan|cover)\./;

/** The keys of a wall switch, left to right: at least one, at most four. */
export function switchKeys(f: Pick<Furniture, "switch_keys">): (string | null)[] {
  const keys = (f.switch_keys ?? []).slice(0, MAX_SWITCH_KEYS).map((k) => (k && k !== "none" ? k : null));
  return keys.length ? keys : [null];
}

/** One outlet of a wall socket: the switch that turns it on and off, and its power sensor (each optional). */
export interface SocketOutlet {
  entity?: string | null;
  power?: string | null;
}

/** Entities an outlet is switched with. */
export const SOCKET_SWITCH_DOMAINS = /^(switch|input_boolean|light)\./;

const ref = (v: string | null | undefined) => (v && v !== "none" ? v : null);

/** The outlets of a wall socket, left to right: at least one, at most four. */
export function socketOutlets(f: Pick<Furniture, "socket_outlets">): { entity: string | null; power: string | null }[] {
  const list = (f.socket_outlets ?? []).slice(0, MAX_SWITCH_KEYS).map((o) => ({ entity: ref(o?.entity), power: ref(o?.power) }));
  return list.length ? list : [{ entity: null, power: null }];
}

/** How many square modules a plate has: a switch's keys, a socket's outlets. */
export function plateModules(f: Pick<Furniture, "type" | "switch_keys" | "socket_outlets">): number {
  return f.type === "wall_socket" ? socketOutlets(f).length : switchKeys(f).length;
}

/** Width of a plate with `n` keys: one 86 mm plate, each further key one more 71 mm frame. */
export function switchWidth(n: number): number {
  return Math.round((0.086 + 0.071 * (Math.max(1, Math.min(MAX_SWITCH_KEYS, n)) - 1)) * 1000) / 1000;
}

/**
 * The key under a point of the plan (world x/z, e.g. where a tap hit the plate), from the plate's own x axis:
 * keys share its width evenly, left to right as seen from the front (a mirrored plate counts the other way).
 */
export function switchKeyAt(f: Pick<Furniture, "type" | "x" | "z" | "rotation" | "w" | "mirror" | "switch_keys" | "socket_outlets">, x: number, z: number): number {
  const n = plateModules(f);
  const a = (f.rotation * Math.PI) / 180;
  const local = ((x - f.x) * Math.cos(a) + (z - f.z) * Math.sin(a)) * (f.mirror ? -1 : 1);
  const w = Math.max(0.05, f.w);
  return Math.max(0, Math.min(n - 1, Math.floor(((local + w / 2) / w) * n)));
}

/** The light of a switch's ring, if one is set. */
export function switchRing(f: Pick<Furniture, "switch_ring">): string | null {
  return f.switch_ring && f.switch_ring !== "none" ? f.switch_ring : null;
}

/** Whether a key's entity is on: a light, switch or fan "on", a cover open (or opening). */
export function switchKeyOn(hass: HomeAssistant, entity: string | null): boolean {
  const st = entity ? hass.states[entity]?.state : undefined;
  return st === "on" || st === "open" || st === "opening";
}
