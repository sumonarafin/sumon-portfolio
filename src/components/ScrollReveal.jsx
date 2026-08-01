import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal
 * A reusable "flying in from deep space" entrance animation.
 * Wrap any element/section with this and it will animate into view
 * as the user scrolls to it — with a blur-to-focus, drifting, slightly
 * rotated approach that feels like it's arriving from off-screen,
 * rather than a plain fade/slide.
 *
 * direction: 'up' | 'down' | 'left' | 'right' | 'zoom'
 */
const directionStart = {
  up: { y: 140, x: 0, rotate: 2, scale: 0.82 },
  down: { y: -140, x: 0, rotate: -2, scale: 0.82 },
  left: { y: 20, x: -180, rotate: -8, scale: 0.85 },
  right: { y: 20, x: 180, rotate: 8, scale: 0.85 },
  zoom: { y: 30, x: 0, rotate: 5, scale: 0.25 },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = '',
  once = true,
  amount = 0.2,
  as = 'div',
}) {
  const start = directionStart[direction] || directionStart.up;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, filter: 'blur(16px)', ...start }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0, x: 0, rotate: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent wrapper for staggered children — use with <StaggerItem> below */
export function StaggerGroup({ children, className = '', stagger = 0.15, once = true, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  const start = directionStart[direction] || directionStart.up;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, filter: 'blur(16px)', ...start },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          x: 0,
          rotate: 0,
          scale: 1,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
