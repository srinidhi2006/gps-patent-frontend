'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ArchitectureNodeProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  isActive?: boolean;
}

export default function ArchitectureNode({ title, description, icon, delay = 0, isActive = false }: ArchitectureNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative glass p-6 rounded-2xl border-l-4 transition-all duration-500 group ${
        isActive ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_30px_rgba(0,229,255,0.2)]' : 'border-white/10 hover:border-cyan-500/50 hover:bg-white/5'
      }`}
    >
      <div className={`mb-4 inline-flex p-3 rounded-xl ${isActive ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/20'} transition-colors`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-200'}`}>{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      
      {/* Node Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-sky-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 -z-10 ${isActive ? 'opacity-30' : ''}`} />
    </motion.div>
  );
}
