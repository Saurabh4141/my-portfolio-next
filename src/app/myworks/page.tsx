import type { Metadata } from "next";
import MyWorks from "../../views/MyWorks";

const DESCRIPTION =
  "A collection of projects by Saurabh Gaikwad — web, mobile, AI, and full-stack applications built with React, React Native, Node.js, Laravel, and modern AI technologies.";

export const metadata: Metadata = {
  title: "All Works — Saurabh Gaikwad",
  description: DESCRIPTION,
  alternates: { canonical: "/myworks" },
  openGraph: {
    type: "website",
    url: "https://www.gaikwadsaurabh.com/myworks",
    title: "All Works — Saurabh Gaikwad",
    description: DESCRIPTION,
    siteName: "Saurabh Gaikwad",
    images: [
      {
        url: "/images/mypicnbg.png",
        width: 1000,
        height: 1000,
        alt: "Saurabh Gaikwad — Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Works — Saurabh Gaikwad",
    description: DESCRIPTION,
    images: ["/images/mypicnbg.png"],
  },
};

export default function Page() {
  return <MyWorks />;
}
