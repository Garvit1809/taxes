import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * In development Next.js blocks cross-origin requests to /_next/* assets.
   * When the dev server is exposed through a tunnel (ngrok, Cloudflare) the
   * HTML still loads but every CSS and JS chunk returns 403, so the page
   * arrives unstyled. These patterns whitelist the usual tunnel hosts.
   *
   * Development only — it has no effect on `next build` / `next start`.
   */
  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.ngrok.app",
    "*.trycloudflare.com",
    "*.loca.lt",
    // LAN access, e.g. testing on a phone against the network URL
    "192.168.*.*",
    "10.*.*.*",
  ],
};

export default nextConfig;
