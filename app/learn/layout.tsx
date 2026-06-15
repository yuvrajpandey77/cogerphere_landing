import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Learn";
const DESCRIPTION =
  "Learn with Cogerphere — tutorials and guides for Cobentt, Openbentt, Clox, Meridian, and intelligent systems.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/learn",
});

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/learn" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
