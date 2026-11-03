import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram, Shield, Sparkles, UserCheck, ArrowUpRight } from 'lucide-react';
import { teamMembers, teamCategories } from '../data/team';

export default function Team() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMembers =
    activeCategory === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <section id="team" className="py-24 bg-bg-primary relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[350px] bg-android-green/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-android-green/10 border border-android-green/30 text-android-green text-xs font-mono uppercase tracking-wider font-semibold">
            Community Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            THE PEOPLE BEHIND THE INNOVATION.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Meet the faculty advisors, student leads, architects, and designers steering the Android Club at VIT Bhopal University.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {teamCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-android-green text-black shadow-neon scale-105 font-bold'
                    : 'bg-bg-card border border-border text-text-secondary hover:text-white hover:border-android-green/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Team Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group relative border border-border overflow-hidden"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-android-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Avatar Row */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Real Profile Image with Glowing Halo */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-android-green/40 via-emerald-600/30 to-black p-1 shadow-neon group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-xl"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div
                          className="w-full h-full bg-bg-card rounded-xl flex items-center justify-center font-display font-bold text-lg text-white"
                          style={{ display: member.image ? 'none' : 'flex' }}
                        >
                          {member.avatarPlaceholder || member.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-bg-card border-2 border-android-green flex items-center justify-center text-android-green shadow-sm">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-android-green/10 border border-android-green/30 text-android-accent">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-android-green transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-android-green font-mono">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-text-muted">
                      {member.department}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links Row */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-text-muted">
                    Profile Network
                  </span>

                  <div className="flex items-center gap-2">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:text-white hover:border-android-green transition-colors"
                        aria-label={`LinkedIn for ${member.name}`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:text-white hover:border-android-green transition-colors"
                        aria-label={`GitHub for ${member.name}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:text-white hover:border-android-green transition-colors"
                        aria-label={`Instagram for ${member.name}`}
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:text-white hover:border-android-green transition-colors"
                        aria-label={`Email for ${member.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note regarding official chapter */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-text-muted">
            Android Club, VIT Bhopal University • Official Student Technical Chapter
          </p>
        </div>

      </div>
    </section>
  );
}
