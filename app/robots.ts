import type { MetadataRoute } from "next";

// Production site URL configuration placeholder.
// Set NEXT_PUBLIC_SITE_URL in production environment (e.g. https://sjspectra.agency or https://sjspectra.com)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/#services", "/#about", "/#contact"],
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: siteUrl ? `${siteUrl.replace(/\/$/, "")}/sitemap.xml` : undefined,
  };
}
