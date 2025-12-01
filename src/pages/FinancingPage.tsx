import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Home,
  Building2,
  DollarSign,
  FileText,
  CheckCircle,
  Calculator,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function FinancingPage() {
  const grantPrograms = [
    {
      icon: Home,
      title: 'My Safe Florida Home (MSFH)',
      amount: 'Up to $10,000',
      description: 'State-funded grant program for eligible single-family homeowners to make wind mitigation improvements.',
      eligibility: [
        'Florida homeowner with single-family residence',
        'Home built before 2009',
        'Primary residence with homeowners insurance',
        'Must complete free home inspection',
        'Grant covers qualifying wind mitigation upgrades',
      ],
      highlight: 'All Phase Construction USA is an approved MSFH contractor',
    },
    {
      icon: Building2,
      title: 'My Safe Florida Condo (MSFC)',
      amount: '$1,000 per unit (up to 50% of contract)',
      description: 'Pilot program specifically designed for condominium associations and HOAs to strengthen their buildings.',
      eligibility: [
        'Florida condominium associations and HOAs',
        'Buildings constructed before specific dates',
        'Must meet program requirements',
        'Covers wind mitigation and structural improvements',
        'Significant savings for multi-unit buildings',
      ],
      highlight: 'All Phase Construction USA is approved for MSFC projects',
    },
  ];

  const lenders = [
    {
      name: 'Service Finance',
      features: [
        'Preferred financing partner',
        'Flexible payment terms up to 144 months',
        'Zero down payment options available',
        'Fast approval process with competitive rates',
      ],
      featured: true,
    },
    {
      name: 'GreenSky',
      features: [
        'Flexible payment terms up to 120 months',
        'Zero down payment options available',
        'Same-as-cash promotional periods',
        'Quick online application and approval',
      ],
    },
    {
      name: 'Dividend',
      features: [
        'Competitive interest rates',
        'Multiple term options',
        'No prepayment penalties',
        'Fast credit decision process',
      ],
    },
    {
      name: 'Fortifi',
      features: [
        'Low monthly payment plans',
        'Flexible credit requirements',
        'Online account management',
        'Dedicated customer support',
      ],
    },
    {
      name: 'Sunlight Financial',
      features: [
        'Home improvement financing specialists',
        'Zero-down payment options',
        'Fixed-rate financing',
        'Simple application process',
      ],
    },
  ];

  const insurancePoints = [
    {
      icon: FileText,
      title: 'Storm Damage Claims',
      description: 'Wind, hail, and hurricane damage may be covered by your homeowners insurance policy. We provide detailed documentation for your claim.',
    },
    {
      icon: CheckCircle,
      title: 'Inspection & Documentation',
      description: 'Our team works with insurance adjusters to document roof damage and provide accurate scope of work for your claim.',
    },
    {
      icon: TrendingUp,
      title: 'Claim Assistance',
      description: 'We help you navigate the insurance claim process, including photos, reports, and material specifications required by carriers.',
    },
    {
      icon: ShieldCheck,
      title: 'Code Upgrade Coverage',
      description: 'Many policies include code upgrade coverage that can offset the cost of required wind mitigation improvements during replacement.',
    },
  ];

  const comparisonData = [
    {
      category: 'Best For',
      grants: 'Homeowners seeking free money for qualifying upgrades',
      loans: 'Homeowners who need immediate financing with flexible terms',
    },
    {
      category: 'Repayment',
      grants: 'No repayment required (free grant money)',
      loans: 'Monthly payments over 12-120 months',
    },
    {
      category: 'Timeline',
      grants: 'Application and approval process may take several weeks',
      loans: 'Fast approval, often within 24-48 hours',
    },
    {
      category: 'Property Type',
      grants: 'MSFH for homes, MSFC for condos/HOAs',
      loans: 'Available for all residential property types',
    },
  ];

  return (
    <>
      <SEO
        title="Roof Financing & Grants | All Phase Construction USA"
        description="Roof financing options for Broward and Palm Beach Counties. My Safe Florida Home grants, zero-down loans, and insurance claim assistance. Use our Roof Cost Estimator to get started."
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Roof Financing Options for South Florida Homeowners
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                All Phase Construction USA helps homeowners and associations in Broward and Palm Beach
                Counties find the best financing or grant options for{' '}
                <Link to="/residential-roofing" className="text-red-500 hover:text-red-400 underline">
                  residential
                </Link>{' '}
                and{' '}
                <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">
                  commercial
                </Link>{' '}
                roof replacements, including state grant programs and traditional financing solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Florida State Grant Programs
            </h2>
            <p className="text-neutral-400 text-center mb-12 max-w-3xl mx-auto">
              Take advantage of state-funded programs designed to help Florida residents strengthen
              their homes against hurricanes
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {grantPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div
                    key={index}
                    className="bg-black border-2 border-red-500/30 rounded-2xl p-8 hover:border-red-500 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                        <div className="inline-block px-4 py-2 bg-red-600 rounded-lg">
                          <p className="text-white font-semibold">{program.amount}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-300 leading-relaxed mb-6">{program.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Eligibility Requirements:</h4>
                      <ul className="space-y-2">
                        {program.eligibility.map((item, idx) => (
                          <li key={idx} className="text-neutral-300 flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-500 font-semibold">{program.highlight}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-300 mb-6">
                These grant programs can significantly offset the cost of{' '}
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 underline">
                  wind mitigation upgrades
                </Link>{' '}
                and roof replacements.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
              >
                Learn More About Grant Programs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Traditional Financing Options
            </h2>
            <p className="text-neutral-400 text-center mb-12 max-w-3xl mx-auto">
              Flexible payment plans with zero-down options and competitive rates from trusted lenders
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {lenders.map((lender, index) => (
                <div
                  key={index}
                  className={`bg-neutral-950 rounded-2xl p-8 transition-all duration-300 ${
                    lender.featured
                      ? 'border-2 border-red-500 ring-2 ring-red-500/20'
                      : 'border border-neutral-800 hover:border-red-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <DollarSign className="w-8 h-8 text-red-500" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{lender.name}</h3>
                      {lender.featured && (
                        <span className="inline-block mt-1 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                          PREFERRED PARTNER
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {lender.features.map((feature, idx) => (
                      <li key={idx} className="text-neutral-300 flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Why Choose Financing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Start Immediately</h4>
                  <p className="text-sm text-neutral-400">
                    Don't wait to save up—protect your home now with zero down
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Flexible Terms</h4>
                  <p className="text-sm text-neutral-400">
                    Choose payment plans that fit your budget and timeline
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Predictable Payments</h4>
                  <p className="text-sm text-neutral-400">
                    Fixed monthly payments make budgeting simple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Insurance-Driven Replacement
            </h2>
            <p className="text-neutral-400 text-center mb-12 max-w-3xl mx-auto">
              When storm damage occurs, your homeowners insurance may cover part or all of your roof replacement
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insurancePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-black border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Common Covered Damage Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-500 mb-3">Hurricane & Wind Damage</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Missing or damaged shingles/tiles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Roof structure damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Water intrusion from wind-driven rain</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-500 mb-3">Hail & Storm Damage</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Impact damage to roof surface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Cracked or broken tiles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Compromised roof integrity</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-neutral-400 mt-6 italic">
                Note: Coverage varies by policy. All Phase Construction USA works with your adjuster
                to document damage and provide accurate estimates for insurance claims.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Which Option Is Right for You?
            </h2>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-red-500">
                    <th className="text-left py-4 px-6 text-white font-semibold">Factor</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Grants</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Loans</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-800 hover:bg-neutral-950 transition-colors"
                    >
                      <td className="py-4 px-6 text-red-500 font-semibold">{row.category}</td>
                      <td className="py-4 px-6 text-neutral-300">{row.grants}</td>
                      <td className="py-4 px-6 text-neutral-300">{row.loans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Can't Decide? We Can Help!
              </h3>
              <p className="text-neutral-300 text-center mb-6 leading-relaxed">
                Our team will review your specific situation and recommend the best financing option
                for your property type, timeline, and budget. We handle all the paperwork and make
                the process as simple as possible.
              </p>
              <div className="text-center">
                <Link
                  to="/roof-cost-calculator"
                  className="text-red-500 hover:text-red-400 underline font-semibold"
                >
                  Start with our Roof Cost Calculator
                </Link>{' '}
                to get an estimate, then we'll discuss financing options during your consultation.
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-neutral-950 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Help Choosing the Best Financing Option
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              Schedule a free consultation or use our calculator to see what your project might cost
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Try the Roof Cost Calculator
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
