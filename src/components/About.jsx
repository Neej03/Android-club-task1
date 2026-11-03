import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Compass,
  Sparkles,
  Check,
  Users,
  Award,
  Shield,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  Terminal,
  Cpu,
  GraduationCap
} from 'lucide-react';
import InteractivePhoneExperience from './InteractivePhoneExperience';

export default function About() {
  const [activeEra, setActiveEra] = useState('2026');
  const [activePillar, setActivePillar] = useState('mission');

  const timelineEras = [
    {
      year: '2017',
      title: 'Inception at VIT Bhopal',
      founder: 'Founded by Abhay Nigam',
      desc: 'Started as a small guild of mobile enthusiasts determined to learn Android beyond standard textbook coursework.',
      badge: 'GENESIS'
    },
    {
      year: '2020',
      title: 'Open Source Expansion',
      founder: 'Campus-wide Sprints',
      desc: 'Pioneered collegiate hackathons and launched active campus utilities during remote learning periods.',
      badge: 'GROWTH'
    },
    {
      year: '2023',
      title: 'AcWoC National Launch',
      founder: 'Winter of Code Flagship',
      desc: 'Scaled AcWoC into a premier open-source event connecting 1,200+ student contributors across universities.',
      badge: 'SCALE'
    },
    {
      year: '2026',
      title: 'Declarative & Edge AI Era',
      founder: '500+ Active Builders',
      desc: 'Leading modern Jetpack Compose development, on-device Gemini Nano inference, and national hackathon victories.',
      badge: 'PRESENT'
    }
  ];

  const pillars = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      tag: 'CORE MANDATE',
      headline: 'Empowering Builders to Create Real Impact',
      content:
        'Bridge the gap between college coursework and real-world software engineering through project-based learning, code sprints, and open-source contributions.',
      points: [
        'Learn by shipping production applications, not just watching slides',
        'Direct peer code reviews and architectural best practices',
        'Open-source ecosystem exposure and national hackathon mentorship'
      ]
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Compass,
      tag: 'FUTURE HORIZON',
      headline: 'A Home for Student Engineers at VIT Bhopal',
      content:
        'Cultivate a community of passionate builders who push the boundaries of mobile computing, cloud systems, and on-device intelligent computing.',
      points: [
        'Preparing students for national hackathons and collegiate competitions',
        'Incubating student MVPs and deploying applications to Google Play',
        'Pioneering modern tech stacks like Jetpack Compose and on-device Edge AI'
      ]
    },
    {
      id: 'culture',
      title: 'Club Culture',
      icon: Sparkles,
      tag: 'CULTURE DNA',
      headline: 'Genuine Production Code & Peer Ownership',
      content:
        'We value hands-on experience over passive theory. Every member learns Git workflows, clean MVVM/MVI architecture, and agile release lifecycles.',
      points: [
        'Open to passionate students from all engineering branches and years',
        'Cross-functional teams spanning engineering, UI/UX, and technical writing',
        'Active campus projects that students and faculty actually rely on daily'
      ]
    }
  ];

  const facultyMentors = [
    {
      name: 'Dr. Chandan Kumar Behera',
      role: 'Assistant Director – Students\' Welfare',
      badge: 'Advisory Mentor',
      image: '/AboutPage_Assets/ChandanSir.webp',
      desc: 'Supporting student-led technical initiatives, innovation, and campus community development across VIT Bhopal University.',
      expertise: 'Campus Welfare & Innovation'
    },
    {
      name: 'Dr. Adarsh Patel',
      role: 'Faculty Coordinator',
      badge: 'Faculty Coordinator',
      image: '/AboutPage_Assets/AdarshSir.webp',
      desc: 'Our dedicated Faculty Coordinator and trusted guide, providing continuous encouragement and academic support to the club.',
      expertise: 'Mobile Systems & Research'
    },
    {
      name: 'Dr. S. Ganesan',
      role: 'Co-Faculty Coordinator',
      badge: 'Co-Faculty Coordinator',
      image: '/AboutPage_Assets/GanesanSir_C.webp',
      desc: 'Guiding research-driven mobile application development, student hackathon projects, and scalable software design.',
      expertise: 'Software Engineering & AI'
    }
  ];

  const currentPillarData = pillars.find((p) => p.id === activePillar) || pillars[0];
  const currentEraData = timelineEras.find((e) => e.year === activeEra) || timelineEras[3];

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#050805] via-[#070e08] to-[#040604] relative overflow-hidden text-text-primary selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-30 pointer-events-none" />

      {/* Top & Bottom Ambient Light Horizon Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent pointer-events-none" />

      {/* Signature Holographic Android "A" Brand Sign Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] sm:w-[680px] lg:w-[800px] h-[500px] sm:h-[680px] lg:h-[800px] pointer-events-none opacity-[0.14] select-none animate-float-slow">
        <img
          src="/AboutPage_Assets/AboutsPage_A_Sign.webp"
          alt="Android Brand Hologram"
          className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(61,220,132,0.4)]"
        />
        <div className="absolute inset-0 bg-radial-gradient from-android-green/10 via-transparent to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Atmospheric Volumetric Ambient Glow Halos */}
      <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-gradient-to-br from-android-green/14 via-emerald-600/5 to-transparent blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-24 w-[550px] h-[550px] bg-gradient-to-tr from-teal-500/12 via-emerald-950/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] bg-android-green/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Ambient Micro-Circuit Pulsing Beacons */}
      <div className="absolute top-36 left-1/4 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-75" />
      <div className="absolute top-1/2 right-1/6 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#3DDC84] animate-pulse pointer-events-none opacity-80" />
      <div className="absolute bottom-40 left-1/5 w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-ping pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(61,220,132,0.15)] font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Identity, Heritage &amp; Vision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]"
          >
            MORE THAN JUST A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_25px_rgba(61,220,132,0.35)]">
              TECHNICAL CLUB.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            <span className="text-android-green font-medium">If it's Android, it's Us!</span> Founded in 2017 by Abhay Nigam at VIT Bhopal University, we are an engineering collective turning curiosity into production software.
          </motion.p>
        </div>

        {/* =========================================================================
            1. HERITAGE BLUEPRINT TIMELINE SLIDER (Distinctive Timeline Architecture)
           ========================================================================= */}
        <div className="mb-20 rounded-3xl bg-[#090d0b] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-card">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/50 to-transparent" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-android-green uppercase">
              <Calendar className="w-4 h-4 text-android-green" />
              <span>COMMUNITY EVOLUTION • 2017 &rarr; 2026</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              CLICK AN ERA TO EXPLORE THE JOURNEY
            </span>
          </div>

          {/* Timeline Eras Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {timelineEras.map((era) => {
              const isSelected = activeEra === era.year;
              return (
                <button
                  key={era.year}
                  onClick={() => setActiveEra(era.year)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-android-green/10 border-android-green text-white shadow-inner-glow'
                      : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl font-extrabold font-display">{era.year}</span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-android-green text-black' : 'bg-white/5 text-neutral-500'
                    }`}>
                      {era.badge}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate">{era.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Era Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEra}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="text-xs font-mono text-android-green font-bold">
                  // {currentEraData.founder}
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  {currentEraData.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                  {currentEraData.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
                <span className="text-xs font-mono text-neutral-400">VIT Bhopal University</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            2. SPLIT SECTION: Circuit Blueprint Pillars vs Interactive Device Lab
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Left Column: Circuit Blueprint Pillars (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-android-green uppercase tracking-widest font-bold">
                // ARCHITECTURAL FOUNDATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                Designed by Builders, for Builders
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                We organize our chapter around three steadfast engineering pillars that drive our campus workshops, code reviews, and national competitions.
              </p>
            </div>

            {/* Vertical Blueprint Pillar Selector */}
            <div className="space-y-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0c120e] border-android-green shadow-card'
                        : 'bg-[#090d0a]/80 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-android-green text-black' : 'bg-white/5 text-android-green border border-white/10'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-neutral-400 font-bold uppercase">{pillar.tag}</span>
                          <h4 className="text-base font-bold font-display text-white leading-snug">{pillar.title}</h4>
                        </div>
                      </div>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-android-green animate-ping' : 'bg-neutral-600'}`} />
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed pl-12">
                      {pillar.content}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-12 pt-3 mt-3 border-t border-white/10 space-y-1.5"
                      >
                        {pillar.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                            <Check className="w-3.5 h-3.5 text-android-green shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive Phone Device Test Rig (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Interactive Phone Simulator */}
            <InteractivePhoneExperience />
          </div>

        </div>

        {/* =========================================================================
            3. FACULTY & ADVISORY MENTORS (Horizontal Academic Deck Format)
           ========================================================================= */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-android-green uppercase tracking-wider mb-2 font-mono">
                <GraduationCap className="w-4 h-4 text-android-green" />
                <span>ACADEMIC BOARD &amp; ADVISORS</span>
              </div>
              <h4 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                Faculty Leadership &amp; Mentorship
              </h4>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              School of Computing Science &amp; Engineering (SCSE)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultyMentors.map((mentor, idx) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="rounded-3xl bg-[#090d0b] p-6 sm:p-7 border border-white/10 hover:border-android-green/50 transition-all flex flex-col justify-between group shadow-card hover:shadow-neon/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-bg-secondary border border-android-green/30 p-0.5 shadow-inner-glow shrink-0 group-hover:border-android-green transition-colors">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-android-green/10 border border-android-green/30 text-android-green uppercase font-mono">
                        {mentor.badge}
                      </span>
                      <h5 className="text-base font-bold font-display text-white mt-1 group-hover:text-android-green transition-colors">
                        {mentor.name}
                      </h5>
                    </div>
                  </div>

                  <div className="text-xs font-medium text-emerald-400 mb-1">
                    {mentor.role}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 mb-3">
                    Focus: <span className="text-neutral-300">{mentor.expertise}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed border-t border-white/10 pt-3">
                  {mentor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
