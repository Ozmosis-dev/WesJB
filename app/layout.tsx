import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Oswald, Work_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import { PageTransition } from "@/app/components/page-transition";
import { Providers } from "@/app/components/providers";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Train with Wesley Johnson — former top-5 NBA pick who spent nearly a decade in the league, now coaching the next generation of elite players in New Orleans.";

const HOME_TITLE = "Private Basketball Training New Orleans — Wes Johnson";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "Wes Johnson",
    "Wesley Johnson",
    "basketball training",
    "New Orleans",
    "private basketball coaching",
    "NBA training",
    "elite basketball coaching",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#0d0c0b" },
    { media: "(prefers-color-scheme: light)", color: "#f8f5f0" },
  ],
  width: "device-width",
  initialScale: 1,
};

const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "description": "Private basketball training in New Orleans with Wesley Johnson, former top-5 NBA draft pick and nine-year NBA veteran.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3001 Tchoupitoulas St",
        "addressLocality": "New Orleans",
        "addressRegion": "LA",
        "postalCode": "70115",
        "addressCountry": "US",
      },
      "priceRange": "$$",
      "serviceType": "Basketball Training",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#wes`,
      "name": "Wesley Johnson",
      "url": `${SITE_URL}/about`,
      "jobTitle": "Basketball Coach",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Syracuse University",
      },
      "worksFor": { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${workSans.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `(function(){try{var s=localStorage.getItem('wjb-theme');var m=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||m);}catch(e){}})();` }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X12RCSNZKQ"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-X12RCSNZKQ');`,
          }}
        />
        <Providers>
          <Nav />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          {/* Floating theme toggle — mobile only, outside all stacking contexts */}
          <div className="fixed bottom-6 right-5 z-[60] md:hidden">
            <ThemeToggle variant="fab" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
