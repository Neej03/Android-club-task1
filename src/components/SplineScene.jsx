import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import ErrorBoundary from './ErrorBoundary';
import logoImg from '../assets/logo.png';

// Lazy load Spline to prevent SSR / WebGL crash
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScene() {
  const [loadError, setLoadError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const fallbackView = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative z-10 flex flex-col items-center justify-center select-none"
    >
      <div className="w-52 h-14 rounded-[100%] bg-android-green/15 border border-android-green/30 blur-[2px] mb-4" />
      
      <div className="w-36 h-36 rounded-3xl bg-gradient-to-b from-android-green via-emerald-600 to-green-950 p-1 shadow-neon flex flex-col items-center justify-center">
        <div className="w-full h-full bg-bg-card rounded-[22px] flex flex-col items-center justify-center p-4 text-center">
          <img
            src={logoImg}
            alt="Android Club Logo"
            className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(61,220,132,0.6)]"
          />
          <span className="text-xs font-display font-bold text-white mt-2">ANDROID CLUB</span>
          <span className="text-[10px] text-android-green font-semibold">VIT BHOPAL</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] flex items-center justify-center select-none overflow-hidden">
      {/* Soft ambient studio glow behind 3D mascot */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-android-green/15 blur-[110px] pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-android-accent/10 blur-[80px] pointer-events-none -top-4 -right-4" />

      {!loadError ? (
        <ErrorBoundary fallback={fallbackView}>
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="w-10 h-10 rounded-full border-2 border-android-green/20 border-t-android-green animate-spin" />
                <span className="text-xs text-text-secondary font-medium">
                  Loading 3D Android mascot...
                </span>
              </div>
            }
          >
            <div className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing">
              <Spline
                scene="/Android.splinecode"
                onLoad={() => setIsLoaded(true)}
                onError={() => setLoadError(true)}
                className="w-full h-full"
              />
            </div>
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallbackView
      )}
    </div>
  );
}

