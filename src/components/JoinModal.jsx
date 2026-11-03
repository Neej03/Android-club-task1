import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, User, Mail, GraduationCap, Code2, Link as LinkIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    regNo: '',
    email: '',
    year: '2nd Year',
    domain: 'Android Development',
    portfolio: '',
    statement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const domains = [
    'Android Development',
    'Application Development (Flutter / RN)',
    'Kotlin & Java Architecture',
    'UI/UX Design & Material Systems',
    'Artificial Intelligence & Edge ML',
    'PR, Outreach & Event Operations',
    'Open Source & Tooling'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3DDC84', '#8AFFB7', '#FFFFFF', '#0D381E']
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      regNo: '',
      email: '',
      year: '2nd Year',
      domain: 'Android Development',
      portfolio: '',
      statement: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-bg-card border border-border-glow rounded-2xl shadow-neon-lg overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header bar */}
            <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between bg-bg-secondary/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-android-green/10 border border-android-green/30 flex items-center justify-center text-android-green">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Join Android Club</h3>
                  <p className="text-xs text-text-secondary">VIT Bhopal University Chapter</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-android-green/50 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-android-green/20 border border-android-green flex items-center justify-center mx-auto text-android-green shadow-neon">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-white">Application Received!</h4>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Thank you for applying to Android Club, VIT Bhopal! Our team will review your application and reach out via your official university email (<span className="text-android-green font-medium">{formData.email || 'vitbhopal.ac.in'}</span>).
                  </p>
                  <div className="p-4 rounded-xl bg-bg-secondary border border-border text-xs text-left space-y-1.5 max-w-md mx-auto">
                    <div className="text-android-accent font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-android-green animate-pulse" />
                      Application under review by technical leads
                    </div>
                    <div className="text-text-muted">Selected Domain: {formData.domain}</div>
                    <div className="text-text-muted">Applicant: {formData.fullName} ({formData.regNo})</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-android-green text-black font-semibold hover:bg-android-accent transition-colors shadow-neon"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Alex Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        Registration Number *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. 23BCE10000"
                        value={formData.regNo}
                        onChange={(e) => setFormData({ ...formData, regNo: e.target.value.toUpperCase() })}
                        className="w-full px-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green font-medium uppercase transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        VIT Bhopal Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <input
                          required
                          type="email"
                          placeholder="name2023@vitbhopal.ac.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        Year of Study
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green text-white transition-all"
                        >
                          <option value="1st Year">1st Year (Freshman)</option>
                          <option value="2nd Year">2nd Year (Sophomore)</option>
                          <option value="3rd Year">3rd Year (Junior)</option>
                          <option value="4th Year">4th Year (Senior)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Preferred Domain of Interest *
                    </label>
                    <div className="relative">
                      <Code2 className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green text-white transition-all"
                      >
                        {domains.map((dom) => (
                          <option key={dom} value={dom}>
                            {dom}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      GitHub or Portfolio URL (Optional)
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                      <input
                        type="url"
                        placeholder="https://github.com/your-username"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Why do you want to join Android Club? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us what you're excited to learn, build, or contribute to our developer community..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl bg-bg-secondary border border-border focus:border-android-green focus:outline-none focus:ring-1 focus:ring-android-green resize-none transition-all"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <p className="text-[11px] text-text-muted">
                      Open to all branches and skill levels.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 rounded-xl bg-android-green text-black font-semibold hover:bg-android-accent transition-all duration-200 flex items-center gap-2 shadow-neon disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

