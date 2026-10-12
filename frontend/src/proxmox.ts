// Proxmox VE (the "proxmoxve" custom integration): its node, virtual machines, containers and disks, found
// by the integration and each entity's translation key (names are the user's and may be in any language).

import type { HassEntity, HomeAssistant } from "./types.ts";

export const PROXMOX_PLATFORM = "proxmoxve";

export interface ProxmoxInstance {
  /** The device of the VM or container in Home Assistant. */
  deviceId: string;
  name: string;
  vmid: number | null;
  kind: "vm" | "lxc";
  running: boolean;
  /** CPU and memory use in percent, disk use in percent; null when the sensor is missing or disabled. */
  cpu: number | null;
  memory: number | null;
  memoryUsed: string | null;
  disk: number | null;
  ip: string | null;
  /** When it started (ISO time), while it runs. */
  since: string | null;
  /** The integration reports a problem. */
  problem: boolean;
  /** The entity whose details open on a tap (its running state). */
  entity: string;
}

export interface ProxmoxNode {
  deviceId: string;
  name: string;
  online: boolean;
  cpu: number | null;
  memory: number | null;
  disk: number | null;
  load: number | null;
  vmsOn: number | null;
  lxcOn: number | null;
  updates: number | null;
  failedTasks: number | null;
  /** The entity that tells whether the node is up. */
  entity: string;
}

export interface ProxmoxDisk {
  deviceId: string;
  name: string;
  /** Health sensors (device class problem: on = a problem). */
  health: string[];
}

export interface ProxmoxModel {
  nodes: ProxmoxNode[];
  instances: ProxmoxInstance[];
  disks: ProxmoxDisk[];
}

/** The integration's entities by device, each keyed by its translation key (binary sensors apart from sensors). */
function byDevice(hass: HomeAssistant): Map<string, Map<string, string>> {
  const out = new Map<string, Map<string, string>>();
  for (const e of Object.values(hass.entities ?? {})) {
    if (e.platform !== PROXMOX_PLATFORM || !e.device_id || !e.translation_key) continue;
    const domain = e.entity_id.slice(0, e.entity_id.indexOf("."));
    if (domain !== "sensor" && domain !== "binary_sensor") continue;
    let keys = out.get(e.device_id);
    if (!keys) out.set(e.device_id, (keys = new Map()));
    const key = `${domain === "binary_sensor" ? "b:" : ""}${e.translation_key}`;
    // a key twice on one device (two logical volumes): keep the first, the rest go by number
    if (!keys.has(key)) keys.set(key, e.entity_id);
    else keys.set(`${key}#${e.entity_id}`, e.entity_id);
  }
  return out;
}

function usable(st: HassEntity | undefined): st is HassEntity {
  return !!st && st.state !== "unavailable" && st.state !== "unknown";
}

function num(hass: HomeAssistant, id: string | undefined): number | null {
  const st = id ? hass.states[id] : undefined;
  if (!usable(st)) return null;
  const v = Number(st.state);
  return Number.isFinite(v) ? v : null;
}

function deviceName(hass: HomeAssistant, deviceId: string): string {
  const d = hass.devices?.[deviceId];
  return d?.name_by_user || d?.name || deviceId;
}

/** "QEMU smartkingdom (100)" or "LXC docker (104)": the name and the VM id. */
export function instanceLabel(name: string): { name: string; vmid: number | null } {
  const m = /^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(name.trim());
  return m ? { name: m[1], vmid: Number(m[2]) } : { name: name.trim(), vmid: null };
}

const present = new WeakMap<object, boolean>();

/** Whether Home Assistant has the Proxmox VE integration's entities at all (once per registry). */
export function hasProxmox(hass: HomeAssistant | undefined): boolean {
  const reg = hass?.entities;
  if (!reg) return false;
  let has = present.get(reg);
  if (has === undefined) present.set(reg, (has = Object.values(reg).some((e) => e.platform === PROXMOX_PLATFORM)));
  return has;
}

/** Everything the integration reports, sorted by VM id. Empty without the integration. */
export function proxmoxModel(hass: HomeAssistant): ProxmoxModel {
  const nodes: ProxmoxNode[] = [];
  const instances: ProxmoxInstance[] = [];
  const disks: ProxmoxDisk[] = [];
  for (const [deviceId, keys] of byDevice(hass)) {
    const get = (k: string) => keys.get(k);
    if (get("node_status") || get("qemu_on") || get("lxc_on")) {
      const statusId = get("node_status") ?? get("b:status")!;
      const st = hass.states[statusId];
      const online = statusId === get("node_status") ? st?.state === "online" : st?.state === "on";
      nodes.push({
        deviceId,
        name: deviceName(hass, deviceId).replace(/^node\s+/i, ""),
        online,
        cpu: num(hass, get("cpu_used")),
        memory: num(hass, get("memory_used_perc")),
        disk: num(hass, get("disk_used_perc")),
        load: num(hass, get("load_1m")),
        vmsOn: num(hass, get("qemu_on")),
        lxcOn: num(hass, get("lxc_on")),
        updates: num(hass, get("updates_total")),
        failedTasks: num(hass, get("failed_tasks_count")),
        entity: statusId,
      });
    } else if (get("cpu_used") && (get("b:status") || get("status_raw"))) {
      const statusId = get("b:status") ?? get("status_raw")!;
      const st = hass.states[statusId];
      const running = statusId === get("b:status") ? st?.state === "on" : st?.state === "running";
      const model = hass.devices?.[deviceId]?.model ?? "";
      const label = instanceLabel(deviceName(hass, deviceId));
      const kind = /lxc/i.test(model) || /^lxc\b/i.test(deviceName(hass, deviceId)) ? "lxc" : "vm";
      const memUsed = get("memory_used") ? hass.states[get("memory_used")!] : undefined;
      const since = get("uptime") ? hass.states[get("uptime")!] : undefined;
      const ip = get("ip_address") ? hass.states[get("ip_address")!] : undefined;
      instances.push({
        deviceId,
        name: label.name,
        vmid: label.vmid,
        kind,
        running,
        cpu: running ? num(hass, get("cpu_used")) : null,
        memory: running ? num(hass, get("memory_used_perc")) : null,
        memoryUsed: running && usable(memUsed) ? `${Number(memUsed.state).toFixed(1)} ${memUsed.attributes.unit_of_measurement ?? ""}`.trim() : null,
        disk: num(hass, get("disk_used_perc")),
        ip: usable(ip) ? ip.state : null,
        since: running && usable(since) ? since.state : null,
        problem: hass.states[get("b:health") ?? ""]?.state === "on",
        entity: statusId,
      });
    } else {
      const health = [...keys].filter(([k]) => k === "b:health" || k.startsWith("b:health#")).map(([, id]) => id);
      if (health.length && [...keys.keys()].some((k) => k.startsWith("disk_size"))) disks.push({ deviceId, name: deviceName(hass, deviceId), health });
    }
  }
  instances.sort((a, b) => (a.vmid ?? 1e9) - (b.vmid ?? 1e9) || a.name.localeCompare(b.name));
  return { nodes, instances, disks };
}

/** Entities whose changes matter to the warnings: the nodes' and instances' states, the disks' health. */
export function proxmoxWatched(model: ProxmoxModel): string[] {
  return [...model.nodes.map((n) => n.entity), ...model.instances.map((i) => i.entity), ...model.disks.flatMap((d) => d.health)];
}

/** Instances seen running in this session: one that stops later raises a warning until it runs again. */
const seenRunning = new Set<string>();

/** The instances that were running and have stopped since (in this session); notes the running ones. */
export function stoppedInstances(model: ProxmoxModel): ProxmoxInstance[] {
  const out: ProxmoxInstance[] = [];
  for (const i of model.instances) {
    if (i.running) seenRunning.add(i.deviceId);
    else if (seenRunning.has(i.deviceId)) out.push(i);
  }
  return out;
}

/** Disk health sensors seen without a problem in this session. */
const seenHealthy = new Set<string>();

/**
 * Disk health sensors that turned to a problem in this session. A problem already there when the page opens
 * does not warn: behind a RAID controller (an HP Smart Array) Proxmox cannot read the disks' health, and the
 * integration reports that as a lasting problem.
 */
export function newDiskProblems(hass: HomeAssistant, model: ProxmoxModel): { disk: ProxmoxDisk; entity: string }[] {
  const out: { disk: ProxmoxDisk; entity: string }[] = [];
  for (const disk of model.disks) {
    for (const id of disk.health) {
      const state = hass.states[id]?.state;
      if (state === "off") seenHealthy.add(id);
      else if (state === "on" && seenHealthy.has(id)) out.push({ disk, entity: id });
    }
  }
  return out;
}

/** Forget what was seen running or healthy (tests). */
export function resetSeenRunning(): void {
  seenRunning.clear();
  seenHealthy.clear();
}

/** How long since a moment (ISO time): "2 d 3 h", "3 h 12 min", "12 min". */
export function sinceText(iso: string, now = Date.now()): string {
  const s = Math.max(0, (now - Date.parse(iso)) / 1000);
  if (!Number.isFinite(s)) return "–";
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d) return `${d} d ${h} h`;
  if (h) return `${h} h ${m} min`;
  return `${m} min`;
}
