import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Touch</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">Looking for a reliable Administration or Operations professional? Let's talk.</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards */}
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-purple-600/20 rounded-xl text-purple-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Email Me</div>
              <a href="mailto:sumonarefinjob@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                sumonarefinjob@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-pink-600/20 rounded-xl text-pink-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Call / WhatsApp</div>
              <a href="tel:+8801944519852" className="text-white font-medium hover:text-pink-400 transition-colors">
                +880 1944-519852
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-cyan-600/20 rounded-xl text-cyan-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Location</div>
              <div className="text-white font-medium">Savar, Dhaka-1340, Bangladesh</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal direction="right" className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                required
                placeholder="Job Opportunity / Inquiry"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                required
                placeholder="Tell me about the opportunity..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-400" /> Message Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Message
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
