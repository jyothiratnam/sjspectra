import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites designed to build credibility, showcase your brand and turn visitors into customers.",
    image: "/images/services/website-development.svg",
    alt: "Website development service illustration",
    tag: "Web & Platforms",
  },
  {
    number: "02",
    title: "Android App Development",
    description:
      "User-friendly Android applications built around your business needs and customer experience.",
    image: "/images/services/android-app-development.svg",
    alt: "Android app development service illustration",
    tag: "Mobile Apps",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Targeted digital strategies that help businesses improve visibility, reach the right audience and generate leads.",
    image: "/images/services/digital-marketing.svg",
    alt: "Digital marketing service illustration",
    tag: "Growth & ROI",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Search engine optimization focused on improving your website visibility and helping potential customers discover your business.",
    image: "/images/services/seo.svg",
    alt: "SEO service illustration",
    tag: "Search Visibility",
  },
  {
    number: "05",
    title: "Social Media Marketing",
    description:
      "Creative social media content and campaigns designed to build your brand presence across platforms.",
    image: "/images/services/social-media-marketing.svg",
    alt: "Social media marketing service illustration",
    tag: "Social & Reach",
  },
  {
    number: "06",
    title: "Creative & Video Content",
    description:
      "Promotional videos, social media creatives and visual content that communicate your business clearly.",
    image: "/images/services/creative-video-content.svg",
    alt: "Creative and video content service illustration",
    tag: "Media & Studio",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div>
            <span className="section-label">What We Do</span>

            <h2 className="section-title">
              Digital services built to move your business forward.
            </h2>
          </div>

          <p className="section-description">
            From building your digital foundation to reaching the right
            audience, SJ Spectra brings technology, marketing and creativity
            together.
          </p>
        </div>

        {/* Services Rich Visual Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              {/* Card Image Area */}
              <div className="service-card-media">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="service-card-img"
                  priority={service.number === "01" || service.number === "02"}
                />
                
                {/* Visual Gradient Overlay */}
                <div className="service-card-overlay" aria-hidden="true" />

                {/* Overlaid Badges: Service Number & Tag */}
                <div className="service-card-badges">
                  <span className="service-number-badge">
                    {service.number}
                  </span>
                  <span className="service-tag-badge">
                    {service.tag}
                  </span>
                </div>

                {/* Floating Interactive Action Arrow */}
                <div className="service-card-action" aria-hidden="true">
                  <span className="service-action-icon">↗</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="service-card-content">
                <h3 className="service-card-title">
                  {service.title}
                </h3>

                <p className="service-card-description">
                  {service.description}
                </p>

                <div className="service-card-footer">
                  <a href="#contact" className="service-card-link">
                    <span>Learn more</span>
                    <span className="service-link-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <p>Have a project in mind?</p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
