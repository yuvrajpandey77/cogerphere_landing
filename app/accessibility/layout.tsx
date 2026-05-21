import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Accessibility",
    description:
      "Cogerphere accessibility commitment. We aim to make our website accessible to everyone.",
    path: "/accessibility",
  }),
  robots: { index: false, follow: true },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
