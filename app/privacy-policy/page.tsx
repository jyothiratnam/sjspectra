import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SJ Spectra",
  description: "Read how SJ Spectra handles information submitted through its website and explains cookies and advertising technologies.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="editorial-page"><article className="legal-wrap">
      <p className="editorial-eyebrow">LEGAL</p><h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: October 14, 2026</p>
      <p>SJ Spectra respects your privacy. This page describes how information may be handled when you visit this website or contact us. Please read it and update it if your actual tools or practices change.</p>
      <h2>Information you provide</h2><p>If you contact SJ Spectra using the contact form, email, or WhatsApp link, you may provide details such as your name, phone number, email address, service interests, and project description. The website contact form opens WhatsApp with the information you entered; it does not currently submit that form to an SJ Spectra database. Information you send through WhatsApp or email is handled by those services and may also be retained in the relevant account.</p>
      <h2>How information is used</h2><p>Information you choose to send may be used to respond to enquiries, discuss requested services, and communicate about a potential project. Do not submit passwords, payment-card details, or other sensitive information through general enquiry forms.</p>
      <h2>Cookies, analytics, and advertising</h2><p>This website may use essential technologies needed to deliver its pages. If analytics, advertising, or other third-party services are added, they may use cookies, device identifiers, or similar technologies subject to their own policies and applicable requirements. If Google AdSense is enabled, Google and its partners may use cookies or similar technologies to serve, measure, and personalise ads as permitted by the settings and applicable law. This statement must be kept accurate for the services actually enabled on the live website.</p>
      <h2>Third-party services</h2><p>Links to services such as WhatsApp, Instagram, Facebook, or other external websites take you to third-party services that operate under their own privacy policies. SJ Spectra does not control the privacy practices of those external services.</p>
      <h2>Data retention and security</h2><p>Messages sent to SJ Spectra may be retained for as long as reasonably needed to respond to enquiries and manage business communications, subject to applicable requirements. No internet transmission or storage system can be guaranteed to be completely secure.</p>
      <h2>Your choices and contact</h2><p>You may choose not to provide information, although we may then be unable to respond to an enquiry. For privacy-related questions or requests, contact <a href="mailto:sjspectra.agency@gmail.com">sjspectra.agency@gmail.com</a>.</p>
      <p className="editorial-note">Owner action: before publishing, verify that this policy accurately describes your actual website configuration, any analytics or ad tools, and your data-handling practices.</p>
    </article></main>
  );
}
