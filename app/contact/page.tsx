import type { Metadata } from "next";
import { ContactContent } from "./_content";
import { SITE_URL } from "@/lib/site";

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Book", item: `${SITE_URL}/contact` },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Book Private Basketball Training in New Orleans — Wes Johnson",
  },
  description:
    "Book a private session with Wesley Johnson in New Orleans, or apply for the elite track: sustained, custom-scoped programs for serious athletes.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Book Private Basketball Training in New Orleans — Wes Johnson",
    description:
      "Book a private session with Wesley Johnson in New Orleans, or apply for the elite track: sustained, custom-scoped programs for serious athletes.",
  },
  twitter: {
    title: "Book Private Basketball Training in New Orleans — Wes Johnson",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }}
      />
      <ContactContent />
    </>
  );
}
