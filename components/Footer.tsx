import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
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
                alt="SJ Spectra logo"
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
              href="https://www.instagram.com/sjspectra.agency?stkn=YTN0bTBzOXpqNnhw"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="SJ Spectra on Instagram"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/share/18zEuTJWVs/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="SJ Spectra on Facebook"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </a>

            {/* Business WhatsApp link placeholder - replace YOUR_PHONE_NUMBER when ready */}
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Chat with SJ Spectra on WhatsApp"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
