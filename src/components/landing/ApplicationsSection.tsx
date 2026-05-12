'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Plane, Car, Ship, Rocket } from 'lucide-react';

export default function ApplicationsSection() {
  const apps = [
    { icon: <Car size={32} />, title: 'Autonomous Vehicles', desc: 'Maintains lane-level precision during tunnel transit and urban interference.' },
    { icon: <Plane size={32} />, title: 'UAV Swarms', desc: 'Enables synchronized flight patterns without relying on vulnerable satellite uplinks.' },
    { icon: <Ship size={32} />, title: 'Maritime Navigation', desc: 'Counteracts oceanic spoofing attacks in contested maritime chokepoints.' },
    { icon: <Rocket size={32} />, title: 'Aerospace', desc: 'Provides resilient orbital insertion telemetry resistant to cosmic radiation bit-flips.' },
  ];

  return (
    <section id="applications" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Commercial <span className="text-sky-400">Applications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A versatile architecture designed for cross-industry deployment wherever mission-critical positioning is required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group cursor-pointer">
              <div className="mb-6 p-4 rounded-full bg-white/5 inline-block text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 border border-transparent group-hover:border-cyan-500/30">
                {app.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
              <p className="text-sm text-gray-400">{app.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
