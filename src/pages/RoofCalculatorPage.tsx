import SEO from '../components/SEO';
import RoofCostCalculator from '../components/calculator/RoofCostCalculator';

export default function RoofCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What factors affect roof cost in South Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof costs in South Florida depend on roof size, pitch, material (shingle, tile, metal, or flat), code upgrades, and whether decking or fascia wood needs replacement. Labor, permits, and disposal also impact the price."
        }
      },
      {
        "@type": "Question",
        "name": "Is a metal roof more expensive than tile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, metal roofs cost more upfront than shingle and can be similar to or slightly higher than many tile roofs. However, metal systems can last longer, perform better in high winds, and may offer better long-term value."
        }
      },
      {
        "@type": "Question",
        "name": "Does the calculator include permits and disposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our calculator includes typical permit costs, dumpster fees, and labor. However, final pricing may vary based on specific site conditions, access restrictions, or HOA requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can I finance my roof replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer flexible financing options through multiple lenders. Many homeowners qualify for payment plans with competitive rates. Visit our financing page or call us at 754-227-5605 to discuss options."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the roof cost calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator provides realistic ballpark ranges based on actual South Florida roofing projects. Final pricing depends on your specific roof conditions, code requirements, and material selections. Schedule a free assessment for an exact quote."
        }
      },
      {
        "@type": "Question",
        "name": "What roof material is best for South Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best material depends on your budget, home style, and priorities. Tile offers aesthetics and longevity, metal provides superior wind resistance and solar compatibility, shingles are budget-friendly, and flat roofs work well for modern architecture. We can help you evaluate all options."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="How Much Does a Roof Cost in South Florida? | Roof Cost Calculator – All Phase Construction USA"
        description="Use our free South Florida roof cost calculator to estimate tile, metal, shingle, and flat roof prices in Broward and Palm Beach counties. Instant ballpark ranges."
        schemaJson={faqSchema}
      />
      <RoofCostCalculator />
    </>
  );
}
