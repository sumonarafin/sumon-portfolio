import React from 'react';
import { Award, BadgeCheck, Languages } from 'lucide-react';
import ScrollReveal, { StaggerGroup, StaggerItem } from './ScrollReveal';

export default function Certifications() {
  const cards = [
    {
      icon: Award,
      title: 'Certification',
      color: 'from-purple-500 to-indigo-500',
      direction: 'left',
      items: [
        { name: 'Computer Office Application', sub: 'Bangladesh Technical Education Board' },
      ],
    },
    {
      icon: BadgeCheck,
      title: 'License',
      color: 'from-pink-500 to-rose-500',
      direction: 'up',
      items: [
        { name: 'Driving License', sub: 'Bangladesh Road Transport Authority' },
      ],
    },
    {
      icon: Languages,
      title: 'Languages',
      color: 'from-cyan-500 to-blue-500',
      direction: 'right',
      items: [
        { name: 'English', sub: 'Communication & Writing' },
        { name: 'Bangla', sub: 'Communication & Writing' },
        { name: 'Hindi', sub: 'Communication' },
      ],
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Certifications &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Languages</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.2}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <StaggerItem
              key={card.title}
              direction={card.direction}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>
              <div className="space-y-4">
                {card.items.map((item) => (
                  <div key={item.name} className="border-l-2 border-purple-500/30 pl-4">
                    <div className="text-white font-semibold">{item.name}</div>
                    <div className="text-gray-400 text-sm">{item.sub}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
