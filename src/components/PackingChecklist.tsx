import React, { useState } from 'react';
import { Package, Check, X, Crown, Sparkles, Shirt, Camera, Heart, Shield } from 'lucide-react';

interface PackingChecklistProps {
  country: string;
}

const PackingChecklist: React.FC<PackingChecklistProps> = ({ country }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const packingCategories = [
    {
      title: 'Clothing & Accessories',
      icon: Shirt,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Lightweight, breathable clothing',
        'Long-sleeved shirts for sun protection',
        'Comfortable walking shoes',
        'Sandals for relaxing',
        'Wide-brimmed hat',
        'Sunglasses',
        'Light jacket for evenings',
        'Swimwear',
        'Sleepwear'
      ]
    },
    {
      title: 'Health & Safety',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      items: [
        'Prescription medications',
        'First aid kit',
        'Sunscreen (SPF 30+)',
        'Insect repellent',
        'Hand sanitizer',
        'Personal hygiene items',
        'Antimalarial medication',
        'Water purification tablets',
        'Travel insurance documents'
      ]
    },
    {
      title: 'Electronics & Photography',
      icon: Camera,
      color: 'from-purple-500 to-indigo-600',
      items: [
        'Camera with extra batteries',
        'Phone charger',
        'Universal power adapter',
        'Portable power bank',
        'Memory cards',
        'Waterproof phone case',
        'Binoculars',
        'Flashlight/headlamp',
        'Extension cord'
      ]
    },
    {
      title: 'Documents & Money',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Passport (valid 6+ months)',
        'Visa documents',
        'Travel insurance',
        'Flight tickets',
        'Hotel confirmations',
        'Emergency contact list',
        'Credit/debit cards',
        'Cash in local currency',
        'Copies of important documents'
      ]
    }
  ];

  const toggleItem = (category: string, item: string) => {
    const key = `${category}-${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCategoryProgress = (category: any) => {
    const checkedCount = category.items.filter((item: string) => 
      checkedItems[`${category.title}-${item}`]
    ).length;
    return Math.round((checkedCount / category.items.length) * 100);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
            <Package className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Packing Checklist</h3>
            <p className="text-amber-300 text-sm">Essential items for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-amber-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Premium Guide</span>
        </div>
      </div>

      <div className="space-y-6">
        {packingCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          const progress = getCategoryProgress(category);
          
          return (
            <div key={categoryIndex} className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-amber-400 font-semibold">{progress}%</div>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => {
                  const key = `${category.title}-${item}`;
                  const isChecked = checkedItems[key];
                  
                  return (
                    <button
                      key={itemIndex}
                      onClick={() => toggleItem(category.title, item)}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-left ${
                        isChecked 
                          ? 'bg-green-500/20 border border-green-500/30' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isChecked 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-400'
                      }`}>
                        {isChecked && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span className={`text-sm ${
                        isChecked ? 'text-green-300 line-through' : 'text-gray-300'
                      }`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30">
        <div className="flex items-center space-x-2 text-amber-300 text-sm">
          <Sparkles className="h-4 w-4" />
          <span className="font-medium">Pro Tip:</span>
        </div>
        <p className="text-amber-200 text-sm mt-2">
          Pack light and leave room for souvenirs! Check airline baggage restrictions before traveling.
        </p>
      </div>
    </div>
  );
};

export default PackingChecklist;