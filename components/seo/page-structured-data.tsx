import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

type PageStructuredDataProps = {
  path: string;
  title: string;
  description: string;
};

/** Per-route WebPage + BreadcrumbList for deeper indexing (no UI changes). */
export function PageStructuredData({ path, title, description }: PageStructuredDataProps) {
  const url = absoluteUrl(path);
  const pageId = `${url}#webpage`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: `${title} | ${SITE_NAME}`,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
