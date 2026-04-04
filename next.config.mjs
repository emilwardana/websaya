/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/websaya', // Important: must match repo name
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js Image Optimization
};
export default nextConfig;
