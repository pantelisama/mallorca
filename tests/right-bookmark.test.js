const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "staging-bookmark.css"), "utf8");

test("right Stops uses the same cat-drawer/cat-toggle component structure as Places", () => {
  assert.match(html, /class="cat-drawer stop-edge"/);
  assert.match(html, /class="cat-toggle stop-toggle"/);
  assert.match(html, /class="cat-toggle-icon">🧭<\/span><span class="cat-toggle-label">ΣΤΑΣΕΙΣ/);
});

test("right Stops keeps its bookmark visible without moving the whole drawer off-screen", () => {
  assert.match(css, /\.cat-drawer\.stop-edge\{[\s\S]*?right:0!important;[\s\S]*?width:48px!important;[\s\S]*?transform:translateY\(-50%\)!important;/);
  assert.doesNotMatch(css, /\.cat-drawer\.stop-edge\{[\s\S]*?transform:translateX\([^)]*\) translateY\(-50%\)!important/);
});

test("right Stops mirrors the Places panel to the opposite side of the bookmark", () => {
  assert.match(css, /\.cat-drawer\.stop-edge \.cat-panel\{[\s\S]*?right:48px!important;[\s\S]*?transform:translateX\(100%\) translateY\(-50%\)!important;/);
  assert.match(css, /\.cat-drawer\.stop-edge\.open \.cat-panel\{[\s\S]*?transform:translateX\(0\) translateY\(-50%\)!important;/);
});

test("right Stops preserves a visible handle at mobile widths", () => {
  assert.match(css, /@media\(max-width:600px\)[\s\S]*?width:40px!important;[\s\S]*?right:40px!important;[\s\S]*?\.cat-toggle\{width:40px!important;/);
});
