import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Development",
  "Android App Development",
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Creative & Video Content",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              <Image
                src="/images/SJ-Spectra-Horizontal-Light.png"
                alt="SJ Spectra"
                width={300}
                height={40}
              />
            </Link>

            <p>
              Digital solutions that help businesses build their presence,
              reach their audience and grow online.
            </p>

            <a href="#contact" className="footer-cta">
              Start a Project <span>↗</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <nav>
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-services">
            <h3>Services</h3>

            <div>
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SJ Spectra. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>

            <a
              href="https://wa.me/9553269393"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}