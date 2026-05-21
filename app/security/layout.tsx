import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Security";
const DESCRIPTION =
  "Security at Cogerphere — secure by default, AI safety research, and responsible disclosure.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/security",
});

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/security" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
