import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Hotel, Car, Star, Crown, Sparkles, Award, Variable as Safari, Mountain, Waves } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import { featuredCountries } from '../data/countries';
import { useAnalytics } from '../hooks/useAnalytics';

const Home = () => {
  const { trackEvent } = useAnalytics();

  const handleSafariClick = () => {
    trackEvent('safari_button_click', { location: 'hero_section' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-0" />
          
          <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Safari Badge */}
            <div className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-sm border border-amber-500/30 px-8 py-3 mb-12 rounded-full">
              <Safari className="h-6 w-6 text-amber-400" />
              <span className="text-amber-300 font-bold tracking-wider text-lg uppercase">Premium African Safari</span>
              <Crown className="h-6 w-6 text-amber-400" />
            </div>

            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none">
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text drop-shadow-2xl mb-4">
                DISCOVER
              </span>
              <span className="block text-white drop-shadow-2xl mb-4">
                THE MOTHER
              </span>
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text drop-shadow-2xl">
                AFRICA
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-16 text-gray-100 max-w-5xl mx-auto leading-relaxed font-light">
              Experience the ultimate luxury journey through Africa's diverse landscapes, rich cultures, and breathtaking destinations. 
              <span className="block mt-4 text-amber-300 font-semibold text-xl md:text-2xl">
                Where authentic African heritage meets unparalleled luxury.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Link
                to="/search"
                onClick={handleSafariClick}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
              >
                <div className="flex items-center space-x-3">
                  <Safari className="h-7 w-7" />
                  <span className="tracking-wide text-lg font-bold">BEGIN SAFARI ADVENTURE</span>
                </div>
              </Link>
              
              <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm border border-amber-500/30 px-6 py-3 rounded-full">
                <Award className="h-6 w-6 text-amber-400" />
                <span className="text-amber-300 font-semibold tracking-wider uppercase">World-Class Safari</span>
              </div>
            </div>

            {/* Safari Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/30 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-amber-400 mb-3">50+</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">Safari Destinations</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/30 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-amber-400 mb-3">5★</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">Luxury Safari Lodges</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/30 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-amber-400 mb-3">24/7</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">Safari Concierge</div>
              </div>
            </div>
          </div>
        </section>

        {/* Safari Features Section */}
        <section className="py-32 relative bg-gradient-to-r from-black/20 via-transparent to-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-sm border border-amber-500/30 px-8 py-3 mb-8 rounded-full">
                <Safari className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300 font-bold tracking-wider text-lg uppercase">Premium Safari Services</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
                <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text">
                  Ultimate Safari
                </span>
                <span className="block text-white mt-2">Experience</span>
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                Immerse yourself in Africa's untamed wilderness through our exclusive safari experiences, 
                luxury bush lodges, and personalized wildlife adventures that redefine luxury travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl">
                    <Safari className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">Wild Safari Adventures</h3>
                <p className="text-gray-300 leading-relaxed">Exclusive access to Africa's most pristine game reserves and private conservancies for authentic wildlife encounters.</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl">
                    <Car className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">Luxury Safari Vehicles</h3>
                <p className="text-gray-300 leading-relaxed">Custom 4WD safari vehicles, private aircraft, and helicopter transfers for the ultimate bush experience.</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl">
                    <Hotel className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">Luxury Bush Lodges</h3>
                <p className="text-gray-300 leading-relaxed">Exclusive safari lodges, luxury tented camps, and private conservancy accommodations in pristine wilderness.</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">Safari Concierge</h3>
                <p className="text-gray-300 leading-relaxed">Dedicated safari specialists and expert guides available 24/7 to craft your perfect African adventure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-32 relative bg-gradient-to-r from-black/10 via-transparent to-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-sm border border-amber-500/30 px-8 py-3 mb-8 rounded-full">
                <Mountain className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300 font-bold tracking-wider text-lg uppercase">Safari Destinations</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
                <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text">
                  Wild Africa
                </span>
                <span className="block text-white mt-2">Awaits</span>
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                Explore our carefully curated collection of Africa's most spectacular safari destinations, 
                where pristine wilderness meets world-class luxury and unforgettable wildlife encounters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredCountries.slice(0, 6).map((country) => (
                <div key={country.name} className="group">
                  <CountryCard country={country} />
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link
                to="/search"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
              >
                <div className="relative flex items-center space-x-3">
                  <span className="tracking-wide text-xl">EXPLORE ALL SAFARI DESTINATIONS</span>
                  <Crown className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 relative bg-gradient-to-r from-black/20 via-transparent to-black/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/30 p-16 rounded-3xl">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-10 w-10 text-amber-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-4xl md:text-5xl font-light text-white leading-relaxed mb-10">
                "The most incredible safari adventure of our lives. From witnessing the Great Migration 
                to luxury bush dinners under the stars - absolutely magical. 
                <span className="block mt-6 text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text font-semibold text-3xl md:text-4xl">
                  This is the ultimate African safari experience."
                </span>
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Safari className="h-10 w-10 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xl">Alexandra & James Morrison</div>
                  <div className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-lg font-semibold">Safari Enthusiasts</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;