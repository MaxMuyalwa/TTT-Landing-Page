import React from 'react';
import { LEADERBOARD_DATA } from '../data/cadData';
import { Shield, Sparkles, Activity, Award, CheckCircle, Zap } from 'lucide-react';

export default function SocialProof() {
  // Categorize our leaders for special awards
  const fastestSpeedruns = [...LEADERBOARD_DATA].sort((a, b) => a.timeMs - b.timeMs).slice(0, 3);
  const longestStreaks = [...LEADERBOARD_DATA].sort((a, b) => b.streakDays - a.streakDays).slice(0, 3);
  const volumeKings = [...LEADERBOARD_DATA].sort((a, b) => b.challengesCompleted - a.challengesCompleted).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-black/40 backdrop-blur-[2px] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/20">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="space-y-4 mb-12 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="h-1.5 w-6 bg-brand-green rounded-full" />
            <span className="font-mono text-xs text-brand-green uppercase font-bold">// SECTION_09 // PARAMETRIC_HALL_OF_FAME</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Community Milestones & Achievements
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
            We celebrate discipline, consistency, and precision. Meet the community leaders pushing 
            the absolute limits of 3D modeling speedruns and parametric stability.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Speedruns */}
          <div className="bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-brand-purple/10 text-brand-purple">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block">RECORD_CATEGORY</span>
                  <span className="font-sans font-bold text-zinc-200 text-xs">The 3D Speedrun Champions</span>
                </div>
              </div>

              <div className="space-y-3">
                {fastestSpeedruns.map((p, idx) => (
                  <div key={p.username} className="flex items-center justify-between p-2 rounded bg-black border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-zinc-500">#{idx + 1}</span>
                      <div>
                        <span className="font-sans font-bold text-zinc-200 text-xs block">{p.username}</span>
                        <span className="font-mono text-[8px] text-zinc-600 uppercase">{p.cadPlatform}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-green terminal-glow-green">{p.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-mono text-[8px] text-zinc-600 uppercase mt-6 text-left">
              * Verified via standard baseline geometric check
            </p>
          </div>

          {/* Column 2: Streak Warriors */}
          <div className="bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-brand-green/10 text-brand-green">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block">RECORD_CATEGORY</span>
                  <span className="font-sans font-bold text-zinc-200 text-xs">Longest Active Practice Streaks</span>
                </div>
              </div>

              <div className="space-y-3">
                {longestStreaks.map((p, idx) => (
                  <div key={p.username} className="flex items-center justify-between p-2 rounded bg-black border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-zinc-500">#{idx + 1}</span>
                      <div>
                        <span className="font-sans font-bold text-zinc-200 text-xs block">{p.username}</span>
                        <span className="font-mono text-[8px] text-zinc-600 uppercase">{p.country}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-purple">{p.streakDays} Days</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-mono text-[8px] text-zinc-600 uppercase mt-6 text-left">
              * Requires consecutive daily completions
            </p>
          </div>

          {/* Column 3: Volume Kings */}
          <div className="bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-brand-purple/10 text-brand-purple">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block">RECORD_CATEGORY</span>
                  <span className="font-sans font-bold text-zinc-200 text-xs">Most Challenges Completed</span>
                </div>
              </div>

              <div className="space-y-3">
                {volumeKings.map((p, idx) => (
                  <div key={p.username} className="flex items-center justify-between p-2 rounded bg-black border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-zinc-500">#{idx + 1}</span>
                      <div>
                        <span className="font-sans font-bold text-zinc-200 text-xs block">{p.username}</span>
                        <span className="font-mono text-[8px] text-zinc-600 uppercase">{p.cadPlatform}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-white">{p.challengesCompleted} Solved</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-mono text-[8px] text-zinc-600 uppercase mt-6 text-left">
              * Total verified volumetric matches
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
