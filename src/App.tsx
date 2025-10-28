import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import AIChatbot from './components/AIChatbot';
import GreetingAnimations from './components/GreetingAnimations';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Search from './pages/Search';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen luxury-african-bg">
          <GreetingAnimations />
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/country/:countryName" element={<CountryDetails />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <AIChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;