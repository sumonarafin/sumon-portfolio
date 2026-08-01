import React from 'react';
import { ClipboardList, Users, ShoppingCart } from 'lucide-react';
import ScrollReveal, { StaggerGroup, StaggerItem } from './ScrollReveal';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '7+' },
    { label: 'Roles Held', value: '4' },
    { label: 'Industries Worked In', value: '4' },
    { label: 'Languages Spoken', value: '3' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side Highlight Cards */}
        <StaggerGroup className="lg:col-span-5 space-y-4" stagger={0.18}>
          <StaggerItem direction="left" className="glass-card glass-card-hover p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600/20 rounded-xl text-purple-400">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Administration &amp; Operations</h3>
                <p className="text-gray-400 text-sm">Running daily operations, maintaining accurate records, and preparing reports that keep a business moving smoothly.</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem direction="left" className="glass-card glass-card-hover p-6 rounded-2xl border border-pink-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-600/20 rounded-xl text-pink-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Team &amp; Customer Coordination</h3>
                <p className="text-gray-400 text-sm">Training and supervising staff, resolving customer concerns, and keeping every department in sync.</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem direction="left" className="glass-card glass-card-hover p-6 rounded-2xl border border-cyan-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-600/20 rounded-xl text-cyan-400">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">E-Commerce &amp; Digital Tools</h3>
                <p className="text-gray-400 text-sm">Managing online product listings, orders, and inventory using Shopify, WordPress, and ERP software.</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Right Side Bio & Stats */}
        <ScrollReveal direction="right" className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-6">
          <h3 className="text-2xl font-bold text-white">Keeping operations organized, one detail at a time</h3>
          <p className="text-gray-300 leading-relaxed">
            I am <strong className="text-purple-400">MD Sumon Arefin</strong>, a Diploma Engineer in Computer Engineering with practical experience in administration, operations, documentation, customer service, and team coordination.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From managing daily restaurant operations to handling e-commerce inventory and brand promotion, I bring strong organizational, communication, and problem-solving skills to every role — with a steady commitment to continuous improvement and efficient workflows.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 rounded-xl bg-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
