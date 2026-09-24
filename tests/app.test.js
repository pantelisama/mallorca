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
  assert.equal(elements.get("#filters").innerHTML, "", "no categories until places are added");
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

test("map has on/off layers for fuel, supermarkets, toilets and food", () => {
  assert.match(app, /amenity"="fuel"/);
  assert.match(app, /shop"="supermarket"/);
  assert.match(app, /amenity"="toilets"/);
  assert.match(app, /overpass-api\.de/);
  for (const k of ["fuel", "market", "wc", "food"]) assert.match(app, new RegExp("\\b" + k + ":\\{label:"));
});

test("the planner starts empty: no places, villages, routes or areas", () => {
  const empty = name => new RegExp("const " + name + "=\\[\\s*\\]");
  for (const name of ["spots", "villages", "areas"]) assert.match(app, empty(name), name + " should be empty");
  assert.match(app, /const routes=\{\s*\}/);
});

test("the four days are present and empty", () => {
  const elements = runApp({ withLeaflet: true });
  assert.match(elements.get("#days").innerHTML, /Παρ 16/);
  for (const id of ["fri", "sat", "sun", "mon"]) {
    elements.clickDay(id);
    const html = elements.get("#plan").innerHTML;
    assert.match(html, /Καμία στάση ακόμα/, id + " should show the empty-day hint");
    assert.match(html, /Δεν υπάρχουν αποθηκευμένα μέρη/, id + " should show the empty grid note");
  }
});

test("map layer buttons for fuel, supermarkets, toilets and food survive the cleanup", () => {
  assert.match(app, /amenity"="fuel"/);
  assert.match(app, /shop"="supermarket"/);
  assert.match(app, /amenity"="toilets"/);
  for (const k of ["fuel", "market", "wc", "food"]) assert.match(app, new RegExp("\\b" + k + ":\\{label:"));
});

test("index.html still loads the planner shell", () => {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "validate-html.js")], { cwd: root, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
});
