import React, { useState, useEffect } from 'react';
import { LIVE_TOURNAMENT, LEADERBOARD_DATA } from '../data/cadData';
import { Trophy, Calendar, Users, Target, Timer, Volume2, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

export default function CadBattles() {
  const [countdown, setCountdown] = useState({ hrs: 12, mins: 34, secs: 56 });
  const [activeBracketIdx, setActiveBracketIdx] = useState(0); // Selected match in bracket

  // Simple countdown ticker simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { hrs: prev.hrs, mins: prev.mins - 1, secs: 59 };
        if (prev.hrs > 0) return { hrs: prev.hrs - 1, mins: 59, secs: 59 };
        return { hrs: 0, mins: 0, secs: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="battles" className="relative overflow-hidden bg-gradient-to-b from-black via-black/80 to-black/40 backdrop-blur-[2px] py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="space-y-4 mb-12 text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 bg-brand-green rounded-full" />
            
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Live Competitive CAD Arenas
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Engineers go head-to-head live on stream to solve complex casting models. No talking, 
            no editing—just raw, blistering parametric speed modeling. Brackets are forming now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left: Tournament Broadcast Terminal & Brackets (7 cols) */}
          <div className="lg:col-span-7 bg-black border border-white/10 p-5 rounded flex flex-col justify-between">
            <div>
              {/* Terminal Title */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-brand-green" />
                  <span className="font-mono text-xs text-zinc-300 font-bold uppercase">// Tournament Broadcast Feed</span>
                </div>
                <span className="font-mono text-[9px] text-brand-purple font-bold">UPCOMING_BATTLE</span>
              </div>

              {/* Countdown Ticker Box */}
              <div className="bg-black border border-white/20 p-5 rounded text-center relative overflow-hidden mb-6">
                <div className="absolute top-1 left-1 font-mono text-[8px] text-zinc-600">T_CLOCK: LIVE_STABLE</div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase">NEXT SHOWDOWN COUNTDOWN</span>
                
                {/* Visual Timer numbers */}
                <div className="flex justify-center items-center gap-3 mt-3">
                  <div className="bg-zinc-950 border border-white/5 rounded px-3 py-2">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-white">
                      {countdown.hrs.toString().padStart(2, '0')}
                    </span>
                    <span className="block font-mono text-[8px] text-zinc-500 mt-1">HOURS</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-brand-purple animate-pulse">:</span>
                  <div className="bg-zinc-950 border border-white/5 rounded px-3 py-2">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-white">
                      {countdown.mins.toString().padStart(2, '0')}
                    </span>
                    <span className="block font-mono text-[8px] text-zinc-500 mt-1">MINS</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-brand-purple animate-pulse">:</span>
                  <div className="bg-zinc-950 border border-white/5 rounded px-3 py-2">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-brand-green">
                      {countdown.secs.toString().padStart(2, '0')}
                    </span>
                    <span className="block font-mono text-[8px] text-zinc-500 mt-1">SECS</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white tracking-tight mt-4">{LIVE_TOURNAMENT.title}</h3>
                <p className="font-sans text-[11px] text-zinc-400 max-w-md mx-auto mt-1 leading-normal">{LIVE_TOURNAMENT.description}</p>
              </div>

              {/* Tournament Match Bracket tree */}
              <div className="space-y-4">
                <span className="font-mono text-[8px] text-zinc-500 uppercase block">ACTIVE_PLAYOFF_BRACKETS (ROUND OF 4)</span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[10px]">
                  {LIVE_TOURNAMENT.bracket.roundOf4.map((match, idx) => {
                    const isSelected = idx === activeBracketIdx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveBracketIdx(idx)}
                        className={`cursor-pointer rounded border p-3 flex flex-col justify-between transition-all group ${
                          isSelected 
                            ? 'bg-zinc-900 border-brand-purple shadow-[0_0_8px_rgba(147,51,234,0.15)] scale-[1.01]' 
                            : 'bg-black border-white/10 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-950/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                           <span className="text-zinc-500 font-bold group-hover:text-zinc-400">MATCH_0{idx + 1}</span>
                          <span className={`font-mono text-[8px] font-bold transition-all duration-200 ${isSelected ? 'text-brand-purple animate-pulse' : 'text-zinc-600 group-hover:text-brand-green'}`}>
                            {isSelected ? 'SELECTED_MATCH' : 'CHOOSE_MATCH'}
                          </span>
                        </div>
                        <span className="text-white font-semibold transition-colors group-hover:text-zinc-100">{match}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Finals branch preview */}
                <div className="border border-dashed border-white/15 rounded p-3 text-center">
                  <span className="font-mono text-[8px] text-zinc-600 block">CHAMPIONSHIP_DECIDER</span>
                  <div className="font-display font-bold text-zinc-400 text-xs mt-1">
                    Winner Match 01 vs. Winner Match 02
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats on bottom of battle screen */}
            <div className="mt-8 border-t border-white/10 pt-4 flex flex-wrap gap-4 justify-between font-mono text-[10px] text-zinc-400">
              <div className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-zinc-500" />
                <span>PARTICIPANTS: {LIVE_TOURNAMENT.participantsCount}/{LIVE_TOURNAMENT.maxParticipants}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-brand-green" />
                <span>PRIZE_POOL: {LIVE_TOURNAMENT.prizePool}</span>
              </div>
              <button className="px-4 py-1.5 bg-brand-purple text-white text-[10px] uppercase font-bold hover:bg-brand-purple-light transition-all">
                Register_For_Battle
              </button>
            </div>
          </div>

          {/* Right: Real Chess-like High Timing Leaderboard (5 cols) */}
          <div className="lg:col-span-5 bg-black border border-white/10 p-5 rounded text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-brand-purple" />
                  <span className="font-mono text-xs text-zinc-300 font-bold uppercase">// Leaderboard Speed Rankings</span>
                </div>
                <span className="font-mono text-[9px] text-brand-green font-bold">MODE: FASTEST_RUN</span>
              </div>

              {/* Table of leaders */}
              <div className="space-y-2">
                {LEADERBOARD_DATA.slice(0, 5).map((player) => (
                  <div
                    key={player.rank}
                    className="flex items-center justify-between bg-black border border-white/5 p-2.5 rounded hover:border-brand-purple/35 hover:bg-zinc-950/60 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Rank badge */}
                      <span className={`inline-flex h-5 w-5 items-center justify-center rounded font-mono text-[9px] font-bold transition-all duration-300 group-hover:scale-105 ${
                        player.rank === 1 ? 'bg-zinc-100 text-black shadow-[0_0_8px_rgba(255,255,255,0.2)]' :
                        player.rank === 2 ? 'bg-zinc-800 text-brand-purple-light border border-white/10' :
                        player.rank === 3 ? 'bg-zinc-800 text-brand-green-light border border-white/10' :
                        'bg-zinc-900 text-zinc-500'
                      }`}>
                        #{player.rank}
                      </span>
                      
                      {/* Competitor identity */}
                      <div>
                        <div className="font-sans font-bold text-zinc-200 text-xs group-hover:text-white transition-colors">{player.username}</div>
                        <div className="font-mono text-[8px] text-zinc-600 mt-0.5 group-hover:text-zinc-500 transition-colors">{player.cadPlatform} // {player.country}</div>
                      </div>
                    </div>

                    {/* Millisecond Speed timing */}
                    <div className="text-right">
                      <div className="font-mono text-xs font-bold text-brand-green terminal-glow-green group-hover:text-brand-green-light transition-colors group-hover:scale-102">
                        {player.time}
                      </div>
                      <div className="font-mono text-[8px] text-zinc-500 uppercase mt-0.5 group-hover:text-zinc-400 transition-colors">
                        {player.streakDays}D STREAK
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to view full speedrunning database */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="font-mono text-[8px] text-zinc-500">RESOLVED: 2,408 RECORDS AT 10:45 UTC</span>
              <button className="group inline-flex items-center gap-1 font-mono text-[9px] text-brand-purple font-bold hover:text-brand-purple-light uppercase">
                <span>View Full Leaderboards</span>
                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

