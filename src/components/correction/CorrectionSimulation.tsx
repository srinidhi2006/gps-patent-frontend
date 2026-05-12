'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AlertBanner from './AlertBanner';
import { Route, Radio, ShieldAlert } from 'lucide-react';

export default function CorrectionSimulation() {
  const [phase, setPhase] = useState<'normal' | 'warning' | 'correction'>('normal');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setPhase('normal');
          return 0;
        }
        const next = prev + 1;
        if (next === 30) setPhase('warning');
        if (next === 50) setPhase('correction');
        if (next === 85) setPhase('normal');
        return next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass rounded-3xl p-8 border-white/5 relative overflow-hidden">
      {/* Background Pulse during correction */}
      <AnimatePresence>
        {phase === 'correction' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-red-500 animate-pulse pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="mb-8 h-16">
        <AlertBanner status={phase} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Signal Status */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
            <Radio size={18} /> External GPS Signal
          </h3>
          <div className="h-32 flex items-end gap-2">
            {Array.from({ length: 20 }).map((_, i) => {
              const isActive = i < (progress / 5);
              const isFailing = phase !== 'normal' && i > 5 && i < 16;
              const height = isFailing ? Math.random() * 20 + 10 : Math.random() * 30 + 60;
              
              return (
                <motion.div
                  key={i}
                  className={`flex-1 rounded-t-sm transition-all duration-300 ${
                    isActive ? (isFailing ? 'bg-red-500' : 'bg-cyan-400') : 'bg-white/10'
                  }`}
                  style={{ height: isActive ? `${height}%` : '10%' }}
                />
              );
            })}
          </div>
        </div>

        {/* AI Confidence Status */}
        <div className="glass p-6 rounded-2xl relative overflow-hidden">
          <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
            <ShieldAlert size={18} /> Internal AI Prediction
          </h3>
          <div className="flex items-center justify-center h-32 relative">
            <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
              <motion.circle 
                cx="50" cy="50" r="45" fill="none" 
                stroke={phase === 'correction' ? '#00E5FF' : '#38BDF8'} 
                strokeWidth="10" strokeDasharray="283"
                animate={{ strokeDashoffset: 283 - (283 * (phase === 'normal' ? 95 : 99)) / 100 }}
                transition={{ duration: 1 }}
                className="drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-white">{phase === 'normal' ? '95' : '99'}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trajectory Simulation */}
      <div className="relative h-48 glass rounded-2xl p-4 overflow-hidden">
        <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2 absolute z-10 bg-[#0B1120]/80 p-2 rounded-lg">
          <Route size={18} /> Trajectory Path
        </h3>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Ideal Path */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 border-dashed border-b border-white/30" />
        
        {/* Simulated Vehicle */}
        <motion.div 
          className="absolute top-1/2 left-0 w-8 h-8 -mt-4 -ml-4 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_#00E5FF] z-20"
          style={{ left: `${progress}%` }}
          animate={{ 
            y: phase === 'warning' ? [0, -15, 20, -10, 0] : (phase === 'correction' ? 0 : 0),
            backgroundColor: phase === 'warning' ? '#EAB308' : (phase === 'correction' ? '#00E5FF' : '#38BDF8'),
            boxShadow: phase === 'warning' ? '0 0 20px #EAB308' : (phase === 'correction' ? '0 0 30px #00E5FF' : '0 0 20px #38BDF8')
          }}
          transition={{ duration: phase === 'warning' ? 2 : 0.5 }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>

        {/* Tunnel Overlay (Danger Zone) */}
        <div className="absolute top-0 bottom-0 left-[30%] right-[50%] bg-red-500/10 border-l border-r border-red-500/30 flex items-center justify-center">
          <span className="text-red-500/50 font-mono text-sm rotate-90 tracking-widest uppercase">Signal Loss Zone</span>
        </div>
      </div>
    </div>
  );
}
