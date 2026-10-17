// Electric water heater (a slim tank on the wall, like an Ariston Velis): its water_heater entity, and what the
// integration puts beside it on the same device – whether it heats, the showers of hot water left, the time to
// target, the power and eco switches. The display glows while it is on (orange while it heats) and shows the
// showers as dots, like the tank's own display.

import type { Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

/** Tank sizes (width, depth, height in metres) by capacity in litres, as the slim wall tanks come. */
export const WATER_HEATER_SIZES: Record<string, [number, number, number]> = {
  "30": [0.506, 0.275, 0.566],
  "50": [0.506, 0.275, 0.776],
  "80": [0.506, 0.275, 1.066],
  "100": [0.506, 0.275, 1.206],
};
export const WATER_HEATER_CAPACITIES = Object.keys(WATER_HEATER_SIZES);
/** Height of a water heater's bottom above the floor. */
export const WATER_HEATER_Y = 1.0;

/** The capacity of a tank (its variant), 80 l when not set. */
export function heaterCapacity(f: Pick<Furniture, "variant">): string {
  return f.variant && WATER_HEATER_SIZES[f.variant] ? f.variant : "80";
}

/** How many shower dots the display has: more for a bigger tank. */
export function maxShowers(f: Pick<Furniture, "variant">): number {
  return { "30": 1, "50": 2, "80": 3, "100": 4 }[heaterCapacity(f)] ?? 3;
}

export interface HeaterEntities {
  heater: string | null;
  heating: string | null;
  showers: string | null;
  remaining: string | null;
  power: string | null;
  eco: string | null;
}

/** The heater's entity and its siblings on the same Home Assistant device, found by their names. */
export function heaterEntities(hass: HomeAssistant, f: Pick<Furniture, "entity">): HeaterEntities {
  const heater = f.entity && f.entity !== "none" ? f.entity : null;
  const device = heater ? hass.entities?.[heater]?.device_id : null;
  const siblings = device && hass.entities ? Object.values(hass.entities).filter((e) => e.device_id === device).map((e) => e.entity_id) : [];
  const key = (id: string) => `${id} ${(hass.states[id]?.attributes.friendly_name as string | undefined) ?? ""} ${hass.entities?.[id]?.translation_key ?? ""}`.toLowerCase();
  const find = (domain: string, pattern: RegExp, not?: RegExp) => siblings.find((id) => id.startsWith(`${domain}.`) && pattern.test(key(id)) && !(not && not.test(key(id)))) ?? null;
  return {
    heater,
    heating: find("binary_sensor", /heating|calentando|heizt/),
    showers: find("sensor", /shower|ducha|dusch/),
    remaining: find("sensor", /remaining|restante|restzeit/),
    power: find("switch", /power|encendid|_on\b/, /eco|legionella/),
    eco: find("switch", /\beco/),
  };
}

export interface HeaterState {
  /** Switched on (its power switch, else the heater's own state). */
  on: boolean;
  heating: boolean;
  current: number | null;
  target: number | null;
  showers: number | null;
  /** Minutes left until the water is hot (while it heats). */
  remaining: number | null;
  eco: boolean;
}

const num = (st: HassEntity | undefined): number | null => {
  const v = st ? Number(st.state) : NaN;
  return Number.isFinite(v) ? v : null;
};

export function heaterState(hass: HomeAssistant, e: HeaterEntities): HeaterState | null {
  const st = e.heater ? hass.states[e.heater] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const power = e.power ? hass.states[e.power]?.state : undefined;
  const on = power !== undefined ? power === "on" : st.state !== "off";
  const a = st.attributes;
  const heating = on && (e.heating ? hass.states[e.heating]?.state === "on" : a.hvac_action === "heating");
  const remaining = num(e.remaining ? hass.states[e.remaining] : undefined);
  return {
    on,
    heating,
    current: typeof a.current_temperature === "number" ? a.current_temperature : null,
    target: typeof a.temperature === "number" ? a.temperature : null,
    showers: num(e.showers ? hass.states[e.showers] : undefined),
    remaining: heating && remaining !== null && remaining > 0 ? remaining : null,
    eco: e.eco ? hass.states[e.eco]?.state === "on" : false,
  };
}
