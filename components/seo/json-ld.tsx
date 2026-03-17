const BASE_URL = "https://cogerphere.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cogerphere",
  alternateName: "Cogerphere AI Labs",
  url: BASE_URL,
  logo: `${BASE_URL}/cogerpherelogoonly.png`,
  description:
    "Intelligence in Motion. Knowledge in a Sphere. Cogerphere is an AI research lab that expands what systems can understand and uphold — from context-aware LLMs to secure smart contracts.",
  foundingDate: "2025",
  email: "cogerphereailabs@gmail.com",
  sameAs: [
    "https://www.linkedin.com/company/cogerphere",
    "https://x.com/cogerphere",
    "https://github.com/COGERPHEREAILABS",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cogerphere",
  alternateName: "Cogerphere AI Labs",
  url: BASE_URL,
  description:
    "Where intelligence moves and knowledge gathers. Cogerphere builds intelligent systems that stay coherent, transparent, and human-aligned.",
  publisher: {
    "@type": "Organization",
    name: "Cogerphere",
    url: BASE_URL,
    logo: `${BASE_URL}/cogerpherelogoonly.png`,
  },
  inLanguage: "en",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
