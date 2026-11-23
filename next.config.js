/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // These packages are server-only and should not be bundled
    serverComponentsExternalPackages: ["playwright", "playwright-core", "@sparticuz/chromium"],
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
