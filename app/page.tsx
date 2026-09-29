import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-background">
            <div className="hero-glow hero-glow-one"></div>
            <div className="hero-glow hero-glow-two"></div>
          </div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Digital Solutions for Modern Businesses
              </div>

              <h1>
                We Build Digital
                <span> Experiences </span>
                That Help Businesses Grow.
              </h1>

              <p className="hero-description">
                From websites and applications to digital marketing, SEO and
                creative content, we help businesses build a stronger digital
                presence.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary hero-primary-btn">
                  Let's Work Together
                  <span>↗</span>
                </a>

                <a
                  href="#work"
                  className="btn btn-secondary hero-secondary-btn"
                >
                  View Our Work
                </a>
              </div>

              <div className="hero-services">
                <span>Web Development</span>
                <span>Apps</span>
                <span>Digital Marketing</span>
                <span>SEO</span>
                <span>Creative Content</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orbit hero-orbit-one"></div>
              <div className="hero-orbit hero-orbit-two"></div>

              <div className="hero-center">
                <div className="hero-center-inner">
                  <span>SJ</span>
                  <small>SPECTRA</small>
                </div>
              </div>

              <div className="hero-floating-card card-one">
                <span>01</span>
                <strong>Web</strong>
              </div>

              <div className="hero-floating-card card-two">
                <span>02</span>
                <strong>Marketing</strong>
              </div>

              <div className="hero-floating-card card-three">
                <span>03</span>
                <strong>Creative</strong>
              </div>
            </div>
          </div>

          <a href="#services" className="hero-scroll">
            <span>Scroll to explore</span>
            <span className="hero-scroll-arrow">↓</span>
          </a>
        </section>

        <Services/>

        <Work />

        <About />


        <Contact />
        <Footer />
      </main>
    </>
  );
}