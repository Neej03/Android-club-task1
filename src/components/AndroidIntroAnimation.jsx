import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function AndroidIntroAnimation({ onComplete }) {
  // Stages: 0: Boot signal, 1: Bugdroid assembly & eye blink, 2: Terminal sequence, 3: Logo reveal, 4: Exit portal
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [bootLogIndex, setBootLogIndex] = useState(0);

  const bootLogs = [
    'BOOTLOADER: ANDROID_CLUB_VITB [REV 2026.1]',
    'KERNEL: LINUX 6.6-ANDROID15-COMPOSE-LADYBUG',
    'MOUNTING DEV/CAMPUS_ENGINEERING (VIT BHOPAL)',
    'CONNECTING TO OPEN-SOURCE NODE: ACWOC 2026',
    'DISPATCHING JETPACK COMPOSE DECLARATIVE ENGINE',
    'SYSTEM STATUS: READY • IF IT\'S ANDROID, IT\'S US!'
  ];

  useEffect(() => {
    // Stage progression sequence
    const t1 = setTimeout(() => setStage(1), 600); // Bugdroid awakens
    const t2 = setTimeout(() => setStage(2), 1600); // Terminal log fast stream
    const t3 = setTimeout(() => setStage(3), 2600); // Logo & brand explosion
    const t4 = setTimeout(() => {
      setStage(4);
      setTimeout(() => onComplete?.(), 500);
    }, 3800); // Finish and reveal site

    // Keyboard skip listener (Escape or Space)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Smooth progress bar counter from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Step through terminal logs
  useEffect(() => {
    if (stage >= 1) {
      const logInterval = setInterval(() => {
        setBootLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
      }, 350);
      return () => clearInterval(logInterval);
    }
  }, [stage, bootLogs.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040604] text-white overflow-hidden select-none"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient Radial Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-android-green/15 blur-[140px] pointer-events-none"
      />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="absolute top-6 left-6 sm:left-10 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-android-green animate-ping" />
        <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
          INITIALIZING ANDROID ECOSYSTEM
        </span>
      </div>

      {/* Skip Button Top Right */}
      <button
        onClick={() => onComplete?.()}
        className="absolute top-6 right-6 sm:right-10 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-android-green/50 hover:bg-white/10 text-neutral-400 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 group cursor-pointer shadow-sm active:scale-95"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] text-neutral-500 font-sans">[ESC]</span>
        <ChevronRight className="w-3.5 h-3.5 text-android-green group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Center Stage: The Bugdroid Assembly & Awakening */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full px-6 text-center">
        
        {/* Animated Bugdroid Mascot */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center">
          
          {/* Concentric Sonar Pulse Rings */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              scale: [0.8, 1.5, 2.1],
              opacity: [0.6, 0.2, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeOut'
            }}
            className="absolute w-36 h-36 rounded-full border border-android-green/40 pointer-events-none"
          />

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              scale: [0.8, 1.7, 2.4],
              opacity: [0.5, 0.15, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 0.6,
              ease: 'easeOut'
            }}
            className="absolute w-36 h-36 rounded-full border border-emerald-400/25 pointer-events-none"
          />

          {/* Bugdroid SVG Character */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 25 }}
            animate={{
              scale: stage >= 3 ? 0.9 : 1,
              opacity: 1,
              y: stage >= 3 ? -10 : 0
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 22
            }}
            className="relative z-20 flex flex-col items-center"
          >
            <svg
              viewBox="0 0 200 140"
              className="w-36 h-28 sm:w-44 sm:h-36 drop-shadow-[0_0_25px_rgba(61,220,132,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Antennae */}
              <motion.line
                x1="62"
                y1="22"
                x2="78"
                y2="52"
                stroke="#3DDC84"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: -15, originX: '78px', originY: '52px' }}
                animate={{
                  pathLength: 1,
                  rotate: stage >= 1 ? [-15, -8, -18, -12] : -15
                }}
                transition={{
                  pathLength: { duration: 0.5 },
                  rotate: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                }}
              />
              <motion.line
                x1="138"
                y1="22"
                x2="122"
                y2="52"
                stroke="#3DDC84"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: 15, originX: '122px', originY: '52px' }}
                animate={{
                  pathLength: 1,
                  rotate: stage >= 1 ? [15, 8, 18, 12] : 15
                }}
                transition={{
                  pathLength: { duration: 0.5, delay: 0.1 },
                  rotate: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                }}
              />

              {/* Bugdroid Semi-Circular Head Dome */}
              <motion.path
                d="M 28,110 A 72,72 0 0,1 172,110 Z"
                fill="#3DDC84"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Laser Scan Beam across head */}
              <motion.line
                x1="30"
                y1="50"
                x2="170"
                y2="50"
                stroke="#8AFFB7"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={{
                  y: [45, 105, 45]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                opacity={0.7}
              />

              {/* Left Eye */}
              <motion.circle
                cx="68"
                cy="85"
                r="7"
                fill="#050505"
                initial={{ scale: 0 }}
                animate={{
                  scale: stage >= 1 ? [0, 1.2, 1, 0.1, 1] : 0
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.8, 1],
                  delay: 0.4
                }}
              />
              {/* Left Eye Glint */}
              {stage >= 1 && (
                <circle cx="70" cy="83" r="2" fill="#FFFFFF" opacity="0.9" />
              )}

              {/* Right Eye */}
              <motion.circle
                cx="132"
                cy="85"
                r="7"
                fill="#050505"
                initial={{ scale: 0 }}
                animate={{
                  scale: stage >= 1 ? [0, 1.2, 1, 0.1, 1] : 0
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.8, 1],
                  delay: 0.4
                }}
              />
              {/* Right Eye Glint */}
              {stage >= 1 && (
                <circle cx="134" cy="83" r="2" fill="#FFFFFF" opacity="0.9" />
              )}
            </svg>
          </motion.div>

          {/* Official Logo Accent Overlay at stage 3 */}
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
              >
                <div className="w-20 h-20 rounded-2xl bg-black/80 border border-android-green p-3 shadow-[0_0_35px_rgba(61,220,132,0.8)] backdrop-blur-md">
                  <img src={logoImg} alt="Android Club Logo" className="w-full h-full object-contain" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Brand Headline Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-1 mb-5"
        >
          <div className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white flex items-center justify-center gap-2">
            <span>ANDROID CLUB</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-android-green/10 text-android-green border border-android-green/30 font-bold">
              VIT BHOPAL
            </span>
          </div>

          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-xs sm:text-sm font-bold font-mono tracking-wider text-android-green uppercase"
          >
            "IF IT'S ANDROID, IT'S US!"
          </motion.div>
        </motion.div>

        {/* Dynamic Boot Sequence Progress Bar */}
        <div className="w-full max-w-xs space-y-2 mb-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-android-green">
              <Zap className="w-3 h-3 text-android-green" />
              INITIALIZING ENGINE
            </span>
            <span className="font-bold text-white">{progress}%</span>
          </div>

          {/* Glowing Track */}
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-android-green to-teal-300 shadow-[0_0_15px_rgba(61,220,132,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Live Terminal Log Streamer */}
        <div className="w-full max-w-sm h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={bootLogIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="text-[11px] font-mono text-neutral-400 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5"
            >
              <Terminal className="w-3 h-3 text-android-green shrink-0" />
              <span className="truncate">&gt; {bootLogs[bootLogIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Telemetry Stamp */}
      <div className="absolute bottom-6 flex items-center gap-3 text-[10px] font-mono text-neutral-500">
        <span>EST. 2017 • FOUNDED BY ABHAY NIGAM</span>
        <span>•</span>
        <span>KOTLIN MULTIPLATFORM &amp; COMPOSE</span>
        <span>•</span>
        <span className="text-android-green font-semibold">ALL SYSTEMS NOMINAL</span>
      </div>
    </motion.div>
  );
}

