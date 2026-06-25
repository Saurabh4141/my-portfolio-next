"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import Stats from "./Stats";
import Services from "./Services";
import setSplitText from "./utils/splitText";
import setSectionReveals from "./utils/sectionReveals";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    let lastWidth = window.innerWidth;
    setSplitText();
    // Recompute trigger positions once the 3D model / fonts / layout settle so
    // the mobile reveal animations fire at the right scroll positions.
    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 600);

    const resizeHandler = () => {
      const width = window.innerWidth;
      setIsDesktopView(width > 1024);
      setIsMobile(width <= 768);
      // Only re-split on an actual width change. Mobile browsers fire `resize`
      // when the address bar shows/hides (height-only change) while scrolling —
      // re-splitting there is wasteful and makes scrolling janky.
      if (width !== lastWidth) {
        lastWidth = width;
        setSplitText();
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      clearTimeout(refreshId);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // Set up the per-section scroll reveals once (play-once, so they must not be
  // re-initialized on resize or already-revealed content would re-hide).
  useEffect(() => {
    setSectionReveals();
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {(isDesktopView || isMobile) && children}
      <div className="container-main">
        <Landing />
        <About />
        <Stats />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <Services />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
