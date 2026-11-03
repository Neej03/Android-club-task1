import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Code2, Sparkles, Smartphone, Eye } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-android-green/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-mono uppercase tracking-wider font-semibold">
            Open Source &amp; Production Software
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            BUILT BY OUR COMMUNITY.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            From smart campus navigation and cryptographic credential lockers to multimodal on-device AI — explore applications conceived, engineered, and open-sourced by students of VIT Bhopal.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-android-green text-black shadow-neon scale-105'
                    : 'bg-bg-card border border-border text-text-secondary hover:text-white hover:border-android-green/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden group border border-border"
              >
                {/* Visual Mockup Header */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 w-full bg-gradient-to-br from-bg-primary via-bg-card to-[#09150c] p-5 flex flex-col justify-between overflow-hidden border-b border-border cursor-pointer"
                >
                  {/* Decorative background grid and neon circles */}
                  <div className="absolute inset-0 bg-dots-pattern opacity-30" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-android-green/10 blur-xl group-hover:bg-android-green/20 transition-all duration-500" />

                  {/* Top tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-bg-secondary/90 border border-android-green/30 text-android-green">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-text-secondary">
                      {project.badge}
                    </span>
                  </div>

                  {/* Center Mockup representation */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-bg-card/90 border border-android-green/40 shadow-neon group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-7 h-7 text-android-green" />
                    </div>
                  </div>

                  {/* Bottom tagline inside banner */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span className="flex items-center gap-1 text-android-accent">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      {project.stars} stars
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      Quick Inspect
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold font-display text-white group-hover:text-android-green transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary text-text-secondary border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-text-secondary hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:text-white hover:border-android-green/40 transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-android-green/10 border border-android-green/30 text-android-green hover:bg-android-green hover:text-black transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for detailed project view */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

