import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://app.fithubro.com/',
        permanent: false,
      },
      {
        source: '/register',
        destination: 'https://app.fithubro.com/owner/login',
        permanent: false,
      },
      {
        source: '/join/trainer',
        destination: 'https://app.fithubro.com/trainer/login',
        permanent: false,
      },
      {
        source: '/join/home',
        destination: 'https://app.fithubro.com/checkin',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
