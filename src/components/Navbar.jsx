import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'AcWoC', href: '#acwoc' },
    { name: 'Events', href: '#events' },
    { name: 'Why Us', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border shadow-card py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title with Official High-Res Icon */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-bg-card border border-border group-hover:border-android-green transition-all duration-300 flex items-center justify-center shadow-inner-glow group-hover:shadow-neon p-1.5">
              <img
                src={logoImg}
                alt="Android Club | VIT Bhopal"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-white">
                  Android Club
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-android-green/10 text-android-green border border-android-green/30 font-semibold">
                  VIT Bhopal
                </span>
              </div>
              <span className="block text-xs text-text-muted">
                If it's Android, it's Us!
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/90 border border-border/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-android-green font-semibold'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-android-green/10 border border-android-green/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Real WhatsApp Community Direct Link */}
            <a
              href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-card border border-emerald-500/30 text-emerald-400 hover:text-white hover:border-emerald-500 text-xs font-medium transition-colors"
              title="Join Android Club WhatsApp Community"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Join Us CTA Button (Direct WhatsApp Community) */}
            <a
              href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-android-green text-black font-bold text-xs tracking-wide uppercase transition-all duration-300 hover:bg-android-accent shadow-neon hover:shadow-neon-lg active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Join Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-bg-card border border-border text-text-secondary hover:text-white hover:border-android-green transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-android-green" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-bg-primary/95 border-b border-border backdrop-blur-xl px-4 pt-3 pb-6 mt-2"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-android-green/10 text-android-green border border-android-green/30'
                        : 'text-text-secondary hover:text-white hover:bg-bg-secondary'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-android-green" />}
                  </a>
                );
              })}
              
              <div className="pt-3">
                <a
                  href="https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-android-green text-black font-bold text-sm flex items-center justify-center gap-2 shadow-neon active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Official WhatsApp Community</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
