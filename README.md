# RS Andrews Heating & Air — Astro replacement

This static Astro project reproduces the WordPress site's URL structure: homepage, 33 Atlanta area AC repair pages, five service pages, and a human-readable `/sitemap/`. It is configured for GitHub to Netlify deployment.

## Edit content on a Chromebook

The recommended editor is [Pages CMS](https://app.pagescms.org/). Sign in with GitHub, install its GitHub App with access to this repository, and open `BobinFoley/rsandrews-astro`. The root `.pages.yml` configures:

- **Site photographs:** upload or select the shared banner, homepage photo, logo, and social sharing image. Add an accessible description for the homepage photo.
- **City pages** and **Service pages:** edit title, search description, body text, and optionally add a page photo and description. The page filenames are locked so their URLs stay stable.
- **Media library:** images are stored in `public/images/` and committed to GitHub. Netlify automatically rebuilds after each save to `main`.

The CMS is a Git-backed editor, not an image cropper. Crop or retouch in Google Photos or Canva before uploading. A change to the banner or logo affects every page. A page photo appears above that page's text, while its social sharing image uses that page photo if one is chosen.

You can still edit the Markdown files directly in GitHub: `src/content/locations/` and `src/content/services/`. Keep filenames unchanged to preserve URLs.

The homepage copy is in `src/pages/index.astro`; shared phone, address, hours, and license details are in `src/data/site.ts`; navigation and footer are in `src/layouts/SiteLayout.astro`. The CMS-editable image selections are in `src/data/media.json`. FAQ answers are in `src/components/FAQ.astro`. Images are in `public/images/`. Changes to shared files update multiple pages.

## Run locally or in a cloud development environment

```bash
npm ci
npm run dev
npm run build
npm run check:urls
```

## Deploy on Netlify

Push this project to a GitHub repository and connect the repository in Netlify. The included `netlify.toml` sets build command `npm run build` and publish directory `dist`. Set the production domain to `rsandrews.247hvac.repair` only after reviewing the preview. Astro's `site` configuration and `public/robots.txt` currently use that final domain.

## Before switching the domain

- Confirm authorization to use the RS Andrews brand, copy, images, reviews, and phone number.
- Confirm `404-806-9284`, the address, office and service hours, 24-hour availability, licenses, financing terms, and the “since 1968” statement with the business. They were taken from the old site and may be stale.
- Verify the Zite review iframe and any required Elfsight widget. The original embeds are third-party services; check the current account and client ID before publishing.
- Compare the Netlify preview on desktop and mobile with the WordPress site and review all copy. City pages have concise editable content but still need independently verified local detail if local SEO is a goal.
- Test phone links and every link in the sitemap. The old WordPress site has `/test/` and `/category/uncategorized/`; decide whether to redirect or retire them based on actual traffic/backlinks.
- Update DNS only when preview QA is complete, then verify HTTPS, the sitemap, indexing, analytics and any ad landing-page tracking after the switch.
