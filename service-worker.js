const CACHE_NAME = "ekdant-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./aartibook.html",
  "./payment.html",
  "./status.html",
  "./gallery-view.html",
  "./admin-login.html",

  "./logo-192.png",
  "./logo-512.png",
  "./logo-nav.png",
  "./ganpati.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
