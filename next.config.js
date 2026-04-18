/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Recommended for static hosting
  images: {
    unoptimized: true, // Required for static export
  },
  // assetPrefix: './', // Use only if files are in a subdirectory
}
module.exports = nextConfig

