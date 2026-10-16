import type { MetadataRoute } from "next";
import { articles } from "./resources/content";
import { siteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/resources`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    ...articles.map((article) => ({ url: `${siteUrl}/resources/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
  return pages;
}
