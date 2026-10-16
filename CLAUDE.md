# CasaNeon – notes for Claude

- Spec and phase plan: `docs/plan.md` (castellano). Talk to the user in castellano; code, identifiers and comments in English.
- Visible name **CasaNeon**; the domain, folder, card type and websocket commands stay `neonplan3d`. Repo `diegood/neonplan3d`,
  an unofficial fork of `Mastershort/neonplan3d` (installed through HACS as a custom repository), minimum Home Assistant 2025.1.
  The interface is Spanish only. No link to Mastershort (shop, licence, Discord, site); only the MIT copyright and the README's fork notice name them.
  Pack ids `mastershort.*` are data in saved plans and pack files: keep them.
- Frontend lives in `frontend/` (Lit 3 + TypeScript, no decorators; three.js in a separate lazily loaded bundle).
  Bundles are committed to `custom_components/neonplan3d/frontend/`; the pre-commit hook rebuilds and stages them (CI fails when they are stale).
- Checks: `npm test`, `npm run typecheck`, `npm run build` (size budgets), `ruff check` / `ruff format`; all run as pre-commit hooks
  (`.pre-commit-config.yaml`; set up with `python3 -m venv .venv && .venv/bin/pip install pre-commit && .venv/bin/pre-commit install`).
  HA integration tests only run in the Linux CI.
- Develop against the user's real Home Assistant: `npm run live` (settings in the untracked `live.local.json`, plan from a NeonPlan backup in `private/`).
- Own furniture and vehicles: generators in `packs/` write `.fp3dpack` files (signatures are not checked); import them under Extensiones.
- Visual self-check: `npm run screenshot` renders `preview/index.html` (invented demo data, mock hass) into `preview/screenshots/`.
- Release: add a `## X.Y.Z` section to `CHANGELOG.md`, then `scripts/release.sh X.Y.Z` (sets the manifest version, commits, tags, pushes);
  the Release workflow publishes the GitHub release with the zip HACS installs. Check CI, then tell the user in castellano what is new and how to test it.
