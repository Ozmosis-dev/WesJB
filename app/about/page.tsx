import type { Metadata } from "next";
import { AboutContent } from "./_content";
import { SITE_URL } from "@/lib/site";

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute:
      "Wesley Johnson — Former NBA Player & Private Basketball Coach in New Orleans",
  },
  description:
    "The journey of Wesley Johnson from a small town outside Dallas to Syracuse to almost a decade in the NBA, and now coaching out of New Orleans.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title:
      "Wesley Johnson — Former NBA Player & Private Basketball Coach in New Orleans",
    description:
      "The journey of Wesley Johnson from a small town outside Dallas to Syracuse to almost a decade in the NBA, and now coaching out of New Orleans.",
    images: [
      {
        url: "/photos/wes-pelicans-orange-bg.jpg",
        width: 3168,
        height: 1344,
        alt: "Wesley Johnson — Former NBA Player & Private Basketball Coach",
      },
    ],
  },
  twitter: {
    title:
      "Wesley Johnson — Former NBA Player & Private Basketball Coach in New Orleans",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }}
      />
      <AboutContent />
    </>
  );
}
