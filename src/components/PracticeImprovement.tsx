import React, { useState } from 'react';
import { Target, Zap, RotateCcw, Award, Gauge, Play } from 'lucide-react';

export default function PracticeImprovement() {
  const [baselineMinutes, setBaselineMinutes] = useState(20); // Starting speed
  const [practiceHours, setPracticeHours] = useState(3); // Hours per week

  // Calculate simulated speed decay over time (months) based on baseline and practice hours
  const months = [1, 2, 3, 4, 6, 8, 12];
  
  const getSimulatedSpeed = (month: number) => {
    const factor = Math.max(0.1, 1 - (practiceHours * 0.15)); // Higher practice hours decalcifies speed faster
    const exponent = -0.3 * month * (practiceHours / 3);
    const speed = baselineMinutes * Math.exp(exponent);
    return Math.max(1.2, speed); // Limit standard modeling speed limit to 1.2 minutes
  };

  const getMilestoneForMonth = (month: number, speed: number) => {
    if (month === 1) return { title: 'Blueprint Interpretation', desc: 'Learning to parse 2D views instantly.' };
    if (month === 2) return { title: 'Constraint Fluency', desc: 'Mastering horizontal, vertical, and concentric relations.' };
    if (month === 3) return { title: 'Boolean Strategy', desc: 'Structuring models with optimized feature trees.' };
    if (month === 6) {
      if (speed < 4) return { title: 'Sub-4 Minute Club', desc: 'No-mouse hotkeys fully integrated.' };
      return { title: 'Shortcut Optimization', desc: 'Keyboard short-bindings replace toolbars.' };
    }
    if (month === 12) {
      if (speed < 2) return { title: 'Elite Speedrunner', desc: 'Ready for Too Tall Toby live battles.' };
      return { title: 'Precision Expert', desc: 'Modeling complex cast drafts in seconds.' };
    }
    return { title: 'Muscle Memory Locking', desc: 'Commands are executed without conscious thought.' };
  };

  const simulatedSpeeds = months.map(m => {
    const speed = getSimulatedSpeed(m);
    return {
      month: m,
      speed: parseFloat(speed.toFixed(2)),
      milestone: getMilestoneForMonth(m, speed)
    };
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/40 via-black/20 to-black backdrop-blur-[2px] py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 engineering-grid opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">

        {/* Practice -> Improvement Story Journey Header */}
        <div className="mb-12 max-w-4xl mx-auto text-center border border-white/5 bg-zinc-950/70 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent animate-pulse pointer-events-none" />
          <span className="font-mono text-[9px] text-brand-purple font-bold uppercase tracking-widest block mb-2">// THE PROFESSIONAL GROWTH ENGINE</span>
          <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">The 5-Stage Parametric Cycle</h3>
          <p className="text-zinc-400 text-xs mt-1 font-sans max-w-2xl mx-auto">Structured, data-driven repetition builds pure parametric mechanical reflexes across every CAD platform.</p>
          
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-1 relative">
            {/* Background connecting laser line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-zinc-900 z-0 hidden sm:block" />
            
            {[
              { label: "PRACTICE", desc: "Select a geometry", sub: "Blueprint Challenge", color: "border-brand-purple/30 text-zinc-400" },
              { label: "MEASURE", desc: "Clock your speed run", sub: "Mass Verification", color: "border-brand-purple/30 text-zinc-400" },
              { label: "IMPROVE", desc: "Build muscle memory", sub: "Command Redundancy", color: "border-brand-purple text-brand-purple-light" },
              { label: "COMPETE", desc: "Go head-to-head live", sub: "Leaderboard Arenas", color: "border-brand-green/50 text-brand-green" },
              { label: "MASTER", desc: "Become an elite expert", sub: "CAD-Agnostic Fluidity", color: "border-white/20 text-white" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center group cursor-pointer">
                {/* Node counter */}
                <div className={`h-8 w-8 rounded-full bg-black border ${step.color} flex items-center justify-center font-mono text-[10px] font-bold group-hover:scale-110 transition-all shadow-[0_0_12px_rgba(0,0,0,0.8)]`}>
                  0{idx + 1}
                </div>
                {/* Stage title */}
                <span className="font-display text-[10px] sm:text-xs font-extrabold text-white mt-3 uppercase tracking-wider group-hover:text-brand-purple transition-colors">
                  {step.label}
                </span>
                {/* Stage description */}
                <span className="font-sans text-[9px] text-zinc-500 mt-0.5 leading-tight hidden sm:block">
                  {step.desc}
                </span>
                <span className="font-mono text-[7px] text-zinc-600 mt-0.5 uppercase hidden md:block">
                  // {step.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Simulation Graph plotting curves (7 cols) */}
          <div className="lg:col-span-7 bg-black border border-zinc-900 p-6 rounded-xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-brand-green" />
                <span className="font-mono text-xs text-zinc-300 font-bold uppercase">CAD_SPEED_PLOTTING_SIMULATOR</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-600">MODEL: RADIAL_DECAY_ALGORITHM</span>
            </div>

            {/* Custom SVG plot */}
            <div className="relative h-64 w-full">
              <svg viewBox="0 0 500 220" className="w-full h-full text-zinc-800" style={{ overflow: 'visible' }}>
                {/* Horizontal Coordinate Grid lines */}
                <line x1="40" y1="20" x2="480" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="60" x2="480" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="100" x2="480" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="140" x2="480" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="180" x2="480" y2="180" stroke="currentColor" strokeWidth="1" />

                {/* Vertical bounding walls */}
                <line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" strokeWidth="1.5" />
                <line x1="480" y1="20" x2="480" y2="180" stroke="currentColor" strokeWidth="1" />

                {/* Y-axis Values (Modeling Speed) */}
                <text x="32" y="24" className="font-mono text-[8px] fill-zinc-500" textAnchor="end">25m</text>
                <text x="32" y="64" className="font-mono text-[8px] fill-zinc-500" textAnchor="end">20m</text>
                <text x="32" y="104" className="font-mono text-[8px] fill-zinc-500" textAnchor="end">15m</text>
                <text x="32" y="144" className="font-mono text-[8px] fill-zinc-500" textAnchor="end">10m</text>
                <text x="32" y="184" className="font-mono text-[8px] fill-zinc-500" textAnchor="end">0m</text>

                {/* X-axis Month Coordinate plots */}
                {/* Months: 1, 2, 3, 4, 6, 8, 12 */}
                {/* Mapping positions: m=1->80, m=2->140, m=3->200, m=4->260, m=6->320, m=8->400, m=12->480 */}
                {/* Y positions: mapping 0-25 mins to 180-20. Formula: y = 180 - (speed / 25) * 160 */}
                {simulatedSpeeds.map((pt, idx) => {
                  let xCoord = 40;
                  if (pt.month === 1) xCoord = 80;
                  if (pt.month === 2) xCoord = 140;
                  if (pt.month === 3) xCoord = 200;
                  if (pt.month === 4) xCoord = 260;
                  if (pt.month === 6) xCoord = 320;
                  if (pt.month === 8) xCoord = 400;
                  if (pt.month === 12) xCoord = 480;

                  const yCoord = 180 - (pt.speed / 25) * 160;

                  return (
                    <g key={idx}>
                      {/* Vertical grid line */}
                      <line x1={xCoord} y1="20" x2={xCoord} y2="180" stroke="#18181b" strokeWidth="1" strokeDasharray="2 2" />
                      
                      {/* Plot node circles */}
                      <circle cx={xCoord} cy={yCoord} r="5" fill="#9333ea" stroke="#000000" strokeWidth="1.5" />
                      
                      {/* Label values above dot */}
                      <text x={xCoord} y={yCoord - 10} className="font-mono text-[9px] fill-brand-green font-bold text-center" textAnchor="middle">
                        {pt.speed}m
                      </text>

                      {/* X Label */}
                      <text x={xCoord} y="196" className="font-mono text-[8px] fill-zinc-500" textAnchor="middle">
                        M{pt.month}
                      </text>
                    </g>
                  );
                })}

                {/* Draw the connected curve path */}
                <path
                  d={`M 40 ${180 - (baselineMinutes / 25) * 160} 
                      L 80 ${180 - (simulatedSpeeds[0].speed / 25) * 160}
                      L 140 ${180 - (simulatedSpeeds[1].speed / 25) * 160}
                      L 200 ${180 - (simulatedSpeeds[2].speed / 25) * 160}
                      L 260 ${180 - (simulatedSpeeds[3].speed / 25) * 160}
                      L 320 ${180 - (simulatedSpeeds[4].speed / 25) * 160}
                      L 400 ${180 - (simulatedSpeeds[5].speed / 25) * 160}
                      L 480 ${180 - (simulatedSpeeds[6].speed / 25) * 160}`}
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Micro milestones detail ticker */}
            <div className="mt-6 pt-4 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#060608] border border-zinc-900 p-2.5 rounded text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase">MONTH_3_OBJECTIVE</span>
                <div className="font-display font-semibold text-white text-xs mt-1">Structured Boolean Trees</div>
                <p className="font-sans text-[10px] text-zinc-500 mt-0.5">Optimize model features to cut regeneration and solving overheads.</p>
              </div>
              <div className="bg-[#060608] border border-zinc-900 p-2.5 rounded text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase">MONTH_6_OBJECTIVE</span>
                <div className="font-display font-semibold text-white text-xs mt-1">Keyboard Layout Lock</div>
                <p className="font-sans text-[10px] text-zinc-500 mt-0.5">Custom shortcut macros mapped directly to non-dominant hand keys.</p>
              </div>
              <div className="bg-[#060608] border border-zinc-900 p-2.5 rounded text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase">MONTH_12_OBJECTIVE</span>
                <div className="font-display font-semibold text-brand-green text-xs mt-1">Flow-State Modeling</div>
                <p className="font-sans text-[10px] text-zinc-500 mt-0.5">Read blueprint and translate directly to fully-constrained solids.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Simulator Controls & Explanation (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-6 bg-brand-green rounded-full" />
                <span className="font-mono text-xs text-brand-green uppercase font-bold">REPETITION_PRACTICE_METHOD</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
                How Fast Can You Model?
              </h2>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Speed isn't about rushing; it's about eliminating friction. By drilling the same spatial models, 
                you bypass "interpretation hesitation" and lock in pure parametric mechanical reflexes.
              </p>
            </div>

            {/* Control Dashboard */}
            <div className="bg-[#060608] border border-zinc-850 p-5 rounded-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 font-mono text-[7px] text-zinc-700 bg-zinc-900 border-l border-b border-zinc-800 px-1.5 py-0.5 uppercase">SOLVER_ENGINE_V2</div>

              {/* Slider 1: Baseline Minutes */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[8px] text-brand-purple font-bold block uppercase tracking-widest">// STAGE_01: CURRENT_SKILL_LEVEL</span>
                    <span className="font-sans text-xs font-semibold text-zinc-300">Initial Baseline Modeling Speed</span>
                  </div>
                  <span className="font-mono text-xs text-white bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {baselineMinutes} Minutes
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={baselineMinutes}
                  onChange={(e) => setBaselineMinutes(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                  <span>5 MINS (ADVANCED)</span>
                  <span>25 MINS (NEWBIE)</span>
                </div>
              </div>

              {/* Slider 2: Practice Frequency */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[8px] text-brand-green font-bold block uppercase tracking-widest">// STAGE_02: PRACTICE_FREQUENCY</span>
                    <span className="font-sans text-xs font-semibold text-zinc-300">Practice Committed per Week</span>
                  </div>
                  <span className="font-mono text-xs text-brand-green bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {practiceHours} Hours/Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={practiceHours}
                  onChange={(e) => setPracticeHours(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                  <span>1 HR (CASUAL)</span>
                  <span>10 HRS (ESPORTS SPEEDRUNNER)</span>
                </div>
              </div>

              {/* Simulation Result readout */}
              <div className="border-t border-zinc-900 pt-4 text-center">
                <span className="font-mono text-[8px] text-brand-green font-bold block uppercase tracking-widest mb-1">// STAGE_03: ESTIMATED_FUTURE_PERFORMANCE</span>
                <div className="font-mono text-[9px] text-zinc-500 uppercase">PROJECTED_12_MONTH_SPEED_RUN</div>
                <div className="font-display text-4xl font-extrabold text-white mt-1">
                  {simulatedSpeeds[simulatedSpeeds.length - 1].speed} <span className="text-sm font-normal text-zinc-500">Mins</span>
                </div>
                
                {/* Performance delta readout */}
                <span className="inline-flex items-center gap-1 mt-2 rounded-full bg-brand-green/10 px-2 py-0.5 font-mono text-[10px] font-bold text-brand-green">
                  <Zap className="h-3.5 w-3.5 animate-pulse" />
                  <span>SPEED IMPROVED BY {Math.round(((baselineMinutes - getSimulatedSpeed(12)) / baselineMinutes) * 100)}%</span>
                </span>
              </div>
            </div>

            {/* Practice CTA */}
            <a
              href="#challenges"
              className="inline-flex items-center justify-center gap-2 w-full rounded bg-brand-purple py-3 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-purple-light transition-all shadow-[0_0_15px_rgba(147,51,234,0.15)]"
            >
              <Target className="h-4 w-4" />
              <span>Verify Your Baselines Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
