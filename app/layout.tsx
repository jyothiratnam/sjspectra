import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { siteUrl, socialShareImage } from "./site-config";

export const metadata: Metadata = {
  title: "SJ Spectra | Websites, Android Apps & Digital Marketing",
  description:
    "SJ Spectra creates websites and Android applications, and supports businesses with SEO, digital marketing, social media content and promotional videos.",
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
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SJ Spectra",
    url: "/",
    title: "SJ Spectra | Websites, Android Apps & Digital Marketing",
    description: "SJ Spectra creates websites and Android applications, and supports businesses with SEO, digital marketing, social media content and promotional videos.",
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Spectra | Websites, Android Apps & Digital Marketing",
    description: "SJ Spectra creates websites and Android applications, and supports businesses with SEO, digital marketing, social media content and promotional videos.",
    images: [socialShareImage.url],
  },
  icons: {
    icon: "/images/favicon.ico?v=2",
  },
};

// Organization structured data (Schema.org JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "SJ Spectra",
  url: siteUrl,
  description:
    "Digital solutions agency providing website development, Android applications, digital marketing, SEO, social media marketing and creative content.",
  logo: `${siteUrl}/images/SJ-Spectra-Horizontal-Light.png`,
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
      <body>
        <Navbar />
        {children}
        <Footer />
        <SocialLinks />
      </body>
    </html>
  );
}
