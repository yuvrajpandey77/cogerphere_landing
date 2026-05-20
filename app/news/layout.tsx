import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "News",
  description:
    "Cogerphere news: Openbentt Phase 1, Meridian 0.1 preview, CIF research, and product announcements.",
  openGraph: {
    title: "News | Cogerphere AI Labs",
    url: `${BASE_URL}/news`,
  },
  alternates: { canonical: `${BASE_URL}/news` },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
