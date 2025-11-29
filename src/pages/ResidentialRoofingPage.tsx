import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Shield, Calculator, Phone, ChevronRight } from 'lucide-react';

export default function ResidentialRoofingPage() {
  const roofTypes = [
    {
      name: 'Tile Roofing',
      description: 'Premium concrete and clay tile systems with foam adhesive attachment and SWR underlayment. Perfect for South Florida aesthetics and hurricane protection.',
      href: '/roof-types/tile',
      features: ['50+ year lifespan', 'Maximum wind resistance', 'Insurance savings', 'Energy efficient']
    },
    {
      name: 'Metal Roofing',
      description: 'Standing seam and mechanically seamed metal systems. Excellent for HVHZ zones, solar-ready, and long-term performance.',
      href: '/roof-types/metal',
      features: ['Hurricane-rated', 'Solar-ready', 'Low maintenance', '50+ year warranty']
    },
    {
      name: 'Shingle Roofing',
      description: 'High-performance architectural shingles with proper underlayment and nailing patterns. Budget-friendly with strong wind ratings.',
      href: '/roof-types/shingle',
      features: ['Budget-friendly', 'Class 4 impact rated', 'Wind-rated to 130 mph', 'Wide color selection']
    },
    {
      name: 'Flat Roofing',
      description: 'TPO, modified bitumen, and IB PVC systems for additions, porches, and modern architectural homes.',
      href: '/roof-types/flat',
      features: ['Reflective surface', 'Energy savings', 'Durable membrane', 'UV resistant']
    }
  ];

  return (
    <>
      <SEO
        title="Residential Roofing – Tile, Metal, Shingle & Flat | All Phase Construction USA"
        description="Expert residential roofing for Broward and Palm Beach Counties. Tile, metal, shingle, and flat roof systems with wind mitigation. Use our Roof Cost Estimator or request a free assessment."
        canonical="/residential-roofing"
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full mb-6">
                <Home className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Residential Roofing Experts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Residential Roofing in Broward & Palm Beach Counties
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                All Phase Construction USA specializes in tile, metal, shingle, and flat roof systems for South Florida homeowners. We're dual-licensed (CGC1526236 & CCC1331464) to handle both roofing and structural upgrades that maximize wind mitigation credits and insurance savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                >
                  <Calculator className="w-5 h-5" />
                  Get Roof Cost Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roof Systems We Install
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Choose the right roof type for your South Florida home based on budget, aesthetics, and long-term performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roofTypes.map((type) => (
                <div
                  key={type.name}
                  className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-neutral-300">
                        <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={type.href}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                  >
                    Learn more about {type.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose All Phase Construction USA?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Dual-Licensed Contractor</h3>
                      <p className="text-neutral-300">
                        We hold both General Contractor (CGC1526236) and Roofing Contractor (CCC1331464) licenses, allowing us to handle structural upgrades like roof-to-wall connections that most roofers can't touch.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <Home className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Wind Mitigation Focus</h3>
                      <p className="text-neutral-300">
                        We design roof systems to maximize your insurance savings through proper underlayment, deck attachment, and roof-to-wall connections—often saving homeowners $2,500+/year.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <Calculator className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                      <p className="text-neutral-300">
                        Use our Roof Cost Calculator to get instant ballpark pricing, or schedule a free assessment for a detailed, site-specific quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Cities We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3 text-neutral-300">
                  <div>Boca Raton</div>
                  <div>Deerfield Beach</div>
                  <div>Coral Springs</div>
                  <div>Pompano Beach</div>
                  <div>Delray Beach</div>
                  <div>Fort Lauderdale</div>
                  <div>Parkland</div>
                  <div>Boynton Beach</div>
                </div>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 mt-6 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  View all service areas
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive Roof Cost Calculator to get an instant estimate, or schedule a free roof assessment with one of our licensed contractors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Get Roof Cost Estimate
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule Free Assessment
              </Link>
            </div>
            <div className="mt-8">
              <a
                href="tel:754-227-5605"
                className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
              >
                754-227-5605
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
