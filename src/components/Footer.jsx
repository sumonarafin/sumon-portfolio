import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 text-center text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Sumon Arefin</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          Designed within <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> SA Mode
        </div>
      </div>
    </footer>
  );
}
