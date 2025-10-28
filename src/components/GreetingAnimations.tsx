import React, { useEffect, useState } from 'react';

const greetings = [
  { text: 'Jambo', language: 'Swahili' },
  { text: 'Sawubona', language: 'Zulu' },
  { text: 'Molo', language: 'Xhosa' },
  { text: 'Salaam', language: 'Arabic' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Dumela', language: 'Setswana' },
  { text: 'Habari', language: 'Swahili' },
  { text: 'Sanibonani', language: 'Zulu' },
  { text: 'Avuxeni', language: 'Tsonga' },
  { text: 'Kaabo', language: 'Yoruba' },
  { text: 'Welcome', language: 'English' },
  { text: 'Karibu', language: 'Swahili' },
];

interface FloatingGreeting {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const GreetingAnimations: React.FC = () => {
  const [floatingGreetings, setFloatingGreetings] = useState<FloatingGreeting[]>([]);

  useEffect(() => {
    const createGreeting = () => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      const newGreeting: FloatingGreeting = {
        id: Date.now() + Math.random(),
        text: randomGreeting.text,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4,
      };

      setFloatingGreetings((prev) => [...prev, newGreeting]);

      setTimeout(() => {
        setFloatingGreetings((prev) => prev.filter((g) => g.id !== newGreeting.id));
      }, (newGreeting.duration + newGreeting.delay) * 1000);
    };

    createGreeting();
    const interval = setInterval(createGreeting, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingGreetings.map((greeting) => (
        <div
          key={greeting.id}
          className="absolute text-4xl md:text-6xl font-bold opacity-0 animate-greeting"
          style={{
            left: `${greeting.x}%`,
            top: `${greeting.y}%`,
            animationDelay: `${greeting.delay}s`,
            animationDuration: `${greeting.duration}s`,
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 20px rgba(255, 107, 53, 0.3)',
          }}
        >
          {greeting.text}
        </div>
      ))}
    </div>
  );
};

export default GreetingAnimations;
