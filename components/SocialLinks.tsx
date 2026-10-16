"use client";

import { useEffect, useRef, useState } from "react";

const phoneNumber = "+91 9553269393";

const socialLinks = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/9553269393",
    className: "social-dock-whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M9.3 8.2c.3-.5.6-.5.9-.5h.4c.1 0 .3 0 .4.3l.8 1.9c.1.2.1.4 0 .5l-.6.8c-.2.2-.2.4 0 .6.3.5.8 1 1.3 1.4.6.5 1.2.8 1.7 1 .2.1.4 0 .5-.1l.8-.9c.2-.2.3-.2.6-.1l1.8.9c.2.1.3.2.3.4 0 .2-.1.9-.6 1.3-.5.5-1.2.7-1.8.7-.5 0-1.2-.2-2.1-.6-1-.4-2.1-1.2-3.2-2.3-1-1-1.6-2-1.9-2.8-.3-.7-.3-1.4-.1-1.9.2-.4.5-.7.8-.9z" />
      </svg>
    ),
  },
  {
    label: "Chat on Facebook",
    href: "https://www.facebook.com/share/18zEuTJWVs/",
    className: "social-dock-facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Chat on Instagram",
    href: "https://www.instagram.com/sjspectra.agency?stkn=YTN0bTBzOXpqNnhw",
    className: "social-dock-instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" className="social-dock-dot" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!dockRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="social-dock" ref={dockRef}>
      {isOpen && (
        <div className="social-dock-menu" id="social-dock-menu" aria-label="SJ Spectra contact options">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-dock-link ${link.className}`}
            >
              <span className="social-dock-option-icon">{link.icon}</span>
              <span>{link.label}</span>
              <span className="social-dock-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <div className="social-dock-phone-row">
            <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="social-dock-link social-dock-phone">
              <span className="social-dock-option-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M7 3h3l2 5-2 1.5a14 14 0 0 0 4.5 4.5L16 12l5 2v3a3 3 0 0 1-3 3A16 16 0 0 1 4 6a3 3 0 0 1 3-3z" /></svg>
              </span>
              <span>Call SJ Spectra</span>
            </a>
            <button type="button" className="social-dock-copy" onClick={copyPhoneNumber}>
              {copied ? "Copied" : "Copy number"}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="social-dock-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="social-dock-menu"
        aria-label={isOpen ? "Close contact options" : "Open SJ Spectra contact options"}
      >
        <span className="social-dock-art" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3.4A7.5 7.5 0 1 1 20 11.5Z" />
            <path d="M8.5 11.5h7M8.5 14.5h4.5" />
          </svg>
        </span>
      </button>
    </div>
  );
}
