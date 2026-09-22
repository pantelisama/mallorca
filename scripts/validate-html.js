const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const required = [
  '<main id="map"></main>',
  '<nav id="days"></nav>',
  '<div id="filters"></div>',
  '<section id="plan"></section>',
  'app.js?v='
];
const missing = required.filter(x => !html.includes(x));
if (missing.length) {
  console.error("HTML validation failed. Missing:", missing.join(", "));
  process.exit(1);
}
if (!html.includes("leaflet@1.9.4")) {
  console.error("HTML validation failed: Leaflet dependency is missing.");
  process.exit(1);
}
console.log("HTML validation passed.");
