import React from 'react';
import { Globe, Heart, Users, Award, Target, Sparkles } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

const About = () => {
  useAnalytics();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Mother Africa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Your Gateway to Authentic African Experiences
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Mother Africa was born from a passion to showcase the incredible diversity, beauty, and richness of the African continent. We believe that Africa is not just a destination—it's an experience that transforms lives.
                </p>
                <p>
                  From the golden savannas of the Serengeti to the vibrant markets of Marrakech, from the pristine beaches of Zanzibar to the majestic peaks of Kilimanjaro, we bring you closer to the heart of Africa.
                </p>
                <p>
                  Our mission is to connect travelers with authentic African experiences while promoting sustainable tourism that benefits local communities and preserves the continent's natural wonders for generations to come.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authenticity</h3>
              <p className="text-gray-300 leading-relaxed">
                We showcase the real Africa, celebrating its diverse cultures, traditions, and natural beauty without filters or stereotypes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300 leading-relaxed">
                We promote responsible tourism that protects the environment and supports local communities across the continent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We partner with the best travel agencies, tour operators, and airlines to ensure exceptional experiences for every traveler.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Comprehensive Destination Guides</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Detailed information about 54 African countries including attractions, culture, weather, visa requirements, and travel tips.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Trusted Partner Network</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Connections to reputable travel agencies, airlines, and tour operators worldwide for seamless booking experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Personalized Recommendations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI-powered travel assistant to help you discover destinations that match your interests and travel style.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Real-Time Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Up-to-date travel advisories, weather forecasts, local events, and safety information for informed travel decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Africa?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of Africa through Mother Africa. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Destinations
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-black/30 text-white font-bold rounded-lg hover:bg-black/40 transition-all duration-300 border-2 border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
