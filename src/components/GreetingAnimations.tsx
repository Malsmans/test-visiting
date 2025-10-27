import React, { useEffect, useState } from 'react';

interface Greeting {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
}

const greetings = [
  'Jambo',
  'Habari',
  'Karibu',
  'Asante',
  'Welcome',
  'Hello',
  'Hakuna Matata',
  'Ubuntu',
  'Sawubona',
  'Dumela'
];

export const GreetingAnimations: React.FC = () => {
  const [activeGreetings, setActiveGreetings] = useState<Greeting[]>([]);

  useEffect(() => {
    const createGreeting = () => {
      const newGreeting: Greeting = {
        id: Date.now() + Math.random(),
        text: greetings[Math.floor(Math.random() * greetings.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: 0
      };

      setActiveGreetings(prev => [...prev, newGreeting]);

      setTimeout(() => {
        setActiveGreetings(prev => prev.filter(g => g.id !== newGreeting.id));
      }, 4000);
    };

    const interval = setInterval(createGreeting, 3000);
    createGreeting();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {activeGreetings.map((greeting) => (
        <div
          key={greeting.id}
          className="absolute animate-greeting-float"
          style={{
            left: `${greeting.x}%`,
            top: `${greeting.y}%`,
            animationDelay: `${greeting.delay}ms`
          }}
        >
          <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400/20 via-amber-500/20 to-yellow-500/20 bg-clip-text text-transparent animate-pulse">
            {greeting.text}
          </span>
        </div>
      ))}
    </div>
  );
};
