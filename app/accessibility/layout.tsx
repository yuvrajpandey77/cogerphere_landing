import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Cogerphere accessibility commitment. We aim to make our website accessible to everyone.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}/accessibility` },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
