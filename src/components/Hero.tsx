import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [bgSrc, setBgSrc] = useState('/images/hero-bg.jpg');

  return (
    <section className="relative overflow-hidden bg-transparent pt-4 pb-4 md:pt-6 md:pb-8 border-b border-white/10 min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] flex flex-col justify-center">
      
      {/* Above-the-fold Full Background Video with Bottom Fade to Solid Black */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 md:opacity-40 transition-opacity duration-1000"
        >
          {/* User's local custom background video path */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Premium high-quality dark abstract tech loop as an elegant, fast loading default fallback */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-31742-large.mp4" type="video/mp4" />
          {/* Static image fallback if video plays are blocked/unsupported (e.g. mobile low-power modes) */}
          <img
            src={bgSrc}
            onError={() => {
              // If the user's custom image is not found, use a beautiful, high-quality, dark CAD/3D/geometry-inspired abstract tech background as an elegant fallback.
              if (bgSrc !== 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop') {
                setBgSrc('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop');
              }
            }}
            alt="CAD Background Fallback"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </video>
        
        {/* Vertical Masking Gradients - Ensures the video/image fades perfectly down into the black page background */}
        {/* Radial center highlight overlay to mimic the focus of the content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />

        {/* Linear bottom-fade gradient masking from transparent to pure solid black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black" />
      </div>

      {/* Main Content Area */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        {/* Title Group - Centered exactly like upload */}
        <div className="space-y-1 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tighter uppercase text-white">
            Learn 3D card
          </h1>
          <p className="font-display font-extrabold tracking-tight uppercase text-zinc-400 text-lg sm:text-xl md:text-2xl">
            one more at a time
          </p>
        </div>

        {/* Subtitle description */}
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans tracking-wide max-w-2xl mx-auto">
          Sharpen your card skills using any 3D card platform.
        </p>

        {/* Centered Pill Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#challenges"
            className="px-6 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-sans text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            ACCESS FULL LIBRARY
          </a>
          <a
            href="#register"
            className="px-6 py-2 rounded-full bg-[#22c55e] text-white hover:bg-[#1bb051] transition-all font-sans text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(34,197,94,0.3)] flex items-center gap-2"
          >
            TRY AS GUEST
          </a>
        </div>

        {/* Practice Modeling Container exactly styled as the centered box in the image */}
        <div className="mt-6 mx-auto max-w-6xl w-full bg-zinc-950/90 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          {/* Practice Challenges Interactive Space (Image Slot) */}
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-[42vh] lg:max-h-[380px] min-h-[240px] bg-black/40 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden group">
            
            {/* Real Image Element (Points to /images/practice-challenges.png) */}
            <img 
              src="/images/practice-challenges.png" 
              alt="Too Tall Toby - CAD Practice Modeling Platform" 
              className="w-full h-full object-cover select-none relative z-10 transition-all duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // If user hasn't added the file yet, hide the broken icon & display our beautiful high-fidelity tech-mesh placeholder
                e.currentTarget.style.display = 'none';
                const f = document.getElementById('cad-image-placeholder-fallback');
                if (f) f.classList.remove('hidden');
              }}
            />

            {/* Premium, High-Fidelity Interactive Blueprint Placeholder Fallback (Visible before they upload to Github) */}
            <div 
              id="cad-image-placeholder-fallback" 
              className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-center overflow-hidden"
            >
              {/* Background Tech Grids & Neon Radiating Lights */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.12),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 engineering-grid opacity-15 pointer-events-none" />
              
              {/* Neon Reticle Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />

              {/* Central Technical Icon with Ambient Pulse */}
              <div className="relative mb-2">
                <div className="absolute inset-0 rounded-full bg-brand-purple/20 blur-xl animate-pulse" />
                <div className="relative h-12 w-12 rounded-2xl bg-zinc-950/80 border border-brand-purple/40 flex items-center justify-center text-brand-purple shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                  <Layers className="h-6 w-6 animate-pulse" />
                </div>
              </div>

              {/* Title & Status Block */}
              <div className="max-w-xl space-y-2 z-10">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-brand-purple-light">
                  <Sparkles className="h-2.5 w-2.5 animate-spin-slow" />
                  <span>Interactive Map Image Placeholder</span>
                </div>
                
                <h3 className="font-display text-base sm:text-lg md:text-xl font-black text-white uppercase tracking-tight">
                  CAD Practice Challenges Platform Interface
                </h3>
                
                <p className="text-[11px] text-zinc-400 font-sans max-w-md mx-auto leading-relaxed">
                  This card keeps the original container lines, premium synthwave aesthetics, and size exactly as designed. 
                  Below is the reserved filename to add in your GitHub repository:
                </p>

                {/* Technical Instruction Box */}
                <div className="mt-2 inline-block bg-zinc-950/90 border border-zinc-800 rounded px-3 py-1.5 text-left font-mono text-[9px] sm:text-[10px]">
                  <div className="flex items-center gap-2 text-zinc-500 mb-0.5">
                    <span className="h-1.5 w-1.5 bg-brand-green rounded-full" />
                    <span>RESERVED STATIC ASSET PATH</span>
                  </div>
                  <div className="text-white font-bold select-all bg-black/50 px-2 py-0.5 rounded border border-white/5">
                    /public/images/practice-challenges.png
                  </div>
                  <div className="text-[7.5px] text-zinc-600 mt-0.5 uppercase tracking-wider">// Drop your dashboard image at this path to sync automatically</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
