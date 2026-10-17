import assert from "node:assert/strict";
import { test } from "node:test";
import { apChoices, apEntities, apRing, apState, isAccessPoint } from "./access-point.ts";
import type { HomeAssistant } from "./types.ts";

// as the UniFi Network integration puts them on an access point's device (a real U7 Lite)
const OPTIONS = ["disconnected", "connected", "pending", "firmware_mismatch", "upgrading", "provisioning", "heartbeat_missed", "adopting"];
const entity = (id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: id, state, attributes });
const base = {
  "device_tracker.u7_lite": entity("device_tracker.u7_lite", "home", { friendly_name: "U7 AP Garage" }),
  "sensor.u7_lite_estado": entity("sensor.u7_lite_estado", "connected", { device_class: "enum", options: OPTIONS, friendly_name: "U7 AP Garage Estado" }),
  "sensor.u7_lite_clientes": entity("sensor.u7_lite_clientes", "14", { friendly_name: "U7 AP Garage Clientes" }),
  "light.u7_ap_garage_led": entity("light.u7_ap_garage_led", "on", { friendly_name: "U7 AP Garage LED" }),
  "sensor.u7_ap_garage_utilizacion_de_la_cpu": entity("sensor.u7_ap_garage_utilizacion_de_la_cpu", "4.7", { unit_of_measurement: "%", friendly_name: "U7 AP Garage Utilización de la CPU" }),
  "sensor.u7_ap_garage_utilizacion_de_la_memoria": entity("sensor.u7_ap_garage_utilizacion_de_la_memoria", "82.8", { unit_of_measurement: "%", friendly_name: "U7 AP Garage Utilización de la memoria" }),
  "button.u7_lite_reiniciar": entity("button.u7_lite_reiniciar", "unknown", { device_class: "restart", friendly_name: "U7 AP Garage Reiniciar" }),
  "sensor.temperatura_salon": entity("sensor.temperatura_salon", "21"),
};
// a port's link speed on the same device (it came first and was taken for the clients)
const withLinkSpeed = { "sensor.velocidad_del_enlace_10": entity("sensor.velocidad_del_enlace_10", "1000", { friendly_name: "UniFi client link speed" }), ...base };
function hass(states: Record<string, ReturnType<typeof entity>>): HomeAssistant {
  const entities = Object.fromEntries(Object.keys(states).map((id) => [id, { entity_id: id, device_id: id === "sensor.temperatura_salon" ? "other" : "u7" }]));
  return { states, entities } as unknown as HomeAssistant;
}

test("an access point's entities are found beside any of them", () => {
  const h = hass(base);
  const expected = {
    state: "sensor.u7_lite_estado",
    clients: "sensor.u7_lite_clientes",
    led: "light.u7_ap_garage_led",
    cpu: "sensor.u7_ap_garage_utilizacion_de_la_cpu",
    memory: "sensor.u7_ap_garage_utilizacion_de_la_memoria",
    restart: "button.u7_lite_reiniciar",
  };
  assert.deepEqual(apEntities(h, { entity: "device_tracker.u7_lite" }), expected);
  assert.deepEqual(apEntities(h, { entity: "light.u7_ap_garage_led" }), expected);
  const h2 = hass(withLinkSpeed);
  assert.equal(apEntities(h2, { entity: "device_tracker.u7_lite" }).clients, "sensor.u7_lite_clientes");
  assert.equal(isAccessPoint(h, "device_tracker.u7_lite"), true);
  assert.equal(isAccessPoint(h, "sensor.temperatura_salon"), false);
});

test("connected with its LED on: a blue ring, its clients and load", () => {
  const h = hass(base);
  const s = apState(h, apEntities(h, { entity: "device_tracker.u7_lite" }))!;
  assert.deepEqual(s, { status: "up", led: true, clients: 14, cpu: 4.7, memory: 82.8 });
  assert.deepEqual(apRing(s), [0.35, 0.65, 1]);
});

test("LED off: no ring; offline: red whatever the LED; updating: amber", () => {
  const off = hass({ ...base, "light.u7_ap_garage_led": entity("light.u7_ap_garage_led", "off") });
  assert.equal(apRing(apState(off, apEntities(off, { entity: "device_tracker.u7_lite" }))!), null);
  const down = hass({ ...base, "light.u7_ap_garage_led": entity("light.u7_ap_garage_led", "off"), "sensor.u7_lite_estado": entity("sensor.u7_lite_estado", "disconnected", { options: OPTIONS }) });
  const ds = apState(down, apEntities(down, { entity: "device_tracker.u7_lite" }))!;
  assert.equal(ds.status, "down");
  assert.deepEqual(apRing(ds), [1, 0.22, 0.25]);
  const busy = hass({ ...base, "sensor.u7_lite_estado": entity("sensor.u7_lite_estado", "upgrading", { options: OPTIONS }) });
  assert.equal(apState(busy, apEntities(busy, { entity: "device_tracker.u7_lite" }))!.status, "busy");
});

test("the editor offers each access point once, by its device's name", () => {
  const states = {
    ...base,
    // the same AP seen as a client of the network: not the one to offer
    "device_tracker.unifi_default_90_41_b2_0a_cf_c6": entity("device_tracker.unifi_default_90_41_b2_0a_cf_c6", "home"),
  };
  const h = hass(states) as unknown as { devices: Record<string, unknown> };
  h.devices = { u7: { name: "U7 AP Garage", name_by_user: null } };
  assert.deepEqual(apChoices(h as unknown as HomeAssistant), [{ id: "device_tracker.u7_lite", label: "U7 AP Garage" }]);
});
