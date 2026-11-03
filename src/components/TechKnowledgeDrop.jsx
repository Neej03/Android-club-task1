import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Terminal, Code2, Users, Flame } from 'lucide-react';

export default function TechKnowledgeDrop() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      category: 'membership',
      q: 'Do I need prior Android or programming experience to join?',
      answer:
        'Not at all! We welcome students from all experience levels, from complete beginners writing their first lines of code to experienced developers. We conduct regular hands-on bootcamps starting from fundamentals in Kotlin, Git workflows, and modern declarative UI with Jetpack Compose.',
      tag: 'PREREQUISITES'
    },
    {
      category: 'membership',
      q: 'Who can join the Android Club community at VIT Bhopal?',
      answer:
        'Any student enrolled at VIT Bhopal University across any branch (CSE, ECE, Mechanical, Aerospace, Bioengineering, Cyber Security, AI/ML, etc.) and any academic year can participate in our open workshops, hackathons, and community sprints.',
      tag: 'ELIGIBILITY'
    },
    {
      category: 'acwoc',
      q: 'What is AcWoC (Android Club\'s Winter of Code)?',
      answer:
        'AcWoC is our flagship month-long open-source program held during the winter break. Students from across India contribute to real-world repositories with one-on-one mentorship from senior club members, earning verified badges, certificates, and merchandise.',
      tag: 'OPEN SOURCE'
    },
    {
      category: 'events',
      q: 'How do I participate in Android Fusion and other hackathons?',
      answer:
        'We announce all hackathon tracks, problem statements, and schedules in our official WhatsApp announcement circle and social media handles. Teams of 2 to 4 students can collaborate on campus or virtually.',
      tag: 'HACKATHONS'
    },
    {
      category: 'tech',
      q: 'What technologies does the club primarily focus on?',
      answer:
        'Our core focus is modern Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), Android Architecture Components, on-device Edge AI with Gemini Nano & TensorFlow Lite, and collaborative GitFlow practices.',
      tag: 'TECH STACK'
    },
    {
      category: 'membership',
      q: 'How can I stay updated with upcoming events and announcements?',
      answer:
        'Join our official WhatsApp Community and follow our Instagram handle (@androidclub.vitb) where we post live registration alerts, workshop materials, and speaker announcements.',
      tag: 'COMMUNITY'
    }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="py-28 bg-gradient-to-b from-[#040604] via-[#07110a] to-[#040604] relative overflow-hidden text-text-primary selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-30 pointer-events-none" />

      {/* Top and Bottom Glowing Neon Light Horizon Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/45 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent pointer-events-none" />

      {/* Signature Rotating Cyber Portal Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] lg:w-[1050px] h-[650px] sm:h-[850px] lg:h-[1050px] pointer-events-none -z-0 opacity-[0.14] select-none">
        <img
          src="/Events_Page/HeroSection_BG.webp"
          alt="Cyber Portal Ring"
          className="w-full h-full object-contain animate-spin-slow select-none"
        />
        <div className="absolute inset-0 bg-radial-gradient from-android-green/12 via-transparent to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Volumetric Dual Horizon Light Halos */}
      <div className="absolute top-1/4 -left-20 w-[650px] h-[450px] bg-gradient-to-tr from-android-green/14 via-emerald-600/5 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[550px] h-[450px] bg-gradient-to-bl from-teal-500/12 via-emerald-950/20 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Animated Micro-Circuit Pulsing Beacons */}
      <div className="absolute top-28 left-1/5 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-80" />
      <div className="absolute bottom-36 right-1/6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none opacity-75" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-70" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(61,220,132,0.15)] font-mono"
          >
            <HelpCircle className="w-3.5 h-3.5 animate-pulse" />
            <span>Common Inquiries &amp; Knowledge</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-[1.1]"
          >
            EVERYTHING YOU{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_25px_rgba(61,220,132,0.35)]">
              NEED TO KNOW.
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal"
          >
            Frequently asked questions about community involvement, technical prerequisites, and signature initiatives at VIT Bhopal.
          </motion.p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Queries' },
            { id: 'membership', label: 'Joining & Eligibility' },
            { id: 'acwoc', label: 'AcWoC Open Source' },
            { id: 'events', label: 'Hackathons & Jams' },
            { id: 'tech', label: 'Tech Stack & Stacks' }
          ].map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border font-mono ${
                  isSelected
                    ? 'bg-android-green/15 text-android-green border-android-green/50 shadow-inner-glow'
                    : 'bg-white/[0.02] text-neutral-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3.5 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.q}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0c100d] border-android-green/40 shadow-card'
                      : 'bg-[#090c0a]/80 border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs text-android-green font-bold shrink-0">
                        0{index + 1} //
                      </span>
                      <div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-0.5">
                          {item.tag}
                        </div>
                        <span className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                          {item.q}
                        </span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-android-green/10 border-android-green/40' : ''}`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-colors ${isOpen ? 'text-android-green' : 'text-neutral-400'}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5"
                      >
                        <p className="border-l-2 border-android-green/40 pl-3.5 py-1">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still Have Questions Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-bg-card to-teal-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white font-display">Have a specific question not covered here?</div>
            <div className="text-xs text-neutral-400 mt-0.5">Reach out to our core team directly via WhatsApp.</div>
          </div>
          <a
            href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-android-green text-black font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:bg-android-accent transition-colors shrink-0 shadow-neon"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
