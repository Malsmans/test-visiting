import React from 'react';

interface VideoBackgroundProps {
  type: 'safari' | 'wildlife' | 'luxury' | 'animals' | 'landscape' | 'culture';
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ type, className = '' }) => {
  // High-Quality African Safari and Wildlife Videos Collection
  const africanVideos = {
    safari: [
      // African Safari Landscapes
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephants walking
      'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // African savanna landscape
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Aerial African wildlife
      'https://videos.pexels.com/video-files/6985466/6985466-hd_1920_1080_25fps.mp4', // African sunset landscape
    ],
    wildlife: [
      // African Big Five and Wildlife
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephant herd
      'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // Lions in savanna
      'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Wildlife migration
      'https://videos.pexels.com/video-files/7991158/7991158-hd_1920_1080_25fps.mp4', // African animals grazing
    ],
    luxury: [
      // Luxury African Safari Experience
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Premium elephant footage
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Luxury safari aerial view
      'https://videos.pexels.com/video-files/6985466/6985466-hd_1920_1080_25fps.mp4', // Golden hour safari
      'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // Luxury landscape
    ],
    animals: [
      // Specific African Animals
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // African elephants
      'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // African lions
      'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Wildebeest migration
      'https://videos.pexels.com/video-files/7991158/7991158-hd_1920_1080_25fps.mp4', // Zebras and gazelles
    ],
    landscape: [
      // African Landscapes and Scenery
      'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // African savanna
      'https://videos.pexels.com/video-files/6985466/6985466-hd_1920_1080_25fps.mp4', // African sunset
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Aerial landscape
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Landscape with animals
    ],
    culture: [
      // African Culture and Villages
      'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // African landscape
      'https://videos.pexels.com/video-files/6985466/6985466-hd_1920_1080_25fps.mp4', // Cultural landscape
      'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Aerial cultural view
      'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Traditional landscape
    ]
  };

  // Premium African Safari Videos Collection
  const premiumAfricanVideos = [
    'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4', // Elephant herd
    'https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4', // Lions
    'https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4', // Migration
    'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4', // Savanna
    'https://videos.pexels.com/video-files/6985466/6985466-hd_1920_1080_25fps.mp4', // Sunset
    'https://videos.pexels.com/video-files/4825173/4825173-hd_1920_1080_25fps.mp4', // Aerial
    'https://videos.pexels.com/video-files/7991158/7991158-hd_1920_1080_25fps.mp4', // Animals
  ];

  // Select random African video for variety
  const getRandomAfricanVideo = (videos: string[]) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  // Get video based on type or random from premium collection
  const selectedVideo = africanVideos[type] 
    ? getRandomAfricanVideo(africanVideos[type])
    : getRandomAfricanVideo(premiumAfricanVideos);

  return (
    <div className={`safari-video-container ${className}`}>
      {/* Primary African Safari Video */}
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
          // Quick fallback to next African video if current fails
          const target = e.target as HTMLVideoElement;
          const fallbackVideo = getRandomAfricanVideo(premiumAfricanVideos);
          target.src = fallbackVideo;
        }}
      >
        <source src={selectedVideo} type="video/mp4" />
        {/* Multiple African fallback sources for reliability */}
        <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/8159200/8159200-hd_1920_1080_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/9917946/9917946-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* African Safari Overlay */}
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
      
      {/* African Safari Particles */}
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
        <div className="safari-particle" style={{
          background: 'radial-gradient(circle, #B87333, transparent)',
          width: '5px',
          height: '5px',
          top: '40%',
          left: '70%',
          animation: 'safariFloat 18s ease-in-out infinite 4s'
        }} />
      </div>
      
      {/* African-themed atmospheric overlays */}
      <div className={`absolute inset-0 ${
        type === 'animals' 
          ? 'bg-gradient-to-r from-amber-900/20 via-orange-800/15 to-red-900/15' 
          : type === 'wildlife'
          ? 'bg-gradient-to-l from-green-900/15 via-amber-800/10 to-orange-900/15'
          : type === 'luxury'
          ? 'bg-gradient-to-r from-amber-900/20 via-yellow-800/15 to-orange-900/15'
          : type === 'landscape'
          ? 'bg-gradient-to-b from-blue-900/10 via-amber-800/8 to-orange-900/12'
          : type === 'culture'
          ? 'bg-gradient-to-r from-red-900/15 via-amber-800/10 to-yellow-900/15'
          : 'bg-gradient-to-l from-amber-900/15 via-orange-800/10 to-red-900/15'
      }`} style={{ zIndex: 5 }} />
      
      {/* African safari-themed gradient overlay */}
      <div className={`absolute inset-0 ${
        type === 'animals'
          ? 'bg-gradient-to-t from-amber-600/15 via-orange-500/8 to-transparent'
          : type === 'wildlife'
          ? 'bg-gradient-to-t from-green-600/10 via-amber-500/6 to-transparent'
          : type === 'luxury'
          ? 'bg-gradient-to-t from-yellow-600/12 via-amber-500/8 to-transparent'
          : type === 'landscape'
          ? 'bg-gradient-to-t from-blue-600/8 via-amber-500/5 to-transparent'
          : type === 'culture'
          ? 'bg-gradient-to-t from-red-600/10 via-amber-500/6 to-transparent'
          : 'bg-gradient-to-t from-amber-600/10 via-orange-500/6 to-transparent'
      }`} style={{ zIndex: 6 }} />
      
      {/* African safari gradient background fallback */}
      <div 
        className={`absolute inset-0 ${
          type === 'animals'
            ? 'bg-gradient-to-bl from-amber-600 via-orange-500 to-red-500'
            : type === 'wildlife'
            ? 'bg-gradient-to-br from-green-600 via-amber-500 to-orange-500'
            : type === 'luxury'
            ? 'bg-gradient-to-bl from-yellow-600 via-amber-500 to-orange-500'
            : type === 'landscape'
            ? 'bg-gradient-to-br from-blue-600 via-amber-500 to-orange-500'
            : type === 'culture'
            ? 'bg-gradient-to-bl from-red-600 via-amber-500 to-yellow-500'
            : 'bg-gradient-to-bl from-amber-600 via-orange-500 to-red-400'
        }`}
        style={{ zIndex: -1 }}
      />

      {/* African safari animated elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full safari-pulse" style={{ zIndex: 8 }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/30 rounded-full safari-float" style={{ animationDelay: '2s', zIndex: 8 }} />
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-500/50 rounded-full safari-pulse" style={{ animationDelay: '4s', zIndex: 8 }} />
    </div>
  );
};

export default VideoBackground;