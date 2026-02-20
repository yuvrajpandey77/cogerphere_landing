import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images and enable modern formats
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure compression (Vercel enables this by default; useful for self-host)
  compress: true,
  // Strict mode for better React practices
  reactStrictMode: true,
  // Enable powered-by header removal for security (optional)
  poweredByHeader: false,
};

export default nextConfig;
