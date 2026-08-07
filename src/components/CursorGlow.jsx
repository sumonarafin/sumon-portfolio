import React, { useEffect, useRef } from 'react';

/**
 * A soft glow that follows the mouse cursor, reinforcing the theme.
 * Uses direct DOM style updates (not React state) so it never causes
 * re-renders, and a lightweight requestAnimationFrame lerp so the glow
 * visibly trails the cursor instead of snapping to it 1:1 — that trail
 * is what actually reads as "an effect" rather than nothing happening.
 * Both the position update and the lerp loop only touch `transform`,
 * so this stays GPU-cheap no matter how long it runs.
 * Automatically does nothing on touch devices, since there's no cursor.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const rafId = useRef(null);

  useEffect(() => {
    let isTouchDevice = false;
    try {
      isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    } catch (e) {
      isTouchDevice = false;
    }
    if (isTouchDevice) return;

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMove);

    const animate = () => {
      // Simple lerp toward the target position — smooth trailing motion
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[480px] h-[480px] -ml-[240px] -mt-[240px] rounded-full pointer-events-none z-[1] opacity-[0.22] blur-[90px] bg-gradient-to-r from-accent1 via-accent2 to-accent3 will-change-transform hidden md:block"
    />
  );
}
