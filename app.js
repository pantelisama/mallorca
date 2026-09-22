const categories={
  food:{label:"Φαγητό",icon:"🍷"},
  sights:{label:"Αξιοθέατα",icon:"🏛️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"},
  hotels:{label:"Hotels",icon:"🏨"}
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


const areas=[
  {id:"oldtown",n:"Old Town · Casc Antic",type:"History & architecture",icon:"🏛️",c:[39.5715,2.6490],d:"The historic core: La Seu, Almudaina, Banys Àrabs, courtyards, churches and medieval lanes.",p:[[39.5752,2.6460],[39.5748,2.6545],[39.5680,2.6540],[39.5674,2.6440],[39.5710,2.6415]]},
  {id:"lonja",n:"La Lonja · Apuntadors",type:"Tapas, wine & evening bars",icon:"🍷",c:[39.5685,2.6460],d:"Dense evening food-and-drink quarter around La Lonja and Carrer dels Apuntadors.",p:[[39.5708,2.6418],[39.5718,2.6480],[39.5680,2.6500],[39.5663,2.6450]]},
  {id:"santacatalina",n:"Santa Catalina · Fàbrica",type:"Restaurants & pedestrian streets",icon:"🍽️",c:[39.5698,2.6388],d:"Palma's food neighbourhood: Mercat, Carrer de la Fàbrica, Sant Magí, vermouth, tapas and bars.",p:[[39.5727,2.6353],[39.5720,2.6417],[39.5679,2.6420],[39.5673,2.6358]]},
  {id:"born",n:"Born · Jaime III",type:"Shopping & grand boulevards",icon:"🛍️",c:[39.5703,2.6482],d:"Elegant central promenade, designer shops, cafés, Modernista façades and the main city-centre shopping streets.",p:[[39.5722,2.6452],[39.5721,2.6502],[39.5687,2.6501],[39.5684,2.6460]]},
  {id:"marina",n:"Paseo Marítimo · Marina",type:"Clubs, marina & nightlife",icon:"🪩",c:[39.5660,2.6380],d:"The main waterfront nightlife strip: marina, late bars and clubs, especially later at night.",p:[[39.5690,2.6320],[39.5690,2.6450],[39.5630,2.6490],[39.5605,2.6380]]},
  {id:"portixol",n:"Portixol · Es Molinar",type:"Sea, promenade & waterfront food",icon:"🌊",c:[39.5618,2.6760],d:"Former fishing-village waterfront with promenade, small beaches, restaurants and a calmer sea-facing atmosphere.",p:[[39.5650,2.6685],[39.5650,2.6815],[39.5585,2.6820],[39.5582,2.6705]]},
  {id:"bellver",n:"Bellver · El Terreno",type:"Castle, views & west-side nightlife",icon:"🌲",c:[39.5628,2.6235],d:"Bellver forest and castle above the city, with El Terreno between the hill and waterfront.",p:[[39.5685,2.6185],[39.5685,2.6315],[39.5595,2.6325],[39.5590,2.6200]]},
  {id:"peregarau",n:"Pere Garau · Mercat",type:"Local market & everyday Palma",icon:"🥬",c:[39.5738,2.6570],d:"A more everyday side of Palma: market, local shops, immigrant food culture and less polished streets.",p:[[39.5770,2.6530],[39.5770,2.6625],[39.5710,2.6625],[39.5705,2.6540]]}
];

const days=[
  {id:"fri",label:"Fri 16",title:"Palma · Friday 16",sub:"Arrival · Old Town · food · culture · sunset · nightlife",plan:[
    ["Arrival","Palma Old Town","Parc de la Mar → La Seu → Almudaina → old-town lanes → La Lonja → Born.","experiences","Easy first walk after landing."],
    ["Golden hour","Cathedral / Parc de la Mar","Finish the waterfront and cathedral reflection around sunset.","instagram","Best light around sunset."],
    ["Early evening","Old Town","Banys Àrabs → Santa Eulàlia → Plaça de Cort → Plaça Major.","sights","Compact walk through the historic core."],
    ["Dinner","La Lonja or Santa Catalina","Pick the area that fits your mood: historic tapas/wine in La Lonja or the food-heavy neighbourhood streets of Santa Catalina.","food","The places themselves are in the findings below."],
    ["Night option","Flamenco / nightlife","Optional depending on arrival energy.","experiences","Choose from the relevant places below."]
  ]},
  {id:"sat",label:"Sat 17",title:"Saturday 17 · Northern Tramuntana",sub:"Caimari · Lluc · Pollença · mountain roads · local food",plan:[
    ["Morning","Palma → Caimari","Leave Palma and drive towards Caimari for a coffee / short village stop before the mountains.","experiences","Keep the morning flexible."],
    ["Late morning","Lluc","Continue through the Tramuntana to Santuari de Lluc and explore the monastery and mountain surroundings.","sights","Allow time for a short walk."],
    ["Afternoon","Lluc → Pollença","Drive to Pollença, wander the old town and climb the Calvari steps if energy allows.","sights","Best late-afternoon light."],
    ["Dinner","Pollença","Look for a local Mallorcan dinner rather than eating on the busiest tourist strip.","food","Reserve if you find a specific restaurant you want."]
  ]},
  {id:"sun",label:"Sun 18",title:"Sunday 18 · Pollença → Formentor",sub:"Port de Pollença · Formentor · viewpoints · sea",plan:[
    ["Morning","Pollença → Port de Pollença","Head to the coast for breakfast and a waterfront walk.","food","Go early for easier parking."],
    ["Late morning","Mirador Es Colomer","Drive towards Formentor and stop at the famous viewpoint above the cliffs.","instagram","Allow time for the walk to the viewpoint."],
    ["Afternoon","Formentor Beach","Continue to Platja de Formentor for sea, pine trees and a slower afternoon.","experiences","Check road/access conditions on the day."],
    ["Late afternoon","Cap de Formentor","Continue as far as access allows; lighthouse / cliff views depend on current road restrictions.","instagram","Sunset option if timing works."],
    ["Evening","Return to Pollença","Dinner and a relaxed final evening in Pollença.","food","Keep it simple after the drive."]
  ]},
  {id:"mon",label:"Mon 19",title:"Monday 19 · Palma → Airport",sub:"Breakfast · short Palma walk · airport",plan:[
    ["Morning","Palma","Breakfast and one last short walk through the old town / waterfront.","food","Keep plenty of airport buffer."],
    ["Departure","Palma → PMI","Return rental car if applicable and head to Palma airport.","experiences","Flight is midday."]
  ]}
];
let currentDay="fri";

const map=L.map("map",{zoomControl:true}).setView([39.570,2.648],14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);

const areaLayer=L.layerGroup().addTo(map);
areas.forEach(a=>{
  const poly=L.polygon(a.p,{color:"#18211d",weight:1,fillOpacity:.12});
  poly.bindPopup("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d);
  poly.on("click",()=>showArea(a.id));
  poly.addTo(areaLayer);
});
const markerLayers={};
Object.keys(categories).forEach(cat=>{
  markerLayers[cat]=L.layerGroup().addTo(map);
  spots.filter(s=>s.cat===cat).forEach(s=>{
    const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});
    const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Palma, Mallorca, Spain");
    L.marker(s.c,{icon}).addTo(markerLayers[cat]).on("click",()=>window.open(gmap,"_blank","noopener,noreferrer"));
  });
});

function render(){
  document.querySelector("#days").innerHTML=days.map(d=>"<button onclick='selectDay(\""+d.id+"\")'>"+d.label+"</button>").join("")+"<button onclick='showAreas()'>Explore areas</button>";
  document.querySelector("#filters").innerHTML=Object.entries(categories).map(([k,v])=>"<button class='filter' data-cat='"+k+"' onclick='toggleCat(\""+k+"\",this)'>"+v.icon+" "+v.label+" <span>"+spots.filter(s=>s.cat===k).length+"</span></button>").join("");
  document.querySelector("#plan").innerHTML=
    "<section class='areas'><div class='findings-head'><h2>Explore Palma by area</h2><span>8 city zones</span></div><div class='area-grid'>"+
    areas.map(x=>"<article class='area-card' onclick='focusArea(\""+x.id+"\")'><div class='area-icon'>"+x.icon+"</div><div><div class='area-type'>"+x.type+"</div><h3>"+x.n+"</h3><p>"+x.d+"</p></div></article>").join("")+
    "</div></section>"+
    "<section class='findings'><div class='findings-head'><h2>Palma findings</h2><span>"+spots.length+" places</span></div><div class='photo-grid'>"+
    spots.map((s,idx)=>"<article class='spot-card' onclick='openSpot("+idx+")'><img loading='lazy' src='"+(s.photo||"https://loremflickr.com/640/480/Mallorca,Palma?lock="+(idx+20))+"' alt='"+s.n+"'><div class='spot-info'><div class='spot-cat'>"+categories[s.cat].icon+" "+categories[s.cat].label+"</div><h3>"+s.n+"</h3>"+(s.rating?("<div class='spot-rating'>★★★★★ <strong>"+s.rating+"</strong> · "+(s.reviews||0).toLocaleString()+" reviews</div>"):"")+(s.type?("<p class='spot-type'>"+s.type+"</p>"):"")+"<p>"+s.d+"</p></div></article>").join("")+
    "</div></section>";
  map.fitBounds(L.latLngBounds(spots.map(s=>s.c)),{padding:[40,40]});
}
function selectDay(id){currentDay=id;render()}
function focusArea(id){
  const x=areas.find(a=>a.id===id);
  map.fitBounds(L.latLngBounds(x.p),{padding:[80,80]});
  L.popup().setLatLng(x.c).setContent("<strong>"+x.icon+" "+x.n+"</strong><br><small>"+x.type+"</small><br>"+x.d).openOn(map);
}
function showAreas(){document.querySelector(".areas")?.scrollIntoView({behavior:"smooth",block:"start")}
function showArea(id){focusArea(id)}
function toggleCat(cat,btn){
  if(map.hasLayer(markerLayers[cat])){map.removeLayer(markerLayers[cat]);btn.classList.remove("active")}else{markerLayers[cat].addTo(map);btn.classList.add("active")}
}
render();

function openSpot(idx){const s=spots[idx];const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Palma, Mallorca, Spain");window.open(gmap,"_blank","noopener,noreferrer");}
