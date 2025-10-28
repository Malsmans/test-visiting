import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Hotel, Car, Star, Crown, Sparkles, Award, Globe, Mountain, Waves } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import { featuredCountries } from '../data/countries';
import { useAnalytics } from '../hooks/useAnalytics';

const Home = () => {
  const { trackEvent } = useAnalytics();

  const handleAfricanClick = () => {
    trackEvent('african_button_click', { location: 'hero_section' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden luxury-african-bg">
      {/* Content Overlay */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="luxury-hero min-h-screen flex items-center justify-center relative">
          {/* Modern African Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-orange-900/20" />
          
          <div className="relative z-30 text-center max-w-7xl mx-auto px-4">
            {/* Modern African Badge */}
            <div className="inline-flex items-center space-x-3 african-glass px-8 py-3 mb-12 african-glow">
              <Globe className="h-6 w-6 text-amber-400 african-pulse" />
              <span className="african-gradient-text font-bold tracking-wider text-lg uppercase font-montserrat">Premium African Experience</span>
              <Crown className="h-6 w-6 text-amber-400 african-pulse" />
            </div>

            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none african-float">
              <span className="block african-title-enhanced drop-shadow-2xl mb-4">
                DISCOVER
              </span>
              <span className="block text-white drop-shadow-2xl mb-4">
                THE MOTHER
              </span>
              <span className="block african-title-enhanced drop-shadow-2xl">
                AFRICA
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-16 text-gray-100 max-w-5xl mx-auto leading-relaxed font-light">
              Experience the ultimate luxury journey through Africa's diverse landscapes, rich cultures, and breathtaking destinations. 
              <span className="block mt-4 african-gradient-text font-semibold text-xl md:text-2xl">
                Where authentic African heritage meets unparalleled luxury.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Link
                to="/search"
                onClick={handleAfricanClick}
                className="african-button group african-glow"
              >
                <div className="relative flex items-center space-x-3">
                  <Globe className="h-7 w-7" />
                  <span className="tracking-wide text-lg">BEGIN AFRICAN ADVENTURE</span>
                </div>
              </Link>
              
              <div className="flex items-center space-x-3 african-glass px-6 py-3 rounded-full">
                <Award className="h-6 w-6 text-amber-400" />
                <span className="text-amber-300 font-semibold tracking-wider uppercase">World-Class Safari</span>
              </div>
            </div>

            {/* Modern African Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="african-glass p-8 rounded-2xl text-center african-card">
                <div className="text-4xl font-black african-gradient-text mb-3">50+</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">African Destinations</div>
              </div>
              <div className="african-glass p-8 rounded-2xl text-center african-card">
                <div className="text-4xl font-black african-gradient-text mb-3">5★</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">Luxury African Lodges</div>
              </div>
              <div className="african-glass p-8 rounded-2xl text-center african-card">
                <div className="text-4xl font-black african-gradient-text mb-3">24/7</div>
                <div className="text-amber-300 font-semibold uppercase tracking-wider">African Concierge</div>
              </div>
            </div>
          </div>

          {/* Floating safari elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-400/50 rounded-full african-pulse" />
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-orange-400/40 rounded-full african-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-500/60 rounded-full african-wave" style={{ animationDelay: '2s' }} />
        </section>

        {/* Modern African Features Section */}
        <section className="african-section py-32 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23D4AF37%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center space-x-3 african-glass px-8 py-3 mb-8 african-glow">
                <Globe className="h-5 w-5 text-amber-400" />
                <span className="african-gradient-text font-bold tracking-wider text-lg uppercase">Premium African Services</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8 african-float">
                <span className="african-gradient-text">
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
              <div className="luxury-card p-8 text-center group luxury-glow universal-edge-glow button-edge-glow breathing-edge">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl">
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Wild African Adventures</h3>
                <p className="text-gray-300 leading-relaxed">Exclusive access to Africa's most pristine game reserves and private conservancies for authentic wildlife encounters.</p>
              </div>

              <div className="african-card p-8 text-center group african-glow universal-edge-glow button-edge-glow breathing-edge">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl african-float">
                    <Car className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 african-gradient-text">Luxury African Vehicles</h3>
                <p className="text-gray-300 leading-relaxed">Custom 4WD safari vehicles, private aircraft, and helicopter transfers for the ultimate bush experience.</p>
              </div>

              <div className="african-card p-8 text-center group african-glow universal-edge-glow button-edge-glow breathing-edge">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl african-float">
                    <Hotel className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 african-gradient-text">Luxury Bush Lodges</h3>
                <p className="text-gray-300 leading-relaxed">Exclusive safari lodges, luxury tented camps, and private conservancy accommodations in pristine wilderness.</p>
              </div>

              <div className="african-card p-8 text-center group african-glow universal-edge-glow button-edge-glow breathing-edge">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-2xl african-float">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 african-gradient-text">African Concierge</h3>
                <p className="text-gray-300 leading-relaxed">Dedicated safari specialists and expert guides available 24/7 to craft your perfect African adventure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="african-section py-32 relative section-edge-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-orange-900/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center space-x-3 african-glass px-8 py-3 mb-8 african-glow">
                <Mountain className="h-5 w-5 text-amber-400" />
                <span className="african-gradient-text font-bold tracking-wider text-lg uppercase">African Destinations</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8 african-float">
                <span className="african-gradient-text">
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
                <div key={country.name} className="group african-card country-card-entrance card-container-glow">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-80 transition-opacity african-glow universal-edge-glow"></div>
                    <div className="relative">
                      <CountryCard country={country} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link
                to="/search"
                className="african-button group african-glow button-edge-glow universal-edge-glow"
              >
                <div className="relative flex items-center space-x-3">
                  <span className="tracking-wide text-xl">EXPLORE ALL AFRICAN DESTINATIONS</span>
                  <Crown className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* African Testimonial Section */}
        <section className="african-section py-32 relative overflow-hidden section-edge-glow">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="african-glass p-16 rounded-3xl african-glow universal-edge-glow card-container-glow breathing-edge">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-10 w-10 text-amber-400 fill-current african-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <blockquote className="text-4xl md:text-5xl font-light text-white leading-relaxed mb-10 african-float">
                "The most incredible safari adventure of our lives. From witnessing the Great Migration 
                to luxury bush dinners under the stars - absolutely magical. 
                <span className="block mt-6 african-gradient-text font-semibold text-3xl md:text-4xl">
                  This is the ultimate African safari experience."
                </span>
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center african-glow universal-edge-glow rotating-border">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xl">Alexandra & James Morrison</div>
                  <div className="african-gradient-text text-lg font-semibold">African Enthusiasts</div>
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