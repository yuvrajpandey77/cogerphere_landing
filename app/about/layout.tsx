import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "About";
const DESCRIPTION =
  "Cogerphere AI Labs — Intelligence in Motion. Knowledge in a Sphere. Cobentt, Openbentt, RRbench, Meridian 0.1, and systems that stay coherent.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/about" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
