import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    turbo: false, // Disable Turbopack to use webpack (required for contentlayer2)
  },
};

export default withContentlayer(nextConfig);
