import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";

const BASE_URL = "https://cogerphere.com";
const OG_IMAGE = `${BASE_URL}/cogerpherelogoonly.png`;

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Cogerphere | AI Research Lab & Intelligent Systems – Web3 & AI",
    template: "%s | Cogerphere",
  },
  description:
    "Cogerphere is an AI research lab building intelligent systems and Web3 applications. AI research, AI safety, smart contracts, and human-aligned innovation.",
  keywords: [
    "AI research",
    "AI lab",
    "artificial intelligence",
    "intelligent systems",
    "Web3",
    "smart contracts",
    "AI safety",
    "machine learning",
    "blockchain",
    "Cogerphere",
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
    title: "Cogerphere | AI Research Lab & Intelligent Systems – Web3 & AI",
    description:
      "Cogerphere is an AI research lab building intelligent systems and Web3 applications. AI research, AI safety, and human-aligned innovation.",
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
    title: "Cogerphere | AI Research Lab & Intelligent Systems – Web3 & AI | Cogerphere",
    description:
      "Cogerphere is an AI research lab building intelligent systems and Web3 applications. AI research, AI safety, and human-aligned innovation.",
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
        className={`${sora.variable} ${jetBrainsMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
