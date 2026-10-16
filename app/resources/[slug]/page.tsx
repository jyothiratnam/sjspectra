import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, findArticle } from "../content";
import { siteUrl, socialShareImage } from "../../site-config";

const legacySlugs: Record<string, string> = {
  "website-vs-social-media": "website-vs-instagram-small-business",
  "seo-basics-small-business": "seo-for-small-business-india",
};
const allSlugs = [...articles.map(({ slug }) => slug), ...Object.keys(legacySlugs)];
const sectionId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(legacySlugs[slug] ?? slug);
  if (!article) return { title: "Guide not found | SJ Spectra" };
  return {
    title: `${article.title} | SJ Spectra Resources`,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/resources/${article.slug}`,
      siteName: "SJ Spectra",
      title: article.title,
      description: article.description,
      images: [socialShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [socialShareImage.url],
    },
  };
}

export default async function ResourceArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findArticle(legacySlugs[slug] ?? slug);
  if (!article) notFound();
  const related = article.related.map((relatedSlug) => findArticle(relatedSlug)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${siteUrl}/resources/${article.slug}`,
    author: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
    publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
  };

  return <main className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }} />
    <header className="article-hero"><div className="container">
      <p className="editorial-eyebrow"><Link href="/resources">SJ Spectra Insights</Link> <span aria-hidden="true">/</span> {article.category}</p>
      <h1>{article.title}</h1>
      <p className="article-description">{article.description}</p>
      <p className="article-meta">{article.category} <span aria-hidden="true">·</span> {article.readingTime}</p>
    </div></header>
    <div className="article-layout">
      <aside className="article-toc"><h2>In this guide</h2><nav aria-label="Table of contents">
        {article.sections.map((section) => <a key={section.heading} href={`#${sectionId(section.heading)}`}>{section.heading}</a>)}
      </nav></aside>
      <article className="article-body">
        <p className="article-intro">{article.intro}</p>
        {article.sections.map((section) => <section id={sectionId(section.heading)} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.subsections?.map((subsection) => <div key={subsection.heading}>
            <h3>{subsection.heading}</h3>
            {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {subsection.bullets && <ul>{subsection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </div>)}
          {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          {section.table && <div className="article-table-wrap"><table><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={`${row[0]}-${index}`}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.checklist && <div className="article-checklist"><h3>Checklist</h3><ul>{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div>}
          {section.callout && <aside className="article-callout">{section.callout}</aside>}
        </section>)}
        <aside className="article-callout"><strong>Planning a digital project?</strong> SJ Spectra works on websites, Android apps, SEO, digital marketing and creative content. <Link href="/#services">Explore our services</Link>, <Link href="/portfolio">view selected work</Link>, or <Link href="/#contact">tell us what you are planning</Link>.</aside>
      </article>
    </div>
    <section className="related-section"><div className="container"><h2>Related articles</h2><div className="related-grid">
      {related.map((item) => <article className="related-card" key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><Link href={`/resources/${item.slug}`}>Read Article ↗</Link></article>)}
    </div></div></section>
    <section className="article-contact"><div className="container"><h2>Have a digital project in mind?</h2><p>Tell us about your business and the experience you want to create.</p><Link href="/#contact" className="btn btn-primary">Let&apos;s Talk <span>↗</span></Link></div></section>
  </main>;
}
