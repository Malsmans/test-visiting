import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';

interface LocationMapProps {
  name: string;
  location: string;
  type: 'attraction' | 'hotel' | 'restaurant' | 'transport';
  country: string;
  description?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  name, 
  location, 
  type, 
  country, 
  description 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Create search query for better map accuracy
  const searchQuery = `${name}, ${location}, ${country}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  const openInGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
    window.open(mapsUrl, '_blank');
  };

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir//${encodeURIComponent(searchQuery)}`;
    window.open(directionsUrl, '_blank');
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'attraction':
        return '🏛️';
      case 'hotel':
        return '🏨';
      case 'restaurant':
        return '🍽️';
      case 'transport':
        return '🚗';
      default:
        return '📍';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'attraction':
        return 'text-blue-600';
      case 'hotel':
        return 'text-purple-600';
      case 'restaurant':
        return 'text-green-600';
      case 'transport':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
      isExpanded ? 'fixed inset-4 z-50' : 'relative'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getTypeIcon()}</span>
            <div>
              <h3 className={`font-semibold ${getTypeColor()}`}>
                {name}
              </h3>
              <p className="text-sm text-gray-600">{location}, {country}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title={isExpanded ? "Minimize map" : "Expand map"}
            >
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={openInGoogleMaps}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium bg-blue-50 px-3 py-1 rounded-lg"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Open
            </button>
          </div>
        </div>
        {description && (
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        )}
      </div>
      
      {/* Map Container */}
      <div className={`relative bg-gray-100 ${
        isExpanded ? 'h-[calc(100vh-200px)]' : 'h-48'
      }`}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
          className="w-full h-full"
        />
        
        {/* Map Overlay */}
        <div className="absolute top-2 left-2 bg-white bg-opacity-95 rounded-lg p-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="h-3 w-3 text-red-500" />
            <span className="text-xs font-medium text-gray-900">{name}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={getDirections}
            className="flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors text-blue-600 text-sm"
          >
            <Navigation className="h-4 w-4" />
            <span>Directions</span>
          </button>
          <button
            onClick={openInGoogleMaps}
            className="flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-green-50 transition-colors text-green-600 text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;