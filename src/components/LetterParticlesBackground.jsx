import React from 'react';

export default function LetterParticlesBackground() {
  const particles = [
    { char: 'A', left: '6%', top: '12%', size: '20px', duration: '14s', delay: '0s', opacity: 0.2 },
    { char: 'N', left: '90%', top: '18%', size: '15px', duration: '18s', delay: '2s', opacity: 0.15 },
    { char: 'D', left: '22%', top: '35%', size: '22px', duration: '16s', delay: '4s', opacity: 0.18 },
    { char: 'R', left: '74%', top: '48%', size: '16px', duration: '15s', delay: '1s', opacity: 0.16 },
    { char: 'O', left: '10%', top: '65%', size: '24px', duration: '20s', delay: '3s', opacity: 0.2 },
    { char: 'I', left: '84%', top: '72%', size: '18px', duration: '13s', delay: '5s', opacity: 0.14 },
    { char: 'D', left: '42%', top: '82%', size: '20px', duration: '17s', delay: '2.5s', opacity: 0.18 },
    { char: 'K', left: '92%', top: '8%', size: '18px', duration: '19s', delay: '6s', opacity: 0.16 },
    { char: 'O', left: '32%', top: '24%', size: '14px', delay: '1.5s', duration: '14s', opacity: 0.12 },
    { char: 'T', left: '58%', top: '14%', size: '19px', delay: '3.5s', duration: '16s', opacity: 0.18 },
    { char: 'L', left: '16%', top: '48%', size: '17px', delay: '0.5s', duration: '15s', opacity: 0.15 },
    { char: 'I', left: '80%', top: '32%', size: '14px', delay: '4.5s', duration: '18s', opacity: 0.12 },
    { char: 'N', left: '48%', top: '60%', size: '22px', delay: '2s', duration: '21s', opacity: 0.18 },
    { char: '{ }', left: '5%', top: '86%', size: '16px', delay: '3s', duration: '16s', opacity: 0.2 },
    { char: '</>', left: '62%', top: '88%', size: '16px', delay: '1s', duration: '15s', opacity: 0.2 },
    { char: 'fun', left: '86%', top: '56%', size: '13px', delay: '5s', duration: '17s', opacity: 0.16 },
    { char: 'val', left: '26%', top: '8%', size: '13px', delay: '2.5s', duration: '14s', opacity: 0.14 },
    { char: 'VIT', left: '38%', top: '44%', size: '15px', delay: '4s', duration: '19s', opacity: 0.16 },
    { char: '0', left: '14%', top: '28%', size: '15px', delay: '1s', duration: '13s', opacity: 0.12 },
    { char: '1', left: '76%', top: '66%', size: '15px', delay: '3s', duration: '15s', opacity: 0.14 },
    { char: '::', left: '68%', top: '22%', size: '14px', delay: '2s', duration: '16s', opacity: 0.12 },
    { char: '->', left: '88%', top: '92%', size: '15px', delay: '4s', duration: '18s', opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute font-display font-bold text-android-green transition-opacity"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.size,
            opacity: p.opacity,
            animation: `floatLetter ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
            textShadow: '0 0 10px rgba(61, 220, 132, 0.3)',
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
