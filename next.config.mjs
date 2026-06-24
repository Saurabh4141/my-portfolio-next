/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mirrors the original Vite build (terser drop_console: true) for production,
  // while keeping error logs so the chat route handler stays debuggable.
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  // The portfolio renders all imagery with plain <img>/CSS backgrounds to keep
  // the design pixel-for-pixel identical to the React app (no next/image
  // re-encoding/layout changes). Nothing to configure for images here.

  // Security headers — carried over from the original vercel.json so they apply
  // on any Node host (Hostinger VPS, etc.), not just Vercel.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
