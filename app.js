const categories={
  food:{label:"Food",icon:"🍷"},
  sights:{label:"Sights",icon:"🏛️"},
  beaches:{label:"Beaches",icon:"🏖️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"},
  hotels:{label:"Hotels",icon:"🏨"},
  villages:{label:"Villages",icon:"🏘️"}
};

// Google Maps stars (rating + review count) are hardcoded per place, as shown on Google Maps.
// Places without a checked Google rating show a plain "Google Maps" link instead of stars.
const RATINGS_AS_OF="Σεπτ. 2026";

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

  // FOOD · added for the trip
  {by:"Pantelis",n:"Fika Farina",id:"ChIJEUGWH06TlxIRWMOerVXhUb4",c:[39.5708,2.6522],cat:"food",day:["fri","sat","mon"],type:"Bakery · Palma",rating:4.8,reviews:1858,price:"€",hours:"8:00–20:00",d:"Σουηδικός φούρνος δίπλα στην Plaça Major. Cinnamon και cardamom buns. Μόνο take-away, έχει ουρά και ξεπουλάει, οπότε νωρίς."},
  {by:"Pantelis",n:"Cuba Skybar",id:"ChIJqYJwzUeTlxIRJB_vuDoI9sg",c:[39.5702,2.6392],cat:"food",day:["fri","sat","mon"],type:"Rooftop bar · Hostal Cuba, Santa Catalina",rating:3.4,reviews:198,price:"€€",hours:"16:30–22:30",d:"Rooftop με θέα σε καθεδρικό και λιμάνι. Γεμίζει γρήγορα, ανεβείτε λίγο πριν το ηλιοβασίλεμα."},

  // SATURDAY 17 · SOUTH & EAST COAST
  {by:"Pantelis",n:"Santanyí Market",id:"ChIJkYyBKABVlhIRDGwY7VJ7V8Q",c:[39.3545,3.1290],cat:"experiences",day:"sat",type:"Weekly market · Santanyí",rating:4.2,reviews:964,hours:"Τετ & Σαβ 9:00–14:00",tag:"Μόνο Τετάρτη & Σάββατο",d:"Πάνω από 150 πάγκοι με τοπικά προϊόντα και χειροτεχνία. Το Σάββατο 17/10 πέφτει μέρα market. Πηγαίνετε νωρίς για πάρκινγκ."},
  {by:"Pantelis",n:"Caló des Moro",id:"ChIJI1J5hBhVlhIRp9hdEN6Mb70",c:[39.3136,3.1214],cat:"beaches",day:"sat",rating:4.5,reviews:9471,d:"Περίπου 20–30 λεπτά περπάτημα από το πάρκινγκ, με σκαλιά και βράχια στο τέλος. Κλειστά παπούτσια, νερό, πηγαίνετε νωρίς."},
  {by:"Pantelis",n:"Cala Llombards",id:"ChIJVeh_8XBVlhIRwdKT2E34tF0",c:[39.3236,3.1384],cat:"beaches",day:"sat",rating:4.4,reviews:3500,d:"Λίγα λεπτά από το Caló des Moro. Αμμουδιά με βράχια δεξιά κι αριστερά και beach bar."},
  {by:"Pantelis",n:"Cala Romàntica",q:"Cala Romàntica, S'Estany d'en Mas, Mallorca",c:[39.5197,3.3037],cat:"beaches",day:"sat",type:"S'Estany d'en Mas",d:"Μικρός αμμουδερός κόλπος με καθαρά νερά, πιο ήσυχος από τις διάσημες calas."},

  // SUNDAY 18 · WEST, TRAMUNTANA & NORTH
  {by:"Pantelis",n:"Gran Folies Beach Club",id:"ChIJNZ_PjqUmmBIRUcbKeHIy20c",c:[39.5345,2.3881],cat:"food",day:"sun",type:"Beach club · Cala Llamp, Port d'Andratx",rating:4.2,reviews:2719,price:"€€€€",hours:"10:30–00:00",d:"Ξαπλώστρες, πισίνα και βράχια πάνω από τη θάλασσα. Ακριβό, αλλά είναι ο πιο εύκολος τρόπος να χαρείτε το Cala Llamp."},
  {by:"Pantelis",n:"Restaurant Illeta",id:"ChIJ3UzHtyknmBIRrrMQWJLDMz4",c:[39.5369,2.4223],cat:"food",day:"sun",type:"Restaurant · Camp de Mar",rating:4.3,reviews:8563,price:"€€€",d:"Το εστιατόριο πάνω στο νησάκι με την ξύλινη γέφυρα. Κάντε κράτηση και στοχεύστε στο ηλιοβασίλεμα."},
  {by:"Pantelis",n:"Mirador des Colomer",id:"ChIJJ52E3ccrlhIRLy7Wu8FMFJE",c:[39.9290,3.1104],cat:"instagram",day:"sun",type:"Viewpoint · road to Formentor",rating:4.8,reviews:11497,d:"Η πιο διάσημη θέα της χερσονήσου. Λίγες θέσεις πάρκινγκ, οπότε πρωί."},
  {by:"Pantelis",n:"Cap de Formentor",id:"ChIJ7cvfEgyHvRIRWPnEwKaGszQ",c:[39.9615,3.2123],cat:"sights",day:"sun",type:"Lighthouse",d:"Φιδωτός δρόμος ως τον φάρο. Σε ορισμένες περιόδους κόβεται για ΙΧ μετά την παραλία Formentor, οπότε τσεκάρετε πριν ξεκινήσετε."},
  {by:"Pantelis",n:"Platja de Muro",id:"ChIJubjzdB8tlhIRSDf8v7sB_tQ",c:[39.8089,3.1182],cat:"beaches",day:"sun",rating:4.7,reviews:5124,d:"Μεγάλη αμμουδιά με ρηχά τιρκουάζ νερά. Εύκολη μέρα παραλίας με ό,τι χρειάζεστε δίπλα."}
];

// Villages on the day trips. gid = Google place id (used to open the right place in Google Maps).
function village(id,name,gid,c,day,description){return {id:id,name:name,gid:gid,c:c,day:day,data:{description:description,photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"Pantelis",parking:"",route:""}};}
const villages=[
  village("ses-salines","Ses Salines","ChIJQySexaCrlxIRHTOd-3ErxFE",[39.3385,3.0530],"sat","Ήσυχο χωριό κοντά στις αλυκές και στην παραλία Es Trenc. Καλό για βραδινό φαγητό μετά τις παραλίες."),
  village("porto-cristo","Porto Cristo","ChIJJej1xztBlhIRJkZuo0aGlHs",[39.5441,3.3368],"sat","Λιμανάκι με εστιατόρια. Δίπλα οι σπηλιές Coves del Drac, αν θέλετε κάτι διαφορετικό."),
  village("valldemossa","Valldemossa","ChIJ_8aKugPulxIRPhKWi-dSSJI",[39.7115,2.6226],"sun","Πέτρινο χωριό στην Tramuntana με το μοναστήρι (Cartoixa). Δοκιμάστε coca de patata."),
  village("soller","Sóller","ChIJM-1gD7_olxIRLkJeJ-gfAbA",[39.7671,2.7158],"sun","Κεντρική πλατεία με καφέ και πορτοκαλεώνες. Το ιστορικό τραμ κατεβαίνει στο λιμάνι."),
  village("port-de-soller","Port de Sóller","ChIJl4UEL_vllxIRYD5Xf3GvAgo",[39.7952,2.6975],"sun","Κλειστός κόλπος, παραλιακός πεζόδρομος. Ωραίο για ηλιοβασίλεμα και φαγητό δίπλα στο νερό."),
  village("fornalutx","Fornalutx","ChIJnVSoEX_olxIRWKzSqbgNHFM",[39.7822,2.7410],"sun","Από τα πιο όμορφα χωριά του νησιού, 10 λεπτά από το Sóller. Σκαλιστά πέτρινα σοκάκια, λίγο περπάτημα."),
  village("pollenca","Pollença","ChIJA1Fe26DWlxIRN0Vzy9Fe7Co",[39.8772,3.0162],"sun","Ανεβείτε τα σκαλιά του Calvari για θέα, και μετά καφές στην Plaça Major."),
  village("port-de-pollenca","Port de Pollença","ChIJi5g3vtnUlxIRkD9Xf3GvAgo",[39.9064,3.0827],"sun","Ήρεμος κόλπος με πεζόδρομο κάτω από τα πεύκα (Pine Walk). Καλή βάση για το Formentor.")
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
  {id:"fri",label:"Fri 16",title:"Palma · Friday 16",sub:"Arrival · Old Town · food · culture · sunset · nightlife",nav:{n:"Palma Old Town",c:[39.5696,2.6502]},plan:[
    ["Arrival","Palma Old Town","Parc de la Mar → La Seu → Almudaina → old-town lanes → La Lonja → Born.","experiences","Easy first walk after landing."],
    ["Golden hour","Cathedral / Parc de la Mar","Finish the waterfront and cathedral reflection around sunset.","instagram","Best light around sunset."],
    ["Early evening","Old Town","Banys Àrabs → Santa Eulàlia → Plaça de Cort → Plaça Major.","sights","Compact walk through the historic core."],
    ["Dinner","La Lonja or Santa Catalina","Pick the area that fits your mood: historic tapas/wine in La Lonja or the food-heavy neighbourhood streets of Santa Catalina.","food","The places themselves are in the findings below."],
    ["Night option","Flamenco / nightlife","Optional depending on arrival energy.","experiences","Choose from the relevant places below."]
  ]},
  {id:"sat",label:"Sat 17",title:"Saturday 17 · South & East coast",sub:"Fika · Santanyí market · calas · Ses Salines · Cala Romàntica · Porto Cristo · Cuba Skybar",note:"Πρωινό στο Fika, market στο Santanyí (μόνο Σάββατο ως τις 14:00), calas, ανατολική ακτή και βράδυ στην Palma."},
  {id:"sun",label:"Sun 18",title:"Sunday 18 · West, Tramuntana & North",sub:"Gran Folies · Illeta · Valldemossa · Sóller · Fornalutx · Pollença · Formentor · Platja de Muro",note:"Beach club και φαγητό στα νοτιοδυτικά, μετά τα χωριά της Tramuntana, και καταλήγουμε στο Formentor και στην Platja de Muro."},
  {id:"mon",label:"Mon 19",title:"Monday 19 · Palma → Airport",sub:"Breakfast · short Palma walk · airport",nav:{n:"Palma Airport (PMI)",c:[39.5517,2.7388]},plan:[
    ["Morning","Palma","Breakfast (Fika Farina opens at 8:00) and one last short walk through the old town / waterfront.","food","Keep plenty of airport buffer."],
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
// Day-trip routes. Each stop's name matches a spot or village above, which supplies stars, tips and the Google Maps link.
const routes={
  sat:{stops:[
    {n:"Fika Farina",c:[39.5708,2.6522],type:"food",size:"small"},
    {n:"Santanyí Market",c:[39.3545,3.1290],type:"sight",size:"long"},
    {n:"Caló des Moro",c:[39.3136,3.1214],type:"beach",size:"long"},
    {n:"Cala Llombards",c:[39.3236,3.1384],type:"beach",size:"small"},
    {n:"Ses Salines",c:[39.3385,3.0530],type:"village",size:"small"},
    {n:"Cala Romàntica",c:[39.5197,3.3037],type:"beach",size:"long"},
    {n:"Porto Cristo",c:[39.5441,3.3368],type:"village",size:"small"},
    {n:"Palma",c:[39.5696,2.6502],type:"village",size:"small",d:"Παλιά πόλη, καθεδρικός La Seu και βόλτα στη Santa Catalina."},
    {n:"Cuba Skybar",c:[39.5702,2.6392],type:"food",size:"small"}
  ]},
  sun:{stops:[
    {n:"Gran Folies Beach Club",c:[39.5345,2.3881],type:"food",size:"long"},
    {n:"Restaurant Illeta",c:[39.5369,2.4223],type:"food",size:"long"},
    {n:"Valldemossa",c:[39.7115,2.6226],type:"village",size:"long"},
    {n:"Sóller",c:[39.7671,2.7158],type:"village",size:"small"},
    {n:"Port de Sóller",c:[39.7952,2.6975],type:"village",size:"small"},
    {n:"Fornalutx",c:[39.7822,2.7410],type:"village",size:"small"},
    {n:"Pollença",c:[39.8772,3.0162],type:"village",size:"long"},
    {n:"Port de Pollença",c:[39.9064,3.0827],type:"village",size:"small"},
    {n:"Mirador des Colomer",c:[39.9290,3.1104],type:"sight",size:"small"},
    {n:"Cap de Formentor",c:[39.9615,3.2123],type:"sight",size:"long"},
    {n:"Platja de Muro",c:[39.8089,3.1182],type:"beach",size:"long"}
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
    // Numbered pins match the numbered stop cards in the day plan.
    const icon=L.divIcon({className:cls,html:"<span>"+(i+1)+"</span>",iconSize:iconSize,iconAnchor:anchor});
    const marker=L.marker(x.c,{icon:icon}).addTo(routeLayer);
    const p=stopPlace(x);
    marker.bindPopup("<strong>"+(i+1)+". "+x.n+"</strong>"+(p&&p.rating?"<br><span class='stars'>★ "+p.rating.toFixed(1)+"</span>":"")+"<br><a href='"+escAttr(stopUrl(x))+"' target='_blank' rel='noopener'>Google Maps →</a>");
    marker.bindTooltip(x.n,{permanent:true,direction:"top",offset:[0,x.size==="long"?-22:-16],className:"route-label"});
  });
}
function toggleRoute(){if(!routes[currentDay]||!map)return;routeVisible=!routeVisible;if(routeVisible){drawRoute(currentDay);routeLayer.addTo(map);}else{map.removeLayer(routeLayer);}const b=document.querySelector("#route-toggle");if(b){b.textContent=routeVisible?"Hide route":"Show route";b.classList.toggle("active",routeVisible);}}

// Google Maps links. A place id (when known) makes Google open exactly that place.
function gmapsUrl(o){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(o.q||(o.n+", Mallorca, Spain"))+(o.id?"&query_place_id="+o.id:"");}
function villageUrl(v){return gmapsUrl({n:v.name,id:v.gid});}
function stopPlace(x){return spots.find(s=>s.n===x.n)||villages.find(v=>v.name===x.n)||null;}
function stopUrl(x){const p=stopPlace(x);return p?(p.cat?gmapsUrl(p):villageUrl(p)):gmapsUrl({n:x.n});}
function dirUrl(stops){
  const c=x=>x.c[0]+","+x.c[1];
  const base="https://www.google.com/maps/dir/?api=1&travelmode=driving";
  // A single stop: directions from wherever you are now.
  if(stops.length===1)return base+"&destination="+c(stops[0]);
  const w=stops.slice(1,-1).map(c).join("|");
  return base+"&origin="+c(stops[0])+"&destination="+c(stops[stops.length-1])+(w?"&waypoints="+encodeURIComponent(w):"");
}
// Google Maps takes at most 10 stops per route, so longer days are split into legs that share a stop.
function splitLegs(stops){
  if(stops.length<=10)return [stops];
  const n=Math.ceil((stops.length-1)/9),size=Math.ceil((stops.length-1)/n),legs=[];
  for(let i=0;i<stops.length-1;i+=size)legs.push(stops.slice(i,Math.min(i+size,stops.length-1)+1));
  return legs;
}
function navLinksHtml(day){
  const r=routes[day.id];
  if(r){const legs=splitLegs(r.stops);return legs.map((leg,i)=>"<a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(dirUrl(leg))+"' title='"+escAttr(leg[0].n+" → "+leg[leg.length-1].n)+"'>🧭 Πλοήγηση"+(legs.length>1?" "+(i+1)+"/"+legs.length:"")+"</a>").join("");}
  if(day.nav)return "<a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(dirUrl([day.nav]))+"'>🧭 "+day.nav.n+"</a>";
  return "";
}

const markerLayers={};
Object.keys(categories).forEach(cat=>{markerLayers[cat]=leafletReady?L.layerGroup().addTo(map):null;if(!leafletReady)return;spots.filter(s=>s.cat===cat).forEach(s=>{const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});L.marker(s.c,{icon:icon}).addTo(markerLayers[cat]).on("click",()=>window.open(spotData(s).gmap||gmapsUrl(s),"_blank","noopener,noreferrer"));});});
if(leafletReady)villages.forEach(v=>{const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories.villages.icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});L.marker(v.c,{icon:icon}).addTo(markerLayers.villages).on("click",()=>openVillage(v.id));});
// Spots without an explicit day are Palma places, so only show them on the Palma days.
function spotOnDay(s,dayId){if(Array.isArray(s.day))return s.day.includes(dayId);return s.day?(s.day==="both"||s.day===dayId):(dayId==="fri"||dayId==="mon");}
// Optional Google Maps Platform key (Places API "New"). Restrict it to pantelisama.github.io in Google Cloud.
// Stars and review counts are hardcoded in the data above; the key would only add Google photos.
// Without one, photos come from Wikimedia Commons.
const GOOGLE_MAPS_KEY="";
const ENRICH_STORE="mallorca-enrich-v1";
let enrich={};
try{enrich=JSON.parse(localStorage.getItem(ENRICH_STORE)||"{}")||{};}catch(e){enrich={};}
function saveEnrich(){try{localStorage.setItem(ENRICH_STORE,JSON.stringify(enrich));}catch(e){}}
// Hardcoded stars always win over anything cached from earlier runtime lookups.
function spotData(s){const e=enrich[s.n]||{};return {photo:s.photo||e.photo||"",rating:s.rating||null,reviews:s.reviews||null,gmap:s.id?"":(e.gmap||"")};}
function ratingHtml(r,n){return "<span class='stars'>★ "+r.toFixed(1)+"</span> · "+(n||0).toLocaleString()+" reviews";}
function extraHtml(s){const x=[s.price,s.hours].filter(Boolean);return (x.length?"<p class='spot-extra'>"+x.join(" · ")+"</p>":"")+(s.tag?"<p class='spot-extra spot-flag'>"+s.tag+"</p>":"");}
function spotCardHtml(s){
  const i=spots.indexOf(s);const cat=categories[s.cat];const x=spotData(s);
  const media=x.photo?"<img loading='lazy' src='"+escAttr(x.photo)+"' alt='"+escAttr(s.n)+"'>":"<div class='spot-photo-empty spot-photo-"+s.cat+"'><span>"+cat.icon+"</span></div>";
  const rating=x.rating?ratingHtml(x.rating,x.reviews):"Google Maps";
  return "<article class='spot-card' data-spot-index='"+i+"' tabindex='0' role='button'><div class='spot-photo'>"+media+"</div><div class='spot-info'><div class='spot-meta'><div class='spot-cat'>"+cat.icon+" "+cat.label+"</div>"+(s.by?"<span class='finder-tag'>"+s.by+"</span>":"")+"</div><h3>"+s.n+"</h3>"+(s.type?"<p class='spot-type'>"+s.type+"</p>":"")+extraHtml(s)+"<p>"+s.d+"</p><div class='spot-rating'>"+rating+" →</div></div></article>";
}
function planCardHtml(x,i){return "<article class='day-card'><div class='day-number'>"+String(i+1).padStart(2,"0")+"</div><div class='day-content'><div class='time'>"+x[0]+"</div><h3>"+x[1]+"</h3><p>"+x[2]+"</p><span class='tag'>"+categories[x[3]].icon+" "+categories[x[3]].label+"</span><div class='route'>"+x[4]+"</div></div></article>";}
function stopCardHtml(x,i){
  const p=stopPlace(x),s=p&&p.cat?p:null,v=p&&!p.cat?p:null;
  const cat=s?categories[s.cat]:v?categories.villages:{icon:"📍",label:"Stop"};
  const desc=s?s.d:v?v.data.description:(x.d||"");
  return "<article class='day-card stop-card'><div class='day-number'>"+String(i+1).padStart(2,"0")+"</div><div class='day-content'><div class='time'>"+cat.icon+" "+cat.label+(s&&s.type?" · "+s.type:"")+"</div><h3>"+x.n+"</h3>"+(s&&s.rating?"<div class='spot-rating'>"+ratingHtml(s.rating,s.reviews)+"</div>":"")+(s?extraHtml(s):"")+"<p>"+desc+"</p><a class='gmaps-link' href='"+escAttr(stopUrl(x))+"' target='_blank' rel='noopener'>Google Maps →</a></div></article>";
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
const route=routes[currentDay];
const dayCats=Object.keys(categories).filter(k=>k!=="villages");
if(route)dayCats.push("villages");
const daySpots=spots.filter(s=>dayCats.includes(s.cat)&&spotOnDay(s,currentDay));
const dayVillages=villages.filter(v=>dayCats.includes("villages")&&(v.day==="both"||v.day===currentDay));
const catCount=k=>k==="villages"?dayVillages.length:daySpots.filter(s=>s.cat===k).length;
document.querySelector("#days").innerHTML=days.map(d=>"<button type='button' class='"+(d.id===currentDay?"active":"")+"' data-day='"+d.id+"'>"+d.label+"</button>").join("");
document.querySelector("#filters").innerHTML=Object.entries(categories).filter(([k])=>catCount(k)>0).map(([k,v])=>"<button type='button' class='filter"+(map&&markerLayers[k]&&map.hasLayer(markerLayers[k])?" active":"")+"' data-cat='"+k+"'>"+v.icon+" "+v.label+" <span>"+catCount(k)+"</span></button>").join("");
document.querySelector("h1").textContent=day.title;document.querySelector(".sub").textContent=day.sub;
routeVisible=false;routeToken++;if(map)map.removeLayer(routeLayer);
const planItems=route?route.stops.map(stopCardHtml):day.plan.map(planCardHtml);
const cards=daySpots.map(spotCardHtml).join("");
const villagesHtml=dayVillages.map(v=>"<article class='spot-card village-card' data-village='"+v.id+"'><div class='spot-info'><div class='spot-cat'>🏘️ Villages</div><h3>"+v.name+"</h3>"+(v.data.rating?"<div class='spot-rating'>"+ratingHtml(v.data.rating,v.data.reviews)+"</div>":"")+"<p>"+(v.data.description||"Open this village to see its own saved data.")+"</p></div></article>").join("");
document.querySelector("#plan").innerHTML="<section class='day-panel'><div class='findings-head'><div><h2>"+day.label+" · Plan</h2><p class='day-description'>"+day.sub+"</p>"+(day.note?"<p class='day-note'>"+day.note+"</p>":"")+"</div><div class='day-tools'>"+(route?"<button type='button' id='route-toggle' class='route-toggle' onclick='toggleRoute()'>Show route</button>":"")+navLinksHtml(day)+"<span>"+planItems.length+" stops</span></div></div><div class='day-grid'>"+planItems.join("")+"</div></section><section class='findings'><div class='findings-head'><h2>"+(route?"Day addons":"Palma addons")+"</h2><span>"+(daySpots.length+dayVillages.length)+" places</span></div><div class='photo-grid'>"+cards+villagesHtml+"</div><p class='stars-note'>★ Αστέρια και reviews από το Google Maps ("+RATINGS_AS_OF+"). Χάρτης, βενζινάδικα, μάρκετ και τουαλέτες: © OpenStreetMap contributors.</p></section>";
if(route&&map){drawRoute(currentDay);routeLayer.addTo(map);routeVisible=true;const b=document.querySelector("#route-toggle");if(b){b.textContent="Hide route";b.classList.add("active");}}
const pts=daySpots.map(s=>s.c).concat(dayVillages.map(v=>v.c)).concat(route?route.stops.map(x=>x.c):[]);if(map&&pts.length)map.fitBounds(L.latLngBounds(pts),{padding:[40,40]});
enrichSpots(daySpots);
}
function openSpot(i){const s=spots[i];if(!s)return;window.open(spotData(s).gmap||gmapsUrl(s),"_blank","noopener,noreferrer");}
function openVillage(id){const v=villages.find(x=>x.id===id);if(!v)return;const d=v.data||{};let html="<section class='day-panel'><div class='findings-head'><div><h2>🏘️ "+v.name+"</h2><p class='day-description'>"+(d.description||"Village data")+"</p></div><div class='day-tools'><a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(villageUrl(v))+"'>Google Maps</a><a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(dirUrl([{c:v.c}]))+"'>🧭 Πλοήγηση</a><button type='button' class='route-toggle' onclick='render()'>Back</button></div></div>";if(d.photos&&d.photos.length)html+="<div class='photo-grid'>"+d.photos.map(p=>"<img loading='lazy' src='"+escAttr(p)+"' alt='"+escAttr(v.name)+"'>").join("")+"</div>";if(d.rating)html+="<div class='spot-rating'>"+ratingHtml(d.rating,d.reviews)+"</div>";[["Food",d.food],["Sights",d.sights],["Experiences",d.experiences],["Instagrammable",d.instagram],["Hotels",d.hotels],["Notes",d.notes]].forEach(x=>{if(x[1]&&x[1].length)html+="<div class='day-card'><div class='day-content'><div class='time'>"+x[0]+"</div>"+x[1].map(t=>"<p>"+t+"</p>").join("")+"</div></div>";});if(d.parking)html+="<div class='day-card'><div class='day-content'><div class='time'>Parking</div><p>"+d.parking+"</p></div></div>";if(d.route)html+="<div class='day-card'><div class='day-content'><div class='time'>Route</div><p>"+d.route+"</p></div></div>";html+="</section>";document.querySelector("#plan").innerHTML=html;document.querySelector("#plan").scrollIntoView({behavior:"smooth",block:"start"});if(map)map.setView(v.c,14);}
document.addEventListener("click",e=>{const day=e.target.closest("#days [data-day]");if(day){currentDay=day.dataset.day;render();return;}const village=e.target.closest("[data-village]");if(village){openVillage(village.dataset.village);return;}const spot=e.target.closest("[data-spot-index]");if(spot){openSpot(Number(spot.dataset.spotIndex));return;}const cat=e.target.closest("#filters [data-cat]");if(cat){toggleCat(cat.dataset.cat,cat);return;}});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const spot=e.target.closest("[data-spot-index]");if(spot){e.preventDefault();openSpot(Number(spot.dataset.spotIndex));}});
function focusArea(id){const a=areas.find(x=>x.id===id);if(!a||!map||!leafletReady)return;map.fitBounds(L.latLngBounds(a.p),{padding:[80,80]});L.popup().setLatLng(a.c).setContent("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d).openOn(map);}
function setCatVisible(cat,on){if(!leafletReady||!map||!markerLayers[cat])return;if(on)markerLayers[cat].addTo(map);else map.removeLayer(markerLayers[cat]);const b=document.querySelector("#filters [data-cat='"+cat+"']");if(b)b.classList.toggle("active",on);syncPoiButtons();}
function toggleCat(cat){if(!leafletReady||!map||!markerLayers[cat])return;setCatVisible(cat,!map.hasLayer(markerLayers[cat]));}

/* ---------- Map layer buttons: fuel / supermarkets / toilets (OpenStreetMap, whole island) + food ---------- */
const POI_TYPES={
  fuel:{label:"Βενζινάδικα",short:"Βενζίνη",one:"Βενζινάδικο",icon:"⛽",color:"#C0392B",test:t=>t.amenity==="fuel"},
  market:{label:"Σούπερ μάρκετ",short:"Μάρκετ",one:"Σούπερ μάρκετ",icon:"🛒",color:"#2F5D4A",test:t=>t.shop==="supermarket"},
  wc:{label:"Τουαλέτες",short:"WC",one:"Τουαλέτα",icon:"🚻",color:"#0E5A70",test:t=>t.amenity==="toilets"},
  // The food button shows/hides the saved food places (same layer as the Food filter chip).
  food:{label:"Φαγητό",short:"Φαγητό",icon:"🍽️",color:"#B7802A"}
};
const OSM_TYPES=Object.keys(POI_TYPES).filter(k=>POI_TYPES[k].test);
const MALLORCA_BBOX="39.25,2.30,39.97,3.48"; // south,west,north,east
const POI_CACHE_KEY="mallorca-poi-v1";
const POI_STATE_KEY="mallorca-poi-on-v2";
const POI_MAX_AGE=7*24*3600*1000; // refresh weekly
const OVERPASS=["https://overpass-api.de/api/interpreter","https://overpass.kumi.systems/api/interpreter"];
const poiLayers={};
let poiOn={fuel:false,market:false,wc:false},poiLoading=null;
try{const s=JSON.parse(localStorage.getItem(POI_STATE_KEY)||"null");if(s)OSM_TYPES.forEach(k=>{poiOn[k]=!!s[k];});}catch(e){}
function savePoiOn(){try{localStorage.setItem(POI_STATE_KEY,JSON.stringify(poiOn));}catch(e){}}
function poiIsOn(k){return k==="food"?!!(map&&markerLayers.food&&map.hasLayer(markerLayers.food)):!!poiOn[k];}
function syncPoiButtons(){
  if(typeof document.querySelectorAll!=="function")return;
  document.querySelectorAll("[data-poi]").forEach(b=>{const on=poiIsOn(b.dataset.poi);b.setAttribute("aria-pressed",on?"true":"false");b.classList.toggle("loading",!!poiLoading&&!poiLayers[b.dataset.poi]&&on&&b.dataset.poi!=="food");});
}
async function fetchPoi(){
  try{const c=JSON.parse(localStorage.getItem(POI_CACHE_KEY));if(c&&Date.now()-c.t<POI_MAX_AGE)return c.items;}catch(e){}
  const q='[out:json][timeout:60];('+
    'nwr["amenity"="fuel"]('+MALLORCA_BBOX+');'+
    'nwr["shop"="supermarket"]('+MALLORCA_BBOX+');'+
    'nwr["amenity"="toilets"]('+MALLORCA_BBOX+');'+
    ');out center tags;';
  let lastErr;
  for(const url of OVERPASS){
    try{
      const r=await fetch(url,{method:"POST",body:"data="+encodeURIComponent(q),headers:{"Content-Type":"application/x-www-form-urlencoded"}});
      if(!r.ok)throw new Error("HTTP "+r.status);
      const j=await r.json();
      const items=j.elements.map(e=>{
        const lat=e.lat!=null?e.lat:(e.center&&e.center.lat),lng=e.lon!=null?e.lon:(e.center&&e.center.lon),t=e.tags||{};
        const type=OSM_TYPES.find(k=>POI_TYPES[k].test(t));
        if(!type||lat==null)return null;
        return {type:type,lat:+lat.toFixed(5),lng:+lng.toFixed(5),name:t.name||t.brand||"",brand:t.brand||"",hours:t.opening_hours||"",fee:t.fee||""};
      }).filter(Boolean);
      try{localStorage.setItem(POI_CACHE_KEY,JSON.stringify({t:Date.now(),items:items}));}catch(e){}
      return items;
    }catch(e){lastErr=e;}
  }
  // Network failed: fall back to an old cache if there is one.
  try{const c=JSON.parse(localStorage.getItem(POI_CACHE_KEY));if(c)return c.items;}catch(e){}
  throw lastErr||new Error("Overpass unavailable");
}
function poiPopup(p){
  const T=POI_TYPES[p.type];
  const nav="https://www.google.com/maps/dir/?api=1&travelmode=driving&destination="+p.lat+","+p.lng;
  const extra=[];
  if(p.brand&&p.brand!==p.name)extra.push(escAttr(p.brand));
  if(p.hours)extra.push(escAttr(p.hours));
  if(p.type==="wc"&&p.fee)extra.push(p.fee==="no"?"Δωρεάν":"Με χρέωση");
  return "<div class='popup-poi'><strong>"+T.icon+" "+escAttr(p.name||T.one)+"</strong>"+(extra.length?"<small>"+extra.join(" | ")+"</small><br>":"")+"<a href='"+nav+"' target='_blank' rel='noopener'>🧭 Πλοήγηση εδώ</a></div>";
}
function makePoiGroup(k){
  const T=POI_TYPES[k];
  if(typeof L.markerClusterGroup!=="function")return L.layerGroup();
  return L.markerClusterGroup({showCoverageOnHover:false,maxClusterRadius:45,iconCreateFunction:c=>L.divIcon({className:"",html:"<div class='poi-cluster' style='background:"+T.color+"'><span>"+T.icon+"</span>"+c.getChildCount()+"</div>",iconSize:[36,36],iconAnchor:[18,18]})});
}
function buildPoiLayers(items){
  OSM_TYPES.forEach(k=>{
    const T=POI_TYPES[k],group=makePoiGroup(k);
    const icon=L.divIcon({className:"poi-pin",html:"<span style='border-color:"+T.color+"'>"+T.icon+"</span>",iconSize:[26,26],iconAnchor:[13,13]});
    items.filter(p=>p.type===k).forEach(p=>group.addLayer(L.marker([p.lat,p.lng],{icon:icon,title:p.name||T.one}).bindPopup(()=>poiPopup(p))));
    poiLayers[k]=group;
  });
}
function applyPoi(k){
  const g=poiLayers[k];if(!g||!map)return;
  if(poiOn[k]){if(!map.hasLayer(g))map.addLayer(g);}
  else if(map.hasLayer(g)){map.closePopup&&map.closePopup();map.removeLayer(g);}
}
function ensurePoi(){
  if(poiLoading)return poiLoading;
  mapToast("Φόρτωση από OpenStreetMap…");
  poiLoading=fetchPoi().then(items=>{
    buildPoiLayers(items);
    const n=k=>items.filter(p=>p.type===k).length;
    mapToast("⛽ "+n("fuel")+" · 🛒 "+n("market")+" · 🚻 "+n("wc")+" σε όλο το νησί");
  }).catch(()=>{
    poiLoading=null;OSM_TYPES.forEach(k=>{poiOn[k]=false;});savePoiOn();
    mapToast("Δεν φορτώθηκαν βενζινάδικα/μάρκετ/τουαλέτες. Δοκίμασε ξανά σε λίγο.");
  }).then(()=>{OSM_TYPES.forEach(applyPoi);syncPoiButtons();});
  syncPoiButtons();
  return poiLoading;
}
function togglePoi(k){
  if(!map||!POI_TYPES[k])return;
  if(k==="food"){setCatVisible("food",!poiIsOn("food"));return;}
  poiOn[k]=!poiOn[k];savePoiOn();syncPoiButtons();
  if(poiLayers[k])applyPoi(k);else if(poiOn[k])ensurePoi();
}
if(map){
  const PoiControl=L.Control.extend({options:{position:"topright"},onAdd:function(){
    const box=L.DomUtil.create("div","poi-control");
    box.setAttribute("aria-label","Εμφάνιση στον χάρτη");
    box.innerHTML=Object.keys(POI_TYPES).map(k=>{const T=POI_TYPES[k];return "<button type='button' class='poi-btn' data-poi='"+k+"' aria-pressed='false' style='--c:"+T.color+"' title='"+T.label+"' aria-label='"+T.label+"'><span>"+T.icon+"</span><b>"+T.short+"</b></button>";}).join("");
    L.DomEvent.disableClickPropagation(box);L.DomEvent.disableScrollPropagation(box);
    L.DomEvent.on(box,"click",e=>{const b=e.target.closest("[data-poi]");if(b)togglePoi(b.dataset.poi);});
    return box;
  }});
  map.addControl(new PoiControl());
  syncPoiButtons();
  if(OSM_TYPES.some(k=>poiOn[k]))ensurePoi();
}

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
