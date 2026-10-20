# CasaNeon

> [!WARNING]
> **This is an unofficial fork of [NeonPlan 3D](https://github.com/Mastershort/neonplan3d).** It is not affiliated with or supported by the original author. If you want the official integration, its updates and its support, use the [official repository](https://github.com/Mastershort/neonplan3d).
>
> **Esto es un fork no oficial de [NeonPlan 3D](https://github.com/Mastershort/neonplan3d).** No está vinculado ni tiene soporte del autor original. Si quieres la integración oficial, sus actualizaciones y su soporte, ve al [repositorio oficial](https://github.com/Mastershort/neonplan3d).

**Remake by diegood.**

## Installation

### Manual

Copy `custom_components/neonplan3d` into `config/custom_components/` and restart Home Assistant.

Requires Home Assistant 2025.1 or newer.

## Dashboard card

All options can be set in the card's visual editor; in YAML:

```yaml
type: custom:neonplan3d-card
floor: floor_ab12cd34   # optional: show a single floor (id from the editor)
height: 420             # optional: height in pixels
fill: false             # optional: fill the screen below the dashboard header instead of a height
walls: auto             # optional: auto | cut
explode: true           # optional: pull floors apart in the house view
floor_stack: dim        # optional: floors below an opened floor: dim | stacked | single
quality: auto           # optional: auto | low | high
theme: neon             # optional: neon | blueprint | day
markers: important      # optional: none | important | all
heatmap: none           # optional: none | temperature | humidity | co2
room_panel: true        # optional: tapping a room opens its details
room_names: true        # optional: room names in 3D
controls: true          # optional: switches in the card, or a list of walls, floors, temperature, humidity, co2
floor_thumbs: true      # optional: floor pictures to switch floors
fullscreen_button: false
stats: false            # optional: performance display
alerts: true            # optional: smoke, gas, CO, water, alarm and windows open in the rain pulse
alert_jump: false       # optional: jump to the room of a new warning
scenes: true            # optional: scene and script buttons of the selected room
motion_trail: false     # optional: motion of the last 30 minutes (Pro: camera cockpit)
weather: true           # optional: weather outside (Pro: weather)
weather_entity: weather.home   # optional: which weather entity (default: as set in the plan)
idle_return: 0          # optional: kiosk – seconds without a touch until the start view returns
night: "off"            # optional: kiosk – dim at night: off | sun | "22:00-06:00"
idle_orbit: false       # optional: kiosk – slow camera turn after the idle return
```

## Privacy

CasaNeon stores the plan, its pictures and the packs in Home Assistant's `.storage`. It does not connect to any shop or licence server.

## Development

```bash
cd frontend
npm install
npm test            # pure logic
npm run typecheck
npm run build       # writes the bundles to custom_components/neonplan3d/frontend (committed)
npm run screenshot  # renders preview/index.html (invented demo data) with a local Chrome or Edge
```

- **Preview without Home Assistant**: open `preview/index.html` through any local web server.
- **Deploy to a test instance**: create `deploy.local.json` with `{"target": "<config>/custom_components/neonplan3d"}` and run `npm run deploy` in `frontend/`.
- **Python tests** run in CI with `pytest-homeassistant-custom-component`.
- **Furniture pack format**: [docs/packs.md](docs/packs.md) (German).

## Ideas, questions and bugs

Open an issue in [this repository](https://github.com/diegood/neonplan3d/issues), not in the official one.

## Licence

MIT – see [LICENSE](LICENSE). Based on NeonPlan 3D, © 2026 Mastershort. The furniture packs in `packs/nextfloor/` come from [NextFloor](https://github.com/therealMRBK/NextFloor) by therealMRBK (MIT, see [their licence](packs/nextfloor/LICENSE)).
