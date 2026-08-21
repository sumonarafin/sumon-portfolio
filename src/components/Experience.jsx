import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      role: 'DMS Executive',
      company: 'RR enterprise (Banglalink Distribution House)',
      period: 'August 2026 - Present',
      location: 'Savar, Dhaka',
      points: [
        'Manage daily distribution, retailer and sales data through DMS and Microsoft Excel.',
        'Prepare daily/weekly/monthly sales, target and performance reports.',
        'Maintain and verify retailer, SR and BP records and resolve data discrepancies.',
        'Monitor sales targets, achievements and operational performance.',
        'Coordinate with SRs, BPs, retailers and supervisors for smooth distribution operations.',
      ]
    },
    {
      role: 'Restaurant Manager',
      company: 'Hungry Station',
      period: 'January 2026 - July 2026',
      location: 'Dhamrai, Dhaka',
      points: [
        'Managed daily restaurant operations and staff scheduling.',
        'Supervised customer service and ensured high service standards.',
        'Maintained inventory and coordinated supplier purchases.',
        'Prepared daily sales reports and operational records.',
        'Ensured hygiene, food safety, and workplace cleanliness.',
        'Trained and supervised restaurant staff.',
      ]
    },
    {
      role: 'Computer Operator',
      company: 'KB',
      period: '2024 - 2025',
      location: 'Cambodia',
      points: [
        'Maintained accurate operational records and business documentation.',
        'Performed data entry with high accuracy using computer applications.',
        'Coordinated with different departments to ensure smooth daily operations.',
        'Prepared reports and maintained confidential documents.',
        'Maintained compliance with company procedures and workplace standards.',
      ]
    },
    {
      role: 'Brand Promoter',
      company: 'Banglalink Communication Ltd',
      period: '2021 - 2024',
      location: 'Dhaka, Bangladesh',
      points: [
        'Promoted company products and services professionally.',
        'Assisted customers with product information and service activation.',
        'Built strong customer relationships through effective communication.',
        'Worked with team members to achieve sales targets.',
        'Represented the company following organizational standards.',
      ]
    },
    {
      role: 'E-Commerce & Inventory Management',
      company: 'Soho Emporium',
      period: '2019 - 2024',
      location: 'Remote',
      points: [
        'Managed online product listings across platforms.',
        'Processed customer orders and maintained inventory records.',
        'Coordinated shipping and logistics.',
        'Prepared sales and inventory reports.',
        'Worked with Shopify and WordPress platforms.',
      ]
    }
  ];

  const directions = ['left', 'right', 'left', 'right', 'left'];

  return (
    <section id="experience" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent1">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent2 to-accent1 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <div className="relative border-l-2 border-accent1/40 ml-4 md:ml-32 space-y-12">
        {experiences.map((exp, index) => (
          <ScrollReveal
            key={index}
            direction={directions[index % directions.length]}
            delay={index * 0.05}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gradient-to-r from-accent1 to-accent2 flex items-center justify-center border-4 border-[#030014] shadow-lg shadow-accent1/50">
              <Briefcase className="w-3.5 h-3.5 text-white" />
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 glass-card-hover">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="text-accent1 font-semibold">{exp.company}</div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-accent1" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-accent2" /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent1 shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
