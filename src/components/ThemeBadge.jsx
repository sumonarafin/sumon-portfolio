import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * A tiny, tasteful badge that reveals which random theme loaded this time
 * (set synchronously in index.html before React even mounts). Purely
 * decorative — reinforces that the site's mood genuinely changes on
 * every reload.
 */
export default function ThemeBadge() {
  const [themeName, setThemeName] = useState('');

  useEffect(() => {
    setThemeName(window.__ACTIVE_THEME__ || '');
  }, []);

  if (!themeName) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border border-white/10 text-xs font-medium text-gray-300 hidden sm:flex"
    >
      <Sparkles className="w-3.5 h-3.5 text-accent1" />
      <span>{themeName}</span>
    </motion.div>
  );
}
