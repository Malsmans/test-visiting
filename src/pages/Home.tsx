import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Crown, Globe, MapPinned, Star } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import VideoHeroHeader from '../components/VideoHeroHeader';
import { featuredCountries } from '../data/countries';

const storyCards = [
  {
    title: 'The African journeys worth taking once',
    category: 'Places to visit',
    description: 'From the Atlas Mountains to the Okavango Delta, these are the landscapes that stay with you long after the journey home.',
    image: 'https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'The coastlines made for slow travel',
    category: 'Beaches',
    description: 'Trade busy itineraries for white sand, warm water, and the easy rhythm of Zanzibar, Cape Town, and the Indian Ocean.',
    image: 'https://images.pexels.com/photos/36468248/pexels-photo-36468248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Where the wild still sets the schedule',
    category: 'Safaris',
    description: 'Follow the herds across the Serengeti and Maasai Mara for a front-row seat to one of nature’s greatest migrations.',
    image: 'https://images.pexels.com/photos/33498304/pexels-photo-33498304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const blogPosts = [
  {
    title: 'A first-timer’s guide to planning an African safari',
    category: 'Travel notes',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4404524/pexels-photo-4404524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Victoria Falls: the thunder that connects two countries',
    category: 'Iconic places',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/17435022/pexels-photo-17435022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'A weekend of food, colour, and craft in Morocco',
    category: 'Culture',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1161927/pexels-photo-1161927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

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

        <section className="african-section py-20 relative bg-[#f3f1ea]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-4">
                  <MapPinned className="h-4 w-4" />
                  Field notes from Africa
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Stories that make you want to go</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">A thoughtful guide to the places, coastlines, wildlife, and living cultures that make every African journey feel personal.</p>
              </div>
              <Link to="/search" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors">
                Explore the guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {storyCards.map((story, index) => (
                <Link to="/search" key={story.title} className={`group african-card overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className={`${index === 0 ? 'h-72 md:h-[27rem]' : 'h-60'} relative overflow-hidden`}>
                    <img src={story.image} alt={story.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">{story.category}</span>
                      <h3 className={`${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'} font-extrabold mt-2 leading-tight`}>{story.title}</h3>
                      <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xl">{story.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="african-section py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
                  <BookOpen className="h-4 w-4" />
                  The Africa journal
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Latest from the blog</h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-500"><CalendarDays className="h-4 w-4" /> Fresh travel inspiration</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link to="/search" key={post.title} className="group african-card overflow-hidden">
                  <div className="h-52 overflow-hidden">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                      <span>{post.category}</span>
                      <span className="text-gray-400 normal-case tracking-normal font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug mt-3 group-hover:text-amber-700 transition-colors">{post.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 mt-5">Read story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              ))}
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