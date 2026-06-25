import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [bgSrc, setBgSrc] = useState('/images/hero-bg.jpg');

  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-24 md:pt-24 md:pb-32 border-b border-white/10">
      
      {/* Above-the-fold Full Background Video with Bottom Fade to Solid Black */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
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
        <div className="space-y-1.5 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tighter uppercase text-white">
            Learn 3D CAD
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-zinc-100 tracking-wide">
            one model at a time
          </p>
        </div>

        {/* Subtitle description */}
        <p className="mt-6 text-sm sm:text-base text-zinc-400 font-sans tracking-wide max-w-2xl mx-auto">
          Sharpen your CAD skills using ANY 3D CAD platform.
        </p>

        {/* Centered Pill Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#challenges"
            className="px-8 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-sans text-xs font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            Access Full Library
          </a>
          <a
            href="#register"
            className="px-8 py-2.5 rounded-full bg-[#22c55e] text-white hover:bg-[#1bb051] transition-all font-sans text-xs font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(34,197,94,0.3)] flex items-center gap-2"
          >
            Try as Guest
          </a>
        </div>

        {/* Practice Modeling Container exactly styled as the centered box in the image */}
        <div className="mt-16 mx-auto max-w-5xl bg-zinc-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          {/* Box Header */}
          <div className="text-center space-y-1 mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-sans tracking-tight text-white">
              Practice modeling at your skill level
            </h2>
            <p className="text-xs text-zinc-500 font-sans">
              200+ CAD challenges featuring real world geometry
            </p>
          </div>

          {/* 4 Columns Side-by-Side Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* CHALLENGE 1: TIER 1 - RED RING */}
            <div 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-zinc-900/60 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between transition-all duration-300 hover:border-red-500/30 hover:bg-zinc-900"
            >
              {/* Graphic container (Sketch -> Yellow Arrow -> 3D model) */}
              <div className="w-full h-32 flex items-center justify-between px-2 mb-4 bg-black/40 rounded-lg relative overflow-hidden group">
                
                {/* A. 2D Sketch Drawing (Left) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600">
                    {/* Concentric dimensioned sketch circles */}
                    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="1.25" />
                    <circle cx="50" cy="50" r="14" fill="none" stroke="white" strokeWidth="1.25" />
                    
                    {/* Dimension lines & labels */}
                    <line x1="18" y1="50" x2="82" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                    <line x1="18" y1="46" x2="18" y2="54" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                    <line x1="82" y1="46" x2="82" y2="54" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                    <text x="50" y="44" fill="#ef4444" fontSize="8" textAnchor="middle" fontFamily="monospace">Ø50</text>
                  </svg>
                </div>

                {/* B. Yellow Curving Arrow (Center) */}
                <div className="w-[16%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-yellow-400">
                    <path 
                      d="M 5,20 Q 20,8 32,18" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className={`transition-all duration-500 ${hoveredCard === 1 ? 'animate-pulse' : ''}`}
                    />
                    <polygon points="32,18 25,14 28,21" fill="currentColor" />
                  </svg>
                </div>

                {/* C. 3D Beveled Red Ring (Right) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <radialGradient id="ring-shading" cx="45%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#fca5a5" />
                        <stop offset="35%" stopColor="#ef4444" />
                        <stop offset="85%" stopColor="#991b1b" />
                        <stop offset="100%" stopColor="#450a0a" />
                      </radialGradient>
                    </defs>
                    {/* Isometric feel beveled concentric ring */}
                    <ellipse cx="50" cy="55" rx="36" ry="24" fill="#7f1d1d" />
                    <ellipse cx="50" cy="50" rx="36" ry="24" fill="url(#ring-shading)" />
                    
                    {/* Inner hole */}
                    <ellipse cx="50" cy="50" rx="18" ry="12" fill="#0f0f0f" />
                    <ellipse cx="50" cy="53" rx="18" ry="12" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>

              </div>

              {/* Text labels matching the design exactly */}
              <div className="text-center space-y-0.5 mt-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-red-500 block">
                  TIER 1 Challenge
                </span>
                <span className="text-xs font-medium text-zinc-300">
                  for Beginners
                </span>
              </div>
            </div>

            {/* CHALLENGE 2: TIER 3 - GREEN HOOK/BRACKET */}
            <div 
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-zinc-900/60 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900"
            >
              {/* Graphic container (Sketch -> Yellow Arrow -> 3D model) */}
              <div className="w-full h-32 flex items-center justify-between px-2 mb-4 bg-black/40 rounded-lg relative overflow-hidden group">
                
                {/* A. 2D Sketch Drawing (Left) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600">
                    {/* Bracket profile blueprint layout */}
                    <path d="M 25,20 L 75,20 L 75,50 A 25,25 0 0,1 25,50 Z" fill="none" stroke="white" strokeWidth="1.25" />
                    <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                    <text x="50" y="82" fill="#22c55e" fontSize="7" textAnchor="middle" fontFamily="monospace">R12.5</text>
                  </svg>
                </div>

                {/* B. Yellow Curving Arrow (Center) */}
                <div className="w-[16%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-yellow-400">
                    <path 
                      d="M 5,20 Q 20,8 32,18" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className={`transition-all duration-500 ${hoveredCard === 2 ? 'animate-pulse' : ''}`}
                    />
                    <polygon points="32,18 25,14 28,21" fill="currentColor" />
                  </svg>
                </div>

                {/* C. 3D Green Bracket Hook (Right) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="green-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="40%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14532d" />
                      </linearGradient>
                    </defs>
                    {/* Isometric extruded green bracket */}
                    <g transform="translate(15, 10)">
                      {/* Sides / isometric shadows */}
                      <path d="M 15,20 L 45,20 L 45,60 L 15,40 Z" fill="#15803d" />
                      <path d="M 45,20 Q 60,35 45,60 Z" fill="#166534" />
                      {/* Main face */}
                      <path d="M 20,15 L 50,15 L 50,55 A 15,15 0 0,1 20,35 Z" fill="url(#green-3d)" />
                      {/* Hole */}
                      <ellipse cx="38" cy="38" rx="8" ry="6" fill="#0f0f0f" />
                    </g>
                  </svg>
                </div>

              </div>

              {/* Text labels */}
              <div className="text-center space-y-0.5 mt-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-500 block">
                  TIER 3 Challenge
                </span>
                <span className="text-xs font-medium text-zinc-300">
                  3D Printable
                </span>
              </div>
            </div>

            {/* CHALLENGE 3: TIER 3 - SHEET METAL */}
            <div 
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-zinc-900/60 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between transition-all duration-300 hover:border-violet-500/30 hover:bg-zinc-900"
            >
              {/* Graphic container (Sketch -> Yellow Arrow -> 3D model) */}
              <div className="w-full h-32 flex items-center justify-between px-2 mb-4 bg-black/40 rounded-lg relative overflow-hidden group">
                
                {/* A. 2D Sketch Drawing (Left) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600">
                    {/* Fold pattern sketch */}
                    <rect x="20" y="20" width="60" height="60" rx="2" fill="none" stroke="white" strokeWidth="1" />
                    <line x1="38" y1="20" x2="38" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" strokeDasharray="3 3" />
                    <line x1="62" y1="20" x2="62" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="1" />
                    <text x="50" y="16" fill="#8b5cf6" fontSize="7" textAnchor="middle" fontFamily="monospace">90° BEND</text>
                  </svg>
                </div>

                {/* B. Yellow Curving Arrow (Center) */}
                <div className="w-[16%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-yellow-400">
                    <path 
                      d="M 5,20 Q 20,8 32,18" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className={`transition-all duration-500 ${hoveredCard === 3 ? 'animate-pulse' : ''}`}
                    />
                    <polygon points="32,18 25,14 28,21" fill="currentColor" />
                  </svg>
                </div>

                {/* C. 3D Silver Sheet Metal Bracket (Right) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="metal-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f3f4f6" />
                        <stop offset="45%" stopColor="#9ca3af" />
                        <stop offset="85%" stopColor="#4b5563" />
                        <stop offset="100%" stopColor="#1f2937" />
                      </linearGradient>
                    </defs>
                    {/* Isometric silver-folded metal bracket */}
                    <g transform="translate(10, 15)">
                      {/* Left Flange */}
                      <path d="M 15,45 L 35,25 L 35,55 L 15,75 Z" fill="#374151" />
                      {/* Center Face */}
                      <path d="M 35,25 L 65,15 L 65,45 L 35,55 Z" fill="url(#metal-shine)" stroke="#6b7280" strokeWidth="0.5" />
                      {/* Center Hole cutout */}
                      <ellipse cx="50" cy="35" rx="8" ry="6" fill="#0f0f0f" />
                      {/* Right Flange */}
                      <path d="M 65,15 L 80,30 L 80,60 L 65,45 Z" fill="#1f2937" />
                    </g>
                  </svg>
                </div>

              </div>

              {/* Text labels */}
              <div className="text-center space-y-0.5 mt-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-violet-400 block">
                  TIER 3 Challenge
                </span>
                <span className="text-xs font-medium text-zinc-300">
                  Sheet Metal
                </span>
              </div>
            </div>

            {/* CHALLENGE 4: TIER 6 - MULTI-MATERIAL */}
            <div 
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-zinc-900/60 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900"
            >
              {/* Graphic container (Sketch -> Yellow Arrow -> 3D model) */}
              <div className="w-full h-32 flex items-center justify-between px-2 mb-4 bg-black/40 rounded-lg relative overflow-hidden group">
                
                {/* A. 2D Sketch Drawing (Left) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600">
                    {/* Multi-material trolley diagram with heights */}
                    <rect x="25" y="15" width="50" height="70" rx="3" fill="none" stroke="white" strokeWidth="1" />
                    <line x1="25" y1="35" x2="75" y2="35" stroke="white" strokeWidth="1" />
                    <line x1="25" y1="58" x2="75" y2="58" stroke="white" strokeWidth="1" />
                    
                    {/* Wheels */}
                    <circle cx="35" cy="88" r="4" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="65" cy="88" r="4" fill="none" stroke="white" strokeWidth="1" />
                    
                    {/* Dimension */}
                    <line x1="82" y1="15" x2="82" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                    <text x="89" y="53" fill="#f59e0b" fontSize="7" textAnchor="middle" fontFamily="monospace" transform="rotate(90 89 53)">H140</text>
                  </svg>
                </div>

                {/* B. Yellow Curving Arrow (Center) */}
                <div className="w-[16%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-yellow-400">
                    <path 
                      d="M 5,20 Q 20,8 32,18" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className={`transition-all duration-500 ${hoveredCard === 4 ? 'animate-pulse' : ''}`}
                    />
                    <polygon points="32,18 25,14 28,21" fill="currentColor" />
                  </svg>
                </div>

                {/* C. 3D Yellow Multi-tiered Cart (Right) */}
                <div className="w-[42%] h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="yellow-trays" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="50%" stopColor="#eab308" />
                        <stop offset="100%" stopColor="#a16207" />
                      </linearGradient>
                    </defs>
                    {/* Isometric multi-material structure */}
                    <g transform="translate(15, 8)">
                      {/* Vertical metal support rails */}
                      <line x1="15" y1="15" x2="15" y2="75" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="45" y1="5" x2="45" y2="65" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
                      
                      {/* Tray 1 (Top) */}
                      <ellipse cx="30" cy="22" rx="16" ry="7" fill="url(#yellow-trays)" />
                      <ellipse cx="30" cy="24" rx="16" ry="7" fill="none" stroke="#ca8a04" strokeWidth="0.75" />
                      
                      {/* Tray 2 (Middle) */}
                      <ellipse cx="30" cy="42" rx="16" ry="7" fill="url(#yellow-trays)" />
                      <ellipse cx="30" cy="44" rx="16" ry="7" fill="none" stroke="#ca8a04" strokeWidth="0.75" />
                      
                      {/* Tray 3 (Bottom) */}
                      <ellipse cx="30" cy="62" rx="16" ry="7" fill="url(#yellow-trays)" />
                      <ellipse cx="30" cy="64" rx="16" ry="7" fill="none" stroke="#ca8a04" strokeWidth="0.75" />
                    </g>
                  </svg>
                </div>

              </div>

              {/* Text labels */}
              <div className="text-center space-y-0.5 mt-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-amber-500 block">
                  TIER 6 Challenge
                </span>
                <span className="text-xs font-medium text-zinc-300">
                  Multi-Material
                </span>
              </div>
            </div>

          </div>

          {/* Centered LEARN MORE button at the bottom matching the reference layout exactly */}
          <div className="mt-8 pt-4 flex justify-center">
            <a
              href="#challenges"
              className="inline-flex items-center gap-3.5 px-6 py-2.5 bg-[#86efac] hover:bg-[#4ade80] rounded-full text-zinc-950 font-sans text-xs font-black uppercase tracking-widest transition-all shadow-[0_5px_15px_rgba(134,239,172,0.25)] hover:shadow-[0_5px_20px_rgba(134,239,172,0.45)] group/btn"
            >
              <div className="flex h-5 w-5 rounded-full bg-white text-emerald-600 items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                <ChevronRight className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <span>LEARN MORE</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
