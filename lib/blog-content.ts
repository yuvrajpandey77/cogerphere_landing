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
