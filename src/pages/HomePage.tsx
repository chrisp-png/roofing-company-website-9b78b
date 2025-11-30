import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBadges from '../components/home/TrustBadges';
import WhyChooseBar from '../components/home/WhyChooseBar';
import TrustBar from '../components/home/TrustBar';
import UrgencyBanner from '../components/home/UrgencyBanner';
import ServicesGrid from '../components/home/ServicesGrid';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import ProjectsGallery from '../components/home/ProjectsGallery';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BottomCTA from '../components/home/BottomCTA';
import HomeLocalBusinessSchema from '../components/HomeLocalBusinessSchema';
import RoofGuideFaqSchema from '../components/RoofGuideFaqSchema';

export default function HomePage() {
  return (
    <>
      <SEO
        title="All Phase Construction USA | Roofing Contractor in South Florida"
        description="Licensed roofing and general contractor serving Broward and Palm Beach counties. Expert tile, metal, shingle, and flat roof installation. Free estimates & financing available."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/"
        ogImage="https://chrisp-png-roofing-c-gxj0.bolt.host/og-image.jpg"
      />
      <HomeLocalBusinessSchema />
      <RoofGuideFaqSchema />
      <HeroSection />
      <TrustBadges />
      <WhyChooseBar />
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
