import assert from "node:assert/strict";
import { test } from "node:test";
import { clearModules, loadedModules, MODULE_API, moduleVoice, registerModule, type ModuleHost } from "./modules.ts";

const host = {
  api: MODULE_API,
  hass: () => ({}) as never,
  building: () => null,
  language: () => "de",
  devices: () => [],
  findDevice: () => null,
  openings: () => [],
  energy: () => null,
  consumers: () => [{ id: "switch.a", entity: "sensor.a_w", name: "Waschmaschine", watts: 430 }],
} as ModuleHost;

test("voice modules are asked in turn; the first answer wins, a failing one is skipped", async () => {
  clearModules();
  registerModule({ api: MODULE_API, id: "broken", voice: () => { throw new Error("boom"); } });
  registerModule({ api: MODULE_API, id: "quiet", voice: () => null });
  registerModule({ api: MODULE_API, id: "answers", voice: (s, h) => (s.includes("strom") ? { text: `${h.consumers()[0].name}: ${h.consumers()[0].watts} W`, highlight: ["switch.a"] } : null) });
  assert.deepEqual(loadedModules().map((m) => m.id), ["broken", "quiet", "answers"]);
  const a = await moduleVoice("was zieht strom", host);
  assert.equal(a?.text, "Waschmaschine: 430 W");
  assert.deepEqual(a?.highlight, ["switch.a"]);
  assert.equal(await moduleVoice("wie spät ist es", host), null);
  clearModules();
  assert.equal(loadedModules().length, 0);
});
