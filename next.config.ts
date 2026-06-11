import type { NextConfig } from "next";

// For GitHub Pages deployment:
// - If your repo is named "portfolio" → base URL is hamzaali120799.github.io/portfolio
//   Set BASE_PATH=/portfolio (already set in the GitHub Actions workflow)
// - If your repo is named "hamzaali120799.github.io" → base URL is hamzaali120799.github.io
//   Set BASE_PATH= (empty string) in the workflow or remove it here
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
