import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Contact";
const DESCRIPTION =
  "Contact Cogerphere AI Labs for research collaboration, partnerships, press, enterprise, and product inquiries.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/contact" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
