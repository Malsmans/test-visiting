import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlide {
  url: string;
  title: string;
  description: string;
}

const slides: ImageSlide[] = [
  {
    url: 'https://images.pexels.com/photos/5521702/pexels-photo-5521702.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'African Savanna Safari',
    description: 'Witness the majesty of wild animals in their natural habitat',
  },
  {
    url: 'https://images.pexels.com/photos/8723118/pexels-photo-8723118.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Pristine African Beaches',
    description: 'Discover tropical paradises with crystal-clear waters',
  },
  {
    url: 'https://images.pexels.com/photos/17435022/pexels-photo-17435022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Majestic Waterfalls',
    description: 'Experience the raw power and beauty of nature',
  },
  {
    url: 'https://images.pexels.com/photos/36019668/pexels-photo-36019668.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Traditional African Culture',
    description: 'Connect with heritage, communities, and time-honored traditions',
  },
];

const VideoHeroHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    setLoadedImages((prev) => new Set(prev).add(currentSlide));
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {loadedImages.has(index) && (
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 font-light drop-shadow-md">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default VideoHeroHeader;
