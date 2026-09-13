import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/owners',
        permanent: false,
      },
      {
        source: '/register',
        destination: '/owners',
        permanent: false,
      },
      {
        source: '/join/trainer',
        destination: '/trainers',
        permanent: false,
      },
      {
        source: '/join/home',
        destination: '/members',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
