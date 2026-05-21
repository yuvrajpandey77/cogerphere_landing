import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Research";
const DESCRIPTION =
  "Cogerphere research: Context Intelligence Framework, Meridian 0.1 local research AI, and adaptive compression for LLM context windows.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/research",
});

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/research" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
