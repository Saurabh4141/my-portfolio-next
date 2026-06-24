import type { Metadata } from "next";
import Play from "../../views/Play";

const DESCRIPTION =
  "Play a game of chess against my custom engine and chat with my AI — an interactive corner of Saurabh Gaikwad's portfolio.";

export const metadata: Metadata = {
  title: "Play Chess & Chat — Saurabh Gaikwad",
  description: DESCRIPTION,
  alternates: { canonical: "/play" },
  openGraph: {
    type: "website",
    url: "https://www.gaikwadsaurabh.com/play",
    title: "Play Chess & Chat — Saurabh Gaikwad",
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
    title: "Play Chess & Chat — Saurabh Gaikwad",
    description: DESCRIPTION,
    images: ["/images/mypicnbg.png"],
  },
};

export default function Page() {
  return <Play />;
}
