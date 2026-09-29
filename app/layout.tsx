import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Production site URL configuration placeholder.
// Set NEXT_PUBLIC_SITE_URL in production environment (e.g. https://sjspectra.agency or https://sjspectra.com)
// If not set, canonical URLs are omitted to prevent emitting incorrect domains.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "SJ Spectra | Digital Solutions & Digital Marketing Agency",
  description:
    "SJ Spectra helps businesses grow online through website development, Android apps, digital marketing, SEO, social media marketing and creative content.",
  keywords: [
    "SJ Spectra",
    "digital solutions",
    "website development",
    "Android app development",
    "digital marketing",
    "SEO",
    "social media marketing",
    "creative content",
  ],
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SJ Spectra",
    title: "SJ Spectra | Digital Solutions & Digital Marketing Agency",
    description:
      "SJ Spectra helps businesses grow online through website development, Android apps, digital marketing, SEO, social media marketing and creative content.",
    images: [
      {
        url: "/images/websiteheader.png",
        width: 1200,
        height: 630,
        alt: "SJ Spectra | Digital Solutions & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Spectra | Digital Solutions & Digital Marketing Agency",
    description:
      "SJ Spectra helps businesses grow online through website development, Android apps, digital marketing, SEO, social media marketing and creative content.",
    images: ["/images/websiteheader.png"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

// Organization structured data (Schema.org JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SJ Spectra",
  description:
    "Digital solutions agency providing website development, Android applications, digital marketing, SEO, social media marketing and creative content.",
  logo: "/images/SJ-Spectra-Horizontal-Light.png",
  email: "sjspectra.agency@gmail.com",
  sameAs: [
    "https://www.instagram.com/sjspectra.agency",
    "https://www.facebook.com/share/18zEuTJWVs/",
  ],
  knowsAbout: [
    "Website Development",
    "Android App Development",
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "Creative & Video Content",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
