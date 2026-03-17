import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cogerphere Privacy Policy. How we collect, use, and protect your information.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}/privacy` },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
