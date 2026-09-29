import type { MetadataRoute } from "next";

// Production site URL configuration placeholder.
// Set NEXT_PUBLIC_SITE_URL in production environment (e.g. https://sjspectra.agency or https://sjspectra.com)
// Once the final production domain is configured, update this value or define NEXT_PUBLIC_SITE_URL.
const PRODUCTION_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sjspectra.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PRODUCTION_SITE_URL.replace(/\/$/, "");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
