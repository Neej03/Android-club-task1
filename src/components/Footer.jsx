import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Youtube, MessageCircle, Mail, Sparkles, Terminal } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenJoinModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'AcWoC', href: '#acwoc' },
    { name: 'Events', href: '#events' },
    { name: 'Why Us', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#030503] via-[#050c07] to-[#020302] border-t border-android-green/20 relative overflow-hidden text-neutral-400 pt-16 pb-12 selection:bg-android-green selection:text-black">
      {/* Dynamic Cyber Grid & Circuit Background */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 circuit-grid-pattern opacity-20 pointer-events-none" />

      {/* Top Glowing Neon Light Horizon Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-android-green/50 to-transparent pointer-events-none" />

      {/* Volumetric Ambient Glow Halos */}
      <div className="absolute -bottom-10 right-10 w-[550px] h-[350px] bg-gradient-to-tl from-android-green/12 via-emerald-600/5 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-0 -left-10 w-[450px] h-[300px] bg-gradient-to-br from-teal-500/10 via-transparent to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* Faint Floating Android Bugdroid Brand Watermark */}
      <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-[0.07] pointer-events-none select-none animate-float-slow">
        <img
          src={logoImg}
          alt="Android Watermark"
          className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(61,220,132,0.5)]"
        />
      </div>

      {/* Ambient Pulsing Circuit Beacons */}
      <div className="absolute top-8 right-1/3 w-1.5 h-1.5 rounded-full bg-android-green shadow-[0_0_10px_#3DDC84] animate-ping pointer-events-none opacity-60" />
      <div className="absolute bottom-12 left-1/4 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-pulse pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 shadow-inner-glow">
                <img
                  src={logoImg}
                  alt="Android Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold tracking-tight text-lg text-white">
                  Android Club
                </span>
                <span className="block text-xs font-mono text-neutral-400">
                  VIT Bhopal University
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              <span className="text-android-green font-medium">If it's Android, it's Us!</span> Founded in 2017 by Abhay Nigam, Android Club is a student-driven technical community dedicated to advancing mobile engineering, modern Kotlin architecture, on-device Edge AI, and open-source collaboration.
            </p>

            {/* Social Channels Row */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-emerald-500 flex items-center justify-center text-neutral-400 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/androidclubvitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-android-green flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/android-club-vit-bhopal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-android-green flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/androidclub.vitb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-android-green flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@androidclub-vitb-wi4qe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-red-500 flex items-center justify-center text-neutral-400 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:androidclub@vitbhopal.ac.in"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-android-green flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase text-white font-mono font-bold tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-android-green transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-android-green/60" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Campus (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-white font-display">
              Student Community
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Open to all students across all engineering branches at VIT Bhopal University. Join our official community circle for announcements, workshop materials, and open-source project invites.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-android-green hover:bg-android-accent text-black text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-neon active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Join WhatsApp Community</span>
              </a>
            </div>
            <div className="text-[11px] font-mono text-neutral-500">
              Official Portal: <a href="https://androidclub.tech/" target="_blank" rel="noopener noreferrer" className="text-android-green hover:underline">androidclub.tech</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Android Club, VIT Bhopal University. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-android-green text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-android-green" />
              <span className="text-[10px] font-mono">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
