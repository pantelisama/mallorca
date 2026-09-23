const categories={
  food:{label:"Food",icon:"🍷"},
  sights:{label:"Sights",icon:"🏛️"},
  experiences:{label:"Experiences",icon:"✨"},
  instagram:{label:"Instagrammable",icon:"📸"},
  hotels:{label:"Hotels",icon:"🏨"},
  villages:{label:"Villages",icon:"🏘️"}
};

const spots=[];

const villages=[];

const areas=[];

const days=[
  {id:"fri",label:"Fri 16",title:"Palma · Friday 16",sub:"Arrival · Old Town · food · culture · sunset · nightlife",plan:[]}
];
let currentDay="fri";
const map=L.map("map",{zoomControl:true}).setView([39.570,2.648],14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const areaLayer=L.layerGroup().addTo(map);
areas.forEach(a=>{const poly=L.polygon(a.p,{color:"#18211d",weight:1,fillOpacity:.12});poly.bindPopup("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d);poly.on("click",()=>focusArea(a.id));poly.addTo(areaLayer);});
const routes={};
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
function toggleRoute(){if(!routes[currentDay])return;routeVisible=!routeVisible;if(routeVisible){drawRoute(currentDay);routeLayer.addTo(map);}else{map.removeLayer(routeLayer);}const b=document.querySelector("#route-toggle");if(b){b.textContent=routeVisible?"Hide route":"Show route";b.classList.toggle("active",routeVisible);}}
const markerLayers={};
Object.keys(categories).forEach(cat=>{markerLayers[cat]=L.layerGroup().addTo(map);spots.filter(s=>s.cat===cat).forEach(s=>{const icon=L.divIcon({className:"spot-icon",html:"<span>"+categories[cat].icon+"</span>",iconSize:[34,34],iconAnchor:[17,17]});const gmap="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain");L.marker(s.c,{icon:icon}).addTo(markerLayers[cat]).on("click",()=>window.open(gmap,"_blank","noopener,noreferrer"));});});
function render(){
const day=days.find(d=>d.id===currentDay)||days[0];
const dayCats=[...new Set(day.plan.map(x=>x[3]))];
if(currentDay==="sat"||currentDay==="sun")dayCats.push("villages");
const daySpots=spots.filter(s=>dayCats.includes(s.cat)&&(!s.day||s.day==="both"||s.day===currentDay));
const dayVillages=villages.filter(v=>dayCats.includes("villages")&&(v.day==="both"||v.day===currentDay));
document.querySelector("#days").innerHTML=days.map(d=>"<button type='button' class='"+(d.id===currentDay?"active":"")+"' data-day='"+d.id+"'>"+d.label+"</button>").join("");
document.querySelector("#filters").innerHTML=Object.entries(categories).filter(([k])=>k!=="villages"||dayVillages.length>0).map(([k,v])=>"<button type='button' class='filter' data-cat='"+k+"'>"+v.icon+" "+v.label+" <span>"+(k==="villages"?dayVillages.length:spots.filter(s=>s.cat===k&&dayCats.includes(k)&&(!s.day||s.day==="both"||s.day===currentDay)).length)+"</span></button>").join("");
document.querySelector("h1").textContent=day.title;document.querySelector(".sub").textContent=day.sub;
routeVisible=false;map.removeLayer(routeLayer);
const plan=day.plan.map((x,i)=>"<article class='day-card'><div class='day-number'>"+String(i+1).padStart(2,"0")+"</div><div class='day-content'><div class='time'>"+x[0]+"</div><h3>"+x[1]+"</h3><p>"+x[2]+"</p><span class='tag'>"+categories[x[3]].icon+" "+categories[x[3]].label+"</span><div class='route'>"+x[4]+"</div></div></article>").join("");
const cards=daySpots.map(s=>{const i=spots.indexOf(s);const photo=s.photo||"";return "<article class='spot-card' data-spot-index='"+i+"' tabindex='0' role='button'>"+(photo?"<img loading='lazy' src='"+photo+"' alt='"+s.n+"'>":"")+"<div class='spot-info'><div class='spot-cat'>"+categories[s.cat].icon+" "+categories[s.cat].label+"</div><h3>"+s.n+"</h3>"+(s.rating?"<div class='spot-rating'>★★★★★ <strong>"+s.rating+"</strong> · "+(s.reviews||0).toLocaleString()+" reviews</div>":"")+(s.type?"<p class='spot-type'>"+s.type+"</p>":"")+"<p>"+s.d+"</p></div></article>";}).join("");
const villagesHtml=dayVillages.map(v=>"<article class='spot-card village-card' data-village='"+v.id+"'><div class='spot-info'><div class='spot-cat'>🏘️ Villages</div><h3>"+v.name+"</h3>"+(v.data.rating?"<div class='spot-rating'>★★★★★ <strong>"+v.data.rating+"</strong> · "+(v.data.reviews||0).toLocaleString()+" reviews</div>":"")+"<p>"+(v.data.description||"Open this village to see its own saved data.")+"</p></div></article>").join("");
document.querySelector("#plan").innerHTML="<section class='day-panel'><div class='findings-head'><div><h2>"+day.label+" · Plan</h2><p class='day-description'>"+day.sub+"</p></div><div class='day-tools'>"+(routes[currentDay]?"<button type='button' id='route-toggle' class='route-toggle' onclick='toggleRoute()'>Show route</button>":"")+"<span>"+day.plan.length+" stops</span></div></div><div class='day-grid'>"+plan+"</div></section><section class='findings'><div class='findings-head'><h2>"+(currentDay==="sat"||currentDay==="sun"?"Day addons":"Palma addons")+"</h2><span>"+(daySpots.length+dayVillages.length)+" places</span></div><div class='photo-grid'>"+cards+villagesHtml+"</div></section>";
if(routes[currentDay]){drawRoute(currentDay);routeLayer.addTo(map);routeVisible=true;const b=document.querySelector("#route-toggle");if(b){b.textContent="Hide route";b.classList.add("active");}}
const pts=daySpots.map(s=>s.c).concat(dayVillages.map(v=>v.c));if(pts.length)map.fitBounds(L.latLngBounds(pts),{padding:[40,40]});
}
function openSpot(i){const s=spots[i];if(!s)return;window.open("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.n+", Mallorca, Spain"),"_blank","noopener,noreferrer");}
function openVillage(id){const v=villages.find(x=>x.id===id);if(!v)return;const d=v.data||{};let html="<section class='day-panel'><div class='findings-head'><div><h2>🏘️ "+v.name+"</h2><p class='day-description'>"+(d.description||"Village data")+"</p></div><button type='button' class='route-toggle' onclick='render()'>Back</button></div>";if(d.photos&&d.photos.length)html+="<div class='photo-grid'>"+d.photos.map(p=>"<img loading='lazy' src='"+p+"' alt='"+v.name+"'>").join("")+"</div>";if(d.rating)html+="<div class='spot-rating'>★★★★★ <strong>"+d.rating+"</strong> · "+(d.reviews||0).toLocaleString()+" reviews</div>";[["Food",d.food],["Sights",d.sights],["Experiences",d.experiences],["Instagrammable",d.instagram],["Hotels",d.hotels],["Notes",d.notes]].forEach(x=>{if(x[1]&&x[1].length)html+="<div class='day-card'><div class='day-content'><div class='time'>"+x[0]+"</div>"+x[1].map(t=>"<p>"+t+"</p>").join("")+"</div></div>";});if(d.parking)html+="<div class='day-card'><div class='day-content'><div class='time'>Parking</div><p>"+d.parking+"</p></div></div>";if(d.route)html+="<div class='day-card'><div class='day-content'><div class='time'>Route</div><p>"+d.route+"</p></div></div>";html+="</section>";document.querySelector("#plan").innerHTML=html;document.querySelector("#plan").scrollIntoView({behavior:"smooth",block:"start"});}
document.addEventListener("click",e=>{const day=e.target.closest("#days [data-day]");if(day){currentDay=day.dataset.day;render();return;}const village=e.target.closest("[data-village]");if(village){openVillage(village.dataset.village);return;}const spot=e.target.closest("[data-spot-index]");if(spot){openSpot(Number(spot.dataset.spotIndex));return;}const cat=e.target.closest("#filters [data-cat]");if(cat){toggleCat(cat.dataset.cat,cat);return;}});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const spot=e.target.closest("[data-spot-index]");if(spot){e.preventDefault();openSpot(Number(spot.dataset.spotIndex));}});
function focusArea(id){const a=areas.find(x=>x.id===id);if(!a)return;map.fitBounds(L.latLngBounds(a.p),{padding:[80,80]});L.popup().setLatLng(a.c).setContent("<strong>"+a.icon+" "+a.n+"</strong><br><small>"+a.type+"</small><br>"+a.d).openOn(map);}
function toggleCat(cat,btn){if(map.hasLayer(markerLayers[cat])){map.removeLayer(markerLayers[cat]);btn.classList.remove("active");}else{markerLayers[cat].addTo(map);btn.classList.add("active");}}


render();
