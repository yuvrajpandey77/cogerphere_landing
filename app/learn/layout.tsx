import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Learn with Cogerphere. Tutorials, guides, and use cases for building intelligent systems.",
  openGraph: {
    title: "Learn | Cogerphere AI Labs",
    url: `${BASE_URL}/learn`,
  },
  alternates: { canonical: `${BASE_URL}/learn` },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
