import { siteConfig } from "@/lib/site-config";

const personId = `${siteConfig.url}/#itay-lisaey`;

/**
 * Schema.org graph describing the site and its subject. Consumed by search
 * engines and AI agents that read JSON-LD instead of parsing the page.
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      givenName: "Itay",
      familyName: "Lisaey",
      url: siteConfig.url,
      image: `${siteConfig.url}/avatar.svg`,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "JP",
      },
      worksFor: {
        "@type": "Organization",
        name: "Novana",
        url: siteConfig.organizations.novana,
        description:
          "Bringing clarity and intelligence to K-12 schools through AI-native software.",
      },
      alumniOf: {
        "@type": "Organization",
        name: "Chordio",
        url: siteConfig.organizations.chordio,
      },
      knowsAbout: [
        "AI-native product engineering",
        "Large language model systems",
        "Cloud architecture",
        "Education technology",
        "Engineering leadership",
      ],
      sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": personId },
    },
  ],
};
