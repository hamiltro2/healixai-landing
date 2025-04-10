/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  output: 'standalone',
  trailingSlash: false,
};

module.exports = nextConfig;
