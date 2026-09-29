import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AIChatbot from './components/AIChatbot';
import GreetingAnimations from './components/GreetingAnimations';
import Home from './pages/Home';

const CountryDetails = lazy(() => import('./pages/CountryDetails'));
const Search = lazy(() => import('./pages/Search'));
const Admin = lazy(() => import('./pages/Admin'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen luxury-african-bg" style={{
          background: '#FFFFFF',
          minHeight: '100vh'
        }}>
          <GreetingAnimations />
          <Header />
          <ScrollToTop />
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/country/:countryName" element={<CountryDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
          <Footer />
          <AIChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
