import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Results from './components/Results';
import Curriculum from './components/Curriculum';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import Certifications from './components/Certifications';
import ForCollegesPage from './pages/ForCollegesPage';
import PlacementSupportPage from './pages/PlacementSupportPage';
import HireTalentPage from './pages/HireTalentPage';
import HiringManagersPage from './pages/HiringManagersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Results />
    <Curriculum />
    <Workflow />
    <Testimonials />
    <FAQ />
    {/* CTA Section */}
    <section className="py-16 md:py-20 px-6 border-t border-slate-200 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Ready for the 2026 AI Era?
        </h2>
        <p className="text-slate-600 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Join the future of education. Empower yourself with cutting-edge AI skills and land your dream career.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
           <button className="h-10 px-6 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors border border-slate-900">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/colleges" element={<ForCollegesPage />} />
            <Route path="/placement-support" element={<PlacementSupportPage />} />
            <Route path="/hire-talent" element={<HireTalentPage />} />
            <Route path="/hiring-managers" element={<HiringManagersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;