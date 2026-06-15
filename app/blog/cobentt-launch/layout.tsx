import type { Metadata } from "next";
import { BlogArticleJsonLd } from "@/components/seo/blog-json-ld";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { getBlogPost } from "@/lib/blog-content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const SLUG = "cobentt-launch";
const post = getBlogPost(SLUG)!;

const baseMeta = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${SLUG}`,
  openGraphTitle: post.title,
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    type: "article",
    locale: "en_US",
    url: absoluteUrl(`/blog/${SLUG}`),
    siteName: "Cogerphere",
    title: post.title,
    description: post.excerpt,
    publishedTime: post.datePublished,
    images: [
      {
        url: absoluteUrl(post.heroImage),
        width: 512,
        height: 512,
        alt: post.heroImageAlt,
      },
    ],
  },
  twitter: {
    ...baseMeta.twitter,
    images: [absoluteUrl(post.heroImage)],
  },
};

export default function CobenttLaunchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path={`/blog/${SLUG}`} title={post.title} description={post.excerpt} />
      <BlogArticleJsonLd slug={SLUG} />
      {children}
    </>
  );
}
