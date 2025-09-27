import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Menu, X, Crown, Variable as Safari, ExternalLink, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgenciesOpen, setIsAgenciesOpen] = useState(false);
  const [isAirlinesOpen, setIsAirlinesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const travelAgencies = [
    {
      continent: 'Europe',
      agencies: [
        { name: 'TUI Group', url: 'https://www.tui.com', country: 'Germany' },
        { name: 'Thomas Cook', url: 'https://www.thomascook.com', country: 'UK' },
        { name: 'Kuoni', url: 'https://www.kuoni.co.uk', country: 'Switzerland' },
        { name: 'Jet2holidays', url: 'https://www.jet2holidays.com', country: 'UK' }
      ]
    },
    {
      continent: 'North America',
      agencies: [
        { name: 'Expedia', url: 'https://www.expedia.com', country: 'USA' },
        { name: 'Priceline', url: 'https://www.priceline.com', country: 'USA' },
        { name: 'AAA Travel', url: 'https://www.aaa.com/travel', country: 'USA' },
        { name: 'Flight Centre', url: 'https://www.flightcentre.ca', country: 'Canada' }
      ]
    },
    {
      continent: 'South America',
      agencies: [
        { name: 'CVC Corp', url: 'https://www.cvc.com.br', country: 'Brazil' },
        { name: 'Despegar', url: 'https://www.despegar.com', country: 'Argentina' },
        { name: 'Decolar', url: 'https://www.decolar.com', country: 'Brazil' },
        { name: 'Almundo', url: 'https://www.almundo.com', country: 'Argentina' }
      ]
    },
    {
      continent: 'Africa',
      agencies: [
        { name: 'African Budget Safaris', url: 'https://www.africanbudgetsafaris.com', country: 'Tanzania' },
        { name: 'Thompsons Africa', url: 'https://www.thompsonsafrica.com', country: 'South Africa' },
        { name: 'Wild Frontiers', url: 'https://www.wildfrontiers.com', country: 'South Africa' },
        { name: 'Abercrombie & Kent', url: 'https://www.abercrombiekent.com', country: 'Kenya' }
      ]
    },
    {
      continent: 'Asia',
      agencies: [
        { name: 'Ctrip', url: 'https://www.trip.com', country: 'China' },
        { name: 'MakeMyTrip', url: 'https://www.makemytrip.com', country: 'India' },
        { name: 'Rakuten Travel', url: 'https://travel.rakuten.com', country: 'Japan' },
        { name: 'Agoda', url: 'https://www.agoda.com', country: 'Singapore' }
      ]
    }
  ];

  const airlines = [
    {
      continent: 'Europe',
      airlines: [
        { name: 'Lufthansa', url: 'https://www.lufthansa.com', country: 'Germany' },
        { name: 'Air France', url: 'https://www.airfrance.com', country: 'France' },
        { name: 'British Airways', url: 'https://www.britishairways.com', country: 'UK' },
        { name: 'KLM Royal Dutch Airlines', url: 'https://www.klm.com', country: 'Netherlands' },
        { name: 'Swiss International Air Lines', url: 'https://www.swiss.com', country: 'Switzerland' },
        { name: 'Turkish Airlines', url: 'https://www.turkishairlines.com', country: 'Turkey' }
      ]
    },
    {
      continent: 'North America',
      airlines: [
        { name: 'American Airlines', url: 'https://www.aa.com', country: 'USA' },
        { name: 'Delta Air Lines', url: 'https://www.delta.com', country: 'USA' },
        { name: 'United Airlines', url: 'https://www.united.com', country: 'USA' },
        { name: 'Air Canada', url: 'https://www.aircanada.com', country: 'Canada' },
        { name: 'JetBlue Airways', url: 'https://www.jetblue.com', country: 'USA' },
        { name: 'Southwest Airlines', url: 'https://www.southwest.com', country: 'USA' }
      ]
    },
    {
      continent: 'South America',
      airlines: [
        { name: 'LATAM Airlines', url: 'https://www.latam.com', country: 'Chile/Brazil' },
        { name: 'Avianca', url: 'https://www.avianca.com', country: 'Colombia' },
        { name: 'GOL Linhas Aéreas', url: 'https://www.voegol.com.br', country: 'Brazil' },
        { name: 'Azul Brazilian Airlines', url: 'https://www.azul.com.br', country: 'Brazil' },
        { name: 'Copa Airlines', url: 'https://www.copaair.com', country: 'Panama' },
        { name: 'Aerolíneas Argentinas', url: 'https://www.aerolineas.com.ar', country: 'Argentina' }
      ]
    },
    {
      continent: 'Africa',
      airlines: [
        { name: 'South African Airways', url: 'https://www.flysaa.com', country: 'South Africa' },
        { name: 'Ethiopian Airlines', url: 'https://www.ethiopianairlines.com', country: 'Ethiopia' },
        { name: 'Kenya Airways', url: 'https://www.kenya-airways.com', country: 'Kenya' },
        { name: 'EgyptAir', url: 'https://www.egyptair.com', country: 'Egypt' },
        { name: 'Royal Air Maroc', url: 'https://www.royalairmaroc.com', country: 'Morocco' },
        { name: 'Air Mauritius', url: 'https://www.airmauritius.com', country: 'Mauritius' }
      ]
    },
    {
      continent: 'Asia',
      airlines: [
        { name: 'Singapore Airlines', url: 'https://www.singaporeair.com', country: 'Singapore' },
        { name: 'Emirates', url: 'https://www.emirates.com', country: 'UAE' },
        { name: 'Qatar Airways', url: 'https://www.qatarairways.com', country: 'Qatar' },
        { name: 'Cathay Pacific', url: 'https://www.cathaypacific.com', country: 'Hong Kong' },
        { name: 'Japan Airlines (JAL)', url: 'https://www.jal.com', country: 'Japan' },
        { name: 'All Nippon Airways (ANA)', url: 'https://www.ana.co.jp', country: 'Japan' }
      ]
    }
  ];

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
            
            {/* Travel Agencies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAgenciesOpen(!isAgenciesOpen)}
                className="flex items-center space-x-1 text-white/90 hover:text-amber-400 transition-colors font-semibold tracking-wide relative group text-lg"
              >
                <span>Travel Agencies</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAgenciesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              
              {isAgenciesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 safari-glass border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="max-h-96 overflow-y-auto">
                    {travelAgencies.map((continent, continentIndex) => (
                      <div key={continentIndex} className="border-b border-amber-500/20 last:border-b-0">
                        <div className="px-4 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                          <h4 className="font-bold text-amber-300 text-sm tracking-wider uppercase">
                            {continent.continent}
                          </h4>
                        </div>
                        <div className="py-2">
                          {continent.agencies.map((agency, agencyIndex) => (
                            <a
                              key={agencyIndex}
                              href={agency.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 hover:bg-amber-500/10 transition-colors group"
                              onClick={() => setIsAgenciesOpen(false)}
                            >
                              <div>
                                <div className="text-white font-medium group-hover:text-amber-400 transition-colors">
                                  {agency.name}
                                </div>
                                <div className="text-gray-400 text-xs">
                                  {agency.country}
                                </div>
                              </div>
                              <ExternalLink className="h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Airlines Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAirlinesOpen(!isAirlinesOpen)}
                className="flex items-center space-x-1 text-white/90 hover:text-amber-400 transition-colors font-semibold tracking-wide relative group text-lg"
              >
                <span>Airlines</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAirlinesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              
              {isAirlinesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 safari-glass border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="max-h-96 overflow-y-auto">
                    {airlines.map((continent, continentIndex) => (
                      <div key={continentIndex} className="border-b border-amber-500/20 last:border-b-0">
                        <div className="px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                          <h4 className="font-bold text-blue-300 text-sm tracking-wider uppercase">
                            {continent.continent}
                          </h4>
                        </div>
                        <div className="py-2">
                          {continent.airlines.map((airline, airlineIndex) => (
                            <a
                              key={airlineIndex}
                              href={airline.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 hover:bg-blue-500/10 transition-colors group"
                              onClick={() => setIsAirlinesOpen(false)}
                            >
                              <div>
                                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                  {airline.name}
                                </div>
                                <div className="text-gray-400 text-xs">
                                  {airline.country}
                                </div>
                              </div>
                              <ExternalLink className="h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
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
              
              {/* Mobile Travel Agencies */}
              <div className="px-6 py-4">
                <button
                  onClick={() => setIsAgenciesOpen(!isAgenciesOpen)}
                  className="flex items-center justify-between w-full text-white/90 hover:text-amber-400 transition-colors font-semibold text-lg"
                >
                  <span>Travel Agencies</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAgenciesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAgenciesOpen && (
                  <div className="mt-4 space-y-4 max-h-64 overflow-y-auto">
                    {travelAgencies.map((continent, continentIndex) => (
                      <div key={continentIndex}>
                        <h4 className="font-bold text-amber-300 text-sm tracking-wider uppercase mb-2">
                          {continent.continent}
                        </h4>
                        <div className="space-y-2 ml-4">
                          {continent.agencies.map((agency, agencyIndex) => (
                            <a
                              key={agencyIndex}
                              href={agency.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between text-white/80 hover:text-amber-400 transition-colors text-sm"
                              onClick={() => {
                                setIsAgenciesOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              <div>
                                <div className="font-medium">{agency.name}</div>
                                <div className="text-gray-400 text-xs">{agency.country}</div>
                              </div>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Airlines */}
              <div className="px-6 py-4">
                <button
                  onClick={() => setIsAirlinesOpen(!isAirlinesOpen)}
                  className="flex items-center justify-between w-full text-white/90 hover:text-amber-400 transition-colors font-semibold text-lg"
                >
                  <span>Airlines</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAirlinesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAirlinesOpen && (
                  <div className="mt-4 space-y-4 max-h-64 overflow-y-auto">
                    {airlines.map((continent, continentIndex) => (
                      <div key={continentIndex}>
                        <h4 className="font-bold text-blue-300 text-sm tracking-wider uppercase mb-2">
                          {continent.continent}
                        </h4>
                        <div className="space-y-2 ml-4">
                          {continent.airlines.map((airline, airlineIndex) => (
                            <a
                              key={airlineIndex}
                              href={airline.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between text-white/80 hover:text-blue-400 transition-colors text-sm"
                              onClick={() => {
                                setIsAirlinesOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              <div>
                                <div className="font-medium">{airline.name}</div>
                                <div className="text-gray-400 text-xs">{airline.country}</div>
                              </div>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
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
      
      {/* Close dropdown when clicking outside */}
      {(isAgenciesOpen || isAirlinesOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsAgenciesOpen(false);
            setIsAirlinesOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;