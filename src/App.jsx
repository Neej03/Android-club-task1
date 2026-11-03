import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollNavigation from './components/ScrollNavigation';
import LetterParticlesBackground from './components/LetterParticlesBackground';
import PartnersMarquee from './components/PartnersMarquee';
import About from './components/About';
import AcwocHighlight from './components/AcwocHighlight';
import Events from './components/Events';
import TechKnowledgeDrop from './components/TechKnowledgeDrop';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AndroidIntroAnimation from './components/AndroidIntroAnimation';

export default function App() {
  // Whenever anyone opens or reloads the website, animation plays first
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-android-green selection:text-black">
      
      {/* Creative Android Entrance Animation: Plays first when opening the website */}
      <AnimatePresence>
        {showIntro && (
          <AndroidIntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Letter Particles Background */}
      <LetterParticlesBackground />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Signature Vertical Scroll Indicator (from androidclub.tech) */}
      <ScrollNavigation />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Section 02 - Hero with 3D Android Spline */}
        <Hero />

        {/* Partners & Ecosystem Collaborators Marquee */}
        <PartnersMarquee />

        {/* Section 03 - About Us with Interactive Phone Experience & Faculty */}
        <About />

        {/* Signature Flagship Program: AcWoC (Winter of Code) */}
        <AcwocHighlight />

        {/* Section 06 - Events, Hackathons & Study Jams */}
        <Events />

        {/* Engineering Philosophy & Knowledge Drops */}
        <TechKnowledgeDrop />

        {/* Section 07 - Why Join Us? (6 Feature Cards) */}
        <Benefits />

        {/* Section 09 - Contact, Community & Inquiries */}
        <Contact />
      </main>

      {/* Section 10 - Footer */}
      <Footer />
    </div>
  );
}
