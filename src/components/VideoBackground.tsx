import React from 'react';

interface VideoBackgroundProps {
  type: 'safari' | 'wildlife' | 'luxury' | 'animals';
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ type, className = '' }) => {
  // Optimized HD African Wildlife and Animal Videos Collection (reduced for performance)
  const animalVideos = {
    safari: [
      // Optimized African Elephants in HD (faster loading)
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephants walking
      'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // African landscape
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Aerial wildlife
    ],
    wildlife: [
      // Optimized African Big Five Animals in HD
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephants herd
      'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // Lions in savanna
      'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Wildlife migration
    ],
    luxury: [
      // Optimized Luxury Safari with Animals in HD
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Premium elephant footage
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Luxury wildlife aerial
      'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // Luxury safari sunset
    ],
    animals: [
      // Optimized Specific African Animals in HD
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // African elephants
      'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // African lions
      'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Wildebeest migration
    ]
  };

  // Additional Optimized HD African Animal Videos
  const premiumAnimalVideos = [
    // Optimized Collection
    'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephant herd
    'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // Lions
    'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Migration
    'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Zebra herds
  ];

  // Select random optimized animal video for variety
  const getRandomAnimalVideo = (videos: string[]) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  // Get video based on type or random from optimized collection
  const selectedVideo = animalVideos[type] 
    ? getRandomAnimalVideo(animalVideos[type])
    : getRandomAnimalVideo(premiumAnimalVideos);

  return (
    <div className={`safari-video-container ${className}`}>
      {/* Primary Optimized HD Animal Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="safari-video"
        style={{ 
          filter: 'brightness(0.4) contrast(1.2) saturate(1.3)',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        onError={(e) => {
          // Quick fallback to next video if current fails
          const target = e.target as HTMLVideoElement;
          const fallbackVideo = getRandomAnimalVideo(premiumAnimalVideos);
          target.src = fallbackVideo;
        }}
      >
        <source src={selectedVideo} type="video/mp4" />
        {/* Multiple fallback sources for reliability */}
        <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      
      {/* Optimized Safari Overlay with Animal Theme */}
      <div className="safari-video-overlay" style={{
        background: `linear-gradient(
          135deg,
          rgba(28, 28, 28, 0.8) 0%,
          rgba(44, 24, 16, 0.7) 25%,
          rgba(60, 36, 21, 0.6) 50%,
          rgba(44, 24, 16, 0.7) 75%,
          rgba(28, 28, 28, 0.8) 100%
        )`,
        backdropFilter: 'blur(1px)'
      }} />
      
      {/* Reduced Animal-Themed Particles for Performance */}
      <div className="safari-particles" style={{ zIndex: 10 }}>
        <div className="safari-particle" style={{
          background: 'radial-gradient(circle, #D4AF37, transparent)',
          width: '4px',
          height: '4px',
          top: '20%',
          left: '15%',
          animation: 'safariFloat 12s ease-in-out infinite'
        }} />
        <div className="safari-particle" style={{
          background: 'radial-gradient(circle, #CD7F32, transparent)',
          width: '3px',
          height: '3px',
          top: '60%',
          right: '20%',
          animation: 'safariFloat 15s ease-in-out infinite 2s'
        }} />
      </div>
      
      {/* Simplified atmospheric overlays for animal theme */}
      <div className={`absolute inset-0 ${
        type === 'animals' 
          ? 'bg-gradient-to-r from-amber-900/20 via-orange-800/15 to-red-900/15' 
          : type === 'wildlife'
          ? 'bg-gradient-to-l from-green-900/15 via-amber-800/10 to-orange-900/15'
          : type === 'luxury'
          ? 'bg-gradient-to-r from-amber-900/20 via-gold-800/15 to-bronze-900/15'
          : 'bg-gradient-to-l from-amber-900/15 via-orange-800/10 to-red-900/15'
      }`} style={{ zIndex: 5 }} />
      
      {/* Simplified safari animal-themed gradient overlay */}
      <div className={`absolute inset-0 ${
        type === 'animals'
          ? 'bg-gradient-to-t from-amber-600/15 via-orange-500/8 to-transparent'
          : type === 'wildlife'
          ? 'bg-gradient-to-t from-green-600/10 via-amber-500/6 to-transparent'
          : type === 'luxury'
          ? 'bg-gradient-to-t from-gold-600/12 via-amber-500/8 to-transparent'
          : 'bg-gradient-to-t from-amber-600/10 via-orange-500/6 to-transparent'
      }`} style={{ zIndex: 6 }} />
      
      {/* Simplified fallback luxury safari gradient background */}
      <div 
        className={`absolute inset-0 ${
          type === 'animals'
            ? 'bg-gradient-to-bl from-amber-600 via-orange-500 to-red-500'
            : type === 'wildlife'
            ? 'bg-gradient-to-br from-green-600 via-amber-500 to-orange-500'
            : type === 'luxury'
            ? 'bg-gradient-to-bl from-gold-600 via-amber-500 to-bronze-500'
            : 'bg-gradient-to-bl from-amber-600 via-orange-500 to-red-400'
        }`}
        style={{ zIndex: -1 }}
      />

      {/* Minimal animated safari animal elements for performance */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full safari-pulse" style={{ zIndex: 8 }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/30 rounded-full safari-float" style={{ animationDelay: '2s', zIndex: 8 }} />
    </div>
  );
};

export default VideoBackground;