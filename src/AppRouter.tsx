import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ResidentialRoofing from './pages/ResidentialRoofing';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential-roofing" element={<ResidentialRoofing />} />
        </Routes>
      </Layout>
    </Router>
  );
}
