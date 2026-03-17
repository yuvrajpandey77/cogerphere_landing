import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cogerphere AI Labs — Intelligence in Motion. Knowledge in a Sphere. We expand what systems can understand, retain, and uphold.",
  openGraph: {
    title: "About | Cogerphere AI Labs",
    description:
      "We exist to expand what systems can understand, retain, and uphold — so the future stays coherent.",
    url: `${BASE_URL}/about`,
  },
  alternates: { canonical: `${BASE_URL}/about` },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
