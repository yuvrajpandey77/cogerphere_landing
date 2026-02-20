const BASE_URL = "https://cogerphere.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cogerphere",
  alternateName: "Cogerphere AI Labs",
  url: BASE_URL,
  logo: `${BASE_URL}/cogerpherelogoonly.png`,
  description:
    "Cogerphere is an AI research lab building intelligent systems and next-generation Web3 applications. We advance AI research, AI safety, and human-aligned innovation.",
  foundingDate: "2024",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cogerphere",
  url: BASE_URL,
  description:
    "AI research lab and intelligent systems. Cogerphere builds AI and Web3 solutions with transparency, security, and human-centered design.",
  publisher: {
    "@type": "Organization",
    name: "Cogerphere",
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
