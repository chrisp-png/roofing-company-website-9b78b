import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import UrgencyBanner from '../components/home/UrgencyBanner';
import ServicesGrid from '../components/home/ServicesGrid';
import ProjectsGallery from '../components/home/ProjectsGallery';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BottomCTA from '../components/home/BottomCTA';

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "All Phase Construction USA, LLC",
    "url": "https://allphaseusa.com",
    "telephone": "754-227-5605",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "590 Goolsby Blvd",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "areaServed": [
      "Broward County, FL",
      "Palm Beach County, FL"
    ],
    "description": "Dual-licensed Florida General Contractor and Roofing Contractor specializing in tile, metal, shingle, and flat roofs in South Florida.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.314,
      "longitude": -80.099
    }
  };

  return (
    <>
      <SEO
        title="All Phase Construction USA | Broward & Palm Beach Roofing Contractor"
        description="All Phase Construction USA installs code-compliant roofing systems for Broward and Palm Beach Counties, with a strong focus on Boca Raton and surrounding coastal communities."
        url="https://allphaseusa.com"
        schemaJson={localBusinessSchema}
      />
      <HeroSection />
      <TrustBar />
      <UrgencyBanner />
      <ServicesGrid />
      <ProjectsGallery />
      <TestimonialsSection />
      <BottomCTA />
    </>
  );
}
