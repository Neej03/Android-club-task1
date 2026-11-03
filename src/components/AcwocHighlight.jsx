import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, ExternalLink, Sparkles } from 'lucide-react';

export default function AcwocHighlight({ onOpenJoinModal }) {
  return (
    <section id="acwoc" className="py-24 bg-gradient-to-b from-[#030604] via-[#071109] to-[#040604] relative overflow-hidden border-y border-android-green/20 selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-30 pointer-events-none" />

      {/* Top and Bottom Glowing Neon Light Horizon Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent pointer-events-none" />

      {/* Volumetric Dual Neon Aurora Halos */}
      <div className="absolute -top-10 right-1/4 w-[650px] h-[380px] bg-gradient-to-br from-android-green/16 via-emerald-600/5 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-10 left-10 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-teal-600/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* Large Ghosted Typographic Watermark */}
      <div className="absolute -right-6 bottom-0 text-[140px] sm:text-[220px] font-black font-display text-white/[0.03] select-none pointer-events-none leading-none -mb-8 tracking-tighter">
        AcWoC
      </div>

      {/* Floating Network Pulse Beacons */}
      <div className="absolute top-16 right-1/4 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-80" />
      <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Container */}
        <div className="rounded-3xl bg-gradient-to-br from-[#080d09]/95 via-[#0b160f]/90 to-[#040805] border border-android-green/20 p-8 sm:p-12 shadow-[0_0_50px_rgba(61,220,132,0.08)] relative overflow-hidden backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline & Information */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-android-green/15 border border-android-green/40 text-android-green text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Open-Source Program</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                AcWoC 2026<br />
                <span className="text-android-green">Android Club's Winter of Code</span>
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Our month-long open-source program connecting student contributors across universities. Solve real issues, implement features, and submit pull requests to curated repositories with 1-on-1 mentorship from experienced senior peers.
              </p>

              {/* AcWoC Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-1">
                <div className="p-3.5 rounded-2xl bg-bg-card/90 border border-border">
                  <div className="text-2xl font-bold font-display text-white">450+</div>
                  <div className="text-xs text-text-muted mt-0.5">PRs Merged</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-bg-card/90 border border-border">
                  <div className="text-2xl font-bold font-display text-android-green">1,200+</div>
                  <div className="text-xs text-text-muted mt-0.5">Participants</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-bg-card/90 border border-border">
                  <div className="text-2xl font-bold font-display text-white">18+</div>
                  <div className="text-xs text-text-muted mt-0.5">Repositories</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://github.com/androidclubvitbhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-android-green text-black font-semibold text-sm hover:bg-android-accent transition-all duration-200 shadow-neon flex items-center gap-2 active:scale-95"
                >
                  <GitPullRequest className="w-4 h-4" />
                  <span>Explore Repositories</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Code Review Checklist Card */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-border space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
                    How It Works
                  </span>
                  <span className="text-xs text-text-muted">4-Week Program</span>
                </div>

                <div className="space-y-3.5 text-xs text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-android-green/20 text-android-green flex items-center justify-center font-bold shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Pick a Project</div>
                      <div className="mt-0.5">Browse beginner to intermediate issues labeled on our GitHub repos.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-android-green/20 text-android-green flex items-center justify-center font-bold shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Code &amp; Submit PR</div>
                      <div className="mt-0.5">Write clean code, follow standard GitFlow, and get constructive peer review.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-android-green/20 text-android-green flex items-center justify-center font-bold shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Earn Badges &amp; Swag</div>
                      <div className="mt-0.5">Climb the contributor board, earn certificates, and win club merchandise.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                  <span>Open to all colleges</span>
                  <span className="text-android-green font-medium">#AcWoC2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
