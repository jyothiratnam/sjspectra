"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `*Hello – SJ Spectra*

👤 *Name:* ${formData.name}
📱 *Phone / WhatsApp:* ${formData.phone}
📧 *Email:* ${formData.email}
🎯 *Service Needed:* ${formData.service}

📝 *Project Details:*
${formData.message}
`;

    const whatsappUrl = `https://wa.me/9553269393?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    // Show success message
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Let&apos;s Connect</span>

          <h2 className="contact-title">
            Have an idea?
            <span> Let&apos;s build it.</span>
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

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">What do you need?</label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Website Development">
                  Website Development
                </option>

                <option value="Android App Development">
                  Android App Development
                </option>

                <option value="Digital Marketing">
                  Digital Marketing
                </option>

                <option value="SEO">SEO</option>

                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>

                <option value="Creative & Video Content">
                  Creative & Video Content
                </option>

                <option value="Google Ads">Google Ads</option>

                <option value="Meta Ads">Meta Ads</option>

                <option value="Multiple Services">
                  Multiple Services
                </option>

                <option value="Other / Not Sure">
                  Other / Not Sure
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                autoComplete="off"
                placeholder="Tell us about your business, project or requirements..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
            >
              Send Enquiry
              <span>↗</span>
            </button>

            {submitted && (
              <p className="contact-success">
                ✓ Your enquiry has been prepared for WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}