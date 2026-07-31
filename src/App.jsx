import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground'; // স্পেস ব্যাকগ্রাউন্ড কম্পোনেন্ট ইমপোর্ট

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* ইউনিভার্স ও স্টার ব্যাকগ্রাউন্ড ইফেক্ট */}
      <StarBackground />

      {/* মূল ওয়েবসাইট কন্টেন্ট */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;