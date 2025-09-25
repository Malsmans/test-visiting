import React from 'react';
import { Calendar, Sun, Cloud, Droplets, Thermometer, Crown, TrendingUp } from 'lucide-react';

interface BestTimeToVisitProps {
  country: string;
}

const BestTimeToVisit: React.FC<BestTimeToVisitProps> = ({ country }) => {
  // Mock seasonal data for African countries
  const seasonalData: { [key: string]: any } = {
    'South Africa': {
      best: 'April-May, September-November',
      seasons: [
        {
          period: 'Summer (Dec-Feb)',
          weather: 'Hot and rainy',
          temp: '20-30°C',
          pros: ['Lush landscapes', 'Baby animals'],
          cons: ['Crowded', 'Higher prices'],
          rating: 3
        },
        {
          period: 'Autumn (Mar-May)',
          weather: 'Mild and dry',
          temp: '15-25°C',
          pros: ['Perfect weather', 'Fewer crowds'],
          cons: ['Some rain possible'],
          rating: 5
        },
        {
          period: 'Winter (Jun-Aug)',
          weather: 'Cool and dry',
          temp: '5-20°C',
          pros: ['Best game viewing', 'Clear skies'],
          cons: ['Cold mornings'],
          rating: 4
        },
        {
          period: 'Spring (Sep-Nov)',
          weather: 'Warm and dry',
          temp: '15-28°C',
          pros: ['Excellent weather', 'Wildlife active'],
          cons: ['Getting busier'],
          rating: 5
        }
      ]
    },
    'Kenya': {
      best: 'July-October, January-March',
      seasons: [
        {
          period: 'Dry Season (Jun-Oct)',
          weather: 'Dry and sunny',
          temp: '20-28°C',
          pros: ['Great Migration', 'Perfect safari weather'],
          cons: ['Peak season prices'],
          rating: 5
        },
        {
          period: 'Short Rains (Nov-Dec)',
          weather: 'Brief afternoon showers',
          temp: '22-30°C',
          pros: ['Green landscapes', 'Fewer tourists'],
          cons: ['Some roads impassable'],
          rating: 3
        },
        {
          period: 'Dry Season (Jan-Mar)',
          weather: 'Hot and dry',
          temp: '25-32°C',
          pros: ['Excellent wildlife viewing', 'Clear skies'],
          cons: ['Very hot'],
          rating: 4
        },
        {
          period: 'Long Rains (Apr-May)',
          weather: 'Heavy rains',
          temp: '20-26°C',
          pros: ['Lowest prices', 'Lush scenery'],
          cons: ['Many lodges closed', 'Poor roads'],
          rating: 2
        }
      ]
    },
    'Morocco': {
      best: 'April-May, September-November',
      seasons: [
        {
          period: 'Spring (Mar-May)',
          weather: 'Mild and pleasant',
          temp: '15-25°C',
          pros: ['Perfect temperatures', 'Blooming landscapes'],
          cons: ['Getting busy'],
          rating: 5
        },
        {
          period: 'Summer (Jun-Aug)',
          weather: 'Hot and dry',
          temp: '25-40°C',
          pros: ['Long days', 'Festival season'],
          cons: ['Extremely hot', 'Crowded'],
          rating: 2
        },
        {
          period: 'Autumn (Sep-Nov)',
          weather: 'Warm and comfortable',
          temp: '18-28°C',
          pros: ['Ideal weather', 'Harvest season'],
          cons: ['Popular time'],
          rating: 5
        },
        {
          period: 'Winter (Dec-Feb)',
          weather: 'Cool and mild',
          temp: '8-18°C',
          pros: ['Fewer crowds', 'Good for cities'],
          cons: ['Cold in mountains', 'Short days'],
          rating: 3
        }
      ]
    }
  };

  const getSeasonalInfo = () => {
    return seasonalData[country] || {
      best: 'Year-round destination',
      seasons: [
        {
          period: 'Year Round',
          weather: 'Varies by region',
          temp: '20-30°C',
          pros: ['Always something to see'],
          cons: ['Weather varies'],
          rating: 4
        }
      ]
    };
  };

  const seasonInfo = getSeasonalInfo();

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  const getWeatherIcon = (weather: string) => {
    if (weather.toLowerCase().includes('rain')) return <Droplets className="h-5 w-5" />;
    if (weather.toLowerCase().includes('hot')) return <Sun className="h-5 w-5" />;
    if (weather.toLowerCase().includes('cool') || weather.toLowerCase().includes('cold')) return <Thermometer className="h-5 w-5" />;
    return <Cloud className="h-5 w-5" />;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-xl">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Best Time to Visit</h3>
            <p className="text-orange-300 text-sm">Seasonal guide for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-orange-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Expert Guide</span>
        </div>
      </div>

      <div className="mb-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
        <div className="flex items-center space-x-3 mb-3">
          <TrendingUp className="h-6 w-6 text-amber-400" />
          <h4 className="text-xl font-bold text-amber-300">Optimal Travel Period</h4>
        </div>
        <p className="text-2xl font-bold text-white mb-2">{seasonInfo.best}</p>
        <p className="text-amber-200 text-sm">
          These months offer the best combination of weather, wildlife viewing, and travel conditions.
        </p>
      </div>

      <div className="space-y-6">
        {seasonInfo.seasons.map((season: any, index: number) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border transition-all duration-300 ${
              season.rating >= 4 
                ? 'border-amber-500/30 hover:border-amber-500/50' 
                : season.rating >= 3
                ? 'border-blue-500/30 hover:border-blue-500/50'
                : 'border-gray-500/30 hover:border-gray-500/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${
                  season.rating >= 4 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600' 
                    : season.rating >= 3
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                    : 'bg-gradient-to-r from-gray-500 to-slate-600'
                }`}>
                  {getWeatherIcon(season.weather)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{season.period}</h4>
                  <p className="text-gray-400 text-sm">{season.weather}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-1">
                  {getRatingStars(season.rating)}
                </div>
                <p className="text-gray-400 text-xs">Rating</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Temperature</p>
                <p className="text-white font-semibold">{season.temp}</p>
              </div>
              <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                <p className="text-green-300 text-xs uppercase tracking-wide mb-1">Pros</p>
                <ul className="text-green-200 text-sm space-y-1">
                  {season.pros.map((pro: string, proIndex: number) => (
                    <li key={proIndex} className="flex items-center space-x-1">
                      <span className="text-green-400">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3 border border-red-500/30">
                <p className="text-red-300 text-xs uppercase tracking-wide mb-1">Cons</p>
                <ul className="text-red-200 text-sm space-y-1">
                  {season.cons.map((con: string, conIndex: number) => (
                    <li key={conIndex} className="flex items-center space-x-1">
                      <span className="text-red-400">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
        <div className="flex items-center space-x-2 text-blue-300 text-sm">
          <Calendar className="h-4 w-4" />
          <span className="font-medium">Planning Tip:</span>
        </div>
        <p className="text-blue-200 text-sm mt-2">
          Book accommodations and flights well in advance for peak seasons. Consider shoulder seasons for better prices and fewer crowds.
        </p>
      </div>
    </div>
  );
};

export default BestTimeToVisit;