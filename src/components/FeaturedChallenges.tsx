import React, { useState } from 'react';
import { CAD_CHALLENGES } from '../data/cadData';
import { Challenge } from '../types';
import { ArrowLeft, ArrowRight, Layers, HelpCircle, HardDrive, Cpu, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export default function FeaturedChallenges() {
  const [activeChallengeIdx, setActiveChallengeIdx] = useState(1); // Default to Hook Bracket
  const selectedChallenge = CAD_CHALLENGES[activeChallengeIdx];

  const handleNext = () => {
    setActiveChallengeIdx((prev) => (prev + 1) % CAD_CHALLENGES.length);
  };

  const handlePrev = () => {
    setActiveChallengeIdx((prev) => (prev - 1 + CAD_CHALLENGES.length) % CAD_CHALLENGES.length);
  };

  // Helper render to output custom high-tech CAD SVG blueprint mockups
  const renderChallengeBlueprint = (type: string) => {
    if (type === 'keyring') {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full text-zinc-400 stroke-zinc-500 fill-none" strokeWidth="1">
          {/* Key Ring blueprint drafting lines */}
          <circle cx="100" cy="75" r="45" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="1 2" />
          <circle cx="100" cy="75" r="30" stroke="#9333ea" strokeWidth="1.5" />
          <circle cx="100" cy="75" r="40" stroke="#9333ea" strokeWidth="1.5" />
          
          {/* Center boss */}
          <circle cx="100" cy="45" r="8" stroke="#22c55e" strokeWidth="1" />
          <circle cx="100" cy="45" r="4" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 1" />

          {/* Dimension extensions */}
          <line x1="100" y1="20" x2="100" y2="75" stroke="#71717a" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="75" x2="150" y2="75" stroke="#71717a" strokeWidth="0.5" strokeDasharray="2 2" />

          {/* Dimension text */}
          <text x="148" y="72" className="font-mono text-[6px] fill-zinc-500">Ø80</text>
          <text x="100" y="32" className="font-mono text-[6px] fill-zinc-500" textAnchor="middle">Ø16</text>
          <text x="115" y="68" className="font-mono text-[6px] fill-zinc-500">R30</text>
          
          {/* High-tech framing */}
          <path d="M 10 10 L 25 10 M 10 10 L 10 25" stroke="#9333ea" strokeWidth="1" />
          <path d="M 190 140 L 175 140 M 190 140 L 190 125" stroke="#9333ea" strokeWidth="1" />
        </svg>
      );
    }
    if (type === 'bracket') {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full text-zinc-400 stroke-zinc-500 fill-none" strokeWidth="1">
          {/* Anchor Hook Bracket blueprint wireframe */}
          {/* base plate */}
          <path d="M 40 110 L 160 110 L 160 125 L 40 125 Z" stroke="#9333ea" strokeWidth="1.5" />
          {/* Upright column */}
          <path d="M 75 40 L 125 40 L 125 110 L 75 110 Z" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Rib reinforcement triangle */}
          <path d="M 50 110 L 75 70 L 75 110" stroke="#22c55e" strokeWidth="1" />
          <path d="M 150 110 L 125 70 L 125 110" stroke="#22c55e" strokeWidth="1" />

          {/* Drilled Boss */}
          <circle cx="100" cy="65" r="12" stroke="#9333ea" strokeWidth="1.5" />
          <circle cx="100" cy="65" r="6" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 1" />

          {/* Centrelines */}
          <line x1="100" y1="30" x2="100" y2="135" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 2" />
          <line x1="30" y1="110" x2="170" y2="110" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 2" />

          {/* Bounding dimension lines */}
          <line x1="40" y1="135" x2="160" y2="135" stroke="#22c55e" strokeWidth="0.5" />
          <path d="M 40 135 L 45 133 M 40 135 L 45 137 M 160 135 L 155 133 M 160 135 L 155 137" stroke="#22c55e" strokeWidth="0.5" />
          <text x="100" y="143" className="font-mono text-[6px] fill-zinc-500" textAnchor="middle">120.00mm REF</text>

          <text x="118" y="68" className="font-mono text-[6px] fill-zinc-500">Ø12.0</text>
          
          <path d="M 10 10 L 25 10 M 10 10 L 10 25" stroke="#22c55e" strokeWidth="1" />
          <path d="M 190 140 L 175 140 M 190 140 L 190 125" stroke="#22c55e" strokeWidth="1" />
        </svg>
      );
    }
    if (type === 'sheetmetal') {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full text-zinc-400 stroke-zinc-500 fill-none" strokeWidth="1">
          {/* Folded Sheet Metal Stand isometric wireframe */}
          {/* Flat plate with folded profiles */}
          <path d="M 30 110 L 80 70 L 170 70 L 120 110 Z" stroke="#3b82f6" strokeWidth="1" />
          {/* Folded lip */}
          <path d="M 30 110 L 30 125 L 120 125 L 120 110" stroke="#9333ea" strokeWidth="1.5" />
          {/* Obround Slots */}
          <rect x="65" y="80" width="16" height="6" rx="3" transform="rotate(-15, 65, 80)" stroke="#22c55e" strokeWidth="1" />
          <rect x="110" y="80" width="16" height="6" rx="3" transform="rotate(-15, 110, 80)" stroke="#22c55e" strokeWidth="1" />

          {/* Fold indicator dashed line */}
          <line x1="30" y1="110" x2="120" y2="110" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />

          {/* Dimension extensions */}
          <line x1="30" y1="125" x2="30" y2="140" stroke="#71717a" strokeWidth="0.5" />
          <line x1="120" y1="125" x2="120" y2="140" stroke="#71717a" strokeWidth="0.5" />
          <line x1="30" y1="135" x2="120" y2="135" stroke="#22c55e" strokeWidth="0.5" />
          <text x="75" y="143" className="font-mono text-[6px] fill-zinc-500" textAnchor="middle">150.00mm</text>
          <text x="130" y="112" className="font-mono text-[5px] fill-zinc-500">BEND LINE (R1.5)</text>

          <path d="M 10 10 L 25 10 M 10 10 L 10 25" stroke="#9333ea" strokeWidth="1" />
          <path d="M 190 140 L 175 140 M 190 140 L 190 125" stroke="#9333ea" strokeWidth="1" />
        </svg>
      );
    }
    if (type === 'turbo') {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full text-zinc-400 stroke-zinc-500 fill-none" strokeWidth="1">
          {/* Scroll casting swirl outline */}
          <path d="M 100 75 C 100 40, 140 40, 140 75 C 140 110, 80 110, 80 75 C 80 50, 120 50, 120 75 C 120 90, 95 90, 95 75" stroke="#9333ea" strokeWidth="1.5" />
          
          {/* Inlet Flange circle with hole pattern */}
          <rect x="50" y="45" width="20" height="40" rx="2" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="60" cy="52" r="2" stroke="#22c55e" strokeWidth="1" />
          <circle cx="60" cy="65" r="2" stroke="#22c55e" strokeWidth="1" />
          <circle cx="60" cy="78" r="2" stroke="#22c55e" strokeWidth="1" />

          {/* Central hollow chamber dashed lines */}
          <circle cx="100" cy="75" r="18" stroke="#71717a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="75" r="12" stroke="#22c55e" strokeWidth="1" />

          {/* Blueprint info labels */}
          <text x="100" y="78" className="font-mono text-[5px] fill-zinc-500" textAnchor="middle">SHELL t=3.5</text>
          <text x="145" y="40" className="font-mono text-[5px] fill-zinc-500">LOG_SPIRAL_C</text>

          <line x1="50" y1="85" x2="50" y2="105" stroke="#71717a" strokeWidth="0.5" />
          <line x1="140" y1="75" x2="140" y2="105" stroke="#71717a" strokeWidth="0.5" />
          <line x1="50" y1="100" x2="140" y2="100" stroke="#22c55e" strokeWidth="0.5" />
          <text x="95" y="108" className="font-mono text-[6px] fill-zinc-500" textAnchor="middle">Ø180.00</text>

          <path d="M 10 10 L 25 10 M 10 10 L 10 25" stroke="#ef4444" strokeWidth="1" />
          <path d="M 190 140 L 175 140 M 190 140 L 190 125" stroke="#10b981" strokeWidth="1" />
        </svg>
      );
    }
    // Weldment Rack
    return (
      <svg viewBox="0 0 200 150" className="w-full h-full text-zinc-400 stroke-zinc-500 fill-none" strokeWidth="1">
        {/* Structural steel framework wireframe */}
        {/* Outer bounding box frame */}
        <rect x="40" y="35" width="120" height="80" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="50" y="45" width="100" height="60" stroke="#9333ea" strokeWidth="1.2" />
        
        {/* Interstitial structural supports */}
        <line x1="40" y1="75" x2="160" y2="75" stroke="#22c55e" strokeWidth="1" />
        <line x1="100" y1="35" x2="100" y2="115" stroke="#22c55e" strokeWidth="1" />

        {/* Weldment triangular gussets */}
        <polygon points="40,45 50,45 40,55" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.1" />
        <polygon points="160,45 150,45 160,55" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.1" />

        {/* Dimension indicator */}
        <line x1="40" y1="122" x2="160" y2="122" stroke="#22c55e" strokeWidth="0.5" />
        <text x="100" y="130" className="font-mono text-[6px] fill-zinc-500" textAnchor="middle">450.00mm Structural</text>
        <text x="105" y="55" className="font-mono text-[5px] fill-zinc-500">SQ_TUBE [30x30x2]</text>

        <path d="M 10 10 L 25 10 M 10 10 L 10 25" stroke="#3b82f6" strokeWidth="1" />
        <path d="M 190 140 L 175 140 M 190 140 L 190 125" stroke="#3b82f6" strokeWidth="1" />
      </svg>
    );
  };

  return (
    <section id="challenges" className="relative overflow-hidden bg-black py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 bg-brand-green rounded-full" />
              <span className="font-mono text-xs text-brand-green uppercase font-bold">SECTION_06 // FEATURED_CAD_CHALLENGES</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              CAD Practice Blueprint Index
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Ditch hypothetical guides. Solve physical blueprints, measure mass distributions, 
              and verify coordinates. Use any platform to model the physical geometric solids.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-brand-purple hover:text-white transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-brand-green hover:text-white transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Content Area: 2-column details & carousel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Active Blueprint details (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 rounded flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[9px] font-bold ${
                  selectedChallenge.difficulty === 'Beginner' ? 'bg-zinc-900 border-zinc-800 text-zinc-400' :
                  selectedChallenge.difficulty === 'Intermediate' ? 'bg-brand-purple/10 border-brand-purple/30 text-brand-purple-light' :
                  selectedChallenge.difficulty === 'Advanced' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                  'bg-brand-green/10 border-brand-green/30 text-brand-green'
                }`}>
                  {selectedChallenge.difficulty.toUpperCase()}_TIER
                </span>
                
                <span className="font-mono text-[9px] text-zinc-600 font-bold uppercase">{selectedChallenge.category}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">{selectedChallenge.name}</h3>
                <div className="mt-2 font-mono text-[10px] text-zinc-500 uppercase flex items-center gap-1">
                  <span className="font-semibold text-zinc-400">EN_BOUNDS:</span>
                  <span>{selectedChallenge.boundingBox}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 border-y border-zinc-900/60 py-4 font-sans text-xs">
                <div>
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">COMPLETIONS_VERIFIED</div>
                  <div className="font-display font-semibold text-white mt-1">
                    {selectedChallenge.completions.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">AVG_RECORD_SPEED</div>
                  <div className="font-display font-semibold text-brand-green mt-1">
                    {selectedChallenge.avgTime} Mins
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">TARGET_MATERIAL</div>
                  <div className="font-display font-semibold text-white mt-1">
                    {selectedChallenge.material}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">CALCULATED_MASS</div>
                  <div className="font-display font-semibold text-zinc-400 mt-1">
                    {selectedChallenge.weightGrams} grams
                  </div>
                </div>
              </div>

              {/* Physical CAD Features to build */}
              <div className="space-y-2 text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase block">PARAMETRIC_FEATURES_RESOLVED</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedChallenge.features.map((feat) => (
                    <span key={feat} className="inline-flex items-center gap-1 rounded bg-zinc-900 px-2 py-1 font-mono text-[9px] text-zinc-400 border border-zinc-800/40">
                      <Cpu className="h-2.5 w-2.5 text-zinc-600" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col sm:flex-row gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded bg-brand-green py-2 px-4 font-mono text-xs font-bold uppercase text-black hover:bg-brand-green-light transition-all">
                <Download className="h-3.5 w-3.5" />
                <span>Get Blueprint PDF</span>
              </button>
              <button className="inline-flex items-center justify-center gap-1 rounded border border-zinc-800 bg-zinc-900/30 py-2 px-4 font-mono text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <span>View Rules</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Carousel / Graphic Grid Representation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAD_CHALLENGES.map((challenge, idx) => {
                const isActive = idx === activeChallengeIdx;
                return (
                  <div
                    key={challenge.id}
                    onClick={() => setActiveChallengeIdx(idx)}
                    className={`cursor-pointer rounded border p-4 flex flex-col justify-between transition-all h-[190px] text-left relative overflow-hidden ${
                      isActive 
                        ? 'bg-[#060608] border-brand-purple shadow-[0_0_15px_rgba(147,51,234,0.15)]' 
                        : 'bg-[#060608]/40 border-zinc-900 hover:border-zinc-800 hover:bg-[#060608]/85'
                    }`}
                  >
                    {/* Tiny index tag */}
                    <div className="absolute top-2 right-2 font-mono text-[8px] text-zinc-700">INDEX_0{idx + 1}</div>

                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[8px] text-zinc-500 uppercase">{challenge.difficulty} TIER</span>
                      <h4 className="font-display font-semibold text-white text-sm truncate">{challenge.name}</h4>
                    </div>

                    {/* Vector CAD preview inside each card */}
                    <div className="h-20 w-full flex items-center justify-center bg-zinc-950/40 border border-zinc-900/20 rounded p-1 my-2">
                      {renderChallengeBlueprint(challenge.previewSvg)}
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-900/40 pt-2 mt-1">
                      <span className="font-mono text-[9px] text-zinc-500">{challenge.boundingBox}</span>
                      <span className="font-mono text-[9px] text-brand-green font-bold">{challenge.avgTime} MINS</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
