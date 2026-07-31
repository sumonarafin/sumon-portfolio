import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" onError={(e)=>{e.target.style.display='none'}} />
          <span className="text-white font-bold text-lg">Sumon Arefin</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#hero" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#education" className="hover:text-blue-500 transition">Education</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;