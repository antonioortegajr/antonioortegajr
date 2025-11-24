import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Only register service worker in production to avoid conflicts with Next.js HMR in development
  const isProduction = process.env.NODE_ENV === 'production'
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {isProduction && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js')
                      .then((registration) => {
                        console.log('Service Worker registered successfully:', registration);
                        
                        // Check for updates
                        registration.addEventListener('updatefound', () => {
                          const newWorker = registration.installing;
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              console.log('New service worker available');
                            }
                          });
                        });
                      })
                      .catch((registrationError) => {
                        console.error('Service Worker registration failed:', registrationError);
                      });
                  });
                } else {
                  console.log('Service Worker not supported in this browser');
                }
              `,
            }}
          />
        )}
      </body>
    </Html>
  )
}
