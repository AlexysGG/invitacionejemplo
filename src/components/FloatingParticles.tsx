import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'petal' | 'sparkle' | 'ring';
}

export const FloatingParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.floor(Math.random() * 12) + 8,
      duration: Math.random() * 14 + 16,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.45 + 0.25,
      type: i % 3 === 0 ? 'sparkle' : i % 2 === 0 ? 'petal' : 'ring',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: '-40px',
            animation: `float-particle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'petal' ? (
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#E8A598]/60 transform rotate-12"
            >
              <path
                d="M12 0C18 8 24 16 20 26C16 33 8 33 4 26C-1 18 6 8 12 0Z"
                fill="currentColor"
              />
            </svg>
          ) : p.type === 'sparkle' ? (
            <svg
              width={p.size * 0.8}
              height={p.size * 0.8}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#D4AF37]/70"
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <div
              className="rounded-full border border-[#D4AF37]/50"
              style={{ width: `${p.size * 0.7}px`, height: `${p.size * 0.7}px` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
