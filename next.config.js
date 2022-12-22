/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-2.api-sports.io",
      },
    ],
  },
};

module.exports = nextConfig;
