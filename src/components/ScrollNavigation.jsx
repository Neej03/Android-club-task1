import React, { useState, useEffect } from 'react';

export default function ScrollNavigation() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'acwoc', label: 'AcWoC' },
    { id: 'events', label: 'Events' },
    { id: 'benefits', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-40 select-none">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <div
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="flex items-end flex-col group cursor-pointer transition-all duration-300"
          >
            <div className="relative right-1">
              {/* Center Dot */}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-android-green scale-150 shadow-[0_0_8px_#3DDC84]'
                    : 'bg-neutral-500 opacity-60 group-hover:opacity-100 group-hover:bg-neutral-300'
                }`}
              />
              
              {/* Signature Official Corner Crosshair Brackets */}
              <div
                className={`absolute -bottom-2 -left-2 border-l-[2px] border-android-green border-b-[2px] rounded-bl-sm w-2.5 h-2.5 transition-all duration-300 pointer-events-none ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
              <div
                className={`absolute -top-2 -right-2 border-r-[2px] border-android-green border-t-[2px] rounded-tr-sm w-2.5 h-2.5 transition-all duration-300 pointer-events-none ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
            </div>

            {/* Label popup */}
            <div
              className={`mt-1 text-right uppercase text-[10px] font-bold tracking-wider transition-all duration-200 ${
                isActive
                  ? 'opacity-100 text-android-green'
                  : 'opacity-0 group-hover:opacity-80 text-text-muted'
              }`}
            >
              {section.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

