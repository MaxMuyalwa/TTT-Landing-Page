import React from 'react';
import { FileText, Timer, Box, Scale, Trophy } from 'lucide-react';

const steps = [
  { title: 'Launch Drawing', subtitle: 'Start Timer', icon: FileText },
  { title: 'Model the Drawing', subtitle: 'Use your CAD package', icon: Box },
  { title: 'Enter the Mass', subtitle: 'See Where You Rank', icon: Trophy },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/40 via-black to-black/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-brand-green" />
            
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded border border-white/10 bg-black p-6 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded border border-brand-purple/30 bg-brand-purple/10 text-brand-purple-light">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-mono text-[10px] font-bold uppercase text-zinc-600">STEP_0{index + 1}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase text-brand-green">{step.subtitle}</p>
                {index === 0 && <Timer className="absolute right-4 top-4 h-4 w-4 text-zinc-700" />}
                {index === 2 && <Scale className="absolute right-4 top-4 h-4 w-4 text-zinc-700" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
