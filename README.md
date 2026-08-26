# SFGWeb

Marketing site for [sfgweb.co.za](https://sfgweb.co.za) — custom websites, e-commerce stores, and redesigns for small businesses in South Africa.

Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## What’s in the project

- **Homepage** — hero, services, pricing, process, portfolio, testimonials, and contact form
- **Project enquiry form** — `/project-enquiry-form` (4-step intake, not indexed)
- **Thank-you page** — `/thank-you` after a successful enquiry

Contact and enquiry forms submit through [Web3Forms](https://web3forms.com).

## Getting started

```bash
npm install
cp .env.example .env.local
```

Add your Web3Forms access key to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS=your_access_key
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Project structure

```
src/
  app/                 # App Router layouts, pages, sitemap, robots
  components/          # UI sections and shared pieces
    forms/             # Enquiry form + field helpers
  lib/
    site.js            # Contact details, nav, packages, copy
    motion.js          # Shared Framer Motion variants
    web3forms.js       # Form submit helper
public/                # Images and static assets
```

Site copy, packages, portfolio items, and contact details live in `src/lib/site.js` so they are not duplicated across components.

## Environment

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS` | Web3Forms access key for contact + enquiry forms |

Do not commit `.env.local`.

## Deploy

The site is set up for Vercel (`npm run build` / `npm start`). Set `NEXT_PUBLIC_WEB3FORMS` in the hosting environment.

`server.js` is an optional custom Node server if a host needs `PORT` binding instead of `next start`.
