self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('bms-practice').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
