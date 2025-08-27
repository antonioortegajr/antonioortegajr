const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  output: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
