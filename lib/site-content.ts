export const OPENBENTT_URL = "https://openbentt.cogerphere.com/";

export type AnnouncementCategory = "Product" | "Research" | "Model" | "Company";

export type Announcement = {
  id: string;
  date: string;
  category: AnnouncementCategory;
  title: string;
  excerpt: string;
  href: string;
  external?: boolean;
  badge?: string;
};

export const announcements: Announcement[] = [
  {
    id: "openbentt-phase-1",
    date: "2026",
    category: "Product",
    title: "Openbentt Phase 1 is here",
    excerpt:
      "A local-first AI workspace for LaTeX, PDFs, benchmarking, and fine-tuned small models — built for researchers, by researchers. Inference, history, and attachments stay on your machine.",
    href: OPENBENTT_URL,
    external: true,
    badge: "New",
  },
  {
    id: "meridian-0-1",
    date: "Coming soon",
    category: "Model",
    title: "Meridian 0.1 — local research AI",
    excerpt:
      "Our upcoming on-device model for proofreading, LaTeX workflows, research writing, and more — optimized for private, local-first research without sending your work to the cloud.",
    href: "/research#meridian",
    badge: "Upcoming",
  },
  {
    id: "cif-research",
    date: "Ongoing",
    category: "Research",
    title: "Context Intelligence Framework",
    excerpt:
      "Adaptive compression and drift detection for LLM context windows — extending what models remember without losing coherence.",
    href: "/research",
  },
  {
    id: "clox-product",
    date: "Available",
    category: "Product",
    title: "Clox — Smart Contract Builder",
    excerpt:
      "Generate production-ready smart contracts from natural language with built-in security scanning and multi-chain deployment.",
    href: "https://cogy01.vercel.app/",
    external: true,
  },
];
