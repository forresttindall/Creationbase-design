# Design Site

Boise-based design and website design & development by Forrest Tindall. This project is a Vite + React static site.

## Tech
- Vite 6, React 19
- Deployed on Vercel

## Local Development
- Install: `npm i`
- Run dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment (Vercel)
- Node.js version is pinned to `20.x` via `package.json` engines to avoid npm optional dependency issues with Rollup on Node 22.
- Push changes or trigger a redeploy from Vercel.

## SEO Services Page
- Static SEO page lives at `public/services.html` with Boise-focused meta tags and JSON-LD. It will be served at `/services.html`.
- Update content or add more sections as needed.

## Pages
- Homepage, Biography, Graphic Design, Websites, Photography, Contact
- Mobile layout tuned for consistent side gutters and sticky footer behavior

## License
- MIT
