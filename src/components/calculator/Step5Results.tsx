import { useState } from 'react';
import { MATERIAL_CONFIG } from '../../config/materialConfig';
import { Check } from 'lucide-react';

interface Step5Props {
  roofSize: number;
  material: string;
  tier: string;
  complexity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  onUpdateName: (value: string) => void;
  onUpdatePhone: (value: string) => void;
  onUpdateEmail: (value: string) => void;
  onUpdateAddress: (value: string) => void;
  onUpdateCity: (value: string) => void;
  onBack: () => void;
}

export default function Step5Results({
  roofSize,
  material,
  tier,
  complexity,
  name,
  phone,
  email,
  address,
  city,
  onUpdateName,
  onUpdatePhone,
  onUpdateEmail,
  onUpdateAddress,
  onUpdateCity,
  onBack,
}: Step5Props) {
  const [submitted, setSubmitted] = useState(false);

  const tierConfig = MATERIAL_CONFIG[material]?.tiers[tier];
  const materialConfig = MATERIAL_CONFIG[material];

  if (!tierConfig || !materialConfig) {
    return <div>Error: Invalid configuration</div>;
  }

  const lowEstimate = Math.round(tierConfig.priceMin * roofSize * complexity);
  const highEstimate = Math.round(tierConfig.priceMax * roofSize * complexity);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const canSubmit = name && (phone || email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-xl text-neutral-300 mb-6">
          Your estimate has been saved and our team will follow up shortly to confirm details.
        </p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-2xl mx-auto text-left mb-8">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            Your Estimated Range: {formatCurrency(lowEstimate)} – {formatCurrency(highEstimate)}
          </h3>
          <div className="space-y-2 text-neutral-300">
            <p><span className="font-semibold">Material:</span> {materialConfig.label}</p>
            <p><span className="font-semibold">Tier:</span> {tierConfig.label}</p>
            <p><span className="font-semibold">Roof Size:</span> {roofSize.toLocaleString()} sq ft</p>
          </div>
        </div>
        <p className="text-sm text-neutral-400">
          Questions? Call us at <a href="tel:7542275605" className="text-red-500 hover:underline">754-227-5605</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">
          {formatCurrency(lowEstimate)} – {formatCurrency(highEstimate)}
        </h2>
        <p className="text-xl text-neutral-300">Estimated Project Cost</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">{tierConfig.label}</h3>
        <p className="text-neutral-300 mb-4">{tierConfig.description}</p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {tierConfig.talkingPoints.map((point, idx) => (
              <li key={idx} className="text-neutral-300 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Project Breakdown:</h4>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Materials: {materialConfig.label} roofing system</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Underlayment: High-performance protection layer</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Attachment: Appropriate method for material and wind zone</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Labor: Professional installation by licensed contractors</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Permits & Inspections: All required code compliance</span>
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">
          <h4 className="text-lg font-semibold text-white mb-3">What This Means for You:</h4>
          <ul className="space-y-2">
            {materialConfig.generalBenefits.map((benefit, idx) => (
              <li key={idx} className="text-neutral-300 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Get Your Personalized Quote</h3>
        <p className="text-neutral-400 mb-6 text-sm">
          Provide your contact information and we'll follow up to confirm details and schedule your free assessment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => onUpdateName(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Phone <span className="text-neutral-600">(Phone or Email required)</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => onUpdatePhone(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Email <span className="text-neutral-600">(Phone or Email required)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => onUpdateEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => onUpdateCity(e.target.value)}
              placeholder="e.g., Boca Raton"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-400 mb-2">
            Property Address (Optional)
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => onUpdateAddress(e.target.value)}
            placeholder="Street address"
            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send My Info
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-neutral-500">
        By submitting, you agree to be contacted by All Phase Construction USA regarding your roofing project.
      </p>
    </div>
  );
}
