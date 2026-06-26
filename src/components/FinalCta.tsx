import React, { useState } from 'react';
import { Target, ShieldCheck, Mail, Cpu, Check } from 'lucide-react';

export default function FinalCta() {
  const [email, setEmail] = useState('');
  const [selectedCAD, setSelectedCAD] = useState('SolidWorks');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-b from-black via-black/80 to-black/40 backdrop-blur-[2px] py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl rounded-lg border border-white/20 bg-black p-8 md:p-12 text-center backdrop-blur-sm overflow-hidden">
        
        {/* Subtle coordinate decoration */}
        <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-700">SYS_OB: CTA_ONBOARDING_MOD_01</div>
        <div className="absolute bottom-2 right-2 font-mono text-[8px] text-zinc-700">COORD: [FINAL_TRIGGER_STABLE]</div>

        <div className="max-w-2xl mx-auto space-y-6">

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Practice Like the Best?
          </h2>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            Start with a real drawing, submit your mass, and turn every practice run into measurable progress.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-10 space-y-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Input with icon */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-zinc-500" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter engineering email address"
                    className="w-full rounded border border-white/10 bg-black py-3 pl-10 pr-4 font-mono text-xs text-white placeholder-zinc-500 focus:border-brand-purple focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-3 border border-brand-green text-brand-green font-mono text-xs font-bold uppercase tracking-wider hover:bg-brand-green hover:text-black transition-all"
                >
                  Try as Guest
                </button>              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a href="#challenges" className="rounded border border-white/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-zinc-300 hover:border-brand-green hover:text-brand-green transition-all">
                  Browse Challenges
                </a>
                <a href="https://www.tootalltoby.com/cswp-prep/" target="_blank" rel="noreferrer" className="rounded border border-brand-purple/40 bg-brand-purple/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-brand-purple-light hover:bg-brand-purple hover:text-white transition-all">
                  CSWP Prep
                </a>

              </div>

              {/* CAD System dropdown selector */}
              <div className="flex items-center justify-center gap-3 bg-black border border-white/10 rounded p-2 max-w-sm mx-auto">
                <span className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                  <Cpu className="h-3 w-3" />
                  <span>CAD_COMPILER:</span>
                </span>
                <select
                  value={selectedCAD}
                  onChange={(e) => setSelectedCAD(e.target.value)}
                  className="bg-transparent font-mono text-[10px] text-zinc-300 font-bold focus:outline-none cursor-pointer"
                >
                  <option value="SolidWorks" className="bg-black text-white">SolidWorks</option>
                  <option value="Fusion 360" className="bg-black text-white">Fusion 360</option>
                  <option value="Onshape" className="bg-black text-white">Onshape</option>
                  <option value="Inventor" className="bg-black text-white">Inventor</option>
                  <option value="Creo" className="bg-black text-white">Creo Parametric</option>
                  <option value="CATIA" className="bg-black text-white">CATIA</option>
                  <option value="FreeCAD" className="bg-black text-white">FreeCAD</option>
                </select>
              </div>
            </form>
          ) : (
            <div className="mt-8 bg-black border border-brand-green/30 rounded-lg p-6 max-w-md mx-auto space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green mx-auto">
                <Check className="h-5 w-5" />
              </div>
              <h4 className="font-display font-semibold text-white text-base">WORKSPACE_INITIALIZED</h4>
              <p className="font-sans text-[11px] text-zinc-400 leading-normal">
                Credentials verified for <span className="text-white font-mono">{email}</span>. Your unique speedrun dashboard and blueprint download keys for <span className="text-brand-green font-bold font-mono">{selectedCAD}</span> have been initialized. Check your inbox for the connection key.
              </p>
            </div>
          )}

          {/* Verification labels */}
          <div className="pt-8 flex flex-wrap gap-4 justify-center text-zinc-500 font-mono text-[9px]">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-600" />
              <span>100% PRIVATE DATA SECURITY</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-600" />
              <span>SPAM PROTECTED AUDIT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
