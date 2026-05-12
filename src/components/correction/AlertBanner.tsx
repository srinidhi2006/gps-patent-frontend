'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

interface AlertBannerProps {
  status: 'normal' | 'warning' | 'correction';
}

export default function AlertBanner({ status }: AlertBannerProps) {
  const configs = {
    normal: {
      color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
      icon: <Activity className="animate-pulse" />,
      text: 'SYSTEM NOMINAL: Standard GPS Navigation Active',
    },
    warning: {
      color: 'border-yellow-500/50 bg-yellow-500/20 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]',
      icon: <AlertTriangle className="animate-bounce" />,
      text: 'ANOMALY DETECTED: Signal Degradation in Progress',
    },
    correction: {
      color: 'border-red-500/50 bg-red-500/20 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]',
      icon: <ShieldCheck className="animate-pulse" />,
      text: 'AI TAKEOVER: Autonomous Dead-Reckoning Engaged',
    }
  };

  const current = configs[status];

  return (
    <motion.div
      key={status}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-md transition-colors duration-500 ${current.color}`}
    >
      <div>{current.icon}</div>
      <div className="font-mono font-bold tracking-wider text-sm md:text-base">
        {current.text}
      </div>
    </motion.div>
  );
}
