import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Documentation";
const DESCRIPTION =
  "Cogerphere documentation — Openbentt, Cobentt, RRbench, Meridian 0.1, Clox smart contracts, CIF SDK, tutorials, and support.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/docs",
});

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/docs" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
