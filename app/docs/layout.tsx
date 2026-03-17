import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Cogerphere documentation. Build with Clox smart contract builder, CIF SDK, and intelligent systems. Get started, tutorials, and support.",
  openGraph: {
    title: "Documentation | Cogerphere AI Labs",
    description:
      "Build intelligent systems with Cogerphere. Clox, CIF SDK, tutorials, and support.",
    url: `${BASE_URL}/docs`,
  },
  alternates: {
    canonical: `${BASE_URL}/docs`,
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
