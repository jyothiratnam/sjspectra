const projects = [
    {
      number: "01",
      category: "Website Development",
      title: "Business Website",
      description:
        "A modern digital presence designed to help a local business showcase its services and connect with potential customers.",
      tags: ["Website", "Responsive", "SEO"],
    },
    {
      number: "02",
      category: "Digital Marketing",
      title: "Social Media Campaign",
      description:
        "Creative social media content designed to improve brand visibility and communicate services clearly to the target audience.",
      tags: ["Social Media", "Creative", "Marketing"],
    },
    {
      number: "03",
      category: "Web & Digital",
      title: "Business Growth Platform",
      description:
        "A digital solution combining a professional website, online presence and customer-focused communication.",
      tags: ["Web", "Branding", "Growth"],
    },
  ];
  
  export default function Work() {
    return (
      <section id="work" className="work-section section">
        <div className="container">
          {/* Header */}
          <div className="work-header">
            <div>
              <span className="section-label">Selected Work</span>
  
              <h2 className="section-title">
                Ideas turned into digital experiences.
              </h2>
            </div>
  
            <p className="section-description">
              A selection of websites, campaigns and digital experiences created
              by SJ Spectra.
            </p>
          </div>
  
          {/* Projects */}
          <div className="work-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <div className="project-image-content">
                    <span>{project.number}</span>
  
                    <div className="project-image-title">
                      SJ
                      <strong>SPECTRA</strong>
                    </div>
                  </div>
  
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>
  
                <div className="project-content">
                  <div>
                    <h3>{project.title}</h3>
  
                    <p>{project.description}</p>
                  </div>
  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
  
          {/* Bottom */}
          <div className="work-bottom">
            <p>Want to see what we can create for your business?</p>
  
            <a href="#contact" className="btn btn-primary">
              Start a Project
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    );
  }