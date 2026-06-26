import React from 'react';
import { Star } from 'lucide-react';

const fallbackTestimonials = [
  {
    name: 'Alicia Moreno',
    role: 'Mechanical Design Engineer',
    company: 'Aerospace Supplier',
    photo: 'AM',
    rating: 5,
    quote: 'Too Tall Toby turned practice into a measurable habit. I can see my speed, accuracy, and weak spots after every model.',
  },
  {
    name: 'Daniel Weber',
    role: 'CAD Manager',
    company: 'Manufacturing Team',
    photo: 'DW',
    rating: 5,
    quote: 'The leaderboard format makes our team want to practice. It is much more useful than sending everyone another tutorial playlist.',
  },
  {
    name: 'Mina Patel',
    role: 'Product Development Student',
    company: 'University Lab',
    photo: 'MP',
    rating: 5,
    quote: 'I use Fusion and classmates use SOLIDWORKS. We can still compete on the same drawing because the mass check keeps it fair.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/30 via-black to-black/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-purple" />
              
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Testimonials</h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-zinc-400">
            Built to pull live testimonials from Strapi: name, photo, role, company, rating, and quote.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-3">
          {fallbackTestimonials.map((testimonial) => (
            <article key={testimonial.name} className="min-w-[300px] snap-start rounded border border-white/10 bg-black p-5 sm:min-w-[380px]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-brand-green/30 bg-brand-green/10 font-mono text-sm font-bold text-brand-green">
                  {testimonial.photo}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{testimonial.name}</h3>
                  <p className="font-mono text-[10px] uppercase text-zinc-500">{testimonial.role}{testimonial.company ? ` / ${testimonial.company}` : ''}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-brand-green">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-sans text-sm leading-relaxed text-zinc-300">"{testimonial.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
