import React from 'react';
import { motion } from 'framer-motion';

const cosmicVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.6, 
    z: -500,
    rotateX: 15,
    y: 100 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    z: 0,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Smooth custom easing
      staggerChildren: 0.2
    }
  }
};

export const CosmicSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cosmicVariants}
      className={`relative min-h-screen flex flex-col justify-center items-center py-20 px-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.section>
  );
};