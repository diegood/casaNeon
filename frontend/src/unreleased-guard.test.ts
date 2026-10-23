// Guard: nothing local or private is tracked by git.

import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import { join } from "node:path";
import { test } from "node:test";

const ROOT = join(import.meta.dirname, "..", "..");

test("no local test harness and nothing private is tracked by git", () => {
  // frontend/_*.mjs are local screenshot and probe scripts (they name private modules and local paths); private/ is
  // never public. Both slipped into a merge commit once.
  let tracked: string[];
  try {
    tracked = execSync("git ls-files", { cwd: ROOT, encoding: "utf8" }).split("\n");
  } catch {
    return; // not a git checkout (a release archive): nothing to check
  }
  const bad = tracked.filter((f) => /^frontend\/_[^/]+\.(m?js|mts|ts)$/.test(f) || f.startsWith("private/"));
  assert.deepEqual(bad, [], `tracked by git but must stay local: ${bad.join(", ")}`);
});
