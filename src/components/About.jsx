import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-8" data-aos="fade-down" data-aos-duration="1000">About Me</h2>
        <div className="bg-slate-800/80 p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 text-gray-300 text-lg leading-relaxed" data-aos="flip-up" data-aos-duration="1200">
          <p>
            Skilled in managing daily business operations, maintaining accurate records, preparing reports, and ensuring efficient workflow. Strong organizational, communication, and problem-solving abilities with a commitment to continuous improvement. Seeking an opportunity to contribute to a dynamic organization in Administration or Operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;