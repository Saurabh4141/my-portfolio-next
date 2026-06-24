import type { Metadata } from "next";
import NotFound from "../views/NotFound";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Saurabh Gaikwad",
};

export default function NotFoundPage() {
  return <NotFound />;
}
