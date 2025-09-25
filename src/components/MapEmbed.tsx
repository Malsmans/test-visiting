import React from 'react';
import { MapPin, Navigation, Clock, ExternalLink, Crown, Sparkles } from 'lucide-react';

interface MapEmbedProps {
  country: string;
  city?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ country, city }) => {
  // Use the free Google Maps Embed API (no API key required for basic embedding)
  const location = city ? `${city}, ${country}` : country;
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(location)}!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`;
  
  // Alternative: Use Google Maps search URL for more reliable results
  const searchMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=8&ie=UTF8&iwloc=&output=embed`;

  const openInGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank');
  };

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir//${encodeURIComponent(location)}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20">
      <div className="p-6 border-b border-amber-500/20 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Luxury Location Guide</h3>
              <p className="text-amber-300 text-sm">{location}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-amber-400">
              <Crown className="h-4 w-4" />
              <span className="text-xs font-medium tracking-wider uppercase">Premium</span>
            </div>
            <button
              onClick={openInGoogleMaps}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Open Maps</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative h-80 bg-gray-800">
        <iframe
          src={searchMapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Luxury map of ${location}`}
          className="w-full h-full"
        />
        
        {/* Luxury Overlay */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <Sparkles className="h-3 w-3 text-white" />
          <span className="text-white text-xs font-semibold tracking-wider uppercase">Exclusive</span>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={getDirections}
            className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/40"
          >
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Navigation className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-amber-400 font-semibold">Get Directions</div>
              <div className="text-gray-400 text-sm">Premium routing</div>
            </div>
          </button>
          <button
            onClick={openInGoogleMaps}
            className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-blue-400 font-semibold">View Details</div>
              <div className="text-gray-400 text-sm">Full experience</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;