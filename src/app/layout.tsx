import type { Metadata } from "next";
import { Chivo, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.serviceArea} ${siteConfig.trade}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Professional junk removal services in ${siteConfig.serviceArea}. ${siteConfig.tagline} Licensed, insured, flat-rate pricing.`,
  keywords: [
    "junk removal",
    "Springfield MA",
    "Pioneer Valley",
    "estate cleanout",
    "furniture removal",
    "construction debris",
    "hauling service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: `Professional junk removal services in ${siteConfig.serviceArea}. ${siteConfig.tagline}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
    areaServed: siteConfig.serviceArea,
    openingHours: ["Mo-Fr 06:00-19:00", "Sa 07:00-16:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating,
      reviewCount: "300",
    },
    url: siteConfig.primaryDomain
      ? `https://${siteConfig.primaryDomain}`
      : undefined,
  };

  return (
    <html lang="en" className={`${chivo.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
