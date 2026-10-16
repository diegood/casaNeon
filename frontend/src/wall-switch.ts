// Wall switches: a plate on the wall with one to four keys, each switching its own entity (a light, a switch,
// a fan or a cover). A tap on a key in 3D toggles its entity; the key's LED glows while it is on (a cover: open).

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

/** Width of a plate with `n` keys: one 86 mm plate, each further key one more 71 mm frame. */
export function switchWidth(n: number): number {
  return Math.round((0.086 + 0.071 * (Math.max(1, Math.min(MAX_SWITCH_KEYS, n)) - 1)) * 1000) / 1000;
}

/**
 * The key under a point of the plan (world x/z, e.g. where a tap hit the plate), from the plate's own x axis:
 * keys share its width evenly, left to right as seen from the front (a mirrored plate counts the other way).
 */
export function switchKeyAt(f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "mirror" | "switch_keys">, x: number, z: number): number {
  const n = switchKeys(f).length;
  const a = (f.rotation * Math.PI) / 180;
  const local = ((x - f.x) * Math.cos(a) + (z - f.z) * Math.sin(a)) * (f.mirror ? -1 : 1);
  const w = Math.max(0.05, f.w);
  return Math.max(0, Math.min(n - 1, Math.floor(((local + w / 2) / w) * n)));
}

/** Whether a key's entity is on: a light, switch or fan "on", a cover open (or opening). */
export function switchKeyOn(hass: HomeAssistant, entity: string | null): boolean {
  const st = entity ? hass.states[entity]?.state : undefined;
  return st === "on" || st === "open" || st === "opening";
}
