import type { Metadata } from "next";
import { NewsJsonLd } from "@/components/seo/news-json-ld";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "News";
const DESCRIPTION =
  "Cogerphere news: Openbentt Phase 1, Meridian 0.1 preview, CIF research, and product announcements.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/news",
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/news" title={TITLE} description={DESCRIPTION} />
      <NewsJsonLd />
      {children}
    </>
  );
}
