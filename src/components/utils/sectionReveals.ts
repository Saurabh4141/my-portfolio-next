import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Adds a scroll-reveal (fade + rise) to the sections that don't already animate
 * in on their own, so everything appears as the user scrolls the page — on both
 * mobile and desktop. Uses "play once" so revealed content never re-hides.
 *
 * Call once after the content is mounted. It's a no-op for elements that aren't
 * present.
 */
export default function setSectionReveals() {
  const groups: { trigger: string; items: string; stagger?: number }[] = [
    { trigger: ".stats-section", items: ".stat-item", stagger: 0.1 },
    {
      trigger: ".services-section",
      items: ".services-eyebrow, .services-title, .services-subtitle",
      stagger: 0.08,
    },
    { trigger: ".services-grid", items: ".service-card", stagger: 0.1 },
    { trigger: ".cta-section", items: ".cta-btn", stagger: 0.12 },
  ];

  groups.forEach(({ trigger, items, stagger }, i) => {
    const triggerEl = document.querySelector(trigger);
    const els = gsap.utils.toArray<HTMLElement>(items);
    if (!triggerEl || !els.length) return;

    gsap.fromTo(
      els,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: stagger || 0,
        scrollTrigger: {
          // `reveal*` id keeps these alive through Scene's resize handler.
          id: `reveal-section-${i}`,
          trigger: triggerEl,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
