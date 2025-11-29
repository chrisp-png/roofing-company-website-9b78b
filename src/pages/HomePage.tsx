import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import UrgencyBanner from '../components/home/UrgencyBanner';
import ServicesGrid from '../components/home/ServicesGrid';
import AuthorityGroup from '../components/authority/AuthorityGroup';
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
    "email": "info@allphaseusa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "590 Goolsby Blvd",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County"
      },
      {
        "@type": "City",
        "name": "Boca Raton"
      },
      {
        "@type": "City",
        "name": "Deerfield Beach"
      },
      {
        "@type": "City",
        "name": "Coral Springs"
      },
      {
        "@type": "City",
        "name": "Coconut Creek"
      },
      {
        "@type": "City",
        "name": "Delray Beach"
      },
      {
        "@type": "City",
        "name": "Pompano Beach"
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale"
      },
      {
        "@type": "City",
        "name": "West Palm Beach"
      }
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
        title="All Phase Construction USA | Roofing Contractor in Deerfield Beach, FL"
        description="Licensed roofing and general contractor in Deerfield Beach, FL. We install tile, metal, shingle, and flat roofs across Broward and Palm Beach counties. Free estimates & financing."
        url="https://allphaseusa.com"
        schemaJson={localBusinessSchema}
      />
      <HeroSection />
      <TrustBar />
      <UrgencyBanner />
      <ServicesGrid />
      <AuthorityGroup />
      <ProjectsGallery />
      <TestimonialsSection />
      <BottomCTA />
    </>
  );
}
