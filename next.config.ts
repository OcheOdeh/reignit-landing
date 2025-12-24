import type { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Your other Next.js config options can go here
  output: 'standalone',
};

export default config;
