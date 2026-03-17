import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Cogerphere Terms of Service. Terms governing use of our website and products.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}/terms` },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
