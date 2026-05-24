import { SITE_LEGAL_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import { getBlogPost } from "@/lib/blog-content";

type BlogArticleJsonLdProps = {
  slug: string;
};

export function BlogArticleJsonLd({ slug }: BlogArticleJsonLdProps) {
  const post = getBlogPost(slug);
  if (!post) return null;

  const url = absoluteUrl(`/blog/${post.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: absoluteUrl(post.heroImage),
    articleSection: post.category,
    mainEntityOfPage: url,
    isPartOf: {
      "@type": "Blog",
      "@id": `${absoluteUrl("/blog")}#blog`,
      name: `Blog | ${SITE_LEGAL_NAME}`,
      url: absoluteUrl("/blog"),
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
