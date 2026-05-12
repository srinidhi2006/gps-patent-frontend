'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Cpu, Network, Radar, Waves } from 'lucide-react';

export default function ModulesSection() {
  const modules = [
    { title: 'Neural Signal Processor', icon: <Cpu size={32} />, desc: 'Decodes and filters multiplexed GNSS signals using deep learning.' },
    { title: 'Spatial Mapping Engine', icon: <Radar size={32} />, desc: 'Generates real-time 3D point clouds for cross-referencing GPS coordinates.' },
    { title: 'Telemetry Node', icon: <Network size={32} />, desc: 'Synchronizes swarm data between autonomous entities for collective learning.' },
    { title: 'Kinematic Predictor', icon: <Waves size={32} />, desc: 'Calculates dead-reckoning trajectories when external signals are jammed.' },
  ];

  return (
    <section id="modules" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Core <span className="text-sky-400">Modules</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              The architecture is divided into specialized processing nodes that operate in parallel, ensuring redundant and fail-safe navigation under extreme conditions.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules.map((mod, i) => (
                <GlassCard key={i} delay={i * 0.1} className="p-5">
                  <div className="text-cyan-400 mb-3">{mod.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{mod.title}</h4>
                  <p className="text-xs text-gray-400">{mod.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-900/20 to-transparent flex items-center justify-center overflow-hidden">
             {/* Abstract Hologram Representation */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)]" />
             <motion.div 
               animate={{ rotateY: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 border border-cyan-500/50 rounded-full flex items-center justify-center relative [transform-style:preserve-3d]"
             >
               <div className="absolute w-full h-full border border-sky-400/30 rounded-full [transform:rotateX(60deg)]" />
               <div className="absolute w-full h-full border border-sky-400/30 rounded-full [transform:rotateY(60deg)]" />
               <Cpu className="w-16 h-16 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,1)]" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
