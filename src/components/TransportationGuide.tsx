import React, { useState } from 'react';
import { Car, Plane, Train, Bus, MapPin, Crown, DollarSign, Clock, ExternalLink } from 'lucide-react';
import { allCountries } from '../data/countries';

interface TransportationGuideProps {
  country: string;
}

const TransportationGuide: React.FC<TransportationGuideProps> = ({ country }) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  // Get country data
  const countryData = allCountries.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  );

  const transportOptions = countryData?.transportation || [];

  // Extract unique transport types from the data
  const types = ['all', ...new Set(transportOptions.map(t => t.type.toLowerCase()))];

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-xl">
            <Car className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Transportation Guide</h3>
            <p className="text-blue-300 text-sm">Getting around {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-blue-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Travel Guide</span>
        </div>
      </div>


      {/* Transportation Options */}
      {transportOptions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportOptions.map((option, index) => {
            const TransportCard = option.link ? 'a' : 'div';
            const cardProps = option.link
              ? {
                  href: option.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer block'
                }
              : {
                  className: 'bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10 transition-all duration-300'
                };

            return (
              <TransportCard key={index} {...cardProps}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-xl">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  {option.link && (
                    <div className="bg-blue-500/20 p-2 rounded-full border border-blue-500/30 group-hover:border-blue-400/50 transition-all">
                      <ExternalLink className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                    </div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{option.type}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{option.description}</p>

                <div className="space-y-3">
                  <div className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-500/30">
                    <div className="flex items-center text-emerald-400 font-bold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-sm">{option.price}</span>
                    </div>
                    <div className="text-emerald-300 text-xs mt-1">Premium Rate</div>
                  </div>

                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                    <div className="flex items-center text-blue-400 font-medium">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm truncate">{option.route}</span>
                    </div>
                    <div className="text-blue-300 text-xs mt-1">Route</div>
                  </div>
                </div>

                {option.link && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      <span>Click to book or learn more</span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </div>
                  </div>
                )}
              </TransportCard>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl">
          <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">No Transportation Options</h4>
          <p className="text-gray-400">
            Transportation information coming soon for {country}.
          </p>
        </div>
      )}
    </div>
  );
};

export default TransportationGuide;