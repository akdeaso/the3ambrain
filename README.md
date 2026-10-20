# The 3AM Brain Studio

Personal production and automation website for the YouTube channel [The 3AM Brain](https://www.youtube.com/@the3ambrain).

This repository contains the official landing page, Privacy Policy, and Terms of Service required for Google OAuth verification and YouTube API audit compliance.

## Pages

- **Home**: `index.html` — Overview of The 3AM Brain Studio tool and scope.
- **Privacy Policy**: `privacy.html` — Disclosures regarding YouTube API Services, data access, storage, retention, and Limited Use policy compliance.
- **Terms of Service**: `terms.html` — Terms of use, disclaimers, and governing law.

## Technology Stack

- **React 19 & Vite 8**: Multi-page SSG setup.
- **Static Prerendering**: Pre-rendered via `scripts/prerender.mjs` during `npm run build` so that all content is directly present in raw HTML for web crawlers and Google API reviewers without requiring client-side JavaScript execution.
- **Deployment**: Automated deployment to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production (client bundle, SSR bundle, and static prerendering)
npm run build

# Preview production build locally
npm run preview
```

## Configuration

Site variables (owner name, contact email, country, effective date, YouTube channel URL) are centralized in `src/site.config.js`.
