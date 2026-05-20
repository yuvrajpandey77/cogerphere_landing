import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { LoadingGate } from "@/components/loading-gate";

const BASE_URL = "https://cogerphere.com";
const OG_IMAGE = `${BASE_URL}/cogerpherelogoonly.png`;

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Cogerphere | AI Research Lab & Intelligent Systems",
    template: "%s | Cogerphere",
  },
  description:
    "Cogerphere is an AI research lab building Openbentt (local-first research workspace), Meridian 0.1 (on-device research AI), context intelligence, and secure smart contracts.",
  keywords: [
    "AI research",
    "AI lab",
    "Cogerphere",
    "Cogerphere AI Labs",
    "Openbentt",
    "Meridian",
    "local-first AI",
    "LaTeX AI",
    "research AI",
    "intelligent systems",
    "context intelligence",
    "CIF",
    "Context Intelligence Framework",
    "AI safety",
    "smart contracts",
    "Clox",
    "machine learning",
    "human-aligned AI",
    "LLM context",
    "AI research lab",
  ],
  authors: [{ name: "Cogerphere", url: BASE_URL }],
  creator: "Cogerphere",
  publisher: "Cogerphere",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Cogerphere",
    title: "Cogerphere | AI Research Lab & Intelligent Systems",
    description:
      "Where intelligence moves and knowledge gathers. Cogerphere builds intelligent systems that stay coherent, transparent, and human-aligned.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cogerphere – AI Research Lab & Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cogerphere",
    creator: "@cogerphere",
    title: "Cogerphere | AI Research Lab & Intelligent Systems",
    description:
      "Where intelligence moves and knowledge gathers. Context intelligence, secure smart contracts, human-aligned innovation.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/cogerpherelogoonly.png",
    apple: "/cogerpherelogoonly.png",
    shortcut: "/cogerpherelogoonly.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your verification IDs when you have them from Search Console / Bing
    // google: "your-google-verification-id",
    // yandex: "your-yandex-verification-id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${jetBrainsMono.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <JsonLd />
        <LoadingGate>{children}</LoadingGate>
        <Analytics />
      </body>
    </html>
  );
}
