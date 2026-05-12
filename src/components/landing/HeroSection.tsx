'use client';

import { motion } from 'framer-motion';
import { Satellite, Activity, ChevronRight } from 'lucide-react';
import GlowingButton from '../ui/GlowingButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.15)_0%,rgba(5,8,22,1)_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 animate-spin-slow opacity-20 text-cyan-400">
             <Satellite className="w-32 h-32 absolute -top-16 -left-16" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>AI-Driven Autonomous Navigation Core</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Next-Generation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            Spatial Intelligence
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          A patented architecture integrating continuous reinforcement learning, predictive error modeling, and multi-sensor fusion for unparalleled navigation accuracy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <GlowingButton icon={<Activity className="w-5 h-5" />} variant="primary">
            Start Simulation
          </GlowingButton>
          <GlowingButton icon={<ChevronRight className="w-5 h-5" />} variant="outline">
            View Architecture
          </GlowingButton>
        </motion.div>
      </div>

      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_top,rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30" />
    </section>
  );
}
