import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Researchers";
const DESCRIPTION =
  "Cogerphere researchers working on context intelligence, local-first AI, Meridian 0.1, and the systems behind Openbentt.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/researchers",
});

export default function ResearchersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/researchers" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
