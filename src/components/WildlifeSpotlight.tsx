import React, { useState } from 'react';
import { Eye, Camera, Clock, MapPin, Crown, Sparkles, Shield, Award } from 'lucide-react';
import { Wildlife } from '../types';

interface WildlifeSpotlightProps {
  country: string;
  wildlife: Wildlife[];
}

const WildlifeSpotlight: React.FC<WildlifeSpotlightProps> = ({ country, wildlife }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<Wildlife | null>(null);

  const getConservationColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'endangered': return 'from-red-500 to-pink-600';
      case 'vulnerable': return 'from-orange-500 to-amber-600';
      case 'near threatened': return 'from-yellow-500 to-orange-600';
      case 'least concern': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getConservationIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'endangered': return <Shield className="h-4 w-4 text-red-400" />;
      case 'vulnerable': return <Shield className="h-4 w-4 text-orange-400" />;
      case 'near threatened': return <Shield className="h-4 w-4 text-yellow-400" />;
      case 'least concern': return <Shield className="h-4 w-4 text-green-400" />;
      default: return <Shield className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20 universal-edge-glow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-xl">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Wildlife Spotlight</h3>
            <p className="text-green-300 text-sm">Iconic animals of {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-green-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Conservation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wildlife.map((animal, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-green-500/30 transition-all duration-500 cursor-pointer card-container-glow"
            onClick={() => setSelectedAnimal(animal)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className={`absolute top-4 left-4 bg-gradient-to-r ${getConservationColor(animal.conservationStatus)}/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1`}>
                {getConservationIcon(animal.conservationStatus)}
                <span className="text-white text-xs font-semibold tracking-wider uppercase">{animal.conservationStatus}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                {animal.name}
              </h4>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(animal.name);
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorites.has(animal.name)
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${favorites.has(animal.name) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareAnimal(animal);
                    }}
                    className="p-2 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-blue-400 transition-all duration-300"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                {animal.description}
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                  <div className="flex items-center text-blue-400 text-sm">
                    <Clock className="h-3 w-3 mr-2" />
                    <span className="font-medium">Best Time: {animal.bestSpottingTime}</span>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                  <div className="flex items-center text-green-400 text-sm">
                    <MapPin className="h-3 w-3 mr-2" />
                    <span className="font-medium">Habitat: {animal.habitat}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wildlife Detail Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto border border-amber-500/20 universal-edge-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-xl">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedAnimal.name}</h3>
              </div>
              <button
                onClick={() => setSelectedAnimal(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={selectedAnimal.image}
                  alt={selectedAnimal.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getConservationColor(selectedAnimal.conservationStatus)}/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2`}>
                  {getConservationIcon(selectedAnimal.conservationStatus)}
                  <span className="text-white font-semibold">{selectedAnimal.conservationStatus}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-green-400" />
                    About This Species
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedAnimal.description}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                    <div className="flex items-center text-blue-400 mb-2">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Best Spotting Time</span>
                    </div>
                    <p className="text-blue-200">{selectedAnimal.bestSpottingTime}</p>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                    <div className="flex items-center text-green-400 mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Natural Habitat</span>
                    </div>
                    <p className="text-green-200">{selectedAnimal.habitat}</p>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${getConservationColor(selectedAnimal.conservationStatus)}/20 rounded-xl p-4 border ${getConservationColor(selectedAnimal.conservationStatus).replace('from-', 'border-').replace(' to-emerald-600', '').replace(' to-pink-600', '').replace(' to-amber-600', '').replace(' to-orange-600', '').replace(' to-slate-600', '')}/30`}>
                    <div className="flex items-center mb-2">
                      {getConservationIcon(selectedAnimal.conservationStatus)}
                      <span className="font-semibold text-white ml-2">Conservation Status</span>
                    </div>
                    <p className="text-gray-200">{selectedAnimal.conservationStatus}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30">
                  <div className="flex items-center text-amber-300 text-sm">
                    <Camera className="h-4 w-4 mr-2" />
                    <span className="font-medium">Photography Tip:</span>
                  </div>
                  <p className="text-amber-200 text-sm mt-2">
                    Best photographed during {selectedAnimal.bestSpottingTime.toLowerCase()} when they are most active in their natural {selectedAnimal.habitat.toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WildlifeSpotlight;