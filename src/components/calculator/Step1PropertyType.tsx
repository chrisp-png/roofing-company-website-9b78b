import { PROPERTY_TYPES } from '../../config/materialConfig';

interface Step1Props {
  selectedType: string;
  onSelect: (type: string) => void;
  onNext: () => void;
}

export default function Step1PropertyType({ selectedType, onSelect, onNext }: Step1Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">What type of property is this?</h2>
      <p className="text-neutral-400 mb-8">Select the property type for your roofing project</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type.value}
            onClick={() => onSelect(type.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedType === type.value
                ? 'border-red-500 bg-red-500/10'
                : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
            }`}
          >
            <span className="text-lg font-semibold text-white">{type.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selectedType}
        className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}
