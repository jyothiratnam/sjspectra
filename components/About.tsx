import Image from "next/image";

const highlights = [
    {
      number: "01",
      title: "Business-focused solutions",
      description:
        "We start by understanding your business, audience and goals before choosing the right digital solution.",
    },
    {
      number: "02",
      title: "Thoughtful design and development",
      description:
        "We combine development, marketing and creative content to create a consistent digital presence.",
    },
    {
      number: "03",
      title: "Clear communication",
      description:
        "We keep decisions, progress and next steps clear throughout the project.",
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
                Technology Meets Creativity
              </h2>
            </div>
  
            <div className="about-intro">
              <p>
                SJ Spectra helps businesses establish and strengthen their digital presence through website development, Android applications, digital marketing, SEO and creative content.
              </p>
  
              <p>
                We focus on understanding each business&apos;s requirements and creating practical digital solutions aligned with its goals.
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
          <div className="about-photo">
            <Image
              src="/images/services/photography/agency-collaboration.jpg"
              alt="Two colleagues sharing ideas and planning a project together"
              width={1400}
              height={933}
              sizes="(max-width: 760px) 100vw, 320px"
              className="about-photo-image"
            />
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

