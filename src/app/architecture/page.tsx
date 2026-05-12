'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ArchitectureFlow from '@/components/architecture/ArchitectureFlow';
import { Network } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center mt-10"
        >
          <div className="inline-flex items-center justify-center p-4 glass rounded-full mb-6 border-cyan-500/30 text-cyan-400">
            <Network size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            System <span className="text-cyan-400">Architecture</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The patented NavAI core utilizes a modular pipeline to process, verify, and correct spatial telemetry in real-time, ensuring zero dependency on vulnerable external signals.
          </p>
        </motion.div>

        <ArchitectureFlow />
      </div>
    </DashboardLayout>
  );
}
