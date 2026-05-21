import type { Metadata } from "next";

/** Canonical production URL — used by sitemap, robots, JSON-LD, and metadata. */
export const SITE_URL = "https://cogerphere.com";
export const SITE_NAME = "Cogerphere";
export const SITE_LEGAL_NAME = "Cogerphere AI Labs";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/cogerpherelogoonly.png`;
export const CONTACT_EMAIL = "cogerphereailabs@gmail.com";

/**
 * Primary destinations Google uses for sitelinks (mirror header/footer IA).
 * Keep names aligned with visible nav labels.
 */
export const SITELINK_PAGES = [
  {
    name: "Research",
    path: "/research",
    description:
      "Context Intelligence Framework, Meridian 0.1, and applied AI research from Cogerphere.",
  },
  {
    name: "About",
    path: "/about",
    description:
      "Cogerphere AI Labs — mission, Openbentt, Meridian, and how we build human-aligned systems.",
  },
  {
    name: "Careers",
    path: "/careers",
    description: "Join Cogerphere AI Labs and help expand the sphere of intelligent systems.",
  },
  {
    name: "Documentation",
    path: "/docs",
    description:
      "Documentation for Openbentt, Clox, Meridian, and the Context Intelligence Framework.",
  },
  {
    name: "News",
    path: "/news",
    description:
      "Announcements and updates — Openbentt Phase 1, Meridian 0.1, CIF research, and product news.",
  },
  {
    name: "Contact",
    path: "/contact",
    description:
      "Contact Cogerphere for research collaboration, partnerships, press, and enterprise inquiries.",
  },
  {
    name: "Learn",
    path: "/learn",
    description: "Tutorials and guides for Openbentt, Clox, research tools, and intelligent systems.",
  },
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
};

/** Consistent per-route metadata for indexing and social previews. */
export function pageMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = openGraphTitle ?? `${title} | ${SITE_LEGAL_NAME}`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@cogerphere",
      title: ogTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: url,
    },
  };
}
