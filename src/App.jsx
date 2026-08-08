import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import BackToTop from './components/BackToTop';
import ThemeBadge from './components/ThemeBadge';
import AnimatedBackground from './components/AnimatedBackground';
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

// Heaviest dependency (three.js) is lazy-loaded so it never blocks the
// initial paint / LCP — the rest of the page is fully interactive
// while this loads in just behind it.
const StarsCanvas = lazy(() => import('./components/StarBackground'));

export default function App() {
  return (
    <div
      className="text-white min-h-screen relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Theme-aware animated background (nebula / grid / aurora / dust) */}
      <AnimatedBackground />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Cursor-following ambient glow (desktop only) */}
      <CursorGlow />

      {/* 3D Canvas Background — loaded after initial paint */}
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>

      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />

      {/* Shows which random theme is active this visit */}
      <ThemeBadge />

      {/* Vercel Analytics — tracks visits/page views */}
      <Analytics />
    </div>
  );
}
