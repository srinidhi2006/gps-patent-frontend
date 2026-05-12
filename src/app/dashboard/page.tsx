'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MetricsCard from '@/components/dashboard/MetricsCard';
import LiveMap from '@/components/map/LiveMap';
import SignalChart from '@/components/charts/SignalChart';
import AnomalyChart from '@/components/charts/AnomalyChart';
import { useMetrics } from '@/hooks/useMetrics';
import { useSignals } from '@/hooks/useSignals';
import { Activity, ShieldAlert, Radio } from 'lucide-react';

export default function Dashboard() {
  const { metrics, isLoading: metricsLoading } = useMetrics();
  const { signals, anomalies, isLoading: signalsLoading } = useSignals();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mt-4"
        >
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Activity className="text-cyan-400" />
              Command <span className="text-cyan-400">Center</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Live telemetry and AI prediction monitoring</p>
          </div>
          <div className="flex gap-4">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border-red-500/30">
              <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-xs text-red-400 font-mono">SPOOFING DETECTED</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border-cyan-500/30">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-mono">AI CORRECTION ACTIVE</span>
            </div>
          </div>
        </motion.div>

        {/* Top Row: Map & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 h-[450px]"
          >
            <LiveMap />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {metricsLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass rounded-xl p-5 animate-pulse h-32" />
              ))
            ) : (
              metrics.slice(0, 4).map((metric, idx) => (
                <MetricsCard key={metric.id} data={metric} delay={idx * 0.1} />
              ))
            )}
          </div>
        </div>

        {/* Bottom Row: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border-white/5"
          >
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white">
              Signal Fusion Analysis
              <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-md">Live</span>
            </h3>
            {signalsLoading ? (
              <div className="w-full h-[250px] animate-pulse bg-white/5 rounded-xl" />
            ) : (
              <SignalChart data={signals} />
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 border-white/5"
          >
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white">
              Anomaly Detection Thresholds
              <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md">Warning</span>
            </h3>
            {signalsLoading ? (
              <div className="w-full h-[250px] animate-pulse bg-white/5 rounded-xl" />
            ) : (
              <AnomalyChart data={anomalies} />
            )}
          </motion.div>
        </div>

      </div>
    </DashboardLayout>
  );
}
