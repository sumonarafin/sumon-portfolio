import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left space-y-4 flex-1" data-aos="zoom-in-right" data-aos-duration="1400">
          <span className="text-blue-500 font-semibold text-lg">Hello, I'm</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            MD Sumon Arefin
          </h1>
          <h3 className="text-xl sm:text-2xl font-medium text-blue-400">
            Administration & Operations Professional
          </h3>
          <p className="text-gray-400 max-w-xl text-base sm:text-lg">
            Diploma Engineer in Computer Engineering with practical experience in administration, operations, documentation, customer service, and team coordination.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-blue-500/30">
              Contact Me
            </a>
            <a href="#experience" className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
              View Experience
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center" data-aos="zoom-in-left" data-aos-duration="1400">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
            <img src="/images/profile.jpg" alt="MD Sumon Arefin" className="w-full h-full object-cover" onError={(e)=>{e.target.src='https://via.placeholder.com/300?text=Profile+Image'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;