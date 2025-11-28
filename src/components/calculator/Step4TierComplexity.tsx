import { MATERIAL_CONFIG, COMPLEXITY_LEVELS } from '../../config/materialConfig';

interface Step4Props {
  material: string;
  selectedTier: string;
  selectedComplexity: number;
  onSelectTier: (tier: string) => void;
  onSelectComplexity: (complexity: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step4TierComplexity({
  material,
  selectedTier,
  selectedComplexity,
  onSelectTier,
  onSelectComplexity,
  onNext,
  onBack,
}: Step4Props) {
  const tiers = MATERIAL_CONFIG[material]?.tiers || {};
  const tierKeys = Object.keys(tiers);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Choose your quality tier</h2>
      <p className="text-neutral-400 mb-8">Select the quality level and roof complexity</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Quality Tier</h3>
        <div className="grid grid-cols-1 gap-4">
          {tierKeys.map((tierKey) => {
            const tier = tiers[tierKey];
            return (
              <button
                key={tierKey}
                onClick={() => onSelectTier(tierKey)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedTier === tierKey
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white">{tier.label}</h4>
                  <span className="text-sm text-red-500 font-medium">
                    ${tier.priceMin}–${tier.priceMax}/sq ft
                  </span>
                </div>
                <p className="text-sm text-neutral-400">{tier.description}</p>
              </button>
            );
          })}
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
