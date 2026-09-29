import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Crown, Sparkles, Star, MapPin } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import InteractiveMap from '../components/InteractiveMap';
import { allCountries } from '../data/countries';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCountryOnMap, setSelectedCountryOnMap] = useState<string>('');
  const [showMap, setShowMap] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState('all');
  const [selectedTravelStyle, setSelectedTravelStyle] = useState('all');
  const [selectedBudgetRange, setSelectedBudgetRange] = useState('all');

  const regions = ['all', 'North Africa', 'West Africa', 'East Africa', 'Central Africa', 'Southern Africa'];

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = allCountries.filter((country) => {
      const matchesSearch = searchQuery === '' || 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
      
      const matchesActivity = selectedActivity === 'all' || 
        (country.activities && country.activities.some(activity => 
          activity.toLowerCase().includes(selectedActivity.toLowerCase())
        ));
      
      const matchesTravelStyle = selectedTravelStyle === 'all' || 
        (country.travelStyle && country.travelStyle.some(style => 
          style.toLowerCase().includes(selectedTravelStyle.toLowerCase())
        ));
      
      const matchesBudgetRange = selectedBudgetRange === 'all' || 
        (country.budgetRange && country.budgetRange === selectedBudgetRange);
      
      return matchesSearch && matchesRegion && matchesActivity && matchesTravelStyle && matchesBudgetRange;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'attractions') {
        return b.attractions.length - a.attractions.length;
      } else if (sortBy === 'budget') {
        const budgetOrder = { 'budget': 1, 'mid-range': 2, 'luxury': 3 };
        const aOrder = budgetOrder[a.budgetRange as keyof typeof budgetOrder] || 2;
        const bOrder = budgetOrder[b.budgetRange as keyof typeof budgetOrder] || 2;
        return aOrder - bOrder;
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedRegion, sortBy, selectedActivity, selectedTravelStyle, selectedBudgetRange]);

  const countriesForMap = allCountries.map(country => ({
    name: country.name,
    coordinates: { lat: 0, lng: 0 }
  }));

  return (
    <div className="min-h-screen relative luxury-african-bg">
      {/* Content Overlay */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Luxury Header */}
          <div className="text-center mb-16 bg-white border border-amber-600/20 shadow-lg rounded-3xl p-12 universal-edge-glow card-container-glow breathing-edge">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-2 mb-6">
              <Crown className="h-5 w-5 text-amber-600" />
              <span className="text-amber-700 font-medium tracking-wider text-sm uppercase">Exclusive Collection</span>
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Luxury African Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Discover extraordinary destinations across the African continent, 
              curated for the most discerning travelers seeking authentic luxury experiences.
            </p>
          </div>

          {/* Interactive Map Section */}
          {showMap && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6 bg-white border border-amber-600/20 shadow-lg rounded-2xl p-6 universal-edge-glow section-edge-glow">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Interactive Luxury Map</h2>
                    <p className="text-amber-700 text-sm">Explore premium destinations across Africa</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMap(false)}
                  className="text-gray-500 hover:text-amber-600 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-200"
                >
                  Hide Map
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl blur universal-edge-glow"></div>
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
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 button-edge-glow universal-edge-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity universal-edge-glow"></div>
                <div className="relative flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Show Interactive Map</span>
                </div>
              </button>
            </div>
          )}

          {/* Luxury Search and Filter Controls */}
          <div className="bg-white border border-amber-600/20 shadow-lg rounded-2xl p-8 mb-12 universal-edge-glow card-container-glow section-edge-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:bg-gray-150"
                />
              </div>

              {/* Region Filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 transition-all duration-300 hover:bg-gray-150"
              >
                {regions.map((region) => (
                  <option key={region} value={region} className="bg-white text-gray-900">
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 transition-all duration-300 hover:bg-gray-150"
              >
                <option value="name" className="bg-white text-gray-900">Sort by Name</option>
                <option value="attractions" className="bg-white text-gray-900">Sort by Attractions</option>
                <option value="budget" className="bg-white text-gray-900">Sort by Budget</option>
              </select>

              {/* Activity Filter */}
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 transition-all duration-300 hover:bg-gray-150"
              >
                <option value="all" className="bg-white text-gray-900">All Activities</option>
                <option value="Safari" className="bg-white text-gray-900">Safari</option>
                <option value="Cultural Tours" className="bg-white text-gray-900">Cultural Tours</option>
                <option value="Beach Relaxation" className="bg-white text-gray-900">Beach Relaxation</option>
                <option value="Mountain Trekking" className="bg-white text-gray-900">Mountain Trekking</option>
                <option value="Photography" className="bg-white text-gray-900">Photography</option>
              </select>

              {/* Travel Style Filter */}
              <select
                value={selectedTravelStyle}
                onChange={(e) => setSelectedTravelStyle(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 transition-all duration-300 hover:bg-gray-150"
              >
                <option value="all" className="bg-white text-gray-900">All Travel Styles</option>
                <option value="Family Safari" className="bg-white text-gray-900">Family Safari</option>
                <option value="Luxury Travel" className="bg-white text-gray-900">Luxury Travel</option>
                <option value="Adventure" className="bg-white text-gray-900">Adventure</option>
                <option value="Honeymoon" className="bg-white text-gray-900">Honeymoon</option>
                <option value="Solo Travel" className="bg-white text-gray-900">Solo Travel</option>
              </select>

              {/* Budget Range Filter */}
              <select
                value={selectedBudgetRange}
                onChange={(e) => setSelectedBudgetRange(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-gray-900 transition-all duration-300 hover:bg-gray-150"
              >
                <option value="all" className="bg-white text-gray-900">All Budgets</option>
                <option value="budget" className="bg-white text-gray-900">Budget</option>
                <option value="mid-range" className="bg-white text-gray-900">Mid-range</option>
                <option value="luxury" className="bg-white text-gray-900">Luxury</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8 bg-white border border-amber-600/20 shadow-lg rounded-xl p-6 universal-edge-glow breathing-edge">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-900 font-medium">
                  {filteredAndSortedCountries.length} premium destinations
                  {searchQuery && ` matching "${searchQuery}"`}
                  {selectedRegion !== 'all' && ` in ${selectedRegion}`}
                  {selectedActivity !== 'all' && ` for ${selectedActivity}`}
                  {selectedTravelStyle !== 'all' && ` (${selectedTravelStyle})`}
                  {selectedBudgetRange !== 'all' && ` - ${selectedBudgetRange} range`}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-amber-600">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wider uppercase">Luxury Collection</span>
              </div>
            </div>
            
            {/* Active Filters Display */}
            {(selectedRegion !== 'all' || selectedActivity !== 'all' || selectedTravelStyle !== 'all' || selectedBudgetRange !== 'all') && (
              <div className="mt-4 pt-4 border-t border-amber-600/20">
                <div className="flex flex-wrap gap-2">
                  <span className="text-amber-700 text-sm font-medium">Active Filters:</span>
                  {selectedRegion !== 'all' && (
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border border-blue-500/30">
                      {selectedRegion}
                    </span>
                  )}
                  {selectedActivity !== 'all' && (
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs border border-green-500/30">
                      {selectedActivity}
                    </span>
                  )}
                  {selectedTravelStyle !== 'all' && (
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs border border-purple-500/30">
                      {selectedTravelStyle}
                    </span>
                  )}
                  {selectedBudgetRange !== 'all' && (
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs border border-emerald-500/30">
                      {selectedBudgetRange.charAt(0).toUpperCase() + selectedBudgetRange.slice(1).replace('-', ' ')}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedRegion('all');
                      setSelectedActivity('all');
                      setSelectedTravelStyle('all');
                      setSelectedBudgetRange('all');
                    }}
                    className="text-amber-600 hover:text-amber-700 text-xs underline ml-2"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Countries Grid */}
          {filteredAndSortedCountries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredAndSortedCountries.map((country, index) => (
                <div key={country.name} className="group transform hover:scale-105 transition-all duration-500 country-card-entrance card-container-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 universal-edge-glow"></div>
                    <div className="relative">
                      <CountryCard country={country} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-amber-600/20 shadow-lg rounded-3xl universal-edge-glow breathing-edge">
              <div className="mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 universal-edge-glow rotating-border">
                  <Filter className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No destinations found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
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