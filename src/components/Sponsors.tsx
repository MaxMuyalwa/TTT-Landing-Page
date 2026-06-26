import React from 'react';

const sponsorsData = [
  {
    title: '2026 Summer Open',
    subtitle: 'June 5 - July 3, 2026',
    presentedBy: 'Hytel',
    entries: [
      {
        name: 'Hytel',
        logo: '/images/sponsors/hytel.png',
        href: 'https://www.hytel.io',
        description: [
          'Hytel is the lead software engineering partner for TooTallToby, responsible for building and optimising the CADpractice platform.',
          'They specialise in scalable web and mobile apps powered by AI, combining AI-assisted development with experienced human engineers overseeing every stage of the process.',
          'Hytel also helps businesses with AI enablement — implementing LLMs, AI agents, workflow automation, and AI performance optimisation to help teams integrate AI into real-world products and operations.',
          'From community-driven ideas to high-performance digital products, Hytel helps bring complex technical visions to life — which is why Toby trusts them as his development partner.',
        ],
      },
      {
        name: 'Xometry',
        logo: '/images/sponsors/xometry.png',
        href: 'https://www.xometry.com/',
        description: ['Your global production partner — everything from CNC to 3D printing, at any scale.'],
        extra: 'Use code TOBY20SPRING for 20% off your first order.',
      },
      {
        name: 'Photinos Design',
        logo: '/images/sponsors/photinos-design.png',
        href: 'https://photinos.design/',
        description: ['Custom industrial design and engineering support for product companies and CAD creators.'],
      },
      {
        name: 'SendCutSend',
        logo: '/images/sponsors/sendcutsend.png',
        href: 'https://sendcutsend.com/',
        description: ['The world’s fastest laser cutting — precision flat parts, delivered in days.'],
      },
      {
        name: 'SolidBox',
        logo: '/images/sponsors/solidbox.png',
        href: 'https://www.mysolidbox.com/',
        description: [
          'Need a computer designed to fit your CAD needs? Our friends at SolidBox can help you. They offer products optimized for CAD users, including desktops, laptops, and peripherals.',
          'In addition to products offered, SolidBox can assist with project-based training to help engineers and designers learn new programs and explore new functionality while working on their projects.',
        ],
      },
      {
        name: '3Dconnexion',
        logo: '/images/sponsors/3dconnexion.png',
        href: 'https://3dconnexion.com/',
        description: ['Precision control for professional CAD workflows.'],
      },
    ],
  },
  {
    title: '2026 Winter Freeze',
    subtitle: 'January 9 - 30, 2026',
    entries: [
      {
        name: 'Xometry',
        logo: '/images/sponsors/xometry.png',
        href: 'https://www.xometry.com/',
        description: ['Turn your CAD files into parts quickly with Xometry’s Manufacturing on Demand platform.'],
        extra: 'Use code TOBY20SPRING for 20% off your first order.',
      },
      {
        name: 'SolidBox',
        logo: '/images/sponsors/solidbox.png',
        href: 'https://www.mysolidbox.com/',
        description: ['Need a computer designed to fit your CAD needs? Our friends at SolidBox can help you with desktops, laptops, peripherals, and project-based training.'],
      },
      {
        name: 'Plasticity',
        logo: '/images/sponsors/plasticity.png',
        href: 'https://www.plasticity.xyz/',
        description: [
          'Advanced & Class-A Surfacing — sculpt beautiful, production-ready geometry.',
          'Easy interoperability directly into your CAD workflow.',
          'No subscriptions — own your tools, no strings attached.',
        ],
      },
      {
        name: '3Dconnexion',
        logo: '/images/sponsors/3dconnexion.png',
        href: 'https://3dconnexion.com/',
        description: ['Precision control for professional CAD workflows.'],
      },
    ],
  },
];

const pastPartners = [
  { name: 'Fuse', logo: '/images/sponsors/fuse.png' },
  { name: 'Alibre', logo: '/images/sponsors/alibre.png' },
  { name: 'Onshape', logo: '/images/sponsors/onshape.png' },
  { name: 'JIT CAD CAM', logo: '/images/sponsors/jit-cad-cam.png' },
  { name: 'Prusa Research', logo: '/images/sponsors/prusa-research.png' },
];

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.style.display = 'none';
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4">
          <p className="font-mono text-[10px] text-brand-green uppercase tracking-[0.32em]">Tournament Sponsors</p>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">Too Tall Toby Tournament Sponsors</h1>
          <p className="max-w-3xl text-sm sm:text-base text-zinc-400 leading-7">
            Explore the brands that power the CAD speed modeling tournaments, provide production services, and help the community build better engineering workflows.
          </p>
        </div>

        <div className="space-y-10">
          {sponsorsData.map((section) => (
            <div key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.05)] backdrop-blur-xl">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{section.subtitle}</p>
                {section.presentedBy && <p className="text-sm text-zinc-400">Presented by {section.presentedBy}</p>}
              </div>

              <div className="mt-8 space-y-8">
                {section.entries.map((entry) => (
                  <div key={entry.name} className="space-y-3 rounded-2xl border border-white/10 bg-black/50 p-6">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                        {entry.description.map((line, index) => (
                          <p key={index} className="text-sm text-zinc-400">{line}</p>
                        ))}
                        {entry.extra && <p className="text-sm text-zinc-400">{entry.extra}</p>}
                      </div>
                      <img
                        src={entry.logo}
                        alt={`${entry.name} logo`}
                        className="max-h-16 max-w-[180px] object-contain"
                        onError={handleImageError}
                      />
                    </div>
                    <a href={entry.href} target="_blank" rel="noreferrer noopener" className="text-brand-green hover:text-white transition-colors text-sm font-medium">
                      {entry.href}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.05)] backdrop-blur-xl">
            <p className="text-sm text-zinc-400">Interested in sponsoring a tournament? Contact <a href="mailto:vicki@tootalltoby.com" className="text-brand-green hover:text-white transition-colors">vicki@tootalltoby.com</a> for a list of future tournaments and sponsorship options.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.05)] backdrop-blur-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Past Partners</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 items-center justify-items-center">
              {pastPartners.map((partner) => (
                <div key={partner.name} className="h-32 w-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`object-contain ${partner.name === 'Onshape' ? 'max-h-40 max-w-40' : 'max-h-32 max-w-32'}`}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
