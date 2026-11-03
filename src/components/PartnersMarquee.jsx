import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

export default function PartnersMarquee() {
  const partners = [
    { name: 'Unstop', tag: 'Hackathon Partner' },
    { name: 'GiveMyCertificate', tag: 'Credential Partner' },
    { name: 'CodeChef', tag: 'Coding Partner' },
    { name: 'Coding Ninjas', tag: 'Learning Partner' },
    { name: 'Notion', tag: 'Productivity Partner' },
    { name: 'HackerEarth', tag: 'Challenge Platform' },
    { name: 'TechBairn', tag: 'Training Partner' },
    { name: '.XYZ Domains', tag: 'Domain Partner' },
    { name: 'Dainik Bhaskar', tag: 'Media Partner' },
    { name: 'Google Developers', tag: 'Ecosystem' },
  ];

  // Repeat items for seamless, continuous loop
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="w-full py-7 bg-gradient-to-r from-[#050806] via-[#08120a] to-[#050806] border-y border-android-green/20 overflow-hidden relative backdrop-blur-xl select-none">
      {/* Dynamic Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />

      {/* Top and Bottom Glowing Neon Horizon Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent pointer-events-none" />

      {/* Central Pulsing Volumetric Light Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-28 bg-android-green/12 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />

      {/* Ambient Pulsing Circuit Beacons */}
      <div className="absolute top-3 left-1/4 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-60" />
      <div className="absolute bottom-3 right-1/4 w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-ping pointer-events-none opacity-60" />

      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
            COLLABORATORS, SPONSORS &amp; ECOSYSTEM PARTNERS
          </span>
        </div>
        <span className="text-xs font-mono text-android-green font-semibold">
          VIT Bhopal Chapters
        </span>
      </div>

      {/* Smooth continuous moving ticker */}
      <motion.div
        className="flex w-max gap-4 select-none cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 24,
            ease: 'linear',
          },
        }}
      >
        {marqueeItems.map((p, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#0d120f]/80 border border-white/10 hover:border-android-green/50 hover:bg-[#121914] transition-all duration-200 group shrink-0 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-android-green group-hover:shadow-[0_0_8px_#3DDC84] transition-all" />
            <div className="text-left">
              <span className="text-sm font-bold font-display text-neutral-300 group-hover:text-white transition-colors block whitespace-nowrap">
                {p.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 block whitespace-nowrap">
                {p.tag}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
