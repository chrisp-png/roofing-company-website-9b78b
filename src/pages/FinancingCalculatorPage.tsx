import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const creditTiers = [
  { label: 'Excellent (750+)', rate: 95, value: 'excellent' },
  { label: 'Good (700-749)', rate: 110, value: 'good' },
  { label: 'Fair (650-699)', rate: 125, value: 'fair' },
  { label: 'Building Credit (<650)', rate: 135, value: 'building' },
];

export default function FinancingCalculatorPage() {
  const [searchParams] = useSearchParams();
  const estimateParam = searchParams.get('estimate');

  const [roofCost, setRoofCost] = useState(estimateParam ? parseInt(estimateParam) : 35000);
  const [downPayment, setDownPayment] = useState(0);
  const [selectedCredit, setSelectedCredit] = useState('good');

  useEffect(() => {
    if (estimateParam) {
      setRoofCost(parseInt(estimateParam));
    }
  }, [estimateParam]);

  const creditTier = creditTiers.find(t => t.value === selectedCredit) || creditTiers[1];
  const amountToFinance = Math.max(0, roofCost - downPayment);
  const estimatedMonthly = Math.round((amountToFinance / 10000) * creditTier.rate);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      <SEO
        title="Roof Financing Calculator - Explore Monthly Payment Options | All Phase Construction USA"
        description="Estimate your monthly roof financing payments with our calculator. See affordable payment options for your new roof in South Florida."
      />

      <div className="min-h-screen bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Your Monthly Payment Options
            </h1>
            <p className="text-xl text-neutral-300">
              See how affordable your new roof can be with flexible financing
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-neutral-400 mb-3">
                  Total Roof Cost
                </label>
                <input
                  type="number"
                  value={roofCost}
                  onChange={(e) => setRoofCost(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white text-lg focus:outline-none focus:border-red-500"
                  step="1000"
                  min="0"
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Enter the estimated cost from your roof quote
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-400 mb-3">
                  Down Payment (Optional)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white text-lg focus:outline-none focus:border-red-500"
                  step="500"
                  min="0"
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Default: $0 (100% financing available)
                </p>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-neutral-400 mb-3">
                Your Credit Tier
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {creditTiers.map((tier) => (
                  <button
                    key={tier.value}
                    onClick={() => setSelectedCredit(tier.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedCredit === tier.value
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                    }`}
                  >
                    <h4 className="text-base font-semibold text-white mb-1">{tier.label}</h4>
                    <p className="text-sm text-neutral-400">~${tier.rate} per $10,000 financed</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Your Estimated Monthly Payment
              </h3>

              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-red-500 mb-2">
                  {formatCurrency(estimatedMonthly)}
                </div>
                <p className="text-neutral-400">per month (estimated)</p>
                <p className="text-sm text-neutral-500 mt-2">Based on 60-month term</p>
              </div>

              <div className="bg-black/40 rounded-xl p-6 space-y-3">
                <div className="flex justify-between text-neutral-300">
                  <span>Total Roof Cost:</span>
                  <span className="font-semibold text-white">{formatCurrency(roofCost)}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Down Payment:</span>
                  <span className="font-semibold text-white">-{formatCurrency(downPayment)}</span>
                </div>
                <div className="border-t border-neutral-700 pt-3 flex justify-between">
                  <span className="font-semibold text-white">Amount to Finance:</span>
                  <span className="font-bold text-red-500 text-lg">{formatCurrency(amountToFinance)}</span>
                </div>
                <div className="flex justify-between text-neutral-300 text-sm">
                  <span>Credit Tier Rate:</span>
                  <span>{creditTier.label} (~${creditTier.rate} per $10K)</span>
                </div>
              </div>

              <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-300 text-sm text-center">
                  <strong>Good news:</strong> You may qualify for longer terms (up to 20 years) which can significantly lower your monthly payment. Discuss term options with our financing coordinator during your inspection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border-2 border-yellow-600/50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">
              Important Disclaimers
            </h3>
            <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">These figures are ESTIMATES ONLY</strong> and are provided for informational purposes. This calculator uses simplified approximations and does not represent an actual loan offer.
              </p>
              <p>
                <strong className="text-white">Not a Loan Offer:</strong> All Phase Construction USA is not a lender. Actual financing terms, rates, monthly payments, and approval are determined by third-party lenders and depend on multiple factors including but not limited to: credit score, income verification, debt-to-income ratio, loan term, program type, and lender policies.
              </p>
              <p>
                <strong className="text-white">Rates Vary Significantly:</strong> Actual APRs and monthly payments may be significantly higher or lower than estimates shown here. Final terms will be provided by the lender upon credit approval.
              </p>
              <p>
                <strong className="text-white">Professional Guidance Required:</strong> We strongly recommend speaking with our financing coordinator during your on-site inspection to discuss specific programs, current rates, and options tailored to your financial situation.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ready to Move Forward?
            </h3>
            <p className="text-neutral-300 text-center mb-6">
              Schedule your official roof & attic inspection to get accurate pricing and discuss real financing options with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7542275605"
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-colors text-center"
              >
                Call Now: 754-227-5605
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors text-center"
              >
                Schedule Your Inspection
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/roof-calculator"
              className="text-red-500 hover:text-red-400 underline"
            >
              ← Back to Roof Cost Calculator
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
