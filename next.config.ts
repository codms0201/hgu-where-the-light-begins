import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1gw2bornwk43o.cloudfront.net",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
