"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `Hello SJ Spectra,

Name: ${name}
Email: ${email}
Service: ${service}

Project details:
${message}`;

    const whatsappUrl = `https://wa.me/9553269393?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Let's Connect</span>

          <h2 className="contact-title">
            Have an idea?
            <span> Let's build it.</span>
          </h2>

          <p className="contact-description">
            Tell us about your business, project or digital goal. We’ll discuss
            the right solution for you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-label">Email</span>
              <a href="mailto:sjspectra.agency@gmail.com">
                sjspectra.agency@gmail.com
              </a>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-label">WhatsApp</span>
              <a
                href="https://wa.me/9553269393"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us ↗
              </a>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-label">Services</span>
              <p>
                Websites · Apps · SEO · Digital Marketing · Social Media ·
                Creative Content
              </p>
            </div>

            <div className="contact-note">
              <span>✦</span>
              <p>
                Let’s create something useful, professional and built around
                your business goals.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">What do you need?</label>

              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="Android App Development">
                  Android App Development
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Creative & Video Content">
                  Creative & Video Content
                </option>
                <option value="Multiple Services">
                  Multiple Services
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your business, project or requirements..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send Enquiry
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}