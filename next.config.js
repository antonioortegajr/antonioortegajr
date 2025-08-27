const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});