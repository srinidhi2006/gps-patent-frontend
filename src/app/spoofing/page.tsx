'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PageTransition from '@/components/animations/PageTransition';
import AttackSimulation from '@/components/spoofing/AttackSimulation';
import { ShieldAlert } from 'lucide-react';

export default function SpoofingPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="max-w-6xl mx-auto pb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 mt-10"
          >
            <div className="inline-flex items-center gap-3 p-4 glass rounded-2xl mb-6 border-red-500/30 text-red-500">
              <ShieldAlert size={28} />
              <span className="font-mono font-bold tracking-widest text-sm">MODULE 04</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Spoofing <span className="text-red-500">Detection</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Simulate a military-grade GPS spoofing attack. Watch as the NavAI core detects abnormal signal strengths, isolates compromised satellite data, and seamlessly fails over to secure navigation modes.
            </p>
          </motion.div>

          <AttackSimulation />
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
