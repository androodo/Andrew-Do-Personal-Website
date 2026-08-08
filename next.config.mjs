/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development artifacts separate so preview HMR is not corrupted by production builds.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
