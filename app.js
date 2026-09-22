const categories={
  food:{label:"Food",icon:"🍷"},
  sights:{label:"Sights",icon:"🏛️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"},
  hotels:{label:"Hotels",icon:"🏨"},
  villages:{label:"Villages",icon:"🏘️"}
};

const spots=[
  // FOOD
  {by:"Pantelis",n:"Mercat de l'Olivar",c:[39.5749,2.6537],cat:"food",d:"Working food market — jamón, seafood, cheese, olives, local products.",tip:"Go before lunch."},
  {by:"Pantelis",n:"Mercat de Santa Catalina",c:[39.5692,2.6396],cat:"food",d:"Local market, tapas bars, seafood, vermouth and lively neighbourhood atmosphere."},
  {by:"Pantelis",n:"La Rosa Vermutería",c:[39.5730,2.6480],cat:"food",d:"Vermouth, tortilla, croquettes and Mallorcan small plates."},
  {by:"Pantelis",n:"El Camino",c:[39.5719,2.6460],cat:"food",d:"Popular tapas / small plates and natural wine."},
  {by:"Pantelis",n:"Bar España",c:[39.5748,2.6515],cat:"food",d:"No-frills tapas and montaditos near Plaça d'Espanya."},
  {by:"Pantelis",n:"Can Joan de s'Aigo",c:[39.5740,2.6500],cat:"food",d:"Historic stop for ensaïmada, ice cream and almond drinks."},
  {by:"Pantelis",n:"Patrón Lunares",c:[39.5702,2.6388],cat:"food",d:"Santa Catalina seafood and rice dishes."},
  {by:"Pantelis",n:"Casa Gallega",c:[39.5757,2.6540],cat:"food",d:"Traditional Galician seafood, pulpo and padrón peppers."},
  {by:"Pantelis",n:"La Lonja tapas area",c:[39.5680,2.6460],cat:"food",d:"Dense evening tapas / wine-bar zone around the old maritime quarter."},
  {by:"Pantelis",n:"Carrer de la Fàbrica",c:[39.5700,2.6380],cat:"food",d:"Pedestrianised Santa Catalina restaurant street."},

  // SIGHTS
  {by:"Pantelis",n:"La Seu Cathedral",c:[39.5676,2.6487],cat:"sights",d:"Palma's landmark Gothic cathedral beside the sea."},
  {by:"Pantelis",n:"Palau de l'Almudaina",c:[39.5678,2.6470],cat:"sights",d:"Royal palace with Roman, Islamic and Gothic layers."},
  {by:"Pantelis",n:"Banys Àrabs",c:[39.5722,2.6491],cat:"sights",d:"Atmospheric 10th–12th century Arab baths."},
  {by:"Pantelis",n:"Es Baluard Museu",c:[39.5702,2.6420],cat:"sights",d:"Contemporary art inside the historic city walls."},
  {by:"Pantelis",n:"Passeig del Born",c:[39.5700,2.6480],cat:"sights",d:"Tree-lined historic promenade, cafés and elegant façades."},
  {by:"Pantelis",n:"Plaça de Cort",c:[39.5708,2.6508],cat:"sights",d:"City Hall square and the famous old olive tree."},
  {by:"Pantelis",n:"Plaça Major",c:[39.5727,2.6515],cat:"sights",d:"Central Palma square and gateway to the upper old town."},
  {by:"Pantelis",n:"Plaça de la Reina",c:[39.5700,2.6465],cat:"sights",d:"Historic square linking Born, La Lonja and the cathedral."},
  {by:"Pantelis",n:"Santa Eulàlia",c:[39.5713,2.6505],cat:"sights",d:"Historic Gothic church in the old town."},
  {by:"Pantelis",n:"Baluard de Sant Pere",c:[39.5700,2.6400],cat:"sights",d:"Historic bastion with city / harbour views."},
  {by:"Pantelis",n:"Can Balaguer",c:[39.5708,2.6488],cat:"sights",d:"Beautiful preserved Palma courtyard house; free entry."},
  {by:"Pantelis",n:"Casal Solleric",c:[39.5701,2.6478],cat:"sights",d:"Baroque palace on the Born, used for exhibitions."},
  {by:"Pantelis",n:"Can Casasayas",c:[39.5720,2.6470],cat:"sights",d:"Modernist twin façades — one of Palma's best architectural details."},
  {by:"Pantelis",n:"Jewish Quarter / Carrer de Can Serra",c:[39.5720,2.6500],cat:"sights",d:"Quiet medieval lanes and historic Jewish-quarter traces."},
  {by:"Pantelis",n:"Bellver Castle",c:[39.5630,2.6190],cat:"sights",d:"Circular Gothic castle above Palma with panoramic views."},
  {by:"Pantelis",n:"Sant Francesc Basilica",c:[39.5697,2.6518],cat:"sights",d:"Gothic church and atmospheric cloister."},
  {by:"Pantelis",n:"Plaça d'Espanya",c:[39.5754,2.6535],cat:"sights",d:"Main transport square and northern gateway to central Palma."},

  // EXPERIENCES
  {by:"Pantelis",n:"Tablao Flamenco Alma",c:[39.5731,2.6398],cat:"experiences",d:"Intimate flamenco tablao; Friday 16 Oct listings include evening shows.",tip:"Book ahead."},
  {by:"Pantelis",n:"Parc de la Mar",c:[39.5660,2.6502],cat:"experiences",d:"Waterfront park and classic cathedral reflection viewpoint."},
  {by:"Pantelis",n:"Old Town courtyard walk",c:[39.5718,2.6490],cat:"experiences",d:"Wander the hidden patios and stone lanes between La Seu and Plaça Major."},
  {by:"Pantelis",n:"La Lonja evening walk",c:[39.5682,2.6458],cat:"experiences",d:"Historic maritime quarter that comes alive around sunset."},
  {by:"Pantelis",n:"Santa Catalina evening",c:[39.5695,2.6390],cat:"experiences",d:"Market → vermouth → tapas → bars; one of Palma's liveliest local areas."},
  {by:"Pantelis",n:"Portixol waterfront",c:[39.5633,2.6768],cat:"experiences",d:"Seafront walk east of the centre, useful if you want sea rather than old town."},
  {by:"Pantelis",n:"Baluard des Príncep",c:[39.5670,2.6517],cat:"experiences",d:"Medieval defensive wall area and quieter waterfront views."},
  {by:"Pantelis",n:"Palma sunset waterfront",c:[39.5664,2.6489],cat:"experiences",d:"Golden-hour walk between Parc de la Mar and the harbour."},

  // INSTAGRAMMABLE
  {by:"Pantelis",n:"Cathedral × Parc de la Mar reflection",c:[39.5663,2.6505],cat:"instagram",d:"The classic Palma reflection shot."},
  {by:"Pantelis",n:"La Seu stone steps / sea",c:[39.5677,2.6481],cat:"instagram",d:"Cathedral façade with sea and palms."},
  {by:"Pantelis",n:"Passeig del Born",c:[39.5700,2.6480],cat:"instagram",d:"Long symmetrical tree-lined composition."},
  {by:"Pantelis",n:"Can Casasayas",c:[39.5720,2.6470],cat:"instagram",d:"Curved Modernista balconies and twin façades."},
  {by:"Pantelis",n:"Can Corbella",c:[39.5722,2.6510],cat:"instagram",d:"Decorative neo-Mudéjar façade near the old town centre."},
  {by:"Pantelis",n:"Patio / old-town doorway",c:[39.5715,2.6497],cat:"instagram",d:"Look for open historic courtyards and oversized wooden doors."},
  {by:"Pantelis",n:"La Lonja alleys",c:[39.5681,2.6453],cat:"instagram",d:"Stone lanes, Gothic architecture and evening light."},
  {by:"Pantelis",n:"Baluard de Sant Pere viewpoint",c:[39.5700,2.6400],cat:"instagram",d:"Elevated view over the old walls and bay."},
  {by:"Pantelis",n:"Bellver panorama",c:[39.5630,2.6190],cat:"instagram",d:"Best broad city panorama if you have time for the uphill detour."},
  {by:"Pantelis",n:"Santa Catalina streets",c:[39.5694,2.6388],cat:"instagram",d:"Low colourful façades and lively street scene."}
];

const villages=[
  {id:"caimari",name:"Caimari",c:[39.7744,2.8794],day:"sat",data:{description:"",photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"",parking:"",route:""}},
  {id:"lluc",name:"Lluc",c:[39.8231,2.8830],day:"sat",data:{description:"",photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"",parking:"",route:""}},
  {id:"pollenca",name:"Pollença",c:[39.8767,3.0164],day:"both",data:{description:"",photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"",parking:"",route:""}},
  {id:"port-de-pollenca",name:"Port de Pollença",c:[39.9075,3.0815],day:"sun",data:{description:"",photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"",parking:"",route:""}},
  {id:"formentor",name:"Formentor",c:[39.9340,3.1780],day:"sun",data:{description:"",photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"",parking:"",route:""}}
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
let activeCats=new Set(Object.keys(categories));
const map=L.map("map",{zoomControl:true}).setView([39.570,2.648],14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const placeLabels=L.layerGroup().addTo(map);
[
  ["Palma",[39.5699,2.6502]],
  ["Sóller",[39.7662,2.7155]],
  ["Port de Sóller",[39.7969,2.6964]],
  ["Valldemossa",[39.7100,2.6227]],
  ["Deià",[39.7487,2.6487]],
  ["Pollença",[39.8767,3.0164]],
  ["Alcúdia",[39.8530,3.1214]],
  ["Artà",[39.6930,3.3495]],
  ["Santanyí",[39.3546,3.1290]],
  ["Manacor",[39.5696,3.2096]]
].forEach(([name,c])=>{
  const icon=L.divIcon({className:"map-place-label",html:"<span>"+name+"</span>",iconSize:null,iconAnchor:[0,0]});
  L.marker(c,{icon:icon,interactive:false}).addTo(placeLabels);
});
const areaLayer=L.layerGroup().addTo(map);
areas.forEach(a=>{const poly=L.polygon(a.p,{color:"#18211d",weight:1,fillOpacity:.12});poly.bindPopup("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d);poly.on("click",()=>focusArea(a.id));poly.addTo(areaLayer);});
const routes={
  sat:{stops:[
    {n:"Palma",c:[39.5700,2.6480],type:"start",size:"small"},
    {n:"Caimari",c:[39.7744,2.8794],type:"village",size:"long",d:"Village stop — coffee / short wander."},
    {n:"Photo stop · Tramuntana",c:[39.8498,2.9448],type:"photo",size:"small",d:"Demo photo stop — quick viewpoint / small roadside stop."},
    {n:"Santuari de Lluc",c:[39.8231,2.8830],type:"sight",size:"long",d:"Monastery, basilica and mountain surroundings."},
    {n:"Pollença Old Town",c:[39.8767,3.0164],type:"village",size:"long",d:"Old-town walk and Calvari."},
    {n:"Calvari Steps",c:[39.8769,3.0160],type:"sight",size:"small",d:"Historic staircase and viewpoint above Pollença."}
  ]},
  sun:{stops:[
    {n:"Pollença",c:[39.8767,3.0164],type:"start",size:"small"},
    {n:"Port de Pollença",c:[39.9084,3.0832],type:"village",size:"long",d:"Waterfront breakfast / walk."},
    {n:"Mirador Es Colomer",c:[39.9328,3.1832],type:"sight",size:"small",d:"Clifftop viewpoint over the Formentor peninsula."},
    {n:"Formentor Beach",c:[39.9357,3.2040],type:"sight",size:"long",d:"Beach and sea stop."},
    {n:"Cap de Formentor",c:[39.9600,3.2095],type:"sight",size:"long",d:"Dramatic northern tip and lighthouse viewpoint."},
    {n:"Pollença",c:[39.8767,3.0164],type:"end",size:"small"}
  ]}
};
let routeLayer=L.layerGroup(),routeVisible=false;
async function drawRoute(id){
  routeLayer.clearLayers();
  const r=routes[id]; if(!r) return;
  // Follow the actual road network instead of drawing straight lines between stops.
  const coords=r.stops.map(x=>x.c[1]+","+x.c[0]).join(";");
  let geometry=null;
  const endpoints=[
    "https://router.project-osrm.org/route/v1/driving/",
    "https://routing.openstreetmap.de/routed-car/route/v1/driving/"
  ];
  for(const endpoint of endpoints){
    if(geometry)break;
    try{
      const res=await fetch(endpoint+coords+"?overview=full&geometries=geojson&steps=false");
      if(res.ok){
        const data=await res.json();
        if(data.routes&&data.routes[0]&&data.routes[0].geometry){
          geometry=data.routes[0].geometry.coordinates.map(p=>[p[1],p[0]]);
        }
      }
    }catch(e){}
  }
  if(geometry){
    L.polyline(geometry,{color:"#146BFF",weight:6,opacity:.9}).addTo(routeLayer);
  }
  r.stops.forEach((x,i)=>{
    const size=x.size==="long"?"large":"small";
    const cls="route-pin route-"+x.type+" route-"+size;
    const iconSize=x.size==="long"?[38,38]:[26,26];
    const anchor=x.size==="long"?[19,19]:[13,13];
    const glyph=x.type==="sight"?"◆":x.type==="village"?"●":x.type==="photo"?"📷":x.type==="start"?"▶":"■";
    const icon=L.divIcon({className:cls,html:"<span>"+glyph+"</span>",iconSize:iconSize,iconAnchor:anchor});
    const marker=L.marker(x.c,{icon:icon}).addTo(routeLayer);
    const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(x.n+", Mallorca, Spain");marker.bindPopup("<div class=\"route-popup\" data-gmap=\""+gmap+"\"><strong>"+x.n+"</strong>"+(x.d?"<br><small>"+x.d+"</small>":"")+"<br><span>Open in Google Maps →</span></div>");marker.on("popupopen",e=>{const el=e.popup.getElement()?.querySelector(".route-popup");if(el)el.onclick=()=>window.open(el.dataset.gmap,"_blank","noopener,noreferrer");});
    const routeLink="<a href=\""+gmap+"\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"route-label-link\">"+x.n+"</a>";marker.bindTooltip(routeLink,{permanent:true,direction:"top",offset:[0,x.size==="long"?-22:-16],className:"route-label",interactive:true});
  });
}
function toggleRoute(){if(!routes[currentDay])return;routeVisible=!routeVisible;if(routeVisible){drawRoute(currentDay);routeLayer.addTo(map);}else{map.removeLayer(routeLayer);}const b=document.querySelector("#route-toggle");if(b){b.textContent=routeVisible?"Hide route":"Show route";b.classList.toggle("active",routeVisible);}}
const markerLayers={};
Object.keys(categories).forEach(cat=>{markerLayers[cat]=L.layerGroup().addTo(map);spots.filter(s=>s.cat===cat).forEach(s=>{const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain");const marker=L.marker(s.c,{icon:icon}).addTo(markerLayers[cat]);marker.bindPopup("<strong>"+s.n+"</strong><br><a href=\""+gmap+"\" target=\"_blank\" rel=\"noopener noreferrer\">Open in Google Maps</a>");marker.on("click",()=>marker.openPopup());});});
function addAgentMarkers(){
  const seen=new Set();
  Object.keys(markerLayers).forEach(cat=>markerLayers[cat].eachLayer(m=>{const p=m.getLatLng();seen.add(cat+"|"+p.lat.toFixed(6)+"|"+p.lng.toFixed(6));}));
  spots.filter(s=>s.by==="Agent").forEach(s=>{
    const cat=s.cat||"experiences";
    if(!markerLayers[cat])return;
    const key=cat+"|"+s.c[0].toFixed(6)+"|"+s.c[1].toFixed(6);
    if(seen.has(key))return;
    const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});
    const gmap=s.googleMapsUrl||("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain"));
    const marker=L.marker(s.c,{icon}).addTo(markerLayers[cat]);
    marker.bindPopup("<strong>"+s.n+"</strong><br><a href=\""+gmap+"\" target=\"_blank\" rel=\"noopener noreferrer\">Open in Google Maps</a>");
  });
}
function render(){
const day=days.find(d=>d.id===currentDay)||days[0];
const dayCats=[...new Set(day.plan.map(x=>x[3]))];
if(currentDay==="sat"||currentDay==="sun")dayCats.push("villages");
const daySpots=spots.filter(s=>activeCats.has(s.cat)&&(dayCats.includes(s.cat)||s.by==="Agent")&&(!s.day||s.day==="both"||s.day===currentDay));
const dayVillages=villages.filter(v=>activeCats.has("villages")&&dayCats.includes("villages")&&(v.day==="both"||v.day===currentDay));
document.querySelector("#days").innerHTML=days.map(d=>"<button type='button' class='"+(d.id===currentDay?"active":"")+"' data-day='"+d.id+"'>"+d.label+"</button>").join("");
document.querySelector("#filters").innerHTML=Object.entries(categories).filter(([k])=>k!=="villages"||dayVillages.length>0).map(([k,v])=>"<button type='button' class='filter "+(activeCats.has(k)?"active":"")+"' data-cat='"+k+"'>"+v.icon+" "+v.label+" <span>"+(k==="villages"?dayVillages.length:spots.filter(s=>s.cat===k&&dayCats.includes(k)&&(!s.day||s.day==="both"||s.day===currentDay)).length)+"</span></button>").join("");
document.querySelector("h1").textContent=day.title;document.querySelector(".sub").textContent=day.sub;
routeVisible=false;map.removeLayer(routeLayer);
const plan=day.plan.map((x,i)=>"<article class='day-card'><div class='day-number'>"+String(i+1).padStart(2,"0")+"</div><div class='day-content'><div class='time'>"+x[0]+"</div><h3>"+x[1]+"</h3><p>"+x[2]+"</p><span class='tag'>"+categories[x[3]].icon+" "+categories[x[3]].label+"</span><div class='route'>"+x[4]+"</div></div></article>").join("");
const cards=daySpots.map(s=>{const i=spots.indexOf(s);const addedBy=s.by||"Pantelis";const photo=s.photo||"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=640&q=80";const fallback="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=640&q=80";return "<article class='spot-card' data-cat='"+s.cat+"' onclick='openSpot("+i+")'><img loading='lazy' src='"+photo+"' onerror='this.onerror=null;this.src=\""+fallback+"\"' alt='"+s.n+"'><div class='spot-info'><div class='spot-meta'><div class='spot-cat'>"+categories[s.cat].icon+" "+categories[s.cat].label+"</div><span class='finder-tag'>"+addedBy+"</span></div><h3>"+s.n+"</h3>"+(s.rating?"<div class='spot-rating'>★★★★★ <strong>"+s.rating+"</strong> · "+(s.reviews||0).toLocaleString()+" reviews</div>":"")+(s.type?"<p class='spot-type'>"+s.type+"</p>":"")+(s.address?"<p class='spot-type'>"+s.address+"</p>":"")+"<p>"+s.d+"</p>"+(s.userReviews&&s.userReviews.length?"<blockquote class='agent-review'>“"+String(s.userReviews[0].text||s.userReviews[0].review||s.userReviews[0]).slice(0,180)+"”</blockquote>":"")+"</div></article>";}).join("");
const villagesHtml=dayVillages.map(v=>"<article class='spot-card village-card' data-cat='villages' data-village='"+v.id+"'><div class='spot-info'><div class='spot-cat'>🏘️ Villages</div><h3>"+v.name+"</h3>"+(v.data.rating?"<div class='spot-rating'>★★★★★ <strong>"+v.data.rating+"</strong> · "+(v.data.reviews||0).toLocaleString()+" reviews</div>":"")+"<p>"+(v.data.description||"Open this village to see its own saved data.")+"</p></div></article>").join("");
document.querySelector("#plan").innerHTML="<section class='day-panel'><div class='findings-head'><div><h2>"+day.label+" · Plan</h2><p class='day-description'>"+day.sub+"</p></div><div class='day-tools'>"+(routes[currentDay]?"<button type='button' id='route-toggle' class='route-toggle' onclick='toggleRoute()'>Show route</button>":"")+"<span>"+day.plan.length+" stops</span></div></div><div class='day-grid'>"+plan+"</div></section><section class='findings'><div class='findings-head'><h2>"+(currentDay==="sat"||currentDay==="sun"?"Day addons":"Palma addons")+"</h2><span>"+(daySpots.length+dayVillages.length)+" places</span></div><div class='photo-grid'>"+cards+villagesHtml+"</div></section>";
if(routes[currentDay]){drawRoute(currentDay);routeLayer.addTo(map);routeVisible=true;const b=document.querySelector("#route-toggle");if(b){b.textContent="Hide route";b.classList.add("active");}}
const pts=daySpots.map(s=>s.c).concat(dayVillages.map(v=>v.c));if(pts.length)map.fitBounds(L.latLngBounds(pts),{padding:[40,40]});
}
function openSpot(i){const s=spots[i];if(!s)return;const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain");window.open(gmap,"_blank","noopener,noreferrer");}
function openVillage(id){const v=villages.find(x=>x.id===id);if(!v)return;const d=v.data||{};let html="<section class='day-panel'><div class='findings-head'><div><h2>🏘️ "+v.name+"</h2><p class='day-description'>"+(d.description||"Village data")+"</p></div><button type='button' class='route-toggle' onclick='render()'>Back</button></div>";if(d.photos&&d.photos.length)html+="<div class='photo-grid'>"+d.photos.map(p=>"<img loading='lazy' src='"+p+"' alt='"+v.name+"'>").join("")+"</div>";if(d.rating)html+="<div class='spot-rating'>★★★★★ <strong>"+d.rating+"</strong> · "+(d.reviews||0).toLocaleString()+" reviews</div>";[["Food",d.food],["Sights",d.sights],["Experiences",d.experiences],["Instagrammable",d.instagram],["Hotels",d.hotels],["Notes",d.notes]].forEach(x=>{if(x[1]&&x[1].length)html+="<div class='day-card'><div class='day-content'><div class='time'>"+x[0]+"</div>"+x[1].map(t=>"<p>"+t+"</p>").join("")+"</div></div>";});if(d.parking)html+="<div class='day-card'><div class='day-content'><div class='time'>Parking</div><p>"+d.parking+"</p></div></div>";if(d.route)html+="<div class='day-card'><div class='day-content'><div class='time'>Route</div><p>"+d.route+"</p></div></div>";html+="</section>";document.querySelector("#plan").innerHTML=html;document.querySelector("#plan").scrollIntoView({behavior:"smooth",block:"start"});}
document.addEventListener("click",e=>{const day=e.target.closest("#days [data-day]");if(day){currentDay=day.dataset.day;activeCats=new Set(Object.keys(categories));render();return;}const village=e.target.closest("[data-village]");if(village){openVillage(village.dataset.village);return;}const cat=e.target.closest("#filters [data-cat]");if(cat){toggleCat(cat.dataset.cat,cat);return;}});
function focusArea(id){const a=areas.find(x=>x.id===id);if(!a)return;map.fitBounds(L.latLngBounds(a.p),{padding:[80,80]});L.popup().setLatLng(a.c).setContent("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d).openOn(map);}
function toggleCat(cat,btn){
  if(activeCats.has(cat)){
    activeCats.delete(cat);
    map.removeLayer(markerLayers[cat]);
  }else{
    activeCats.add(cat);
    markerLayers[cat].addTo(map);
  }
  render();
}
async function loadAgentData(){
  try{
    const res=await fetch("data/agent-items.json?ts="+Date.now());
    if(!res.ok)return;
    const data=await res.json();
    (data.spots||[]).forEach(s=>{if(!spots.some(x=>x.id&&s.id&&x.id===s.id))spots.push(s);});
    (data.villages||[]).forEach(v=>{if(!villages.some(x=>x.id&&v.id&&x.id===v.id))villages.push(v);});
  }catch(e){}
}
function openAgent(){
  const modal=document.querySelector("#agent-modal");
  const input=document.querySelector("#agent-input");
  if(!modal)return;
  modal.hidden=false;
  document.querySelector("#agent-message").textContent="";
  setTimeout(()=>input?.focus(),0);
}
function closeAgent(){const modal=document.querySelector("#agent-modal");if(modal)modal.hidden=true;}
async function runAgent(){
  const input=document.querySelector("#agent-input");
  const message=document.querySelector("#agent-message");
  const status=document.querySelector("#agent-status");
  const request=(input?.value||"").trim();
  if(!request)return;
  const base=window.MALLORCA_AGENT_URL||"";
  if(!base){message.textContent="Agent backend is not configured.";return;}
  message.textContent="Searching Google Maps and updating the trip…";
  status.textContent="Agent working…";
  const button=document.querySelector("#agent-run");if(button)button.disabled=true;
  try{
    const res=await fetch(base.replace(/\/$/,"")+"/agent",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({request,day:currentDay})});
    const data=await res.json();
    if(!res.ok||!data.ok)throw new Error(data.error||"Agent failed");
    await loadAgentData();
    addAgentMarkers();
    render();
    message.textContent=data.message||"Trip updated.";
    status.textContent="Updated";
    setTimeout(()=>{status.textContent="";closeAgent();},900);
  }catch(e){message.textContent=e.message||"Agent failed.";status.textContent="";}
  finally{if(button)button.disabled=false;}
}
document.querySelector("#agent-add")?.addEventListener("click",openAgent);
document.querySelector("#agent-run")?.addEventListener("click",runAgent);
document.querySelectorAll("[data-close-agent]").forEach(el=>el.addEventListener("click",closeAgent));
document.querySelectorAll("[data-agent-example]").forEach(el=>el.addEventListener("click",()=>{document.querySelector("#agent-input").value=el.dataset.agentExample;document.querySelector("#agent-input").focus();}));
document.querySelector("#agent-input")?.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter")runAgent();});
loadAgentData().then(()=>{addAgentMarkers();render();});