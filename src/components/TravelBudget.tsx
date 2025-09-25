import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingUp, Crown, Calculator, Wallet } from 'lucide-react';

interface TravelBudgetProps {
  country: string;
}

const TravelBudget: React.FC<TravelBudgetProps> = ({ country }) => {
  const [travelStyle, setTravelStyle] = useState<string>('mid-range');
  const [duration, setDuration] = useState<number>(7);

  // Mock budget data for different travel styles
  const budgetData: { [key: string]: any } = {
    'South Africa': {
      budget: { accommodation: 50, food: 30, transport: 25, activities: 40, misc: 20 },
      'mid-range': { accommodation: 120, food: 60, transport: 50, activities: 80, misc: 40 },
      luxury: { accommodation: 300, food: 150, transport: 120, activities: 200, misc: 80 }
    },
    'Kenya': {
      budget: { accommodation: 40, food: 25, transport: 30, activities: 60, misc: 15 },
      'mid-range': { accommodation: 100, food: 50, transport: 60, activities: 120, misc: 30 },
      luxury: { accommodation: 250, food: 120, transport: 150, activities: 300, misc: 70 }
    },
    'Morocco': {
      budget: { accommodation: 35, food: 20, transport: 20, activities: 30, misc: 15 },
      'mid-range': { accommodation: 80, food: 45, transport: 40, activities: 60, misc: 25 },
      luxury: { accommodation: 200, food: 100, transport: 80, activities: 150, misc: 50 }
    }
  };

  const getBudgetInfo = () => {
    const countryData = budgetData[country];
    if (!countryData) {
      return {
        budget: { accommodation: 30, food: 20, transport: 15, activities: 25, misc: 10 },
        'mid-range': { accommodation: 80, food: 40, transport: 35, activities: 50, misc: 25 },
        luxury: { accommodation: 200, food: 100, transport: 80, activities: 120, misc: 50 }
      };
    }
    return countryData;
  };

  const budgetInfo = getBudgetInfo();
  const currentBudget = budgetInfo[travelStyle];

  const calculateTotal = () => {
    return Object.values(currentBudget).reduce((sum: number, cost: any) => sum + cost, 0) * duration;
  };

  const categories = [
    { key: 'accommodation', label: 'Accommodation', icon: '🏨', color: 'from-blue-500 to-cyan-600' },
    { key: 'food', label: 'Food & Dining', icon: '🍽️', color: 'from-green-500 to-emerald-600' },
    { key: 'transport', label: 'Transportation', icon: '🚗', color: 'from-orange-500 to-red-600' },
    { key: 'activities', label: 'Activities', icon: '🎯', color: 'from-purple-500 to-indigo-600' },
    { key: 'misc', label: 'Miscellaneous', icon: '🛍️', color: 'from-pink-500 to-rose-600' }
  ];

  const travelStyles = [
    { value: 'budget', label: 'Budget Travel', description: 'Hostels, local food, public transport' },
    { value: 'mid-range', label: 'Mid-Range', description: 'Hotels, mix of dining, private transport' },
    { value: 'luxury', label: 'Luxury', description: 'Premium hotels, fine dining, private tours' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Travel Budget Calculator</h3>
            <p className="text-emerald-300 text-sm">Estimate costs for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-emerald-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Smart Calculator</span>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-emerald-300 text-sm font-medium mb-3">Travel Style</label>
          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
          >
            {travelStyles.map(style => (
              <option key={style.value} value={style.value} className="bg-gray-900 text-white">
                {style.label}
              </option>
            ))}
          </select>
          <p className="text-gray-400 text-xs mt-2">
            {travelStyles.find(s => s.value === travelStyle)?.description}
          </p>
        </div>

        <div>
          <label className="block text-emerald-300 text-sm font-medium mb-3">Duration (days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
            min="1"
            max="30"
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
          />
        </div>
      </div>

      {/* Total Budget */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8 text-emerald-400" />
            <div>
              <h4 className="text-2xl font-bold text-white">
                ${calculateTotal().toLocaleString()}
              </h4>
              <p className="text-emerald-300">Total estimated cost for {duration} days</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-emerald-400 font-semibold">
              ${Math.round(calculateTotal() / duration)}/day
            </div>
            <div className="text-emerald-300 text-sm">Per day average</div>
          </div>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white flex items-center">
          <PieChart className="h-5 w-5 mr-2 text-emerald-400" />
          Daily Budget Breakdown
        </h4>
        
        {categories.map((category) => {
          const dailyCost = currentBudget[category.key];
          const totalCost = dailyCost * duration;
          const percentage = Math.round((dailyCost / Object.values(currentBudget).reduce((sum: number, cost: any) => sum + cost, 0)) * 100);
          
          return (
            <div key={category.key} className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h5 className="font-semibold text-white">{category.label}</h5>
                    <p className="text-gray-400 text-sm">{percentage}% of daily budget</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">${dailyCost}/day</div>
                  <div className="text-gray-400 text-sm">${totalCost} total</div>
                </div>
              </div>
              
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
        <div className="flex items-center space-x-2 text-blue-300 text-sm">
          <TrendingUp className="h-4 w-4" />
          <span className="font-medium">Budget Tip:</span>
        </div>
        <p className="text-blue-200 text-sm mt-2">
          Prices can vary significantly by season and location. Add 10-20% buffer for unexpected expenses.
        </p>
      </div>
    </div>
  );
};

export default TravelBudget;