import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  ChevronRight,
  MessageCircle,
  ArrowUpRight,
  Compass,
  Code2,
  Cpu,
  Terminal,
  Zap,
  Globe,
  Calendar,
  Users,
  Trophy,
  Layers,
  Award
} from 'lucide-react';
import SplineScene from './SplineScene';
import logoImg from '../assets/logo.png';

export default function Hero({ onOpenJoinModal }) {
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' | 'ecosystem' | 'stack'
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    {
      text: 'Did you know? Android powers over 70% of smartphones worldwide, running on over 3 billion active devices.',
      author: 'Global Ecosystem Fact',
      tag: 'ECOSYSTEM_TELEMETRY'
    },
    {
      text: "Android isn't just an operating system, it's a global open-source developer movement built by passionate engineers.",
      author: 'Club Core Philosophy',
      tag: 'ENGINEERING_CULTURE'
    },
    {
      text: 'Where student curiosity turns into production applications and code turns into lasting impact.',
      author: 'VIT Bhopal Chapter',
      tag: 'CHAPTER_MANDATE'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleScrollToExplore = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-text-primary selection:bg-android-green selection:text-black"
    >
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-45 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-25 pointer-events-none" />

      {/* Signature Rotating Cyber Portal Ring (Same as Event Section) */}
      <div className="absolute top-[80px] right-[-100px] lg:right-[5%] w-[650px] sm:w-[800px] lg:w-[950px] h-[650px] sm:h-[800px] lg:h-[950px] pointer-events-none -z-0 opacity-20">
        <img
          src="/Events_Page/HeroSection_BG.webp"
          alt="Glowing Cyber Portal"
          className="w-full h-full object-contain animate-spin-slow select-none"
        />
        <div className="absolute inset-0 bg-radial-gradient from-android-green/10 via-transparent to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Soft Multi-Layer Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-android-green/12 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Micro-Circuit Pulsing Beacons */}
      <div className="absolute top-28 left-1/5 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-80" />
      <div className="absolute top-2/3 left-1/6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse pointer-events-none opacity-70" />
      <div className="absolute bottom-24 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* =========================================================================
            MAIN HERO BENTO GRID (Left: Headlines & Terminal, Right: 3D Mascot Cyber-Pod)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          
          {/* Left Column: Headlines & Call to Actions (7 Cols) */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Tag & Founded Year */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-semibold shadow-[0_0_20px_rgba(61,220,132,0.15)] font-mono">
                <img
                  src={logoImg}
                  alt="Android Club Logo"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-white font-bold">Android Club</span>
                <span className="text-neutral-500">•</span>
                <span>VIT Bhopal Chapter</span>
                <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400">
                <Terminal className="w-3 h-3 text-android-green" />
                <span>EST. 2017 • OFFICIAL CHAPTER</span>
              </div>
            </motion.div>

            {/* Official Slogan */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-android-green text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
              <span>If it's Android, it's Us!</span>
            </motion.div>

            {/* Main Aesthetic Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight leading-[1.04] text-white">
                BUILD. CONNECT.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_35px_rgba(61,220,132,0.45)]">
                  INNOVATE.
                </span>
              </h1>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1.5 hover:border-android-green/40 transition-colors">
                <Compass className="w-3.5 h-3.5 text-android-green" />
                <span>Jetpack Compose</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1.5 hover:border-android-green/40 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Edge AI &amp; Gemini</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1.5 hover:border-android-green/40 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Kotlin Multiplatform</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1.5 hover:border-android-green/40 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-android-green" />
                <span>Clean Architecture</span>
              </span>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed font-normal"
            >
              Welcome to <strong className="text-white font-semibold">Android Club, VIT Bhopal</strong> — a student-powered technical collective dedicated to advancing modern mobile engineering, open-source AcWoC initiatives, and on-device intelligent computing.
            </motion.p>

            {/* Interactive Cyber Terminal Bento Box */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-[#090d0b]/90 border border-white/10 p-4 sm:p-5 shadow-card relative overflow-hidden group hover:border-android-green/40 transition-all max-w-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/50 to-transparent" />

              {/* Terminal Sub-Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`text-[11px] font-mono font-bold transition-colors ${
                      activeTab === 'quote' ? 'text-android-green' : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    // TELEMETRY
                  </button>
                  <button
                    onClick={() => setActiveTab('ecosystem')}
                    className={`text-[11px] font-mono font-bold transition-colors ${
                      activeTab === 'ecosystem' ? 'text-android-green' : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    // ECOSYSTEM
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`text-[11px] font-mono font-bold transition-colors ${
                      activeTab === 'stack' ? 'text-android-green' : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    // ARCHITECTURE
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
                  <span className="text-[10px] font-mono text-neutral-400">ACTIVE</span>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[50px] flex items-center">
                {activeTab === 'quote' && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 w-full"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-1.5">
                        <img
                          src="/Homepage_Assets/Homepage_HeroSection_Quotes.webp"
                          alt="Quotes"
                          className="w-full h-full object-contain opacity-90"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-mono text-android-green font-bold uppercase">
                          {quotes[quoteIndex].tag} • {quotes[quoteIndex].author}
                        </div>
                        <div className="text-xs text-neutral-200 font-medium mt-0.5 leading-snug">
                          "{quotes[quoteIndex].text}"
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {activeTab === 'ecosystem' && (
                  <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                    <span className="text-android-green font-bold">&gt; ANDROID OS:</span> Powers 71.8% of global smartphones across 3.3 Billion+ active devices. Our club equips students with native skills recognized worldwide.
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                    <span className="text-android-green font-bold">&gt; CORE STACK:</span> Kotlin 2.0 • Jetpack Compose • Coroutines Flow • KMP • Room DB • On-Device Gemini Nano AI inference models.
                  </div>
                )}
              </div>
            </motion.div>

            {/* CTA Buttons Row - Zero Apply / Register Friction */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3.5 rounded-2xl bg-android-green hover:bg-android-accent text-black font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-neon flex items-center gap-2 active:scale-95 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Join WhatsApp Community</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                onClick={handleScrollToExplore}
                className="px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-android-green/50 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 hover:bg-white/[0.08] group"
              >
                <span>Explore Ecosystem</span>
                <ArrowDown className="w-4 h-4 text-android-green group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/androidclubvitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-android-green/50 text-neutral-300 hover:text-white transition-colors"
                title="View GitHub Organization"
              >
                <Globe className="w-4 h-4 text-android-green" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Android Spline Mascot in Cyber Pedestal (5 Cols) */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Themed Pedestal Frame */}
            <div className="w-full relative flex items-center justify-center">
              
              {/* Concentric Cyber Base Rings */}
              <div className="absolute -bottom-6 w-72 sm:w-96 h-20 rounded-[100%] border border-android-green/30 bg-android-green/5 blur-[2px] pointer-events-none" />
              <div className="absolute -bottom-8 w-60 sm:w-80 h-16 rounded-[100%] border border-emerald-400/20 pointer-events-none" />

              {/* 3D Spline Scene Viewport */}
              <SplineScene />

            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            2. HUD METRICS STATS BAR (Designed Identical to Event Section Stats Bar)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-border/50 to-teal-500/20 shadow-card"
        >
          <div className="rounded-[15px] bg-[#0c0f0d]/90 backdrop-blur-xl border border-white/5 py-5 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-android-green text-xs font-semibold mb-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>FOUNDED</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                2017
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">By Abhay Nigam • VIT Bhopal</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1 font-mono">
                <Users className="w-3.5 h-3.5" />
                <span>BUILDERS</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                500<span className="text-android-green">+</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Active Student Engineers</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-yellow-400 text-xs font-semibold mb-1 font-mono">
                <Trophy className="w-3.5 h-3.5" />
                <span>INITIATIVES</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                25<span className="text-yellow-400">+</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Workshops, Camps &amp; Jams</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-semibold mb-1 font-mono">
                <Code2 className="w-3.5 h-3.5" />
                <span>SOFTWARE</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                12<span className="text-android-green">+</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Production Apps &amp; Repos</div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-8 flex flex-col items-center gap-1 pointer-events-none opacity-40">
        <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-1 h-3 rounded-full bg-android-green animate-bounce" />
      </div>
    </section>
  );
}
