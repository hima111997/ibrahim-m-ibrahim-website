// ────────────────────────────────────────────────────────────────────────────
// next.config.ts  (static-export version for GitHub Pages)
// Replace your existing next.config.ts with this file before pushing to GitHub.
// ────────────────────────────────────────────────────────────────────────────

import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out
  output: "export",

  // GitHub Pages serves assets under /<repo-name> when using a project page,
  // or under / when using a user page (<username>.github.io). The CI workflow
  // passes NEXT_PUBLIC_BASE_PATH automatically via actions/configure-pages.
  basePath,
  assetPrefix: basePath || undefined,

  images: {
    // Next/Image optimization server isn't available on static hosting.
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
};

export default nextConfig;
