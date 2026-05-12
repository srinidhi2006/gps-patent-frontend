'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { ShieldCheck, Zap, Database } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-cyan-400">Invention</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our system redefines autonomous navigation by continuously learning from multi-modal sensor inputs to counteract signal degradation and spoofing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard delay={0.1}>
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Spoofing Resilience</h3>
            <p className="text-gray-400 text-sm">
              Advanced neural networks identify and isolate compromised satellite signals in real-time, switching to internal inertial tracking seamlessly.
            </p>
          </GlassCard>

          <GlassCard delay={0.2}>
            <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center mb-6 text-sky-400 border border-sky-500/30">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Zero-Latency Fusion</h3>
            <p className="text-gray-400 text-sm">
              Proprietary sensor fusion algorithms process LiDAR, visual odometry, and IMU data with sub-millisecond latency for ultra-precise positioning.
            </p>
          </GlassCard>

          <GlassCard delay={0.3}>
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/30">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Continuous Learning</h3>
            <p className="text-gray-400 text-sm">
              Edge-based reinforcement learning models adapt to dynamic environments, constantly improving trajectory prediction accuracy over time.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
