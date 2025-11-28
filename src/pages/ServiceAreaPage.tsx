import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { MATERIAL_CONFIG } from '../config/materialConfig';

interface ServiceAreaPageProps {
  cityName: string;
  slug: string;
  metaDescription?: string;
}

export default function ServiceAreaPage({ cityName, slug, metaDescription }: ServiceAreaPageProps) {
  const defaultMetaDescription = `Wondering how much a roof costs in ${cityName}, FL? See Good / Better / Best / Premium roof pricing ranges for shingle, tile, metal, and flat roofs, then get a custom estimate from All Phase Construction USA.`;

  const calculateRoofRange = (materialKey: string, tierKey: string, avgSqFt = 2500) => {
    const tier = MATERIAL_CONFIG[materialKey]?.tiers[tierKey];
    if (!tier) return { low: 0, high: 0 };
    return {
      low: Math.round(tier.priceMin * avgSqFt),
      high: Math.round(tier.priceMax * avgSqFt),
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const materials = [
    { key: 'shingle', label: 'Asphalt Shingle' },
    { key: 'tile', label: 'Concrete/Clay Tile' },
    { key: 'metal', label: 'Metal Roofing' },
    { key: 'flat', label: 'Flat Roof (TPO/PVC)' },
  ];

  const tiers = [
    { key: 'good', label: 'Good' },
    { key: 'better', label: 'Better' },
    { key: 'best', label: 'Best' },
    { key: 'premium', label: 'Premium' },
  ];

  return (
    <>
      <SEO
        title={`How Much Does a Roof Cost in ${cityName}, FL? | All Phase Construction USA`}
        description={metaDescription || defaultMetaDescription}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Much Does a Roof Cost in {cityName}, FL?
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
              Roof costs in {cityName} depend on several factors including roof type, size and complexity,
              materials and attachment method, and code upgrades for wind mitigation. This page provides
              ballpark pricing ranges, but for a more precise estimate, use our{' '}
              <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">
                Roof Cost Calculator
              </Link>{' '}
              or schedule a free on-site inspection.
            </p>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {cityName} Roof Pricing Overview
            </h2>
            <p className="text-neutral-400 text-center mb-12 max-w-3xl mx-auto">
              Typical full replacement ranges for a 2,500 sq ft roof in {cityName}. Your actual cost
              will vary based on your specific roof size, complexity, and selected materials.
            </p>

            <div className="space-y-8">
              {materials.map((material) => {
                const materialConfig = MATERIAL_CONFIG[material.key];
                return (
                  <div key={material.key} className="bg-black border border-neutral-800 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-red-500 mb-6">{material.label}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tiers.map((tier) => {
                        const range = calculateRoofRange(material.key, tier.key);
                        const tierConfig = materialConfig.tiers[tier.key];
                        return (
                          <div
                            key={tier.key}
                            className="bg-neutral-900 border border-neutral-700 rounded-xl p-5"
                          >
                            <h4 className="text-lg font-semibold text-white mb-2">{tier.label}</h4>
                            <p className="text-2xl font-bold text-red-500 mb-2">
                              {formatCurrency(range.low)} – {formatCurrency(range.high)}
                            </p>
                            <p className="text-sm text-neutral-400">{tierConfig.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
              >
                Calculate Your Exact Cost
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What Drives Roof Cost in {cityName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">HVHZ Building Code Requirements</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {cityName} is in the High-Velocity Hurricane Zone (HVHZ), requiring enhanced attachment
                  methods, upgraded underlayment, and secondary water resistance to meet code.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Underlayment Type & Code Upgrades</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Premium synthetic underlayment and additional protective layers add to material costs
                  but provide superior protection and long-term value.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Attachment Methods</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Traditional nails vs foam adhesive for tile, exposed fastener vs standing seam for metal,
                  and mechanically attached vs fully adhered systems all impact pricing significantly.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Access & Complexity</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Roof pitch, number of penetrations, valleys, chimneys, and overall design complexity
                  affect labor requirements and total project cost.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Insurance & Wind Mitigation</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Upgrading to code-compliant attachment and completing a{' '}
                  <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 underline">
                    wind mitigation inspection
                  </Link>{' '}
                  can reduce your homeowners insurance by $500–$6,500 annually.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Material Selection</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Choice between shingle, tile, metal, or flat roofing systems, along with the specific
                  product tier and warranty level, significantly impacts total investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Choose All Phase Construction USA in {cityName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dual-Licensed Contractor</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Both General Contractor (CGC1526236) and Roofing Contractor (CCC1331464) licenses
                    mean we handle every aspect of your project in-house.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Extensive {cityName} Experience</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    We've completed hundreds of{' '}
                    <Link to="/residential-roofing" className="text-red-500 hover:text-red-400 underline">
                      residential
                    </Link>{' '}
                    and{' '}
                    <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">
                      commercial
                    </Link>{' '}
                    roofing projects throughout {cityName} and surrounding communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Local Permitting Expertise</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Familiar with {cityName} building inspectors and permitting processes, ensuring
                    smooth project approval and timely completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Insurance Savings Assistance</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    We coordinate wind mitigation inspections and help you maximize insurance discounts
                    on every qualifying project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    25+ years in business, 5,000+ roofs installed, A+ BBB rating, and $2M liability
                    insurance for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Services</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    From emergency repairs to full replacements, HOA projects to single-family homes,
                    we handle all roofing needs in {cityName}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-black to-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See What YOUR {cityName} Roof Will Cost?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              Get an instant estimate with our calculator or schedule a free on-site assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Use the Roof Cost Calculator
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                Schedule a Free Roof Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
