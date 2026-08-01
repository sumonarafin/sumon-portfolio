import React from 'react';
import { GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  const educations = [
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Daffodil Polytechnic Institute',
      period: '2018 - 2022',
      details: 'Built a foundation in computer engineering fundamentals, applied directly to administration, documentation, and operations work.'
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      institution: 'College of Finance & Management, Dhaka',
      period: '2015 - 2017',
      details: 'Completed secondary studies with a focus on finance and management fundamentals.'
    }
  ];

  const directions = ['left', 'right'];

  return (
    <section id="education" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Learning</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8">
        {educations.map((edu, idx) => (
          <ScrollReveal
            key={idx}
            direction={directions[idx % directions.length]}
            delay={idx * 0.1}
            className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col md:flex-row items-start gap-6"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl text-white shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 w-fit">
                  {edu.period}
                </span>
              </div>
              <p className="text-purple-300 font-medium">{edu.institution}</p>
              <p className="text-gray-300 text-sm leading-relaxed pt-2">{edu.details}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
