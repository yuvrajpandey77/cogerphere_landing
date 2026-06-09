import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-content";
import { getResearcherSlugs } from "@/lib/people-content";
import { SITE_URL, SITELINK_PAGES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const primary = SITELINK_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.path === "/research" || page.path === "/about" ? 0.9 : 0.8,
  }));

  const blog = [
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];

  const researchers = [
    { url: `${SITE_URL}/researchers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    ...getResearcherSlugs().map((slug) => ({
      url: `${SITE_URL}/researchers/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...primary,
    ...researchers,
    ...blog,
    { url: `${SITE_URL}/security`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
