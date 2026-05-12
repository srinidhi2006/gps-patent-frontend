'use client';

import { motion } from 'framer-motion';

export default function ThreatIndicator({ level }: { level: 'safe' | 'warning' | 'critical' }) {
  const configs = {
    safe: { color: 'text-green-400', bg: 'bg-green-500', glow: 'shadow-[0_0_15px_#22C55E]', text: 'SECURE' },
    warning: { color: 'text-yellow-400', bg: 'bg-yellow-500', glow: 'shadow-[0_0_20px_#EAB308]', text: 'ELEVATED' },
    critical: { color: 'text-red-500', bg: 'bg-red-600', glow: 'shadow-[0_0_30px_#EF4444]', text: 'ATTACK DETECTED' },
  };

  const curr = configs[level];

  return (
    <div className="flex items-center gap-4 glass px-6 py-3 rounded-xl border-white/5">
      <div className="text-sm text-gray-400 font-mono">THREAT LEVEL</div>
      <div className={`flex items-center gap-2 ${curr.color} font-black tracking-widest`}>
        <motion.div 
          className={`w-3 h-3 rounded-full ${curr.bg} ${curr.glow}`}
          animate={{ scale: level === 'critical' ? [1, 1.5, 1] : 1 }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
        {curr.text}
      </div>
    </div>
  );
}
