import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ResidentialRoofingPage from './pages/ResidentialRoofingPage';
import CommercialRoofingPage from './pages/CommercialRoofingPage';
import ShingleRoofingPage from './pages/ShingleRoofingPage';
import TileRoofingPage from './pages/TileRoofingPage';
import MetalRoofingPage from './pages/MetalRoofingPage';
import FlatRoofingPage from './pages/FlatRoofingPage';
import WindMitigationPage from './pages/WindMitigationPage';
import FinancingPage from './pages/FinancingPage';
import FinancingCalculatorPage from './pages/FinancingCalculatorPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import RoofCalculatorPage from './pages/RoofCalculatorPage';
import RoofCostBocaRatonPage from './pages/RoofCostBocaRatonPage';
import RoofCostCoralSpringsPage from './pages/RoofCostCoralSpringsPage';
import RoofCostCoconutCreekPage from './pages/RoofCostCoconutCreekPage';
import RoofCostParklandPage from './pages/RoofCostParklandPage';
import RoofCostTamaracPage from './pages/RoofCostTamaracPage';
import RoofCostMargatePage from './pages/RoofCostMargatePage';
import RoofCostPompanoBeachPage from './pages/RoofCostPompanoBeachPage';
import RoofCostDeerfieldBeachPage from './pages/RoofCostDeerfieldBeachPage';
import RoofCostDelrayBeachPage from './pages/RoofCostDelrayBeachPage';
import RoofCostBoyntonBeachPage from './pages/RoofCostBoyntonBeachPage';
import RoofCostLakeWorthBeachPage from './pages/RoofCostLakeWorthBeachPage';
import RoofCostWestPalmBeachPage from './pages/RoofCostWestPalmBeachPage';
import RoofCostWellingtonPage from './pages/RoofCostWellingtonPage';
import RoofCostPalmBeachGardensPage from './pages/RoofCostPalmBeachGardensPage';
import RoofCostJupiterPage from './pages/RoofCostJupiterPage';
import RoofCostPalmSpringsPage from './pages/RoofCostPalmSpringsPage';
import RoofCostGreenacresPage from './pages/RoofCostGreenacresPage';
import RoofCostLauderdaleByTheSeaPage from './pages/RoofCostLauderdaleByTheSeaPage';
import RoofCostFortLauderdalePage from './pages/RoofCostFortLauderdalePage';
import RoofCostLighthousePointPage from './pages/RoofCostLighthousePointPage';
import BocaRatonPage from './pages/BocaRatonPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaDetailPage from './pages/ServiceAreaDetailPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="residential-roofing" element={<ResidentialRoofingPage />} />
          <Route path="commercial-roofing" element={<CommercialRoofingPage />} />
          <Route path="roof-types/shingle" element={<ShingleRoofingPage />} />
          <Route path="roof-types/tile" element={<TileRoofingPage />} />
          <Route path="roof-types/metal" element={<MetalRoofingPage />} />
          <Route path="roof-types/flat" element={<FlatRoofingPage />} />
          <Route path="wind-mitigation" element={<WindMitigationPage />} />
          <Route path="financing" element={<FinancingPage />} />
          <Route path="financing-calculator" element={<FinancingCalculatorPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="roof-cost-calculator" element={<RoofCalculatorPage />} />
          <Route path="roof-cost-boca-raton" element={<RoofCostBocaRatonPage />} />
          <Route path="roof-cost-coral-springs" element={<RoofCostCoralSpringsPage />} />
          <Route path="roof-cost-coconut-creek" element={<RoofCostCoconutCreekPage />} />
          <Route path="roof-cost-parkland" element={<RoofCostParklandPage />} />
          <Route path="roof-cost-tamarac" element={<RoofCostTamaracPage />} />
          <Route path="roof-cost-margate" element={<RoofCostMargatePage />} />
          <Route path="roof-cost-pompano-beach" element={<RoofCostPompanoBeachPage />} />
          <Route path="roof-cost-deerfield-beach" element={<RoofCostDeerfieldBeachPage />} />
          <Route path="roof-cost-delray-beach" element={<RoofCostDelrayBeachPage />} />
          <Route path="roof-cost-boynton-beach" element={<RoofCostBoyntonBeachPage />} />
          <Route path="roof-cost-lake-worth-beach" element={<RoofCostLakeWorthBeachPage />} />
          <Route path="roof-cost-west-palm-beach" element={<RoofCostWestPalmBeachPage />} />
          <Route path="roof-cost-wellington" element={<RoofCostWellingtonPage />} />
          <Route path="roof-cost-palm-beach-gardens" element={<RoofCostPalmBeachGardensPage />} />
          <Route path="roof-cost-jupiter" element={<RoofCostJupiterPage />} />
          <Route path="roof-cost-palm-springs" element={<RoofCostPalmSpringsPage />} />
          <Route path="roof-cost-greenacres" element={<RoofCostGreenacresPage />} />
          <Route path="roof-cost-lauderdale-by-the-sea" element={<RoofCostLauderdaleByTheSeaPage />} />
          <Route path="roof-cost-fort-lauderdale" element={<RoofCostFortLauderdalePage />} />
          <Route path="roof-cost-lighthouse-point" element={<RoofCostLighthousePointPage />} />
          <Route path="service-areas" element={<ServiceAreasPage />} />
          <Route path="service-areas/:city" element={<ServiceAreaDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
