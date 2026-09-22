import http from "node:http";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {execFile} from "node:child_process";
import {promisify} from "node:util";

const execFileAsync=promisify(execFile);
const PORT=Number(process.env.PORT||8787);
const CORS_ORIGIN=process.env.CORS_ORIGIN||"*";
const REPO=process.env.GITHUB_REPO||"pantelisama/mallorca";
const BRANCH=process.env.GITHUB_BRANCH||"main";
const TOKEN=process.env.GITHUB_TOKEN||"";
const IMAGE=process.env.GMAPS_IMAGE||"gosom/google-maps-scraper:latest";
const TIMEOUT=Number(process.env.SCRAPE_TIMEOUT_MS||180000);

const json=(res,status,data)=>{
  res.writeHead(status,{"content-type":"application/json; charset=utf-8","access-control-allow-origin":CORS_ORIGIN,"access-control-allow-methods":"POST,OPTIONS","access-control-allow-headers":"content-type"});
  res.end(JSON.stringify(data));
};

function infer(text,requestedDay){
  const q=text.toLowerCase();
  const remove=/\\b(remove|delete|drop|take out|don't include|dont include)\\b/.test(q);
  let cat="experiences";
  if(/restaurant|food|dinner|lunch|tapas|bar|breakfast|eat/.test(q))cat="food";
  else if(/hotel|stay|sleep|accommodation/.test(q))cat="hotels";
  else if(/village|town|pueblo/.test(q))cat="villages";
  else if(/photo|instagram|viewpoint|sunset|mirador/.test(q))cat="instagram";
  else if(/museum|cathedral|church|castle|monastery|sight|calvari/.test(q))cat="sights";
  let day=requestedDay||null;
  if(/saturday|\\bsat\\b|17 oct/.test(q))day="sat";
  if(/sunday|\\bsun\\b|18 oct/.test(q))day="sun";
  if(/friday|\\bfri\\b|16 oct/.test(q))day="fri";
  if(/monday|\\bmon\\b|19 oct/.test(q))day="mon";
  let area="";
  const areas=["Palma","Caimari","Lluc","Pollença","Pollenca","Port de Pollença","Formentor","Sóller","Soller","Valldemossa","Deià","Deia","Alcúdia","Alcudia","Artà","Arta","Santanyí","Santanyi","Manacor"];
  for(const a of areas)if(q.includes(a.toLowerCase())){area=a;break;}
  return {remove,cat,day,area};
}

async function scrape(query){
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),"mallorca-agent-"));
  try{
    await fs.writeFile(path.join(dir,"queries.txt"),query+"\\n","utf8");
    const args=["run","--rm","-v",dir+":/work","-v","mallorca-gmaps-cache:/opt",IMAGE,
      "-input","/work/queries.txt","-results","/work/results.json","-json","-fast-mode","-depth","1","-exit-on-inactivity","2m"];
    await execFileAsync("docker",args,{timeout:TIMEOUT,maxBuffer:10*1024*1024});
    const raw=await fs.readFile(path.join(dir,"results.json"),"utf8");
    return JSON.parse(raw);
  }finally{await fs.rm(dir,{recursive:true,force:true});}
}

async function githubGet(){
  const r=await fetch(`https://api.github.com/repos/${REPO}/contents/data/agent-items.json?ref=${encodeURIComponent(BRANCH)}`,{headers:{"accept":"application/vnd.github+json","authorization":`Bearer ${TOKEN}`,"x-github-api-version":"2022-11-28"}});
  if(!r.ok)throw new Error("GitHub read failed: "+r.status);
  const d=await r.json();
  const content=Buffer.from(d.content.replace(/\\n/g,""),"base64").toString("utf8");
  return {data:JSON.parse(content),sha:d.sha};
}
async function githubPut(data,sha,message){
  const body={message,content:Buffer.from(JSON.stringify(data,null,2)+"\\n").toString("base64"),sha,branch:BRANCH};
  const r=await fetch(`https://api.github.com/repos/${REPO}/contents/data/agent-items.json`,{method:"PUT",headers:{"accept":"application/vnd.github+json","authorization":`Bearer ${TOKEN}`,"content-type":"application/json","x-github-api-version":"2022-11-28"},body:JSON.stringify(body)});
  if(!r.ok)throw new Error("GitHub write failed: "+r.status+" "+await r.text());
  return r.json();
}

function normaliseResult(row,cat,day){
  const title=row.title||row.name;
  if(!title||!row.latitude||!row.longitude)return null;
  const photo=row.thumbnail||(Array.isArray(row.images)&&row.images[0])||"";
  const reviews=Array.isArray(row.user_reviews)?row.user_reviews.slice(0,3):[];
  const description=row.descriptions||row.about||row.category||"";
  return {id:"agent-"+(row.place_id||row.data_id||row.cid||Date.now()),by:"Agent",n:title,c:[Number(row.latitude),Number(row.longitude)],cat,day:day||"both",d:description,photo,rating:row.review_rating?Number(row.review_rating):null,reviews:row.review_count?Number(row.review_count):null,address:row.complete_address||row.address||"",website:row.website||"",googleMapsUrl:row.link||"",openHours:row.open_hours||[],userReviews:reviews};
}

async function handle(body){
  const request=String(body.request||"").trim();
  if(!request)throw new Error("Missing request");
  const intent=infer(request,body.day);
  if(!TOKEN)throw new Error("GITHUB_TOKEN is not configured");
  const current=await githubGet();
  if(intent.remove){
    const needle=request.replace(/remove|delete|drop|take out|don't include|dont include/gi,"").trim().toLowerCase();
    const before=current.data.spots||[];
    const after=before.filter(s=>!needle.split(/\\s+/).filter(Boolean).some(w=>w.length>3&&String(s.n).toLowerCase().includes(w)));
    if(after.length===before.length)throw new Error("I couldn't match an existing place to remove.");
    current.data.spots=after;
    await githubPut(current.data,current.sha,"Agent: remove place");
    return {ok:true,action:"remove",message:"Removed the matching place and published the update."};
  }
  const query=`${request.replace(/\\b(add|find|include|put|show|me|a|an|some)\\b/gi,"").trim()} in Mallorca`;
  const rows=await scrape(query);
  const list=Array.isArray(rows)?rows:(rows.results||rows.data||[]);
  if(!list.length)throw new Error("No place was found.");
  const place=normaliseResult(list[0],intent.cat,intent.day);
  if(!place)throw new Error("The scraper returned an incomplete place.");
  const spots=current.data.spots||[];
  const duplicate=spots.find(s=>s.googleMapsUrl&&place.googleMapsUrl&&s.googleMapsUrl===place.googleMapsUrl)||spots.find(s=>s.n.toLowerCase()===place.n.toLowerCase());
  if(!duplicate)spots.push(place);
  current.data.spots=spots;
  await githubPut(current.data,current.sha,"Agent: add "+place.n);
  return {ok:true,action:"add",place,duplicate:!!duplicate,message:duplicate?"That place was already in the trip.":"Added "+place.n+" and published the update."};
}

const server=http.createServer(async(req,res)=>{
  if(req.method==="OPTIONS"){res.writeHead(204,{"access-control-allow-origin":CORS_ORIGIN,"access-control-allow-methods":"POST,OPTIONS","access-control-allow-headers":"content-type"});return res.end();}
  if(req.method==="GET"&&req.url==="/health")return json(res,200,{ok:true});
  if(req.method==="POST"&&req.url==="/agent"){
    try{let raw="";for await(const c of req)raw+=c;const body=JSON.parse(raw||"{}");return json(res,200,await handle(body));}
    catch(e){return json(res,500,{ok:false,error:e.message});}
  }
  return json(res,404,{error:"Not found"});
});
server.listen(PORT,()=>console.log("Mallorca agent listening on "+PORT));
