import { MATERIAL_CONFIG, COMPLEXITY_LEVELS } from '../../config/materialConfig';

interface Step4Props {
  material: string;
  selectedTier: string;
  selectedComplexity: number;
  onSelectTier: (tier: string) => void;
  onSelectMaterial: (material: string) => void;
  onSelectComplexity: (complexity: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const dollarSignMap: { [key: string]: string } = {
  good: '$',
  better: '$$',
  best: '$$$',
  premium: '$$$$',
};

const roofTypeDescriptions: { [key: string]: { [tier: string]: string } } = {
  shingle: {
    good: 'Most budget-friendly system that meets code for South Florida.',
    better: 'Upgraded underlayment and better components for stronger performance.',
    best: 'Premium shingles with superior wind and impact resistance.',
    premium: 'Top-tier designer shingles with maximum performance and aesthetics.',
  },
  tile: {
    good: 'Standard concrete tile with mechanical attachment.',
    better: 'Concrete tile with foam adhesive for superior wind resistance.',
    best: 'Premium system with SWR underlayment for maximum protection.',
    premium: 'Authentic clay or premium composite for ultimate durability and appeal.',
  },
  metal: {
    good: 'Basic metal roofing with exposed fasteners.',
    better: 'Strong hurricane performance with excellent longevity and curb appeal.',
    best: 'Top-tier mechanically seamed metal designed for HVHZ and future solar.',
    premium: 'Designer architectural metal with custom profiles and lifetime warranty.',
  },
  flat: {
    good: 'Standard single-ply membrane system meeting code requirements.',
    better: 'Enhanced membrane with improved insulation and energy efficiency.',
    best: 'High-performance system with superior wind uplift ratings.',
    premium: 'Top-tier PVC or specialty membrane with maximum longevity.',
  },
};

export default function Step4TierComplexity({
  material,
  selectedTier,
  selectedComplexity,
  onSelectTier,
  onSelectMaterial,
  onSelectComplexity,
  onNext,
  onBack,
}: Step4Props) {
  const roofTypes = ['shingle', 'tile', 'metal', 'flat'];
  const tierOrder = ['good', 'better', 'best', 'premium'];

  const handleCellClick = (roofType: string, tier: string) => {
    onSelectMaterial(roofType);
    onSelectTier(tier);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Choose Your Roof System & Quality Level</h2>
      <p className="text-neutral-400 mb-8">
        Select the roof type and quality tier that best fits your needs and budget
      </p>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roofTypes.map((roofType) => {
            const config = MATERIAL_CONFIG[roofType];
            if (!config) return null;

            return (
              <div key={roofType} className="space-y-3">
                <h3 className="text-lg font-bold text-white text-center pb-2 border-b border-neutral-700">
                  {config.label}
                </h3>
                {tierOrder.map((tier) => {
                  const tierConfig = config.tiers[tier];
                  if (!tierConfig) return null;

                  const isSelected = material === roofType && selectedTier === tier;
                  const dollarSigns = dollarSignMap[tier] || '';
                  const description = roofTypeDescriptions[roofType]?.[tier] || tierConfig.description;

                  return (
                    <button
                      key={tier}
                      onClick={() => handleCellClick(roofType, tier)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-red-500 bg-red-500/10'
                          : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-white capitalize">{tier}</span>
                        <span className="text-lg font-bold text-red-500">{dollarSigns}</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed">{description}</p>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-neutral-900 border border-neutral-700 rounded-xl">
          <p className="text-sm text-neutral-400 text-center">
            <strong className="text-white">Dollar signs ($–$$$$)</strong> represent relative cost, not actual pricing.
            Your final estimate will be shown after you provide your contact details.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Roof Complexity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMPLEXITY_LEVELS.map((level) => (
            <button
              key={level.value}
              onClick={() => onSelectComplexity(level.value)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                selectedComplexity === level.value
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">{level.label}</h4>
              <p className="text-sm text-neutral-400">{level.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedTier || !selectedComplexity}
          className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Estimate
        </button>
      </div>
    </div>
  );
}
