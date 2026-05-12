'use client';

import { motion } from 'framer-motion';

export default function NeuralNode({ active = false, label }: { active?: boolean, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div 
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center relative ${
          active ? 'border-cyan-400 bg-cyan-900/40 shadow-[0_0_20px_rgba(0,229,255,0.4)]' : 'border-white/10 bg-white/5'
        }`}
        animate={active ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-cyan-300 shadow-[0_0_10px_#00E5FF] animate-pulse' : 'bg-gray-600'}`} />
        {active && (
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" />
        )}
      </motion.div>
      <span className={`text-xs font-mono tracking-wider ${active ? 'text-cyan-400' : 'text-gray-500'}`}>{label}</span>
    </div>
  );
}
