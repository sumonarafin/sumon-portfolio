import React from 'react';

const educationData = [
  {
    year: "2018 - 2022",
    title: "Diploma in Computer Engineering",
    institution: "Daffodil Polytechnic Institute"
  },
  {
    year: "2015 - 2017",
    title: "Higher Secondary School Certificate (HSC)",
    institution: "College of Finance & Management, Dhaka"
  },
  {
    year: "Certification",
    title: "Computer Office Application",
    institution: "Bangladesh Technical Education Board"
  },
  {
    year: "License",
    title: "Driving License",
    institution: "Bangladesh Road Transport Authority (BRTA)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">Education & Licenses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationData.map((item, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border-t-4 border-blue-500 shadow-lg transition transform hover:-translate-y-1" data-aos="flip-left" data-aos-duration="1000">
              <span className="text-blue-400 font-semibold text-sm">{item.year}</span>
              <h3 className="text-lg font-bold text-white mt-2 mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;