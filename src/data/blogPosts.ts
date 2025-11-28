export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  targetKeywords: string[];
  cityFocus?: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'underlayment-and-foam-application',
    title: 'The Hidden Hero of Your Roof: Why Underlayment and Foam Application Matter More Than You Think',
    category: 'Tile Roofing & Underlayment',
    publishedAt: '2025-01-15',
    readTime: '7 min read',
    excerpt: 'Most roof problems are caused by what\'s under the tile and contractors skimping on foam adhesive. Learn why proper underlayment and foam application are the real keys to a long-lasting tile roof.',
    targetKeywords: ['roof underlayment Florida', 'foam adhesive tile roof', 'secondary water resistance HVHZ'],
    cityFocus: 'South Florida / Broward & Palm Beach',
    featured: true,
  },
  {
    slug: 'concrete-tile-roofing-good-better-best',
    title: 'Concrete Tile Roofing: Understanding Good, Better, Best Installation Methods',
    category: 'Tile Roofing & Installation',
    publishedAt: '2025-01-10',
    readTime: '8 min read',
    excerpt: 'Concrete is concrete—the real difference in tile roof quality comes from attachment methods, underlayment choice, and foam application. Not all "barrel tile" installations are created equal.',
    targetKeywords: ['concrete tile roof installation', 'tile roof attachment methods', 'HVHZ tile roofing'],
    cityFocus: 'Boca Raton & Palm Beach County',
    featured: true,
  },
  {
    slug: 'wind-mitigation-inspections-insurance-savings',
    title: 'Wind Mitigation Inspections: How to Save $500–$6,500/Year on Insurance',
    category: 'Insurance & Wind Mitigation',
    publishedAt: '2025-01-05',
    readTime: '6 min read',
    excerpt: 'Form 1802 documentation can dramatically reduce your Florida homeowners insurance premiums. Learn which roof features qualify for credits and how wind mitigation upgrades often pay for themselves.',
    targetKeywords: ['wind mitigation inspection Florida', 'Form 1802', 'insurance savings roof'],
    cityFocus: 'South Florida / Broward & Palm Beach',
    featured: true,
  },
  {
    slug: 'hurricane-proof-your-roof-guide',
    title: 'Hurricane-Proof Your Roof: The Complete South Florida Homeowner\'s Guide',
    category: 'Hurricane Prep & HVHZ',
    publishedAt: '2024-12-20',
    readTime: '9 min read',
    excerpt: 'From materials and attachment methods to underlayment, straps, and soffit/fascia protection—everything you need to know about hurricane-proofing your roof before the next storm arrives.',
    targetKeywords: ['hurricane proof roof Florida', 'HVHZ roofing requirements', 'hurricane straps roof'],
    cityFocus: 'Fort Lauderdale & Broward County',
    featured: false,
  },
  {
    slug: 'cost-of-waiting-roof-replacement',
    title: 'The Cost of Waiting: Why Delaying Roof Replacement Hurts Your Wallet',
    category: 'Pricing & Timing',
    publishedAt: '2024-12-15',
    readTime: '5 min read',
    excerpt: 'Rising material costs, tariffs, higher insurance premiums, emergency repairs, and energy waste—discover why delaying your roof replacement ends up costing you more in the long run.',
    targetKeywords: ['roof replacement cost Florida', 'when to replace roof', 'roof replacement timing'],
    cityFocus: 'Delray Beach & Boca Raton',
    featured: false,
  },
  {
    slug: 'roofing-change-orders-explained',
    title: 'Understanding Roofing Change Orders: What Every Homeowner Should Know',
    category: 'Contracts & Change Orders',
    publishedAt: '2024-12-10',
    readTime: '7 min read',
    excerpt: 'Hidden wood damage and code updates are common in roofing projects. Learn what legitimate change orders should include—photos, itemization, clear explanations, and your signature before work begins.',
    targetKeywords: ['roofing change orders', 'hidden wood damage roof', 'roofing contract Florida'],
    cityFocus: 'South Florida',
    featured: false,
  },
];
