import React, { useMemo } from 'react';

// Fixed set of dust particle positions/sizes/delays — computed once so
// they don't shift between renders. Kept small in count on purpose:
// each is a plain transform/opacity animation (GPU-only), so even 18
// of them cost almost nothing, but there's no reason to go overboard.
function useDustParticles() {
  return useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 4,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 8}s`,
    }));
  }, []);
}

export default function AnimatedBackground() {
  const type =
    (typeof window !== 'undefined' && window.__ACTIVE_THEME_TYPE__) || 'nebula';
  const particles = useDustParticles();

  if (type === 'grid') {
    return (
      <div className="bg-layer bg-grid">
        <div className="glow-1" />
        <div className="glow-2" />
        <div className="grid-plane" />
      </div>
    );
  }

  if (type === 'aurora') {
    return (
      <div className="bg-layer bg-aurora">
        <div className="ribbon ribbon-1" />
        <div className="ribbon ribbon-2" />
        <div className="ribbon ribbon-3" />
      </div>
    );
  }

  if (type === 'dust') {
    return (
      <div className="bg-layer bg-dust">
        <div className="glow-1" />
        <div className="glow-2" />
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    );
  }

  // default: nebula
  return (
    <div className="bg-layer bg-nebula">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  );
}
