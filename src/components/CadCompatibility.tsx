import React from 'react';
import { Cpu } from 'lucide-react';

const cadPackages = ['SOLIDWORKS', 'Fusion 360', 'Onshape', 'FreeCAD', 'Creo', 'Inventor', 'CATIA', 'NX', 'Solid Edge'];

export default function CadCompatibility() {
  const rail = [...cadPackages, ...cadPackages];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-black/45 to-black -mt-20 pt-28 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 engineering-grid-fine opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-black/20 to-black/55 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-purple" />
              
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Compatible with Any CAD Package
            </h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-zinc-400">
            Too Tall Toby measures the finished model, not the software used to build it.
          </p>
        </div>

        <div className="relative overflow-hidden bg-black/20 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
          <div className="flex w-max gap-3 animate-logo-marquee">
            {rail.map((name, index) => (
              <div key={`${name}-${index}`} className="flex min-w-[150px] items-center justify-center gap-2 rounded border border-zinc-800 bg-black px-4 py-3">
                <Cpu className="h-4 w-4 text-brand-green" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed text-zinc-600">
          All trademarks, logos, and brand names are the property of their respective owners. Use of these names and logos does not imply endorsement.
        </p>
      </div>
    </section>
  );
}


