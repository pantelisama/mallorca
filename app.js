const categories={
  food:{label:"Φαγητό",icon:"🍽️"},
  wineries:{label:"Οινοποιεία",icon:"🍷"},
  sights:{label:"Αξιοθέατα",icon:"🏛️"},
  beaches:{label:"Παραλίες",icon:"🏖️"},
  experiences:{label:"Εμπειρίες",icon:"✨"},
  instagram:{label:"Φωτογραφίες",icon:"📸"},
  hotels:{label:"Ξενοδοχεία",icon:"🏨"},
  villages:{label:"Χωριά",icon:"🏘️"}
};

// Google Maps stars (rating + review count) are hardcoded per place, as shown on Google Maps.
// Places without a checked Google rating show a plain "Google Maps" link instead of stars.
const RATINGS_AS_OF="Σεπτ. 2026";

// ΠΩΣ ΠΡΟΣΘΕΤΩ ΜΕΡΟΣ (αντίγραψε μια γραμμή και άλλαξέ την):
// {by:"Pantelis", n:"Όνομα", id:"ChIJ... (Google place id, προαιρετικό)", c:[γεωγρ.πλάτος,γεωγρ.μήκος],
//  cat:"food|sights|beaches|experiences|instagram|hotels", day:"fri|sat|sun|mon" ή ["fri","mon"],
//  type:"Είδος · Περιοχή", rating:4.5, reviews:1234, price:"€€", hours:"9:00–17:00",
//  tag:"προειδοποίηση", d:"Η περιγραφή σου."}
const spots=[
  // ΟΙΝΟΠΟΙΕΙΑ · κεντρική Mallorca (DO Binissalem και Pla i Llevant)
  {by:"Pantelis",n:"Bodega Ribas",id:"ChIJI0_h7qjBlxIR0Vx327vBTV4",c:[39.6676,2.8144],cat:"wineries",day:"all",type:"Consell · από το 1711",rating:4.9,reviews:438,hours:"Δευ–Σαβ 10:00–18:00, Κυρ κλειστά",tag:"Μόνο με κράτηση",d:"Η παλαιότερη ενεργή bodega της Mallorca, ίδια οικογένεια πάνω από δέκα γενιές. Αρχοντικό του 18ου αιώνα με παλιό βαρελόκελλαρο και νέα πτέρυγα του Rafael Moneo. C/ Muntanya 2."},
  {by:"Pantelis",n:"Bodegues José L. Ferrer",c:[39.6864,2.8347],cat:"wineries",day:"all",type:"Binissalem · από το 1931",rating:4.5,reviews:430,tag:"Θέλει κράτηση",d:"Από τα πιο ιστορικά και γνωστά ονόματα του νησιού, τέσσερις γενιές στην ίδια δουλειά. Πολύ χαρακτηριστικό της οινικής παράδοσης της Mallorca. Conquistador 103."},
  {by:"Pantelis",n:"Macià Batle",c:[39.6553,2.7672],cat:"wineries",day:"all",type:"Santa Maria del Camí · από το 1856",tag:"Κυριακή κλειστά",d:"Ιστορικό όνομα με σύγχρονο κτίριο του 1996. Ξενάγηση στην παραγωγή και δοκιμή κρασιών με τοπικά προϊόντα. Camí de Coanegra."},
  {by:"Pantelis",n:"Miquel Oliver Vinyes i Bodegues",c:[39.6137,3.1020],cat:"wineries",day:"all",type:"Petra · από το 1912",tag:"Θέλει κράτηση",d:"Γνωστό ιστορικό όνομα της οικογένειας Oliver, με έμφαση σε ντόπιες ποικιλίες. Στο Petra, ανατολικά, C/ Font 26."}
];

// Villages on the day trips. gid = Google place id (used to open the right place in Google Maps).
function village(id,name,gid,c,day,description){return {id:id,name:name,gid:gid,c:c,day:day,data:{description:description,photos:[],rating:null,reviews:null,food:[],sights:[],experiences:[],instagram:[],hotels:[],notes:[],by:"Pantelis",parking:"",route:""}};}
// village("id","Όνομα","Google place id",[lat,lng],"sat|all","Περιγραφή")
// day:"all" = φαίνεται σε όλες τις μέρες, χωρίς να είναι στάση.
const villages=[
  village("fornalutx","Fornalutx","",[39.7822,2.7410],"all","Ίσως το πιο παραμυθένιο μικρό χωριό του νησιού. Σκαλιστά πέτρινα σοκάκια, 10 λεπτά από το Sóller."),
  village("valldemossa","Valldemossa","",[39.7115,2.6226],"all","Πέτρινα σοκάκια, λουλούδια και βουνό γύρω γύρω."),
  village("deia","Deià","",[39.7486,2.6486],"all","Πέτρινο χωριό σκαρφαλωμένο στην πλαγιά, με θέα στη θάλασσα."),
  village("soller","Sóller","",[39.7671,2.7158],"all","Μεγαλύτερο και με περισσότερη ζωή. Συνδυάζει βουνό, χωριό και το Port de Sóller."),
  village("alcudia","Alcúdia Old Town","",[39.8525,3.1192],"all","Πολύ όμορφο αλλά σε άλλο στιλ: μεσαιωνικό, μέσα στα παλιά τείχη."),
  village("santanyi","Santanyí","",[39.3545,3.1290],"all","Χωριό από χρυσαφί πέτρα στα νοτιοανατολικά, κοντά στις calas. Έχει αγορά Τετάρτη και Σάββατο, μέχρι τις 14:00.")
];

const areas=[
];

const days=[
  {id:"fri",label:"Παρ 16",title:"Παρασκευή 16 · Palma",sub:"Άφιξη",plan:[]},
  {id:"sat",label:"Σαβ 17",title:"Σάββατο 17 · Εκδρομή",sub:"",plan:[]},
  {id:"sun",label:"Κυρ 18",title:"Κυριακή 18 · Εκδρομή",sub:"",plan:[]},
  {id:"mon",label:"Δευ 19",title:"Δευτέρα 19 · Palma → αεροδρόμιο",sub:"Αναχώρηση",plan:[]}
];
let currentDay="fri";
const leafletReady=typeof window.L!=="undefined";
const map=leafletReady?L.map("map",{zoomControl:true}).setView([39.570,2.648],14):null;
if(leafletReady)L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const areaLayer=leafletReady?L.layerGroup().addTo(map):null;
if(!leafletReady){const mapEl=document.querySelector("#map");if(mapEl){mapEl.innerHTML="<div class='map-fallback'><strong>Ο χάρτης δεν φόρτωσε</strong><span>Το πρόγραμμα του ταξιδιού είναι κανονικά πιο κάτω.</span></div>";}}
if(leafletReady)areas.forEach(a=>{const poly=L.polygon(a.p,{color:"#18211d",weight:1,fillOpacity:.12});poly.bindPopup("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d);poly.on("click",()=>focusArea(a.id));poly.addTo(areaLayer);});
// Day-trip routes. Each stop's name matches a spot or village above, which supplies stars, tips and the Google Maps link.
// ΠΩΣ ΦΤΙΑΧΝΩ ΔΙΑΔΡΟΜΗ ΜΕΡΑΣ:
// sat:{stops:[{n:"Όνομα στάσης",c:[lat,lng],type:"food|beach|village|sight",size:"long|small"}]}
// Το "long" = μεγάλη στάση (μεγαλύτερη πινέζα). Το όνομα ταιριάζει με μέρος από τη λίστα spots.
const routes={
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
function toggleRoute(){if(!routes[currentDay]||!map)return;routeVisible=!routeVisible;if(routeVisible){drawRoute(currentDay);routeLayer.addTo(map);}else{map.removeLayer(routeLayer);}const b=document.querySelector("#route-toggle");if(b){b.textContent=routeVisible?"Κρύψε τη διαδρομή":"Δείξε τη διαδρομή";b.classList.toggle("active",routeVisible);}}

// Google Maps links. A place id (when known) makes Google open exactly that place.
function gmapsUrl(o){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(o.q||(o.n+", Mallorca, Spain"))+(o.id?"&query_place_id="+o.id:"");}
function villageUrl(v){return gmapsUrl({n:v.name,id:v.gid||""});}
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
function spotOnDay(s,dayId){if(s.day==="all")return true;if(Array.isArray(s.day))return s.day.includes(dayId);return s.day?(s.day==="both"||s.day===dayId):(dayId==="fri"||dayId==="mon");}
// Optional Google Maps Platform key (Places API "New"). Restrict it to pantelisama.github.io in Google Cloud.
// Stars and review counts are hardcoded in the data above; the key would only add Google photos.
// Without one, photos come from Wikimedia Commons.
const GOOGLE_MAPS_KEY="";
const ENRICH_STORE="mallorca-enrich-v1";
let enrich={};
try{enrich=JSON.parse(localStorage.getItem(ENRICH_STORE)||"{}")||{};}catch(e){enrich={};}
function saveEnrich(){try{localStorage.setItem(ENRICH_STORE,JSON.stringify(enrich));}catch(e){}}
// Hardcoded stars always win over anything cached from earlier runtime lookups.
// Hardcoded stars win; anything not hardcoded is filled in from Google when a key is set.
function spotData(s){const e=enrich[s.n]||{};return {photo:s.photo||e.photo||"",rating:s.rating||e.rating||null,reviews:s.reviews||e.reviews||null,gmap:s.id?"":(e.gmap||"")};}
function ratingHtml(r,n){return "<span class='stars'>★ "+r.toFixed(1)+"</span> · "+(n||0).toLocaleString()+" κριτικές";}
function extraHtml(s){const x=[s.price,s.hours].filter(Boolean);return (x.length?"<p class='spot-extra'>"+x.join(" · ")+"</p>":"")+(s.tag?"<p class='spot-extra spot-flag'>"+s.tag+"</p>":"");}
function spotCardHtml(s){
  const i=spots.indexOf(s);const cat=categories[s.cat];const x=spotData(s);
  const media=x.photo?"<img loading='lazy' src='"+escAttr(x.photo)+"' alt='"+escAttr(s.n)+"'>":"<div class='spot-photo-empty spot-photo-"+s.cat+"'><span>"+cat.icon+"</span></div>";
  const rating=x.rating?ratingHtml(x.rating,x.reviews):"Δες το στο Google Maps";
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
      if(s.village&&data){s.village.data.rating=s.village.data.rating||data.rating;s.village.data.reviews=s.village.data.reviews||data.reviews;}
      const card=s.village?document.querySelector("#plan [data-village='"+s.village.id+"']"):document.querySelector("#plan [data-spot-index='"+spots.indexOf(s)+"']");
      if(card&&data&&!s.village)card.outerHTML=spotCardHtml(s);
    }
    enrichRunning=false;
  })();
}
function render(){
const day=days.find(d=>d.id===currentDay)||days[0];
const route=routes[currentDay];
const dayCats=Object.keys(categories);
const daySpots=spots.filter(s=>dayCats.includes(s.cat)&&spotOnDay(s,currentDay));
const dayVillages=villages.filter(v=>dayCats.includes("villages")&&(v.day==="all"||v.day==="both"||v.day===currentDay));
const catCount=k=>k==="villages"?dayVillages.length:daySpots.filter(s=>s.cat===k).length;
document.querySelector("#days").innerHTML=days.map(d=>"<button type='button' class='"+(d.id===currentDay?"active":"")+"' data-day='"+d.id+"'>"+d.label+"</button>").join("");
document.querySelector("#filters").innerHTML=Object.entries(categories).filter(([k])=>catCount(k)>0).map(([k,v])=>"<button type='button' class='filter"+(map&&markerLayers[k]&&map.hasLayer(markerLayers[k])?" active":"")+"' data-cat='"+k+"'>"+v.icon+" "+v.label+" <span>"+catCount(k)+"</span></button>").join("");
document.querySelector("h1").textContent=day.title;document.querySelector(".sub").textContent=day.sub;
routeVisible=false;routeToken++;if(map)map.removeLayer(routeLayer);
const planItems=route?route.stops.map(stopCardHtml):day.plan.map(planCardHtml);
const stopCount=planItems.length;
// Empty day: show a hint instead of a blank panel.
if(!planItems.length)planItems.push("<article class='day-card empty-card'><div class='day-content'><h3>Καμία στάση ακόμα</h3><p>Στείλε μου τα μέρη που θέλεις για αυτή τη μέρα και θα μπουν εδώ, με αστέρια Google, περιγραφή και πλοήγηση.</p></div></article>");
const cards=daySpots.map(spotCardHtml).join("");
const villagesHtml=dayVillages.map(v=>"<article class='spot-card village-card' data-village='"+v.id+"'><div class='spot-info'><div class='spot-cat'>🏘️ Χωριά</div><h3>"+v.name+"</h3>"+(v.data.rating?"<div class='spot-rating'>"+ratingHtml(v.data.rating,v.data.reviews)+"</div>":"")+"<p>"+(v.data.description||"Άνοιξέ το για να δεις τα αποθηκευμένα δεδομένα.")+"</p></div></article>").join("");
document.querySelector("#plan").innerHTML="<section class='day-panel'><div class='findings-head'><div><h2>"+day.label+" · Πρόγραμμα</h2><p class='day-description'>"+day.sub+"</p>"+(day.note?"<p class='day-note'>"+day.note+"</p>":"")+"</div><div class='day-tools'>"+(route?"<button type='button' id='route-toggle' class='route-toggle' onclick='toggleRoute()'>Δείξε τη διαδρομή</button>":"")+navLinksHtml(day)+"<span>"+stopCount+" στάσεις</span></div></div><div class='day-grid'>"+planItems.join("")+"</div></section><section class='findings'><div class='findings-head'><h2>"+"Αποθηκευμένα μέρη"+"</h2><span>"+(daySpots.length+dayVillages.length)+" μέρη</span></div><div class='photo-grid'>"+(cards+villagesHtml||"<p class='empty-note'>Δεν υπάρχουν αποθηκευμένα μέρη για αυτή τη μέρα.</p>")+"</div><p class='stars-note'>★ Αστέρια και κριτικές από το Google Maps ("+RATINGS_AS_OF+"). Χάρτης, βενζινάδικα, μάρκετ και τουαλέτες: © OpenStreetMap contributors.</p></section>";
if(route&&map){drawRoute(currentDay);routeLayer.addTo(map);routeVisible=true;const b=document.querySelector("#route-toggle");if(b){b.textContent="Κρύψε τη διαδρομή";b.classList.add("active");}}
const pts=daySpots.map(s=>s.c).concat(dayVillages.map(v=>v.c)).concat(route?route.stops.map(x=>x.c):[]);if(map&&pts.length)map.fitBounds(L.latLngBounds(pts),{padding:[40,40]});
enrichSpots(daySpots.concat(dayVillages.map(v=>({n:v.name,c:v.c,village:v}))));
}
function openSpot(i){const s=spots[i];if(!s)return;window.open(spotData(s).gmap||gmapsUrl(s),"_blank","noopener,noreferrer");}
function openVillage(id){const v=villages.find(x=>x.id===id);if(!v)return;const d=v.data||{};let html="<section class='day-panel'><div class='findings-head'><div><h2>🏘️ "+v.name+"</h2><p class='day-description'>"+(d.description||"Χωριό")+"</p></div><div class='day-tools'><a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(villageUrl(v))+"'>Google Maps</a><a class='route-toggle nav-btn' target='_blank' rel='noopener' href='"+escAttr(dirUrl([{c:v.c}]))+"'>🧭 Πλοήγηση</a><button type='button' class='route-toggle' onclick='render()'>Back</button></div></div>";if(d.photos&&d.photos.length)html+="<div class='photo-grid'>"+d.photos.map(p=>"<img loading='lazy' src='"+escAttr(p)+"' alt='"+escAttr(v.name)+"'>").join("")+"</div>";if(d.rating)html+="<div class='spot-rating'>"+ratingHtml(d.rating,d.reviews)+"</div>";[["Φαγητό",d.food],["Αξιοθέατα",d.sights],["Εμπειρίες",d.experiences],["Φωτογραφίες",d.instagram],["Ξενοδοχεία",d.hotels],["Σημειώσεις",d.notes]].forEach(x=>{if(x[1]&&x[1].length)html+="<div class='day-card'><div class='day-content'><div class='time'>"+x[0]+"</div>"+x[1].map(t=>"<p>"+t+"</p>").join("")+"</div></div>";});if(d.parking)html+="<div class='day-card'><div class='day-content'><div class='time'>Parking</div><p>"+d.parking+"</p></div></div>";if(d.route)html+="<div class='day-card'><div class='day-content'><div class='time'>Route</div><p>"+d.route+"</p></div></div>";html+="</section>";document.querySelector("#plan").innerHTML=html;document.querySelector("#plan").scrollIntoView({behavior:"smooth",block:"start"});if(map)map.setView(v.c,14);}
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
  if(!navigator.geolocation){mapToast("Το GPS δεν είναι διαθέσιμο σε αυτή τη συσκευή.");return;}
  followMe=true;
  if(meMarker){map.setView(meMarker.getLatLng(),Math.max(map.getZoom(),15));}
  if(locating)return;
  locating=true;const b=locateBtn();if(b)b.classList.add("searching");
  map.locate({watch:true,enableHighAccuracy:true,setView:false,maximumAge:10000,timeout:20000});
}
if(map){
  const Locate=L.Control.extend({options:{position:"topleft"},onAdd:function(){const b=L.DomUtil.create("button","locate-btn");b.type="button";b.title="Η θέση μου";b.setAttribute("aria-label","Η θέση μου");b.innerHTML="📍";L.DomEvent.disableClickPropagation(b);L.DomEvent.on(b,"click",startLocate);return b;}});
  map.addControl(new Locate());
  map.on("locationfound",e=>{
    const b=locateBtn();if(b){b.classList.remove("searching");b.classList.add("active");}
    if(!meMarker){
      meCircle=L.circle(e.latlng,{radius:e.accuracy,color:"#146BFF",weight:1,fillOpacity:.12,interactive:false}).addTo(map);
      meMarker=L.marker(e.latlng,{icon:L.divIcon({className:"me-dot",html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]}),zIndexOffset:1000}).addTo(map).bindPopup("Είσαι εδώ");
    }else{meMarker.setLatLng(e.latlng);meCircle.setLatLng(e.latlng).setRadius(e.accuracy);}
    if(followMe){map.setView(e.latlng,Math.max(map.getZoom(),15));followMe=false;}
  });
  map.on("locationerror",e=>{
    locating=false;const b=locateBtn();if(b)b.classList.remove("searching","active");
    mapToast(e.code===1?"Δεν δόθηκε άδεια τοποθεσίας — ενεργοποίησέ την στις ρυθμίσεις.":"Δεν βρέθηκε η θέση σου.");
  });
}

render();
