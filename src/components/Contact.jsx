import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// EmailJS credentials — set these in a .env file (see .env.example),
// or directly in Vercel: Project Settings → Environment Variables.
// Get your own Service ID / Template ID / Public Key free at emailjs.com.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formOpenedAt = useRef(Date.now());
  const lastSubmissionAt = useRef(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lightweight client-side spam protection: hidden honeypot, minimum fill time,
    // field length limits, and a short cooldown between submissions.
    if (formData.website) return;

    const now = Date.now();
    const filledTooFast = now - formOpenedAt.current < 2500;
    const submittingTooSoon = now - lastSubmissionAt.current < 60000;
    const invalidLengths =
      formData.name.trim().length < 2 ||
      formData.name.length > 80 ||
      formData.subject.trim().length < 3 ||
      formData.subject.length > 120 ||
      formData.message.trim().length < 10 ||
      formData.message.length > 3000;

    if (filledTooFast || submittingTooSoon || invalidLengths) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
        'and VITE_EMAILJS_PUBLIC_KEY to your .env file (or Vercel Environment Variables).'
      );
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      lastSubmissionAt.current = Date.now();
      formOpenedAt.current = Date.now();
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  maxLength={80}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  maxLength={254}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Inquiry"
                maxLength={120}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent1 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                maxLength={3000}
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
