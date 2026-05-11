const CACHE_NAME = "mehar-vcard-v3"; // Bumped to v3

const urlsToCache = [
  "/vcard/",
  "/vcard/index.html",
  "/vcard/style.css",          // Added your CSS
  "/vcard/ai-chatbot.css",     // Added Chatbot CSS
  "/vcard/ai-chatbot.js",      // Added Chatbot JS
  "/vcard/logo.webp",
  "/vcard/logo.png",           // Added PNG for the App Icon
  "/vcard/doctor.webp",        // Added Doctor's image
  "/vcard/chat-bot.webp",      // Added Chatbot button image
  "/vcard/qr_vcard.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Optional but recommended: This cleans up old caches (like v1 or v2) automatically
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
