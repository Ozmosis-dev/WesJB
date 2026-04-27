import type { MetadataRoute } from "next";

const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://wes.enapragma.dev";
const NOW = new Date("2026-04-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: NOW, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  ];
}
