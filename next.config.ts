import type { NextConfig } from 'next';

const config: NextConfig = {
  // @ts-expect-error - Expected error as types for Next 16 might be missing this
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Your other Next.js config options can go here
  output: 'standalone',
};

export default config;
