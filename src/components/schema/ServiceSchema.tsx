interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  priceRange: string;
  areaServed: string[];
  url: string;
}

export default function ServiceSchema({
  serviceName,
  serviceType,
  description,
  priceRange,
  areaServed,
  url
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "RoofingContractor",
      "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization",
      "name": "All Phase Construction USA, LLC"
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "State",
        "name": "Florida"
      }
    })),
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "url": url,
    "category": "Home Improvement"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
