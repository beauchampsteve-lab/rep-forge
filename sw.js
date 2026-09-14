const CACHE='workout-ui-v2';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(req.mode==='navigate' || url.pathname.endsWith('/index.html')){
    e.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('/workout-tracker/index.html').then(r=>r||caches.match('/index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(c=>c||fetch(req).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(req,copy));return resp;})));
});
