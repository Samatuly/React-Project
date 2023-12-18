const staticCacheName = "s-app-v1";
const assetUrls = [
  "../src/App.js",
  "../src/App.css",
  "../src/index.js",
  "../src/Home/Home.jsx",
  "../src/Home/home.css",
  "../src/Home/Slider/Slider.js",
  "../src/Home/Slider/slider.css",
  "../src/Topbar/Topbar.jsx",
  "../src/Topbar/topbar.css",
  "../src/Login/AuthDetails.jsx",
  "../src/Login/Login.jsx",
  "../src/Login/Register.jsx",
  "../src/Login/useAuthDetailsHook.jsx",
  "../src/Login/Login.css",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll(assetUrls))
  );
});

self.addEventListener("activate", (event) => {
  console.log("[SW]: activate");
});

// self.addEventListener("fetch", (event) => {
//   console.log("Fetch", event.request.url);
//   event.respondWith(cacheFirst(event.request));
// });

// async function cacheFirst(request) {
//   const cached = await caches.match(request);
//   return caches ?? (await fetch(request));
// }
