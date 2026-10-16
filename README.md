# SJ Spectra Website

A Next.js website for SJ Spectra, built with the App Router.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production configuration

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables to the canonical production URL. The current fallback is `https://sjspectra.vercel.app`; change it if the live domain differs. Redeploy after changing the value.

## AdSense readiness notes

This project includes a Resources index with three educational guides, a Privacy Policy page, a Terms page, and sitemap entries for these routes. These improvements do not guarantee AdSense approval. Before applying:

1. Review all pages on the deployed website and test links and the WhatsApp enquiry form.
2. Verify that the Privacy Policy matches the actual data, cookies, analytics, and advertising tools used.
3. Continue improving the resource articles with first-hand experience and examples that are accurate for your audience.
4. Apply through Google AdSense and add only the verification/ad code supplied by your approved account. No fake publisher ID or ad code is included in this repository.
5. If you later add AdSense, consider Google's consent and privacy requirements applicable to your visitors and region.

## Deployment

Push the changes to the connected GitHub repository or import the project into Vercel. Configure `NEXT_PUBLIC_SITE_URL` to the canonical URL and redeploy. Then verify `/resources`, each resource article, `/privacy-policy`, `/terms`, `/sitemap.xml`, and `/robots.txt` on the live site.
