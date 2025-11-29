import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Building2, Shield, Phone, FileText, Check, AlertCircle } from 'lucide-react';

export default function CommercialRoofingPage() {
  const services = [
    {
      title: 'Flat Roof Systems',
      description: 'TPO, modified bitumen, and IB PVC assemblies for commercial buildings, condos, and HOA properties.',
      features: ['Energy-efficient', 'Long-lasting', 'Low maintenance', 'Reflective surfaces']
    },
    {
      title: 'Tile Roof Systems',
      description: 'Concrete and clay tile installations for multi-family residential buildings and HOA communities.',
      features: ['Aesthetic appeal', 'Hurricane-rated', 'Fire resistant', 'Long lifespan']
    },
    {
      title: 'Metal Roof Systems',
      description: 'Standing seam and mechanically seamed metal roofs for commercial and industrial applications.',
      features: ['Superior wind resistance', 'Solar-ready', 'Minimal maintenance', 'Energy savings']
    },
    {
      title: 'Structural Upgrades',
      description: 'Roof-to-wall connections, load-path improvements, and code compliance work.',
      features: ['Licensed GC work', 'Wind mitigation', 'Code compliance', 'Insurance requirements']
    }
  ];

  return (
    <>
      <SEO
        title="Commercial & HOA Roofing | All Phase Construction USA – Broward & Palm Beach"
        description="Commercial and HOA roofing for Broward and Palm Beach Counties. Flat roofs, tile systems, metal roofs. Dual-licensed for structural work. Serving condos, associations, and businesses."
        canonical="/commercial-roofing"
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Commercial & HOA Roofing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Commercial & HOA Roofing in South Florida
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                All Phase Construction USA specializes in flat roofs, tile systems, and metal assemblies for commercial buildings, condos, and HOA properties throughout Broward and Palm Beach Counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                >
                  <FileText className="w-5 h-5" />
                  Request Commercial Inspection
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call 754-227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-700/10 border-2 border-yellow-500/30 rounded-2xl p-8">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">On-Site Inspection Required</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Commercial and HOA roofs typically require an on-site inspection to assess existing conditions, structural requirements, drainage, access, and association-specific considerations. Please contact us to schedule a free commercial roof assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Commercial & HOA Roofing Services
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                We provide comprehensive roofing solutions for commercial properties, multi-family buildings, and homeowner associations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-neutral-300">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  Why HOAs and Commercial Property Managers Choose Us
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
                        We hold both General Contractor (CGC1526236) and Roofing Contractor (CCC1331464) licenses. This allows us to handle structural work including roof-to-wall connections, load-path improvements, and code compliance work that most roofing contractors are not licensed to perform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">HOA Experience</h3>
                      <p className="text-neutral-300">
                        We understand association requirements, board approvals, resident communications, and the importance of minimizing disruption to occupied buildings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Detailed Documentation</h3>
                      <p className="text-neutral-300">
                        We provide comprehensive photo documentation, material certifications, engineering approvals, and wind mitigation reports required by insurance carriers and association boards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Responsive Communication</h3>
                      <p className="text-neutral-300">
                        We provide direct access to licensed contractors and project managers who understand the urgency and complexity of commercial and HOA roofing projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Types of Properties We Serve
                  </h3>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Condominium Buildings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Homeowner Associations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Multi-Family Residential</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Commercial Buildings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Retail Centers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Office Buildings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Industrial Facilities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black border border-neutral-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Service Areas
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    We serve commercial and HOA properties throughout Broward and Palm Beach Counties, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-neutral-400">
                    <div>Boca Raton</div>
                    <div>Fort Lauderdale</div>
                    <div>Delray Beach</div>
                    <div>Pompano Beach</div>
                    <div>Deerfield Beach</div>
                    <div>Coral Springs</div>
                    <div>Boynton Beach</div>
                    <div>Plantation</div>
                  </div>
                  <Link
                    to="/service-areas"
                    className="inline-block mt-4 text-red-500 hover:text-red-400 font-semibold transition-colors"
                  >
                    View all service areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule a Commercial Roof Inspection
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Commercial and HOA roofs require an on-site inspection to provide accurate pricing and assess structural requirements. Contact us today to schedule your free inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <FileText className="w-5 h-5" />
                Request Commercial Inspection
              </Link>
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call 754-227-5605
              </a>
            </div>
            <div className="mt-8">
              <p className="text-neutral-400 text-sm">
                Licensed General Contractor (CGC1526236) • Licensed Roofing Contractor (CCC1331464)
              </p>
            </div>
          </div>
        </section>

        <AuthorityGroup />
      </div>
    </>
  );
}
