import React, { useEffect, useRef } from 'react';

/**
 * A soft glow that follows the mouse cursor, reinforcing the space theme.
 * Uses direct DOM style updates (not React state) so it stays smooth
 * and never causes re-renders. Automatically does nothing on touch
 * devices, since there's no cursor to follow there.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full pointer-events-none z-[1] opacity-[0.07] blur-[100px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 will-change-transform hidden md:block"
    />
  );
}
