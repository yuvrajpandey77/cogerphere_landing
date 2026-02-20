import type { Metadata } from "next";

const BASE_URL = "https://cogerphere.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cogerphere AI Labs. Get in touch for AI research collaborations, Web3 solutions, smart contract tools, and enterprise inquiries.",
  openGraph: {
    title: "Contact | Cogerphere – AI Research Lab",
    description:
      "Contact Cogerphere AI Labs for AI research, Web3 solutions, and intelligent systems. We'd love to hear from you.",
    url: `${BASE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Cogerphere – AI Research Lab",
    description:
      "Contact Cogerphere AI Labs for AI research, Web3 solutions, and intelligent systems.",
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
