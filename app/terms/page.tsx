import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SJ Spectra",
  description: "Terms for using the SJ Spectra website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <main className="editorial-page"><article className="legal-wrap">
    <p className="editorial-eyebrow">LEGAL</p><h1>Terms &amp; Conditions</h1>
    <p className="legal-updated">Last updated: October 14, 2026</p>
    <p>By accessing the SJ Spectra website, you agree to use it lawfully and not to interfere with its operation or security.</p>
    <h2>Website information</h2><p>Content on this website is provided for general information about digital services and related educational topics. We make reasonable efforts to keep information current, but do not guarantee that every page is complete, accurate, or suitable for every situation.</p>
    <h2>Enquiries and project work</h2><p>Sending an enquiry does not create a client relationship or guarantee that SJ Spectra will accept a project. Project scope, fees, deliverables, timelines, payment terms, and support arrangements should be agreed in writing before work begins.</p>
    <h2>Intellectual property</h2><p>Unless stated otherwise, website text, design elements, and brand assets are intended for SJ Spectra&apos;s use and may not be copied or reused commercially without permission. Third-party names and marks belong to their respective owners.</p>
    <h2>External links</h2><p>This website may link to third-party services. SJ Spectra is not responsible for the content, availability, or policies of external websites.</p>
    <h2>Changes and contact</h2><p>These terms may be updated as the website or services change. Questions can be sent to <a href="mailto:sjspectra.agency@gmail.com">sjspectra.agency@gmail.com</a>.</p>
    <p className="editorial-note">This is a general website terms template, not legal advice. Review it for your business and applicable laws before relying on it.</p>
  </article></main>;
}
