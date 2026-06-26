import React, { useState } from 'react';
import { CAD_PLATFORMS, PRACTICE_IMPROVEMENT_DATA } from '../data/cadData';
import { Cpu, TrendingDown, Calendar, CheckSquare, RefreshCw, BarChart2, Info } from 'lucide-react';

export default function Analytics() {
  const [selectedPlatform, setSelectedPlatform] = useState(CAD_PLATFORMS[0]);
  const [selectedTrendIndex, setSelectedTrendIndex] = useState(PRACTICE_IMPROVEMENT_DATA.length - 1);
  const [hoveredHeatmapIdx, setHoveredHeatmapIdx] = useState<number | null>(null);

  // Generate a mock grid of 53 weeks x 7 days for the heatmap
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const totalWeeks = 24; // Compact responsive grid
  const heatmapData = Array.from({ length: totalWeeks * 7 }, (_, i) => {
    const level = Math.floor(Math.sin(i * 0.1) * 2 + Math.cos(i * 0.05) * 2 + 1);
    return Math.max(0, Math.min(4, level));
  });

  // Calculate coordinates for SVG donut segments
  let accumulatedPercent = 0;
  const donutSegments = CAD_PLATFORMS.map((platform) => {
    const startPercent = accumulatedPercent;
    accumulatedPercent += platform.share;
    return {
      ...platform,
      startPercent,
      endPercent: accumulatedPercent,
    };
  });

  // Get SVG coordinate for radial segment
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  return (
    <section id="analytics" className="relative overflow-hidden bg-gradient-to-b from-transparent via-black/20 to-black py-16 px-4 sm:px-6 lg:px-8 border-b border-white/20">
      {/* Fine high-tech grid */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Title & Metadata */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 bg-brand-green rounded-full" />
            <span className="font-mono text-xs text-brand-green uppercase font-bold">// SECTION_03 // CAD_ENGINEERING_ANALYTICS</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Analytics. Real Performance.
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
            We track mechanical features, solid modeling speed, and geometry verification trends. 
            See how the community practices, solves, and improves over time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Panel: CAD Platform Market Share Donut & Details (4 cols) */}
          <div className="lg:col-span-4 bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono text-[10px] text-purple-400 font-bold uppercase">// Platform Distribution</span>
                <span className="font-mono text-[9px] text-brand-green font-bold">TOTAL_COHORTS: 16</span>
              </div>
              
              {/* Custom SVG Donut Chart */}
              <div className="relative flex items-center justify-center my-6 h-48">
                <svg viewBox="-1.2 -1.2 2.4 2.4" className="w-40 h-40 transform -rotate-90">
                  {donutSegments.map((segment, idx) => {
                    const [startX, startY] = getCoordinatesForPercent(segment.startPercent / 100);
                    const [endX, endY] = getCoordinatesForPercent(segment.endPercent / 100);
                    const largeArcFlag = segment.share > 50 ? 1 : 0;
                    const pathData = [
                      `M ${startX} ${startY}`,
                      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                      `L 0 0`
                    ].join(' ');

                    const isSelected = selectedPlatform.id === segment.id;

                    return (
                      <path
                        key={segment.id}
                        d={pathData}
                        fill={segment.color}
                        className="cursor-pointer transition-all duration-300 hover:opacity-100"
                        style={{
                          opacity: isSelected ? 1 : 0.45,
                          transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: 'center'
                        }}
                        onClick={() => setSelectedPlatform(segment)}
                      />
                    );
                  })}
                  {/* Central cutout for donut hole */}
                  <circle cx="0" cy="0" r="0.65" fill="#000000" />
                </svg>
                
                {/* Center text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="font-mono text-[10px] text-zinc-500 leading-none">TOTAL</span>
                  <span className="font-display text-xl font-extrabold text-white leading-none mt-1">15+</span>
                  <span className="font-mono text-[9px] text-brand-green font-bold leading-none mt-1">CAD_PLATFORMS</span>
                </div>
              </div>

              {/* Selector List */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {CAD_PLATFORMS.slice(0, 6).map((platform) => {
                  const isSelected = platform.id === selectedPlatform.id;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`flex items-center gap-1.5 p-1.5 rounded border text-left transition-all cursor-pointer group/btn ${
                        isSelected 
                          ? 'bg-zinc-950 border-brand-purple text-white shadow-[0_0_8px_rgba(147,51,234,0.15)] scale-[1.02]' 
                          : 'bg-zinc-950/20 border-white/5 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: platform.color }} />
                      <span className="font-mono text-[10px] truncate">{platform.name}</span>
                      <span className="font-mono text-[9px] ml-auto text-zinc-400">{platform.share}%</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Platform telemetry output readout */}
            <div className="mt-6 border-t border-white/10 pt-4 space-y-3 bg-black p-3 rounded border border-white/10">
              <div className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-brand-purple" />
                <span className="font-mono text-[10px] font-bold text-white uppercase">{selectedPlatform.name} Analytics</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <div className="font-mono text-[8px] text-zinc-500">M_SHARE</div>
                  <div className="font-display font-semibold text-white text-sm mt-0.5">{selectedPlatform.share}%</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500">COMPL_RATE</div>
                  <div className="font-display font-semibold text-brand-green text-sm mt-0.5">{selectedPlatform.avgCompletionRate}%</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500">AVG_SPD_RUN</div>
                  <div className="font-display font-semibold text-white text-sm mt-0.5">{Math.floor(selectedPlatform.avgSpeedSeconds / 60)}m {selectedPlatform.avgSpeedSeconds % 60}s</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] text-zinc-500">TOP_COHORT_PRO</div>
                  <div className="font-display font-semibold text-zinc-400 text-sm mt-0.5 truncate">{selectedPlatform.topModeler}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel: Line Chart representation of Improvement Curves (5 cols) */}
          <div className="lg:col-span-5 bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-brand-green" />
                  <span className="font-mono text-[10px] text-green-400 font-bold uppercase tracking-tight">// Skills Mastery Curve</span>
                </div>
                <span className="font-mono text-[9px] text-brand-green font-bold">METRIC: AVG_TIME_MINS</span>
              </div>

              <div className="font-sans text-[11px] text-zinc-400 mb-4 flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5">
                  <Info className="h-3 w-3 text-brand-purple" />
                  <span>Times decrease as muscle memory builds.</span>
                </div>
                <span className="font-mono text-[8px] text-brand-green uppercase animate-pulse font-bold tracking-wider bg-brand-green/10 px-1.5 py-0.5 rounded border border-brand-green/20">
                  ● Click Nodes To Filter
                </span>
              </div>

              {/* Custom SVG Line Chart plotting times */}
              <div className="relative h-44 w-full">
                <svg viewBox="0 0 400 160" className="w-full h-full text-zinc-900" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <line x1="20" y1="10" x2="380" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="45" x2="380" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="80" x2="380" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="115" x2="380" y2="115" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeWidth="1" />

                  {/* Verticals */}
                  <line x1="20" y1="10" x2="20" y2="150" stroke="currentColor" strokeWidth="1" />
                  <line x1="380" y1="10" x2="380" y2="150" stroke="currentColor" strokeWidth="1" />

                  {/* Y-axis Labels */}
                  <text x="12" y="14" className="font-mono text-[7px] fill-zinc-600" textAnchor="end">20m</text>
                  <text x="12" y="49" className="font-mono text-[7px] fill-zinc-600" textAnchor="end">15m</text>
                  <text x="12" y="84" className="font-mono text-[7px] fill-zinc-600" textAnchor="end">10m</text>
                  <text x="12" y="119" className="font-mono text-[7px] fill-zinc-600" textAnchor="end">5m</text>
                  <text x="12" y="152" className="font-mono text-[7px] fill-zinc-600" textAnchor="end">0m</text>

                  {/* Community Average Curve (Dashed Zinc Line) */}
                  <path
                    d={`M 20 ${150 - (19.5 / 20) * 140} 
                        L 80 ${150 - (16.2 / 20) * 140} 
                        L 140 ${150 - (12.0 / 20) * 140} 
                        L 200 ${150 - (9.1 / 20) * 140} 
                        L 260 ${150 - (6.8 / 20) * 140} 
                        L 320 ${150 - (5.0 / 20) * 140} 
                        L 380 ${150 - (3.8 / 20) * 140}`}
                    fill="none"
                    stroke="#52525b"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    opacity="0.75"
                  />

                  {/* Elite Limit Benchmark Line */}
                  <line 
                    x1="20" 
                    y1={150 - (2.0 / 20) * 140} 
                    x2="380" 
                    y2={150 - (2.0 / 20) * 140} 
                    stroke="#9333ea" 
                    strokeWidth="1" 
                    strokeDasharray="1 3" 
                    opacity="0.65"
                  />
                  <text 
                    x="378" 
                    y={150 - (2.0 / 20) * 140 - 4} 
                    className="font-mono text-[5.5px] fill-brand-purple-light text-right" 
                    textAnchor="end"
                  >
                    ELITE LIMIT BENCHMARK: 02:00m
                  </text>

                  {/* Draw curve paths */}
                  {/* Mapping points: week 1->20, week 2->80, week 4->140, week 8->200, week 12->260, week 24->320, week 52->380 */}
                  {/* Y values: map 0-20 mins to 150-10 height. Formula: y = 150 - (val/20)*140 */}
                  <path
                    d={`M 20 ${150 - (18.5 / 20) * 140} 
                        L 80 ${150 - (14.2 / 20) * 140} 
                        L 140 ${150 - (9.8 / 20) * 140} 
                        L 200 ${150 - (6.4 / 20) * 140} 
                        L 260 ${150 - (4.1 / 20) * 140} 
                        L 320 ${150 - (2.8 / 20) * 140} 
                        L 380 ${150 - (1.9 / 20) * 140}`}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Shaded area under curve */}
                  <path
                    d={`M 20 ${150 - (18.5 / 20) * 140} 
                        L 80 ${150 - (14.2 / 20) * 140} 
                        L 140 ${150 - (9.8 / 20) * 140} 
                        L 200 ${150 - (6.4 / 20) * 140} 
                        L 260 ${150 - (4.1 / 20) * 140} 
                        L 320 ${150 - (2.8 / 20) * 140} 
                        L 380 ${150 - (1.9 / 20) * 140}
                        L 380 150
                        L 20 150 Z`}
                    fill="url(#green-gradient)"
                    opacity="0.08"
                  />

                  <defs>
                    <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Interactive Nodes */}
                  {[
                    { x: 20, y: 150 - (18.5 / 20) * 140, label: 'Wk1' },
                    { x: 80, y: 150 - (14.2 / 20) * 140, label: 'Wk2' },
                    { x: 140, y: 150 - (9.8 / 20) * 140, label: 'Wk4' },
                    { x: 200, y: 150 - (6.4 / 20) * 140, label: 'Wk8' },
                    { x: 260, y: 150 - (4.1 / 20) * 140, label: 'Wk12' },
                    { x: 320, y: 150 - (2.8 / 20) * 140, label: 'Wk24' },
                    { x: 380, y: 150 - (1.9 / 20) * 140, label: 'Wk52' }
                  ].map((node, index) => {
                    const isSelected = selectedTrendIndex === index;
                    return (
                      <g key={index} className="cursor-pointer group/node" onClick={() => setSelectedTrendIndex(index)}>
                        {isSelected && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="10"
                            className="fill-none stroke-brand-purple/40 animate-ping"
                          />
                        )}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isSelected ? 6 : 4.5}
                          fill={isSelected ? '#9333ea' : '#22c55e'}
                          className="transition-all duration-200 group-hover/node:fill-brand-purple-light group-hover/node:r-[6.5px]"
                          stroke="#000"
                          strokeWidth="1.5"
                        />
                        {/* Label on top */}
                        <text x={node.x} y="160" className={`font-mono text-[7px] transition-colors ${isSelected ? 'fill-brand-purple font-bold' : 'fill-zinc-500 group-hover/node:fill-zinc-300'}`} textAnchor="middle">{node.label}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-4 mt-2 pb-2 font-mono text-[7.5px] text-zinc-500 border-b border-white/5">
                <div className="flex items-center gap-1">
                  <span className="h-1 w-3 bg-[#22c55e] rounded" />
                  <span>Your Curve</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-0.5 w-3 border-t border-dashed border-zinc-500" />
                  <span>Global Avg</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-0.5 w-3 border-t border-dotted border-brand-purple" />
                  <span>Elite Benchmark</span>
                </div>
              </div>
            </div>

            {/* Micro details panel for the selected line milestone */}
            <div className="mt-4 border border-white/10 bg-black rounded p-3 flex justify-between items-center text-left">
              <div>
                <span className="font-mono text-[8px] text-zinc-500 uppercase">SELECTED_PHASE</span>
                <div className="font-display font-bold text-white text-xs mt-0.5">
                  Practice Week {PRACTICE_IMPROVEMENT_DATA[selectedTrendIndex].week}
                </div>
              </div>
              <div>
                <span className="font-mono text-[8px] text-zinc-500 uppercase">AVG_COMPLETE_TIME</span>
                <div className="font-display font-bold text-brand-green text-xs mt-0.5">
                  {PRACTICE_IMPROVEMENT_DATA[selectedTrendIndex].avgMinutes} Minutes
                </div>
              </div>
              <div>
                <span className="font-mono text-[8px] text-zinc-500 uppercase">COHORT_WORKOUTS</span>
                <div className="font-display font-bold text-white text-xs mt-0.5">
                  {PRACTICE_IMPROVEMENT_DATA[selectedTrendIndex].activeMembers.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Challenge Heatmap Grid representing verified exercises (3 cols) */}
          <div className="lg:col-span-3 bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand-purple" />
                  <span className="font-mono text-[10px] text-white font-bold uppercase tracking-tight">// Active Challenges</span>
                </div>
              </div>
              
              <div className="font-sans text-[11px] text-zinc-400 mb-4 leading-relaxed">
                Consistency is key. Every square represents verified daily submissions. Green indicates heavier workouts.
              </div>

              {/* Grid representation of heatmap */}
              <div className="grid grid-cols-12 gap-[3px] p-2 bg-black rounded border border-white/5 relative group/heatmap">
                {heatmapData.map((level, idx) => {
                  let colorClass = 'bg-zinc-950';
                  if (level === 1) colorClass = 'bg-green-950/40 hover:bg-green-950/70';
                  if (level === 2) colorClass = 'bg-green-900/40 border border-green-900/10 hover:bg-green-900/70';
                  if (level === 3) colorClass = 'bg-brand-green/40 hover:bg-brand-green/70';
                  if (level === 4) colorClass = 'bg-brand-green hover:bg-brand-green-light';
                  
                  const isHovered = hoveredHeatmapIdx === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredHeatmapIdx(idx)}
                      onMouseLeave={() => setHoveredHeatmapIdx(null)}
                      className={`aspect-square w-full rounded-[1px] transition-all cursor-crosshair ${colorClass} ${isHovered ? 'scale-125 ring-1 ring-white/60 z-10' : ''}`}
                    />
                  );
                })}
              </div>

              {/* Live Telemetry Overlay Readout */}
              <div className="mt-3 bg-zinc-950/90 border border-white/5 p-2 rounded text-left font-mono text-[9px] min-h-[50px] flex flex-col justify-between">
                {hoveredHeatmapIdx !== null ? (
                  <>
                    <div className="flex justify-between text-zinc-400">
                      <span>CELL_ID: [LN_{hoveredHeatmapIdx}]</span>
                      <span className="text-brand-green font-bold">STATUS: VERIFIED_RECORD</span>
                    </div>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="text-white font-bold">
                        {heatmapData[hoveredHeatmapIdx] === 0 ? '0 SUBMISSIONS' :
                         heatmapData[hoveredHeatmapIdx] === 1 ? '1-2 SUBMISSIONS' :
                         heatmapData[hoveredHeatmapIdx] === 2 ? '3-4 SUBMISSIONS' :
                         heatmapData[hoveredHeatmapIdx] === 3 ? '5-7 SUBMISSIONS' :
                         '8+ SUBMISSIONS (ELITE)'}
                      </span>
                      <span className="text-zinc-500 text-[8px]">VAL_HASH: 0x{((hoveredHeatmapIdx * 197) + 4096).toString(16).toUpperCase()}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-zinc-500 flex flex-col justify-center items-center h-full text-center py-2">
                    <span className="animate-pulse text-brand-purple">● STANDBY_TELEMETRY_LINK</span>
                    <span className="text-[8px] text-zinc-600 mt-1">HOVER ANY NODAL CELL FOR LOG READOUT</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 font-mono text-[8px] text-zinc-600">
                <span>LESS_ACTIVE</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded bg-zinc-950" />
                  <div className="w-2 h-2 rounded bg-green-950/40" />
                  <div className="w-2 h-2 rounded bg-green-900/40" />
                  <div className="w-2 h-2 rounded bg-brand-green/40" />
                  <div className="w-2 h-2 rounded bg-brand-green" />
                </div>
                <span>MORE_ACTIVE</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] text-zinc-400">Monthly Submissions</span>
                <span className="font-mono text-xs font-semibold text-white">4,208 CAD files</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] text-zinc-400">Audit Verifications</span>
                <span className="font-mono text-[11px] font-semibold text-brand-green">99.8% Perfect Match</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
