import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "People";
const DESCRIPTION =
  "Meet the Cogerphere team — leadership, engineers, and researchers building Cobentt, Openbentt, RRbench, Meridian, and the Context Intelligence Framework.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/people",
});

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/people" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
