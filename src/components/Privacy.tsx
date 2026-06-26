import React from 'react';

export default function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.12),transparent_25%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-black/60 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6 text-sm leading-8 text-zinc-300">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                TooTallToby Platform Privacy Policy (PP)
              </h1>
              <p className="inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-brand-green">
                PRIVACY POLICY
              </p>
              <p>
                This Privacy Policy ( PP ) outlines how Too Tall Toby ( TTT ), incorporated as Too Tall Toby with the Pennsylvania Dept of State, uses the personal data we collect from you when you use the tootalltoby.com website, affiliated websites, email services, data processing tools or services, and/or applications for Android, iOS, or other mobile platform, as applicable (collectively or individually referred to as “The Platform”).
              </p>
              <p>
                This PP does not constitute a license to use The Platform. Please see the <a href="/eula" className="text-brand-green hover:text-white transition-colors underline">End User License Agreement</a> ( EULA ) for further details on usage of The Platform and other services.
              </p>
              <p>
                Under this PP, Users are specifically directed to read and understand the Third Parties ( 3rd Parties ) section of the EULA. The User acknowledges the use of 3rd Party services, the sharing of data with 3rd Parties, and agrees to be aware of and bound by such 3rd Parties’ terms of use and associated policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">TTT collects:</h2>
              <div className="ml-5 space-y-3 text-zinc-300">
                <p>1. User personal identification information, such as name, email address, and phone number, upon registration.</p>
                <p>2. Throughout the usage of The Platform, a User may opt to voluntarily disclose additional information such as country of origin, location, computer software and hardware preferences, work history, and opinions on various topics.</p>
                <p>3. System access logs including date, time, Internet Protocol ( IP ) address, pages visited, browser used, device used and other related information necessary for the efficient operation of The Platform.</p>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                All information collected by TTT is retained by TTT at its discretion and may be used by TTT for operation of The Platform and for business operations.
              </p>
              <p>
                We use cookies stored in your browser to facilitate a smooth and secure user experience. As an example, in order to keep you logged into this website, a cookie is stored in your browser data.
              </p>
              <p>
                Certain 3rd Parties require TTT to expose the User to their policies; these can be found below:
              </p>
              <p className="ml-5">A. Google’s Privacy Policy can be found at <a href="https://www.google.com/policies/privacy" target="_blank" rel="noreferrer" className="text-brand-green hover:text-white transition-colors underline">https://www.google.com/policies/privacy</a></p>
              <p>
                TTT Practice Models uses the YouTube API to search for and display relevant user-uploaded content, such as Tutorial videos and Speedmodeling recording videos.
              </p>
              <p>
                TTT does not transmit user data to YouTube, but may cache data retrieved from YouTube via the YouTube API to provide an optimized user experience.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <p>Too Tall Toby PRIVACY POLICY V1.01 February 7th 2025</p>
              <p>
                Access the PRIOR VERSION of the Too Tall Toby PRIVACY POLICY{' '}
                <a href="https://www.tootalltoby.com/privacy/archive/v1.00/" target="_blank" rel="noreferrer" className="text-brand-green hover:text-white transition-colors underline">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
