'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

export default function InnovationSection() {
  const highlights = [
    { value: '99.9%', label: 'Signal Accuracy in Urban Canyons' },
    { value: '<1ms', label: 'Failover Response Time' },
    { value: '10x', label: 'Lower Power Consumption' },
    { value: 'Zero', label: 'Dependency on External Infrastructure' }
  ];

  return (
    <section id="innovation" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Innovation <span className="text-cyan-400">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((stat, i) => (
            <GlassCard key={i} delay={i * 0.1} className="text-center flex flex-col justify-center items-center py-10">
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 + (i * 0.1) }}
                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-sky-600 mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
