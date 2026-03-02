/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', () => {
  sw.skipWaiting();
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(sw.clients.claim());
});

sw.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.origin === 'https://fonts.googleapis.com') {
    event.respondWith(
      caches.open('google-fonts-cache').then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((fetchResponse) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  if (url.origin === 'https://cdn.counter.dev') {
    event.respondWith(
      fetch(event.request).then((response) => {
        return caches.open('analytics-cache').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      }).catch(() => caches.match(event.request).then(r => r ?? fetch(event.request)))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response ?? fetch(event.request);
    })
  );
});
