import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, DollarSign, Car, Hotel, UtensilsCrossed, Cloud, ArrowLeft, Navigation, ExternalLink, Crown, Sparkles, Award } from 'lucide-react';
import { allCountries } from '../data/countries';
import WeatherWidget from '../components/WeatherWidget';
import MapEmbed from '../components/MapEmbed';
import VideoBackground from '../components/VideoBackground';
import LocationMap from '../components/LocationMap';
import CurrencyConverter from '../components/CurrencyConverter';
import TravelTips from '../components/TravelTips';
import VisaInfo from '../components/VisaInfo';
import LanguageGuide from '../components/LanguageGuide';
import EmergencyContacts from '../components/EmergencyContacts';
import BestTimeToVisit from '../components/BestTimeToVisit';
import PackingChecklist from '../components/PackingChecklist';
import SafetyAlerts from '../components/SafetyAlerts';
import LocalEvents from '../components/LocalEvents';
import TravelBudget from '../components/TravelBudget';
import TransportationGuide from '../components/TransportationGuide';
import { useAnalytics } from '../hooks/useAnalytics';

const CountryDetails = () => {
  const { countryName } = useParams();
  const [activeTab, setActiveTab] = useState('attractions');
  const { trackCountryView, trackEvent } = useAnalytics();
  
  const country = allCountries.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, '-') === countryName?.toLowerCase()
  );

  React.useEffect(() => {
    if (country) {
      trackCountryView(country.name);
    }
  }, [country, trackCountryView]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <VideoBackground type="wildlife" className="fixed top-0 left-0 w-1/2 h-full z-0" />
        <VideoBackground type="safari" className="fixed top-0 right-0 w-1/2 h-full z-0" />
        <div className="text-center relative z-10 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-amber-500/20">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Crown className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-6">Destination Not Found</h1>
          <p className="text-gray-400 mb-8">This luxury destination is not available in our collection.</p>
          <Link 
            to="/search" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'attractions', label: 'Attractions', icon: MapPin },
    { id: 'transport', label: 'Transportation', icon: Car },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed },
  ];

  return (
    <div className="min-h-screen relative">
      {/* 8K HD African Animal Background Videos */}
      <VideoBackground type="luxury" className="fixed top-0 left-0 w-1/2 h-full z-0" />
      <VideoBackground type="wildlife" className="fixed top-0 right-0 w-1/2 h-full z-0" />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Luxury Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
              <Link
                to="/search"
                className="inline-flex items-center text-white hover:text-amber-300 transition-colors mb-8 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-amber-400/40"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Back to Collection</span>
              </Link>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                  <Crown className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-semibold tracking-wider uppercase">Premium Destination</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  {country.name}
                </span>
              </h1>
              <p className="text-2xl text-gray-200 max-w-4xl leading-relaxed font-light drop-shadow-lg">
                {country.description}
              </p>
              
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2 text-amber-300">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">{country.attractions.length} Exclusive Experiences</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Sparkles className="h-5 w-5" />
                  <span>{country.region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/20 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">Essential Travel Tools</h2>
              <div className="flex items-center space-x-1 text-amber-400">
                <Crown className="h-4 w-4" />
                <span className="text-xs font-medium tracking-wider uppercase">Quick Access</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <button
                onClick={() => document.getElementById('currency-converter')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
              >
                <DollarSign className="h-6 w-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-300 text-sm font-medium text-center">Currency Converter</span>
              </button>
              
              <button
                onClick={() => document.getElementById('visa-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="h-6 w-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-blue-300 text-sm font-medium text-center">Visa Information</span>
              </button>
              
              <button
                onClick={() => document.getElementById('best-time-to-visit')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="h-6 w-6 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-orange-300 text-sm font-medium text-center">Best Time to Visit</span>
              </button>
              
              <button
                onClick={() => document.getElementById('travel-tips')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="h-6 w-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-amber-300 text-sm font-medium text-center">Travel Tips</span>
              </button>
              
              <button
                onClick={() => document.getElementById('language-guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
              >
                <Star className="h-6 w-6 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-indigo-300 text-sm font-medium text-center">Language Guide</span>
              </button>
              
              <button
                onClick={() => document.getElementById('packing-checklist')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
              >
                <Award className="h-6 w-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-amber-300 text-sm font-medium text-center">Packing Checklist</span>
              </button>
              
              <button
                onClick={() => document.getElementById('safety-alerts')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-6 w-6 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-red-300 text-sm font-medium text-center">Safety Alerts</span>
              </button>
              
              <button
                onClick={() => document.getElementById('local-events')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <Navigation className="h-6 w-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-purple-300 text-sm font-medium text-center">Local Events</span>
              </button>
              
              <button
                onClick={() => document.getElementById('travel-budget')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
              >
                <Thermometer className="h-6 w-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-300 text-sm font-medium text-center">Travel Budget</span>
              </button>
              
              <button
                onClick={() => document.getElementById('transportation-guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <Car className="h-6 w-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-blue-300 text-sm font-medium text-center">Transportation</span>
              </button>
              
              <button
                onClick={() => document.getElementById('emergency-contacts')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center p-4 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <UtensilsCrossed className="h-6 w-6 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-red-300 text-sm font-medium text-center">Emergency Contacts</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Weather and Map Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <WeatherWidget country={country.name} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <MapEmbed country={country.name} />
              </div>
            </div>
          </div>

          {/* Travel Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="currency-converter">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <CurrencyConverter country={country.name} />
              </div>
            </div>
            <div className="relative" id="visa-info">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <VisaInfo country={country.name} />
              </div>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="mb-12" id="best-time-to-visit">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <BestTimeToVisit country={country.name} />
              </div>
            </div>
          </div>

          {/* Travel Tips and Language Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="travel-tips">
            <div className="relative" id="travel-tips-section">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <TravelTips country={country.name} />
              </div>
            </div>
            <div className="relative" id="language-guide">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <LanguageGuide country={country.name} />
              </div>
            </div>
          </div>

          {/* Packing Checklist and Safety Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="packing-checklist">
            <div className="relative" id="packing-checklist-section">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <PackingChecklist country={country.name} />
              </div>
            </div>
            <div className="relative" id="safety-alerts">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <SafetyAlerts country={country.name} />
              </div>
            </div>
          </div>

          {/* Local Events and Travel Budget */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="local-events">
            <div className="relative" id="local-events-section">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <LocalEvents country={country.name} />
              </div>
            </div>
            <div className="relative" id="travel-budget">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <TravelBudget country={country.name} />
              </div>
            </div>
          </div>

          {/* Transportation Guide */}
          <div className="mb-12" id="transportation-guide">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <TransportationGuide country={country.name} />
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mb-12" id="emergency-contacts">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur"></div>
              <div className="relative">
                <EmergencyContacts country={country.name} />
              </div>
            </div>
          </div>

          {/* Luxury Tabs */}
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-amber-500/20">
            <div className="border-b border-amber-500/20 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
              <nav className="flex space-x-8 px-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-6 px-2 border-b-3 font-semibold text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                          : 'border-transparent text-gray-400 hover:text-amber-300 hover:border-amber-500/50'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      <span className="tracking-wide">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="p-8">
              {/* Attractions Tab */}
              {activeTab === 'attractions' && (
                <div className="space-y-10">
                  {country.attractions.map((attraction, index) => (
                    <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-2xl overflow-hidden shadow-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Attraction Info */}
                        <div className="p-8">
                          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                            <img
                              src={attraction.image}
                              alt={attraction.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-white text-xs font-semibold tracking-wider uppercase">Premium</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                              {attraction.name}
                            </h3>
                            {attraction.link && (
                              <a
                                href={attraction.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-400 hover:text-amber-300 transition-colors bg-amber-500/20 p-2 rounded-full hover:bg-amber-500/30"
                                title="Learn more"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">{attraction.description}</p>
                          <div className="flex items-center text-amber-400">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span className="font-medium">{attraction.location}</span>
                          </div>
                        </div>
                        
                        {/* Interactive Map */}
                        <div className="p-8">
                          <LocationMap
                            name={attraction.name}
                            location={attraction.location}
                            type="attraction"
                            country={country.name}
                            description={attraction.description}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Transportation Tab */}
              {activeTab === 'transport' && (
                <div className="space-y-8">
                  {country.transportation.map((transport, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-2xl shadow-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Transport Info */}
                        <div className="p-8">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-3 rounded-xl">
                              <Car className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{transport.type}</h3>
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">{transport.description}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                              <div className="flex items-center text-emerald-400 font-bold text-lg">
                                <DollarSign className="h-5 w-5 mr-1" />
                                {transport.price}
                              </div>
                              <div className="text-emerald-300 text-sm mt-1">Premium Rate</div>
                            </div>
                            <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                              <div className="flex items-center text-blue-400 font-medium">
                                <Navigation className="h-4 w-4 mr-2" />
                                {transport.route}
                              </div>
                              <div className="text-blue-300 text-sm mt-1">Route</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Transport Map */}
                        <div className="p-8">
                          <LocationMap
                            name={transport.type}
                            location={transport.route}
                            type="transport"
                            country={country.name}
                            description={`${transport.description} - ${transport.price}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Hotels Tab */}
              {activeTab === 'hotels' && (
                <div className="space-y-10">
                  {country.hotels.map((hotel, index) => (
                    <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-2xl overflow-hidden shadow-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Hotel Info */}
                        <div className="p-8">
                          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                            <img
                              src={hotel.image}
                              alt={hotel.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                              <Crown className="h-3 w-3 text-white" />
                              <span className="text-white text-xs font-semibold tracking-wider uppercase">Luxury</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                              {hotel.name}
                            </h3>
                            {hotel.bookingLink && (
                              <a
                                href={hotel.bookingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2"
                                title="Book this hotel"
                              >
                                <span>Book Now</span>
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                          
                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < hotel.rating ? 'text-amber-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                            <span className="ml-3 text-amber-400 font-semibold">({hotel.rating}/5)</span>
                          </div>
                          
                          <p className="text-gray-300 mb-6 leading-relaxed">{hotel.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                              <div className="flex items-center text-emerald-400 font-bold text-lg">
                                <DollarSign className="h-5 w-5 mr-1" />
                                {hotel.price}/night
                              </div>
                              <div className="text-emerald-300 text-sm mt-1">Premium Rate</div>
                            </div>
                            <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                              <div className="flex items-center text-blue-400 font-medium">
                                <MapPin className="h-4 w-4 mr-2" />
                                {hotel.location}
                              </div>
                              <div className="text-blue-300 text-sm mt-1">Location</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hotel Map */}
                        <div className="p-8">
                          <LocationMap
                            name={hotel.name}
                            location={hotel.location}
                            type="hotel"
                            country={country.name}
                            description={`${hotel.description} - ${hotel.price}/night`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Restaurants Tab */}
              {activeTab === 'restaurants' && (
                <div className="space-y-10">
                  {country.restaurants.map((restaurant, index) => (
                    <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-2xl overflow-hidden shadow-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Restaurant Info */}
                        <div className="p-8">
                          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                            <img
                              src={restaurant.image}
                              alt={restaurant.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                              <UtensilsCrossed className="h-3 w-3 text-white" />
                              <span className="text-white text-xs font-semibold tracking-wider uppercase">Fine Dining</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                              {restaurant.name}
                            </h3>
                            {restaurant.link && (
                              <a
                                href={restaurant.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-400 hover:text-amber-300 transition-colors bg-amber-500/20 p-2 rounded-full hover:bg-amber-500/30"
                                title="Visit restaurant"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                          
                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < restaurant.rating ? 'text-amber-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                            <span className="ml-3 text-amber-400 font-semibold">({restaurant.rating}/5)</span>
                          </div>
                          
                          <p className="text-gray-300 mb-6 leading-relaxed font-medium">{restaurant.cuisine}</p>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                              <div className="flex items-center text-emerald-400 font-bold text-lg">
                                <DollarSign className="h-5 w-5 mr-1" />
                                {restaurant.priceRange}
                              </div>
                              <div className="text-emerald-300 text-sm mt-1">Price Range</div>
                            </div>
                            <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                              <div className="flex items-center text-blue-400 font-medium">
                                <MapPin className="h-4 w-4 mr-2" />
                                {restaurant.location}
                              </div>
                              <div className="text-blue-300 text-sm mt-1">Location</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Restaurant Map */}
                        <div className="p-8">
                          <LocationMap
                            name={restaurant.name}
                            location={restaurant.location}
                            type="restaurant"
                            country={country.name}
                            description={`${restaurant.cuisine} - ${restaurant.priceRange}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;