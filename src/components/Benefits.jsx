import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Smartphone,
  Terminal,
  Network,
  Trophy,
  Users,
  Check,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  GitPullRequest,
  Code2,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function Benefits({ onOpenJoinModal }) {
  const [activePersona, setActivePersona] = useState('beginner');

  const personas = [
    {
      id: 'beginner',
      title: 'The Beginner / Explorer',
      subtitle: 'Never written a line of Kotlin? Start here.',
      outcome: 'Build & launch your first 2 interactive apps in 4 weeks with peer guidance.',
      highlights: [
        'Zero prerequisite assumptions — starting from fundamentals',
        'Hands-on Kotlin syntax & Android Studio setup labs',
        'Friendly peer study jams with senior student mentors'
      ]
    },
    {
      id: 'hacker',
      title: 'The Hackathon Competitor',
      subtitle: 'Aiming for national podium finishes & prizes.',
      outcome: 'Learn rapid prototyping, Gemini Nano on-device AI integration, and pitch crafting.',
      highlights: [
        'Team matchmaking with designers and backend coders',
        'Mock judging rounds and pitch deck optimization',
        'Exclusive hackathon toolkits and sponsor credit grants'
      ]
    },
    {
      id: 'architect',
      title: 'The Open-Source Architect',
      subtitle: 'Looking for high-impact production resume credentials.',
      outcome: 'Maintain live campus applications, review pull requests, and lead technical teams.',
      highlights: [
        'Play Store deployment lifecycle and release exposure',
        'Clean MVI architecture & Kotlin Multiplatform systems',
        'Official letters of recommendation from faculty coordinators'
      ]
    }
  ];

  const currentPersonaData = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section id="benefits" className="py-28 bg-gradient-to-b from-[#040604] via-[#071009] to-[#030503] relative overflow-hidden text-text-primary selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-30 pointer-events-none" />

      {/* Top and Bottom Glowing Neon Light Horizon Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/45 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent pointer-events-none" />

      {/* Signature 3D Bugdroid Bot Hologram Watermark */}
      <div className="absolute top-12 -right-10 sm:right-6 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] pointer-events-none opacity-[0.15] select-none animate-float-slow">
        <img
          src="/RecruitmentsPage_Assets/BG_Bot1.webp"
          alt="Bugdroid 3D Graphic"
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(61,220,132,0.35)]"
        />
        <div className="absolute inset-0 bg-radial-gradient from-android-green/10 via-transparent to-transparent blur-2xl animate-pulse-glow" />
      </div>

      {/* Atmospheric Multi-Color Volumetric Light Halos */}
      <div className="absolute top-1/3 -left-20 w-[700px] h-[450px] bg-gradient-to-tr from-android-green/14 via-emerald-600/5 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[450px] bg-gradient-to-bl from-teal-500/12 via-emerald-950/20 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-android-green/8 blur-[130px] rounded-full pointer-events-none" />

      {/* Ambient Pulsing Circuit Beacons */}
      <div className="absolute top-44 left-1/5 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-75" />
      <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] animate-pulse pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(61,220,132,0.15)] font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Developer Superpowers &amp; Value</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]"
          >
            YOUR IDEAS DESERVE A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_25px_rgba(61,220,132,0.35)]">
              COMMUNITY.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Whether you are writing your first line of code or deploying complex multiplatform architectures, our community provides the velocity, feedback, and peer mentorship to fast-track your skills.
          </motion.p>
        </div>

        {/* =========================================================================
            1. INTERACTIVE DEVELOPER JOURNEY ROADMAP (Distinctive Selector)
           ========================================================================= */}
        <div className="mb-14 rounded-3xl bg-[#090d0a] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-android-green uppercase">
              <Zap className="w-4 h-4 text-android-green" />
              <span>CHOOSE YOUR STUDENT DEVELOPER TRACK</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              EXPLORE WHAT YOU GAIN
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {personas.map((persona) => {
              const isSelected = activePersona === persona.id;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(persona.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-android-green/10 border-android-green text-white shadow-inner-glow'
                      : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold font-display text-white">{persona.title}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-android-green animate-ping" />}
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">{persona.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Persona Breakdown */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-xl">
                <div className="text-xs font-mono text-android-green font-bold uppercase">
                  // EXPECTED LEARNING OUTCOME
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {currentPersonaData.outcome}
                </div>
              </div>

              <div className="space-y-1.5 md:border-l border-white/10 md:pl-6 text-xs text-neutral-300">
                {currentPersonaData.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-android-green shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            2. ASYMMETRIC BENTO SUPERPOWER CARDS
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Card 1: Large Play Store Production Sandbox (8 Cols) */}
          <div className="md:col-span-8 rounded-3xl bg-[#090d0a] p-7 sm:p-8 border border-white/10 hover:border-android-green/50 transition-all shadow-card relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-android-green font-bold">
                  <Smartphone className="w-4 h-4 text-android-green" />
                  <span>PRODUCTION DEPLOYMENT EXPOSURE</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400">
                  REAL USERS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2 leading-tight">
                Ship Code That Real Campus Students Use
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 max-w-xl">
                Unlike tutorial code that stays in private folders, Android Club engineers build and deploy software used across VIT Bhopal. Experience real CI/CD pipelines, crash monitoring, and Play Store releases.
              </p>
            </div>

            {/* Mock Google Play Release Telemetry Widget */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-neutral-400 text-[11px]">
                <span>PACKAGE: com.androidclub.campuscompanion</span>
                <span className="text-android-green font-bold">LIVE ON PLAY STORE</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-base font-bold text-white">4,200+</div>
                  <div className="text-[9px] text-neutral-500 uppercase">ACTIVE USERS</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-base font-bold text-android-green">99.8%</div>
                  <div className="text-[9px] text-neutral-500 uppercase">CRASH-FREE SESSIONS</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-base font-bold text-white">v2.4.1</div>
                  <div className="text-[9px] text-neutral-500 uppercase">CURRENT RELEASE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Code Review & Quality (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#090d0a] p-7 border border-white/10 hover:border-android-green/50 transition-all shadow-card relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent" />

            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-android-green mb-4">
                <GitPullRequest className="w-5 h-5" />
              </div>

              <div className="text-[11px] font-mono text-emerald-400 uppercase font-bold mb-1">
                // CODE EXCELLENCE
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2 leading-snug">
                Constructive Peer Reviews
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Every line of code goes through thorough pull request reviews. Learn industry conventions, avoid memory leaks, and master clean architectural boundaries.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              &gt; Strict Kotlin conventions, Coroutines best practices, and zero memory leaks.
            </div>
          </div>

          {/* Card 3: Hackathon War Chest (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#090d0a] p-7 border border-white/10 hover:border-android-green/50 transition-all shadow-card relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-yellow-400 uppercase font-bold mb-1">
                // COMPETITION ARENA
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2 leading-snug">
                Hackathon Sponsorships
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Represent VIT Bhopal at national hackathons with club travel support, curated teammate matching, and pitch deck coaching from past winners.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              &gt; Over ₹2.5L+ won by Android Club teams across national hackathons.
            </div>
          </div>

          {/* Card 4: Industry & GDE Network (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#090d0a] p-7 border border-white/10 hover:border-android-green/50 transition-all shadow-card relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-4">
                <Network className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-teal-400 uppercase font-bold mb-1">
                // INDUSTRY NETWORK
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2 leading-snug">
                Alumni &amp; GDE Access
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Direct office hours with Google Developer Experts, Android architects, and club alumni working at top tech enterprises across India and abroad.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              &gt; Direct referral pathways for internships and full-time engineering roles.
            </div>
          </div>

          {/* Card 5: Leadership Credentials (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#090d0a] p-7 border border-white/10 hover:border-android-green/50 transition-all shadow-card relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-android-green mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-android-green uppercase font-bold mb-1">
                // OFFICIAL CREDENTIALS
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2 leading-snug">
                Verified Faculty LoRs
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Exceptional contributors and leads earn official Letters of Recommendation from the School of Computing Science &amp; Engineering for master's and job applications.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              &gt; Official student leadership certificates issued by VIT Bhopal.
            </div>
          </div>

        </div>

        {/* =========================================================================
            COMMUNITY CALLOUT BANNER (Zero Apply / Register)
           ========================================================================= */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-950/40 via-[#0a0f0c] to-teal-950/40 border border-white/10 text-center max-w-4xl mx-auto shadow-card">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-android-green uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>VIT BHOPAL STUDENTS &amp; ENTHUSIASTS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
            Ready to Build Your First Android App?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Join our open WhatsApp community to participate in weekly code sessions, ask doubts, and collaborate on active campus repositories.
          </p>

          <a
            href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-android-green hover:bg-android-accent text-black font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-neon active:scale-95 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Join Our WhatsApp Community</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="text-[11px] font-mono text-neutral-400 mt-3">
            Open to all branches and years • Zero prerequisites required
          </div>
        </div>

      </div>
    </section>
  );
}
