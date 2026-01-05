import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface VideoSlide {
  url: string;
  title: string;
  description: string;
  fallbackColor: string;
}

const VideoHeroHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: VideoSlide[] = [
    {
      url: 'https://videos.pexels.com/video-files/5728288/5728288-hd_1920_1080_25fps.mp4',
      title: 'African Savanna Safari',
      description: 'Witness the majesty of wild animals in their natural habitat',
      fallbackColor: 'from-amber-900 to-orange-800'
    },
    {
      url: 'https://videos.pexels.com/video-files/3209835/3209835-hd_1920_1080_30fps.mp4',
      title: 'Pristine African Beaches',
      description: 'Discover tropical paradises with crystal-clear waters',
      fallbackColor: 'from-blue-900 to-cyan-800'
    },
    {
      url: 'https://videos.pexels.com/video-files/3931603/3931603-hd_1920_1080_30fps.mp4',
      title: 'Majestic Waterfalls',
      description: 'Experience the raw power and beauty of nature',
      fallbackColor: 'from-teal-900 to-green-800'
    },
    {
      url: 'https://videos.pexels.com/video-files/3408505/3408505-hd_1920_1080_30fps.mp4',
      title: 'Modern African Cities',
      description: 'Explore vibrant urban centers and contemporary culture',
      fallbackColor: 'from-gray-900 to-slate-800'
    },
    {
      url: 'https://videos.pexels.com/video-files/3373028/3373028-hd_1920_1080_30fps.mp4',
      title: 'Traditional African Culture',
      description: 'Connect with heritage, communities, and time-honored traditions',
      fallbackColor: 'from-amber-800 to-yellow-900'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden bg-black">
      {/* Video Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br ${slide.fallbackColor} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              key={`${index}-${slide.url}`}
              src={slide.url}
              className="w-full h-full object-cover"
              autoPlay={index === currentSlide}
              muted={isMuted}
              loop
              playsInline
              crossOrigin="anonymous"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 font-light">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-amber-400 w-8 h-3'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-6 right-6 z-30 flex gap-4">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Autoplay Indicator */}
      <div className="absolute bottom-6 right-6 z-30">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`px-4 py-2 rounded-full backdrop-blur-sm font-semibold text-sm transition-all duration-300 ${
            autoPlay
              ? 'bg-amber-400/80 text-black hover:bg-amber-400'
              : 'bg-white/20 text-white hover:bg-white/40'
          }`}
        >
          {autoPlay ? 'Auto' : 'Paused'}
        </button>
      </div>
    </div>
  );
};

export default VideoHeroHeader;
