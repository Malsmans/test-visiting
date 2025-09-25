import React, { useState } from 'react';
import { Car, Plane, Train, Bus, MapPin, Crown, DollarSign, Clock } from 'lucide-react';

interface TransportationGuideProps {
  country: string;
}

const TransportationGuide: React.FC<TransportationGuideProps> = ({ country }) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  // Mock transportation data
  const transportData: { [key: string]: any[] } = {
    'South Africa': [
      {
        type: 'Flight',
        name: 'Domestic Flights',
        description: 'Quick connections between major cities',
        cost: '$100-300',
        duration: '1-2 hours',
        pros: ['Fast', 'Comfortable', 'Reliable'],
        cons: ['Expensive', 'Airport transfers needed'],
        icon: Plane,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        type: 'Car Rental',
        name: 'Self-Drive',
        description: 'Freedom to explore at your own pace',
        cost: '$30-80/day',
        duration: 'Flexible',
        pros: ['Flexible', 'Scenic routes', 'Cost-effective for groups'],
        cons: ['Need international license', 'Traffic in cities'],
        icon: Car,
        color: 'from-green-500 to-emerald-600'
      },
      {
        type: 'Bus',
        name: 'Intercity Bus',
        description: 'Budget-friendly long-distance travel',
        cost: '$20-50',
        duration: '4-12 hours',
        pros: ['Affordable', 'Extensive network', 'Comfortable coaches'],
        cons: ['Slower', 'Fixed schedules'],
        icon: Bus,
        color: 'from-orange-500 to-red-600'
      }
    ],
    'Kenya': [
      {
        type: 'Flight',
        name: 'Safari Flights',
        description: 'Fly directly to safari destinations',
        cost: '$200-500',
        duration: '1-3 hours',
        pros: ['Time-saving', 'Aerial views', 'Access remote areas'],
        cons: ['Weather dependent', 'Expensive'],
        icon: Plane,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        type: 'Safari Vehicle',
        name: '4WD Safari Jeep',
        description: 'Purpose-built for game drives',
        cost: '$150-300/day',
        duration: 'Flexible',
        pros: ['Perfect for wildlife viewing', 'Expert guides', 'All-terrain'],
        cons: ['Bumpy rides', 'Expensive'],
        icon: Car,
        color: 'from-green-500 to-emerald-600'
      },
      {
        type: 'Train',
        name: 'SGR Train',
        description: 'Modern railway connecting major cities',
        cost: '$10-30',
        duration: '4-6 hours',
        pros: ['Comfortable', 'Scenic', 'Affordable'],
        cons: ['Limited routes', 'Fixed schedules'],
        icon: Train,
        color: 'from-purple-500 to-indigo-600'
      }
    ]
  };

  const getTransportOptions = () => {
    const options = transportData[country] || [];
    if (selectedType === 'all') return options;
    return options.filter(option => option.type.toLowerCase() === selectedType.toLowerCase());
  };

  const transportOptions = getTransportOptions();
  const types = ['all', 'flight', 'car rental', 'safari vehicle', 'bus', 'train'];

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

      {/* Filter */}
      <div className="mb-6">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white"
        >
          {types.map(type => (
            <option key={type} value={type} className="bg-gray-900 text-white">
              {type === 'all' ? 'All Transportation' : type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Transportation Options */}
      {transportOptions.length > 0 ? (
        <div className="space-y-6">
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`bg-gradient-to-r ${option.color} p-3 rounded-xl`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{option.name}</h4>
                        <p className="text-gray-400 text-sm">{option.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-emerald-400 font-bold">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {option.cost}
                        </div>
                        <div className="flex items-center text-blue-400 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {option.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <h5 className="text-green-300 font-semibold mb-2">Advantages</h5>
                    <ul className="space-y-1">
                      {option.pros.map((pro: string, proIndex: number) => (
                        <li key={proIndex} className="text-green-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                    <h5 className="text-red-300 font-semibold mb-2">Considerations</h5>
                    <ul className="space-y-1">
                      {option.cons.map((con: string, conIndex: number) => (
                        <li key={conIndex} className="text-red-200 text-sm flex items-center">
                          <span className="text-red-400 mr-2">!</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl">
          <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">No Transportation Options</h4>
          <p className="text-gray-400">
            No transportation options available for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default TransportationGuide;