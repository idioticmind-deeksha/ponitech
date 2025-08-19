import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1jeucgauwhk42.cloudfront.net',
        port: '',
        pathname: '/production/**',
      },
    ],
  },
};

export default nextConfig;
