import React from 'react';
import StarsCanvas from './components/StarBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#030014] text-white min-h-screen relative overflow-hidden">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* 3D Canvas Background */}
      <StarsCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
