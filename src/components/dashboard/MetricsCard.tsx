'use client';

import { motion } from 'framer-motion';
import { MetricData } from '../../types/metrics';

interface MetricsCardProps {
  data: MetricData;
  delay?: number;
}

export default function MetricsCard({ data, delay = 0 }: MetricsCardProps) {
  const statusColors = {
    normal: 'text-cyan-400 border-cyan-500/30',
    warning: 'text-yellow-400 border-yellow-500/30',
    critical: 'text-red-400 border-red-500/30'
  };

  const progressColors = {
    normal: 'bg-cyan-400',
    warning: 'bg-yellow-400',
    critical: 'bg-red-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-xl p-5 border-l-4 ${statusColors[data.status].split(' ')[1]} flex flex-col justify-between h-full relative overflow-hidden group hover:bg-white/5 transition-colors`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{data.label}</h3>
        {data.trend === 'up' && <span className="text-green-400 text-xs">▲</span>}
        {data.trend === 'down' && <span className="text-red-400 text-xs">▼</span>}
      </div>
      
      <div className="flex items-end gap-2 z-10">
        <span className={`text-3xl font-black ${statusColors[data.status].split(' ')[0]} drop-shadow-[0_0_8px_currentColor]`}>
          {data.value}
        </span>
        <span className="text-gray-500 text-sm font-medium mb-1">{data.unit}</span>
      </div>

      {data.progress !== undefined && (
        <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${data.progress}%` }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            className={`h-full ${progressColors[data.status]} drop-shadow-[0_0_5px_currentColor]`}
          />
        </div>
      )}
      
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-colors" />
    </motion.div>
  );
}
