import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Download, ArrowRight, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: background orbs drift and fade as the visitor scrolls past,
  // reinforcing the "moving through space" feeling.
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 z-10 overflow-hidden"
    >
      {/* Background Glow Orbs with parallax drift */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
      />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -80, filter: 'blur(12px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-purple-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Welcome to my Digital Universe</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 glow-text">
              MD Sumon Arefin
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            A dedicated <span className="text-purple-400 font-semibold">Administration &amp; Operations Professional</span> with hands-on experience across <span className="text-pink-400 font-semibold">team coordination</span>, e-commerce, and daily business operations — turning busy, moving parts into smooth, well-run workflows.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 text-white font-semibold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/MD_Sumon_Arefin_CV.pdf"
              download
              className="px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold flex items-center gap-3 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <Download className="w-5 h-5 text-purple-400" /> Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
            {[
              { icon: Mail, href: 'mailto:sumonarefinjob@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl glass-card hover:border-purple-500 hover:text-purple-400 text-gray-400 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Glowing Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: 8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Animated Glow Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-50 animate-pulse-slow" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-75 blur-sm animate-spin" style={{ animationDuration: '15s' }} />

            {/* Profile Frame Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-3 border border-white/20 shadow-2xl flex items-center justify-center">
              {/* Profile photo — swap /public/images/profile.jpg to change it */}
              <img
                src="/images/profile.jpg"
                alt="MD Sumon Arefin"
                className="w-full h-full object-cover rounded-2xl filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-500"
              />

              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-3 rounded-xl border border-white/10 flex items-center gap-3 backdrop-blur-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-200">Available for Admin &amp; Operations roles</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
