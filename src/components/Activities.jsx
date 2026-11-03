import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  Code2,
  Palette,
  Cpu,
  Terminal,
  GitBranch,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Activities({ onOpenJoinModal }) {
  const [selectedThemeColor, setSelectedThemeColor] = useState('#3DDC84');

  const themeColors = ['#3DDC84', '#8AFFB7', '#38BDF8', '#A78BFA', '#F472B6'];

  return (
    <section id="activities" className="py-24 bg-bg-primary relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-android-green/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-mono uppercase tracking-wider font-semibold">
            Specialized Technical Domains
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            EXPLORE. EXPERIMENT. CREATE.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Our club is organized into eight specialized engineering and creative domains. Whether you write low-level Kotlin, train on-device neural models, or architect fluid Material UI, find your squad.
          </p>
        </div>

        {/* Modern Bento Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Android Development (Wide 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group border border-border"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-android-green/10 blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green shadow-inner-glow transition-all">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-android-green/10 text-android-green border border-android-green/30">
                  FLAGSHIP DOMAIN
                </span>
              </div>

              <div className="text-xs font-mono text-android-accent uppercase tracking-wider mb-1 font-semibold">
                Core Engineering
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Android Development
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Crafting native high-performance mobile applications utilizing the latest Android 15 SDK, Jetpack Compose, Coroutines, Room persistence, and Google Material guidelines.
              </p>

              {/* Code Snippet Box inside Card */}
              <div className="p-3.5 rounded-xl bg-bg-secondary border border-border font-mono text-xs text-text-secondary leading-relaxed">
                <div className="flex items-center justify-between text-[10px] text-text-muted mb-2 border-b border-border/60 pb-1">
                  <span>MainActivity.kt</span>
                  <span className="text-android-green">Jetpack Compose 1.7</span>
                </div>
                <div className="space-y-0.5 text-[11px]">
                  <div><span className="text-purple-400">@Composable</span></div>
                  <div><span className="text-blue-400">fun</span> <span className="text-yellow-300">ClubFeedScreen</span>(viewModel: FeedViewModel) &#123;</div>
                  <div className="pl-4 text-emerald-300">LazyColumn(modifier = Modifier.fillMaxSize()) &#123; ... &#125;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-2">
              {['Jetpack Compose', 'Coroutines', 'Room DB', 'WorkManager', 'MVI Architecture'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-bg-secondary text-white border border-border">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: UI/UX Design with Interactive Color Palette (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group border border-border"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green shadow-inner-glow transition-all">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/5 text-text-secondary border border-white/10">
                  MATERIAL YOU
                </span>
              </div>

              <div className="text-xs font-mono text-android-accent uppercase tracking-wider mb-1 font-semibold">
                Design Systems
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                UI/UX Design
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                Designing intuitive, accessible, and delightful mobile interfaces aligned with Google Material Design 3 and user-centered ergonomics.
              </p>

              {/* Interactive Dynamic Color Palette Demonstration */}
              <div className="p-4 rounded-xl bg-bg-secondary border border-border space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Dynamic Accent:</span>
                  <span style={{ color: selectedThemeColor }} className="font-bold">{selectedThemeColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {themeColors.map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedThemeColor(col)}
                      style={{ backgroundColor: col }}
                      className={`w-7 h-7 rounded-full transition-transform ${
                        selectedThemeColor === col ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black' : 'opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Select accent ${col}`}
                    />
                  ))}
                </div>
                <div
                  style={{ borderColor: selectedThemeColor, color: selectedThemeColor }}
                  className="p-2 rounded-lg border text-center text-xs font-mono transition-colors"
                >
                  Active Material You Palette Preview
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {['Figma', 'Material Design 3', 'Motion Design', 'Design Tokens'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-bg-secondary text-white border border-border">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Artificial Intelligence & Edge ML (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Edge Intelligence
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Artificial Intelligence
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Integrating on-device neural models, Gemini Nano, TensorFlow Lite, and real-time computer vision without sending private data to cloud servers.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['Gemini Nano', 'TFLite', 'MediaPipe', 'ML Kit'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Kotlin & Java (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Language Mastery
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Kotlin &amp; Java
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Mastering idiomatic modern Kotlin 2.0, coroutines concurrency, functional pipelines, memory profiling on ART/JVM, and Kotlin Multiplatform (KMP).
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['Kotlin 2.0', 'KMP', 'JVM / ART', 'Flows'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Application Development (Flutter / Cross-Platform) (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Multi-Platform
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Application Development
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Building fluid, responsive, platform-agnostic apps using Flutter, Dart, and React Native with clean architecture and real-time backend synchronization.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['Flutter', 'React Native', 'Dart', 'Firebase'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 6: Workshops & Tech Sessions (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Hands-on Learning
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Workshops &amp; Tech Jams
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Conducting immersive code-alongs, debug-a-thons, and masterclasses from industry experts where students code together in campus labs.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['Compose Camp', 'Code Jams', 'Speaker Talks'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 7: Open Source Contributions (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <GitBranch className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Community Ecosystem
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Open Source Contributions
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Organizing AcWoC, contributing to global GitHub repositories, preparing students for Google Summer of Code (GSoC), and publishing reusable Android libraries.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['AcWoC', 'GitHub', 'CI/CD Pipelines', 'GSoC Prep'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 8: Collaborative Projects (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-border"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border group-hover:border-android-green flex items-center justify-center text-android-green mb-4 shadow-inner-glow">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-android-green uppercase font-semibold mb-1">
                Production Teams
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Collaborative Projects
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Building campus-scale capstone applications in sprint teams. Designers, backend engineers, and mobile developers collaborate on high-impact products.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {['Agile Sprints', 'Jira / Linear', 'REST APIs', 'Cloud Backends'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary text-text-secondary border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-bg-card via-bg-secondary to-[#0b190f] border border-border-glow shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Want to lead or contribute to any of these domains?
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary">
              Recruitments and domain study circles run throughout the academic semester at VIT Bhopal.
            </p>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3.5 rounded-xl bg-android-green text-black font-bold text-xs tracking-wider uppercase hover:bg-android-accent transition-colors shadow-neon shrink-0 active:scale-95"
          >
            Join a Domain
          </button>
        </div>

      </div>
    </section>
  );
}
