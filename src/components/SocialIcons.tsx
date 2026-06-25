"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const whatsappLink = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
  config.contact.whatsappMessage
)}`;

const SocialIcons = () => {
  // Hide the sticky social icons while the Contact section (which lists the same
  // links) is in view.
  const [hideSocial, setHideSocial] = useState(false);
  useEffect(() => {
    const contact = document.querySelector(".contact-section");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHideSocial(entry.isIntersecting),
      { threshold: 0.12 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const cleanups: Array<() => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement | null;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let rafId = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        rafId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      // Properly remove the listener (from `document`, where it was added) and
      // stop the animation frame loop on unmount.
      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(rafId);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="icons-section">
      <div
        className={`social-icons ${hideSocial ? "social-hidden" : ""}`}
        data-cursor="icons"
        id="social"
      >
        <span>
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/files/SAURABH_GAIKWAD_OCT_2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
