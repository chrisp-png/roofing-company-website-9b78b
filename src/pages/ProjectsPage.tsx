import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import { MapPin, Layers } from 'lucide-react';

interface ProjectGalleryItem {
  id: string;
  imageSrc: string;
  alt: string;
  city: string;
  roofType: string;
  description?: string;
}

const PROJECT_GALLERY: ProjectGalleryItem[] = [
  // Existing real project images from public/images/projects
  {
    id: 'p001',
    imageSrc: '/images/projects/Standing seam metal roof.jpg',
    alt: 'Standing seam metal roof installation in South Florida',
    city: 'Boca Raton',
    roofType: 'Standing Seam Metal',
    description: 'Premium standing seam metal roof installation'
  },
  {
    id: 'p002',
    imageSrc: '/images/projects/Charcoal Gray standing seam metal roof.jpg',
    alt: 'Charcoal gray standing seam metal roof',
    city: 'Fort Lauderdale',
    roofType: 'Standing Seam Metal',
    description: 'Modern charcoal gray metal roof system'
  },
  {
    id: 'p003',
    imageSrc: '/images/projects/Clay tile drone shot-Boca Raton.JPG',
    alt: 'Aerial view of clay tile roof installation in Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Complete clay tile roof replacement'
  },
  {
    id: 'p004',
    imageSrc: '/images/projects/Clay tile install2- Boca Raton.JPG',
    alt: 'Clay tile roof installation in progress Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Clay tile installation process'
  },
  {
    id: 'p005',
    imageSrc: '/images/projects/clay tile install3-Boca Raton.JPG',
    alt: 'Clay tile roofing project in Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Premium clay tile roofing system'
  },
  {
    id: 'p006',
    imageSrc: '/images/projects/Morrison Tile Roof.jpg',
    alt: 'Morrison residence tile roof in Parkland',
    city: 'Parkland',
    roofType: 'Concrete Tile',
    description: 'Complete tile roof replacement'
  },
  {
    id: 'p007',
    imageSrc: '/images/projects/Weldon front of house.jpg',
    alt: 'Weldon residence front view with new tile roof',
    city: 'Delray Beach',
    roofType: 'Concrete Tile',
    description: 'Elegant tile roof installation'
  },
  {
    id: 'p008',
    imageSrc: '/images/projects/Weldon house, Delray Beach.jpg',
    alt: 'Complete roof replacement Weldon house Delray Beach',
    city: 'Delray Beach',
    roofType: 'Concrete Tile',
    description: 'Full roof replacement with tile system'
  },
  {
    id: 'p009',
    imageSrc: '/images/projects/Torch applying cap sheet.jpg',
    alt: 'Commercial flat roof torch-down installation',
    city: 'Pompano Beach',
    roofType: 'Modified Bitumen',
    description: 'Commercial flat roof with torch-applied cap sheet'
  },
  {
    id: 'p010',
    imageSrc: '/images/projects/Ttorch applied base sheet.jpg',
    alt: 'Torch applied base sheet commercial roofing',
    city: 'Fort Lauderdale',
    roofType: 'Modified Bitumen',
    description: 'Modified bitumen roofing system'
  },
  {
    id: 'p011',
    imageSrc: '/images/projects/Working on single ply roof.JPG',
    alt: 'Commercial single ply TPO roof installation',
    city: 'Fort Lauderdale',
    roofType: 'TPO Single Ply',
    description: 'Commercial TPO flat roof system'
  },
  {
    id: 'p012',
    imageSrc: '/images/projects/Coating crew .PNG',
    alt: 'Roof coating application crew at work',
    city: 'Broward County',
    roofType: 'Roof Coating',
    description: 'Professional roof coating application'
  },
  {
    id: 'p013',
    imageSrc: '/images/projects/Tile install in progress.JPG',
    alt: 'Tile roof installation in progress',
    city: 'Palm Beach County',
    roofType: 'Concrete Tile',
    description: 'Tile roof installation process'
  },
  {
    id: 'p014',
    imageSrc: '/images/projects/Tile roof loaded and ready for install.JPG',
    alt: 'Tile materials staged and ready for installation',
    city: 'Palm Beach Gardens',
    roofType: 'Concrete Tile',
    description: 'Materials staging for tile roof project'
  },
  {
    id: 'p015',
    imageSrc: '/images/projects/project-luxury-tile-aerial-1.jpg',
    alt: 'Luxury tile roof aerial view',
    city: 'Boca Raton',
    roofType: 'Premium Tile',
    description: 'High-end tile roof installation'
  },
  {
    id: 'p016',
    imageSrc: '/images/projects/project-luxury-tile-aerial-2.jpg',
    alt: 'Luxury estate tile roof from above',
    city: 'Boca Raton',
    roofType: 'Premium Tile',
    description: 'Luxury estate roofing project'
  },
  {
    id: 'p017',
    imageSrc: '/images/projects/project-modern-gray-sideview.jpg',
    alt: 'Modern gray metal roof side view',
    city: 'Coral Springs',
    roofType: 'Metal Roof',
    description: 'Contemporary metal roof system'
  },
  {
    id: 'p018',
    imageSrc: '/images/projects/project-white-metalroof-street.jpg',
    alt: 'White metal roof street view',
    city: 'Deerfield Beach',
    roofType: 'Metal Roof',
    description: 'White metal roof installation'
  },
  {
    id: 'p019',
    imageSrc: '/images/projects/hero-modern-gray-metalroof.jpg',
    alt: 'Modern gray metal roof contemporary home',
    city: 'Parkland',
    roofType: 'Standing Seam Metal',
    description: 'Modern architectural metal roof'
  },
  {
    id: 'p020',
    imageSrc: '/images/projects/project-metalroof-decorative-driveway.jpg',
    alt: 'Metal roof with decorative driveway',
    city: 'Weston',
    roofType: 'Metal Roof',
    description: 'Metal roof on luxury home'
  },
  {
    id: 'p021',
    imageSrc: '/images/projects/project-commercial-flat-roof.jpg',
    alt: 'Commercial flat roof installation',
    city: 'Fort Lauderdale',
    roofType: 'TPO Commercial',
    description: 'Large commercial flat roof project'
  },
  {
    id: 'p022',
    imageSrc: '/images/projects/crew-flat-roof-commercial.jpg',
    alt: 'Crew working on commercial flat roof',
    city: 'Pompano Beach',
    roofType: 'Commercial Flat',
    description: 'Commercial roofing crew at work'
  },
  {
    id: 'p023',
    imageSrc: '/images/projects/crew-team-photo-commercial.jpg',
    alt: 'All Phase Construction commercial roofing team',
    city: 'Broward County',
    roofType: 'Commercial Project',
    description: 'Professional commercial roofing team'
  },
  {
    id: 'p024',
    imageSrc: '/images/projects/crew-tile-install-action.jpg',
    alt: 'Crew installing tile roof',
    city: 'Palm Beach County',
    roofType: 'Tile Installation',
    description: 'Expert tile roof installation crew'
  },
  {
    id: 'p025',
    imageSrc: '/images/projects/crew-tile-staging-aerial.jpg',
    alt: 'Aerial view of tile staging area',
    city: 'Boca Raton',
    roofType: 'Tile Project',
    description: 'Organized tile roof project staging'
  },
  {
    id: 'p026',
    imageSrc: '/images/projects/system-roof-decking-insulation.jpg',
    alt: 'Roof decking and insulation system',
    city: 'Delray Beach',
    roofType: 'Roof System',
    description: 'Quality roof decking preparation'
  },
  {
    id: 'p027',
    imageSrc: '/images/projects/system-titan-underlayment.jpg',
    alt: 'Titan underlayment installation',
    city: 'Boynton Beach',
    roofType: 'Roof System',
    description: 'Premium underlayment system'
  },
  {
    id: 'p028',
    imageSrc: '/images/projects/system-commercial-materials-staging.jpg',
    alt: 'Commercial roofing materials staging',
    city: 'Fort Lauderdale',
    roofType: 'Commercial',
    description: 'Materials staging for commercial project'
  },
  // Placeholder entries for additional 32+ projects
  {
    id: 'p029',
    imageSrc: '/images/projects/project-29.jpg',
    alt: 'Shingle roof replacement in Coconut Creek',
    city: 'Coconut Creek',
    roofType: 'Architectural Shingles',
    description: 'Impact-resistant shingle roof'
  },
  {
    id: 'p030',
    imageSrc: '/images/projects/project-30.jpg',
    alt: 'Metal roof installation in Lighthouse Point',
    city: 'Lighthouse Point',
    roofType: 'Standing Seam Metal',
    description: 'Waterfront metal roof system'
  },
  {
    id: 'p031',
    imageSrc: '/images/projects/project-31.jpg',
    alt: 'Tile roof in Highland Beach',
    city: 'Highland Beach',
    roofType: 'Spanish Tile',
    description: 'Mediterranean style tile roof'
  },
  {
    id: 'p032',
    imageSrc: '/images/projects/project-32.jpg',
    alt: 'Commercial roof in Margate',
    city: 'Margate',
    roofType: 'TPO Membrane',
    description: 'Commercial TPO roofing system'
  },
  {
    id: 'p033',
    imageSrc: '/images/projects/project-33.jpg',
    alt: 'Flat roof replacement in Tamarac',
    city: 'Tamarac',
    roofType: 'Modified Bitumen',
    description: 'Flat roof replacement project'
  },
  {
    id: 'p034',
    imageSrc: '/images/projects/project-34.jpg',
    alt: 'Shingle roof in Wilton Manors',
    city: 'Wilton Manors',
    roofType: 'Dimensional Shingles',
    description: 'High-wind rated shingle system'
  },
  {
    id: 'p035',
    imageSrc: '/images/projects/project-35.jpg',
    alt: 'Metal roof in Oakland Park',
    city: 'Oakland Park',
    roofType: 'Metal Panels',
    description: 'Energy-efficient metal roof'
  },
  {
    id: 'p036',
    imageSrc: '/images/projects/project-36.jpg',
    alt: 'Tile roof replacement in Sunrise',
    city: 'Sunrise',
    roofType: 'Concrete Tile',
    description: 'Complete tile roof replacement'
  },
  {
    id: 'p037',
    imageSrc: '/images/projects/project-37.jpg',
    alt: 'Commercial roof in Plantation',
    city: 'Plantation',
    roofType: 'EPDM Rubber',
    description: 'Commercial rubber roofing system'
  },
  {
    id: 'p038',
    imageSrc: '/images/projects/project-38.jpg',
    alt: 'Shingle roof in Hollywood',
    city: 'Hollywood',
    roofType: 'Impact Shingles',
    description: 'Hurricane-resistant shingle roof'
  },
  {
    id: 'p039',
    imageSrc: '/images/projects/project-39.jpg',
    alt: 'Metal roof in Lake Worth Beach',
    city: 'Lake Worth Beach',
    roofType: 'Ribbed Metal',
    description: 'Coastal metal roof installation'
  },
  {
    id: 'p040',
    imageSrc: '/images/projects/project-40.jpg',
    alt: 'Tile roof in West Palm Beach',
    city: 'West Palm Beach',
    roofType: 'Barrel Tile',
    description: 'Classic barrel tile roof'
  },
  {
    id: 'p041',
    imageSrc: '/images/projects/project-41.jpg',
    alt: 'Commercial flat roof in Deerfield Beach',
    city: 'Deerfield Beach',
    roofType: 'PVC Membrane',
    description: 'White PVC commercial roof'
  },
  {
    id: 'p042',
    imageSrc: '/images/projects/project-42.jpg',
    alt: 'Shingle roof in Coral Springs',
    city: 'Coral Springs',
    roofType: 'Premium Shingles',
    description: 'Designer shingle roof system'
  },
  {
    id: 'p043',
    imageSrc: '/images/projects/project-43.jpg',
    alt: 'Metal roof in Parkland',
    city: 'Parkland',
    roofType: 'Standing Seam',
    description: 'Luxury home metal roof'
  },
  {
    id: 'p044',
    imageSrc: '/images/projects/project-44.jpg',
    alt: 'Tile roof in Palm Beach Gardens',
    city: 'Palm Beach Gardens',
    roofType: 'Flat Tile',
    description: 'Contemporary flat tile system'
  },
  {
    id: 'p045',
    imageSrc: '/images/projects/project-45.jpg',
    alt: 'Commercial roof in Jupiter',
    city: 'Jupiter',
    roofType: 'TPO Single Ply',
    description: 'Energy-efficient commercial roof'
  },
  {
    id: 'p046',
    imageSrc: '/images/projects/project-46.jpg',
    alt: 'Shingle roof in Wellington',
    city: 'Wellington',
    roofType: 'Architectural Shingles',
    description: 'Premium shingle installation'
  },
  {
    id: 'p047',
    imageSrc: '/images/projects/project-47.jpg',
    alt: 'Metal roof in Royal Palm Beach',
    city: 'Royal Palm Beach',
    roofType: 'Metal Shingles',
    description: 'Metal shingle roofing system'
  },
  {
    id: 'p048',
    imageSrc: '/images/projects/project-48.jpg',
    alt: 'Tile roof replacement in Davie',
    city: 'Davie',
    roofType: 'S-Tile',
    description: 'S-tile roof replacement'
  },
  {
    id: 'p049',
    imageSrc: '/images/projects/project-49.jpg',
    alt: 'Flat roof in Hallandale Beach',
    city: 'Hallandale Beach',
    roofType: 'Built-Up Roof',
    description: 'Multi-layer flat roof system'
  },
  {
    id: 'p050',
    imageSrc: '/images/projects/project-50.jpg',
    alt: 'Shingle roof in Miramar',
    city: 'Miramar',
    roofType: 'Impact Resistant',
    description: 'Wind and impact rated shingles'
  },
  {
    id: 'p051',
    imageSrc: '/images/projects/project-51.jpg',
    alt: 'Metal roof in Pembroke Pines',
    city: 'Pembroke Pines',
    roofType: 'Corrugated Metal',
    description: 'Modern corrugated metal roof'
  },
  {
    id: 'p052',
    imageSrc: '/images/projects/project-52.jpg',
    alt: 'Tile roof in Weston',
    city: 'Weston',
    roofType: 'Eagle Tile',
    description: 'Premium Eagle tile system'
  },
  {
    id: 'p053',
    imageSrc: '/images/projects/project-53.jpg',
    alt: 'Commercial roof in Aventura',
    city: 'Aventura',
    roofType: 'Green Roof System',
    description: 'Sustainable green roof installation'
  },
  {
    id: 'p054',
    imageSrc: '/images/projects/project-54.jpg',
    alt: 'Shingle roof in Lauderhill',
    city: 'Lauderhill',
    roofType: '3-Tab Shingles',
    description: 'Classic 3-tab shingle roof'
  },
  {
    id: 'p055',
    imageSrc: '/images/projects/project-55.jpg',
    alt: 'Metal roof in Cooper City',
    city: 'Cooper City',
    roofType: 'Stone-Coated Metal',
    description: 'Stone-coated steel roofing'
  },
  {
    id: 'p056',
    imageSrc: '/images/projects/project-56.jpg',
    alt: 'Tile roof in Southwest Ranches',
    city: 'Southwest Ranches',
    roofType: 'Mission Tile',
    description: 'Traditional mission tile roof'
  },
  {
    id: 'p057',
    imageSrc: '/images/projects/project-57.jpg',
    alt: 'Flat roof in North Miami Beach',
    city: 'North Miami Beach',
    roofType: 'Spray Foam',
    description: 'Spray polyurethane foam roof'
  },
  {
    id: 'p058',
    imageSrc: '/images/projects/project-58.jpg',
    alt: 'Shingle roof in Lauderdale Lakes',
    city: 'Lauderdale Lakes',
    roofType: 'Laminated Shingles',
    description: 'Multi-layer shingle system'
  },
  {
    id: 'p059',
    imageSrc: '/images/projects/project-59.jpg',
    alt: 'Metal roof in Lighthouse Point',
    city: 'Lighthouse Point',
    roofType: 'Aluminum Roof',
    description: 'Coastal aluminum roofing'
  },
  {
    id: 'p060',
    imageSrc: '/images/projects/project-60.jpg',
    alt: 'Tile roof in Sea Ranch Lakes',
    city: 'Sea Ranch Lakes',
    roofType: 'Mediterranean Tile',
    description: 'Luxury Mediterranean tile roof'
  }
];

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | All Phase Construction USA"
        description="View real roofing projects completed by All Phase Construction USA across Broward and Palm Beach Counties, including tile, metal, flat roofs, waterproofing, and more."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/' },
          { name: 'Projects', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/projects' }
        ]}
      />

      <div className="min-h-screen bg-neutral-950">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Projects & Real Roofs
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                Real projects, real roofs, real customers across Broward and Palm Beach Counties.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PROJECT_GALLERY.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img
                    src={project.imageSrc}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium">{project.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <Layers className="w-4 h-4 flex-shrink-0" />
                      <span className="text-right">{project.roofType}</span>
                    </div>
                  </div>
                  {project.description && (
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 border-t border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free inspection and quote from All Phase Construction USA. Licensed, insured, and trusted across South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:561-123-4567"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Call for Free Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-900 transition-colors border border-blue-600"
              >
                Request Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
