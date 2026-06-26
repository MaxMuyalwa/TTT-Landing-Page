import React from 'react';

export default function Media() {
  return (
    <section id="media" className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="font-mono text-[10px] text-brand-green uppercase tracking-[0.32em]">Press Activity</p>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">Too Tall Toby in the Media</h1>
          <p className="max-w-3xl text-sm sm:text-base text-zinc-400 leading-7">
            Discover podcasts, articles, and interviews featuring Too Tall Toby, covering CAD education, engineering challenges, and the world of 3D modeling.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.04)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                <div>
                  <h2 className="text-xl font-semibold text-white">Articles</h2>
                  <p className="mt-2 text-zinc-500">Featured press mentions and editorial coverage.</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <article className="space-y-2">
                  <a
                    href="https://engtechnica.com/too-tall-toby-blows-up-my-monday/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Engtechnica.com - "Too Tall Toby Blows Up My Monday"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">April 2026</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://www.engineering.com/the-fastest-3d-cad-modelers-in-the-world/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Engineering.com - "The fastest 3D CAD modelers in the world"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">October 2024</p>
                </article>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.04)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                <div>
                  <h2 className="text-xl font-semibold text-white">Podcast Interviews</h2>
                  <p className="mt-2 text-zinc-500">Audio conversations on engineering, speed modeling, and gamified CAD learning.</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <article className="space-y-2">
                  <a
                    href="https://podcasts.apple.com/us/podcast/tootalltoby-and-the-gamification-of-3d-cad-too-tall/id1141757951?i=1000715973723"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    The Engineering Entrepreneur Podcast - "TooTallToby and The Gamification of 3D CAD"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">July 2025</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://teampipeline.us/being-an-engineer-podcast/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Pipeline Design & Engineering - Being an Engineer Podcast - "CAD Best Practices, Speed Modeling, & Gamification"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">April 2025</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://www.youtube.com/watch?v=16FmLm9t8Ms"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    CADClass Podcast
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">March 2025</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://www.youtube.com/watch?v=nBpKl12LKEo&t=88s"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    The Infill Podcast – "Mastering 3D CAD and Building a Thriving Learning Community"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">February 2025</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://www.youtube.com/watch?v=Ab01BimRzjI&t=1s"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Masters of Engineering - "Treating Product Design Like a Sport"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">April 2023</p>
                </article>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.04)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                <div>
                  <h2 className="text-xl font-semibold text-white">Videos Featuring Too Tall Toby</h2>
                  <p className="mt-2 text-zinc-500">Visual content and keynote appearances from the CAD community.</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <article className="space-y-2">
                  <a
                    href="https://www.youtube.com/watch?v=V8W1ff5U2Eo"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Fully Defined - "Why Speed Modelling makes you a better Designer"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">January 2025</p>
                </article>

                <article className="space-y-2">
                  <a
                    href="https://www.youtube.com/watch?v=vGiJLhZ6gIY"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-white hover:text-brand-green transition-colors"
                  >
                    Teaching Tech - "Speed 3D modelling is a thing and here's why you should try it"
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">July 2024</p>
                </article>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-zinc-400 shadow-[0_30px_90px_rgba(255,255,255,0.04)] backdrop-blur-xl">
              <p className="font-semibold text-white">Share this page</p>
              <p className="mt-3 text-sm leading-7">
                Use this media page to highlight press activity, interviews, and video features in your marketing or sponsor outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
