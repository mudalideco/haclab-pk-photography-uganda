import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/haclab-pk-photography-uganda",
  assetPrefix: "/haclab-pk-photography-uganda/",
};

export default nextConfig;
