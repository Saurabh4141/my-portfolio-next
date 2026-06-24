"use client";

import dynamic from "next/dynamic";

// The home experience (3D character, GSAP/Lenis animations, loading screen)
// is strictly client-side — it reads `window` during render and drives an
// imperative WebGL/animation pipeline. We load it with ssr:false so it behaves
// exactly like the original Vite SPA (no server render of this subtree).
const HomeApp = dynamic(() => import("./HomeApp"), {
  ssr: false,
  loading: () => null,
});

export default function HomeClient() {
  return <HomeApp />;
}
