import { citySpecificData } from '../../config/citySpecificData';

interface LocalBusinessSchemaProps {
  cityName: string;
  citySlug: string;
}

export default function LocalBusinessSchema({ cityName, citySlug }: LocalBusinessSchemaProps) {
  const cityData = citySpecificData[citySlug];

  const buildingDescription = cityData
    ? `All Phase Construction USA, LLC (CGC1526236, CCC1331464) serves ${cityName}, ${cityData.county}, Florida. Licensed roofing and general contractor specializing in ${cityData.commonRoofTypes.join(', ')} for ${cityData.architecturalStyle}. ${cityData.hvhzZone ? 'HVHZ-compliant installations for coastal properties with enhanced wind resistance.' : 'Florida Building Code compliant installations with wind mitigation features.'} Permitting through ${cityData.buildingDepartment}. ${cityData.insuranceConsiderations}`
    : `All Phase Construction USA, LLC (CGC1526236, CCC1331464) serves ${cityName}, FL. Licensed roofing and general contractor specializing in residential and commercial roof installations.`;

  const serviceDescriptions = cityData
    ? {
        tile: `Professional tile roofing installation in ${cityName} with foam adhesive attachment and SWR underlayment. ${cityData.commonRoofTypes.includes('Tile (Spanish and Flat)') || cityData.commonRoofTypes.includes('Tile (Concrete and Clay)') || cityData.commonRoofTypes.includes('Tile (All Types)') ? 'Popular choice for ' + cityData.architecturalStyle + ' matching neighborhood aesthetics.' : 'Available for properties with architectural approval.'} ${cityData.hvhzZone ? 'HVHZ-rated for coastal wind resistance.' : 'Wind-rated for Florida Building Code compliance.'}`,
        metal: `Standing seam and mechanically seamed metal roofing in ${cityName}. ${cityData.hvhzZone ? 'Ideal for HVHZ coastal properties requiring superior wind resistance (170+ mph).' : 'Excellent wind resistance and long-term durability.'} Solar panel-ready platforms with 50+ year lifespan.`,
        shingle: `Architectural shingle roofing in ${cityName} with Class 4 impact ratings and 130+ mph wind resistance. ${cityData.hoaCommon ? 'Available in HOA-approved colors and styles.' : 'Versatile options for all architectural styles.'} Most budget-friendly option with 20-30 year warranties.`,
        flat: `TPO, modified bitumen, and IB PVC flat roofing systems for ${cityName} properties. ${cityData.architecturalStyle.includes('Commercial') || cityData.architecturalStyle.includes('Multi-Family') ? 'Designed for commercial and multi-family applications.' : 'Perfect for low-slope residential sections and additions.'} Energy-efficient white membranes with 20-30 year warranties.`
      }
    : {
        tile: `Professional tile roofing installation in ${cityName}`,
        metal: `Metal roofing installation in ${cityName}`,
        shingle: `Shingle roofing installation in ${cityName}`,
        flat: `Flat roofing installation in ${cityName}`
      };

  const addressLocality = cityData ? cityData.county : "Broward & Palm Beach Counties";

  const knowsAboutList = [
    "Residential Roofing",
    "Commercial Roofing",
    "Tile Roofing",
    "Metal Roofing",
    "Shingle Roofing",
    "Flat Roofing",
    "Wind Mitigation",
    "Florida Building Code"
  ];

  if (cityData?.hvhzZone) {
    knowsAboutList.push("HVHZ Compliance");
    knowsAboutList.push("Coastal Construction");
  }

  if (cityData?.hoaCommon) {
    knowsAboutList.push("HOA Compliance");
    knowsAboutList.push("Architectural Review");
  }

  if (cityData?.buildingDepartment) {
    knowsAboutList.push(cityData.buildingDepartment);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization",
    "name": "All Phase Construction USA, LLC",
    "alternateName": "All Phase Construction",
    "legalName": "All Phase Construction USA, LLC",
    "description": buildingDescription,
    "url": "https://chrisp-png-roofing-c-gxj0.bolt.host/",
    "logo": "https://chrisp-png-roofing-c-gxj0.bolt.host/logo.png",
    "image": "https://chrisp-png-roofing-c-gxj0.bolt.host/logo.png",
    "telephone": "+1-754-227-5605",
    "email": "info@allphaseusa.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": addressLocality,
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityName,
        "containedInPlace": {
          "@type": "State",
          "name": "Florida",
          "containedInPlace": {
            "@type": "Country",
            "name": "United States"
          }
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Roofing Services in ${cityName}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Tile Roof Installation in ${cityName}`,
            "description": serviceDescriptions.tile,
            "serviceType": "Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Metal Roof Installation in ${cityName}`,
            "description": serviceDescriptions.metal,
            "serviceType": "Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Shingle Roof Installation in ${cityName}`,
            "description": serviceDescriptions.shingle,
            "serviceType": "Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Flat Roof Installation in ${cityName}`,
            "description": serviceDescriptions.flat,
            "serviceType": "Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            }
          }
        }
      ]
    },
    "priceRange": "$$$",
    "paymentAccepted": "Cash, Check, Credit Card, Financing",
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00",
    "sameAs": [
      "https://www.facebook.com/allphaseconstructionusa",
      "https://www.linkedin.com/company/allphaseconstructionusa"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "slogan": "Dual-Licensed Roofing & General Contractor",
    "foundingDate": "1999",
    "knowsAbout": knowsAboutList,
    "makesOffer": [
      {
        "@type": "Offer",
        "name": `Free Roof Assessment in ${cityName}`,
        "description": "Complimentary on-site roof inspection and detailed estimate",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": `Roof Financing in ${cityName}`,
        "description": "Flexible payment plans with low monthly payments for qualified homeowners"
      },
      {
        "@type": "Offer",
        "name": `Wind Mitigation Documentation in ${cityName}`,
        "description": "Form 1802 documentation provided at project completion for insurance premium reductions"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
