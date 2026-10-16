import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./content";
import { socialShareImage } from "../site-config";

export const metadata: Metadata = {
  title: "Resources | SJ Spectra",
  description: "Practical guides to websites, Android applications, SEO and digital marketing for small businesses in India.",
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "website",
    url: "/resources",
    siteName: "SJ Spectra",
    title: "Small Business Digital Guides | SJ Spectra Resources",
    description: "Practical guides to websites, Android applications, SEO and digital marketing for small businesses in India.",
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Digital Guides | SJ Spectra Resources",
    description: "Practical guides to websites, Android applications, SEO and digital marketing for small businesses in India.",
    images: [socialShareImage.url],
  },
};

export default function ResourcesPage() {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const remaining = articles.filter((article) => article.slug !== featured.slug);
  return <main className="editorial-page">
    <section className="resources-hero"><div className="container">
      <p className="editorial-eyebrow">SJ SPECTRA INSIGHTS</p>
      <h1>Smarter Digital Decisions Start Here</h1>
      <p className="editorial-intro">Explore practical guides to websites, Android applications, SEO and digital marketing. Understand your options and make better decisions for your business.</p>
    </div></section>
    <section className="resource-section"><div className="container">
      <div className="resource-section-heading"><div><span className="section-label">The resource library</span><h2>Useful ideas for your next digital step</h2></div><span className="resource-count">{articles.length} practical guides</span></div>
      <div className="resource-grid">
        <ResourceCard article={featured} featured />
        {remaining.map((article) => <ResourceCard key={article.slug} article={article} />)}
      </div>
      <p className="editorial-note">These articles are general educational information for business owners. Confirm platform rules and technical requirements that apply to your own situation. Explore our <Link href="/#services">services</Link>, browse the <Link href="/portfolio">portfolio</Link>, or <Link href="/#contact">contact SJ Spectra</Link>.</p>
    </div></section>
  </main>;
}

function ResourceCard({ article, featured = false }: { article: (typeof articles)[number]; featured?: boolean }) {
  return <article className={`resource-card${featured ? " featured" : ""}`}>
    <span className="resource-category">{article.category}</span>
    <h2><Link href={`/resources/${article.slug}`}>{article.title}</Link></h2>
    <p>{article.description}</p>
    <p className="resource-meta">{article.readingTime}</p>
    <Link className="resource-read" href={`/resources/${article.slug}`}>Read Article <span aria-hidden="true">↗</span></Link>
  </article>;
}
