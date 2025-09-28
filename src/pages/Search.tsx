import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Crown, Sparkles, Star, MapPin } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import InteractiveMap from '../components/InteractiveMap';
import VideoBackground from '../components/VideoBackground';
import { allCountries } from '../data/countries';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCountryOnMap, setSelectedCountryOnMap] = useState<string>('');
  const [showMap, setShowMap] = useState(true);

  const regions = ['all', 'North Africa', 'West Africa', 'East Africa', 'Central Africa', 'Southern Africa'];

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = allCountries.filter((country) => {
      const matchesSearch = searchQuery === '' || 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'attractions') {
        return b.attractions.length - a.attractions.length;
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedRegion, sortBy]);

  const countriesForMap = allCountries.map(country => ({
    name: country.name,
    coordinates: { lat: 0, lng: 0 }
  }));

  return (
    <div className="min-h-screen relative">
      {/* 8K HD African Animal Background Videos */}
      <VideoBackground type="wildlife" className="fixed top-0 left-0 w-1/2 h-full z-0" />
      <VideoBackground type="animals" className="fixed top-0 right-0 w-1/2 h-full z-0" />
      
      {/* Content Overlay */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Luxury Header */}
          <div className="text-center mb-16 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-amber-500/20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-6">
              <Crown className="h-5 w-5 text-amber-400" />
              <span className="text-amber-300 font-medium tracking-wider text-sm uppercase">Exclusive Collection</span>
              <Sparkles className="h-5 w-5 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Luxury African Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Discover extraordinary destinations across the African continent, 
              curated for the most discerning travelers seeking authentic luxury experiences.
            </p>
          </div>

          {/* Interactive Map Section */}
          {showMap && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-amber-500/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Interactive Luxury Map</h2>
                    <p className="text-amber-300 text-sm">Explore premium destinations across Africa</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMap(false)}
                  className="text-gray-400 hover:text-amber-400 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 border border-white/20"
                >
                  Hide Map
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl blur"></div>
                <div className="relative">
                  <InteractiveMap
                    countries={countriesForMap}
                    selectedCountry={selectedCountryOnMap}
                    onCountrySelect={setSelectedCountryOnMap}
                  />
                </div>
              </div>
            </div>
          )}

          {!showMap && (
            <div className="mb-12 text-center">
              <button
                onClick={() => setShowMap(true)}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Show Interactive Map</span>
                </div>
              </button>
            </div>
          )}

          {/* Luxury Search and Filter Controls */}
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-12 border border-amber-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-amber-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search luxury destinations..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15"
                />
              </div>

              {/* Region Filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white transition-all duration-300 hover:bg-white/15"
              >
                {regions.map((region) => (
                  <option key={region} value={region} className="bg-gray-900 text-white">
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white transition-all duration-300 hover:bg-white/15"
              >
                <option value="name" className="bg-gray-900 text-white">Sort by Name</option>
                <option value="attractions" className="bg-gray-900 text-white">Sort by Attractions</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8 bg-gradient-to-r from-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-amber-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-white font-medium">
                  {filteredAndSortedCountries.length} premium destinations
                  {searchQuery && ` matching "${searchQuery}"`}
                  {selectedRegion !== 'all' && ` in ${selectedRegion}`}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-amber-400">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wider uppercase">Luxury Collection</span>
              </div>
            </div>
          </div>

          {/* Countries Grid */}
          {filteredAndSortedCountries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredAndSortedCountries.map((country) => (
                <div key={country.name} className="group transform hover:scale-105 transition-all duration-500">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <CountryCard country={country} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-amber-500/20">
              <div className="mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No destinations found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Try adjusting your search criteria or filters to discover more luxury destinations
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;