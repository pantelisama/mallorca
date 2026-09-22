const categories={
  food:{label:"Φαγητό",icon:"🍷"},
  sights:{label:"Αξιοθέατα",icon:"🏛️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"}
};

const spots=[
  // FOOD
  {n:"Mercat de l'Olivar",c:[39.5749,2.6537],cat:"food",d:"Working food market — jamón, seafood, cheese, olives, local products.",tip:"Go before lunch."},
  {n:"Mercat de Santa Catalina",c:[39.5692,2.6396],cat:"food",d:"Local market, tapas bars, seafood, vermouth and lively neighbourhood atmosphere."},
  {n:"La Rosa Vermutería",c:[39.5730,2.6480],cat:"food",d:"Vermouth, tortilla, croquettes and Mallorcan small plates."},
  {n:"El Camino",c:[39.5719,2.6460],cat:"food",d:"Popular tapas / small plates and natural wine."},
  {n:"Bar España",c:[39.5748,2.6515],cat:"food",d:"No-frills tapas and montaditos near Plaça d'Espanya."},
  {n:"Can Joan de s'Aigo",c:[39.5740,2.6500],cat:"food",d:"Historic stop for ensaïmada, ice cream and almond drinks."},
  {n:"Patrón Lunares",c:[39.5702,2.6388],cat:"food",d:"Santa Catalina seafood and rice dishes."},
  {n:"Casa Gallega",c:[39.5757,2.6540],cat:"food",d:"Traditional Galician seafood, pulpo and padrón peppers."},
  {n:"La Lonja tapas area",c:[39.5680,2.6460],cat:"food",d:"Dense evening tapas / wine-bar zone around the old maritime quarter."},
  {n:"Carrer de la Fàbrica",c:[39.5700,2.6380],cat:"food",d:"Pedestrianised Santa Catalina restaurant street."},

  // SIGHTS
  {n:"La Seu Cathedral",c:[39.5676,2.6487],cat:"sights",d:"Palma's landmark Gothic cathedral beside the sea."},
  {n:"Palau de l'Almudaina",c:[39.5678,2.6470],cat:"sights",d:"Royal palace with Roman, Islamic and Gothic layers."},
  {n:"Banys Àrabs",c:[39.5722,2.6491],cat:"sights",d:"Atmospheric 10th–12th century Arab baths."},
  {n:"Es Baluard Museu",c:[39.5702,2.6420],cat:"sights",d:"Contemporary art inside the historic city walls."},
  {n:"Passeig del Born",c:[39.5700,2.6480],cat:"sights",d:"Tree-lined historic promenade, cafés and elegant façades."},
  {n:"Plaça de Cort",c:[39.5708,2.6508],cat:"sights",d:"City Hall square and the famous old olive tree."},
  {n:"Plaça Major",c:[39.5727,2.6515],cat:"sights",d:"Central Palma square and gateway to the upper old town."},
  {n:"Plaça de la Reina",c:[39.5700,2.6465],cat:"sights",d:"Historic square linking Born, La Lonja and the cathedral."},
  {n:"Santa Eulàlia",c:[39.5713,2.6505],cat:"sights",d:"Historic Gothic church in the old town."},
  {n:"Baluard de Sant Pere",c:[39.5700,2.6400],cat:"sights",d:"Historic bastion with city / harbour views."},
  {n:"Can Balaguer",c:[39.5708,2.6488],cat:"sights",d:"Beautiful preserved Palma courtyard house; free entry."},
  {n:"Casal Solleric",c:[39.5701,2.6478],cat:"sights",d:"Baroque palace on the Born, used for exhibitions."},
  {n:"Can Casasayas",c:[39.5720,2.6470],cat:"sights",d:"Modernist twin façades — one of Palma's best architectural details."},
  {n:"Jewish Quarter / Carrer de Can Serra",c:[39.5720,2.6500],cat:"sights",d:"Quiet medieval lanes and historic Jewish-quarter traces."},
  {n:"Bellver Castle",c:[39.5630,2.6190],cat:"sights",d:"Circular Gothic castle above Palma with panoramic views."},
  {n:"Sant Francesc Basilica",c:[39.5697,2.6518],cat:"sights",d:"Gothic church and atmospheric cloister."},
  {n:"Plaça d'Espanya",c:[39.5754,2.6535],cat:"sights",d:"Main transport square and northern gateway to central Palma."},

  // EXPERIENCES
  {n:"Tablao Flamenco Alma",c:[39.5731,2.6398],cat:"experiences",d:"Intimate flamenco tablao; Friday 16 Oct listings include evening shows.",tip:"Book ahead."},
  {n:"Parc de la Mar",c:[39.5660,2.6502],cat:"experiences",d:"Waterfront park and classic cathedral reflection viewpoint."},
  {n:"Old Town courtyard walk",c:[39.5718,2.6490],cat:"experiences",d:"Wander the hidden patios and stone lanes between La Seu and Plaça Major."},
  {n:"La Lonja evening walk",c:[39.5682,2.6458],cat:"experiences",d:"Historic maritime quarter that comes alive around sunset."},
  {n:"Santa Catalina evening",c:[39.5695,2.6390],cat:"experiences",d:"Market → vermouth → tapas → bars; one of Palma's liveliest local areas."},
  {n:"Portixol waterfront",c:[39.5620,2.6760],cat:"experiences",d:"Seafront walk east of the centre, useful if you want sea rather than old town."},
  {n:"Baluard des Príncep",c:[39.5667,2.6522],cat:"experiences",d:"Medieval defensive wall area and quieter waterfront views."},
  {n:"Palma sunset waterfront",c:[39.5657,2.6485],cat:"experiences",d:"Golden-hour walk between Parc de la Mar and the harbour."},

  // INSTAGRAMMABLE
  {n:"Cathedral × Parc de la Mar reflection",c:[39.5659,2.6500],cat:"instagram",d:"The classic Palma reflection shot."},
  {n:"La Seu stone steps / sea",c:[39.5674,2.6482],cat:"instagram",d:"Cathedral façade with sea and palms."},
  {n:"Passeig del Born",c:[39.5700,2.6480],cat:"instagram",d:"Long symmetrical tree-lined composition."},
  {n:"Can Casasayas",c:[39.5720,2.6470],cat:"instagram",d:"Curved Modernista balconies and twin façades."},
  {n:"Can Corbella",c:[39.5722,2.6510],cat:"instagram",d:"Decorative neo-Mudéjar façade near the old town centre."},
  {n:"Patio / old-town doorway",c:[39.5715,2.6497],cat:"instagram",d:"Look for open historic courtyards and oversized wooden doors."},
  {n:"La Lonja alleys",c:[39.5681,2.6453],cat:"instagram",d:"Stone lanes, Gothic architecture and evening light."},
  {n:"Baluard de Sant Pere viewpoint",c:[39.5700,2.6400],cat:"instagram",d:"Elevated view over the old walls and bay."},
  {n:"Bellver panorama",c:[39.5630,2.6190],cat:"instagram",d:"Best broad city panorama if you have time for the uphill detour."},
  {n:"Santa Catalina streets",c:[39.5694,2.6388],cat:"instagram",d:"Low colourful façades and lively street scene."}
];

const dayPlan=[
  ["Arrival","Palma Old Town","Start at Parc de la Mar → La Seu → Almudaina → old-town lanes → La Lonja → Born.","experiences","Easy first walk after landing."],
  ["Golden hour","Cathedral / Parc de la Mar","Do the cathedral reflection and waterfront before heading deeper into the old town.","instagram","Best light around sunset."],
  ["Early evening","Old Town","Banys Àrabs → Santa Eulàlia → Plaça de Cort → Can Joan de s'Aigo → Plaça Major.","sights","Compact walk."],
  ["Dinner","La Lonja / Santa Catalina","Choose between a tapas crawl around La Lonja or the more neighbourhood-focused Santa Catalina.","food","See the food category for the shortlist."],
  ["Night option","Tablao Flamenco Alma","Flamenco is listed for Friday 16 Oct 2026; current listings show evening performances.","experiences","Book if you want this to be the main night experience."]
];

const map=L.map("map",{zoomControl:true}).setView([39.570,2.648],14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);

const markerLayers={};
Object.keys(categories).forEach(cat=>{
  markerLayers[cat]=L.layerGroup().addTo(map);
  spots.filter(s=>s.cat===cat).forEach(s=>{
    const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});
    L.marker(s.c,{icon}).addTo(markerLayers[cat]).bindPopup("<b>"+categories[cat].icon+" "+s.n+"</b><br><span>"+s.d+"</span>"+(s.tip?"<br><small>Tip: "+s.tip+"</small>":""));
  });
});

function render(){
  document.querySelector("#days").innerHTML="<button class='active'>Fri 16</button>";
  document.querySelector("#filters").innerHTML=Object.entries(categories).map(([k,v])=>"<button class='filter active' data-cat='"+k+"' onclick='toggleCat(\""+k+"\",this)'>"+v.icon+" "+v.label+" <span>"+spots.filter(s=>s.cat===k).length+"</span></button>").join("");
  document.querySelector("#plan").innerHTML="<div class='plan-intro'><h2>Palma · Friday 16</h2><p>Arrival day — keep the route compact, then choose food / flamenco / drinks depending on energy.</p></div>"+dayPlan.map(i=>"<article class='card'><div class='time'>"+i[0]+"</div><div class='title'>"+i[1]+"</div><div class='desc'>"+i[2]+"</div><span class='tag'>"+categories[i[3]].icon+" "+categories[i[3]].label+"</span><div class='route'>"+i[4]+"</div></article>").join("")+"<div class='all-spots'><b>"+spots.length+" Palma spots loaded</b><span>Tap map pins or use the category filters above.</span></div>";
  map.fitBounds(L.latLngBounds(spots.map(s=>s.c)),{padding:[40,40]});
}
function toggleCat(cat,btn){
  if(map.hasLayer(markerLayers[cat])){map.removeLayer(markerLayers[cat]);btn.classList.remove("active")}else{markerLayers[cat].addTo(map);btn.classList.add("active")}
}
render();
