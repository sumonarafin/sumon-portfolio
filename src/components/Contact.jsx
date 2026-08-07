import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Encode form data the way Netlify Forms expects (application/x-www-form-urlencoded)
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2">Touch</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">Looking for a reliable Administration or Operations professional? Let's talk.</p>
        <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards */}
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-accent1/20 rounded-xl text-accent1">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Email Me</div>
              <a href="mailto:sumonarefinjob@gmail.com" className="text-white font-medium hover:text-accent1 transition-colors">
                sumonarefinjob@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-emerald-600/20 rounded-xl text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Chat on WhatsApp</div>
              <a
                href="https://wa.me/8801944519852"
                target="_blank"
                rel="noreferrer"
                className="text-white font-medium hover:text-emerald-400 transition-colors"
              >
                Message me on WhatsApp
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-5">
            <div className="p-4 bg-accent3/20 rounded-xl text-accent3">
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
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Required for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Inquiry"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-accent1 via-accent2 to-accent1 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgb(var(--accent-1-rgb)_/_0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-400" /> Message Sent Successfully!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5 text-red-400" /> Something went wrong — try again
                </>
              ) : status === 'sending' ? (
                <>Sending...</>
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
