import type { Metadata } from "next";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Blog";
const DESCRIPTION =
  "Long-form writing from Cogerphere — product launches, research philosophy, local-first AI, and the future of AI-native workspaces.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageStructuredData path="/blog" title={TITLE} description={DESCRIPTION} />
      {children}
    </>
  );
}
