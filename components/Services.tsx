const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Modern, responsive websites designed to build credibility, showcase your brand and turn visitors into customers.",
      icon: "↗",
    },
    {
      number: "02",
      title: "Android App Development",
      description:
        "User-friendly Android applications built around your business needs and customer experience.",
      icon: "◈",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Targeted digital strategies that help businesses improve visibility, reach the right audience and generate leads.",
      icon: "◎",
    },
    {
      number: "04",
      title: "SEO",
      description:
        "Search engine optimization focused on improving your website visibility and helping potential customers discover your business.",
      icon: "⌕",
    },
    {
      number: "05",
      title: "Social Media Marketing",
      description:
        "Creative social media content and campaigns designed to build your brand presence across platforms.",
      icon: "◌",
    },
    {
      number: "06",
      title: "Creative & Video Content",
      description:
        "Promotional videos, social media creatives and visual content that communicate your business clearly.",
      icon: "▶",
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
  
          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
  
                  <span className="service-icon">{service.icon}</span>
                </div>
  
                <div className="service-card-content">
                  <h3>{service.title}</h3>
  
                  <p>{service.description}</p>
                </div>
  
                <div className="service-card-arrow">↗</div>
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