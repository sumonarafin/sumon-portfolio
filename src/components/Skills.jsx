import React from 'react';
import { FaBriefcase, FaKeyboard, FaLaptopCode, FaProjectDiagram, FaChartLine, FaShoppingCart, FaUsers } from 'react-icons/fa';

const skills = [
  { name: "Office Administration", icon: <FaBriefcase /> },
  { name: "Data Entry & Processing", icon: <FaKeyboard /> },
  { name: "ERP & Software Utilisation", icon: <FaLaptopCode /> },
  { name: "Workflow Optimisation", icon: <FaProjectDiagram /> },
  { name: "Product & Market Analysis", icon: <FaChartLine /> },
  { name: "E-Commerce Management", icon: <FaShoppingCart /> },
  { name: "Team Coordination", icon: <FaUsers /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">Expertise & Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:border-blue-500 border border-slate-700 transition transform hover:-translate-y-1" data-aos="zoom-in-up" data-aos-duration="800">
              <div className="text-blue-500 text-3xl mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-white font-medium text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;