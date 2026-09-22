const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "app.js");
const app = fs.readFileSync(appPath, "utf8");

test("app.js passes Node syntax validation", () => {
  const result = spawnSync(process.execPath, ["--check", appPath], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
});

test("planner contains the expected day and category model", () => {
  for (const id of ["fri", "sat", "sun", "mon"]) {
    assert.match(app, new RegExp('id:"' + id + '"'));
  }
  for (const cat of ["food", "sights", "experiences", "instagram", "hotels", "villages"]) {
    assert.match(app, new RegExp(cat + ":\\{"));
  }
});

test("route stops have valid coordinate pairs and use road routing", () => {
  const routeBlocks = [...app.matchAll(/(?:sat|sun):\{stops:\[([\s\S]*?)\]\}/g)].map(m => m[1]);
  assert.equal(routeBlocks.length, 2);
  for (const block of routeBlocks) {
    const coords = [...block.matchAll(/c:\[(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)\]/g)];
    assert.ok(coords.length >= 2);
    for (const [, lat, lon] of coords) {
      assert.ok(Number(lat) >= 39 && Number(lat) <= 40);
      assert.ok(Number(lon) >= 2 && Number(lon) <= 4);
    }
  }
  assert.match(app, /router\.project-osrm\.org\/route\/v1\/driving/);
  assert.match(app, /routing\.openstreetmap\.de\/routed-car\/route\/v1\/driving/);
  assert.doesNotMatch(app, /L\.polyline\(r\.stops/);
});

test("spot cards build image URLs without an accidental template-literal placeholder", () => {
  assert.match(app, /const photo=s\.photo\|\|"https:\/\/images\.unsplash\.com/);
  assert.doesNotMatch(app, /\$\{s\.photo\|\|/);
  assert.ok(app.includes("onerror='this.onerror=null;this.src=\\\""));
  assert.ok(app.includes("+fallback+"));
  assert.ok(!app.includes('this.src="" + fallback + ""'));
});;

test("render smoke test creates the main planner sections", () => {
  const elements = new Map();
  const makeEl = () => ({
    innerHTML: "",
    textContent: "",
    classList: { add() {}, remove() {}, toggle() {} },
    scrollIntoView() {}
  });
  const document = {
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, makeEl());
      return elements.get(selector);
    },
    addEventListener() {}
  };

  const layer = () => ({
    addTo() { return this; },
    clearLayers() { return this; },
    on() { return this; },
    bindPopup() { return this; },
    bindTooltip() { return this; }
  });
  const map = {
    setView() { return this; },
    hasLayer() { return true; },
    addLayer() {},
    removeLayer() {},
    fitBounds() {},
  };
  const L = {
    map: () => map,
    tileLayer: () => layer(),
    layerGroup: () => layer(),
    polygon: () => layer(),
    divIcon: () => ({}),
    marker: () => layer(),
    latLngBounds: points => points,
    popup: () => ({ setLatLng() { return this; }, setContent() { return this; }, openOn() { return this; } })
  };

  const context = {
    console,
    document,
    window: { open() {} },
    L,
    fetch: async () => ({ ok: false }),
    setTimeout,
    clearTimeout
  };
  vm.runInNewContext(app, context, { filename: appPath });

  assert.match(elements.get("#plan").innerHTML, /Fri 16 · Plan/);
  assert.ok(elements.get("#days").innerHTML.includes("Sat 17"));
  assert.ok(elements.get("#filters").innerHTML.includes("Φαγητό"));
});
