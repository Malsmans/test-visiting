import React, { useState } from 'react';
import { Lightbulb, Shield, Heart, Plane, Camera, MapPin, Crown, ChevronDown, ChevronUp } from 'lucide-react';

interface TravelTipsProps {
  country: string;
}

const TravelTips: React.FC<TravelTipsProps> = ({ country }) => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const travelTips = [
    {
      icon: Shield,
      title: 'Health & Safety',
      preview: 'Essential health precautions and safety guidelines',
      details: [
        'Check vaccination requirements before travel',
        'Carry a first aid kit with basic medications',
        'Stay hydrated and use sunscreen regularly',
        'Keep emergency contacts readily available',
        'Purchase comprehensive travel insurance'
      ],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Cultural Etiquette',
      preview: 'Respect local customs and traditions',
      details: [
        'Learn basic greetings in the local language',
        'Dress modestly when visiting religious sites',
        'Ask permission before photographing people',
        'Respect local customs and traditions',
        'Tip appropriately according to local standards'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Plane,
      title: 'Travel Essentials',
      preview: 'Must-have items for your African adventure',
      details: [
        'Pack lightweight, breathable clothing',
        'Bring a universal power adapter',
        'Carry cash in local currency',
        'Download offline maps and translation apps',
        'Pack insect repellent and antimalarial medication'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Camera,
      title: 'Photography Tips',
      preview: 'Capture the beauty of Africa responsibly',
      details: [
        'Golden hour provides the best lighting',
        'Respect wildlife and maintain safe distances',
        'Ask permission before photographing locals',
        'Bring extra batteries and memory cards',
        'Consider a telephoto lens for wildlife photography'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Local Navigation',
      preview: 'Getting around like a local',
      details: [
        'Use reputable taxi services or ride-sharing apps',
        'Learn about local transportation options',
        'Keep your accommodation address written down',
        'Negotiate prices before using services',
        'Stay aware of your surroundings at all times'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const toggleTip = (index: number) => {
    setExpandedTip(expandedTip === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
            <Lightbulb className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Travel Tips</h3>
            <p className="text-amber-300 text-sm">Essential advice for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-amber-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Expert Tips</span>
        </div>
      </div>

      <div className="space-y-4">
        {travelTips.map((tip, index) => {
          const Icon = tip.icon;
          const isExpanded = expandedTip === index;
          
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleTip(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${tip.color} p-3 rounded-xl`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{tip.title}</h4>
                    <p className="text-gray-400 text-sm">{tip.preview}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-amber-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6">
                  <div className="ml-16 space-y-3">
                    {tip.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelTips;