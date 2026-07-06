# Portfolio Site

A modern, responsive personal portfolio website built with **Angular 19**.

## Features

- Dark theme with indigo/purple gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation with sticky header
- Sections: Hero, About, Skills, Projects, Experience, Contact
- Standalone components with separate `.html` / `.scss` / `.ts` files
- Contact form with success state
- Performance optimized: minified JS, lazy-loaded sections, bundled JSON data
- Easy to customize via `src/assets/data/portfolio.json`

## Getting Started

Since dependencies are not installed on this machine, run these on your other laptop:

```bash
cd portfolio-site
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

## Build for Production (minified JS)

```bash
npm run build
```

Output goes to `dist/portfolio-site/browser/`. Production build enables:

- **JS minification** (esbuild terser)
- **CSS minification** + critical CSS inlining
- **Code splitting** — below-fold sections load on scroll via `@defer`
- **Tree shaking** — unused packages removed (e.g. animations)

Serve the production build locally to test Lighthouse scores:

```bash
npm run build
npx serve dist/portfolio-site/browser
```

> **Important:** Run Lighthouse against the **production build**, not `ng serve` (dev mode). Dev mode skips minification and ships unoptimized bundles, which inflates FCP/LCP scores.

## Performance Optimizations

| Issue | Fix applied |
|-------|-------------|
| High LCP | Hero renders immediately — JSON bundled at build time (no HTTP fetch) |
| High FCP | Critical inline CSS in `index.html`; system fonts (no Google Fonts blocking) |
| Large JS bundle | `@defer (on viewport)` lazy-loads About, Skills, Projects, etc. |
| Unminified JS | `npm run build` uses production config with script minification |
| Extra weight | Removed `@angular/animations` (unused) |

## Customization

Edit **`src/assets/data/portfolio.json`** to update all site content:

- Profile (name, title, tagline, email, location, about, initials)
- Stats, navigation links, skills, tech tags
- Projects, experience timeline, social links

After editing JSON, rebuild for production: `npm run build`

## Project Structure

```
portfolio-site/
├── src/
│   ├── assets/
│   │   └── data/
│   │       └── portfolio.json   ← Edit your content here
│   ├── app/
│   │   ├── components/          ← .html + .scss + .ts per component
│   │   ├── models/
│   │   │   └── portfolio.models.ts
│   │   └── services/
│   │       └── portfolio.service.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

## Tech Stack

- Angular 19 (standalone components, deferrable views)
- TypeScript 5.7
- SCSS
- System fonts (no external font requests)
