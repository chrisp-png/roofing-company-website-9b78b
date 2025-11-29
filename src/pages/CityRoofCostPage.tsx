import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import SEO from '../components/SEO';

interface CityRoofCostPageProps {
  cityName: string;
  citySlug: string;
  isCoastal?: boolean;
}

export default function CityRoofCostPage({ cityName, citySlug, isCoastal = false }: CityRoofCostPageProps) {
  const coastalText = isCoastal
    ? 'Coastal weather, salt air exposure, and direct hurricane threat make proper roof installation critical for every property.'
    : 'While inland, the area still faces severe storms and must meet Florida\'s strict building codes for wind resistance.';

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Roof replacement in ${cityName}, FL`,
        "serviceType": "Roofing",
        "provider": {
          "@type": "RoofingContractor",
          "name": "All Phase Construction USA, LLC",
          "telephone": "754-227-5605"
        },
        "areaServed": {
          "@type": "City",
          "name": cityName,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": "FL",
            "addressCountry": "US"
          }
        },
        "description": `Roof replacement and roofing services for homes and condos in ${cityName}, FL.`
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does a roof cost in ${cityName}, FL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Roof costs in ${cityName} depend on roof size, system type, complexity, and code upgrades. Our Roof Cost Estimator uses South Florida pricing to provide a realistic ballpark range, but final pricing requires an on-site roof and attic inspection.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I get an exact roof price online for my ${cityName} home?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online tools can only provide ballpark ranges. All Phase Construction USA performs a full roof and attic inspection to verify decking, roof-to-wall connections, underlayment, and code requirements before giving a final proposal."
            }
          },
          {
            "@type": "Question",
            "name": `Do you help with insurance and wind mitigation for ${cityName} roofs?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. As a dual-licensed General Contractor and Roofing Contractor, we follow HVHZ code and provide a wind mitigation report at completion so you can pursue potential insurance savings."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={`How Much Does a Roof Cost in ${cityName}, FL? | All Phase Construction USA`}
        description={`Wondering how much a roof costs in ${cityName}, FL? Learn what affects pricing and use our Roof Cost Estimator built for Broward & Palm Beach homes.`}
        url={`https://allphaseusa.com/roof-cost-${citySlug}`}
        schemaJson={schemaJson}
      />

      <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How Much Does a Roof Cost in {cityName}, FL?
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              {cityName} roofs are typically tile, metal, or shingle systems designed to meet Florida's High Velocity Hurricane Zone (HVHZ) requirements. {coastalText} Insurance requirements and strict building codes all play a role in determining your final roof cost. Pricing depends on roof size, system type, complexity, and the code upgrades needed to protect your home.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Typical Roof Cost Ranges in {cityName}
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Every roof is unique, and pricing varies based on several factors. Our Roof Cost Estimator provides realistic ballpark ranges based on South Florida data, including material costs, labor, and code-compliant installation requirements specific to Broward and Palm Beach Counties.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                While online calculators give you a starting point, a final accurate quote requires an on-site roof and attic inspection to assess decking condition, structural issues, and compliance requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Affects Roof Pricing in {cityName}?
              </h2>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Roof size and complexity:</strong> Larger roofs and complex designs with multiple angles, valleys, or roof-to-wall connections require more materials and labor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Roof type:</strong> Shingle, tile, metal, and flat roofs each have different material costs and installation requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Underlayment and code upgrades:</strong> HVHZ-compliant underlayment, enhanced fastening patterns, and secondary water barriers add to the cost but are required by code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Roof-to-wall connections and structural issues:</strong> As a dual-licensed General Contractor and Roofing Contractor, we can identify and correct structural problems that purely roofing-only contractors may miss.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Ventilation and energy improvements:</strong> Proper attic ventilation reduces cooling costs and extends roof life, making it a smart investment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  <span><strong>Insurance and wind mitigation requirements:</strong> Installing code-compliant systems and providing a wind mitigation report at completion can help you qualify for insurance discounts.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12 bg-red-950/20 border-2 border-red-700/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-red-500" />
                Use the {cityName} Roof Cost Estimator
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Our Roof Cost Calculator is specifically tuned for Broward and Palm Beach Counties. It takes into account local material costs, labor rates, and code requirements to give you a realistic ballpark range before scheduling an on-site inspection.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                The calculator walks you through your property type, roof size, material preferences, and complexity level to provide an estimate that reflects South Florida's unique requirements.
              </p>
              <Link
                to={`/roof-cost-calculator?city=${citySlug}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-semibold rounded-lg transition-colors"
              >
                Use the Roof Cost Estimator for {cityName}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Can I get an exact roof price online for my {cityName} home?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    No, final pricing requires an on-site roof and attic inspection. Online tools provide ballpark ranges, but All Phase Construction USA performs a comprehensive inspection to verify decking condition, roof-to-wall connections, underlayment requirements, and code compliance before providing a final proposal. This ensures accuracy and eliminates surprise costs.
                  </p>
                </div>

                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Do you help with insurance and wind mitigation for {cityName} roofs?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Yes. As a dual-licensed General Contractor (CGC1526236) and Roofing Contractor (CCC1331464), we follow HVHZ code requirements and provide a wind mitigation report at completion. This report documents code-compliant features that may help you qualify for insurance savings. Most contractors do not include this service.
                  </p>
                </div>

                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    What makes All Phase Construction USA different from other {cityName} roofers?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    We are dual-licensed as both a General Contractor and Roofing Contractor, which means we can identify and correct structural issues that roofing-only contractors cannot legally address. We also perform attic inspections, not just exterior assessments, and provide wind mitigation reports at completion to help you maximize insurance savings.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Use our Roof Cost Estimator to get a ballpark range for your {cityName} roof, or contact us directly for a comprehensive inspection and detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/roof-cost-calculator?city=${citySlug}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-semibold rounded-lg transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Use Cost Estimator
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-semibold rounded-lg transition-colors border border-neutral-600"
                >
                  Call 754-227-5605
                </a>
              </div>
            </section>

            <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Learn More About Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link to="/residential-roofing" className="text-red-500 hover:text-red-400 underline">
                  Residential Roofing Services
                </Link>
                <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">
                  Commercial & HOA Roofing
                </Link>
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 underline">
                  Wind Mitigation & Insurance Savings
                </Link>
                <Link to="/financing" className="text-red-500 hover:text-red-400 underline">
                  Financing Options & Grants
                </Link>
                <Link to="/roof-types/tile" className="text-red-500 hover:text-red-400 underline">
                  Tile Roofing Systems
                </Link>
                <Link to="/roof-types/metal" className="text-red-500 hover:text-red-400 underline">
                  Metal Roofing Systems
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
