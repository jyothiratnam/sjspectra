import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";
import { socialShareImage } from "../site-config";

const portfolioTitle = "SJ Spectra Portfolio | Websites, Android Apps & Creative Work";
const portfolioDescription = "Explore SJ Spectra website projects, an Android application showcase, creative designs, and promotional video work.";

export const metadata: Metadata = {
  title: portfolioTitle,
  description: portfolioDescription,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "/portfolio",
    siteName: "SJ Spectra",
    title: portfolioTitle,
    description: portfolioDescription,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioTitle,
    description: portfolioDescription,
    images: [socialShareImage.url],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
