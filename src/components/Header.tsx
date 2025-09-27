import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Menu, X, Crown, Variable as Safari } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="safari-nav sticky top-0 z-50 border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Modern Safari Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-sm opacity-80 group-hover:opacity-100 transition-opacity safari-glow"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                <Safari className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black safari-gradient-text">
                WILD AFRICA
              </span>
              <span className="text-xs text-amber-300/90 font-semibold tracking-[0.25em] uppercase">
                Premium Safari Adventures
              </span>
            </div>
          </Link>

          {/* Modern Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search safari destinations..."
                className="w-full pl-6 pr-12 py-4 safari-glass border border-amber-500/30 rounded-full focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400 text-white placeholder-white/70 transition-all duration-300 hover:bg-white/20 font-medium"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-300 transition-colors safari-pulse"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </form>

          {/* Modern Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white/90 hover:text-amber-400 transition-colors font-semibold tracking-wide relative group text-lg"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/search" 
              className="text-white/90 hover:text-amber-400 transition-colors font-semibold tracking-wide relative group text-lg"
            >
              Countries
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/admin" 
              className="text-white/90 hover:text-amber-400 transition-colors font-semibold tracking-wide relative group text-lg"
            >
              Admin
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <div className="safari-button px-8 py-3 text-sm safari-glow">
              <span className="text-white font-bold tracking-wider">PREMIUM SAFARI</span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-full text-white/80 hover:text-amber-400 safari-glass hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-8 space-y-6 border-t border-amber-500/20 safari-glass">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search safari destinations..."
                    className="w-full pl-6 pr-12 py-4 safari-glass border border-amber-500/30 rounded-full focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400 text-white placeholder-white/70 font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-300"
                  >
                    <Search className="h-6 w-6" />
                  </button>
                </div>
              </form>
              <Link
                to="/"
                className="block px-6 py-4 text-white/90 hover:text-amber-400 hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/search"
                className="block px-6 py-4 text-white/90 hover:text-amber-400 hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Safari
              </Link>
              <div className="px-6 py-4 safari-button rounded-xl">
                <span className="text-white font-bold tracking-wider">PREMIUM SAFARI</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;