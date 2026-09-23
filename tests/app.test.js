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
  assert.match(app, /#146BFF/);
  assert.doesNotMatch(app, /L\.polyline\(r\.stops/);
});

test("spot cards do not use placeholder imagery", () => {
  assert.doesNotMatch(app, /images\.unsplash\.com/);
  assert.doesNotMatch(app, /\$\{s\.photo\|\|/);
});

function runApp({ withLeaflet }) {
  const elements = new Map();
  const listeners = {};
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
    addEventListener(type, fn) { (listeners[type] = listeners[type] || []).push(fn); }
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
    on() { return this; },
    addControl() { return this; },
  };
  const L = {
    map: () => map,
    tileLayer: () => layer(),
    layerGroup: () => layer(),
    polygon: () => layer(),
    divIcon: () => ({}),
    marker: () => layer(),
    latLngBounds: points => points,
    Control: { extend: () => function () {} },
    popup: () => ({ setLatLng() { return this; }, setContent() { return this; }, openOn() { return this; } })
  };

  const window = { open() {} };
  if (withLeaflet) window.L = L;
  const context = {
    console,
    document,
    window,
    ...(withLeaflet ? { L } : {}),
    fetch: async () => ({ ok: false }),
    setTimeout,
    clearTimeout
  };
  vm.runInNewContext(app, context, { filename: appPath });
  elements.clickDay = id => {
    const target = { closest: sel => (sel === "#days [data-day]" ? { dataset: { day: id } } : null) };
    for (const fn of listeners.click || []) fn({ target });
  };
  return elements;
}

test("render smoke test creates the main planner sections", () => {
  const elements = runApp({ withLeaflet: true });
  assert.match(elements.get("#plan").innerHTML, /Παρ 16 · Πρόγραμμα/);
  assert.ok(elements.get("#days").innerHTML.includes("Σαβ 17"));
  assert.ok(elements.get("#filters").innerHTML.includes("Φαγητό"));
});

test("planner still renders when Leaflet fails to load", () => {
  const elements = runApp({ withLeaflet: false });
  assert.match(elements.get("#plan").innerHTML, /Παρ 16 · Πρόγραμμα/);
  assert.match(elements.get("#map").innerHTML, /Ο χάρτης δεν φόρτωσε/);
});

test("index.html loads the planner shell and app.js", () => {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "validate-html.js")], { cwd: root, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /leaflet\.markercluster/);
});

test("Saturday and Sunday routes contain the planned stops in order", () => {
  const block = id => app.match(new RegExp(id + ":\\{stops:\\[([\\s\\S]*?)\\]\\}"))[1];
  const names = id => [...block(id).matchAll(/n:"([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(names("sat"), ["Fika Farina", "Santanyí Market", "Caló des Moro", "Cala Llombards", "Ses Salines", "Cala Romàntica", "Porto Cristo", "Palma", "Cuba Skybar"]);
  assert.deepEqual(names("sun"), ["Gran Folies Beach Club", "Restaurant Illeta", "Valldemossa", "Sóller", "Port de Sóller", "Fornalutx", "Pollença", "Port de Pollença", "Mirador des Colomer", "Cap de Formentor", "Platja de Muro"]);
});

test("Google stars are hardcoded and sample places are gone", () => {
  for (const [name, rating, reviews] of [["Fika Farina", 4.8, 1858], ["Cuba Skybar", 3.4, 198], ["Caló des Moro", 4.5, 9471], ["Mirador des Colomer", 4.8, 11497], ["Restaurant Illeta", 4.3, 8563]]) {
    assert.match(app, new RegExp('n:"' + name + '"[^\\n]*rating:' + rating + ',reviews:' + reviews));
  }
  for (const fake of ["Ca Na Toneta", "Photo stop", "Kayak in the bay", "Hotel Can Cera", "Caimari"]) {
    assert.ok(!app.includes(fake), fake + " should be removed");
  }
});

test("map has on/off layers for fuel, supermarkets, toilets and food", () => {
  assert.match(app, /amenity"="fuel"/);
  assert.match(app, /shop"="supermarket"/);
  assert.match(app, /amenity"="toilets"/);
  assert.match(app, /overpass-api\.de/);
  for (const k of ["fuel", "market", "wc", "food"]) assert.match(app, new RegExp("\\b" + k + ":\\{label:"));
});

test("Saturday renders numbered stops with stars and a Google Maps route link", () => {
  const elements = runApp({ withLeaflet: true });
  elements.clickDay("sat");
  const html = elements.get("#plan").innerHTML;
  assert.match(html, /Σαβ 17 · Πρόγραμμα/);
  assert.match(html, /Caló des Moro/);
  assert.match(html, /★ 4\.5/);
  assert.match(html, /google\.com\/maps\/dir\//);
  assert.match(html, /query_place_id=/);
});

test("Sunday navigation is split into legs Google Maps can open", () => {
  const elements = runApp({ withLeaflet: true });
  elements.clickDay("sun");
  const html = elements.get("#plan").innerHTML;
  assert.match(html, /Πλοήγηση 1\/2/);
  assert.match(html, /Πλοήγηση 2\/2/);
  for (const m of html.matchAll(/waypoints=([^'&]+)/g)) {
    assert.ok(decodeURIComponent(m[1]).split("|").length <= 8);
  }
});

test("Monday keeps the Palma plan with an airport navigation link", () => {
  const elements = runApp({ withLeaflet: true });
  elements.clickDay("mon");
  const html = elements.get("#plan").innerHTML;
  assert.match(html, /Δευ 19 · Πρόγραμμα/);
  assert.match(html, /Palma Airport/);
  assert.match(html, /Αποθηκευμένα μέρη · Palma/);
});
