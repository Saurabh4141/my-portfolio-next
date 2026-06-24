# Saurabh Gaikwad — Portfolio (Next.js)

Next.js **App Router** migration of the original Vite + React portfolio. The UI,
animations (GSAP/ScrollTrigger), smooth scroll (Lenis), the Three.js 3D
character, the chess game (chess.js + WASM engine) and the AI chat are preserved
1:1. Routing was moved from `react-router-dom` to the Next App Router, and SEO is
now handled natively with the Next Metadata API.

## Requirements

- Node.js 18.18+ (tested on Node 22)

## Setup

```bash
npm install
```

Create a `.env.local` for the chat feature (used by `src/app/api/chat/route.js`):

```bash
# .env.local
GROQ_API_KEY=your_actual_api_key_here
```

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
| `/play`     | `src/app/play/page.tsx`       | Chess + AI chat                         |
| `*`         | `src/app/not-found.tsx`       | 404                                     |
| `/api/chat` | `src/app/api/chat/route.js`   | Groq proxy (server-side key)            |
