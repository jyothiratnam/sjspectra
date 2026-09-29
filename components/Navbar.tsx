"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="#home" className="navbar-logo" onClick={closeMenu}>
  <Image
    src="/images/websiteheader.png"
    alt="SJ Spectra"
    width={200}
    height={50}
    priority
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="#contact" className="navbar-cta">
          Let's Talk
          <span>↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
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
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}