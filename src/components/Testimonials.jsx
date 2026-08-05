import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import ScrollReveal, { StaggerGroup, StaggerItem } from './ScrollReveal';

export default function Testimonials() {
  const reviews = [
    {
      title: 'Add Product in Social Media',
      quote: 'Very good in communication, time manner. Job done properly.',
      tags: ['Clear Communicator', 'Committed to Quality'],
      direction: 'left',
    },
    {
      title: 'Bulk Product Listing — Etsy to Shopify',
      quote: 'Sumon successfully completed the task. As always he completed the task quickly and efficiently. I plan to use him again in the next task.',
      tags: ['Reliable'],
      direction: 'up',
    },
    {
      title: 'Dropshipping — FB Marketplace',
      quote: 'He is very well and effective to research products. I would like to work with him in future.',
      tags: ['Collaborative'],
      direction: 'up',
    },
    {
      title: 'Source Marketing PR Agencies',
      quote: 'Lovely job, thank you!',
      tags: [],
      direction: 'right',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <ScrollReveal direction="zoom" className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] text-white">
          Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2">Testimonials</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">Real feedback from real clients on Upwork</p>
        <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto mt-4 rounded-full" />

        {/* Aggregate rating + profile link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-full border border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">5.0 Rating</span>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~010e7c4edb82a8f110"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/30 transition-all duration-300"
          >
            View Upwork Profile <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </ScrollReveal>

      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.15}>
        {reviews.map((review) => (
          <StaggerItem
            key={review.title}
            direction={review.direction}
            className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 relative"
          >
            <Quote className="w-8 h-8 text-accent1/30 absolute top-6 right-6" />

            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-gray-200 text-lg leading-relaxed italic mb-5">"{review.quote}"</p>

            <div className="text-sm font-semibold text-accent1 mb-3">{review.title}</div>

            {review.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent1/10 border border-accent1/20 text-accent1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
