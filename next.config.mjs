/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mirrors the original Vite build (terser drop_console: true) for production,
  // while keeping error logs.
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
    // The 3D (three.js/draco WASM), GSAP and Next's own inline scripts require
    // 'unsafe-inline'/'unsafe-eval'; blob: is used for the decrypted model and
    // draco workers. CSP is applied in production only so it doesn't interfere
    // with the dev server's websocket/eval-based HMR.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "media-src 'self' blob:",
      "connect-src 'self' blob: https://*.vercel-insights.com https://vitals.vercel-insights.com",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
    ];

    if (process.env.NODE_ENV === "production") {
      headers.push({ key: "Content-Security-Policy", value: csp });
    }

    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
