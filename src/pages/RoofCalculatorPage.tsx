import SEO from '../components/SEO';
import RoofCostCalculator from '../components/calculator/RoofCostCalculator';

export default function RoofCalculatorPage() {
  return (
    <>
      <SEO
        title="Roof Cost Estimator | All Phase Construction USA – Broward & Palm Beach"
        description="Get a realistic roof cost estimate for your Broward or Palm Beach County home. Our calculator uses local pricing for tile, metal, shingle, and flat roofs with wind mitigation savings."
      />
      <RoofCostCalculator />
    </>
  );
}
