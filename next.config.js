/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'source.unsplash.com', 
      'images.unsplash.com', 
      's.wordpress.com', 
      's0.wp.com',
      'd.top4top.io',
      'a.top4top.io'
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
