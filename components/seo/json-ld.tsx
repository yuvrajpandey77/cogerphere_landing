import {
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  SITELINK_PAGES,
  absoluteUrl,
} from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ResearchOrganization"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
    width: 512,
    height: 512,
  },
  image: DEFAULT_OG_IMAGE,
  description:
    "Cogerphere is an AI research lab building Openbentt, Cobentt mobile AI chat, RRbench research verification, Meridian local research AI, the Context Intelligence Framework, and Clox smart contracts.",
  foundingDate: "2025",
  email: CONTACT_EMAIL,
  sameAs: [
    "https://www.linkedin.com/company/cogerphere",
    "https://x.com/cogerphere",
    "https://github.com/COGERPHEREAILABS",
    "https://openbentt.cogerphere.com/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    availableLanguage: ["English"],
    url: absoluteUrl("/contact"),
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Safety",
    "Large Language Models",
    "Local-first AI",
    "Research Software",
    "Smart Contracts",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  description:
    "Where intelligence moves and knowledge gathers. Cogerphere builds intelligent systems that stay coherent, transparent, and human-aligned.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `Home | ${SITE_NAME}`,
  description:
    "Cogerphere AI research lab — Openbentt local-first research workspace, Meridian 0.1, Context Intelligence Framework, and Clox.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
  },
  inLanguage: "en-US",
};

/** Helps crawlers discover primary sections (sitelink candidates). */
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#sitenavigation`,
  name: `${SITE_NAME} — primary sections`,
  itemListElement: SITELINK_PAGES.map((page, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: page.name,
    description: page.description,
    url: absoluteUrl(page.path),
  })),
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    homePageSchema,
    siteNavigationSchema,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphSchema),
      }}
    />
  );
}
