const staticCacheName = 'static-v1';
const apiCacheName = 'MBTA-v2';
//
//
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        'assets/app.js'
      ])
    })
  );
});

self.addEventListener('fetch',function(event) {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.hostname == "realtime.mbta.com") {
    event.respondWith(
      caches.open(apiCacheName).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          if (response) return response;

          return fetch(event.request).then(function(res) {
            cache.put(requestUrl, res.clone());
            return res;
          })
        })
      })
    )
  }

});

