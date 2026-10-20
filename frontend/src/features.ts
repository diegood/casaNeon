/**
 * Pro features: every feature is unlocked, no pack or licence needed. Only add-ons not released yet
 * (UNRELEASED) stay hidden unless the lab switch is on.
 */

export type Feature = "camera_cockpit" | "weather" | "screens" | "energy_pro" | "sound" | "auto_pro" | "time_travel" | "pool" | "household" | "fridge_smart" | "fun_pets" | "fun_halloween";

/** The add-ons shown on the extensions page. */
export const FEATURES: readonly Feature[] = ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro", "time_travel", "pool", "household"];
/** Fun packs: free extras, shown in their own section of the extensions page and switched on and off there. */
export const FUN: readonly Feature[] = ["fun_pets", "fun_halloween"];

/**
 * Pro add-ons built but not released yet: they show nowhere (extensions page, teasers) unless the lab
 * switch is on (localStorage "neonplan3d.lab" = "1"). A release takes a feature off this list.
 */
export const UNRELEASED: readonly Feature[] = ["pool"];

export function labOn(): boolean {
  try {
    // "?fp3d_lab=1" in the address bar switches it on (and "=0" off) – easier than the browser console on a tablet
    const flag = new URLSearchParams(location.search).get("fp3d_lab");
    if (flag === "1") localStorage.setItem("neonplan3d.lab", "1");
    else if (flag === "0") localStorage.removeItem("neonplan3d.lab");
    return localStorage.getItem("neonplan3d.lab") === "1";
  } catch {
    return false;
  }
}

/** The parked camera projection prototype: only with its own switch ("?fp3d_projection=1", "=0" off), off by default. */
export function projectionOn(): boolean {
  try {
    const flag = new URLSearchParams(location.search).get("fp3d_projection");
    if (flag === "1") localStorage.setItem("neonplan3d.projection", "1");
    else if (flag === "0") localStorage.removeItem("neonplan3d.projection");
    return localStorage.getItem("neonplan3d.projection") === "1";
  } catch {
    return false;
  }
}


/** Whether an add-on may be shown: released, or the lab switch is on. */
export function released(feature: Feature): boolean {
  return !UNRELEASED.includes(feature) || labOn();
}

/** Features unlocked by a pack but not listed anywhere (exclusive items). */
const HIDDEN: readonly Feature[] = ["fridge_smart"];

/** Whether this frontend knows a feature key at all (an older bundle does not know newer Pro add-ons). */
export function knownFeature(key: string): boolean {
  return (FEATURES as readonly string[]).includes(key) || (HIDDEN as readonly string[]).includes(key) || (FUN as readonly string[]).includes(key);
}

/** The manual on GitHub (English). */
const MANUAL = "https://github.com/diegood/neonplan3d/blob/main/docs/manual.md";

/** Where each Pro add-on is described in chapter 6 of the manual (GitHub heading anchors). */
const MANUAL_ANCHOR: Record<string, string> = {
  camera_cockpit: "61-camera-cockpit",
  weather: "62-weather-outside",
  screens: "63-live-screens",
  energy_pro: "64-energy-pro",
  sound: "65-sound--cinema",
  auto_pro: "66-car-pro",
  time_travel: "67-time-travel",
  pool: "6-pro-add-ons",
  household: "68-household-pro-beta",
  extensions: "7-extensions-shop-and-furniture-packs",
};

/** The manual, optionally at a Pro add-on's section or the extensions chapter. */
export function manualUrl(topic?: Feature | "extensions"): string {
  const anchor = topic ? MANUAL_ANCHOR[topic] : undefined;
  return anchor ? `${MANUAL}#${anchor}` : MANUAL;
}

/** The unlocked features: all of them, except add-ons not released yet. */
export function unlockedFeatures(): Set<Feature> {
  return new Set([...FEATURES, ...HIDDEN, ...FUN].filter(released));
}

export function hasFeature(feature: Feature): boolean {
  return released(feature);
}
