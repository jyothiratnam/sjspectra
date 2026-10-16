// Keep canonical, sitemap, and robots URLs on the same production origin.
// NEXT_PUBLIC_SITE_URL can point to a custom domain in the Vercel environment.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://sjspectra.vercel.app",
).origin;

export const socialShareImage = {
  url: "/images/websiteheader.png",
  width: 2043,
  height: 770,
  alt: "SJ Spectra logo",
};
