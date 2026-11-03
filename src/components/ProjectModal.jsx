import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Star, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-bg-card border border-border-glow rounded-2xl shadow-neon-lg overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border bg-bg-secondary/70 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-android-green/10 border border-android-green/30 text-android-green">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-text-secondary">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                <p className="text-sm text-android-accent font-medium mt-0.5">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-android-green/50 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {/* Architecture & Implementation Highlights */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-text-secondary mb-2">
                  Overview & Engineering Architecture
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="p-4 rounded-xl bg-bg-secondary border border-border text-xs text-text-primary leading-relaxed font-mono">
                  {project.longDescription}
                </div>
              </div>

              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-text-secondary mb-2">
                  Key Milestones & Impact
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="p-3 rounded-xl bg-bg-secondary border border-border">
                      <div className="text-[10px] uppercase font-mono text-text-muted">{key}</div>
                      <div className="text-base font-bold text-android-green mt-0.5">{value}</div>
                    </div>
                  ))}
                  <div className="p-3 rounded-xl bg-bg-secondary border border-border">
                    <div className="text-[10px] uppercase font-mono text-text-muted">Repository</div>
                    <div className="text-base font-bold text-white flex items-center gap-1 mt-0.5">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      {project.stars} Stars
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-text-secondary mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-bg-secondary border border-border text-white flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-android-green" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 sm:p-6 border-t border-border bg-bg-secondary/80 flex items-center justify-between gap-3">
              <span className="text-xs text-text-muted hidden sm:inline-block">
                Open Source under Android Club VIT Bhopal
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-bg-card border border-border hover:border-android-green text-sm font-medium text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-android-green text-black text-sm font-semibold hover:bg-android-accent flex items-center justify-center gap-2 transition-colors shadow-neon"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

