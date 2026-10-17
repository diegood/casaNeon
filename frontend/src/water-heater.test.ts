import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";
import { heaterCapacity, heaterEntities, heaterState, maxShowers } from "./water-heater.ts";

// as the Ariston NET integration puts them on the device (from a real Velis Evo Wi-Fi)
const entity = (id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: id, state, attributes });
const ids = [
  "water_heater.calentador",
  "binary_sensor.ariston_is_heating",
  "binary_sensor.ariston_anti_legionella_cycle",
  "sensor.ariston_average_showers",
  "sensor.ariston_remaining_time",
  "switch.ariston_power",
  "switch.ariston_eco_mode",
  "switch.ariston_anti_legionella",
];
function hass(states: Record<string, ReturnType<typeof entity>>): HomeAssistant {
  return { states, entities: Object.fromEntries(ids.map((id) => [id, { entity_id: id, device_id: "velis" }])) } as unknown as HomeAssistant;
}
const base = {
  "water_heater.calentador": entity("water_heater.calentador", "MANUAL", { current_temperature: 55, temperature: 60, friendly_name: "Calentador" }),
  "binary_sensor.ariston_is_heating": entity("binary_sensor.ariston_is_heating", "on", { friendly_name: "Calentador Ariston is heating" }),
  "binary_sensor.ariston_anti_legionella_cycle": entity("binary_sensor.ariston_anti_legionella_cycle", "off"),
  "sensor.ariston_average_showers": entity("sensor.ariston_average_showers", "2", { friendly_name: "Calentador Ariston average showers" }),
  "sensor.ariston_remaining_time": entity("sensor.ariston_remaining_time", "23", { friendly_name: "Calentador Ariston remaining time", unit_of_measurement: "min" }),
  "switch.ariston_power": entity("switch.ariston_power", "on", { friendly_name: "Calentador Ariston power" }),
  "switch.ariston_eco_mode": entity("switch.ariston_eco_mode", "off", { friendly_name: "Calentador Ariston eco mode" }),
  "switch.ariston_anti_legionella": entity("switch.ariston_anti_legionella", "on", { friendly_name: "Calentador Ariston anti legionella" }),
};

test("the heater's siblings are found on its device by their names", () => {
  const e = heaterEntities(hass(base), { entity: "water_heater.calentador" });
  assert.deepEqual(e, {
    heater: "water_heater.calentador",
    heating: "binary_sensor.ariston_is_heating",
    showers: "sensor.ariston_average_showers",
    remaining: "sensor.ariston_remaining_time",
    power: "switch.ariston_power",
    eco: "switch.ariston_eco_mode",
  });
});

test("the state: temperatures, showers and the time left while it heats", () => {
  const h = hass(base);
  const st = heaterState(h, heaterEntities(h, { entity: "water_heater.calentador" }));
  assert.deepEqual(st, { on: true, heating: true, current: 55, target: 60, showers: 2, remaining: 23, eco: false });
});

test("switched off by its power switch: it neither heats nor counts down", () => {
  const h = hass({ ...base, "switch.ariston_power": entity("switch.ariston_power", "off") });
  const st = heaterState(h, heaterEntities(h, { entity: "water_heater.calentador" }))!;
  assert.equal(st.on, false);
  assert.equal(st.heating, false);
  assert.equal(st.remaining, null);
});

test("no heater or an unavailable one: no state", () => {
  const h = hass({ ...base, "water_heater.calentador": entity("water_heater.calentador", "unavailable") });
  assert.equal(heaterState(h, heaterEntities(h, { entity: "water_heater.calentador" })), null);
  assert.equal(heaterState(h, heaterEntities(h, { entity: null })), null);
});

test("capacity sets the size and the shower dots", () => {
  assert.equal(heaterCapacity({ variant: null }), "80");
  assert.equal(heaterCapacity({ variant: "100" }), "100");
  assert.equal(maxShowers({ variant: "50" }), 2);
  assert.equal(maxShowers({ variant: null }), 3);
});
