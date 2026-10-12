// Local development against a real Home Assistant: serves the repository and preview/live.html, and
// forwards /api/ (HTTP and the websocket) to Home Assistant, so the page talks to one origin and camera
// and media pictures load. The plan comes from a NeonPlan backup file, not from Home Assistant.
//
// Settings in live.local.json at the repository root (not committed; NEONPLAN_LIVE_CONFIG may name another file):
//   {
//     "url": "http://homeassistant.local:8123",   // your Home Assistant
//     "token": "<long-lived access token>",        // profile → security → long-lived access tokens
//     "backup": "private/neonplan3d-backup.json",  // optional: a NeonPlan backup file ("Save everything")
//     "dry_run": false,                            // true: service calls are only logged, nothing switches
//     "port": 8124
//   }
// Usage (from frontend/): npm run live, then open http://127.0.0.1:8124/preview/live.html

import { existsSync, readFileSync } from "node:fs";
import { createServer, request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";
import { extname, isAbsolute, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const configFile = process.env.NEONPLAN_LIVE_CONFIG ?? join(root, "live.local.json");
if (!existsSync(configFile)) {
  console.error('No live.local.json at the repository root. Create it with {"url": "http://<ha>:8123", "token": "<long-lived token>", "backup": "<file>"}.');
  process.exit(1);
}
const config = JSON.parse(readFileSync(configFile, "utf8"));
if (!config.url || !config.token) {
  console.error("live.local.json needs url and token.");
  process.exit(1);
}
const ha = new URL(config.url);
const backupFile = config.backup ? (isAbsolute(config.backup) ? config.backup : join(root, config.backup)) : null;
if (backupFile && !existsSync(backupFile)) {
  console.error(`Backup file not found: ${backupFile}`);
  process.exit(1);
}
const port = Number(config.port ?? 8124);
const request = ha.protocol === "https:" ? httpsRequest : httpRequest;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

/** Headers for Home Assistant: its own host, nothing that points at this server. */
function upstreamHeaders(headers) {
  const out = { ...headers, host: ha.host };
  delete out.origin;
  delete out.referer;
  return out;
}

function proxy(req, res) {
  const up = request(
    { protocol: ha.protocol, hostname: ha.hostname, port: ha.port, method: req.method, path: req.url, headers: upstreamHeaders(req.headers) },
    (upRes) => {
      res.writeHead(upRes.statusCode ?? 502, upRes.headers);
      upRes.pipe(res);
    },
  );
  up.on("error", (err) => {
    if (!res.headersSent) res.writeHead(502, { "content-type": "text/plain" });
    res.end(`Home Assistant not reachable: ${err.message}`);
  });
  req.pipe(up);
}

function serveFile(req, res) {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || file === configFile || file === join(root, "live.local.json")) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream", "cache-control": "no-store" }).end(readFileSync(file));
}

const server = createServer((req, res) => {
  const { pathname } = new URL(req.url, "http://x");
  if (pathname.startsWith("/api/")) return proxy(req, res);
  if (pathname === "/live/config.json") {
    // only to this machine (the server listens on 127.0.0.1)
    res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
    res.end(JSON.stringify({ token: config.token, dry_run: !!config.dry_run, backup: !!backupFile, ha: ha.origin }));
    return;
  }
  if (pathname === "/live/backup.json") {
    if (!backupFile) return res.writeHead(404).end();
    res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" }).end(readFileSync(backupFile));
    return;
  }
  if (pathname === "/") {
    res.writeHead(302, { location: "/preview/live.html" }).end();
    return;
  }
  serveFile(req, res);
});

// the websocket: hand the upgrade to Home Assistant and pipe both sockets
server.on("upgrade", (req, socket, head) => {
  if (!req.url?.startsWith("/api/websocket")) {
    socket.destroy();
    return;
  }
  const up = request({ protocol: ha.protocol, hostname: ha.hostname, port: ha.port, method: "GET", path: req.url, headers: upstreamHeaders(req.headers) });
  up.on("upgrade", (upRes, upSocket, upHead) => {
    const lines = [`HTTP/1.1 ${upRes.statusCode} ${upRes.statusMessage}`];
    for (let i = 0; i < upRes.rawHeaders.length; i += 2) lines.push(`${upRes.rawHeaders[i]}: ${upRes.rawHeaders[i + 1]}`);
    socket.write(`${lines.join("\r\n")}\r\n\r\n`);
    if (upHead?.length) socket.write(upHead);
    if (head?.length) upSocket.write(head);
    upSocket.pipe(socket).pipe(upSocket);
    upSocket.on("error", () => socket.destroy());
    socket.on("error", () => upSocket.destroy());
  });
  up.on("response", (upRes) => {
    socket.end(`HTTP/1.1 ${upRes.statusCode} ${upRes.statusMessage}\r\n\r\n`);
  });
  up.on("error", (err) => {
    console.error(`Websocket to Home Assistant failed: ${err.message}`);
    socket.destroy();
  });
  up.end();
});

server.listen(port, "127.0.0.1", () => {
  console.log(`NeonPlan 3D live: http://127.0.0.1:${port}/preview/live.html`);
  console.log(`  Home Assistant: ${ha.origin}${config.dry_run ? " (dry run: services are only logged)" : ""}`);
  console.log(`  Plan: ${backupFile ?? "empty (no backup set)"}`);
  console.log("  Run `npm run watch` in frontend/ beside this and reload the page after a change.");
});
