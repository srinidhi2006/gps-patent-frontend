'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { satellites, attackTimeline } from '../../data/spoofing';
import ThreatIndicator from './ThreatIndicator';
import { ShieldAlert, Crosshair, Lock } from 'lucide-react';

export default function AttackSimulation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentEvent = attackTimeline[phase];
  const threatLevel = currentEvent.risk > 80 ? 'critical' : currentEvent.risk > 40 ? 'warning' : 'safe';

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <ThreatIndicator level={threatLevel} />
        <div className="glass px-4 py-2 rounded-lg border-white/5 font-mono text-sm flex gap-4 text-gray-400">
          <span>TIME: {currentEvent.time}</span>
          <span className="text-white border-l border-white/20 pl-4">{currentEvent.event}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Satellites View */}
        <div className="glass p-6 rounded-2xl relative min-h-[300px]">
          <h3 className="font-mono text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Crosshair size={16} /> Constellation Uplink Status
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {satellites.map((sat) => {
              const isSpoofed = sat.status === 'spoofed';
              const isDetected = isSpoofed && phase >= 3;
              const isIsolated = isSpoofed && phase >= 4;
              
              return (
                <motion.div 
                  key={sat.id}
                  className={`p-4 rounded-xl border ${
                    isIsolated ? 'border-gray-700 bg-gray-900/50 opacity-50' : 
                    isDetected ? 'border-red-500 bg-red-900/20' : 
                    isSpoofed && phase >= 1 ? 'border-yellow-500 bg-yellow-900/20' :
                    'border-cyan-500/30 bg-cyan-900/10'
                  } relative overflow-hidden`}
                >
                  {isIsolated && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 backdrop-blur-[1px]">
                      <Lock className="text-red-500" />
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{sat.id}</span>
                    <span className={`text-xs ${isDetected ? 'text-red-400' : 'text-cyan-400'}`}>
                      {sat.strength} dB
                    </span>
                  </div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${isDetected ? 'bg-red-500' : 'bg-cyan-400'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${sat.strength}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* System State View */}
        <div className="glass p-6 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center">
          <AnimatePresence>
            {threatLevel === 'critical' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-red-500 animate-pulse pointer-events-none"
              />
            )}
          </AnimatePresence>
          
          <ShieldAlert className={`w-24 h-24 mb-6 transition-colors duration-500 ${
            threatLevel === 'critical' ? 'text-red-500' : threatLevel === 'warning' ? 'text-yellow-500' : 'text-green-500'
          }`} />
          
          <div className="text-center font-mono">
            <div className="text-gray-400 text-sm mb-2">INTEGRITY ALGORITHM</div>
            <div className={`text-2xl font-bold tracking-widest ${
               threatLevel === 'critical' ? 'text-red-500' : threatLevel === 'warning' ? 'text-yellow-500' : 'text-green-500'
            }`}>
              {phase < 2 ? 'MONITORING' : phase < 4 ? 'ANALYZING THREAT' : 'ISOLATING ORIGIN'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
