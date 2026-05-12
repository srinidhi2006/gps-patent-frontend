'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import CorrectionSimulation from '@/components/correction/CorrectionSimulation';
import { Route } from 'lucide-react';

export default function CorrectionPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 mt-10"
        >
          <div className="inline-flex items-center gap-3 p-4 glass rounded-2xl mb-6 border-cyan-500/30 text-cyan-400">
            <Route size={28} />
            <span className="font-mono font-bold tracking-widest text-sm">MODULE 02</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Autonomous <span className="text-cyan-400">Correction</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Experience the AI prediction engine in action. When external signals degrade or are compromised, the system seamlessly transitions to internal kinematic models to maintain perfect trajectory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <CorrectionSimulation />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
