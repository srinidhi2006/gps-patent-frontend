'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArchitectureNode from './ArchitectureNode';
import { Satellite, Cpu, BrainCircuit, ShieldCheck, Map, Database, Navigation } from 'lucide-react';

export default function ArchitectureFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = [
    { title: 'GNSS Input', desc: 'Raw satellite telemetry and multiplexed spatial coordinates.', icon: <Satellite size={24} /> },
    { title: 'Signal Analysis', desc: 'Deep learning filtration of multipath interference and noise.', icon: <Cpu size={24} /> },
    { title: 'AI Prediction', desc: 'Reinforcement models anticipate trajectories based on kinetic history.', icon: <BrainCircuit size={24} /> },
    { title: 'Verification', desc: 'Cross-referencing predicted coordinates with actual sensor fusion.', icon: <ShieldCheck size={24} /> },
    { title: 'Correction', desc: 'Autonomous adjustment of trajectory using inertial dead-reckoning.', icon: <Map size={24} /> },
    { title: 'Learning Database', desc: 'Logging environmental anomalies for future swarm intelligence.', icon: <Database size={24} /> },
    { title: 'Navigation Output', desc: 'Final optimized, spoof-proof telemetry sent to the vehicle.', icon: <Navigation size={24} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="py-12 relative max-w-5xl mx-auto">
      {/* Data Flow Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full hidden md:block" />
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-transparent -translate-x-1/2 rounded-full hidden md:block blur-[2px]"
        initial={{ height: '0%' }}
        animate={{ height: `${((activeIndex + 1) / nodes.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />

      <div className="space-y-8 relative z-10">
        {nodes.map((node, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block flex-1" />
              
              {/* Connector Dot */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#050816] border-2 border-white/20 z-10">
                <motion.div 
                  className={`w-3 h-3 rounded-full ${idx <= activeIndex ? 'bg-cyan-400 shadow-[0_0_10px_#00E5FF]' : 'bg-transparent'}`}
                  animate={{ scale: idx === activeIndex ? [1, 1.5, 1] : 1 }}
                  transition={{ repeat: idx === activeIndex ? Infinity : 0, duration: 1 }}
                />
              </div>

              <div className="flex-1 w-full">
                <ArchitectureNode
                  title={node.title}
                  description={node.desc}
                  icon={node.icon}
                  delay={idx * 0.1}
                  isActive={idx === activeIndex}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
