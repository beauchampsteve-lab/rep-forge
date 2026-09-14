const CACHE='repforge-onboarding-v150';
const CORE=['./manifest.json','./icon-192.png','./icon-512.png','./logo-mark.png','./favicon-32.png','./favicon-16.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;if(r.mode==='navigate'||new URL(r.url).pathname.endsWith('/index.html')){e.respondWith(fetch(r,{cache:'no-store'}).then(res=>res).catch(()=>caches.match('./index.html')));return}e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(cache=>cache.put(r,cp));return res}))) });
