# Builds the "Muebles" pack: furniture modelled in metres and written as a NeonPlan 3D pack.
# Usage: python3 packs/make_muebles.py packs/muebles.fp3dpack, then import the file under Extensiones.
import json
import sys


class Item:
    """Parts in metres (x across, z depth with the front at +z, y up), stored as fractions of the size."""

    def __init__(self, item_id, names, w, d, h, electric=False, mount=None):
        self.id, self.names, self.W, self.D, self.H = item_id, names, w, d, h
        self.electric, self.mount = electric, mount
        self.parts, self.symbol = [], []

    def _frac(self, x0, x1, y0, y1, z0, z1):
        return {
            "x": round((x0 + x1) / 2 / self.W, 4),
            "z": round((z0 + z1) / 2 / self.D, 4),
            "w": round((x1 - x0) / self.W, 4),
            "d": round((z1 - z0) / self.D, 4),
            "y": round(y0 / self.H, 4),
            "h": round((y1 - y0) / self.H, 4),
        }

    def box(self, x0, x1, y0, y1, z0, z1, color, edges=False, top=None, rot=None):
        p = {"shape": "box", **self._frac(x0, x1, y0, y1, z0, z1), "color": color}
        if edges:
            p["edges"] = edges
        if top:
            p["top"] = top
        if rot:
            p["rot"] = rot
        self.parts.append(p)

    def cyl(self, x, z, dia, y0, y1, color, edges=False):
        p = {"shape": "cyl", **self._frac(x - dia / 2, x + dia / 2, y0, y1, z - dia / 2, z + dia / 2), "color": color}
        if edges:
            p["edges"] = edges
        self.parts.append(p)

    def rect(self, x0, x1, z0, z1):
        f = self._frac(x0, x1, 0, self.H, z0, z1)
        self.symbol.append({"shape": "rect", "x": f["x"], "z": f["z"], "w": f["w"], "d": f["d"]})

    def payload(self):
        for p in self.parts:
            assert -0.5 <= p["x"] <= 0.5 and -0.5 <= p["z"] <= 0.5, p
            assert p["y"] >= 0 and p["h"] > 0 and p["y"] + p["h"] <= 1.0001, p
        assert len(self.parts) <= 60
        out = {"id": self.id, "name": self.names, "size": [self.W, self.D, self.H], "parts": self.parts}
        if self.electric:
            out["electric"] = True
        if self.mount:
            out["mount"] = self.mount
        if self.symbol:
            out["symbol"] = self.symbol
        return out


def kids_desk():
    # a child's desk (1.0 x 0.55 m, top at 0.62 m) with a tall back panel and its chair in front
    it = Item(
        "kids_desk", {"es": "Escritorio infantil", "de": "Kinderschreibtisch", "en": "Kids' desk"}, 1.0, 0.85, 0.95
    )
    navy, navy_top, leg = "#22336a", "#2b3f7d", "#1c2a58"
    back, front = -0.425, 0.125
    it.box(-0.5, 0.5, 0.58, 0.62, back, front, navy, True, navy_top)  # top
    it.box(-0.48, -0.44, 0.0, 0.58, back + 0.03, front - 0.03, leg, True)  # left side panel
    it.box(0.22, 0.48, 0.0, 0.58, back + 0.03, front - 0.03, leg, True)  # drawer pedestal on the right
    it.box(0.24, 0.46, 0.30, 0.31, front - 0.035, front - 0.025, "#3a4f92")  # its drawer line
    it.box(-0.48, 0.48, 0.62, 0.95, back, back + 0.03, "#3aa0e8", True)  # light blue back panel
    it.cyl(-0.18, -0.26, 0.07, 0.62, 0.72, "#e8443a")  # red cup
    it.box(0.08, 0.34, 0.62, 0.626, -0.12, 0.06, "#eef1f6", rot=-8)  # sheet of paper
    # the chair, half under the desk, its back towards the room
    yellow = "#f5c400"
    it.box(-0.40, -0.04, 0.32, 0.36, 0.02, 0.36, yellow, True)  # seat
    it.box(-0.40, -0.04, 0.36, 0.70, 0.33, 0.37, yellow, True)  # backrest
    for lx in (-0.385, -0.085):
        for lz in (0.035, 0.315):
            it.box(lx, lx + 0.03, 0.0, 0.32, lz, lz + 0.03, leg)  # legs
    it.rect(-0.5, 0.5, back, front)
    it.rect(-0.40, -0.04, 0.02, 0.37)
    return it


def printer_large():
    # a large enclosed 3D printer with two nozzles (0.50 x 0.50 x 0.60 m); the front stays open to show the inside
    it = Item(
        "printer_3d_dual",
        {
            "es": "Impresora 3D grande, dos boquillas",
            "de": "3D-Drucker groß, zwei Düsen",
            "en": "3D printer, large, two nozzles",
        },
        0.50,
        0.50,
        0.60,
        electric=True,
    )
    shell, shell_top, part = "#141d38", "#1a2647", "#2b3f7d"
    it.box(-0.25, 0.25, 0.0, 0.08, -0.25, 0.25, shell, True, shell_top)  # base
    it.box(-0.21, -0.12, 0.02, 0.06, 0.245, 0.252, "#2fb6e0")  # display in the base
    it.box(-0.25, -0.23, 0.08, 0.55, -0.25, 0.25, shell, "glow")  # left side
    it.box(0.23, 0.25, 0.08, 0.55, -0.25, 0.25, shell, "glow")  # right side
    it.box(-0.23, 0.23, 0.08, 0.55, -0.25, -0.23, shell, "faint")  # back
    it.box(-0.25, 0.25, 0.55, 0.59, -0.25, 0.25, shell, "glow", shell_top)  # lid
    it.box(-0.02, 0.18, 0.59, 0.60, -0.18, -0.15, "#33c8f0")  # light bar on the lid
    it.box(-0.22, -0.20, 0.47, 0.49, -0.21, 0.21, part)  # rail along the depth
    it.box(0.20, 0.22, 0.47, 0.49, -0.21, 0.21, part)  # second rail
    it.box(-0.20, 0.20, 0.47, 0.49, -0.01, 0.01, part)  # gantry across
    it.box(-0.07, -0.01, 0.44, 0.50, -0.04, 0.04, part, True)  # tool head, left nozzle
    it.box(0.01, 0.07, 0.44, 0.50, -0.04, 0.04, part, True)  # tool head, right nozzle
    it.box(-0.045, -0.035, 0.425, 0.44, -0.005, 0.005, "#ff8a2a")  # hot nozzle
    it.box(-0.16, 0.16, 0.26, 0.275, -0.15, 0.15, "#3a4f92", True)  # build plate
    it.box(-0.02, 0.02, 0.08, 0.26, -0.20, -0.16, part)  # its lift screw at the back
    it.cyl(0.04, 0.0, 0.08, 0.275, 0.345, "#33d6ff")  # the print
    it.rect(-0.25, 0.25, -0.25, 0.25)
    return it


def tall_cabinet_niche():
    # a tall cabinet (0.70 x 0.65 x 1.95 m) with doors below and above and an open niche in between that
    # takes the large 3D printer: shelf top at 0.82 m, 0.62 m clear height, 0.66 x 0.63 m inside
    it = Item(
        "tall_cabinet_niche",
        {"es": "Armario alto con hueco", "de": "Hochschrank mit Nische", "en": "Tall cabinet with niche"},
        0.70,
        0.65,
        1.95,
    )
    body, top, line = "#22336a", "#2b3f7d", "#141d38"
    # the sides and top stand 1.5 cm proud of the fronts, so handles stay inside the outline
    back, front, outer = -0.325, 0.31, 0.325
    it.box(-0.33, 0.33, 0.0, 0.06, back + 0.02, front - 0.04, line)  # plinth
    it.box(-0.35, -0.33, 0.0, 1.95, back, outer, body, True)  # left side
    it.box(0.33, 0.35, 0.0, 1.95, back, outer, body, True)  # right side
    it.box(-0.33, 0.33, 0.06, 1.93, back, back + 0.02, body, "faint")  # back panel
    it.box(-0.35, 0.35, 1.93, 1.95, back, outer, body, True, top)  # top
    it.box(-0.33, 0.33, 0.06, 0.78, back + 0.02, front, body, True)  # lower part with its doors
    it.box(-0.33, 0.33, 0.78, 0.82, back + 0.02, front, body, True, top)  # niche floor
    it.box(-0.33, 0.33, 1.44, 1.93, back + 0.02, front, body, True)  # upper part with its doors
    it.box(-0.30, 0.30, 1.435, 1.44, front - 0.06, front - 0.04, "#33c8f0")  # light strip in the niche
    for y0, y1 in ((0.08, 0.76), (1.46, 1.91)):
        it.box(-0.003, 0.003, y0, y1, front, front + 0.004, line)  # gap between the two doors
    for hy0, hy1 in ((0.62, 0.74), (1.48, 1.60)):
        it.box(-0.05, -0.035, hy0, hy1, front, front + 0.02, "metal")  # handles
        it.box(0.035, 0.05, hy0, hy1, front, front + 0.02, "metal")
    it.rect(-0.35, 0.35, back, outer)
    return it


def laser_printer():
    # a desktop laser printer (0.38 x 0.36 x 0.24 m) that stands on the furniture below it
    it = Item(
        "laser_printer",
        {"es": "Impresora láser", "de": "Laserdrucker", "en": "Laser printer"},
        0.38,
        0.36,
        0.24,
        electric=True,
        mount="surface",
    )
    it.box(-0.19, 0.19, 0.0, 0.19, -0.18, 0.174, "#2b3f7d", True, "#33498c")  # body, its front a little in
    it.box(-0.16, 0.14, 0.19, 0.24, -0.15, 0.10, "#141d38", True)  # dark top with the output tray
    it.box(-0.15, 0.06, 0.04, 0.09, 0.172, 0.18, "#dfe6f0")  # paper slot
    it.box(0.10, 0.14, 0.135, 0.15, 0.172, 0.18, "#33c8f0")  # status light
    it.rect(-0.19, 0.19, -0.18, 0.18)
    return it


def resin_printer():
    # a resin (MSLA) 3D printer (0.24 x 0.24 x 0.42 m): dark base with its screen, orange UV lid on top
    it = Item(
        "printer_resin",
        {"es": "Impresora 3D de resina", "de": "Resin-3D-Drucker", "en": "Resin 3D printer"},
        0.24,
        0.24,
        0.42,
        electric=True,
        mount="surface",
    )
    it.box(-0.12, 0.12, 0.0, 0.13, -0.12, 0.114, "#141d38", True, "#1a2647")  # base, its front a little in
    it.box(-0.05, 0.05, 0.035, 0.095, 0.112, 0.12, "#2f9ccc")  # touch screen
    it.box(-0.115, 0.115, 0.13, 0.42, -0.115, 0.115, "#f5a623", True, "#ffbf3d")  # UV lid
    it.rect(-0.12, 0.12, -0.12, 0.12)
    return it


def server_rack():
    # an 18U floor rack (0.60 x 0.80 x 1.05 m) with a UPS, an HP ProLiant (the Proxmox host), a switch, the
    # router and a patch panel; the front stays open so the gear shows, its posts glow like the glass door
    it = Item(
        "server_rack",
        {"es": "Rack de servidores", "de": "Serverschrank", "en": "Server rack"},
        0.60,
        0.80,
        1.05,
        electric=True,
    )
    frame, frame_top, unit, blank = "#141d38", "#1a2647", "#2a3a5c", "#1c2848"
    U = 0.0445
    back, face = -0.40, 0.36  # back of the cabinet, front of the mounted gear
    it.box(-0.30, 0.30, 0.0, 0.06, back, 0.40, frame, True)  # plinth
    it.box(-0.30, -0.28, 0.06, 1.02, back, 0.40, frame, "glow")  # left side
    it.box(0.28, 0.30, 0.06, 1.02, back, 0.40, frame, "glow")  # right side
    it.box(-0.28, 0.28, 0.06, 1.02, back, back + 0.02, frame, "faint")  # back panel
    it.box(-0.30, 0.30, 1.02, 1.05, back, 0.40, frame, "glow", frame_top)  # top
    it.box(-0.27, -0.25, 0.06, 1.02, face, 0.40, frame, "glow")  # front post left
    it.box(0.25, 0.27, 0.06, 1.02, face, 0.40, frame, "glow")  # front post right

    def gear(u0, units, color, edges=True):
        # a 19" unit from rack unit u0 (counted from 0.08 m), `units` high
        y0 = 0.08 + u0 * U
        it.box(-0.24, 0.24, y0, y0 + units * U - 0.002, -0.30, face, color, edges)
        return y0

    def front(x0, x1, y0, y1, color):
        it.box(x0, x1, y0, y1, face, face + 0.006, color)

    y = gear(0, 2, "#121a30")  # UPS
    front(-0.20, -0.12, y + 0.03, y + 0.06, "#33c8f0")  # its display
    front(0.17, 0.19, y + 0.04, y + 0.05, "#3ddc84")  # on line
    gear(2, 1, blank, "faint")
    y = gear(3, 2, unit)  # HP ProLiant, 2U: the Proxmox host
    for i in range(8):
        bx = -0.22 + i * 0.038
        front(bx, bx + 0.032, y + 0.012, y + 0.075, "#3a4f92")  # drive bays
    front(0.16, 0.175, y + 0.05, y + 0.06, "#3ddc84")  # health
    front(0.185, 0.2, y + 0.05, y + 0.06, "#4d8dff")  # UID
    front(0.16, 0.22, y + 0.015, y + 0.03, "#141d38")  # iLO port
    gear(5, 1, blank, "faint")
    y = gear(6, 1, "#121a30")  # switch
    front(-0.20, 0.12, y + 0.012, y + 0.032, "#0b111f")  # ports
    front(-0.20, 0.12, y + 0.034, y + 0.038, "#3ddc84")  # link lights
    y = gear(7, 1, "#8a96a8")  # router (UDM Pro style)
    front(-0.03, 0.03, y + 0.01, y + 0.034, "#33c8f0")  # its little screen
    front(0.06, 0.22, y + 0.014, y + 0.03, "#2a3346")  # ports
    y = gear(8, 1, "#121a30")  # patch panel
    front(-0.22, 0.22, y + 0.014, y + 0.03, "#0b111f")
    for u in (9, 10, 11, 12, 13, 14):
        gear(u, 1, blank, "faint")  # blank panels
    y = gear(15, 2, "#121a30")  # fan tray
    for i in range(4):
        fx = -0.18 + i * 0.1
        front(fx, fx + 0.06, y + 0.015, y + 0.07, "#22336a")
    it.rect(-0.30, 0.30, back, 0.40)
    return it


payload = {
    "format": "fp3dpack",
    "version": 1,
    "id": "diegood.muebles",
    "name": "Muebles",
    "publisher": "diegood",
    "description": "Muebles propios",
    "items": [
        kids_desk().payload(),
        printer_large().payload(),
        tall_cabinet_niche().payload(),
        laser_printer().payload(),
        resin_printer().payload(),
        server_rack().payload(),
    ],
}
with open(sys.argv[1], "w") as out:
    json.dump({"payload": payload}, out, ensure_ascii=False, indent=1)
print(", ".join(f"{i['id']}: {len(i['parts'])} parts" for i in payload["items"]))
