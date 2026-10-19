import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Crown, Globe } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import VideoHeroHeader from '../components/VideoHeroHeader';
import { featuredCountries } from '../data/countries';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden luxury-african-bg">
      {/* Video Hero Header */}
      <VideoHeroHeader />

      {/* Content Overlay */}
      <div className="relative z-20">
        {/* Modern African Features Section */}
        <section className="african-section py-20 relative">
          <div className="absolute inset-0 bg-white text-amber-600 opacity-60"></div>
          
        </section>

        {/* Featured Destinations */}
        <section className="african-section py-20 relative section-edge-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-orange-900/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <section className="african-section py-20 relative overflow-hidden section-edge-glow">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="african-glass p-8 md:p-10 rounded-3xl">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-10 w-10 text-amber-600 fill-current african-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-8">
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
                  <div className="text-gray-900 font-bold text-xl">Alexandra & James Morrison</div>
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