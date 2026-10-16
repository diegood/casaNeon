import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";
import { switchKeyAt, switchKeyOn, switchKeys, switchWidth } from "./wall-switch.ts";

test("a wall switch has one to four keys", () => {
  assert.deepEqual(switchKeys({}), [null]);
  assert.deepEqual(switchKeys({ switch_keys: ["light.a", "none", null] }), ["light.a", null, null]);
  assert.equal(switchKeys({ switch_keys: ["a", "b", "c", "d", "e"] }).length, 4);
});

test("more keys make the plate wider", () => {
  assert.equal(switchWidth(1), 0.086);
  assert.equal(switchWidth(2), 0.157);
  assert.equal(switchWidth(4), 0.299);
  assert.equal(switchWidth(9), 0.299);
});

test("a tap finds its key along the plate, turned and mirrored too", () => {
  const plate = { x: 2, z: 1, rotation: 0, w: 0.3, mirror: false, switch_keys: ["a", "b", "c"] };
  assert.equal(switchKeyAt(plate, 2 - 0.12, 1), 0);
  assert.equal(switchKeyAt(plate, 2, 1), 1);
  assert.equal(switchKeyAt(plate, 2 + 0.12, 1), 2);
  // beyond the edge: the outer key
  assert.equal(switchKeyAt(plate, 3, 1), 2);
  // turned by 90°: the plate's x runs along the plan's z
  assert.equal(switchKeyAt({ ...plate, rotation: 90 }, 2, 1 + 0.12), 2);
  assert.equal(switchKeyAt({ ...plate, mirror: true }, 2 + 0.12, 1), 0);
});

test("a key's LED glows while its entity is on or its cover open", () => {
  const hass = { states: { "light.a": { state: "on" }, "cover.b": { state: "open" }, "switch.c": { state: "off" } } } as unknown as HomeAssistant;
  assert.equal(switchKeyOn(hass, "light.a"), true);
  assert.equal(switchKeyOn(hass, "cover.b"), true);
  assert.equal(switchKeyOn(hass, "switch.c"), false);
  assert.equal(switchKeyOn(hass, null), false);
});
