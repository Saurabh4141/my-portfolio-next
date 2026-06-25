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
  },
  twitter: {
    card: "summary",
    title: "All Works — Saurabh Gaikwad",
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <MyWorks />;
}
