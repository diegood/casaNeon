import assert from "node:assert/strict";
import { test } from "node:test";
import { hasFeature, manualUrl, unlockedFeatures } from "./features.ts";

test("every released feature is unlocked without any pack", () => {
  for (const f of ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro", "time_travel", "fridge_smart"] as const) assert.equal(hasFeature(f), true);
  assert.deepEqual([...unlockedFeatures()].sort(), ["auto_pro", "camera_cockpit", "energy_pro", "fridge_smart", "screens", "sound", "time_travel", "weather"]);
});

test("manual links point Pro add-ons at their section on GitHub", () => {
  assert.equal(manualUrl(), "https://github.com/diegood/neonplan3d/blob/main/docs/manual.md");
  assert.equal(manualUrl("time_travel"), "https://github.com/diegood/neonplan3d/blob/main/docs/manual.md#67-time-travel");
  assert.equal(manualUrl("camera_cockpit"), "https://github.com/diegood/neonplan3d/blob/main/docs/manual.md#61-camera-cockpit");
});

test("an unreleased add-on stays locked and hidden, even with its pack", async () => {
  const { released, UNRELEASED } = await import("./features.ts");
  const { setPacks } = await import("./packs.ts");
  assert.ok(UNRELEASED.includes("pool"));
  setPacks([{ id: "mastershort.pro_pool", name: "Pro: Pool Pro", items: [], features: ["pool"] } as never]);
  assert.equal(released("pool"), false);
  assert.equal(hasFeature("pool"), false);
  assert.equal(released("auto_pro"), true);
  setPacks([]);
});
