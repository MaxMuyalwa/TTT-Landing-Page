import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Analytics from './components/Analytics';
import GlobalCommunity from './components/GlobalCommunity';
import PracticeImprovement from './components/PracticeImprovement';
import FeaturedChallenges from './components/FeaturedChallenges';
import Tutorials from './components/Tutorials';
import CadBattles from './components/CadBattles';
import SocialProof from './components/SocialProof';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Force browser to handle scroll restoration manually
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Reset scroll to top instantly
    window.scrollTo(0, 0);

    // Apply additional scroll resets to handle lazy-loaded elements and video layout shifts
    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Technical Responsive Navigation Header */}
      <Navbar />

      <main>
        {/* 2. Hero: Global CAD practice ecosystem & Holographic interactive SVG globe */}
        <Hero />

        {/* 3. Community Metrics: Animated instrument-style dials & sparkline telemetry */}
        <Metrics />

        {/* 4. Engineering Analytics: Donut charts, improvement curve node plotting & consistency heatmap */}
        <Analytics />

        {/* 5. Global Community Representation: Abstracted vector coordinate map hotspot explorer */}
        <GlobalCommunity />

        {/* 6. Practice & Mastery Simulator: CAD speed run projection slider widget */}
        <PracticeImprovement />

        {/* 7. Practice Blueprints Index: Interactive challenges carousel featuring dimensioned wireframes */}
        <FeaturedChallenges />

        {/* 8. Knowledge Node Network: Connected nonlinear tutorials graph with system filters */}
        <Tutorials />

        {/* 9. CAD Battles esports arena: Playoff bracket tree, ticking count downs & millisecondTiming tables */}
        <CadBattles />

        {/* 10. Social Proof: The Parametric Hall of Fame grid (Speed, Consistency, Volumetric output) */}
        <SocialProof />

        {/* 11. Final Call-to-Action: Interactive registration workspace console */}
        <FinalCta />
      </main>

      {/* 12. Fine Engineering Detail Blueprint Footer */}
      <Footer />
      
    </div>
  );
}
