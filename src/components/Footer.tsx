import React, { useState } from 'react';
import { Disc, ExternalLink, GitBranch, Terminal, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const [logoSrc, setLogoSrc] = useState('/logo.png');
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black/40 via-black/20 to-black backdrop-blur-[2px] py-12 px-4 sm:px-6 lg:px-8">
      {/* Blueprint background grid accent */}
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start border-b border-white/20 pb-10">
          
          {/* Column 1: Info and logo (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              {!logoError ? (
                <img 
                  src={logoSrc} 
                  onError={() => setLogoError(true)} 
                  alt="Too Tall Toby Logo" 
                  className="h-8 md:h-10 w-auto object-contain" 
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)]">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      {/* Outer circle with border */}
                      <circle cx="50" cy="50" r="47" fill="#f5f7ff" stroke="#0a0a0a" strokeWidth="4"/>
                      
                      {/* Light lavender/blue grid background inside the circle */}
                      <g mask="url(#circle-mask-inline-footer)">
                        <mask id="circle-mask-inline-footer">
                          <circle cx="50" cy="50" r="45" fill="white"/>
                        </mask>
                        {/* Grid lines */}
                        <path d="M 10,0 L 10,100 M 20,0 L 20,100 M 30,0 L 30,100 M 40,0 L 40,100 M 50,0 L 50,100 M 60,0 L 60,100 M 70,0 L 70,100 M 80,0 L 80,100 M 90,0 L 90,100" stroke="#d5deff" strokeWidth="1.25" />
                        <path d="M 0,10 L 100,10 M 0,20 L 100,20 M 0,30 L 100,30 M 0,40 L 100,40 M 0,50 L 100,50 M 0,60 L 100,60 M 0,70 L 100,70 M 0,80 L 100,80 M 0,90 L 100,90" stroke="#d5deff" strokeWidth="1.25" />
                        
                        {/* Cartoon face/outline contour (Toby's head outline) */}
                        <path d="M 22,50 C 20,24 80,24 78,50 C 76,73 24,73 22,50" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round"/>
                        
                        {/* Spectacles glasses (Thick black rims, rounded square design) */}
                        <rect x="28" y="38" width="18" height="18" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinejoin="round" />
                        <rect x="54" y="38" width="18" height="18" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinejoin="round" />
                        
                        {/* Spectacles Bridge */}
                        <path d="M 46,47 Q 50,44 54,47" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinecap="round"/>
                        
                        {/* Spectacles Temples/Arms (extending outwards) */}
                        <path d="M 28,47 C 22,45 18,38 16,44" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                        <path d="M 72,47 C 78,45 82,38 84,44" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                        
                        {/* Little hand-drawn details (Toby hair tuft/ear markings) */}
                        <path d="M 18,52 L 15,58" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 82,52 L 85,58" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans font-black tracking-tighter text-white text-base uppercase leading-tight block">
                      TOO TALL TOBY
                    </span>
                    <div className="font-mono text-[8px] tracking-widest text-brand-green uppercase leading-none">
                      CAD.Practice.Engine
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-xs">
              The premier platform for professional speedrun modeling tournaments, practice exercises, 
              and global performance benchmark tracking. 100% CAD software agnostic.
            </p>
 
            <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-600">
              <GitBranch className="h-3 w-3" />
              <span>BUILD_REV: v2.45.10-STABLE</span>
            </div>
          </div>
 
          {/* Column 2: Legal and documentation (4 cols) */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400">ENGINEERING_RESOURCES</h4>
            <ul className="space-y-1.5 font-sans text-xs text-zinc-500">
              <li>
                <a href="#challenges" className="hover:text-brand-green transition-colors flex items-center gap-1.5">
                  <span>Prismatic Practice Index</span>
                </a>
              </li>
              <li>
                <a href="#tutorials" className="hover:text-brand-purple transition-colors flex items-center gap-1.5">
                  <span>Knowledge Node Network</span>
                </a>
              </li>
              <li>
                <a href="#battles" className="hover:text-brand-green transition-colors flex items-center gap-1.5">
                  <span>Tournament Schedule</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@TooTallToby" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Too Tall Toby YouTube Channel</span>
                  <ExternalLink className="h-2.5 w-2.5 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>
 
          {/* Column 3: Platform specs (4 cols) */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400">LEGAL_METRIC</h4>
            <ul className="space-y-1.5 font-sans text-xs text-zinc-500">
              <li>
                <a href="/eula" className="hover:text-zinc-300 transition-colors">
                  EULA
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-zinc-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-300 transition-colors">
                  Contact Toby Schnaars & Support
                </a>
              </li>
              <li>
                <span className="text-[10px] text-zinc-600 font-mono">
                  PROJECTION: 3RD ANGLE ⌖
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer / copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600 text-center sm:text-left">
          <div className="space-y-1">
            <p>© {currentYear} Too Tall Toby. All rights reserved.</p>
            <p className="text-[8px] text-zinc-700">
              All product names, logos, brands, and registered trademarks (e.g., SolidWorks, Onshape, Fusion 360, Inventor, Creo, CATIA) are property of their respective owners.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-zinc-500">YOUTUBE</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-zinc-500">DISCORD</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-zinc-500">X_TWITTER</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-zinc-500">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
