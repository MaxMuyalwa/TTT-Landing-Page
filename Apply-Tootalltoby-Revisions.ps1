$ErrorActionPreference = "Stop"

$repo = "C:\GIT\tootalltoby"
$src = Join-Path $repo "src"
$components = Join-Path $src "components"

if (-not (Test-Path -LiteralPath (Join-Path $src "App.tsx"))) {
  throw "Repo not found at $repo"
}

function ReadText($path) {
  Get-Content -Raw -LiteralPath $path
}

function WriteText($path, $content) {
  Set-Content -LiteralPath $path -Value $content -NoNewline
}

function ReplaceRegex($path, $pattern, $replacement) {
  $content = ReadText $path
  $updated = [regex]::Replace($content, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  WriteText $path $updated
}

function EnsureCss($path, $needle, $append) {
  $content = ReadText $path
  if (-not $content.Contains($needle)) {
    WriteText $path ($content.TrimEnd() + "`r`n`r`n" + $append + "`r`n")
  }
}

# App.tsx: write the intended home-page information architecture directly.
WriteText (Join-Path $src "App.tsx") @'
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
'@

# Hero.tsx: replace messaging and CTA hierarchy while preserving visual shell.
$hero = Join-Path $components "Hero.tsx"
ReplaceRegex $hero '(<h1[^>]*>\s*)[\s\S]*?(\s*</h1>)' '$1The World''s Best CAD Pros Practice Here$2'
ReplaceRegex $hero '(<p className="font-display[^"]*">\s*)[\s\S]*?(\s*</p>)' '$1Compete. Improve. Climb.$2'
ReplaceRegex $hero '(<p className="mt-3[^"]*">\s*)[\s\S]*?(\s*</p>)' '$1Practice real CAD challenges, verify your mass, and rank against a global community using the software you already know.$2'
ReplaceRegex $hero '(<div className="mt-4 flex flex-wrap items-center justify-center gap-3">\s*)[\s\S]*?(\s*</div>\s*\r?\n\s*\{/\* Practice Modeling Container)' @'
$1<a
            href="#register"
            className="px-6 py-2 rounded-full bg-[#22c55e] text-black hover:bg-[#4ade80] transition-all font-sans text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(34,197,94,0.3)] flex items-center gap-2"
          >
            TRY AS GUEST
          </a>
          <a
            href="#challenges"
            className="px-6 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-sans text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            BROWSE CHALLENGES
          </a>
          <a
            href="#login"
            className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-zinc-400 hover:text-white hover:border-white/30 transition-all font-sans text-[11px] font-bold uppercase tracking-wider flex items-center gap-2"
          >
            I ALREADY HAVE AN ACCOUNT
          </a>
        </div>

        {/* Practice Modeling Container
'@

# FeaturedChallenges.tsx: update content and add leaderboard preview signals.
$featured = Join-Path $components "FeaturedChallenges.tsx"
ReplaceRegex $featured '(<h2 className="font-display[^"]*">\s*)[\s\S]*?(\s*</h2>)' '$1Join the #1 Global CAD-Agnostic Community and Climb the Leaderboards$2'
ReplaceRegex $featured '(<p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">\s*)[\s\S]*?(\s*</p>)' '$1Pick a real drawing, model it in your preferred CAD package, submit the mass, and see where your run lands against active builders around the world.$2'
ReplaceRegex $featured 'Get Blueprint PDF' 'Get Started'
if (-not (ReadText $featured).Contains('LIVE_BOARD')) {
  ReplaceRegex $featured '(<span className="font-mono text-\[9px\] text-zinc-600 font-bold uppercase">\{selectedChallenge.category\}</span>\s*</div>)' @'
$1

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded border border-zinc-900 bg-black/50 p-2">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">LIVE_BOARD</div>
                  <div className="font-mono text-[10px] text-brand-green mt-1">#1 {selectedChallenge.avgTime}</div>
                </div>
                <div className="rounded border border-zinc-900 bg-black/50 p-2">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">DIFFICULTY</div>
                  <div className="font-mono text-[10px] text-white mt-1">{selectedChallenge.difficulty}</div>
                </div>
                <div className="rounded border border-zinc-900 bg-black/50 p-2">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">ACTIVE_NOW</div>
                  <div className="font-mono text-[10px] text-brand-purple-light mt-1">{Math.max(18, Math.round(selectedChallenge.completions / 420))}</div>
                </div>
              </div>
'@
}
ReplaceRegex $featured '<span className="font-mono text-\[9px\] text-zinc-500">\{challenge.boundingBox\}</span>\s*<span className="font-mono text-\[9px\] text-brand-green font-bold group-hover:scale-105 transition-transform">\{challenge.avgTime\} MINS</span>' '<span className="font-mono text-[9px] text-zinc-500">{challenge.completions.toLocaleString()} COMPLETIONS</span><span className="font-mono text-[9px] text-brand-green font-bold group-hover:scale-105 transition-transform">{Math.max(18, Math.round(challenge.completions / 420))} ACTIVE</span>'

# FinalCta.tsx: replace final CTA messaging and add Browse/CSWP actions.
$finalCta = Join-Path $components "FinalCta.tsx"
ReplaceRegex $finalCta '(<h2 className="font-display[^"]*">\s*)[\s\S]*?(\s*</h2>)' '$1Ready to Practice Like the Best?$2'
ReplaceRegex $finalCta '(<p className="font-sans text-sm text-zinc-400 leading-relaxed">\s*)[\s\S]*?(\s*</p>)' '$1Start with a real drawing, submit your mass, and turn every practice run into measurable progress.$2'
ReplaceRegex $finalCta 'Start Practicing' 'Try as Guest'
if (-not (ReadText $finalCta).Contains('CSWP Prep')) {
  ReplaceRegex $finalCta '(\s*</div>\s*\r?\n\s*\r?\n\s*\{/\* CAD System dropdown selector \*/)' @'
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a href="#challenges" className="rounded border border-white/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-zinc-300 hover:border-brand-green hover:text-brand-green transition-all">
                  Browse Challenges
                </a>
                <a href="https://www.tootalltoby.com/cswp-prep/" target="_blank" rel="noreferrer" className="rounded border border-brand-purple/40 bg-brand-purple/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-brand-purple-light hover:bg-brand-purple hover:text-white transition-all">
                  CSWP Prep
                </a>
$1
'@
}

# CSS marquee utility.
$css = Join-Path $src "index.css"
EnsureCss $css "logoMarquee" @'
@keyframes logoMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-logo-marquee {
  animation: logoMarquee 28s linear infinite;
}
'@

# New components.
WriteText (Join-Path $components "CadCompatibility.tsx") @'
import React from 'react';
import { Cpu } from 'lucide-react';

const cadPackages = ['SOLIDWORKS', 'Fusion 360', 'Onshape', 'FreeCAD', 'Creo', 'Inventor', 'CATIA', 'NX', 'Solid Edge'];

export default function CadCompatibility() {
  const rail = [...cadPackages, ...cadPackages];

  return (
    <section className="relative overflow-hidden bg-black/95 py-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 engineering-grid-fine opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-purple" />
              <span className="font-mono text-xs font-bold uppercase text-brand-purple-light">SECTION_01 // CAD_AGNOSTIC_STACK</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Compatible with Any CAD Package
            </h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-zinc-400">
            Too Tall Toby measures the finished model, not the software used to build it.
          </p>
        </div>

        <div className="relative overflow-hidden border-y border-white/10 bg-zinc-950/50 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
          <div className="flex w-max gap-3 animate-logo-marquee">
            {rail.map((name, index) => (
              <div key={`${name}-${index}`} className="flex min-w-[150px] items-center justify-center gap-2 rounded border border-zinc-800 bg-black px-4 py-3">
                <Cpu className="h-4 w-4 text-brand-green" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed text-zinc-600">
          All trademarks, logos, and brand names are the property of their respective owners. Use of these names and logos does not imply endorsement.
        </p>
      </div>
    </section>
  );
}
'@

WriteText (Join-Path $components "HowItWorks.tsx") @'
import React from 'react';
import { FileText, Timer, Box, Scale, Trophy } from 'lucide-react';

const steps = [
  { title: 'Launch Drawing', subtitle: 'Start Timer', icon: FileText },
  { title: 'Model the Drawing', subtitle: 'Use your CAD package', icon: Box },
  { title: 'Enter the Mass', subtitle: 'See Where You Rank', icon: Trophy },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/40 via-black to-black/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-brand-green" />
            <span className="font-mono text-xs font-bold uppercase text-brand-green">SECTION_03 // USER_ONBOARDING_FLOW</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded border border-white/10 bg-black p-6 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded border border-brand-purple/30 bg-brand-purple/10 text-brand-purple-light">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-mono text-[10px] font-bold uppercase text-zinc-600">STEP_0{index + 1}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase text-brand-green">{step.subtitle}</p>
                {index === 0 && <Timer className="absolute right-4 top-4 h-4 w-4 text-zinc-700" />}
                {index === 2 && <Scale className="absolute right-4 top-4 h-4 w-4 text-zinc-700" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
'@

WriteText (Join-Path $components "Testimonials.tsx") @'
import React from 'react';
import { Star } from 'lucide-react';

const fallbackTestimonials = [
  {
    name: 'Alicia Moreno',
    role: 'Mechanical Design Engineer',
    company: 'Aerospace Supplier',
    photo: 'AM',
    rating: 5,
    quote: 'Too Tall Toby turned practice into a measurable habit. I can see my speed, accuracy, and weak spots after every model.',
  },
  {
    name: 'Daniel Weber',
    role: 'CAD Manager',
    company: 'Manufacturing Team',
    photo: 'DW',
    rating: 5,
    quote: 'The leaderboard format makes our team want to practice. It is much more useful than sending everyone another tutorial playlist.',
  },
  {
    name: 'Mina Patel',
    role: 'Product Development Student',
    company: 'University Lab',
    photo: 'MP',
    rating: 5,
    quote: 'I use Fusion and classmates use SOLIDWORKS. We can still compete on the same drawing because the mass check keeps it fair.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/30 via-black to-black/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-purple" />
              <span className="font-mono text-xs font-bold uppercase text-brand-purple-light">SECTION_11 // STRAPI_TESTIMONIAL_FEED</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Testimonials</h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-zinc-400">
            Built to pull live testimonials from Strapi: name, photo, role, company, rating, and quote.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-3">
          {fallbackTestimonials.map((testimonial) => (
            <article key={testimonial.name} className="min-w-[300px] snap-start rounded border border-white/10 bg-black p-5 sm:min-w-[380px]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-brand-green/30 bg-brand-green/10 font-mono text-sm font-bold text-brand-green">
                  {testimonial.photo}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{testimonial.name}</h3>
                  <p className="font-mono text-[10px] uppercase text-zinc-500">{testimonial.role}{testimonial.company ? ` / ${testimonial.company}` : ''}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-brand-green">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-sans text-sm leading-relaxed text-zinc-300">"{testimonial.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
'@

Write-Host "Updated C:\GIT\tootalltoby"
Write-Host "Run: cd C:\GIT\tootalltoby; npm run build"
