import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: "SK Solar", type: "Website & creative", image: "/images/demowebsites/sk-solar-webpage.png", alt: "SK Solar website preview" },
  { name: "LuxeGlow Salon", type: "Website concept", image: "/images/demowebsites/luxeglow-webpage.png", alt: "LuxeGlow Salon website preview" },
  { name: "Brew & Bloom Café", type: "Website showcase", image: "/images/demowebsites/brew-and-bloom-page.png", alt: "Brew & Bloom Café website preview" },
  { name: "CorpReserve", type: "Web application", image: "/images/demowebsites/meeting-room/dashboard.png", alt: "CorpReserve meeting room application dashboard" },
];

export default function PortfolioPreview() {
  return (
    <section className="portfolio-preview section" id="portfolio-preview" aria-labelledby="portfolio-preview-title">
      <div className="container">
        <div className="portfolio-preview-heading">
          <div><span className="section-label">Selected work</span><h2 className="section-title" id="portfolio-preview-title">Selected Work. Real Possibilities.</h2></div>
          <p className="section-description">Websites, applications and creative work shaped around useful digital experiences.</p>
        </div>
        <div className="portfolio-preview-grid">
          {projects.map((project) => (
            <Link href="/portfolio" className="portfolio-preview-card" key={project.name}>
              <span className="portfolio-preview-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 270px" /></span>
              <span className="portfolio-preview-meta"><span><strong>{project.name}</strong><small>{project.type}</small></span><span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
        <div className="portfolio-preview-action"><Link href="/portfolio" className="btn btn-primary">Explore Our Portfolio <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
