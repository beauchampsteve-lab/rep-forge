const CACHE='workout-tracker-vnext-3';
const STATIC=['./manifest.json','./icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const isShell=url.pathname.endsWith('/')||url.pathname.endsWith('/index.html');
  if(isShell){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>r).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok&&STATIC.some(x=>url.pathname.endsWith(x.slice(1)))){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return r;
  }).catch(()=>caches.match(e.request)));
});
