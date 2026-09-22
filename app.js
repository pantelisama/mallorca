const categories={
  food:{label:"Φαγητό",icon:"🍷"},
  sights:{label:"Αξιοθέατα",icon:"🏛️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"}
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
  {id:"oldtown",n:"Palma Old Town",type:"Historic",icon:"🏛️",c:[39.5717,2.6490],d:"Medieval lanes, courtyards, churches, palaces and the historic city centre.",p:[[39.5750,2.6460],[39.5748,2.6545],[39.5680,2.6540],[39.5675,2.6440],[39.5710,2.6415]]},
  {id:"lonja",n:"La Lonja",type:"Bars & Food",icon:"🍸",c:[39.5685,2.6460],d:"Compact evening zone around the old maritime quarter: tapas, wine and bars.",p:[[39.5705,2.6418],[39.5718,2.6480],[39.5682,2.6500],[39.5665,2.6450]]},
  {id:"santacatalina",n:"Santa Catalina",type:"Restaurants & Bars",icon:"🍽️",c:[39.5700,2.6388],d:"Neighbourhood market, restaurants, vermouth, bars and evening atmosphere.",p:[[39.5725,2.6355],[39.5720,2.6415],[39.5680,2.6420],[39.5675,2.6360]]},
  {id:"esjonquet",n:"Es Jonquet",type:"Historic / Nightlife",icon:"🌙",c:[39.5680,2.6380],d:"Old fishermen's quarter with windmills, narrow streets and nightlife nearby.",p:[[39.5700,2.6348],[39.5705,2.6395],[39.5670,2.6410],[39.5660,2.6360]]},
  {id:"born",n:"Passeig del Born",type:"Shopping & Architecture",icon:"🏙️",c:[39.5702,2.6480],d:"Grand central promenade with historic façades, cafés and shopping streets.",p:[[39.5720,2.6455],[39.5720,2.6500],[39.5688,2.6500],[39.5685,2.6460]]},
  {id:"portixol",n:"Portixol",type:"Waterfront",icon:"🌊",c:[39.5620,2.6760],d:"Seafront promenade, small beaches, restaurants and sunset by the water.",p:[[39.5650,2.6690],[39.5650,2.6810],[39.5590,2.6820],[39.5585,2.6710]]},
  {id:"terreno",n:"El Terreno",type:"Bars & Nightlife",icon:"🍸",c:[39.5638,2.6255],d:"West-side nightlife district between Bellver and the waterfront.",p:[[39.5680,2.6210],[39.5680,2.6310],[39.5600,2.6320],[39.5595,2.6220]]},
  {id:"peregarau",n:"Pere Garau",type:"Market / Local",icon:"🥬",c:[39.5738,2.6570],d:"More everyday Palma: market, local shops and a less polished neighbourhood feel.",p:[[39.5770,2.6530],[39.5770,2.6620],[39.5710,2.6620],[39.5705,2.6540]]}
];

const days=[
  {id:"fri",label:"Fri 16",title:"Palma · Friday 16",sub:"Arrival · Old Town · food · culture · sunset · nightlife",plan:[
    ["Arrival","Palma Old Town","Start at Parc de la Mar → La Seu → Almudaina → old-town lanes → La Lonja → Born.","experiences","Easy first walk after landing."],
    ["Golden hour","Cathedral / Parc de la Mar","Do the cathedral reflection and waterfront before heading deeper into the old town.","instagram","Best light around sunset."],
    ["Early evening","Old Town","Banys Àrabs → Santa Eulàlia → Plaça de Cort → Can Joan de s'Aigo → Plaça Major.","sights","Compact walk."],
    ["Dinner","La Lonja / Santa Catalina","Choose between a tapas crawl around La Lonja or the more neighbourhood-focused Santa Catalina.","food","See the food category for the shortlist."],
    ["Night option","Tablao Flamenco Alma","Flamenco is listed for Friday 16 Oct 2026; check the current listing and book ahead.","experiences","Optional depending on arrival energy."]
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
  document.querySelector("#days").innerHTML=days.map(d=>"<button class='"+(d.id===currentDay?"active":"")+"' onclick='selectDay(\""+d.id+"\",this)'>"+d.label+"</button>").join("");
  document.querySelector("#filters").innerHTML=
  "<div class='filter-group'><div class='filter-label'>FINDINGS</div>"+Object.entries(categories).map(([k,v])=>"<button class='filter active' data-cat='"+k+"' onclick='toggleCat(\""+k+"\",this)'>"+v.icon+" "+v.label+" <span>"+spots.filter(s=>s.cat===k).length+"</span></button>").join("")+"</div>"+
  "<div class='filter-group'><div class='filter-label'>AREAS</div>"+areas.map(a=>"<button class='filter area-filter' onclick='focusArea(\""+a.id+"\")'>"+a.icon+" "+a.n+"</button>").join("")+"</div>";
  const d=days.find(x=>x.id===currentDay);
  document.querySelector("#plan").innerHTML=
    "<div class='plan-intro'><h2>"+d.title+"</h2><p>"+d.sub+"</p></div>"+
    d.plan.map(i=>"<article class='card'><div class='time'>"+i[0]+"</div><div class='title'>"+i[1]+"</div><div class='desc'>"+i[2]+"</div><span class='tag'>"+categories[i[3]].icon+" "+categories[i[3]].label+"</span><div class='route'>"+i[4]+"</div></article>").join("")+
    "<section class='findings'><div class='findings-head'><h2>Palma findings</h2><span>"+spots.length+" places</span></div><div class='photo-grid'>"+
    spots.map((s,idx)=>"<article class='spot-card' onclick='openSpot("+idx+")'><img loading='lazy' src='https://loremflickr.com/640/480/"+encodeURIComponent(s.n)+",Palma,Mallorca?lock="+(idx+20)+"' alt='"+s.n+"' onerror='this.src=&quot;https://loremflickr.com/640/480/Mallorca,Palma?lock=999&quot;'><div class='spot-info'><div class='spot-cat'>"+categories[s.cat].icon+" "+categories[s.cat].label+"</div><h3>"+s.n+"</h3><p>"+s.d+"</p></div></article>").join("")+
    "</div></section>";
  map.fitBounds(L.latLngBounds(spots.map(s=>s.c)),{padding:[40,40]});
}
function selectDay(id,btn){currentDay=id;document.querySelectorAll("#days button").forEach(b=>b.classList.remove("active"));if(btn)btn.classList.add("active");render()}
function focusArea(id){
  const a=areas.find(x=>x.id===id);
  map.fitBounds(L.latLngBounds(a.p),{padding:[80,80]});
  L.popup().setLatLng(a.c).setContent("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d).openOn(map);
  document.querySelectorAll(".area-filter").forEach(b=>b.classList.remove("active"));
}
function showArea(id){focusArea(id)}
function toggleCat(cat,btn){
  if(map.hasLayer(markerLayers[cat])){map.removeLayer(markerLayers[cat]);btn.classList.remove("active")}else{markerLayers[cat].addTo(map);btn.classList.add("active")}
}
render();

function openSpot(idx){const s=spots[idx];const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Palma, Mallorca, Spain");window.open(gmap,"_blank","noopener,noreferrer");}
