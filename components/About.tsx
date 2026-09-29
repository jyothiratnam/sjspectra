const highlights = [
    {
      number: "01",
      title: "Business First",
      description:
        "We start by understanding your business, audience and goals before choosing the right digital solution.",
    },
    {
      number: "02",
      title: "Technology + Creativity",
      description:
        "We combine development, marketing and creative content to create a consistent digital presence.",
    },
    {
      number: "03",
      title: "Built to Grow",
      description:
        "Our solutions are designed to help businesses improve visibility, reach customers and grow online.",
    },
  ];
  
  export default function About() {
    return (
      <section id="about" className="about-section section">
        <div className="container">
          <div className="about-header">
            <div>
              <span className="section-label">About SJ Spectra</span>
  
              <h2 className="section-title">
                We turn business ideas into meaningful digital experiences.
              </h2>
            </div>
  
            <div className="about-intro">
              <p>
                SJ Spectra is a digital solutions agency helping businesses build
                a stronger presence online through technology, marketing and
                creative content.
              </p>
  
              <p>
                Whether you need a website, application, SEO, social media
                marketing or creative content, we focus on creating practical
                digital solutions around your business goals.
              </p>
            </div>
          </div>
  
          <div className="about-highlights">
            {highlights.map((item) => (
              <article className="about-card" key={item.number}>
                <span className="about-number">{item.number}</span>
  
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
  
          <div className="about-bottom">
            <div className="about-brand-mark">
              <span>SJ</span>
              <small>SPECTRA</small>
            </div>
  
            <div className="about-bottom-text">
              <p>
                Your business has a story. We help you build the digital presence
                that tells it.
              </p>
  
              <a href="#contact" className="btn btn-primary">
                Let&apos;s Build Together
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }