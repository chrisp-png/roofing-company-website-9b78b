import { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

interface FinancingEstimatorProps {
  totalProjectCost: number;
  insuranceAnnualSavings: number;
  ventilationAnnualSavings: number;
}

type CreditTier = 'excellent' | 'good' | 'fair' | 'building';

export default function FinancingEstimator({
  totalProjectCost,
  insuranceAnnualSavings,
  ventilationAnnualSavings,
}: FinancingEstimatorProps) {
  const [downPayment, setDownPayment] = useState(7500);
  const [creditTier, setCreditTier] = useState<CreditTier>('good');

  useEffect(() => {
    if (downPayment > totalProjectCost) {
      setDownPayment(totalProjectCost);
    }
  }, [downPayment, totalProjectCost]);

  const monthlyPerTenThousand: Record<CreditTier, number> = {
    excellent: 97,
    good: 110,
    fair: 123,
    building: 137,
  };

  const creditTierOptions = [
    { value: 'excellent' as CreditTier, label: 'Excellent', sublabel: '(720+)' },
    { value: 'good' as CreditTier, label: 'Good', sublabel: '(680–719)' },
    { value: 'fair' as CreditTier, label: 'Fair', sublabel: '(640–679)' },
    { value: 'building' as CreditTier, label: 'Building Credit', sublabel: '(<640)' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    const cappedValue = Math.min(Math.max(value, 0), totalProjectCost);
    setDownPayment(cappedValue);
  };

  const financedAmount = Math.max(totalProjectCost - downPayment, 0);
  const factor = monthlyPerTenThousand[creditTier];
  const estimatedMonthly = Math.round((financedAmount / 10000) * factor);

  return (
    <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/10 border-2 border-blue-500/30 rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-blue-500" />
        <h3 className="text-3xl font-bold text-white">
          Estimate Your Monthly Payment
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-black/40 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Cost Overview</h4>
            <div className="space-y-3 text-neutral-300">
              <div className="flex justify-between">
                <span>Roof Cost:</span>
                <span className="font-semibold text-white">{formatCurrency(totalProjectCost)}</span>
              </div>
              {insuranceAnnualSavings > 0 && (
                <div className="flex justify-between">
                  <span>Estimated Annual Insurance Savings:</span>
                  <span className="font-semibold text-green-400">{formatCurrency(insuranceAnnualSavings)}</span>
                </div>
              )}
              {ventilationAnnualSavings > 0 && (
                <div className="flex justify-between">
                  <span>Estimated Annual Ventilation/Energy Savings:</span>
                  <span className="font-semibold text-yellow-400">{formatCurrency(ventilationAnnualSavings)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-black/40 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Financing Details</h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="downPayment" className="block text-sm font-medium text-neutral-400 mb-2">
                  Down Payment
                </label>
                <input
                  type="number"
                  id="downPayment"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                  min={0}
                  max={totalProjectCost}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Defaulted to $7,500 – adjust this number to explore different payment options.
                </p>
              </div>

              <div className="flex justify-between text-neutral-300 pt-2">
                <span>Amount Financed:</span>
                <span className="font-semibold text-white">{formatCurrency(financedAmount)}</span>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-medium text-neutral-400 mb-3">
                  Select your credit tier (just an estimate):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {creditTierOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setCreditTier(option.value)}
                      className={`px-3 py-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        creditTier === option.value
                          ? 'border-red-500 bg-red-500/10 text-white'
                          : 'border-neutral-700 bg-black/40 text-neutral-300 hover:border-neutral-600'
                      }`}
                    >
                      <div className="font-semibold text-sm">{option.label}</div>
                      <div className="text-xs text-neutral-400">{option.sublabel}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/50 rounded-xl p-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-neutral-400 mb-2">
            Estimated Monthly Payment (based on ~60 months and your selected credit tier)
          </p>
          <p className="text-4xl font-bold text-blue-400 mb-3">
            {formatCurrency(estimatedMonthly)}
            <span className="text-xl text-neutral-400"> / month</span>
          </p>
          <p className="text-sm text-neutral-300">
            Most customers fall between approximately $97–$137 per month for every $10,000 financed, depending on credit and program.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700 mb-4">
        <p className="text-xs text-neutral-400 leading-relaxed">
          <span className="font-semibold text-neutral-300">Disclaimer:</span> This tool is for illustration purposes only and does not constitute a financing offer or commitment to lend. Actual payment amounts, interest rates, and terms are provided by third-party lenders and will vary based on credit approval, loan amount, term length, and other factors. Longer-term options may be available; your All Phase representative can review financing programs with you in person. Your actual rate and payment will be determined by the lender; your All Phase representative can review available programs and longer terms with you at your home.
        </p>
      </div>

      <div className="text-center text-neutral-300 leading-relaxed">
        <p>
          Once most homeowners see how small the monthly difference is, they often choose to upgrade to a better roof system with enhanced waterproofing, ventilation, or higher-wind materials.
        </p>
      </div>
    </div>
  );
}
