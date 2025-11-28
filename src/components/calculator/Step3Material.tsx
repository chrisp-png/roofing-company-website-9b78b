import { MATERIAL_CONFIG } from '../../config/materialConfig';

interface Step3Props {
  selectedMaterial: string;
  onSelect: (material: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Material({ selectedMaterial, onSelect, onNext, onBack }: Step3Props) {
  const materials = Object.keys(MATERIAL_CONFIG);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">What roofing material do you prefer?</h2>
      <p className="text-neutral-400 mb-8">Choose the material type for your new roof</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {materials.map((materialKey) => {
          const material = MATERIAL_CONFIG[materialKey];
          return (
            <button
              key={materialKey}
              onClick={() => onSelect(materialKey)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                selectedMaterial === materialKey
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
              }`}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{material.label}</h3>
              <ul className="space-y-1">
                {material.generalBenefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-neutral-400">
                    • {benefit}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
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
          disabled={!selectedMaterial}
          className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
