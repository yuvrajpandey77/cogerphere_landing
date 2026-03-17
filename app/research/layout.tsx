import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Cogerphere research: Context Intelligence Framework — adaptive compression, drift detection, and threshold-gated validation for LLM context windows.",
  openGraph: {
    title: "Research | Cogerphere AI Labs",
    description:
      "Context Intelligence Framework: extending what LLMs can remember without losing coherence.",
    url: `${BASE_URL}/research`,
  },
  alternates: {
    canonical: `${BASE_URL}/research`,
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
