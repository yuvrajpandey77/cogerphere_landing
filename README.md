# Cogerphere Landing Page

Marketing site for **Cogerphere AI Labs** — built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Products & research

- **[Openbentt](https://openbentt.cogerphere.com/)** — Local-first AI workspace for LaTeX, PDFs, and on-device research (Phase 1)
- **Meridian 0.1** — Upcoming on-device research model (proofreading, LaTeX, writing)
- **[Clox](https://cogy01.vercel.app/)** — AI smart contract builder
- **CIF** — Context Intelligence Framework ([research](/research))

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Site routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Company & products |
| `/research` | CIF + Meridian 0.1 |
| `/news` | Announcements |
| `/docs` | Product documentation hub |
| `/learn` | Tutorials & guides |
| `/contact` | Contact form |

## Project structure

```
├── app/                 # Next.js App Router pages
├── components/
│   ├── layout/          # Header, footer
│   ├── neural-logo-loader.tsx
│   └── loading-gate.tsx
├── lib/site-content.ts  # Shared URLs & news items
└── public/              # Logo, Openbentt launch image
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm start` — run production server

## Links

- Website: [cogerphere.com](https://cogerphere.com)
- Openbentt: [openbentt.cogerphere.com](https://openbentt.cogerphere.com/)

Private — Cogerphere AI Labs
