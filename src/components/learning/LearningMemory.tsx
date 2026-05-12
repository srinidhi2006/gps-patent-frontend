'use client';

import { motion } from 'framer-motion';
import { memoryZones } from '../../data/learning';
import { BrainCircuit } from 'lucide-react';

export default function LearningMemory() {
  return (
    <div className="glass p-6 rounded-2xl border-white/5 h-full">
      <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white">
        <BrainCircuit className="text-purple-400" />
        Environmental Memory Zones
      </h3>
      <div className="space-y-4">
        {memoryZones.map((zone, idx) => (
          <motion.div 
            key={zone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-colors group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-200">{zone.area}</span>
              <span className={`text-xs px-2 py-1 rounded-md ${
                zone.status === 'learning' ? 'bg-yellow-500/20 text-yellow-400' : 
                zone.status === 'mapped' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {zone.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex-1">
                <div className="text-gray-500 mb-1">Anomaly Rate</div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-red-400 h-1 rounded-full" style={{ width: `${zone.anomalyRate}%` }} />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-gray-500 mb-1">AI Confidence</div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-cyan-400 h-1 rounded-full" style={{ width: `${zone.confidenceGain}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
