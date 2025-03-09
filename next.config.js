/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig 