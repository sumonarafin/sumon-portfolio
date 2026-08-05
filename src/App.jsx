import React from 'react';
import StarsCanvas from './components/StarBackground';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import BackToTop from './components/BackToTop';
import ThemeBadge from './components/ThemeBadge';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="text-white min-h-screen relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Animated nebula wash — colors driven by the randomly picked theme */}
      <div className="app-gradient-bg fixed inset-0 z-[-1] pointer-events-none" />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Cursor-following ambient glow (desktop only) */}
      <CursorGlow />

      {/* 3D Canvas Background */}
      <StarsCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      {/* Floating back-to-top button */}
      <BackToTop />

      {/* Shows which random theme is active this visit */}
      <ThemeBadge />
    </div>
  );
}
