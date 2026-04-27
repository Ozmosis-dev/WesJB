import type { Metadata, Viewport } from "next";
import { Oswald, Work_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import { PageTransition } from "@/app/components/page-transition";
import { Providers } from "@/app/components/providers";
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

// Prefer the actual Vercel production URL when present so og:image / twitter:image
// resolve against the deployment that is actually serving — falls back to the
// canonical custom domain. Once wes.enapragma.dev is aliased to v10, both paths
// produce the same URL.
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://wes.enapragma.dev";
const SITE_NAME = "Wes Johnson Basketball";
const SITE_DESCRIPTION =
  "Private basketball training with Wesley Johnson, a former top-5 NBA draft pick who played in the league for almost a decade and now develops the next generation of elite players out of New Orleans.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · New Orleans`,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · New Orleans`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · New Orleans`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
  width: "device-width",
  initialScale: 1,
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
    >
      <body>
        <Providers>
          <Nav />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
