import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:animate-bounce" />
          
          {/* Luxury glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
          
          {/* Safari-themed ring */}
          <div className="absolute inset-0 border-2 border-amber-300/30 rounded-full animate-pulse"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;