import { useState } from 'react';
import { CalculatorState, initialCalculatorState } from './CalculatorTypes';
import Step1PropertyType from './Step1PropertyType';
import Step2RoofSize from './Step2RoofSize';
import Step3Material from './Step3Material';
import Step4TierComplexity from './Step4TierComplexity';
import Step5Results from './Step5Results';

export default function RoofCostCalculator() {
  const [state, setState] = useState<CalculatorState>(initialCalculatorState);

  const updateState = (updates: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => updateState({ step: state.step + 1 });
  const prevStep = () => updateState({ step: state.step - 1 });

  const progressPercentage = (state.step / 5) * 100;

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Roof Cost Calculator
          </h1>
          <p className="text-xl text-neutral-300">
            Get an instant estimate for your roofing project
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-neutral-400">Step {state.step} of 5</span>
            <span className="text-sm text-neutral-400">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
          {state.step === 1 && (
            <Step1PropertyType
              selectedType={state.propertyType}
              onSelect={(type) => updateState({ propertyType: type })}
              onNext={nextStep}
            />
          )}

          {state.step === 2 && (
            <Step2RoofSize
              selectedSize={state.roofSize}
              onSelect={(size) => updateState({ roofSize: size })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {state.step === 3 && (
            <Step3Material
              selectedMaterial={state.material}
              onSelect={(material) => updateState({ material })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {state.step === 4 && (
            <Step4TierComplexity
              material={state.material}
              selectedTier={state.tier}
              selectedComplexity={state.complexity}
              onSelectTier={(tier) => updateState({ tier })}
              onSelectComplexity={(complexity) => updateState({ complexity })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {state.step === 5 && (
            <Step5Results
              roofSize={state.roofSize}
              material={state.material}
              tier={state.tier}
              complexity={state.complexity}
              name={state.name}
              phone={state.phone}
              email={state.email}
              address={state.address}
              city={state.city}
              onUpdateName={(name) => updateState({ name })}
              onUpdatePhone={(phone) => updateState({ phone })}
              onUpdateEmail={(email) => updateState({ email })}
              onUpdateAddress={(address) => updateState({ address })}
              onUpdateCity={(city) => updateState({ city })}
              onBack={prevStep}
            />
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 mb-2">
            Questions? Call us at{' '}
            <a href="tel:7542275605" className="text-red-500 hover:text-red-400">
              754-227-5605
            </a>
          </p>
          <p className="text-xs text-neutral-600">
            All Phase Construction USA • FL Licenses: CGC1526236 • CCC1331464
          </p>
        </div>
      </div>
    </div>
  );
}
