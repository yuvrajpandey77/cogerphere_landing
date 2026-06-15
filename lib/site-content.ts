export const OPENBENTT_URL = "https://openbentt.cogerphere.com/";

export const COBENTT_URL = "https://openbentt.vercel.app/chat";
export const COBENTT_INSTALL_URL = "https://openbentt.vercel.app/chat?install=1";
export const COBENTT_SETUP_URL = "https://openbentt.vercel.app/setup";
export const COBENTT_GITHUB_URL = "https://github.com/yuvrajpandey77/Openbentt";

export const RRBENCH_GITHUB_URL = "https://github.com/COGERPHEREAILABS/RRbench";
export const RRBENCH_BLOG_PATH = "/blog/rrbench-preview";

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
    id: "cobentt-launch",
    date: "June 16, 2026",
    category: "Product",
    title: "Cobentt — mobile AI chat on your phone. Your credentials stay on your device.",
    excerpt:
      "Cogerphere’s mobile AI chat PWA is live. Install from the browser, connect your own model access, and chat with hundreds of models — no app store, no Cogerphere account.",
    href: "/blog/cobentt-launch",
    badge: "New",
  },
  {
    id: "openbentt-beta-launch",
    date: "May 25, 2026",
    category: "Product",
    title: "Openbentt Beta Launch: Building the Local-First AI Research Workspace We Wish Existed",
    excerpt:
      "Today marks the beta launch of Openbentt — a local-first AI research workspace built for researchers, developers, and privacy-conscious professionals who need more than a chat interface.",
    href: "/blog/openbentt-beta-launch",
    badge: "Beta Launch",
  },
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
    id: "rrbench-preview",
    date: "Coming soon",
    category: "Research",
    title: "RRbench (ResearchBench) — trust-first research verification",
    excerpt:
      "A unified platform for assessing credibility and reproducibility of scientific research — especially AI/ML papers. Multi-signal Trust Scores combine AI analysis, artifact integrity checks, expert review, and community validation.",
    href: RRBENCH_BLOG_PATH,
    badge: "Upcoming",
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
