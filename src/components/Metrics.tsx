import React from 'react';
import { Layers, CheckCircle2, Users, Globe2, Cpu, BookOpen } from 'lucide-react';
import { COMMUNITY_STATS } from '../data/cadData';

export default function Metrics() {
  const metricItems = [
    {
      id: 'METRIC_01_CHALLENGES',
      value: `${COMMUNITY_STATS.challenges}+`,
      label: 'CAD Practice Challenges',
      subtext: 'Bespoke geometric & structural tasks',
      icon: Layers,
      color: 'text-brand-purple',
      borderColor: 'border-purple-950/40',
      status: 'CALIBRATED',
      sparkline: [20, 25, 23, 28, 30, 35, 34, 40]
    },
    {
      id: 'METRIC_02_COMPLETIONS',
      value: `${COMMUNITY_STATS.completions.toLocaleString()}+`,
      label: 'Challenge Completions',
      subtext: 'Verified by volume & mass checks',
      icon: CheckCircle2,
      color: 'text-brand-green',
      borderColor: 'border-green-950/30',
      status: 'VERIFIED_OK',
      sparkline: [30, 35, 45, 52, 60, 68, 72, 85]
    },
    {
      id: 'METRIC_03_MEMBERS',
      value: `${COMMUNITY_STATS.members.toLocaleString()}+`,
      label: 'Active CAD Members',
      subtext: 'Engineers, students & designers',
      icon: Users,
      color: 'text-brand-purple',
      borderColor: 'border-purple-950/40',
      status: 'ONLINE_ACTIVE',
      sparkline: [10, 15, 25, 38, 48, 55, 68, 75]
    },
    {
      id: 'METRIC_04_COUNTRIES',
      value: `${COMMUNITY_STATS.countries}+`,
      label: 'Represented Countries',
      subtext: 'Global engineering collaboration',
      icon: Globe2,
      color: 'text-brand-green',
      borderColor: 'border-green-950/30',
      status: 'RESOLVED',
      sparkline: [5, 12, 18, 25, 30, 42, 50, 62]
    },
    {
      id: 'METRIC_05_PLATFORMS',
      value: `${COMMUNITY_STATS.platforms}+`,
      label: 'CAD Systems Integrated',
      subtext: 'Truly software-agnostic engines',
      icon: Cpu,
      color: 'text-brand-purple',
      borderColor: 'border-purple-950/40',
      status: 'FULLY_COMPATIBLE',
      sparkline: [8, 8, 10, 12, 12, 14, 15, 16]
    },
    {
      id: 'METRIC_06_TUTORIALS',
      value: `${COMMUNITY_STATS.tutorials.toLocaleString()}+`,
      label: 'Knowledge Hub Elements',
      subtext: 'Structured speedrunning tutorials',
      icon: BookOpen,
      color: 'text-brand-green',
      borderColor: 'border-green-950/30',
      status: 'INDEXED_OK',
      sparkline: [15, 20, 22, 28, 32, 38, 45, 50]
    }
  ];

  return (
    <section className="relative bg-black border-b border-white/20 py-12 px-4 sm:px-6 lg:px-8">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Subtle grid label line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-brand-purple" />
            <span className="font-mono text-xs text-zinc-300 tracking-wider font-bold">// SYSTEM_INSTRUMENTATION // REALTIME_TELEMETRY</span>
          </div>
          <span className="font-mono text-[9px] text-zinc-500">// UNITS: METRIC // CALIBRATION_CYCLE: 1.0S</span>
        </div>

        {/* 2x3 grid representing dials */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metricItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col justify-between overflow-hidden rounded border border-white/10 bg-black p-5 hover:bg-zinc-900 transition-colors"
              >
                {/* Tech corners */}
                <div className="absolute top-0 left-0 h-1 w-1 bg-zinc-800" />
                <div className="absolute top-0 right-0 h-1 w-1 bg-zinc-800" />
                <div className="absolute bottom-0 left-0 h-1 w-1 bg-zinc-800" />
                <div className="absolute bottom-0 right-0 h-1 w-1 bg-zinc-800" />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    {/* Unique instrument identifier code */}
                    <div className="font-mono text-[9px] text-zinc-600 tracking-widest">{item.id}</div>
                    <div className="font-display text-2xl font-bold tracking-tight text-white mt-1">
                      {item.value}
                    </div>
                  </div>
                  
                  {/* High tech mini status badge */}
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase">{item.status}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                      <IconComponent className="h-3.5 w-3.5 text-zinc-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-zinc-900/60 pt-3">
                  <span className="font-sans text-xs font-semibold text-zinc-300 block">
                    {item.label}
                  </span>
                  <span className="font-sans text-[11px] text-zinc-500 block mt-0.5">
                    {item.subtext}
                  </span>
                </div>

                {/* Technical Sparkline Spark Graph */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="font-mono text-[8px] text-zinc-600">HISTORIC_CURVE_52W</div>
                  <div className="flex items-end gap-[2px] h-6 flex-1 justify-end max-w-[120px]">
                    {item.sparkline.map((val, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${(val / 90) * 100}%` }}
                        className={`w-1.5 rounded-t-sm ${idx === item.sparkline.length - 1 ? 'bg-brand-green' : 'bg-brand-purple/45'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
