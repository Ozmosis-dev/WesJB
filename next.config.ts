import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Next.js App Router generates dynamic inline scripts for hydration whose
// content changes per request, making per-hash whitelisting impossible.
// 'unsafe-inline' is required. Origin restrictions in script-src still
// prevent loading scripts from unapproved external domains.
const csp = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    isDev ? "'unsafe-eval'" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com",
  "frame-src https://maps.google.com",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
]
  .join("; ");

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: csp },
];

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 88, 90],
  },
  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },
};

export default config;
