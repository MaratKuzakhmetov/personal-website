import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/sanity-images/:path*',
        destination: 'https://cdn.sanity.io/images/srmsnwov/production/:path*',
      },
    ];
  },
};

export default nextConfig;
