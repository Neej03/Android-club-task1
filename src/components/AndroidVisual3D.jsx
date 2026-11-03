import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Code2, Zap } from 'lucide-react';

export default function AndroidVisual3D() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  // Smooth mouse movement tracking for 3D tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Blinking eyes animation trigger
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4500);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleBotClick = () => {
    setPulseCount((prev) => prev + 1);
  };

  const tiltX = -mousePos.y * 14;
  const tiltY = mousePos.x * 18;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] h-[480px] sm:h-[540px] flex items-center justify-center select-none perspective-1000"
      style={{ perspective: '1200px' }}
    >
      {/* Background ambient neon radial glows */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-android-green/15 blur-[90px] pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[220px] h-[220px] rounded-full bg-android-accent/10 blur-[60px] pointer-events-none -top-10 -right-8" />

      {/* Orbiting Tech Rings */}
      <div 
        className="absolute inset-4 rounded-full border border-android-green/15 pointer-events-none animate-[spin_40s_linear_infinite]"
        style={{
          borderStyle: 'dashed',
          borderWidth: '1px'
        }}
      />
      <div 
        className="absolute inset-16 rounded-full border border-android-green/20 pointer-events-none animate-[spin_25s_linear_infinite_reverse]"
        style={{
          borderStyle: 'dotted',
          borderWidth: '2px'
        }}
      />

      {/* Interactive 3D Holographic Card & Android Bot */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer"
        animate={{
          rotateX: tiltX,
          rotateY: tiltY,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onClick={handleBotClick}
      >
        {/* Holographic Platform Base */}
        <div className="absolute bottom-10 w-64 h-16 rounded-[100%] bg-android-green/10 border border-android-green/30 blur-[2px] shadow-[0_0_35px_rgba(61,220,132,0.3)] transform -rotate-x-60" />
        <div className="absolute bottom-11 w-48 h-10 rounded-[100%] border border-android-green/50 animate-ping opacity-25" />

        {/* The Futuristic Android Bot (Bugdroid) SVG */}
        <div className="relative z-20 flex flex-col items-center">
          
          {/* Antennae */}
          <div className="flex justify-between w-28 px-4 -mb-1 relative z-10">
            <motion.div
              className="w-1.5 h-10 rounded-full bg-gradient-to-t from-android-green to-android-accent shadow-[0_0_10px_#3DDC84]"
              style={{ transformOrigin: 'bottom center', rotate: '-28deg' }}
              animate={{ rotate: isHovered ? -35 : -28 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.div
              className="w-1.5 h-10 rounded-full bg-gradient-to-t from-android-green to-android-accent shadow-[0_0_10px_#3DDC84]"
              style={{ transformOrigin: 'bottom center', rotate: '28deg' }}
              animate={{ rotate: isHovered ? 35 : 28 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>

          {/* Android Head (Hemisphere) */}
          <div className="relative w-44 h-22 pt-2 bg-gradient-to-b from-[#46e88e] to-[#29b867] rounded-t-full shadow-[0_0_30px_rgba(61,220,132,0.45)] border-t border-x border-[#8affb7]/60 flex items-center justify-center overflow-hidden">
            {/* Tech Circuit line pattern across head */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
            <div className="absolute top-2 w-32 h-[1px] bg-white/40" />

            {/* Glowing Cyber Eyes */}
            <div className="flex justify-between w-28 px-6 pt-5 relative z-10">
              <motion.div
                className={`w-4 h-4 rounded-full bg-black shadow-[0_0_12px_#ffffff] transition-all duration-150 flex items-center justify-center ${
                  isBlinking ? 'h-0.5 mt-2 bg-white' : ''
                }`}
              >
                {!isBlinking && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </motion.div>
              <motion.div
                className={`w-4 h-4 rounded-full bg-black shadow-[0_0_12px_#ffffff] transition-all duration-150 flex items-center justify-center ${
                  isBlinking ? 'h-0.5 mt-2 bg-white' : ''
                }`}
              >
                {!isBlinking && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </motion.div>
            </div>
          </div>

          {/* Neck Gap with Neon Beam */}
          <div className="w-36 h-2 bg-black flex items-center justify-center my-0.5 relative">
            <div className="w-24 h-1 bg-android-accent/80 rounded-full shadow-[0_0_10px_#8AFFB7]" />
          </div>

          {/* Android Body & Core */}
          <div className="relative w-44 h-36 bg-gradient-to-b from-[#35c977] via-[#249e56] to-[#12582e] rounded-b-3xl border-b border-x border-android-green/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center p-3 overflow-hidden">
            {/* Cyber Circuit overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15" />
            
            {/* Holographic Glowing Core Reactor */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/60 border border-android-accent/50 p-1 flex flex-col items-center justify-center shadow-[inset_0_0_15px_rgba(61,220,132,0.4)]">
              <Cpu className="w-7 h-7 text-android-green animate-pulse" />
              <span className="text-[8px] font-mono font-bold text-android-accent mt-0.5 tracking-wider">
                VITB.v2
              </span>
            </div>

            {/* Micro Tech HUD Telemetry inside body */}
            <div className="w-full flex justify-between px-3 mt-2 text-[9px] font-mono text-android-accent/80">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />
                ONLINE
              </span>
              <span>KOTLIN 2.0</span>
            </div>
          </div>
        </div>

        {/* Orbiting Satellite Badges */}
        <motion.div
          className="absolute -top-4 -left-2 sm:-left-6 glass-card px-3 py-2 rounded-xl flex items-center gap-2 border border-android-green/30 shadow-neon"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="p-1 rounded-lg bg-android-green/20 text-android-green">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">Jetpack Compose</div>
            <div className="text-[9px] text-text-secondary">Declarative UI</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-4 sm:-right-8 glass-card px-3 py-2 rounded-xl flex items-center gap-2 border border-android-green/30 shadow-neon"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="p-1 rounded-lg bg-android-accent/20 text-android-accent">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">Edge AI & Gemini</div>
            <div className="text-[9px] text-text-secondary">On-Device Models</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-3 sm:-left-4 glass-card px-3 py-2 rounded-xl flex items-center gap-2 border border-android-green/30 shadow-neon"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="p-1 rounded-lg bg-emerald-500/20 text-android-green">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">Android Studio</div>
            <div className="text-[9px] text-text-secondary">Official SDK</div>
          </div>
        </motion.div>

        {/* Interactive Click Pulse rings */}
        {pulseCount > 0 && (
          <motion.div
            key={pulseCount}
            initial={{ scale: 0.8, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute w-44 h-44 rounded-full border-2 border-android-green pointer-events-none"
          />
        )}
      </motion.div>

      {/* Interactive Helper Hint */}
      <div className="absolute -bottom-2 right-4 text-[10px] font-mono text-text-muted flex items-center gap-1.5 pointer-events-none opacity-70">
        <Zap className="w-3 h-3 text-android-green animate-pulse" />
        <span>Interact / Hover 3D</span>
      </div>
    </div>
  );
}

