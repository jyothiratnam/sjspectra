import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PortfolioPreview from "@/components/PortfolioPreview";

const heroHeadingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot" />Digital solutions for modern businesses</div>
            <h1 className={heroHeadingFont.className}>Your Ideas.<span>Our Digital Expertise.</span></h1>
            <p className="hero-description">From powerful websites and Android applications to SEO, digital marketing and creative content, we help businesses turn ideas into digital experiences.</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Let&apos;s Build Your Idea <span>↗</span></a>
              <a href="#services" className="btn btn-secondary">Explore Our Services <span>↓</span></a>
            </div>
            <div className="hero-services" aria-label="Our services">
              <span>Websites</span><span>Android Apps</span><span>Digital Marketing</span><span>SEO</span><span>Creative Content</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <Image
                src="/images/heroImage.png"
                alt="A digital workspace showing a business website on a laptop, an Android app on a smartphone, and marketing analytics on a second screen"
                width={1672}
                height={941}
                sizes="(max-width: 760px) calc(100vw - 36px), 46vw"
                className="hero-photo-image"
                priority
              />
              <div className="hero-photo-note">
                <span className="hero-photo-note-icon" aria-hidden="true">✦</span>
                <span><strong>Ideas, made digital</strong><small>Design · Development · Growth</small></span>
              </div>
            </div>
          </div>
        </div>
        <a href="#services" className="hero-scroll">Scroll to explore <span className="hero-scroll-arrow">↓</span></a>
      </section>
      <Services />
      <Work />
      <PortfolioPreview />
      <About />
      <Contact />
    </main>
  );
}
