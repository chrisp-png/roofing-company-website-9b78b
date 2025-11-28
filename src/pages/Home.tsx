import SEO from '../components/SEO';
import Schema from '../components/Schema';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ServiceAreas from '../components/ServiceAreas';
import RoofCalculator from '../components/RoofCalculator';
import Financing from '../components/Financing';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'All Phase Construction USA, LLC',
    image: 'https://www.allphaseusa.com/logo.png',
    '@id': 'https://www.allphaseusa.com',
    url: 'https://www.allphaseusa.com',
    telephone: '+1-754-227-5605',
    email: 'info@allphaseusa.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.3184,
      longitude: -80.0998
    },
    areaServed: [
      { '@type': 'City', name: 'Boca Raton' },
      { '@type': 'City', name: 'Delray Beach' },
      { '@type': 'City', name: 'Boynton Beach' },
      { '@type': 'City', name: 'West Palm Beach' },
      { '@type': 'City', name: 'Fort Lauderdale' },
      { '@type': 'City', name: 'Pompano Beach' },
      { '@type': 'City', name: 'Deerfield Beach' },
      { '@type': 'City', name: 'Coral Springs' },
      { '@type': 'City', name: 'Parkland' },
      { '@type': 'City', name: 'Coconut Creek' }
    ],
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],
    sameAs: []
  };

  return (
    <>
      <SEO
        title="All Phase Construction USA | Licensed Roofing Contractor Broward & Palm Beach"
        description="Dual-licensed General Contractor & Roofing Contractor serving Broward and Palm Beach Counties. 25+ years experience. CGC1526236, CCC1331464. Free roof inspections."
        canonical="https://www.allphaseusa.com/"
      />
      <Schema schema={schema} />

      <Hero />

      <section className="py-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-sm text-neutral-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">5,000+</div>
              <div className="text-sm text-neutral-400">Roofs Installed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">A+</div>
              <div className="text-sm text-neutral-400">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">$2M</div>
              <div className="text-sm text-neutral-400">Liability Insurance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-gradient-to-r from-red-900/30 to-red-700/30 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-white font-medium">
            LIMITED TIME: Only 12 Installation Slots Left This Month • Lock In 2025 Pricing Before January 31st
          </p>
        </div>
      </section>

      <Services />

      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              See our completed roofing projects across South Florida
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="py-20 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-green-900/20 to-green-700/20 border border-green-500/30 p-8 md:p-12">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Save $500 – $6,500/Year on Insurance
              </h2>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                Wind mitigation upgrades and compliant roof installations can significantly reduce your Florida homeowners insurance premiums.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-neutral-300">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span>Free wind mitigation inspection with roof replacement</span>
                </li>
                <li className="flex items-start text-neutral-300">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span>Form 1802 completion and filing</span>
                </li>
                <li className="flex items-start text-neutral-300">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span>Hurricane strap retrofits and roof-to-wall connections</span>
                </li>
                <li className="flex items-start text-neutral-300">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span>HVHZ code compliance</span>
                </li>
              </ul>
              <a
                href="/wind-mitigation"
                className="inline-block px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-500 transition-colors duration-200"
              >
                Learn About Wind Mitigation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="calculator" className="border-b border-neutral-800 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roof Cost Calculator
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Get an instant ballpark estimate for your roof replacement project
            </p>
          </div>
          <RoofCalculator />
        </div>
      </section>

      <About />

      <section id="financing" className="py-20 bg-black border-b border-neutral-800">
        <div className="text-white">
          <Financing />
        </div>
      </section>

      <ServiceAreas />

      <Contact />
    </>
  );
}
