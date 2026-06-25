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
  },
  twitter: {
    card: "summary",
    title: "Play Chess & Chat — Saurabh Gaikwad",
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <Play />;
}
