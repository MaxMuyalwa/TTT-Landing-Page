import React from 'react';
import { Disc, ExternalLink, GitBranch, Terminal, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black/40 backdrop-blur-[2px] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
      {/* Blueprint background grid accent */}
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start border-b border-white/20 pb-10">
          
          {/* Column 1: Info and logo (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-white/20 bg-black text-brand-purple">
                <Disc className="h-4 w-4" />
              </div>
              <div>
                <span className="font-display text-sm font-bold tracking-tight text-white">
                  TOO TALL <span className="text-brand-purple">TOBY</span>
                </span>
                <div className="font-mono text-[8px] tracking-widest text-brand-green uppercase leading-none">
                  CAD.Practice.Engine
                </div>
              </div>
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
 
          {/* Column 2: Legal and documentation (3 cols) */}
          <div className="md:col-span-3 text-left space-y-3">
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
 
          {/* Column 3: Platform specs (3 cols) */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400">LEGAL_METRIC</h4>
            <ul className="space-y-1.5 font-sans text-xs text-zinc-500">
              <li>
                <a href="#terms" className="hover:text-zinc-300 transition-colors">
                  Terms of Service & Blueprint Rules
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-zinc-300 transition-colors">
                  Privacy & Data Telemetry Audit
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
 
          {/* Column 4: Status / connection diagnostic (2 cols) */}
          <div className="md:col-span-2 text-left space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400">DIAGNOSTICS</h4>
            <div className="bg-black border border-white/10 rounded p-2.5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-500">PING</span>
                <span className="font-mono text-[9px] text-brand-green font-bold">14ms_OK</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-500">NODE_COMP</span>
                <span className="font-mono text-[9px] text-brand-purple font-bold">100%_AG</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-500">DB_CONN</span>
                <span className="font-mono text-[9px] text-brand-green font-bold">SECURE_PASS</span>
              </div>
            </div>
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
