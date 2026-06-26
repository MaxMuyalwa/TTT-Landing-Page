import React, { useState } from 'react';
import { WORLD_DOTS } from '../data/cadData';
import { Globe, Users, Trophy, ChevronRight, Activity, Zap } from 'lucide-react';

export default function GlobalCommunity() {
  const [activeCountry, setActiveCountry] = useState(WORLD_DOTS[0]);

  // Abstracted SVG layout for continents so it looks like an engineering wireframe map!
  // We'll render dots and high-tech connection lines.
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-black/80 to-black/40 backdrop-blur-[2px] py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Copy and Hotspot Telemetry Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-6 bg-brand-purple rounded-full" />
                
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                A Unified Global Ecosystem
              </h2>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Too Tall Toby is a truly global arena. Over 25,000 engineers from 120+ countries practice 
                together, share macro structures, and analyze geometry outputs. No matter your geographic zone, 
                you can connect and measure your modeling capability.
              </p>
            </div>
 
            {/* Active country details panel styled as telemetry terminal */}
            <div className="bg-black border border-white/10 p-5 rounded-lg relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full border border-purple-950/20 pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-brand-green" />
                  <span className="font-mono text-xs text-zinc-300 font-bold uppercase">{activeCountry.country} Hub</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-500 font-semibold">{activeCountry.code}_TELEMETRY</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                      <Users className="h-2.5 w-2.5 text-brand-purple" />
                      <span>COHORT_MEMBERS</span>
                    </div>
                    <div className="font-display font-bold text-white text-base">
                      {activeCountry.members.toLocaleString()} Active
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                      <Zap className="h-2.5 w-2.5 text-brand-green" />
                      <span>DOMINANT_CAD_ENGINE</span>
                    </div>
                    <div className="font-display font-bold text-brand-green text-base">
                      {activeCountry.topCAD}
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-900 pt-3 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                      <Trophy className="h-2.5 w-2.5 text-zinc-500" />
                      <span>FASTEST_VERIFIED_SPEED</span>
                    </div>
                    <div className="font-mono font-bold text-white text-sm mt-1">
                      {activeCountry.activeSpeed} <span className="text-[9px] text-zinc-500 font-normal">seconds</span>
                    </div>
                  </div>
                  
                  {/* Join Country Hub indicator */}
                  <span className="inline-flex items-center gap-1 rounded bg-brand-purple/10 border border-brand-purple/20 px-2 py-1 font-mono text-[9px] font-medium text-brand-purple cursor-pointer hover:bg-brand-purple hover:text-white transition-all">
                    <span>CONNECT_HUB</span>
                    <ChevronRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Country Selector list for convenience */}
            <div className="space-y-1">
              <div className="font-mono text-[8px] text-zinc-500 mb-2 uppercase">SELECT_COUNTRY_HOTSPOT</div>
              <div className="flex flex-wrap gap-2">
                {WORLD_DOTS.map((country) => {
                  const isSelected = country.code === activeCountry.code;
                  return (
                    <button
                      key={country.code}
                      onClick={() => setActiveCountry(country)}
                      className={`font-mono text-[10px] px-2 py-1 rounded border transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-brand-green bg-zinc-950 text-brand-green shadow-[0_0_8px_rgba(34,197,94,0.15)] scale-[1.02]' 
                          : 'border-zinc-900 bg-zinc-950/20 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300'
                      }`}
                    >
                      {country.country}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Abstract Vector CAD Map Wireframe Graphic (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[580px] bg-zinc-950/40 rounded-xl border border-zinc-900 p-4 overflow-hidden">
              <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-600">SYS_MAP_RADIAL: EQUATORIAL_PROJECTION</div>
              
              {/* World Coordinate Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                <div className="w-11/12 h-11/12 border border-zinc-900 rounded-full flex items-center justify-center">
                  <div className="w-8/12 h-8/12 border border-zinc-900 rounded-full flex items-center justify-center">
                    <div className="w-4/12 h-4/12 border border-zinc-900 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Vector Wireframe Map SVG */}
              <svg viewBox="0 0 800 450" className="w-full h-full text-zinc-900 fill-none" style={{ overflow: 'visible' }}>
                <defs>
                  {/* Subtle pulsing animation gradient for connection paths */}
                  <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Continental outlines mapped roughly as technological polygons */}
                {/* North America */}
                <polygon points="120,60 210,60 280,110 240,160 180,210 140,240 120,160 100,100" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* South America */}
                <polygon points="240,260 290,290 310,340 280,420 250,420 220,310" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Europe */}
                <polygon points="380,80 460,80 480,130 450,170 390,160 360,110" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Africa */}
                <polygon points="380,210 440,200 490,270 480,330 450,400 410,310 370,240" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Asia */}
                <polygon points="480,80 720,80 740,180 660,280 580,270 520,180" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Australia */}
                <polygon points="660,330 730,320 740,370 680,390" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Grid latitude lines */}
                <line x1="50" y1="112.5" x2="750" y2="112.5" stroke="#18181b" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="50" y1="225" x2="750" y2="225" stroke="#27272a" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="50" y1="337.5" x2="750" y2="337.5" stroke="#18181b" strokeWidth="1" strokeDasharray="5 5" />

                {/* Connection lines pulsing from USA (200, 150) to other active hotspots */}
                <path d="M 200,150 Q 305,135 410,120" stroke="url(#path-gradient)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 200,150 Q 390,180 580,210" stroke="url(#path-gradient)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 200,150 Q 320,250 440,350" stroke="url(#path-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
                <path d="M 580,210 Q 645,270 710,330" stroke="url(#path-gradient)" strokeWidth="1" strokeLinecap="round" />
                <path d="M 410,120 Q 495,165 580,210" stroke="url(#path-gradient)" strokeWidth="1" strokeLinecap="round" />

                {/* Rendering Hotspot Interactive Dots */}
                {WORLD_DOTS.map((country) => {
                  const isSelected = country.code === activeCountry.code;
                  return (
                    <g
                      key={country.code}
                      onClick={() => setActiveCountry(country)}
                      className="cursor-pointer"
                    >
                      {/* Pulse Outer ring */}
                      <circle
                        cx={country.x}
                        cy={country.y}
                        r={isSelected ? 14 : 7}
                        className={`transition-all duration-500 fill-none ${
                          isSelected ? 'stroke-brand-green animate-pulse' : 'stroke-brand-purple/20'
                        }`}
                        strokeWidth="1.5"
                      />
                      {/* Pulse Central ring */}
                      <circle
                        cx={country.x}
                        cy={country.y}
                        r={isSelected ? 6 : 4}
                        className={`transition-colors duration-300 ${
                          isSelected ? 'fill-brand-green' : 'fill-brand-purple'
                        }`}
                      />
                      {/* Technical country code tag */}
                      <text
                        x={country.x + 10}
                        y={country.y - 10}
                        className={`font-mono text-[8px] font-bold tracking-widest ${
                          isSelected ? 'fill-brand-green' : 'fill-zinc-600'
                        }`}
                      >
                        {country.code}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Map Live stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-zinc-900 rounded p-3 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-brand-green animate-pulse" />
                  <span className="font-mono text-[9px] text-zinc-400">ROUTER_STATUS: COMPLETE // MULTIPATH_OPTIMIZED</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-500">PING: 24ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

