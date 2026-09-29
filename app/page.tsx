import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
// import Work from "@/components/Work";
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
                  Let&apos;s Work Together
                  <span>↗</span>
                </a>

                <a
                  href="#services"
                  className="btn btn-secondary hero-secondary-btn"
                >
                  Explore Services
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
              {/* Layered Orbit System & Visual Connectors SVG Canvas */}
              <svg
                className="hero-orbit-canvas"
                viewBox="0 0 560 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1747E8" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#7A3FF2" stopOpacity="0.12" />
                  </linearGradient>
                  <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7A3FF2" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#1747E8" stopOpacity="0.08" />
                  </linearGradient>
                  <linearGradient id="orbitGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1747E8" stopOpacity="0.18" />
                    <stop offset="50%" stopColor="#7A3FF2" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#FF7A18" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="rayWeb" x1="280" y1="190" x2="280" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1747E8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1747E8" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="rayGrowth" x1="216" y1="344" x2="105" y2="425" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7A3FF2" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7A3FF2" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="rayCreative" x1="344" y1="344" x2="455" y2="425" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF7A18" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#1747E8" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Connection Rays from Core to Nodes */}
                <line x1="280" y1="190" x2="280" y2="75" stroke="url(#rayWeb)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 216 344 Q 160 385, 105 425" stroke="url(#rayGrowth)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 344 344 Q 400 385, 455 425" stroke="url(#rayCreative)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Orbit Ring 1 (Inner core boundary) */}
                <circle cx="280" cy="280" r="95" stroke="url(#orbitGrad1)" strokeWidth="1" />

                {/* Orbit Ring 2 (Rotating mid-inner ring with dashed rhythm) */}
                <g className="hero-orbit-rotating-cw">
                  <circle cx="280" cy="280" r="145" stroke="url(#orbitGrad2)" strokeWidth="1.2" strokeDasharray="5 7" />
                  <circle cx="280" cy="135" r="3.5" fill="#1747E8" />
                  <circle cx="383" cy="383" r="3" fill="#7A3FF2" />
                </g>

                {/* Orbit Ring 3 (Outer orbit with brand nodes) */}
                <g className="hero-orbit-rotating-ccw">
                  <circle cx="280" cy="280" r="200" stroke="url(#orbitGrad3)" strokeWidth="1.2" strokeDasharray="8 6" />
                  <circle cx="107" cy="180" r="3.5" fill="#1747E8" />
                  <circle cx="453" cy="180" r="3.5" fill="#7A3FF2" />
                  <circle cx="180" cy="453" r="4" fill="#FF7A18" />
                </g>

                {/* Orbit Ring 4 (Faint ambient atmospheric boundary) */}
                <circle cx="280" cy="280" r="248" stroke="rgba(122, 63, 242, 0.08)" strokeWidth="1" strokeDasharray="3 14" />
              </svg>

              {/* Central SJ Spectra Core */}
              <div className="hero-center">
                <div className="hero-center-glow" aria-hidden="true" />
                <div className="hero-center-inner">
                  <span className="hero-core-mark">SJ</span>
                  <div className="hero-core-accent" aria-hidden="true" />
                  <small className="hero-core-label">SPECTRA</small>
                </div>
              </div>

              {/* Service Node 01: WEB */}
              <div className="hero-node node-web">
                <div className="hero-node-header">
                  <span className="hero-node-num">01</span>
                  <span className="hero-node-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="3" />
                      <path d="M2 9h20" />
                      <circle cx="6" cy="6.5" r="0.8" fill="currentColor" />
                      <circle cx="9" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <strong className="hero-node-title">WEB</strong>
                <span className="hero-node-desc">Website Development</span>
              </div>

              {/* Service Node 02: GROWTH */}
              <div className="hero-node node-growth">
                <div className="hero-node-header">
                  <span className="hero-node-num">02</span>
                  <span className="hero-node-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                      <path d="M15 9h4v4" />
                    </svg>
                  </span>
                </div>
                <strong className="hero-node-title">GROWTH</strong>
                <span className="hero-node-desc">Digital Marketing</span>
              </div>

              {/* Service Node 03: CREATIVE */}
              <div className="hero-node node-creative">
                <div className="hero-node-header">
                  <span className="hero-node-num">03</span>
                  <span className="hero-node-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                    </svg>
                  </span>
                </div>
                <strong className="hero-node-title">CREATIVE</strong>
                <span className="hero-node-desc">Creative Content</span>
              </div>
            </div>
          </div>

          <a href="#services" className="hero-scroll">
            <span>Scroll to explore</span>
            <span className="hero-scroll-arrow">↓</span>
          </a>
        </section>

        <Services/>

        {/* <Work /> */}

        <About />


        <Contact />
        <Footer />
      </main>
    </>
  );
}