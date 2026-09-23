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
  {by:"Pantelis",n:"Santa Catalina streets",c:[39.5694,2.6388],cat:"instagram",d:"Low colourful façades and lively street scene."},

  // HOTELS · PALMA
  {by:"Pantelis",n:"Hotel Can Cera",c:[39.5718,2.6505],cat:"hotels",d:"Boutique hotel in a 17th-century palace with a quiet courtyard."},
  {by:"Pantelis",n:"Sant Francesc Hotel Singular",c:[39.5695,2.6522],cat:"hotels",d:"Old-town mansion with a rooftop pool and cathedral views."},
  {by:"Pantelis",n:"Hotel Cort",c:[39.5709,2.6509],cat:"hotels",d:"Design hotel right on Plaça de Cort, next to the olive tree."},
  {by:"Pantelis",n:"Palacio Ca Sa Galesa",c:[39.5683,2.6500],cat:"hotels",d:"Small palace hotel steps from La Seu and the Arab baths."},

  // SATURDAY · CAIMARI · LLUC · POLLENÇA
  {by:"Pantelis",n:"Ca Na Toneta",c:[39.7738,2.8787],cat:"food",day:"sat",d:"Caimari restaurant cooking seasonal Mallorcan produce."},
  {by:"Pantelis",n:"Sa Fonda · Lluc",c:[39.8230,2.8835],cat:"food",day:"sat",d:"Traditional dining hall in the old monastery building."},
  {by:"Pantelis",n:"Cantonet",c:[39.8771,3.0158],cat:"food",day:"sat",d:"Pollença terrace restaurant near the foot of the Calvari steps."},
  {by:"Pantelis",n:"Clivia",c:[39.8762,3.0180],cat:"food",day:"sat",d:"Classic Pollença restaurant for fish and Mallorcan dishes."},
  {by:"Pantelis",n:"Santuari de Lluc",c:[39.8231,2.8830],cat:"sights",day:"sat",d:"Mallorca's spiritual heart: basilica and monastery in the mountains."},
  {by:"Pantelis",n:"Jardí Botànic de Lluc",c:[39.8226,2.8818],cat:"sights",day:"sat",d:"Small botanical garden with Tramuntana plants beside the sanctuary."},
  {by:"Pantelis",n:"Calvari Steps",c:[39.8769,3.0160],cat:"sights",day:"sat",d:"365 cypress-lined steps up to the Calvari chapel."},
  {by:"Pantelis",n:"Pont Romà",c:[39.8812,3.0130],cat:"sights",day:"sat",d:"Old stone bridge on the northern edge of Pollença."},
  {by:"Pantelis",n:"Olive oil tasting · Caimari",c:[39.7755,2.8805],cat:"experiences",day:"sat",d:"Caimari is an olive-oil village — taste the local DO Oli de Mallorca."},
  {by:"Pantelis",n:"Escolania de Lluc choir",c:[39.8232,2.8832],cat:"experiences",day:"sat",d:"The Blauets boys' choir sings in the basilica on many days — check times."},
  {by:"Pantelis",n:"Ma-10 mountain drive",c:[39.8150,2.8200],cat:"experiences",day:"sat",d:"Scenic Tramuntana road past reservoirs and limestone peaks."},
  {by:"Pantelis",n:"Puig de Maria hike",c:[39.8640,3.0275],cat:"experiences",day:"sat",d:"Steep walk from Pollença to a hilltop hermitage with bay views."},
  {by:"Pantelis",n:"Calvari viewpoint",c:[39.8783,3.0140],cat:"instagram",day:"sat",d:"Rooftops of Pollença and the bay from the top of the steps."},
  {by:"Pantelis",n:"Gorg Blau reservoir",c:[39.8095,2.7950],cat:"instagram",day:"sat",d:"Turquoise reservoir framed by mountains on the Ma-10."},
  {by:"Pantelis",n:"Pont Romà arches",c:[39.8812,3.0131],cat:"instagram",day:"sat",d:"Stone arches over the torrent, best in soft afternoon light."},
  {by:"Pantelis",n:"Lluc basilica façade",c:[39.8231,2.8829],cat:"instagram",day:"sat",d:"Monastery courtyard with the mountains behind."},
  {by:"Pantelis",n:"Hotel Juma",c:[39.8768,3.0163],cat:"hotels",day:"sat",d:"Small historic hotel on Pollença's Plaça Major."},
  {by:"Pantelis",n:"Hotel Desbrull",c:[39.8773,3.0150],cat:"hotels",day:"sat",d:"Simple boutique rooms in a Pollença townhouse."},
  {by:"Pantelis",n:"Son Brull Hotel & Spa",c:[39.8585,3.0105],cat:"hotels",day:"sat",d:"Former monastery estate just outside Pollença."},
  {by:"Pantelis",n:"Hostatgeria Santuari de Lluc",c:[39.8233,2.8826],cat:"hotels",day:"sat",d:"Stay inside the monastery — simple rooms, silent mountain nights."},

  // SUNDAY · PORT DE POLLENÇA · FORMENTOR
  {by:"Pantelis",n:"Stay",c:[39.9070,3.0848],cat:"food",day:"sun",d:"Seafood restaurant on the Port de Pollença pier."},
  {by:"Pantelis",n:"Corb Marí",c:[39.9095,3.0815],cat:"food",day:"sun",d:"Waterfront grill and fish on the Pine Walk."},
  {by:"Pantelis",n:"Can Cuarassa",c:[39.8925,3.0870],cat:"food",day:"sun",d:"Sea-view terrace on the bay road towards Alcúdia."},
  {by:"Pantelis",n:"El Pi de sa Posada",c:[39.9305,3.1345],cat:"food",day:"sun",d:"Beachside lunch under the pines at Platja de Formentor."},
  {by:"Pantelis",n:"Cap de Formentor Lighthouse",c:[39.9616,3.2127],cat:"sights",day:"sun",d:"The island's northern tip — check current road access."},
  {by:"Pantelis",n:"Mirador Es Colomer",c:[39.9235,3.1115],cat:"sights",day:"sun",d:"Famous clifftop viewpoint over the Formentor coast."},
  {by:"Pantelis",n:"Talaia d'Albercutx",c:[39.9215,3.1170],cat:"sights",day:"sun",d:"Old watchtower above Es Colomer with 360° views."},
  {by:"Pantelis",n:"Platja de Formentor",c:[39.9313,3.1333],cat:"sights",day:"sun",d:"Pine-fringed beach with calm, clear water."},
  {by:"Pantelis",n:"Boat to Formentor beach",c:[39.9065,3.0860],cat:"experiences",day:"sun",d:"Ferry from Port de Pollença harbour to Platja de Formentor."},
  {by:"Pantelis",n:"Pine Walk · Passeig Vora Mar",c:[39.9110,3.0800],cat:"experiences",day:"sun",d:"Seafront path under the pines in Port de Pollença."},
  {by:"Pantelis",n:"Kayak in the bay",c:[39.9080,3.0870],cat:"experiences",day:"sun",d:"Calm-water kayak or paddleboard from Port de Pollença."},
  {by:"Pantelis",n:"Swim at Cala Figuera",c:[39.9530,3.1780],cat:"experiences",day:"sun",d:"Small wild cove on the Formentor peninsula, short walk down."},
  {by:"Pantelis",n:"Es Colomer islet",c:[39.9236,3.1117],cat:"instagram",day:"sun",d:"The classic cliff-and-islet shot from the mirador."},
  {by:"Pantelis",n:"Formentor lighthouse sunset",c:[39.9617,3.2126],cat:"instagram",day:"sun",d:"Lighthouse and sheer cliffs in golden light."},
  {by:"Pantelis",n:"Pine Walk trees",c:[39.9112,3.0798],cat:"instagram",day:"sun",d:"Pines leaning over the water along the promenade."},
  {by:"Pantelis",n:"Formentor turquoise water",c:[39.9314,3.1335],cat:"instagram",day:"sun",d:"Clear water and pines from the beach jetty."},
  {by:"Pantelis",n:"Formentor, a Royal Hideaway Hotel",c:[39.9300,3.1360],cat:"hotels",day:"sun",d:"Legendary 1929 hotel on Formentor beach."},
  {by:"Pantelis",n:"Hotel Illa d'Or",c:[39.9120,3.0780],cat:"hotels",day:"sun",d:"Classic seafront hotel at the end of the Pine Walk."},
  {by:"Pantelis",n:"Hotel Miramar",c:[39.9085,3.0830],cat:"hotels",day:"sun",d:"Traditional hotel facing the bay in Port de Pollença."},
  {by:"Pantelis",n:"Hotel Daina",c:[39.9090,3.0825],cat:"hotels",day:"sun",d:"Waterfront hotel near the Port de Pollença marina."}
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
const leafletReady=typeof window.L!=="undefined";
const map=leafletReady?L.map("map",{zoomControl:true}).setView([39.570,2.648],14):null;
if(leafletReady)L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const areaLayer=leafletReady?L.layerGroup().addTo(map):null;
if(!leafletReady){const mapEl=document.querySelector("#map");if(mapEl){mapEl.innerHTML="<div class='map-fallback'><strong>Map unavailable</strong><span>The map service did not load. The trip planner is still available below.</span></div>";}}
if(leafletReady)areas.forEach(a=>{const poly=L.polygon(a.p,{color:"#18211d",weight:1,fillOpacity:.12});poly.bindPopup("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d);poly.on("click",()=>focusArea(a.id));poly.addTo(areaLayer);});
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
    {n:"Mirador Es Colomer",c:[39.9235,3.1115],type:"sight",size:"small",d:"Clifftop viewpoint over the Formentor peninsula."},
    {n:"Formentor Beach",c:[39.9313,3.1333],type:"sight",size:"long",d:"Beach and sea stop."},
    {n:"Cap de Formentor",c:[39.9616,3.2127],type:"sight",size:"long",d:"Dramatic northern tip and lighthouse viewpoint."},
    {n:"Pollença",c:[39.8767,3.0164],type:"end",size:"small"}
  ]}
};
let routeLayer=leafletReady?L.layerGroup():null,routeVisible=false,routeToken=0;
function escAttr(v){return String(v).replace(/&/g,"&amp;").replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/</g,"&lt;");}
async function drawRoute(id){
  if(!leafletReady||!routeLayer)return;
  const token=++routeToken;
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
  // Ignore results from an older request (e.g. the user switched day while routing was loading).
  if(token!==routeToken)return;
  if(geometry){
    L.polyline(geometry,{color:"#146BFF",weight:6,opacity:.95,lineCap:"round",lineJoin:"round"}).addTo(routeLayer);
  }
  r.stops.forEach((x,i)=>{
    const size=x.size==="long"?"large":"small";
    const cls="route-pin route-"+x.type+" route-"+size;
    const iconSize=x.size==="long"?[38,38]:[26,26];
    const anchor=x.size==="long"?[19,19]:[13,13];
    const glyph=x.type==="sight"?"◆":x.type==="village"?"●":x.type==="photo"?"📷":x.type==="start"?"▶":"■";
    const icon=L.divIcon({className:cls,html:"<span>"+glyph+"</span>",iconSize:iconSize,iconAnchor:anchor});
    const marker=L.marker(x.c,{icon:icon}).addTo(routeLayer);
    marker.bindPopup("<strong>"+x.n+"</strong>"+(x.d?"<br><small>"+x.d+"</small>":""));
    marker.bindTooltip(x.n,{permanent:true,direction:"top",offset:[0,x.size==="long"?-22:-16],className:"route-label"});
  });
}
function toggleRoute(){if(!routes[currentDay]||!map)return;routeVisible=!routeVisible;if(routeVisible){drawRoute(currentDay);routeLayer.addTo(map);}else{map.removeLayer(routeLayer);}const b=document.querySelector("#route-toggle");if(b){b.textContent=routeVisible?"Hide route":"Show route";b.classList.toggle("active",routeVisible);}}
const markerLayers={};
Object.keys(categories).forEach(cat=>{markerLayers[cat]=leafletReady?L.layerGroup().addTo(map):null;if(!leafletReady)return;spots.filter(s=>s.cat===cat).forEach(s=>{const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain");L.marker(s.c,{icon:icon}).addTo(markerLayers[cat]).on("click",()=>window.open(gmap,"_blank","noopener,noreferrer"));});});
// Spots without an explicit day are Palma places, so only show them on the Palma days.
function spotOnDay(s,dayId){return s.day?(s.day==="both"||s.day===dayId):(dayId==="fri"||dayId==="mon");}
// Optional Google Maps Platform key (Places API "New"). Restrict it to pantelisama.github.io in Google Cloud.
// With a key, cards show Google photos, stars and review counts; without one, photos come from Wikimedia Commons.
const GOOGLE_MAPS_KEY="";
const ENRICH_STORE="mallorca-enrich-v1";
let enrich={};
try{enrich=JSON.parse(localStorage.getItem(ENRICH_STORE)||"{}")||{};}catch(e){enrich={};}
function saveEnrich(){try{localStorage.setItem(ENRICH_STORE,JSON.stringify(enrich));}catch(e){}}
function spotData(s){const e=enrich[s.n]||{};return {photo:s.photo||e.photo||"",rating:s.rating||e.rating||null,reviews:s.reviews||e.reviews||null,gmap:e.gmap||""};}
function spotCardHtml(s){
  const i=spots.indexOf(s);const cat=categories[s.cat];const x=spotData(s);
  const media=x.photo?"<img loading='lazy' src='"+escAttr(x.photo)+"' alt='"+escAttr(s.n)+"'>":"<div class='spot-photo-empty spot-photo-"+s.cat+"'><span>"+cat.icon+"</span></div>";
  const rating=x.rating?"<span class='stars'>★ "+x.rating.toFixed(1)+"</span> · "+(x.reviews||0).toLocaleString()+" reviews":"<span class='stars'>★</span> Google Maps";
  return "<article class='spot-card' data-spot-index='"+i+"' tabindex='0' role='button'><div class='spot-photo'>"+media+"</div><div class='spot-info'><div class='spot-meta'><div class='spot-cat'>"+cat.icon+" "+cat.label+"</div>"+(s.by?"<span class='finder-tag'>"+s.by+"</span>":"")+"</div><h3>"+s.n+"</h3>"+(s.type?"<p class='spot-type'>"+s.type+"</p>":"")+"<p>"+s.d+"</p><div class='spot-rating'>"+rating+" →</div></div></article>";
}
async function fetchGooglePlace(s){
  const res=await fetch("https://places.googleapis.com/v1/places:searchText",{method:"POST",headers:{"Content-Type":"application/json","X-Goog-Api-Key":GOOGLE_MAPS_KEY,"X-Goog-FieldMask":"places.rating,places.userRatingCount,places.photos,places.googleMapsUri"},body:JSON.stringify({textQuery:s.n+", Mallorca, Spain",maxResultCount:1,locationBias:{circle:{center:{latitude:s.c[0],longitude:s.c[1]},radius:1500}}})});
  if(!res.ok)return null;
  const p=((await res.json()).places||[])[0];if(!p)return null;
  const photo=p.photos&&p.photos[0]?"https://places.googleapis.com/v1/"+p.photos[0].name+"/media?maxWidthPx=640&key="+GOOGLE_MAPS_KEY:"";
  return {photo:photo,rating:p.rating||null,reviews:p.userRatingCount||null,gmap:p.googleMapsUri||""};
}
async function fetchCommonsPhoto(s){
  // Real photos taken at (or right next to) the place's coordinates.
  const url="https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=geosearch&ggscoord="+s.c[0]+"%7C"+s.c[1]+"&ggsradius=250&ggsnamespace=6&ggslimit=10&prop=imageinfo&iiprop=url%7Cmime&iiurlwidth=640";
  const res=await fetch(url);if(!res.ok)return null;
  const pages=Object.values(((await res.json()).query||{}).pages||{}).sort((a,b)=>(a.index||0)-(b.index||0));
  const words=s.n.toLowerCase().split(/[^a-zà-ÿ]+/).filter(w=>w.length>3);
  const imgs=pages.filter(p=>p.imageinfo&&p.imageinfo[0]&&/jpeg|png/.test(p.imageinfo[0].mime)&&p.imageinfo[0].thumburl);
  const best=imgs.find(p=>words.some(w=>p.title.toLowerCase().includes(w)))||imgs[0];
  return best?{photo:best.imageinfo[0].thumburl}:null;
}
let enrichQueue=[],enrichRunning=false;
function enrichSpots(list){
  // Load the day being viewed first.
  const todo=list.filter(s=>!enrich[s.n]);
  enrichQueue=todo.concat(enrichQueue.filter(s=>!todo.includes(s)));
  if(enrichRunning||typeof fetch!=="function")return;
  enrichRunning=true;
  (async()=>{
    while(enrichQueue.length){
      const s=enrichQueue.shift();let data=null;
      try{data=GOOGLE_MAPS_KEY?await fetchGooglePlace(s):null;}catch(e){}
      if(!data||!data.photo){try{const c=await fetchCommonsPhoto(s);if(c)data=Object.assign({},data||{},c);}catch(e){}}
      enrich[s.n]=data||{};saveEnrich();
      const card=document.querySelector("#plan [data-spot-index='"+spots.indexOf(s)+"']");
      if(card&&data)card.outerHTML=spotCardHtml(s);
    }
    enrichRunning=false;
  })();
}
function render(){
const day=days.find(d=>d.id===currentDay)||days[0];
const dayCats=Object.keys(categories).filter(k=>k!=="villages");
if(currentDay==="sat"||currentDay==="sun")dayCats.push("villages");
const daySpots=spots.filter(s=>dayCats.includes(s.cat)&&spotOnDay(s,currentDay));
const dayVillages=villages.filter(v=>dayCats.includes("villages")&&(v.day==="both"||v.day===currentDay));
document.querySelector("#days").innerHTML=days.map(d=>"<button type='button' class='"+(d.id===currentDay?"active":"")+"' data-day='"+d.id+"'>"+d.label+"</button>").join("");
document.querySelector("#filters").innerHTML=Object.entries(categories).filter(([k])=>k!=="villages"||dayVillages.length>0).map(([k,v])=>"<button type='button' class='filter"+(map&&markerLayers[k]&&map.hasLayer(markerLayers[k])?" active":"")+"' data-cat='"+k+"'>"+v.icon+" "+v.label+" <span>"+(k==="villages"?dayVillages.length:spots.filter(s=>s.cat===k&&dayCats.includes(k)&&spotOnDay(s,currentDay)).length)+"</span></button>").join("");
document.querySelector("h1").textContent=day.title;document.querySelector(".sub").textContent=day.sub;
routeVisible=false;routeToken++;if(map)map.removeLayer(routeLayer);
const plan=day.plan.map((x,i)=>"<article class='day-card'><div class='day-number'>"+String(i+1).padStart(2,"0")+"</div><div class='day-content'><div class='time'>"+x[0]+"</div><h3>"+x[1]+"</h3><p>"+x[2]+"</p><span class='tag'>"+categories[x[3]].icon+" "+categories[x[3]].label+"</span><div class='route'>"+x[4]+"</div></div></article>").join("");
const cards=daySpots.map(spotCardHtml).join("");
const villagesHtml=dayVillages.map(v=>"<article class='spot-card village-card' data-village='"+v.id+"'><div class='spot-info'><div class='spot-cat'>🏘️ Villages</div><h3>"+v.name+"</h3>"+(v.data.rating?"<div class='spot-rating'>★★★★★ <strong>"+v.data.rating+"</strong> · "+(v.data.reviews||0).toLocaleString()+" reviews</div>":"")+"<p>"+(v.data.description||"Open this village to see its own saved data.")+"</p></div></article>").join("");
document.querySelector("#plan").innerHTML="<section class='day-panel'><div class='findings-head'><div><h2>"+day.label+" · Plan</h2><p class='day-description'>"+day.sub+"</p></div><div class='day-tools'>"+(routes[currentDay]?"<button type='button' id='route-toggle' class='route-toggle' onclick='toggleRoute()'>Show route</button>":"")+"<span>"+day.plan.length+" stops</span></div></div><div class='day-grid'>"+plan+"</div></section><section class='findings'><div class='findings-head'><h2>"+(currentDay==="sat"||currentDay==="sun"?"Day addons":"Palma addons")+"</h2><span>"+(daySpots.length+dayVillages.length)+" places</span></div><div class='photo-grid'>"+cards+villagesHtml+"</div></section>";
if(routes[currentDay]&&map){drawRoute(currentDay);routeLayer.addTo(map);routeVisible=true;const b=document.querySelector("#route-toggle");if(b){b.textContent="Hide route";b.classList.add("active");}}
const pts=daySpots.map(s=>s.c).concat(dayVillages.map(v=>v.c));if(map&&pts.length)map.fitBounds(L.latLngBounds(pts),{padding:[40,40]});
enrichSpots(daySpots);
}
function openSpot(i){const s=spots[i];if(!s)return;window.open(spotData(s).gmap||"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain"),"_blank","noopener,noreferrer");}
function openVillage(id){const v=villages.find(x=>x.id===id);if(!v)return;const d=v.data||{};let html="<section class='day-panel'><div class='findings-head'><div><h2>🏘️ "+v.name+"</h2><p class='day-description'>"+(d.description||"Village data")+"</p></div><button type='button' class='route-toggle' onclick='render()'>Back</button></div>";if(d.photos&&d.photos.length)html+="<div class='photo-grid'>"+d.photos.map(p=>"<img loading='lazy' src='"+escAttr(p)+"' alt='"+escAttr(v.name)+"'>").join("")+"</div>";if(d.rating)html+="<div class='spot-rating'>★★★★★ <strong>"+d.rating+"</strong> · "+(d.reviews||0).toLocaleString()+" reviews</div>";[["Food",d.food],["Sights",d.sights],["Experiences",d.experiences],["Instagrammable",d.instagram],["Hotels",d.hotels],["Notes",d.notes]].forEach(x=>{if(x[1]&&x[1].length)html+="<div class='day-card'><div class='day-content'><div class='time'>"+x[0]+"</div>"+x[1].map(t=>"<p>"+t+"</p>").join("")+"</div></div>";});if(d.parking)html+="<div class='day-card'><div class='day-content'><div class='time'>Parking</div><p>"+d.parking+"</p></div></div>";if(d.route)html+="<div class='day-card'><div class='day-content'><div class='time'>Route</div><p>"+d.route+"</p></div></div>";html+="</section>";document.querySelector("#plan").innerHTML=html;document.querySelector("#plan").scrollIntoView({behavior:"smooth",block:"start"});}
document.addEventListener("click",e=>{const day=e.target.closest("#days [data-day]");if(day){currentDay=day.dataset.day;render();return;}const village=e.target.closest("[data-village]");if(village){openVillage(village.dataset.village);return;}const spot=e.target.closest("[data-spot-index]");if(spot){openSpot(Number(spot.dataset.spotIndex));return;}const cat=e.target.closest("#filters [data-cat]");if(cat){toggleCat(cat.dataset.cat,cat);return;}});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const spot=e.target.closest("[data-spot-index]");if(spot){e.preventDefault();openSpot(Number(spot.dataset.spotIndex));}});
function focusArea(id){const a=areas.find(x=>x.id===id);if(!a||!map||!leafletReady)return;map.fitBounds(L.latLngBounds(a.p),{padding:[80,80]});L.popup().setLatLng(a.c).setContent("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d).openOn(map);}
function toggleCat(cat,btn){if(!leafletReady||!map||!markerLayers[cat])return;if(map.hasLayer(markerLayers[cat])){map.removeLayer(markerLayers[cat]);btn.classList.remove("active");}else{markerLayers[cat].addTo(map);btn.classList.add("active");}}


// Live GPS position (works on HTTPS, e.g. GitHub Pages; the phone asks for location permission).
let meMarker=null,meCircle=null,locating=false,followMe=false;
function mapToast(msg){const el=document.querySelector("#map");if(!el)return;let t=el.querySelector(".map-toast");if(!t){t=document.createElement("div");t.className="map-toast";el.appendChild(t);}t.textContent=msg;clearTimeout(mapToast.t);mapToast.t=setTimeout(()=>t.remove(),4000);}
function locateBtn(){return document.querySelector(".locate-btn");}
function startLocate(){
  if(!map)return;
  if(!navigator.geolocation){mapToast("GPS is not available on this device.");return;}
  followMe=true;
  if(meMarker){map.setView(meMarker.getLatLng(),Math.max(map.getZoom(),15));}
  if(locating)return;
  locating=true;const b=locateBtn();if(b)b.classList.add("searching");
  map.locate({watch:true,enableHighAccuracy:true,setView:false,maximumAge:10000,timeout:20000});
}
if(map){
  const Locate=L.Control.extend({options:{position:"topleft"},onAdd:function(){const b=L.DomUtil.create("button","locate-btn");b.type="button";b.title="Show my location";b.setAttribute("aria-label","Show my location");b.innerHTML="📍";L.DomEvent.disableClickPropagation(b);L.DomEvent.on(b,"click",startLocate);return b;}});
  map.addControl(new Locate());
  map.on("locationfound",e=>{
    const b=locateBtn();if(b){b.classList.remove("searching");b.classList.add("active");}
    if(!meMarker){
      meCircle=L.circle(e.latlng,{radius:e.accuracy,color:"#146BFF",weight:1,fillOpacity:.12,interactive:false}).addTo(map);
      meMarker=L.marker(e.latlng,{icon:L.divIcon({className:"me-dot",html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]}),zIndexOffset:1000}).addTo(map).bindPopup("You are here");
    }else{meMarker.setLatLng(e.latlng);meCircle.setLatLng(e.latlng).setRadius(e.accuracy);}
    if(followMe){map.setView(e.latlng,Math.max(map.getZoom(),15));followMe=false;}
  });
  map.on("locationerror",e=>{
    locating=false;const b=locateBtn();if(b)b.classList.remove("searching","active");
    mapToast(e.code===1?"Location permission denied — allow it in your browser settings.":"Could not get your location.");
  });
}

render();
