# Builds a NeonPlan 3D pack with one vehicle, a Volvo V60 (2018+), from real dimensions in metres.
# Usage: python3 packs/make_volvo_v60.py packs/volvo-v60.fp3dpack, then import the file under Extensiones.
import json
import sys

W, D, H = 1.85, 4.76, 1.43  # width (x), length (z, front at +z), height (y)
WB, FRONT_OH = 2.872, 0.86  # wheelbase, front overhang
ZF = D / 2 - FRONT_OH  # front axle
ZR = ZF - WB  # rear axle
TYRE, TYRE_W, RIM = 0.67, 0.235, 0.46
TRACK_X = 0.795
HEAD, TAIL, GLASS = "#e8f4ff", "#ff3b4f", "#13283a"

parts = []


def box(x0, x1, y0, y1, z0, z1, color, edges=False, top=None):
    p = {
        "shape": "box",
        "x": round((x0 + x1) / 2 / W, 4),
        "z": round((z0 + z1) / 2 / D, 4),
        "w": round((x1 - x0) / W, 4),
        "d": round((z1 - z0) / D, 4),
        "y": round(y0 / H, 4),
        "h": round((y1 - y0) / H, 4),
        "color": color,
    }
    if edges:
        p["edges"] = edges
    if top:
        p["top"] = top
    parts.append(p)


def loft(x0, x1, z0, z1, tx0, tx1, tz0, tz1, y0, y1, color, edges=False):
    parts.append(
        {
            "shape": "loft",
            "x": round((x0 + x1) / 2 / W, 4),
            "z": round((z0 + z1) / 2 / D, 4),
            "w": round((x1 - x0) / W, 4),
            "d": round((z1 - z0) / D, 4),
            "tx": round((tx0 + tx1) / 2 / W, 4),
            "tz": round((tz0 + tz1) / 2 / D, 4),
            "tw": round((tx1 - tx0) / W, 4),
            "td": round((tz1 - tz0) / D, 4),
            "y": round(y0 / H, 4),
            "h": round((y1 - y0) / H, 4),
            "color": color,
            **({"edges": edges} if edges else {}),
        }
    )


def wheel(x, z, dia, width, y0, color, edges=False):
    p = {
        "shape": "cyl",
        "axis": "x",
        "x": round(x / W, 4),
        "z": round(z / D, 4),
        "w": round(width / W, 4),
        "d": round(dia / D, 4),
        "y": round(y0 / H, 4),
        "h": round(dia / H, 4),
        "color": color,
    }
    if edges:
        p["edges"] = edges
    parts.append(p)


hw = W / 2
# lower body: sills to the shoulder, bumpers a touch longer
box(-hw, hw, 0.22, 0.70, -2.33, 2.30, "body", True)
# shoulder up to the belt line, the hood sloping down to the nose
loft(-hw, hw, -2.33, 2.30, -hw + 0.02, hw - 0.02, -2.33, 1.95, 0.70, 0.90, "body", True)
# bumpers (dark lower lips) front and rear
box(-hw + 0.03, hw - 0.03, 0.16, 0.42, 2.20, 2.38, "dark", "faint")
box(-hw + 0.03, hw - 0.03, 0.16, 0.42, -2.38, -2.25, "dark", "faint")
# greenhouse: long estate roof, raked windscreen, near-upright tailgate (glass, glows with the climate)
loft(-hw + 0.06, hw - 0.06, -2.30, 0.78, -0.72, 0.72, -2.08, 0.02, 0.90, 1.37, GLASS, "faint")
# roof panel and roof rails
box(-0.70, 0.70, 1.36, 1.39, -2.06, 0.00, "body", True)
box(-0.66, -0.60, 1.39, 1.43, -1.95, -0.10, "metal")
box(0.60, 0.66, 1.39, 1.43, -1.95, -0.10, "metal")
# B pillar band across the roof line (splits front and rear doors)
loft(-hw + 0.07, hw - 0.07, -0.42, -0.30, -0.73, 0.73, -0.42, -0.30, 0.90, 1.36, "body")
# grille and the iron mark
box(-0.34, 0.34, 0.42, 0.64, 2.29, 2.36, "dark", "faint")
box(-0.05, 0.05, 0.50, 0.58, 2.355, 2.37, "metal")
# headlights ("Thor's hammer"): bright blocks at the front corners
box(-0.86, -0.46, 0.62, 0.70, 2.24, 2.33, HEAD, "glow")
box(0.46, 0.86, 0.62, 0.70, 2.24, 2.33, HEAD, "glow")
# taillights: the tall C shapes up the rear pillars
box(-0.90, -0.74, 0.62, 1.10, -2.36, -2.28, TAIL, "glow")
box(0.74, 0.90, 0.62, 1.10, -2.36, -2.28, TAIL, "glow")
# number plates
box(-0.26, 0.26, 0.47, 0.58, 2.37, 2.38, "#d9e2ee")
box(-0.26, 0.26, 0.48, 0.59, -2.38, -2.37, "#d9e2ee")
# door mirrors
box(-0.92, -0.80, 0.88, 0.98, 0.62, 0.78, "body", True)
box(0.80, 0.92, 0.88, 0.98, 0.62, 0.78, "body", True)
# wheels: tyres and rims
for z in (ZF, ZR):
    for side in (-1, 1):
        wheel(side * TRACK_X, z, TYRE, TYRE_W, 0.0, "dark", "faint")
        wheel(side * (TRACK_X + 0.005), z, RIM, TYRE_W + 0.01, (TYRE - RIM) / 2, "metal", True)

for p in parts:
    for k in ("x", "z", "tx", "tz"):
        assert -0.5 <= p.get(k, 0) <= 0.5, (k, p)
    assert 0 <= p["y"] <= 1 and 0 < p["h"] <= 1 and p["y"] + p["h"] <= 1.0001, p
assert len(parts) <= 60

symbol = [
    {"shape": "rect", "x": 0, "z": 0, "w": 1, "d": 1},
    {"shape": "rect", "x": 0, "z": round((-2.30 + 0.78) / 2 / D, 4), "w": 0.86, "d": round((0.78 + 2.30) / D, 4)},
    {"shape": "line", "x1": -0.4, "z1": round(1.95 / D, 4), "x2": 0.4, "z2": round(1.95 / D, 4)},
]
payload = {
    "format": "fp3dpack",
    "version": 1,
    "id": "diegood.vehicles",
    "name": "Vehículos",
    "publisher": "diegood",
    "description": "Volvo V60 (2018+) a escala real",
    "items": [
        {
            "id": "volvo_v60",
            "name": {"es": "Volvo V60", "en": "Volvo V60"},
            "size": [W, D, H],
            "vehicle": True,
            "parts": parts,
            "symbol": symbol,
        }
    ],
}
with open(sys.argv[1], "w") as out:
    json.dump({"payload": payload}, out, ensure_ascii=False, indent=1)
print(len(parts), "parts")
