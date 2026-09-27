import type { Metadata, Viewport } from "next";
import { Geist, Cinzel } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteConfig";
import { LanguageProvider } from "@/lib/languageContext";
import { LocalBusinessSchema } from "@/components/seo/SchemaData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.seo.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} — Premium Marble, Tiles, Granite & Sanitaryware in Firozabad`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.owner, url: SITE_CONFIG.seo.siteUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.seo.siteUrl,
    title: `${SITE_CONFIG.name} — Luxury Stone & Tile Showroom`,
    description: SITE_CONFIG.seo.defaultDescription,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/hero-stone.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Showroom Firozabad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Premium Marble & Tiles`,
    description: SITE_CONFIG.seo.defaultDescription,
    images: ["/images/hero-stone.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1917",
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
      className={`${geistSans.variable} ${cinzel.variable} scroll-smooth antialiased`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFCF7] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
