# Offline Mode Documentation

## Overview

This website implements a Progressive Web App (PWA) with offline functionality using a Service Worker. When users lose their internet connection, they can still access cached content and see a custom offline page.

## How It Works

### Service Worker (`/public/sw.js`)

The service worker handles:
- **Caching**: Stores essential resources during installation
- **Fetch Interception**: Serves cached content when offline
- **Offline Fallback**: Shows custom offline page for navigation requests
- **Cache Management**: Automatically cleans up old cache versions

### Cached Resources

The following resources are cached for offline access:
- `/` (homepage)
- `/index.html`
- `/404.html`
- `/static/script.js`
- `/favicon.ico`
- `/me.jpg`
- `/manifest.json`
- `/offline.html`

### Offline Page (`/public/offline.html`)

A custom offline page that:
- Matches the site's design theme
- Provides clear messaging about being offline
- Includes a retry button
- Automatically reloads when connection is restored
- Offers troubleshooting tips

## Testing Offline Mode

### Method 1: Browser DevTools
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Check "Offline" checkbox
4. Refresh the page
5. You should see the offline page

### Method 2: Console Test
1. Load the website
2. Open browser console
3. Copy and paste the contents of `test-offline.js`
4. Check the output for service worker status

### Method 3: Disconnect Network
1. Disconnect your internet connection
2. Navigate to the website
3. You should see the offline page

## Troubleshooting

### Common Issues

1. **Blank White Page**
   - Check browser console for service worker errors
   - Verify service worker is registered
   - Clear browser cache and reload

2. **Service Worker Not Registering**
   - Check if HTTPS is enabled (required for service workers)
   - Verify no JavaScript errors in console
   - Check browser support for service workers

3. **Cache Not Working**
   - Verify cache names match in service worker
   - Check if resources are being cached during installation
   - Clear old caches manually

### Debug Commands

```javascript
// Check service worker registration
navigator.serviceWorker.getRegistrations().then(console.log);

// Check available caches
caches.keys().then(console.log);

// Check cached resources
caches.open('antonio-ortega-v4').then(cache => 
  cache.keys().then(requests => console.log(requests.map(r => r.url)))
);
```

## Maintenance

### Updating Cache Version
When making significant changes:
1. Update `CACHE_NAME` in `sw.js`
2. Rebuild the project
3. Clear old caches (they will be cleaned up automatically)

### Adding New Resources
To cache additional resources:
1. Add URLs to `urlsToCache` array in `sw.js`
2. Update cache version
3. Rebuild and test

## Browser Support

- ✅ Chrome 40+
- ✅ Firefox 44+
- ✅ Safari 11.1+
- ✅ Edge 17+

## Files Involved

- `/public/sw.js` - Service Worker implementation
- `/public/offline.html` - Offline page
- `/pages/_document.js` - Service Worker registration
- `/public/manifest.json` - PWA manifest
- `test-offline.js` - Testing script
