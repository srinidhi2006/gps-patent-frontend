'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
}

export default function GlowingButton({ children, onClick, variant = 'primary', className = '', icon }: GlowingButtonProps) {
  const baseClasses = "relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]",
    secondary: "bg-sky-500/10 text-sky-400 border border-sky-500/50 hover:bg-sky-500/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
    outline: "bg-transparent text-gray-300 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}
