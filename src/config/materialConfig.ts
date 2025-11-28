export interface TierConfig {
  label: string;
  priceMin: number;
  priceMax: number;
  description: string;
  talkingPoints: string[];
}

export interface MaterialConfig {
  label: string;
  tiers: {
    [key: string]: TierConfig;
  };
  generalBenefits: string[];
}

export const MATERIAL_CONFIG: { [key: string]: MaterialConfig } = {
  shingle: {
    label: 'Asphalt Shingle',
    generalBenefits: [
      'Most cost-effective roofing solution',
      'Wide variety of colors and styles',
      'Proven performance in Florida climate',
    ],
    tiers: {
      good: {
        label: 'Good - 3-Tab Shingles',
        priceMin: 5,
        priceMax: 7,
        description: 'Basic asphalt shingle system with standard warranty',
        talkingPoints: [
          'Standard 3-tab asphalt shingles',
          'Basic synthetic underlayment',
          'Standard nail attachment',
          '15-20 year manufacturer warranty',
          'Meets Florida Building Code requirements',
          'Best value for budget-conscious projects',
        ],
      },
      better: {
        label: 'Better - Architectural Shingles',
        priceMin: 6.5,
        priceMax: 8.5,
        description: 'Upgraded architectural shingles with enhanced durability',
        talkingPoints: [
          'Architectural dimensional shingles',
          'Enhanced synthetic underlayment',
          'Improved wind resistance (up to 110 MPH)',
          '25-30 year manufacturer warranty',
          'Better curb appeal and resale value',
          'Moderate insurance savings potential',
        ],
      },
      best: {
        label: 'Best - High-Performance Shingles',
        priceMin: 8,
        priceMax: 10,
        description: 'Premium shingles with superior wind and impact resistance',
        talkingPoints: [
          'Impact-resistant (IR) architectural shingles',
          'Premium synthetic underlayment',
          'Enhanced attachment for high wind zones',
          'Limited lifetime warranty',
          'Significant insurance premium reductions',
          'Class 4 impact rating (hail resistance)',
        ],
      },
      premium: {
        label: 'Premium - Designer Shingles',
        priceMin: 9,
        priceMax: 12,
        description: 'Top-tier designer shingles with maximum performance',
        talkingPoints: [
          'Designer luxury shingles (slate or wood look)',
          'Premium multi-layer underlayment',
          'Maximum wind resistance (130+ MPH)',
          'Enhanced lifetime warranty with coverage',
          'Highest insurance discounts available',
          'Exceptional aesthetic appeal',
        ],
      },
    },
  },
  tile: {
    label: 'Concrete / Clay Tile',
    generalBenefits: [
      'Extremely durable - 50+ year lifespan',
      'Excellent for Florida hurricanes and heat',
      'Significant insurance premium savings',
    ],
    tiers: {
      good: {
        label: 'Good - Concrete Tile (Mechanical)',
        priceMin: 12,
        priceMax: 16,
        description: 'Standard concrete tile with mechanical attachment',
        talkingPoints: [
          'Standard concrete tile profile',
          'Synthetic underlayment',
          'Traditional mechanical attachment (nails/screws)',
          '50+ year material lifespan',
          'Good insurance savings',
          'Proven Florida performance',
        ],
      },
      better: {
        label: 'Better - Concrete Tile (Foam Adhesive)',
        priceMin: 14,
        priceMax: 18,
        description: 'Concrete tile with foam adhesive for superior wind resistance',
        talkingPoints: [
          'Premium concrete tile',
          'High-performance underlayment',
          'Foam adhesive attachment system',
          'Superior wind uplift resistance (150+ MPH)',
          'Enhanced insurance discounts',
          'Better long-term performance',
        ],
      },
      best: {
        label: 'Best - Concrete Tile (Premium Foam + SWR)',
        priceMin: 16,
        priceMax: 20,
        description: 'Top concrete tile with secondary water resistance',
        talkingPoints: [
          'Designer concrete tile profiles',
          'Multi-layer underlayment system',
          'Premium foam adhesive + mechanical',
          'Secondary Water Resistance (SWR) layer',
          'Maximum wind rating (170+ MPH)',
          'Highest insurance savings',
        ],
      },
      premium: {
        label: 'Premium - Clay / Composite Tile',
        priceMin: 18,
        priceMax: 24,
        description: 'Authentic clay or advanced composite tile systems',
        talkingPoints: [
          'Authentic clay or premium composite tile',
          'Advanced multi-layer protection',
          'Foam adhesive + enhanced attachment',
          'Lifetime durability (75+ years)',
          'Maximum aesthetic appeal',
          'Highest resale value increase',
        ],
      },
    },
  },
  metal: {
    label: 'Metal Roofing',
    generalBenefits: [
      'Lightweight and extremely durable',
      'Energy efficient - reflects heat',
      'Low maintenance, 40-60 year lifespan',
    ],
    tiers: {
      good: {
        label: 'Good - Exposed Fastener',
        priceMin: 10,
        priceMax: 13,
        description: 'Basic metal roofing with exposed fasteners',
        talkingPoints: [
          '26-29 gauge steel panels',
          'Exposed fastener installation',
          'Standard synthetic underlayment',
          '30-40 year paint warranty',
          'Energy-efficient cool roof',
          'Most affordable metal option',
        ],
      },
      better: {
        label: 'Better - Standing Seam',
        priceMin: 12,
        priceMax: 16,
        description: 'Professional standing seam metal roof system',
        talkingPoints: [
          '24 gauge steel or aluminum',
          'Concealed fastener standing seam',
          'Premium underlayment',
          '40+ year warranty',
          'Superior wind and water resistance',
          'Clean, modern aesthetic',
        ],
      },
      best: {
        label: 'Best - Mechanically Seamed',
        priceMin: 14,
        priceMax: 18,
        description: 'Premium mechanically seamed metal roof',
        talkingPoints: [
          '22-24 gauge premium metal',
          'Mechanically seamed panels',
          'High-performance underlayment',
          '50+ year system warranty',
          'Maximum wind resistance (180+ MPH)',
          'Enhanced energy efficiency',
        ],
      },
      premium: {
        label: 'Premium - Architectural Metal',
        priceMin: 18,
        priceMax: 24,
        description: 'Designer architectural metal roofing systems',
        talkingPoints: [
          'Copper, zinc, or specialty alloys',
          'Custom architectural profiles',
          'Premium waterproofing layers',
          'Lifetime material warranty',
          'Maximum curb appeal',
          'Highest insurance discounts',
        ],
      },
    },
  },
  flat: {
    label: 'Flat Roof (TPO / Modified / PVC)',
    generalBenefits: [
      'Ideal for commercial and low-slope applications',
      'Efficient water drainage systems',
      'Cost-effective for large areas',
    ],
    tiers: {
      good: {
        label: 'Good - Basic System',
        priceMin: 7,
        priceMax: 9,
        description: 'Standard single-ply membrane system',
        talkingPoints: [
          'Standard TPO or modified bitumen',
          'Basic insulation layer',
          'Mechanically attached or adhered',
          '10-15 year warranty',
          'Meets code requirements',
          'Cost-effective solution',
        ],
      },
      better: {
        label: 'Better - Upgraded System',
        priceMin: 8,
        priceMax: 11,
        description: 'Enhanced membrane with improved insulation',
        talkingPoints: [
          'Premium TPO or modified system',
          'Enhanced insulation (R-20+)',
          'Fully adhered installation',
          '15-20 year warranty',
          'Improved energy efficiency',
          'Better puncture resistance',
        ],
      },
      best: {
        label: 'Best - High-Performance System',
        priceMin: 10,
        priceMax: 13,
        description: 'High-performance membrane with advanced features',
        talkingPoints: [
          'Reinforced TPO or premium modified',
          'High R-value insulation',
          'Enhanced attachment methods',
          '20-25 year warranty',
          'Superior wind uplift ratings',
          'Reflective cool roof technology',
        ],
      },
      premium: {
        label: 'Premium - IB PVC / Specialty',
        priceMin: 12,
        priceMax: 16,
        description: 'Top-tier PVC or specialty membrane systems',
        talkingPoints: [
          'IB PVC or KEE membrane',
          'Premium insulation package',
          'Fully adhered with reinforcement',
          '25-30 year warranty',
          'Chemical and fire resistance',
          'Maximum longevity and performance',
        ],
      },
    },
  },
};

export const PROPERTY_TYPES = [
  { value: 'single-family', label: 'Single-Family Home' },
  { value: 'townhome', label: 'Townhome / Villa' },
  { value: 'condo', label: 'Condo / Apartment (top floor)' },
  { value: 'commercial', label: 'Commercial / HOA' },
];

export const ROOF_SIZES = [
  { value: 1250, label: 'Small (1,000–1,500 sq ft)', range: '1,000–1,500' },
  { value: 2000, label: 'Medium (1,500–2,500 sq ft)', range: '1,500–2,500' },
  { value: 3000, label: 'Large (2,500–3,500 sq ft)', range: '2,500–3,500' },
  { value: 4250, label: 'Very Large (3,500–5,000 sq ft)', range: '3,500–5,000' },
  { value: 6000, label: 'Estate (5,000+ sq ft)', range: '5,000+' },
];

export const COMPLEXITY_LEVELS = [
  { value: 1.0, label: 'Simple', description: 'Basic roof with minimal angles or penetrations' },
  { value: 1.1, label: 'Moderate', description: 'Average complexity with some valleys or features' },
  { value: 1.25, label: 'Complex', description: 'Multiple levels, many angles, or complex design' },
];
