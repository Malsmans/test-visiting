import React, { useState } from 'react';
import { Music, Palette, Calendar, UtensilsCrossed, Crown, Sparkles, Star, Award } from 'lucide-react';
import { CulturalInsight } from '../types';

interface CulturalInsightsProps {
  country: string;
  insights: CulturalInsight[];
}

const CulturalInsights: React.FC<CulturalInsightsProps> = ({ country, insights }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInsight, setSelectedInsight] = useState<CulturalInsight | null>(null);

  const categories = ['all', 'tradition', 'music', 'art', 'festival', 'cuisine'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tradition': return <Star className="h-5 w-5" />;
      case 'music': return <Music className="h-5 w-5" />;
      case 'art': return <Palette className="h-5 w-5" />;
      case 'festival': return <Calendar className="h-5 w-5" />;
      case 'cuisine': return <UtensilsCrossed className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tradition': return 'from-purple-500 to-indigo-600';
      case 'music': return 'from-pink-500 to-rose-600';
      case 'art': return 'from-blue-500 to-cyan-600';
      case 'festival': return 'from-orange-500 to-red-600';
      case 'cuisine': return 'from-green-500 to-emerald-600';
      default: return 'from-amber-500 to-yellow-600';
    }
  };

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20 universal-edge-glow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-xl">
            <Star className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Cultural Insights</h3>
            <p className="text-purple-300 text-sm">Rich heritage of {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-purple-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Heritage</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {getCategoryIcon(category)}
              <span className="capitalize">{category === 'all' ? 'All Categories' : category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInsights.map((insight, index) => {
          const Icon = getCategoryIcon(insight.category);
          return (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer card-container-glow"
              onClick={() => setSelectedInsight(insight)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(insight.category)}/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1`}>
                  {React.cloneElement(Icon as React.ReactElement, { className: "h-3 w-3 text-white" })}
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">{insight.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                  {insight.title}
                </h4>
                <p className="text-gray-300 text-sm line-clamp-4 leading-relaxed">
                  {insight.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className={`bg-gradient-to-r ${getCategoryColor(insight.category)}/20 rounded-full px-3 py-1 border border-white/20`}>
                    <span className="text-white text-xs font-medium capitalize">{insight.category}</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredInsights.length === 0 && (
        <div className="text-center py-12 bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl">
          <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">No Cultural Insights Found</h4>
          <p className="text-gray-400">
            No cultural insights available for the selected category.
          </p>
        </div>
      )}

      {/* Cultural Insight Detail Modal */}
      {selectedInsight && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto border border-amber-500/20 universal-edge-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-r ${getCategoryColor(selectedInsight.category)} p-2 rounded-xl`}>
                  {React.cloneElement(getCategoryIcon(selectedInsight.category) as React.ReactElement, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedInsight.title}</h3>
                  <p className="text-purple-300 capitalize">{selectedInsight.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedInsight(null)}
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
                  src={selectedInsight.image}
                  alt={selectedInsight.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(selectedInsight.category)}/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2`}>
                  {React.cloneElement(getCategoryIcon(selectedInsight.category) as React.ReactElement, { className: "h-4 w-4 text-white" })}
                  <span className="text-white font-semibold capitalize">{selectedInsight.category}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
                    Cultural Heritage
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedInsight.description}</p>
                </div>
                
                <div className={`bg-gradient-to-r ${getCategoryColor(selectedInsight.category)}/20 rounded-xl p-4 border ${getCategoryColor(selectedInsight.category).replace('from-', 'border-').replace(' to-indigo-600', '').replace(' to-rose-600', '').replace(' to-cyan-600', '').replace(' to-red-600', '').replace(' to-emerald-600', '').replace(' to-yellow-600', '')}/30`}>
                  <div className="flex items-center mb-2">
                    {React.cloneElement(getCategoryIcon(selectedInsight.category) as React.ReactElement, { className: "h-5 w-5 text-white" })}
                    <span className="font-semibold text-white ml-2 capitalize">{selectedInsight.category} Tradition</span>
                  </div>
                  <p className="text-gray-200">
                    This {selectedInsight.category} represents an important aspect of {country}'s rich cultural heritage and continues to play a vital role in the community today.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30">
                  <div className="flex items-center text-amber-300 text-sm">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-medium">Cultural Experience:</span>
                  </div>
                  <p className="text-amber-200 text-sm mt-2">
                    Visitors can experience this rich {selectedInsight.category} tradition through guided cultural tours, local festivals, and authentic community interactions.
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

export default CulturalInsights;