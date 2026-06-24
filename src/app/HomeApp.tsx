"use client";

import { lazy, Suspense } from "react";
import { LoadingProvider } from "../context/LoadingProvider";

// Mirrors the original App.tsx "/" route: lazy-loaded MainContainer with the
// lazy-loaded 3D CharacterModel passed in as children, wrapped in the
// LoadingProvider (which renders the loading screen).
const CharacterModel = lazy(() => import("../components/Character"));
const MainContainer = lazy(() => import("../components/MainContainer"));

export default function HomeApp() {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
