import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import GlobalCommunity from './components/GlobalCommunity';
import PracticeImprovement from './components/PracticeImprovement';
import FeaturedChallenges from './components/FeaturedChallenges';
import Tutorials from './components/Tutorials';
import CadBattles from './components/CadBattles';
import SocialProof from './components/SocialProof';
import FinalCta from './components/FinalCta';
import Privacy from './components/Privacy';
import Eula from './components/Eula';
import Media from './components/Media';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname.replace(/\/+$/, '') || '/');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [currentPath]);

  const route = currentPath || '/';

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Technical Responsive Navigation Header */}
      <Navbar />

      <main>
        {route === '/privacy' ? (
          <Privacy />
        ) : route === '/eula' ? (
          <Eula />
        ) : route === '/media' ? (
          <Media />
        ) : route === '/sponsors' ? (
          <Sponsors />
        ) : (
          <>
            {/* 2. Hero: Global CAD practice ecosystem & Holographic interactive SVG globe */}
            <Hero />

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
          </>
        )}
      </main>

      {/* 12. Fine Engineering Detail Blueprint Footer */}
      <Footer />
      
    </div>
  );
}
