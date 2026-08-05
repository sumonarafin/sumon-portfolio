import React from 'react';
import { ClipboardList, Database, MessageCircle } from 'lucide-react';
import ScrollReveal, { StaggerGroup, StaggerItem } from './ScrollReveal';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Administration & Operations',
      icon: ClipboardList,
      skills: ['Office Administration', 'Workflow Optimisation', 'Team Coordination', 'Documentation & Reporting', 'Compliance & Standards'],
      color: 'from-accent1 to-indigo-500',
      direction: 'left',
    },
    {
      title: 'Data & Systems',
      icon: Database,
      skills: ['Data Entry & Processing', 'ERP & Software Utilisation', 'Computer Office Applications', 'Inventory Management', 'Shopify / WordPress'],
      color: 'from-accent2 to-rose-500',
      direction: 'up',
    },
    {
      title: 'Customer & Market Facing',
      icon: MessageCircle,
      skills: ['Customer Service', 'Product & Market Analysis', 'E-Commerce Management', 'Brand Promotion', 'English / Bangla / Hindi'],
      color: 'from-accent3 to-blue-500',
      direction: 'right',
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent3 to-accent1">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent3 to-accent1 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.2}>
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <StaggerItem
              key={cat.title}
              direction={cat.direction}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">{cat.title}</h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 group-hover:border-accent1/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
