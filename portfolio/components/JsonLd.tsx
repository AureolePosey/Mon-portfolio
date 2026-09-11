import { site } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.seoDescription,
    url: site.siteUrl,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressCountry: site.addressCountry,
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: site.keywords,
    seeks: {
      "@type": "Demand",
      name: site.availabilityBadge,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
