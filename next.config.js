/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "traboulsiest.com" },
      { protocol: "http", hostname: "traboulsiest.com" },
    ],
  },
};
module.exports = nextConfig;
