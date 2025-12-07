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
  {
    id: 'p001',
    imageSrc: "/images/projects/001-lake-worth-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Tile roof installation in Lake Worth, FL by All Phase Construction USA.",
    city: "Lake Worth, FL",
    roofType: "Tile Roof",
    description: "New tile roof installation in Lake Worth."
  },
  {
    id: 'p002',
    imageSrc: "/images/projects/002-wellington-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Tile roof installation in Wellington, FL by All Phase Construction USA.",
    city: "Wellington, FL",
    roofType: "Tile Roof",
    description: "New tile roof system installed in Wellington."
  },
  {
    id: 'p003',
    imageSrc: "/images/projects/003-coconut-creek-shingle-roof-new-install-all-phase-usa.jpg",
    alt: "Asphalt shingle roof installation in Coconut Creek, FL by All Phase Construction USA.",
    city: "Coconut Creek, FL",
    roofType: "Shingle Roof",
    description: "Full shingle roof replacement in Coconut Creek."
  },
  {
    id: 'p004',
    imageSrc: "/images/projects/004-coral-springs-barrel-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Barrel tile roof installation in Coral Springs, FL by All Phase Construction USA.",
    city: "Coral Springs, FL",
    roofType: "Barrel Tile Roof",
    description: "New barrel tile roof system installed in Coral Springs."
  },
  {
    id: 'p005',
    imageSrc: "/images/projects/005-parkland-flat-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Flat tile roof installation in Parkland, FL by All Phase Construction USA.",
    city: "Parkland, FL",
    roofType: "Flat Tile Roof",
    description: "New flat tile roofing system installed in Parkland."
  },
  {
    id: 'p006',
    imageSrc: "/images/projects/006-boca-raton-tile-roof-replacement-all-phase-usa.jpg",
    alt: "Tile roof replacement in Boca Raton, FL by All Phase Construction USA.",
    city: "Boca Raton, FL",
    roofType: "Tile Roof",
    description: "Full tile roof replacement in Boca Raton."
  },
  {
    id: 'p007',
    imageSrc: "/images/projects/007-boynton-beach-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Tile roof installation in Boynton Beach, FL by All Phase Construction USA.",
    city: "Boynton Beach, FL",
    roofType: "Tile Roof",
    description: "New tile roof installation in Boynton Beach."
  },
  {
    id: 'p008',
    imageSrc: "/images/projects/008-coral-springs-capistrano-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Capistrano tile roof installation in Coral Springs, FL by All Phase Construction USA.",
    city: "Coral Springs, FL",
    roofType: "Capistrano Tile Roof",
    description: "New Capistrano-profile tile roof system installed in Coral Springs."
  },
  {
    id: 'p009',
    imageSrc: "/images/projects/009-fort-lauderdale-standing-seam-metal-roof-new-install-all-phase-usa.jpg",
    alt: "Standing seam metal roof installation in Fort Lauderdale, FL by All Phase Construction USA.",
    city: "Fort Lauderdale, FL",
    roofType: "Standing Seam Metal Roof",
    description: "New charcoal gray standing seam metal roof installed in Fort Lauderdale."
  },
  {
    id: 'p010',
    imageSrc: "/images/projects/010-boca-raton-clay-tile-roof-new-install-all-phase-usa.jpg",
    alt: "Clay tile roof installation in Boca Raton, FL by All Phase Construction USA.",
    city: "Boca Raton, FL",
    roofType: "Clay Tile Roof",
    description: "Drone shot of new clay tile roof installation in Boca Raton."
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
