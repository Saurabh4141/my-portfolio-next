# Saurabh Gaikwad — Portfolio (Next.js)

Next.js **App Router** migration of the original Vite + React portfolio. The UI,
animations (GSAP/ScrollTrigger), smooth scroll (Lenis) and the Three.js 3D
character are preserved 1:1. Routing was moved from `react-router-dom` to the
Next App Router, and SEO is now handled natively with the Next Metadata API.

## Requirements

- Node.js 18.18+ (tested on Node 22)

## Setup

```bash
npm install
```

No environment variables are required.

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (optional)
```

## Routes

| Path        | File                          | Notes                                   |
| ----------- | ----------------------------- | --------------------------------------- |
| `/`         | `src/app/page.tsx`            | Home (3D + animations), client-rendered |
| `/myworks`  | `src/app/myworks/page.tsx`    | All projects (SSR for SEO)              |
| `*`         | `src/app/not-found.tsx`       | 404                                     |
