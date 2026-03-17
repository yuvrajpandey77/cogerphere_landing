import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Security",
  description: "Security at Cogerphere. Secure by default, AI safety, responsible disclosure.",
  openGraph: {
    title: "Security | Cogerphere AI Labs",
    url: `${BASE_URL}/security`,
  },
  alternates: { canonical: `${BASE_URL}/security` },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
