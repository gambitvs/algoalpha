import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/staging",
  assetPrefix: "/staging",
  async redirects() {
    return [
      {
        source: "/apply-now",
        destination: "/apply",
        permanent: true,
      },
      {
        source: "/portfolio-accelerator",
        destination: "/apply",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
