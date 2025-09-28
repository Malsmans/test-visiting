import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Crown, Sparkles } from 'lucide-react';

interface WeatherWidgetProps {
  country: string;
}

// Mock weather data - in a real app, you'd fetch from a weather API
const mockWeatherData = {
  temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
  condition: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)],
  humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
  description: ['Perfect conditions', 'Ideal for luxury travel', 'Excellent weather'][Math.floor(Math.random() * 3)]
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ country }) => {
  const [weather, setWeather] = useState(mockWeatherData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setWeather({
        temperature: Math.floor(Math.random() * 15) + 20,
        condition: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)],
        humidity: Math.floor(Math.random() * 30) + 50,
        description: ['Perfect conditions', 'Ideal for luxury travel', 'Excellent weather'][Math.floor(Math.random() * 3)]
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [country]);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-10 w-10 text-amber-400" />;
      case 'cloudy':
        return <Cloud className="h-10 w-10 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-10 w-10 text-blue-400" />;
      default:
        return <Sun className="h-10 w-10 text-amber-400" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Premium Weather</h3>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-700/50 rounded-xl mb-4"></div>
          <div className="h-4 bg-gray-700/50 rounded-lg mb-2"></div>
          <div className="h-4 bg-gray-700/50 rounded-lg w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Premium Weather</h3>
            <p className="text-amber-300 text-sm">{country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-amber-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Live</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 p-4 rounded-2xl border border-amber-500/30">
            {getWeatherIcon(weather.condition)}
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">{weather.temperature}°C</div>
            <div className="text-amber-300 font-medium capitalize">{weather.description}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-amber-500/20">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
          <div className="flex items-center space-x-3">
            <Thermometer className="h-5 w-5 text-blue-400" />
            <div>
              <div className="text-blue-300 text-sm font-medium">Humidity</div>
              <div className="text-white font-bold text-lg">{weather.humidity}%</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/30">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-emerald-300 text-sm font-medium">Condition</div>
              <div className="text-white font-bold text-lg capitalize">{weather.condition}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;