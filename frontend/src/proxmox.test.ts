import assert from "node:assert/strict";
import { test } from "node:test";
import { alertSources, alertText, findAlerts } from "./alerts.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import { hasProxmox, instanceLabel, newDiskProblems, proxmoxModel, resetSeenRunning, sinceText, stoppedInstances } from "./proxmox.ts";
import type { HomeAssistant } from "./types.ts";

/** A small Proxmox VE setup: a node, a VM, a container and a disk (entity names in Spanish, like the user's). */
function setup(): HomeAssistant {
  const states: Record<string, { entity_id: string; state: string; attributes: Record<string, unknown> }> = {};
  const entities: Record<string, unknown> = {};
  const add = (entity_id: string, device_id: string, translation_key: string, state: string, attributes: Record<string, unknown> = {}) => {
    states[entity_id] = { entity_id, state, attributes };
    entities[entity_id] = { entity_id, device_id, translation_key, platform: "proxmoxve" };
  };
  add("sensor.node_server_status", "node", "node_status", "online");
  add("sensor.node_server_cpu_utilizada", "node", "cpu_used", "9.9", { unit_of_measurement: "%" });
  add("sensor.node_server_contenedores_ejecutandose", "node", "lxc_on", "1");
  add("sensor.node_server_failed_tasks", "node", "failed_tasks_count", "1");
  add("binary_sensor.qemu_web_100_estado", "vm", "status", "on", { device_class: "running" });
  add("sensor.qemu_web_100_cpu_utilizada", "vm", "cpu_used", "12.5");
  add("sensor.qemu_web_100_porcentaje_de_memoria_libre_2", "vm", "memory_used_perc", "64.6");
  add("sensor.qemu_web_100_ip_address", "vm", "ip_address", "10.0.10.10");
  add("binary_sensor.qemu_web_100_salud", "vm", "health", "off", { device_class: "problem" });
  add("binary_sensor.lxc_db_101_estado", "ct", "status", "off", { device_class: "running" });
  add("sensor.lxc_db_101_cpu_utilizada", "ct", "cpu_used", "0");
  add("binary_sensor.disk_lv_salud", "disk", "health", "off", { device_class: "problem" });
  add("sensor.disk_lv_tamano", "disk", "disk_size", "1200");
  // a sensor of another integration is never part of it
  states["sensor.cpu"] = { entity_id: "sensor.cpu", state: "3", attributes: {} };
  entities["sensor.cpu"] = { entity_id: "sensor.cpu", device_id: "vm", translation_key: "cpu_used", platform: "systemmonitor" };
  return {
    language: "es",
    states,
    entities,
    devices: {
      node: { id: "node", name: "Node server" },
      vm: { id: "vm", name: "QEMU web (100)", model: "QEMU" },
      ct: { id: "ct", name: "LXC db (101)", model: "LXC" },
      disk: { id: "disk", name: "Disk server: LOGICAL VOLUME" },
    },
  } as unknown as HomeAssistant;
}

test("the node, VMs, containers and disks come from the integration's translation keys", () => {
  const hass = setup();
  assert.equal(hasProxmox(hass), true);
  assert.equal(hasProxmox({ ...hass, entities: {} } as HomeAssistant), false);
  const m = proxmoxModel(hass);
  assert.deepEqual(
    m.nodes.map((n) => [n.name, n.online, n.cpu, n.lxcOn, n.failedTasks]),
    [["server", true, 9.9, 1, 1]],
  );
  assert.deepEqual(
    m.instances.map((i) => [i.vmid, i.kind, i.name, i.running, i.cpu, i.memory, i.ip]),
    [
      [100, "vm", "web", true, 12.5, 64.6, "10.0.10.10"],
      [101, "lxc", "db", false, null, null, null],
    ],
  );
  assert.deepEqual(m.disks.map((d) => d.health), [["binary_sensor.disk_lv_salud"]]);
  assert.deepEqual(instanceLabel("LXC MQTT-Broker (105)"), { name: "MQTT-Broker", vmid: 105 });
  assert.deepEqual(instanceLabel("otra cosa"), { name: "otra cosa", vmid: null });
});

test("a VM that was running and stops, and a disk that turns unhealthy, warn; a lasting problem does not", () => {
  resetSeenRunning();
  const hass = setup();
  assert.deepEqual(stoppedInstances(proxmoxModel(hass)), []);
  hass.states["binary_sensor.qemu_web_100_estado"].state = "off";
  assert.deepEqual(stoppedInstances(proxmoxModel(hass)).map((i) => i.name), ["web"]);
  // the container was never seen running: no warning
  assert.ok(!stoppedInstances(proxmoxModel(hass)).some((i) => i.name === "db"));
  // a disk already unhealthy when the page opens (a RAID controller) stays quiet
  resetSeenRunning();
  hass.states["binary_sensor.disk_lv_salud"].state = "on";
  assert.deepEqual(newDiskProblems(hass, proxmoxModel(hass)), []);
  hass.states["binary_sensor.disk_lv_salud"].state = "off";
  newDiskProblems(hass, proxmoxModel(hass));
  hass.states["binary_sensor.disk_lv_salud"].state = "on";
  assert.equal(newDiskProblems(hass, proxmoxModel(hass)).length, 1);
  resetSeenRunning();
});

test("Proxmox warnings point at the rack's room and name the VM", () => {
  resetSeenRunning();
  const hass = setup();
  const b = emptyBuilding();
  const floor = newFloor("eg", "PB", 0);
  floor.rooms = [{ id: "r", name: "Oficina", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.furniture = [{ id: "rack", type: "pack:diegood.muebles:server_rack", x: 1, z: 1, rotation: 0, w: 0.6, d: 0.8, h: 1.05, variant: null, entity: null, power: null }];
  b.floors = [floor];
  const src = alertSources(hass, b);
  assert.ok(src.proxmox?.ids.includes("binary_sensor.qemu_web_100_estado"));
  assert.deepEqual(findAlerts(hass, b, src, new Map()), []);
  hass.states["binary_sensor.qemu_web_100_estado"].state = "off";
  hass.states["sensor.node_server_status"].state = "offline";
  const alerts = findAlerts(hass, b, src, new Map());
  assert.deepEqual(alerts.map((a) => [a.kind, a.roomId]), [["pve_node_down", "r"], ["pve_stopped", "r"]]);
  assert.equal(alertText(hass, b, alerts[0]), "Oficina · Proxmox sin conexión: server");
  assert.equal(alertText(hass, b, alerts[1]), "Oficina · Se ha parado: web (100)");
  resetSeenRunning();
});

test("time since a start reads short", () => {
  const now = Date.parse("2026-10-12T18:00:00Z");
  assert.equal(sinceText("2026-10-12T17:48:00Z", now), "12 min");
  assert.equal(sinceText("2026-10-12T15:50:00Z", now), "2 h 10 min");
  assert.equal(sinceText("2026-10-09T15:00:00Z", now), "3 d 3 h");
});
