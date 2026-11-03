import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Radio,
  Check,
  Compass,
  User,
  MessageSquare,
  Zap,
  Copy,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenJoinModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [txReceipt, setTxReceipt] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const topicOptions = [
    { id: 'General Inquiry', label: 'General Inquiry', desc: 'Questions about sessions & events' },
    { id: 'Hackathon Sponsorship', label: 'Hackathon & Sponsorship', desc: 'Partnering for national hackathons' },
    { id: 'Speaker / Workshop', label: 'Speaker / Workshop Proposal', desc: 'Conduct a technical masterclass' },
    { id: 'AcWoC Open Source', label: 'AcWoC & Open Source', desc: 'Contributing or submitting repos' },
    { id: 'Campus Partnership', label: 'Campus Collaboration', desc: 'Cross-club and inter-university alliances' }
  ];

  const quickStarters = [
    "Sponsoring Android Fusion 3.0",
    "Open-source repo contribution",
    "Guest lecture proposal",
    "Question regarding upcoming study jam"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('androidclub@vitbhopal.ac.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSelectQuickStarter = (starter) => {
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message}\n${starter}` : `Hi Android Club Team, I would like to inquire about: ${starter}.`
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTxReceipt(`TX-${Math.floor(100000 + Math.random() * 900000)}`);

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3DDC84', '#8AFFB7', '#FFFFFF', '#22d3ee']
      });
    }, 700);
  };

  const socials = [
    {
      name: 'WhatsApp Community',
      handle: 'Active Discussions & Instant Alerts',
      url: 'https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK',
      icon: MessageCircle,
      badge: 'MOST ACTIVE'
    },
    {
      name: 'GitHub Organization',
      handle: 'androidclubvitbhopal',
      url: 'https://github.com/androidclubvitbhopal',
      icon: Github,
      badge: 'OPEN SOURCE'
    },
    {
      name: 'LinkedIn Official',
      handle: 'android-club-vit-bhopal',
      url: 'https://www.linkedin.com/company/android-club-vit-bhopal/',
      icon: Linkedin,
      badge: '500+ FOLLOWERS'
    },
    {
      name: 'Instagram Page',
      handle: '@androidclub.vitb',
      url: 'https://www.instagram.com/androidclub.vitb/',
      icon: Instagram,
      badge: 'STORIES & SESSIONS'
    },
    {
      name: 'Official Email',
      handle: 'androidclub@vitbhopal.ac.in',
      url: 'mailto:androidclub@vitbhopal.ac.in',
      icon: Mail,
      badge: 'OFFICIAL INQUIRIES'
    }
  ];

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-[#030503] via-[#060e08] to-[#020402] relative overflow-hidden text-text-primary selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-25 pointer-events-none" />

      {/* Top and Bottom Glowing Neon Light Horizon Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent pointer-events-none" />

      {/* Futuristic Concentric Radar Telemetry & Sweep Beam Field */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] lg:w-[1100px] h-[650px] sm:h-[900px] lg:h-[1100px] pointer-events-none opacity-25 select-none">
        {/* Concentric Radar Distance Rings */}
        <div className="absolute inset-0 rounded-full border border-android-green/20" />
        <div className="absolute inset-[15%] rounded-full border border-android-green/15 border-dashed animate-spin-slow" />
        <div className="absolute inset-[35%] rounded-full border border-android-green/25" />
        <div className="absolute inset-[55%] rounded-full border border-emerald-500/20" />
        
        {/* Sweeping 360-degree Radar Conic Beam */}
        <div className="absolute inset-0 rounded-full radar-sweep-gradient animate-radar pointer-events-none" />
        
        {/* Atmospheric Core Pulse */}
        <div className="absolute inset-0 bg-radial-gradient from-android-green/15 via-transparent to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Volumetric Dual Horizon Light Glows */}
      <div className="absolute top-1/2 -right-20 w-[650px] h-[450px] bg-gradient-to-bl from-android-green/15 via-emerald-600/5 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[450px] bg-gradient-to-tr from-teal-500/12 via-emerald-950/20 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Satellite Beacon Coordinates */}
      <div className="absolute top-36 right-1/4 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-80" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none opacity-75" />

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
            <Radio className="w-3.5 h-3.5 animate-pulse text-android-green" />
            <span>Mission Control &amp; Uplink</span>
            <span className="w-1.5 h-1.5 rounded-full bg-android-green animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]"
          >
            LET'S BUILD SOMETHING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-green via-emerald-400 to-teal-300 drop-shadow-[0_0_25px_rgba(61,220,132,0.35)]">
              TOGETHER.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Have questions about upcoming workshops, interested in sponsoring our national hackathons, or want to collaborate on open-source repositories? Connect with our mission dispatch desk.
          </motion.p>
        </div>

        {/* =========================================================================
            2-COLUMN MISSION CONTROL DISPATCH CONSOLE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Telemetry Channels & Campus Coordinates (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Community Primary Card */}
            <div className="rounded-3xl bg-[#090d0b] p-7 border border-white/10 hover:border-android-green/50 transition-colors shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/40 to-transparent" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-android-green flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    INSTANT STUDENT UPLINK
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  Join Official WhatsApp Community
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Join 1,400+ student developers across VIT Bhopal for direct notifications on hackathon problem statements, slides, and mentorship calls.
                </p>

                <div className="pt-2">
                  <a
                    href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-android-green hover:bg-android-accent text-black font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-neon active:scale-95 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Join WhatsApp Community</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Communication Array */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-neutral-400 px-1 uppercase tracking-wider font-bold">
                OFFICIAL COMMUNITY CHANNELS
              </div>

              <div className="space-y-2">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-android-green/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-android-green/50 flex items-center justify-center text-neutral-300 group-hover:text-android-green transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-android-green transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            {item.handle}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 text-neutral-400 group-hover:text-android-green group-hover:bg-android-green/10 transition-colors">
                        {item.badge}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Physical Campus Geolocation Radar Card */}
            <div className="p-5 rounded-3xl bg-[#080b09] border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="flex items-center gap-1.5 text-android-green font-bold">
                  <Compass className="w-3.5 h-3.5 text-android-green" />
                  CAMPUS COORDINATES
                </span>
                <span className="text-[10px] text-neutral-500">23.0760° N, 76.8513° E</span>
              </div>
              <div className="text-white font-sans text-xs font-semibold">
                Innovation Labs &bull; Academic Block 3
              </div>
              <div className="text-neutral-400 text-[11px] leading-relaxed">
                VIT Bhopal University, Bhopal-Indore Highway, Kothri Kalan, Sehore, Madhya Pradesh 466114
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Message Dispatch Console */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#080e0b]/95 p-6 sm:p-9 border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(61,220,132,0.12)] relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-android-green/60 to-transparent" />

              {/* Console Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
                    <span className="text-xs font-mono font-bold text-android-green tracking-wider uppercase">
                      MESSAGE TRANSMISSION CONSOLE
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    Send a Direct Dispatch
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-android-green" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
              </div>

              {submitted ? (
                /* Success Receipt View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-android-green/15 border border-android-green/40 flex items-center justify-center text-android-green mx-auto shadow-inner-glow">
                    <CheckCircle2 className="w-8 h-8 text-android-green animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-android-green font-bold px-3 py-1 rounded-full bg-android-green/10 border border-android-green/30">
                      DISPATCH RECEIPT: {txReceipt}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-bold font-display text-white pt-2">
                      Transmission Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you <span className="text-white font-semibold">{formData.name}</span>. Your message regarding <span className="text-android-green">{formData.category}</span> has been routed to our core committee leads. We typically reply to <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', category: 'General Inquiry', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold font-mono transition-colors"
                    >
                      &larr; Send Another Transmission
                    </button>
                    <a
                      href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-android-green text-black text-xs font-bold font-mono transition-transform hover:scale-105 active:scale-95 shadow-neon flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Join WhatsApp Community</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Topic Selector Chips */}
                  <div className="space-y-2.5">
                    <label className="text-neutral-400 font-mono text-[11px] uppercase tracking-wider flex items-center justify-between">
                      <span>1. Select Inquiry Topic</span>
                      <span className="text-android-green font-normal text-[10px]">REQUIRED</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {topicOptions.map((opt) => {
                        const isSelected = formData.category === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, category: opt.id })}
                            className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-android-green/15 border-android-green text-white shadow-[0_0_15px_rgba(61,220,132,0.2)]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-neutral-300 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs transition-colors ${
                              isSelected ? 'bg-android-green text-black font-bold' : 'border border-neutral-600 text-transparent'
                            }`}>
                              ✓
                            </div>
                            <div className="overflow-hidden">
                              <div className={`text-xs font-semibold ${isSelected ? 'text-android-green' : 'text-white'}`}>
                                {opt.label}
                              </div>
                              <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                                {opt.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email 2-Column Fields */}
                  <div className="space-y-2.5">
                    <div className="text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
                      2. Your Credentials
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Name Field with Icon */}
                      <div className="space-y-1">
                        <div className="relative flex items-center rounded-2xl bg-[#060c09] border border-white/10 hover:border-white/20 focus-within:border-android-green focus-within:ring-2 focus-within:ring-android-green/20 transition-all shadow-sm">
                          <div className="pl-4 text-neutral-400">
                            <User className="w-4 h-4 text-android-green" />
                          </div>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full Name (e.g. Alex Rivera)"
                            className="w-full px-3.5 py-3.5 bg-transparent text-white text-xs placeholder-neutral-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Email Field with Icon */}
                      <div className="space-y-1">
                        <div className="relative flex items-center rounded-2xl bg-[#060c09] border border-white/10 hover:border-white/20 focus-within:border-android-green focus-within:ring-2 focus-within:ring-android-green/20 transition-all shadow-sm">
                          <div className="pl-4 text-neutral-400">
                            <Mail className="w-4 h-4 text-android-green" />
                          </div>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email (you@domain.com)"
                            className="w-full px-3.5 py-3.5 bg-transparent text-white text-xs placeholder-neutral-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field with Quick Prompts */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
                      <span>3. Message &amp; Proposal</span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {formData.message.length} CHARS
                      </span>
                    </div>

                    {/* Quick Starter Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1 mr-1">
                        <Zap className="w-3 h-3 text-android-green" />
                        Quick insert:
                      </span>
                      {quickStarters.map((starter) => (
                        <button
                          type="button"
                          key={starter}
                          onClick={() => handleSelectQuickStarter(starter)}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-android-green/10 border border-white/10 hover:border-android-green/30 text-[10px] text-neutral-300 hover:text-android-green transition-all"
                        >
                          + {starter}
                        </button>
                      ))}
                    </div>

                    {/* Textarea */}
                    <div className="relative rounded-2xl bg-[#060c09] border border-white/10 hover:border-white/20 focus-within:border-android-green focus-within:ring-2 focus-within:ring-android-green/20 transition-all shadow-sm">
                      <div className="p-3.5 flex items-start gap-2.5">
                        <MessageSquare className="w-4 h-4 text-android-green shrink-0 mt-1" />
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your questions, proposal, workshop ideas, or hackathon collaboration..."
                          className="w-full bg-transparent text-white text-xs placeholder-neutral-500 focus:outline-none resize-none leading-relaxed"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions & Submit Buttons */}
                  <div className="pt-2 space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      {/* Primary Dispatch Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-android-green hover:bg-android-accent text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-neon transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                            <span>TRANSMITTING...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-black" />
                            <span>DISPATCH TRANSMISSION</span>
                          </span>
                        )}
                      </button>

                      {/* WhatsApp Direct Chat Fallback */}
                      <a
                        href={`https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-4 px-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-emerald-400 hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                    {/* Bottom Status & Email Copy Helper */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-400 border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-android-green" />
                        <span>Response window: &lt; 24 hours</span>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        title="Click to copy official email"
                      >
                        {copiedEmail ? (
                          <span className="text-android-green font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Copied: androidclub@vitbhopal.ac.in
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 hover:underline">
                            <Copy className="w-3 h-3 text-neutral-500" />
                            androidclub@vitbhopal.ac.in
                          </span>
                        )}
                      </button>
                    </div>

                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
