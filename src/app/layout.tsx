import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import "../App.css";

const SITE_URL = "https://www.gaikwadsaurabh.com";
const DESCRIPTION =
  "Full-Stack & AI Developer building scalable web, mobile, and AI-powered applications with React, React Native, Node.js, Laravel, and LLM integrations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Saurabh Gaikwad — Full-Stack & AI Developer",
  description: DESCRIPTION,
  keywords: [
    "Saurabh Gaikwad",
    "Full-Stack Developer",
    "AI Developer",
    "React",
    "React Native",
    "Node.js",
    "Laravel",
    "Machine Learning",
    "Portfolio",
    "Pune",
  ],
  authors: [{ name: "Saurabh Gaikwad" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Saurabh Gaikwad — Full-Stack & AI Developer",
    description: DESCRIPTION,
    siteName: "Saurabh Gaikwad",
  },
  twitter: {
    card: "summary",
    title: "Saurabh Gaikwad — Full-Stack & AI Developer",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b080c",
  width: "device-width",
  initialScale: 1,
};

// Structured data (schema.org Person) — preserved from the original index.html.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saurabh Gaikwad",
  url: "https://www.gaikwadsaurabh.com/",
  jobTitle: "Full-Stack & AI Developer",
  email: "mailto:saurabhg4141@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Saurabh4141",
    "https://www.linkedin.com/in/saurabh-gaikwad-8a2a22225",
    "https://www.instagram.com/gaikwad_saurabh_14",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "Node.js",
    "Laravel",
    "PostgreSQL",
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
