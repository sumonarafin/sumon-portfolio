import React from 'react';

const experiences = [
  {
    date: "2026 - Present",
    title: "Restaurant Manager",
    company: "Hungry Station, Dhamrai",
    points: [
      "Managed daily restaurant operations and staff scheduling.",
      "Supervised customer service and ensured high service standards.",
      "Maintained inventory and coordinated supplier purchases.",
      "Prepared daily sales reports and operational records.",
      "Ensured hygiene, food safety, and workplace cleanliness."
    ]
  },
  {
    date: "2024 - 2025",
    title: "Computer Operator",
    company: "KB, Cambodia",
    points: [
      "Maintained accurate operational records and business documentation.",
      "Performed data entry with high accuracy using computer applications.",
      "Coordinated with different departments to ensure smooth daily operations.",
      "Supported workflow improvement through organized documentation."
    ]
  },
  {
    date: "2021 - 2024",
    title: "Brand Promoter",
    company: "Banglalink Communication Ltd, Dhaka",
    points: [
      "Promoted company products and services professionally.",
      "Assisted customers with product information and service activation.",
      "Built strong customer relationships through effective communication.",
      "Worked with team members to achieve sales targets."
    ]
  },
  {
    date: "2019 - 2024",
    title: "E-Commerce and Inventory Management",
    company: "Soho Emporium, Remote",
    points: [
      "Managed online product listings and processed customer orders.",
      "Coordinated shipping and logistics while maintaining inventory records.",
      "Worked with Shopify and WordPress platforms."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">Work Experience</h2>
        <div className="border-l-2 border-blue-500 ml-4 md:ml-8 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-slate-800/80 p-6 rounded-xl shadow-lg border border-slate-700" data-aos="fade-up" data-aos-duration="1000">
              <div className="absolute -left-[35px] top-6 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-slate-900" />
              <span className="text-blue-400 font-semibold text-sm">{exp.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
              <h4 className="text-gray-400 text-sm mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;