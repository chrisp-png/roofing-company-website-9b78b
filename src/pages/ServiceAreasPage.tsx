import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { MapPin, Calculator, Shield, CheckCircle } from 'lucide-react';

const allRoofCostCities = [
  { name: 'Boca Raton', slug: 'boca-raton', county: 'Palm Beach' },
  { name: 'Deerfield Beach', slug: 'deerfield-beach', county: 'Broward' },
  { name: 'Pompano Beach', slug: 'pompano-beach', county: 'Broward' },
  { name: 'Lighthouse Point', slug: 'lighthouse-point', county: 'Broward' },
  { name: 'Highland Beach', slug: 'highland-beach', county: 'Palm Beach' },
  { name: 'Delray Beach', slug: 'delray-beach', county: 'Palm Beach' },
  { name: 'Boynton Beach', slug: 'boynton-beach', county: 'Palm Beach' },
  { name: 'Lake Worth Beach', slug: 'lake-worth-beach', county: 'Palm Beach' },
  { name: 'West Palm Beach', slug: 'west-palm-beach', county: 'Palm Beach' },
  { name: 'Coral Springs', slug: 'coral-springs', county: 'Broward' },
  { name: 'Coconut Creek', slug: 'coconut-creek', county: 'Broward' },
  { name: 'Parkland', slug: 'parkland', county: 'Broward' },
  { name: 'Margate', slug: 'margate', county: 'Broward' },
  { name: 'Tamarac', slug: 'tamarac', county: 'Broward' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale', county: 'Broward' },
  { name: 'Wilton Manors', slug: 'wilton-manors', county: 'Broward' },
  { name: 'Oakland Park', slug: 'oakland-park', county: 'Broward' },
  { name: 'Sunrise', slug: 'sunrise', county: 'Broward' },
  { name: 'Plantation', slug: 'plantation', county: 'Broward' },
  { name: 'Hollywood', slug: 'hollywood', county: 'Broward' },
];

export default function ServiceAreasPage() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Service Area Coverage",
    "provider": {
      "@type": "RoofingContractor",
      "name": "All Phase Construction USA, LLC",
      "telephone": "754-227-5605"
    },
    "areaServed": [
      "Broward County, FL",
      "Palm Beach County, FL"
    ],
    "description": "Roofing services provided across Broward and Palm Beach counties including 20+ cities with city-specific roof cost guides."
  };

  return (
    <>
      <SEO
        title="Roofing Service Areas | Broward & Palm Beach Counties | All Phase Construction USA"
        description="View all roofing service areas in Broward & Palm Beach Counties. Explore roof cost guides for each city and use our Roof Cost Calculator built for South Florida homeowners."
        schemaJson={schemaJson}
      />

      <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Service Areas in Broward & Palm Beach Counties
            </h1>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              All Phase Construction USA provides expert roofing services throughout Broward and Palm Beach Counties. We are dual-licensed as both a General Contractor (CGC1526236) and Roofing Contractor (CCC1331464), ensuring HVHZ code compliance on every project. We specialize in tile, metal, shingle, and flat roofing systems, plus insurance-driven roof replacements with wind mitigation documentation. Our Roof Cost Calculator works for every city below.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roof Cost Guides by City
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Explore detailed roof cost information, typical pricing ranges, and local insights for each city we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allRoofCostCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/roof-cost/${city.slug}`}
                  className="bg-neutral-900 border border-neutral-700 hover:border-red-500 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {city.name}, FL
                    </h3>
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  </div>
                  <p className="text-neutral-400 text-sm mb-3">
                    {city.county} County
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    See typical roof costs and get a free estimate in {city.name}.
                  </p>
                  <div className="mt-4 flex items-center text-red-500 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>View Cost Guide</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Roof Cost Estimate for Your City
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Our Roof Cost Calculator provides realistic estimates based on South Florida pricing, materials, and code requirements. Get your ballpark range in minutes.
            </p>

            <Link
              to="/roof-cost-calculator"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-500 text-white text-xl font-bold rounded-xl transition-colors shadow-lg shadow-red-900/50"
            >
              <Calculator className="w-6 h-6" />
              Use the Roof Cost Calculator
            </Link>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-neutral-300 text-left">
                  We provide complimentary roof inspections
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-neutral-300 text-left">
                  We include a wind mitigation report upon completion
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-neutral-300 text-left">
                  We help homeowners maximize insurance savings with code upgrades
                </p>
              </div>
            </div>
          </div>

          <AuthorityGroup />
        </div>
      </div>
    </>
  );
}
