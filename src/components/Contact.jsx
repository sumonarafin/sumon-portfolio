import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-slate-700" data-aos="fade-right" data-aos-duration="1000">
            <FaPhone className="text-blue-500 text-2xl mx-auto mb-4" />
            <p className="text-gray-300 font-medium">+880-1944519852</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-slate-700" data-aos="fade-up" data-aos-duration="1000">
            <FaEnvelope className="text-blue-500 text-2xl mx-auto mb-4" />
            <p className="text-gray-300 font-medium">sumonarefinjob@gmail.com</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-slate-700" data-aos="fade-left" data-aos-duration="1000">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mx-auto mb-4" />
            <p className="text-gray-300 font-medium">Savar, Dhaka-1340, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;