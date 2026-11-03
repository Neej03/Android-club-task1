import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  Award,
  Terminal,
  X,
  Info,
  Bell,
  Code2,
  Layers,
  Compass
} from 'lucide-react';
import { eventsData, eventExperienceMoments } from '../data/events';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'Hackathon' | 'Hands-on Bootcamp' | 'Competitive Debugging' | 'Study Jam'
  const [cardExpandedTab, setCardExpandedTab] = useState({}); // { [eventId]: 'highlights' | 'tracks' | 'logistics' }
  const [selectedEventModal, setSelectedEventModal] = useState(null); // event object or null
  const [copiedId, setCopiedId] = useState(null);
  const [activeMomentIndex, setActiveMomentIndex] = useState(0);

  // Countdown timer for the upcoming flagship event (Android Fusion 3.0)
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 14,
    minutes: 36,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter events
  const statusFiltered = eventsData.filter((e) => e.status === activeTab);
  const currentList = selectedCategory === 'all'
    ? statusFiltered
    : statusFiltered.filter((e) => e.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const flagshipEvent = eventsData.find((e) => e.featured && e.status === 'upcoming');

  const handleCopyLink = (event) => {
    const url = `${window.location.origin}/#events`;
    navigator.clipboard?.writeText(url);
    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const getActiveCardSubTab = (id) => cardExpandedTab[id] || 'highlights';

  const setCardSubTab = (id, tab) => {
    setCardExpandedTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="events" className="py-28 bg-[#050505] relative overflow-hidden text-text-primary selection:bg-android-green selection:text-black">
      
      {/* Dynamic Cyber Grid & Rotating Portal Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-45 pointer-events-none" />
      <div className="absolute inset-0 tech-circuit-lines opacity-20 pointer-events-none" />

      {/* Top & Bottom Glowing Neon Horizon Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/45 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent pointer-events-none" />

      {/* Volumetric Radial Aura Halos */}
      <div className="absolute top-1/4 -right-24 w-[600px] h-[500px] bg-gradient-to-bl from-android-green/12 via-emerald-600/5 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-24 w-[550px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-emerald-950/20 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Signature Rotating Portal Circle from androidclub.tech */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] lg:w-[1050px] h-[650px] sm:h-[850px] lg:h-[1050px] pointer-events-none -z-0 opacity-25">
        <img
          src="/Events_Page/HeroSection_BG.webp"
          alt="Glowing Cyber Portal"
          className="w-full h-full object-contain animate-spin-slow select-none"
        />
        <div className="absolute inset-0 bg-radial-gradient from-android-green/10 via-transparent to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Micro-Circuit Pulsing Beacons */}
      <div className="absolute top-28 left-1/5 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-80" />
      <div className="absolute bottom-36 right-1/4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================================
            1. SECTION HERO HEADER
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(61,220,132,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Official Signature Gatherings</span>
            <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]"
          >
            WHERE CODE TURNS INTO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_25px_rgba(61,220,132,0.35)]">
              CULTURE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            From high-stakes 36-hour national hackathons to deep-dive Kotlin masterclasses, our events are engineered to turn curious minds into industry-ready builders.
          </motion.p>
        </div>

        {/* =========================================================================
            2. HUD METRICS STATS BAR (The "What Do The Numbers Say" Bar)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-border/50 to-teal-500/20"
        >
          <div className="rounded-[15px] bg-[#0c0f0d]/90 backdrop-blur-xl border border-white/5 py-5 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-android-green text-xs font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>EXPERIENCES</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                20+
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Signature Events Hosted</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-yellow-400 text-xs font-semibold mb-1">
                <Trophy className="w-3.5 h-3.5" />
                <span>HACKATHONS</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                10+
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">National Hack Sprints</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-semibold mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>ATTENDEES</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                4,200+
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Student Builders Reached</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>RECOGNITION</span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                ₹2.5L+
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">Grants & Swags Awarded</div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            3. FLAGSHIP SPOTLIGHT HERO (Android Fusion 3.0 Bento)
           ========================================================================= */}
        {flagshipEvent && activeTab === 'upcoming' && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-3xl p-[1.5px] bg-gradient-to-r from-android-green via-emerald-600/50 to-teal-500/40 relative overflow-hidden shadow-[0_0_50px_rgba(61,220,132,0.15)] group"
          >
            <div className="rounded-[23px] bg-[#090d0b] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Soft interior background illumination */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-android-green/10 blur-[130px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-teal-500/10 blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Date Stamp & Countdown Clock (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-r border-white/10 lg:pr-8">
                  {/* Event Ticket Date Badge */}
                  <div className="inline-flex items-center gap-3">
                    <div className="min-w-[70px] h-[70px] rounded-2xl bg-gradient-to-b from-[#131b15] via-[#090e0b] to-[#040605] border border-android-green/40 flex flex-col justify-between overflow-hidden shadow-[0_0_20px_rgba(61,220,132,0.2)] shrink-0">
                      <div className="w-full bg-gradient-to-r from-android-green/20 via-emerald-400/30 to-android-green/20 border-b border-android-green/30 py-1.5 text-center">
                        <span className="text-[10px] font-mono font-extrabold tracking-[0.22em] text-android-green uppercase leading-none block">
                          {flagshipEvent.month}
                        </span>
                      </div>
                      <div className="flex-1 flex items-center justify-center px-2 py-1">
                        <span className="text-base sm:text-lg font-extrabold text-white font-display tracking-tight whitespace-nowrap leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {flagshipEvent.days}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs font-bold text-android-green uppercase tracking-wider">
                          SEASON FLAGSHIP
                        </span>
                      </div>
                      <span className="text-xs text-neutral-400">{flagshipEvent.venue}</span>
                    </div>
                  </div>

                  {/* Live Countdown Clock Widget */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-android-green" />
                        HACKATHON COUNTDOWN
                      </span>
                      <span className="text-android-green font-mono text-[10px] uppercase">LIVE CLOCK</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center pt-1 font-mono">
                      <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="text-[9px] text-neutral-400 uppercase tracking-wider">DAYS</div>
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="text-[9px] text-neutral-400 uppercase tracking-wider">HOURS</div>
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="text-[9px] text-neutral-400 uppercase tracking-wider">MINS</div>
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-xl sm:text-2xl font-bold text-android-green">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="text-[9px] text-neutral-400 uppercase tracking-wider">SECS</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Pill */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
                    <span>Team: <strong className="text-white">{flagshipEvent.teamSize}</strong></span>
                    <span>•</span>
                    <span>Mode: <strong className="text-android-green">{flagshipEvent.mode}</strong></span>
                  </div>
                </div>

                {/* Center & Right Column: Details, Tracks & Actions (8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Category Pills & Prize Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-android-green text-black uppercase tracking-wide">
                        {flagshipEvent.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                        {flagshipEvent.category}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-bold">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span>Prize Pool: {flagshipEvent.prizePool}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-2 group-hover:text-android-accent transition-colors">
                      {flagshipEvent.title}
                    </h3>
                    <p className="text-sm sm:text-base text-emerald-400 font-medium">
                      {flagshipEvent.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    {flagshipEvent.description}
                  </p>

                  {/* Tracks Matrix */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-android-green" />
                      <span>HACKATHON CHALLENGE TRACKS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {flagshipEvent.tracks.map((track, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-android-green mt-1.5 shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-white">{track.name}</div>
                            <div className="text-[11px] text-neutral-400">{track.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-xs text-neutral-400 mr-1">Stack:</span>
                    {flagshipEvent.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-android-green hover:bg-android-accent text-black font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 shadow-neon transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 text-black" />
                      <span>Get Event Updates on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSelectedEventModal(flagshipEvent)}
                      className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
                    >
                      <Info className="w-4 h-4 text-android-green" />
                      <span>View Full Itinerary</span>
                    </button>

                    <button
                      onClick={() => handleCopyLink(flagshipEvent)}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                      title="Share Event"
                    >
                      {copiedId === flagshipEvent.id ? (
                        <Check className="w-4 h-4 text-android-green" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            4. NAVIGATION CONTROLS: Status Switcher Capsule & Modern Category Filter Chips
           ========================================================================= */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-20">
          
          {/* Status Switcher Capsule (Upcoming vs Past) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => {
                setActiveTab('upcoming');
                setSelectedCategory('all');
              }}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'upcoming'
                  ? 'text-black font-extrabold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === 'upcoming' && (
                <motion.div
                  layoutId="activeEventStatusTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-android-green via-emerald-400 to-green-300 shadow-[0_0_25px_rgba(61,220,132,0.45)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeTab === 'upcoming' ? 'bg-black animate-ping' : 'bg-android-green animate-pulse'}`} />
                <span>Upcoming &amp; Active</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  activeTab === 'upcoming' ? 'bg-black/25 text-black' : 'bg-white/10 text-neutral-300'
                }`}>
                  {eventsData.filter((e) => e.status === 'upcoming').length}
                </span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('past');
                setSelectedCategory('all');
              }}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'past'
                  ? 'text-black font-extrabold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === 'past' && (
                <motion.div
                  layoutId="activeEventStatusTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-android-green via-emerald-400 to-green-300 shadow-[0_0_25px_rgba(61,220,132,0.45)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${activeTab === 'past' ? 'text-black' : 'text-neutral-400'}`} />
                <span>Hall of Fame</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  activeTab === 'past' ? 'bg-black/25 text-black' : 'bg-white/10 text-neutral-300'
                }`}>
                  {eventsData.filter((e) => e.status === 'past').length}
                </span>
              </span>
            </button>
          </div>

          {/* Category Filter Chips with Modern Developer Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Formats', icon: Sparkles },
              { id: 'hackathon', label: 'Hackathons', icon: Flame },
              { id: 'bootcamp', label: 'Bootcamps', icon: Layers },
              { id: 'debugging', label: 'Competitive', icon: Terminal },
              { id: 'jam', label: 'Study Jams', icon: Code2 }
            ].map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-android-green/15 text-android-green border-android-green/60 shadow-[0_0_15px_rgba(61,220,132,0.25)]'
                      : 'bg-white/[0.03] text-neutral-400 border-white/10 hover:text-white hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isSelected ? 'text-android-green' : 'text-neutral-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* =========================================================================
            5. MODERN EVENT PASS CARDS GRID WITH DIGITAL TICKET PATTERNS
           ========================================================================= */}
        <div className={`grid gap-7 mb-24 ${
          currentList.length === 1
            ? 'max-w-md mx-auto grid-cols-1'
            : currentList.length === 2
            ? 'max-w-5xl mx-auto grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          <AnimatePresence mode="popLayout">
            {currentList.map((event, idx) => {
              const isUpcoming = event.status === 'upcoming';
              const activeSubTab = getActiveCardSubTab(event.id);

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`group rounded-[28px] border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-card hover:shadow-[0_20px_50px_-10px_rgba(61,220,132,0.2)] hover:-translate-y-1.5 ${
                    isUpcoming
                      ? 'bg-[#090d0b]/90 border-white/10 hover:border-android-green/60 backdrop-blur-xl'
                      : 'bg-[#070908]/90 border-white/5 hover:border-white/20 backdrop-blur-xl'
                  }`}
                >
                  {/* Top Glowing Ambient Light Horizon on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-android-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />

                  {/* Corner holographic diagonal accent light */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-android-green/12 via-transparent to-transparent pointer-events-none rounded-tr-[28px] z-10" />

                  {/* CARD HEADER: DIGITAL PASS TICKETING PATTERN */}
                  <div className="p-6 relative overflow-hidden bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent z-10">
                    {/* Background Dot Matrix & Diagonal Cyber Stripes Pattern Overlay */}
                    <div className="absolute inset-0 tech-matrix-dots opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />
                    <div className="absolute inset-0 tech-stripes-pattern pointer-events-none opacity-30" />

                    <div className="relative z-10">
                      {/* Top Row: Date Stamp Block & Status/Prize Badges */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        
                        {/* High-Tech Calendar Ticket Block */}
                        <div className="flex items-center gap-3">
                          <div className="min-w-[66px] sm:min-w-[72px] h-[66px] sm:h-[72px] rounded-2xl bg-gradient-to-b from-[#131b15] via-[#090e0b] to-[#040605] border border-android-green/40 flex flex-col justify-between overflow-hidden shadow-[0_0_18px_rgba(61,220,132,0.18)] shrink-0 group-hover:border-android-green group-hover:shadow-[0_0_25px_rgba(61,220,132,0.35)] transition-all duration-300">
                            {/* Top Month Accent Ribbon */}
                            <div className="w-full bg-gradient-to-r from-android-green/20 via-emerald-400/30 to-android-green/20 border-b border-android-green/30 py-1 text-center">
                              <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.22em] text-android-green leading-none block">
                                {event.month}
                              </span>
                            </div>
                            {/* Days Value (One Single Clean Line, Never Broken or Wrapped) */}
                            <div className="flex-1 flex items-center justify-center px-1.5 py-0.5">
                              <span className="text-base sm:text-lg font-extrabold text-white font-display tracking-tight whitespace-nowrap leading-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-android-green transition-colors">
                                {event.days}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/15 backdrop-blur-sm">
                              {event.category}
                            </span>
                            <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1 font-sans">
                              <MapPin className="w-3 h-3 text-android-green shrink-0" />
                              <span className="truncate max-w-[130px] sm:max-w-[150px]">{event.venue}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status / Prize Chip */}
                        <div className="text-right flex flex-col items-end gap-1.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono ${
                              isUpcoming
                                ? 'bg-android-green/15 text-android-green border border-android-green/40 shadow-sm'
                                : 'bg-white/5 text-neutral-400 border border-white/10'
                            }`}
                          >
                            {isUpcoming && <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />}
                            {event.badge}
                          </span>
                          {event.cashPrize && (
                            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-yellow-500/15 to-amber-500/10 border border-yellow-500/30 text-yellow-300 text-[11px] font-mono font-bold shadow-sm">
                              <Trophy className="w-3 h-3 text-yellow-400" />
                              <span>{event.cashPrize}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Event Title & Tagline */}
                      <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-1.5 leading-snug group-hover:text-android-green transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs text-android-accent line-clamp-1 font-medium">
                        {event.tagline}
                      </p>
                    </div>
                  </div>

                  {/* TICKET PERFORATION DIVIDER WITH DIGITAL PASS NOTCHES */}
                  <div className="relative flex items-center justify-between w-full z-20">
                    {/* Left Cutout Ticket Notch */}
                    <div className="w-3.5 h-3.5 rounded-full bg-[#050505] -ml-1.75 border-r border-white/15" />
                    {/* Dashed Perforated Line */}
                    <div className="flex-1 border-b border-dashed border-white/15 mx-1" />
                    {/* Right Cutout Ticket Notch */}
                    <div className="w-3.5 h-3.5 rounded-full bg-[#050505] -mr-1.75 border-l border-white/15" />
                  </div>

                  {/* SUB-TABS: SEGMENTED PILL SWITCHER */}
                  <div className="px-6 pt-4 pb-1 z-10">
                    <div className="p-1 rounded-xl bg-black/45 border border-white/10 flex items-center justify-between gap-1 text-xs font-semibold backdrop-blur-md">
                      {['highlights', 'logistics', 'stack'].map((tabKey) => {
                        const isTabActive = activeSubTab === tabKey;
                        const label = tabKey.charAt(0).toUpperCase() + tabKey.slice(1);
                        return (
                          <button
                            key={tabKey}
                            onClick={() => setCardSubTab(event.id, tabKey)}
                            className={`relative flex-1 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 text-center ${
                              isTabActive
                                ? 'text-android-green font-bold'
                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {isTabActive && (
                              <motion.div
                                layoutId={`cardTab-${event.id}`}
                                className="absolute inset-0 rounded-lg bg-android-green/15 border border-android-green/35 shadow-inner-glow"
                                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                              />
                            )}
                            <span className="relative z-10">{label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD BODY CONTENT */}
                  <div className="p-6 pt-3 flex-1 flex flex-col justify-between space-y-4 text-xs z-10">
                    
                    {activeSubTab === 'highlights' && (
                      <div className="space-y-3">
                        <p className="text-neutral-300 line-clamp-3 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="space-y-2 pt-1">
                          {event.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-neutral-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-android-green mt-1.5 shrink-0 shadow-[0_0_6px_#3DDC84]" />
                              <span className="line-clamp-2 leading-relaxed">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSubTab === 'logistics' && (
                      <div className="grid grid-cols-2 gap-2.5 py-1">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-[10px] text-neutral-500 font-mono uppercase block">Date</span>
                          <span className="font-semibold text-white">{event.date}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-[10px] text-neutral-500 font-mono uppercase block">Time</span>
                          <span className="font-semibold text-white">{event.time}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-[10px] text-neutral-500 font-mono uppercase block">Team Size</span>
                          <span className="font-semibold text-white">{event.teamSize}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-[10px] text-neutral-500 font-mono uppercase block">Format</span>
                          <span className="text-android-green font-semibold">{event.mode}</span>
                        </div>
                      </div>
                    )}

                    {activeSubTab === 'stack' && (
                      <div className="space-y-3 py-1">
                        <div className="text-neutral-400 text-[11px] font-mono">FRAMEWORKS &amp; SDKs:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {event.techStack.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300 hover:border-android-green/40 hover:text-white transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2 text-[11px] text-neutral-400 border-t border-white/5 flex items-center justify-between">
                          <span>Mentor Track:</span>
                          <span className="text-emerald-400 font-medium">{event.speaker}</span>
                        </div>
                      </div>
                    )}

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedEventModal(event)}
                        className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 group/btn transition-colors"
                      >
                        <span>Itinerary &amp; Info</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-android-green" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyLink(event)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors"
                          title="Share event link"
                        >
                          {copiedId === event.id ? (
                            <Check className="w-3.5 h-3.5 text-android-green" />
                          ) : (
                            <Share2 className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {isUpcoming ? (
                          <a
                            href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-xl bg-android-green/15 border border-android-green/40 hover:border-android-green text-android-green hover:text-white hover:bg-android-green text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Updates</span>
                          </a>
                        ) : (
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-android-green/50 text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Archive</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* =========================================================================
            6. "EVENTS GALLERY & EXPERIENCE MOMENTS" (Signature Section from Reference)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-[#0a0d0c]/90 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden mb-12"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-android-green/5 blur-[120px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-android-green uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>COMMUNITY MEMORIES</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                THE HACKATHON &amp; CAMPUS EXPERIENCE
              </h3>
            </div>
            
            {/* Gallery Navigation Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">
                0{activeMomentIndex + 1} / 0{eventExperienceMoments.length}
              </span>
              <button
                onClick={() => setActiveMomentIndex((prev) => (prev - 1 + eventExperienceMoments.length) % eventExperienceMoments.length)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-android-green hover:text-android-green transition-colors"
                aria-label="Previous Moment"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveMomentIndex((prev) => (prev + 1) % eventExperienceMoments.length)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-android-green hover:text-android-green transition-colors"
                aria-label="Next Moment"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Moment Spotlight Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Canvas Representation */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#121814] to-[#080b09] border border-white/10 p-6 sm:p-8 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-android-green/10 border border-android-green/30 text-android-green">
                  {eventExperienceMoments[activeMomentIndex].tag}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {eventExperienceMoments[activeMomentIndex].stats}
                </span>
              </div>

              {/* Thematic Icon Representation & Title */}
              <div className="my-6">
                <div className="w-14 h-14 rounded-2xl bg-android-green/10 border border-android-green/40 flex items-center justify-center mb-4 text-android-green shadow-inner-glow">
                  {activeMomentIndex === 0 && <Terminal className="w-7 h-7" />}
                  {activeMomentIndex === 1 && <Trophy className="w-7 h-7" />}
                  {activeMomentIndex === 2 && <Code2 className="w-7 h-7" />}
                  {activeMomentIndex === 3 && <Award className="w-7 h-7" />}
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                  {eventExperienceMoments[activeMomentIndex].title}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                  {eventExperienceMoments[activeMomentIndex].subtitle}
                </p>
              </div>

              <div className="text-xs text-android-accent font-mono">
                Context: {eventExperienceMoments[activeMomentIndex].event}
              </div>
            </div>

            {/* Moment Selection Cards */}
            <div className="lg:col-span-5 space-y-3">
              {eventExperienceMoments.map((moment, i) => (
                <button
                  key={moment.id}
                  onClick={() => setActiveMomentIndex(i)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    i === activeMomentIndex
                      ? 'bg-android-green/10 border-android-green text-white shadow-inner-glow'
                      : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-android-green">0{i + 1}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{moment.title}</div>
                      <div className="text-xs text-neutral-400">{moment.event}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${i === activeMomentIndex ? 'text-android-green translate-x-1' : 'text-neutral-500'}`} />
                </button>
              ))}
            </div>

          </div>
        </motion.div>

        {/* =========================================================================
            7. WHATSAPP COMMUNITY BANNER FOR EVENT UPDATES
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-bg-card to-teal-950/60 border border-emerald-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wide">
              <Bell className="w-3.5 h-3.5" />
              <span>NEVER MISS AN ANNOUNCEMENT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Stay Ahead with Real-Time Event Alerts
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Join 1,400+ VIT Bhopal student builders in our official WhatsApp announcement circle for early hackathon rulebooks, mentor office hours, and exclusive goodies.
            </p>
          </div>

          <a
            href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-android-green hover:bg-android-accent text-black font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 shadow-neon transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join WhatsApp Community</span>
          </a>
        </motion.div>

      </div>

      {/* =========================================================================
          8. INTERACTIVE EVENT ITINERARY & DETAILS MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0b0e0c] border border-android-green/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-text-primary"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedEventModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-android-green transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-6 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-android-green text-black uppercase">
                    {selectedEventModal.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                    {selectedEventModal.category}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {selectedEventModal.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {selectedEventModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-android-accent font-medium">
                  {selectedEventModal.tagline}
                </p>
              </div>

              {/* Itinerary Schedule Timeline */}
              <div className="space-y-4 mb-6">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-android-green" />
                  <span>Program Itinerary &amp; Timeline</span>
                </div>
                <div className="space-y-2.5 border-l-2 border-android-green/30 pl-4 ml-2">
                  {selectedEventModal.itinerary.map((item, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-android-green border-2 border-[#0b0e0c]" />
                      <div className="text-xs font-mono text-android-green font-semibold">{item.time}</div>
                      <div className="text-xs text-neutral-300 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Tech Ecosystem</div>
                <div className="flex flex-wrap gap-2">
                  {selectedEventModal.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Speaker / Mentor */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between mb-6">
                <div>
                  <div className="text-[11px] text-neutral-400 uppercase">Speaker / Mentors</div>
                  <div className="text-sm font-bold text-white">{selectedEventModal.speaker}</div>
                  <div className="text-xs text-neutral-400">{selectedEventModal.speakerRole}</div>
                </div>
                <Users className="w-5 h-5 text-android-green" />
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-android-green text-black font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-neon transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Join Event WhatsApp Circle</span>
                </a>
                <button
                  onClick={() => setSelectedEventModal(null)}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/15 hover:bg-white/15 transition-colors"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
