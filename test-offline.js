// Test script to verify offline functionality
// Run this in the browser console after loading the site

console.log('=== Offline Mode Test ===');

// Check if service worker is registered
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    console.log('Service Worker Registrations:', registrations);
    
    if (registrations.length > 0) {
      console.log('✅ Service Worker is registered');
      
      // Check cache
      caches.keys().then(cacheNames => {
        console.log('Available caches:', cacheNames);
        
        // Check specific cache
        caches.open('antonio-ortega-v4').then(cache => {
          cache.keys().then(requests => {
            console.log('Cached resources:', requests.map(req => req.url));
          });
        });
      });
    } else {
      console.log('❌ No Service Worker registrations found');
    }
  });
} else {
  console.log('❌ Service Worker not supported');
}

// Test offline detection
window.addEventListener('online', () => {
  console.log('🌐 Back online');
});

window.addEventListener('offline', () => {
  console.log('📶 Gone offline');
});

console.log('Current online status:', navigator.onLine ? '🌐 Online' : '📶 Offline');
