const CACHE_NAME = 'antonio-ortega-v4';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const urlsToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/static/script.js',
  '/favicon.ico',
  '/me.jpg',
  '/manifest.json',
  '/offline.html'
];

// Helper function to check if a cached response is expired
function isCacheExpired(cachedResponse) {
  if (!cachedResponse) return true;
  
  const cacheDate = cachedResponse.headers.get('sw-cache-date');
  if (!cacheDate) {
    // If no cache date header, treat as expired to force refresh
    return true;
  }
  
  const cacheTime = parseInt(cacheDate, 10);
  const now = Date.now();
  const age = now - cacheTime;
  
  return age > CACHE_DURATION;
}

// Helper function to add cache timestamp to response
function addCacheTimestamp(response) {
  const headers = new Headers(response.headers);
  headers.set('sw-cache-date', Date.now().toString());
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
}

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Add timestamps to all cached items
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.keys().then((requests) => {
            return Promise.all(
              requests.map((request) => {
                return cache.match(request).then((response) => {
                  if (response && !response.headers.get('sw-cache-date')) {
                    return cache.put(request, addCacheTimestamp(response));
                  }
                });
              })
            );
          });
        });
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
});

// Fetch event - serve from cache if available and not expired
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        const fetchRequest = event.request.clone();
        
        // If we have a cached response and it's not expired, serve it
        if (cachedResponse && !isCacheExpired(cachedResponse)) {
          // Update cache in background (stale-while-revalidate)
          fetch(fetchRequest)
            .then((response) => {
              if (response && response.status === 200 && response.type === 'basic') {
                const responseToCache = addCacheTimestamp(response.clone());
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              }
            })
            .catch(() => {
              // Network failed, but we already have cached content
            });
          
          return cachedResponse;
        }
        
        // Cache expired or not found, fetch fresh content
        return fetch(fetchRequest)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              // If network fails but we have stale cache, serve it
              if (cachedResponse) {
                return cachedResponse;
              }
              return response;
            }
            
            // Clone the response because it's a stream and can only be consumed once
            const responseToCache = addCacheTimestamp(response.clone());
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Network request failed
            if (cachedResponse) {
              // Serve stale cache if available
              return cachedResponse;
            }
            
            // If network request fails, return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            // For other requests, try to return a cached version or fail gracefully
            return new Response('Offline content not available', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain',
              }),
            });
          });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
