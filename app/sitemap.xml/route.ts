import { SITE_URL } from "@/lib/site";

const LAST_MOD = "2026-04-25";

const PAGES = [
  {
    loc: `${SITE_URL}/`,
    priority: "1.0",
    images: [
      {
        loc: `${SITE_URL}/photos/WSJ%20youth.jpg`,
        title: "Wesley Johnson as a Youth Basketball Player in Texas",
      },
    ],
  },
  {
    loc: `${SITE_URL}/about`,
    priority: "0.8",
    images: [
      {
        loc: `${SITE_URL}/photos/WSJ%20syracuse.png`,
        title: "Wesley Johnson Playing at Syracuse University",
      },
      {
        loc: `${SITE_URL}/photos/wes-pelicans-orange-bg.jpg`,
        title: "Wesley Johnson in New Orleans Pelicans NBA Uniform",
      },
    ],
  },
  {
    loc: `${SITE_URL}/contact`,
    priority: "0.8",
    images: [],
  },
];

function renderImages(images: { loc: string; title: string }[]) {
  return images
    .map(
      (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`
    )
    .join("");
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${PAGES.map(
  (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>${renderImages(page.images)}
  </url>`
).join("\n")}
</urlset>`;

export function GET() {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
