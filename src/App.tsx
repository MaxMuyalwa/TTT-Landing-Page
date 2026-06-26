import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CadCompatibility from './components/CadCompatibility';
import Analytics from './components/Analytics';
import GlobalCommunity from './components/GlobalCommunity';
import PracticeImprovement from './components/PracticeImprovement';
import FeaturedChallenges from './components/FeaturedChallenges';
import HowItWorks from './components/HowItWorks';
import Tutorials from './components/Tutorials';
import CadBattles from './components/CadBattles';
import Testimonials from './components/Testimonials';
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
            <Hero />
            <CadCompatibility />
            <FeaturedChallenges />
            <HowItWorks />
            <Analytics />
            <GlobalCommunity />
            <PracticeImprovement />
            <Tutorials />
            <CadBattles />
            <Testimonials />
            <SocialProof />
            <FinalCta />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}