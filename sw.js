const CACHE_NAME = 'lifeos-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // For now, do not aggressively cache Supabase/API requests
  return;
});
