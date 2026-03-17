import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Cogerphere AI Labs. We're hiring — expand the sphere with us.",
  openGraph: {
    title: "Careers | Cogerphere AI Labs",
    url: `${BASE_URL}/careers`,
  },
  alternates: { canonical: `${BASE_URL}/careers` },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
