export type BlogCategory = "Product" | "Research" | "Company";

export type BlogPost = {
  slug: string;
  date: string;
  datePublished: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  badge?: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rrbench-preview",
    date: "June 2026",
    datePublished: "2026-06-01",
    category: "Research",
    title: "RRbench (ResearchBench) — trust-first verification for scientific research",
    excerpt:
      "ResearchBench is Cogerphere’s upcoming platform for assessing credibility and reproducibility of scientific research — multi-signal Trust Scores backed by AI analysis, artifact integrity, expert review, and community validation.",
    heroImage: "/cogerpherelogoonly.png",
    heroImageAlt:
      "RRbench ResearchBench — trust-first research verification platform by Cogerphere AI Labs",
    badge: "Upcoming",
    readTime: "8 min read",
  },
  {
    slug: "cobentt-launch",
    date: "June 16, 2026",
    datePublished: "2026-06-16",
    category: "Product",
    title: "Cobentt — mobile AI chat on your phone. Your credentials stay on your device.",
    excerpt:
      "Cobentt is Cogerphere’s mobile AI chat app. Install it from the browser, connect your own model access, and chat with hundreds of models — no app store required.",
    heroImage: "/cobentt-icon-512.png",
    heroImageAlt:
      "Cobentt — mobile AI chat PWA by Cogerphere with multi-model chat and local credential storage",
    badge: "Launch",
    readTime: "5 min read",
  },
  {
    slug: "openbentt-beta-launch",
    date: "May 25, 2026",
    datePublished: "2026-05-25",
    category: "Product",
    title: "Openbentt Beta Launch: Building the Local-First AI Research Workspace We Wish Existed",
    excerpt:
      "Today marks the beta launch of Openbentt — a local-first AI research workspace built for researchers, developers, and privacy-conscious professionals who need more than a chat interface.",
    heroImage: "/openbentt-beta-banner.png",
    heroImageAlt:
      "Openbentt beta launch — local-first AI research workspace with LaTeX editing, PDF preview, AI assistant, and model benchmarking",
    badge: "Beta Launch",
    readTime: "12 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
