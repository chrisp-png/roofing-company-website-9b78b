export interface CalculatorState {
  step: number;
  propertyType: string;
  roofSize: number;
  material: string;
  tier: string;
  complexity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

export const initialCalculatorState: CalculatorState = {
  step: 1,
  propertyType: '',
  roofSize: 0,
  material: '',
  tier: '',
  complexity: 1.0,
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
};
