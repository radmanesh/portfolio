import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {}, // Empty config to allow webpack config from contentlayer2
};

export default withContentlayer(nextConfig);
