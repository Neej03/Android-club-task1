import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Navigation,
  QrCode,
  ShieldCheck,
  Wifi,
  Battery,
  Signal,
  MapPin,
  CheckCircle2,
  Lock,
  Play,
  Check,
  ChevronLeft,
  User,
  GitPullRequest,
  MessageCircle,
  Terminal,
  Search,
  Sparkles,
  Fingerprint,
  Code2,
  Calendar,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import logoImg from '../assets/logo.png';

export default function InteractivePhoneExperience() {
  const [activeApp, setActiveApp] = useState('home'); // 'home' | 'campus' | 'acwoc' | 'pulsesync' | 'droidvault' | 'kotlin' | 'chat'
  
  // Interactive App States
  const [ticketCheckedIn, setTicketCheckedIn] = useState(false);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [codeOutput, setCodeOutput] = useState('');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [claimedIssue, setClaimedIssue] = useState(false);
  const [activeTabCampus, setActiveTabCampus] = useState('classes');

  // Android Wallpaper State (Default: Official Android Bugdroid Mascot)
  const wallpapers = [
    {
      id: 'logo',
      name: 'Classic Bugdroid',
      image: logoImg,
      glow: 'from-android-green/35 via-teal-500/15 to-transparent',
    },
    {
      id: 'bot1',
      name: 'Cyber 3D Bugdroid',
      image: '/RecruitmentsPage_Assets/BG_Bot1.webp',
      glow: 'from-android-green/30 via-emerald-600/10 to-transparent',
    },
    {
      id: 'bot2',
      name: 'Edge AI Droid',
      image: '/RecruitmentsPage_Assets/BG_Bot2.webp',
      glow: 'from-cyan-400/30 via-emerald-500/10 to-transparent',
    }
  ];
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);
  const currentWallpaper = wallpapers[currentWallpaperIndex];

  const cycleWallpaper = (e) => {
    if (e) e.stopPropagation();
    setCurrentWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
    triggerSmallConfetti();
  };

  // Trigger confetti for interactive actions
  const triggerSmallConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#3DDC84', '#8AFFB7', '#FFFFFF'],
      disableForReducedMotion: true,
    });
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput('Compiling with Kotlin 2.0...');
    setTimeout(() => {
      setIsRunningCode(false);
      setCodeOutput('>>> [SUCCESS] Hello VIT Bhopal! Android Club 2026 is live.');
      triggerSmallConfetti();
    }, 700);
  };

  const handleCheckInTicket = () => {
    setTicketCheckedIn(true);
    triggerSmallConfetti();
  };

  const handleClaimIssue = () => {
    setClaimedIssue(true);
    triggerSmallConfetti();
  };

  const appIcons = [
    {
      id: 'campus',
      name: 'Campus',
      icon: Navigation,
      gradient: 'from-emerald-500 to-green-700',
      badge: 'Live',
    },
    {
      id: 'acwoc',
      name: 'AcWoC',
      icon: GitPullRequest,
      gradient: 'from-cyan-500 to-blue-700',
      badge: '2026',
    },
    {
      id: 'pulsesync',
      name: 'Events',
      icon: QrCode,
      gradient: 'from-purple-500 to-indigo-700',
      badge: 'Pass',
    },
    {
      id: 'droidvault',
      name: 'Vault',
      icon: ShieldCheck,
      gradient: 'from-emerald-600 to-teal-800',
      badge: 'Secure',
    },
    {
      id: 'kotlin',
      name: 'Kotlin Play',
      icon: Code2,
      gradient: 'from-amber-500 to-orange-700',
      badge: 'IDE',
    },
    {
      id: 'chat',
      name: 'Community',
      icon: MessageCircle,
      gradient: 'from-green-500 to-emerald-700',
      badge: 'Chat',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Realistic Mobile Device Frame */}
      <div className="relative w-[305px] sm:w-[325px] h-[585px] bg-[#0c0f0d] rounded-[48px] p-3 border-[3px] border-[#222924] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(61,220,132,0.18)] select-none">
        
        {/* Physical hardware volume buttons (Left) */}
        <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-neutral-700 rounded-l-md" />
        <div className="absolute -left-[5px] top-42 w-[3px] h-10 bg-neutral-700 rounded-l-md" />

        {/* Physical power button with green accent dot (Right) */}
        <div className="absolute -right-[5px] top-32 w-[3px] h-12 bg-neutral-700 rounded-r-md flex items-center justify-center">
          <div className="w-[1.5px] h-3 bg-android-green rounded-full" />
        </div>

        {/* Screen Display Container */}
        <div className="w-full h-full bg-[#030604] rounded-[38px] overflow-hidden flex flex-col justify-between border border-white/5 relative">
          
          {/* ================= ANDROID OS WALLPAPER LAYER ================= */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
            {/* Deep Cyber Android Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06140b] via-[#040905] to-[#020402]" />

            {/* Glowing Android Green Radial Aura */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-android-green/30 blur-3xl rounded-full" />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-emerald-400/20 blur-2xl rounded-full" />

            {/* Subtle Android Grid & Geometric Mesh */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3ddc84_1.2px,transparent_1.2px)] [background-size:16px_16px]" />

            {/* Featured Official Android Mascot Character Wallpaper */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center">
              {/* Pulsing neon halo rings around Android */}
              <div className="absolute inset-2 rounded-full border border-android-green/35 animate-pulse shadow-[0_0_25px_rgba(61,220,132,0.4)]" />
              <div className="absolute -inset-1 rounded-full border border-android-green/20 border-dashed animate-spin-slow" />
              
              <img
                key={currentWallpaper.id}
                src={currentWallpaper.image}
                alt="Android Wallpaper"
                className="w-40 h-40 object-contain filter drop-shadow-[0_0_30px_rgba(61,220,132,0.8)] animate-float-slow transition-all duration-500"
              />
            </div>

            {/* Signature "android" Branding Watermark at bottom */}
            <div className="absolute bottom-20 left-0 right-0 text-center">
              <span className="text-[11px] font-mono tracking-[0.38em] uppercase text-android-green/60 font-extrabold drop-shadow-[0_0_10px_rgba(61,220,132,0.5)]">
                android
              </span>
            </div>

            {/* Subtle vignette so clock, app labels & search bar remain 100% crisp & readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />
          </div>

          {/* Top Status Bar & Center Punch-Hole Camera */}
          <div className="pt-2 px-5 flex items-center justify-between text-[11px] text-white/90 z-40 bg-transparent relative">
            <span className="font-semibold tracking-tight">09:41</span>
            
            {/* Center Front Camera Punch-hole */}
            <div className="w-4 h-4 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-300">
              <Signal className="w-3 h-3 text-white/90" />
              <Wifi className="w-3 h-3 text-white/90" />
              <div className="flex items-center gap-0.5">
                <span className="text-[9px] font-bold">96%</span>
                <Battery className="w-3.5 h-3.5 text-android-green" />
              </div>
            </div>
          </div>

          {/* SCREEN CONTENT AREA (HOME or ACTIVE APP) */}
          <div className="flex-1 overflow-hidden relative flex flex-col z-10">
            <AnimatePresence mode="wait">
              {activeApp === 'home' ? (
                /* ================= HOME LAUNCHER SCREEN ================= */
                <motion.div
                  key="home-screen"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22 }}
                  className="p-4 flex-1 flex flex-col justify-between relative"
                >
                  {/* Top Clock & Weather Widget */}
                  <div className="mt-2 text-center space-y-1">
                    <div className="text-4xl font-extrabold font-display tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      09:41
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[11px] text-neutral-200 shadow-sm">
                      <Sparkles className="w-3 h-3 text-android-green" />
                      <span>Tuesday, Nov 3 • VIT Bhopal 24°C</span>
                    </div>
                  </div>

                  {/* App Grid (6 Applications) */}
                  <div className="my-auto pt-3">
                    <div className="grid grid-cols-3 gap-y-4 gap-x-2 text-center">
                      {appIcons.map((app) => {
                        const Icon = app.icon;
                        return (
                          <motion.button
                            key={app.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => setActiveApp(app.id)}
                            className="flex flex-col items-center group focus:outline-none"
                          >
                            <div className="relative">
                              <div
                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.gradient} p-0.5 shadow-md flex items-center justify-center text-white transition-all duration-200 group-hover:shadow-[0_0_15px_rgba(61,220,132,0.5)]`}
                              >
                                <div className="w-full h-full bg-black/25 rounded-[14px] flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                              </div>
                              {app.badge && (
                                <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[8px] font-bold bg-android-green text-black shadow-sm">
                                  {app.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] group-hover:text-android-green mt-1.5 truncate max-w-[70px] transition-colors">
                              {app.name}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Search Bar Widget & Bottom Favorites Dock */}
                  <div className="space-y-3">
                    {/* Search Bar with Tap-to-Change Wallpaper */}
                    <div className="w-full py-2 px-3.5 rounded-full bg-black/45 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs text-text-muted shadow-sm">
                      <div className="flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-android-green" />
                        <span className="text-[11px] text-neutral-300">Search apps or campus...</span>
                      </div>
                      <button
                        onClick={cycleWallpaper}
                        title="Click to change Android wallpaper"
                        className="hover:scale-110 active:scale-90 transition-transform p-0.5 rounded-full hover:bg-white/10"
                      >
                        <img src={logoImg} alt="Switch Wallpaper" className="w-3.5 h-3.5 object-contain filter drop-shadow-[0_0_5px_rgba(61,220,132,0.8)]" />
                      </button>
                    </div>

                    {/* Bottom App Dock */}
                    <div className="p-2 rounded-2xl bg-black/45 border border-white/10 backdrop-blur-md flex items-center justify-around shadow-sm">
                      <button
                        onClick={() => setActiveApp('campus')}
                        className="w-10 h-10 rounded-xl bg-emerald-600/35 border border-emerald-500/35 flex items-center justify-center text-emerald-400 hover:scale-105 active:scale-90 transition-transform shadow-inner"
                        title="Campus"
                      >
                        <Navigation className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveApp('acwoc')}
                        className="w-10 h-10 rounded-xl bg-cyan-600/35 border border-cyan-500/35 flex items-center justify-center text-cyan-400 hover:scale-105 active:scale-90 transition-transform shadow-inner"
                        title="AcWoC"
                      >
                        <GitPullRequest className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveApp('pulsesync')}
                        className="w-10 h-10 rounded-xl bg-purple-600/35 border border-purple-500/35 flex items-center justify-center text-purple-400 hover:scale-105 active:scale-90 transition-transform shadow-inner"
                        title="Events"
                      >
                        <QrCode className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveApp('droidvault')}
                        className="w-10 h-10 rounded-xl bg-teal-600/35 border border-teal-500/35 flex items-center justify-center text-teal-400 hover:scale-105 active:scale-90 transition-transform shadow-inner"
                        title="Vault"
                      >
                        <ShieldCheck className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ================= ACTIVE APP VIEW ================= */
                <motion.div
                  key={activeApp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col justify-between overflow-y-auto bg-[#090e0b]/95 backdrop-blur-xl z-20 relative"
                >
                  {/* Top App Header with Back to Home button */}
                  <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between bg-bg-card/90 sticky top-0 z-20 backdrop-blur-md">
                    <button
                      onClick={() => setActiveApp('home')}
                      className="flex items-center gap-1 text-xs text-text-secondary hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-android-green" />
                      <span className="font-medium">Home</span>
                    </button>
                    
                    <span className="text-xs font-bold font-display text-white capitalize">
                      {activeApp === 'campus' && 'Campus Companion'}
                      {activeApp === 'acwoc' && 'AcWoC 2026'}
                      {activeApp === 'pulsesync' && 'PulseSync Tickets'}
                      {activeApp === 'droidvault' && 'DroidVault'}
                      {activeApp === 'kotlin' && 'Kotlin Playground'}
                      {activeApp === 'chat' && 'Android Club Chat'}
                    </span>

                    <button
                      onClick={() => setActiveApp('home')}
                      className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white"
                      title="Close App"
                    >
                      <span className="text-xs leading-none">×</span>
                    </button>
                  </div>

                  {/* SPECIFIC APP CONTENT */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between text-xs space-y-3">
                    
                    {/* APP 1: CAMPUS COMPANION */}
                    {activeApp === 'campus' && (
                      <div className="space-y-3">
                        {/* Tab Switcher inside Campus App */}
                        <div className="flex gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                          <button
                            onClick={() => setActiveTabCampus('classes')}
                            className={`flex-1 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                              activeTabCampus === 'classes' ? 'bg-android-green text-black' : 'text-text-muted hover:text-white'
                            }`}
                          >
                            Schedule
                          </button>
                          <button
                            onClick={() => setActiveTabCampus('map')}
                            className={`flex-1 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                              activeTabCampus === 'map' ? 'bg-android-green text-black' : 'text-text-muted hover:text-white'
                            }`}
                          >
                            Campus Map
                          </button>
                        </div>

                        {activeTabCampus === 'classes' ? (
                          <>
                            {/* Live Next Class Card */}
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-bg-card border border-android-green/30 space-y-1.5 shadow-sm">
                              <div className="flex items-center justify-between text-[10px] text-android-green font-semibold">
                                <span>NEXT UP (IN 20 MIN)</span>
                                <span className="px-1.5 py-0.5 rounded bg-android-green/20">Lab 304</span>
                              </div>
                              <div className="text-sm font-bold text-white">Mobile Architecture (Kotlin)</div>
                              <div className="flex items-center gap-1 text-[11px] text-text-muted">
                                <MapPin className="w-3 h-3 text-android-green" />
                                <span>Academic Block 3 • Ground Floor</span>
                              </div>
                            </div>

                            {/* Timetable List */}
                            <div className="space-y-1.5">
                              <div className="text-[10px] uppercase font-bold text-text-muted">Today's Timeline</div>
                              <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                                <div>
                                  <div className="font-semibold text-white">UI/UX Studio Jam</div>
                                  <div className="text-[10px] text-text-muted">01:30 PM • Studio 102</div>
                                </div>
                                <span className="px-2 py-0.5 rounded text-[9px] bg-white/10 text-text-secondary">Later</span>
                              </div>
                              <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                                <div>
                                  <div className="font-semibold text-white">Android Club Hack Sprint</div>
                                  <div className="text-[10px] text-text-muted">04:30 PM • Auditorium</div>
                                </div>
                                <span className="px-2 py-0.5 rounded text-[9px] bg-android-green/20 text-android-green font-bold">Event</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                            <MapPin className="w-8 h-8 text-android-green mx-auto" />
                            <div className="font-bold text-white">VIT Bhopal Campus Navigator</div>
                            <p className="text-[10px] text-text-muted">
                              Interactive indoor routing for AB-1, AB-2, AB-3, Innovation Lab &amp; Auditorium.
                            </p>
                            <div className="p-2 rounded-lg bg-black/40 text-[10px] text-android-accent">
                              📍 You are at: AB-3 Entrance Plaza
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* APP 2: AcWoC 2026 */}
                    {activeApp === 'acwoc' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-bg-card border border-cyan-500/30 space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold">
                            <span>WINTER OF CODE 2026</span>
                            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20">450+ PRs</span>
                          </div>
                          <div className="text-sm font-bold text-white">Issue #104: Jetpack Compose Navigation</div>
                          <p className="text-[10px] text-text-muted">
                            Implement nested nav graphs in campus mobile guide.
                          </p>
                          <button
                            onClick={handleClaimIssue}
                            disabled={claimedIssue}
                            className={`w-full py-1.5 rounded-xl font-semibold text-[11px] transition-all flex items-center justify-center gap-1.5 ${
                              claimedIssue
                                ? 'bg-android-green text-black font-bold'
                                : 'bg-cyan-500 hover:bg-cyan-400 text-black'
                            }`}
                          >
                            {claimedIssue ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Issue Claimed by You!</span>
                              </>
                            ) : (
                              <span>Claim Issue (Tap to Test)</span>
                            )}
                          </button>
                        </div>

                        {/* Top Contributors Leaderboard with Real Photos */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] uppercase font-bold text-text-muted">Top Contributors</div>
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img src="/Homepage_Assets/profile-pictures/Giriraj.webp" alt="Giriraj" className="w-6 h-6 rounded-full object-cover" />
                              <span className="font-semibold text-white">Giriraj</span>
                            </div>
                            <span className="text-[10px] text-android-green font-bold">24 PRs</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img src="/Homepage_Assets/profile-pictures/Avyaan.webp" alt="Avyaan" className="w-6 h-6 rounded-full object-cover" />
                              <span className="font-semibold text-white">Avyaan</span>
                            </div>
                            <span className="text-[10px] text-android-green font-bold">19 PRs</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* APP 3: PULSESYNC (HACKATHON TICKETS) */}
                    {activeApp === 'pulsesync' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/60 to-bg-card border border-purple-500/30 text-center space-y-2">
                          <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                            OFFICIAL EVENT PASS
                          </div>
                          <div className="text-base font-bold font-display text-white">
                            Android Fusion 3.0
                          </div>
                          <div className="text-[10px] text-text-muted">
                            Pass ID: #AF-2026-88 • VIP Delegate
                          </div>

                          {/* QR Code Graphic Box */}
                          <div className="w-24 h-24 mx-auto rounded-xl bg-white p-2 flex items-center justify-center shadow-inner">
                            <QrCode className="w-20 h-20 text-black" />
                          </div>

                          <button
                            onClick={handleCheckInTicket}
                            disabled={ticketCheckedIn}
                            className={`w-full py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                              ticketCheckedIn
                                ? 'bg-android-green text-black'
                                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-neon'
                            }`}
                          >
                            {ticketCheckedIn ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-black" />
                                <span>Checked-in at Gate 2!</span>
                              </>
                            ) : (
                              <span>Tap to Check In</span>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* APP 4: DROIDVAULT */}
                    {activeApp === 'droidvault' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-2xl bg-bg-card border border-border text-center space-y-2.5">
                          <ShieldCheck className="w-8 h-8 text-android-green mx-auto" />
                          <div className="text-sm font-bold text-white">Biometric Keystore</div>
                          <p className="text-[10px] text-text-muted leading-relaxed">
                            Hardware backed AES-256 GCM encryption for student credentials.
                          </p>

                          {!vaultUnlocked ? (
                            <button
                              onClick={() => {
                                setVaultUnlocked(true);
                                triggerSmallConfetti();
                              }}
                              className="w-full py-2.5 rounded-xl bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-bold flex items-center justify-center gap-2 hover:bg-emerald-600/40"
                            >
                              <Fingerprint className="w-4 h-4 text-android-green animate-pulse" />
                              <span>Touch Fingerprint to Unlock</span>
                            </button>
                          ) : (
                            <div className="space-y-1.5 text-left border-t border-white/10 pt-2">
                              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                                <span className="text-text-muted block">Student ID Token:</span>
                                <span className="font-mono text-android-green">VITB-2026-TOKEN-OK</span>
                              </div>
                              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                                <span className="text-text-muted block">Campus Wi-Fi Key:</span>
                                <span className="font-mono text-white">•••••••••••• (Active)</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* APP 5: KOTLIN PLAYGROUND */}
                    {activeApp === 'kotlin' && (
                      <div className="space-y-2.5">
                        <div className="p-2.5 rounded-xl bg-black border border-white/10 font-mono text-[10px] text-neutral-300 space-y-1">
                          <div className="text-neutral-500">Kotlin 2.0 Playground</div>
                          <div className="text-purple-400">fun <span className="text-yellow-300">main</span>() &#123;</div>
                          <div className="pl-3 text-cyan-300">val club = <span className="text-green-300">"Android Club"</span></div>
                          <div className="pl-3 text-yellow-300">println(<span className="text-green-300">"Hello VIT Bhopal!"</span>)</div>
                          <div className="text-purple-400">&#125;</div>
                        </div>

                        <button
                          onClick={handleRunCode}
                          disabled={isRunningCode}
                          className="w-full py-2 rounded-xl bg-android-green text-black font-bold text-xs hover:bg-android-accent transition-colors flex items-center justify-center gap-1.5 shadow-neon"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span>{isRunningCode ? 'Running...' : 'Execute Kotlin Code'}</span>
                        </button>

                        {codeOutput && (
                          <div className="p-2 rounded-lg bg-neutral-900 border border-android-green/40 text-[10px] font-mono text-android-green">
                            {codeOutput}
                          </div>
                        )}
                      </div>
                    )}

                    {/* APP 6: COMMUNITY CHAT */}
                    {activeApp === 'chat' && (
                      <div className="space-y-2 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                            <div className="text-[10px] font-bold text-android-green">Abhay (Founder)</div>
                            <div className="text-[11px] text-white">"Welcome newcomers to Android Club! If it's Android, it's Us."</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                            <div className="text-[10px] font-bold text-cyan-400">Technical Lead</div>
                            <div className="text-[11px] text-white">"AcWoC 2026 issue PRs are open! Check your repos."</div>
                          </div>
                        </div>

                        <a
                          href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Open Live WhatsApp Group</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Android Bottom Navigation Gesture Bar (Tap to go Home) */}
          <div className="py-2.5 flex flex-col items-center justify-center bg-transparent z-40">
            <button
              onClick={() => setActiveApp('home')}
              className="w-24 h-1.5 rounded-full bg-white/30 hover:bg-android-green transition-all duration-200 cursor-pointer active:scale-95"
              title="Tap or swipe to return Home"
            />
          </div>

        </div>
      </div>

      {/* Interactive Helper Text */}
      <div className="mt-3.5 text-xs text-text-muted flex items-center gap-1.5 text-center">
        <Sparkles className="w-3.5 h-3.5 text-android-green shrink-0" />
        <span>
          {activeApp === 'home'
            ? 'Tap any application above to test student-built mobile software'
            : 'Tap bottom line or "Home" to return to app grid'}
        </span>
      </div>
    </div>
  );
}
