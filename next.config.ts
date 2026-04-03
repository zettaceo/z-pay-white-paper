import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-pay-eight.vercel.app",
      },
    ],
  },
};

export default nextConfig;
