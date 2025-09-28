import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, ExternalLink, Star, Crown, Sparkles, Share2, Heart, Bookmark } from 'lucide-react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Sharing country:', country.name);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    console.log('Toggled favorite for:', country.name);
  };

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    console.log('Toggled bookmark for:', country.name);
  };

  const countrySlug = country.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/country/${countrySlug}`}
      className="group relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-amber-500/20 hover:border-amber-400/40 banner-edge-glow banner-corner-sparkles banner-flowing-edge universal-edge-glow rotating-border breathing-edge"
    >
      {/* Luxury Badge */}
      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
        <Crown className="h-3 w-3 text-white" />
        <span className="text-white text-xs font-semibold tracking-wider uppercase">Premium</span>
      </div>

      {/* Region Badge */}
      <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
        <span className="text-amber-300 text-xs font-medium tracking-wide">{country.region}</span>
      </div>

      {/* Interactive Action Buttons */}
      <div className="absolute top-4 right-20 z-20 flex space-x-2">
        <button
          onClick={handleShare}
          className="p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/80 transition-all duration-300 group"
        >
          <Share2 className="h-4 w-4 text-white group-hover:text-blue-400" />
        </button>
        <button
          onClick={toggleFavorite}
          className={`p-2 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
            isFavorite ? 'bg-red-500/80 text-white' : 'bg-black/60 text-white hover:bg-red-500/60'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <button
          onClick={toggleBookmark}
          className={`p-2 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
            isBookmarked ? 'bg-amber-500/80 text-white' : 'bg-black/60 text-white hover:bg-amber-500/60'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden banner-flowing-edge">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Luxury Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 bg-gradient-to-b from-slate-900/95 to-gray-900/95 backdrop-blur-sm">
        {/* Title */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold country-name-glow transition-all duration-300">
            {country.name}
          </h3>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
          {country.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-amber-400">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="font-medium">{country.attractions.length} destinations</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users className="h-4 w-4 mr-1" />
              <span>{country.population}</span>
            </div>
          </div>
          
          {/* Luxury Indicator */}
          <div className="flex items-center space-x-1 text-amber-400">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wider uppercase">Luxury</span>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        
        {/* Luxury Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </Link>
  );
};

export default CountryCard;