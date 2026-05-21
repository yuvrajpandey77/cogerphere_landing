import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Terms of Service",
    description: "Cogerphere Terms of Service. Terms governing use of our website and products.",
    path: "/terms",
  }),
  robots: { index: false, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
