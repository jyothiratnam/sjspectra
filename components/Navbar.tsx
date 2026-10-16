"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isResourcesRoute = pathname === "/resources" || pathname.startsWith("/resources/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [overLightSurface, setOverLightSurface] = useState(
    !isHome && pathname !== "/resources" && !pathname.startsWith("/resources/") && pathname !== "/portfolio",
  );
  const homeHref = (anchor: string) => pathname === "/" ? anchor : `/${anchor}`;

  useEffect(() => {
    const updateSurface = () => {
      // Match the fixed-navbar scroll offset so anchored sections are detected.
      const probeY = 92;
      let lightSurface = !isHome && pathname !== "/resources" && !pathname.startsWith("/resources/");

      if (isHome) {
        const section = ["home", "services", "work", "about", "contact"]
          .map((id) => document.getElementById(id))
          .find((element) => {
            if (!element) return false;
            const bounds = element.getBoundingClientRect();
            return bounds.top <= probeY && bounds.bottom > probeY;
          });
        const darkServiceRow = section?.id === "services" && Array.from(document.querySelectorAll(".service-row"))
          .some((row, index) => index === 3 && row.getBoundingClientRect().top <= probeY && row.getBoundingClientRect().bottom > probeY);
        lightSurface = Boolean(section && ["services", "about", "contact"].includes(section.id) && !darkServiceRow);
      } else if (pathname === "/resources" || pathname.startsWith("/resources/")) {
        const hero = document.querySelector(pathname === "/resources" ? ".resources-hero" : ".article-hero");
        lightSurface = !hero || hero.getBoundingClientRect().bottom <= probeY;
      } else if (pathname === "/portfolio") {
        const hero = document.querySelector(".portfolio-hero");
        lightSurface = !hero || hero.getBoundingClientRect().bottom <= probeY;
      }

      setOverLightSurface(lightSurface);
    };

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    window.addEventListener("resize", updateSurface);

    return () => {
      window.removeEventListener("scroll", updateSurface);
      window.removeEventListener("resize", updateSurface);
    };
  }, [isHome, pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (!isHome) return;

    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    window.history.pushState(null, "", "/#contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar${isHome ? " navbar-home" : ""}${overLightSurface ? " navbar-light-overlay" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/#home" className="navbar-logo" onClick={closeMenu}>
  <Image
    src="/images/SJ-Spectra-Monochrome-White.png"
    alt="SJ Spectra logo"
    width={1536}
    height={1024}
    priority
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.label === "Resources" || item.label === "Portfolio" ? item.href : homeHref(item.href.replace("/#", "#"))}
              aria-current={(isResourcesRoute && item.label === "Resources") || (pathname === "/portfolio" && item.label === "Portfolio") ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/#contact" className="navbar-cta" onClick={goToContact}>
          Let&apos;s Talk
          <span>↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.label === "Resources" || item.label === "Portfolio" ? item.href : homeHref(item.href.replace("/#", "#"))}
              onClick={closeMenu}
              aria-current={(isResourcesRoute && item.label === "Resources") || (pathname === "/portfolio" && item.label === "Portfolio") ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="mobile-cta"
            onClick={goToContact}
          >
            Let&apos;s Talk <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
