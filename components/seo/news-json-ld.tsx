import { announcements } from "@/lib/site-content";
import { SITE_LEGAL_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

/** Collection + articles for /news (supports rich result eligibility). */
export function NewsJsonLd() {
  const internalPosts = announcements.filter((item) => !item.external);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/news")}#webpage`,
    url: absoluteUrl("/news"),
    name: `News & Updates | ${SITE_LEGAL_NAME}`,
    description:
      "Cogerphere announcements — Cobentt, RRbench, Openbentt, Meridian 0.1, Context Intelligence Framework, and product updates.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    hasPart: internalPosts.map((item) => ({
      "@type": "Article",
      "@id": absoluteUrl(item.href),
      headline: item.title,
      description: item.excerpt,
      url: absoluteUrl(item.href),
      ...(item.date === "2026" ? { datePublished: "2026-01-01" } : {}),
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      articleSection: item.category,
      mainEntityOfPage: absoluteUrl(item.href),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
    />
  );
}
