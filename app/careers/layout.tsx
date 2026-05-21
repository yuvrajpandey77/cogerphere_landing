import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Careers";
const DESCRIPTION = "Join Cogerphere AI Labs. Careers in AI research, engineering, and human-aligned intelligent systems.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/careers" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
