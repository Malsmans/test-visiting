import React, { useState } from 'react';
import { MapPin, Maximize2, Minimize2, Navigation, Search } from 'lucide-react';

interface InteractiveMapProps {
  countries: Array<{
    name: string;
    coordinates?: { lat: number; lng: number };
  }>;
  selectedCountry?: string;
  onCountrySelect?: (country: string) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  countries, 
  selectedCountry, 
  onCountrySelect 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Default to Africa view
  const africaMapSrc = `https://maps.google.com/maps?q=Africa&t=&z=4&ie=UTF8&iwloc=&output=embed`;
  
  const selectedMapSrc = selectedCountry 
    ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedCountry)}&t=&z=6&ie=UTF8&iwloc=&output=embed`
    : africaMapSrc;

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openInGoogleMaps = () => {
    const location = selectedCountry || 'Africa';
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      isFullscreen ? 'fixed inset-4 z-50' : 'relative'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-amber-600" />
            Interactive Africa Map
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={openInGoogleMaps}
              className="p-2 text-amber-600 hover:text-amber-700 hover:bg-amber-100 rounded-lg transition-colors"
              title="Open in Google Maps"
            >
              <Navigation className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search and Country Selection */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            />
          </div>
          <select
            value={selectedCountry || ''}
            onChange={(e) => onCountrySelect?.(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm min-w-[200px]"
          >
            <option value="">View All Africa</option>
            {filteredCountries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className={`relative bg-gray-100 ${
        isFullscreen ? 'h-[calc(100vh-200px)]' : 'h-96'
      }`}>
        <iframe
          src={selectedMapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={selectedCountry ? `Map of ${selectedCountry}` : "Map of Africa"}
          className="w-full h-full"
        />
        
        {/* Map Overlay Info */}
        {selectedCountry && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-95 rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-600" />
              <span className="font-semibold text-gray-900">{selectedCountry}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>🗺️ Interactive map powered by Google Maps</span>
            {selectedCountry && (
              <span className="text-amber-600 font-medium">
                Viewing: {selectedCountry}
              </span>
            )}
          </div>
          <button
            onClick={openInGoogleMaps}
            className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            Open in Google Maps →
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;