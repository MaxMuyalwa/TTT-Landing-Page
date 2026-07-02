import React, { useState, useRef, useEffect } from 'react';
import { 
  Cpu, 
  Trophy, 
  BookOpen, 
  Layers, 
  Menu, 
  X, 
  ChevronDown, 
  Glasses, 
  User, 
  Mail, 
  LogIn, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  desc: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Contact form state
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Custom logo state to load user-provided binary logo.png with fallback
  const [logoSrc, setLogoSrc] = useState('/logo.png');
  const [logoError, setLogoError] = useState(false);

  const navItems: NavItem[] = [
    {
      label: 'Play & Learn',
      href: '/#challenges',
      dropdownItems: [
        { name: 'Practice Simulator', href: '/#challenges', desc: 'Realtime CAD speed simulator' },
        { name: 'Featured Challenges', href: '/#challenges', desc: 'Dimensioned orthographic blueprints' },
        { name: 'Speedrun Telemetry', href: '/#analytics', desc: 'Performance benchmarks & plots' },
      ]
    },
    {
      label: 'Tournaments',
      href: '/#battles',
      dropdownItems: [
        { name: 'Live Esports Arena', href: '/#battles', desc: 'Watch CAD masters battle head-to-head' },
        { name: 'Global Speed Rankings', href: '/#battles', desc: 'Top CAD speedrun leaderboards' },
        { name: 'Register for Showdowns', href: '/#register', desc: 'Join the next bracket and win prizes' },
      ]
    },
    {
      label: 'Resources',
      href: '/#tutorials',
      dropdownItems: [
        { name: 'Knowledge Node Network', href: '/#tutorials', desc: 'Nonlinear educational CAD graph' },
        { name: 'CAD-Agnostic Tutorials', href: '/#tutorials', desc: 'Learn SolidWorks, Fusion 360, Onshape' },
        { name: 'Community Telemetry', href: '/#analytics', desc: 'System statistics & diagnostic instrumentation' },
      ]
    },
    {
      label: 'About Us',
      href: '/#analytics',
      dropdownItems: [
        { name: 'Media', href: '/media', desc: 'Press kits, event reels, and coverage highlights' },
        { name: 'Sponsors', href: '/sponsors', desc: 'Partnered brands powering global CAD tournaments' },
        { name: 'Testimonials', href: 'https://www.trustpilot.com/review/tootalltoby.com', desc: 'What past teams and winners say about us' },
        { name: 'Merch', href: '/#merch', desc: 'Limited edition gear for CAD competitors' },
      ]
    }
  ];

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/') && !href.startsWith('/#')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail) {
      setLoginSuccess(true);
      setTimeout(() => {
        setIsLoginOpen(false);
        setLoginSuccess(false);
        setLoginEmail('');
        setLoginPassword('');
      }, 1800);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactFirstName && contactLastName && contactEmail && contactMessage) {
      setContactSuccess(true);
      setTimeout(() => {
        setIsContactOpen(false);
        setContactSuccess(false);
        setContactFirstName('');
        setContactLastName('');
        setContactEmail('');
        setContactMessage('');
      }, 1800);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="flex w-full h-16 items-center justify-between px-6 lg:px-10">
        
        {/* Left: Beautiful authentic Logo */}
        <div className="flex items-center gap-3">
          {!logoError ? (
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <img 
                src={logoSrc} 
                onError={() => setLogoError(true)} 
                alt="Too Tall Toby Logo" 
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-250 group-hover:scale-102" 
              />
            </a>
          ) : (
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              {/* Hand-drawn grid paper logo matching user's uploaded logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)] group-hover:scale-105 transition-transform duration-250">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  {/* Outer circle with border */}
                  <circle cx="50" cy="50" r="47" fill="#f5f7ff" stroke="#0a0a0a" strokeWidth="4"/>
                  
                  {/* Light lavender/blue grid background inside the circle */}
                  <g mask="url(#circle-mask-inline)">
                    <mask id="circle-mask-inline">
                      <circle cx="50" cy="50" r="45" fill="white"/>
                    </mask>
                    {/* Grid lines */}
                    <path d="M 10,0 L 10,100 M 20,0 L 20,100 M 30,0 L 30,100 M 40,0 L 40,100 M 50,0 L 50,100 M 60,0 L 60,100 M 70,0 L 70,100 M 80,0 L 80,100 M 90,0 L 90,100" stroke="#d5deff" strokeWidth="1.25" />
                    <path d="M 0,10 L 100,10 M 0,20 L 100,20 M 0,30 L 100,30 M 0,40 L 100,40 M 0,50 L 100,50 M 0,60 L 100,60 M 0,70 L 100,70 M 0,80 L 100,80 M 0,90 L 100,90" stroke="#d5deff" strokeWidth="1.25" />
                    
                    {/* Cartoon face/outline contour (Toby's head outline) */}
                    <path d="M 22,50 C 20,24 80,24 78,50 C 76,73 24,73 22,50" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Spectacles glasses (Thick black rims, rounded square design) */}
                    <rect x="28" y="38" width="18" height="18" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinejoin="round" />
                    <rect x="54" y="38" width="18" height="18" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinejoin="round" />
                    
                    {/* Spectacles Bridge */}
                    <path d="M 46,47 Q 50,44 54,47" fill="none" stroke="#0a0a0a" strokeWidth="4.5" strokeLinecap="round"/>
                    
                    {/* Spectacles Temples/Arms (extending outwards) */}
                    <path d="M 28,47 C 22,45 18,38 16,44" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 72,47 C 78,45 82,38 84,44" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Little hand-drawn details (Toby hair tuft/ear markings) */}
                    <path d="M 18,52 L 15,58" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 82,52 L 85,58" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <span className="font-sans font-black tracking-tighter text-white text-lg sm:text-xl uppercase transition-colors duration-200 group-hover:text-zinc-200">
                TOO TALL TOBY
              </span>
            </a>
          )}
        </div>

        {/* Center: Desktop Navigation with Chevrons and Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, idx) => {
            const isDropdownActive = activeDropdown === idx;
            return (
              <div 
                key={item.label}
                className="relative py-2 px-3"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === idx ? null : idx);
                  }}
                  className={`flex items-center gap-1 font-sans text-[13px] font-medium transition-colors cursor-pointer ${
                    isDropdownActive ? 'text-white' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`h-3 w-3 text-zinc-500 transition-transform duration-200 ${
                    isDropdownActive ? 'rotate-180 text-white' : ''
                  }`} />
                </a>

                {/* Dropdown Card */}
                {isDropdownActive && (
                  <div 
                    className="absolute top-full left-0 w-72 bg-black border border-white/15 rounded-lg shadow-2xl p-4 mt-1 z-50 animate-fade-in-quick"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-3">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.href.startsWith('http') ? '_blank' : undefined}
                          rel={subItem.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                          onClick={(e) => {
                            setActiveDropdown(null);
                            handleNavigation(e, subItem.href);
                          }}
                          className="block p-2 rounded hover:bg-zinc-900 transition-colors group/sub"
                        >
                          <div className="font-sans text-xs font-semibold text-white group-hover/sub:text-brand-purple flex items-center justify-between">
                            <span>{subItem.name}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-brand-purple" />
                          </div>
                          <div className="font-sans text-[10px] text-zinc-500 mt-0.5 leading-normal">
                            {subItem.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Actions exactly styled as Reference Image */}
        <div className="hidden md:flex items-center gap-6">
          {/* Contact Toby Text Link */}
          <button 
            onClick={() => setIsContactOpen(true)}
            className="font-sans text-[13px] font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Contact Toby
          </button>

          {/* Login Text Link */}
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="font-sans text-[13px] font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Login
          </button>

          {/* Register Button: Rich dark purple container with neon purple border */}
          <a 
            href="/#register" 
            className="px-4 py-1.5 bg-[#14072b] hover:bg-[#200c42] border border-purple-600 rounded-md text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.45)]"
          >
            Register
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black px-4 py-6 space-y-4 shadow-xl">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="font-sans text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">
                  {item.label}
                </div>
                <div className="space-y-1 pl-2">
                  {item.dropdownItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleNavigation(e, subItem.href);
                      }}
                      className="block p-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors text-xs font-medium"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsContactOpen(true);
              }}
              className="w-full text-center py-2 border border-white/10 hover:border-white/20 rounded text-zinc-300 hover:text-white text-xs font-semibold"
            >
              Contact Toby
            </button>
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsLoginOpen(true);
              }}
              className="w-full text-center py-2 border border-white/10 hover:border-white/20 rounded text-zinc-300 hover:text-white text-xs font-semibold"
            >
              Login
            </button>
            <a
              href="/#register"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 bg-purple-900 border border-purple-500 rounded text-white text-xs font-bold shadow-lg"
            >
              Register
            </a>
          </div>
        </div>
      )}
      </header>

      {/* -------------------- LOGIN MODAL -------------------- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setIsLoginOpen(false)} />
          
          <div className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden animate-fade-in">
            {/* Tech line accents */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-purple via-brand-green to-brand-purple" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <LogIn className="h-4 w-4 text-brand-purple" />
                <span className="font-sans text-sm text-white font-bold">Log In</span>
              </div>
              <button 
                onClick={() => setIsLoginOpen(false)} 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {loginSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 animate-pulse" />
                </div>
                <h3 className="font-sans font-bold text-white text-base">Login Successful</h3>
                <p className="font-sans text-xs text-zinc-400">Redirecting to your dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-semibold text-zinc-300 block">Email Address</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                    <input 
                      type="email" 
                      required
                      autoComplete="off"
                      placeholder="name@company.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 focus:border-brand-purple rounded-lg px-3 py-2 pl-9 font-sans text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-semibold text-zinc-300 block">Password</label>
                  <input 
                    type="password" 
                    required
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 focus:border-brand-purple rounded-lg px-3 py-2 font-sans text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-2.5 mt-2 bg-brand-purple hover:bg-brand-purple-light rounded-lg text-white font-sans text-xs font-bold transition-all shadow-[0_0_12px_rgba(147,51,234,0.15)]"
                >
                  Log In
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* -------------------- CONTACT TOBY MODAL -------------------- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setIsContactOpen(false)} />

          <div className="relative w-full max-w-2xl max-h-[calc(100vh-4rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.55)] flex flex-col animate-fade-in">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-green via-brand-purple to-brand-green" />
            <div className="absolute bottom-3 left-6 font-mono text-[8px] text-zinc-700 select-none">SYS: TOBY_INBOX_ONLINE</div>

              <div className="relative px-6 py-6 overflow-y-auto flex-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4.5 w-4.5 text-brand-green" />
                    <span className="font-mono text-xs text-white font-bold uppercase tracking-widest">// Contact Toby Schnaars</span>
                  </div>
                  <button 
                    onClick={() => setIsContactOpen(false)} 
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {contactSuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                      <Check className="h-6 w-6 animate-pulse" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base">Transmission Sent</h3>
                    <p className="font-mono text-[10px] text-zinc-500">Toby and the engineering crew will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-left pb-6">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-zinc-950/60 border border-white/10 focus:border-brand-green rounded px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider block">First Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="First Name"
                          value={contactFirstName}
                          onChange={(e) => setContactFirstName(e.target.value)}
                          className="w-full bg-zinc-950/60 border border-white/10 focus:border-brand-green rounded px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider block">Last Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Last Name"
                          value={contactLastName}
                          onChange={(e) => setContactLastName(e.target.value)}
                          className="w-full bg-zinc-950/60 border border-white/10 focus:border-brand-green rounded px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider block">Message</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Suggest a challenge, report a speedrun score, or inquire about custom team tournaments..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full bg-zinc-950/60 border border-white/10 focus:border-brand-green rounded px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-2.5 mt-2 bg-[#092b15] hover:bg-[#0e4221] border border-green-600 hover:border-green-500 rounded text-white font-mono text-xs font-bold uppercase tracking-widest transition-all"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>

              <div className="border-t border-white/10 px-6 py-4 text-xs text-zinc-400">
                By clicking submit, your message will be sent to the TooTallToby team!
              </div>
            </div>
          </div>
      )}
    </>
  );
}
