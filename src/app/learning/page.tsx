'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PageTransition from '@/components/animations/PageTransition';
import NeuralNode from '@/components/learning/NeuralNode';
import LearningMemory from '@/components/learning/LearningMemory';
import DataLine from '@/components/animations/DataLine';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { confidenceEvolution } from '@/data/learning';
import { Cpu } from 'lucide-react';

export default function LearningPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="max-w-7xl mx-auto pb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 mt-6"
          >
            <div className="inline-flex items-center gap-3 p-4 glass rounded-2xl mb-6 border-purple-500/30 text-purple-400">
              <Cpu size={28} />
              <span className="font-mono font-bold tracking-widest text-sm">MODULE 03</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Self-Evolving <span className="text-purple-400">Intelligence</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Continuous edge-based reinforcement learning models adapt to environmental patterns, mapping anomaly zones to optimize future trajectory predictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Neural Network Visualization */}
            <div className="lg:col-span-2 glass rounded-3xl p-8 border-white/5 relative overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
              
              <div className="relative w-full max-w-lg flex justify-between items-center z-10">
                {/* Input Layer */}
                <div className="flex flex-col gap-6">
                  <NeuralNode label="SENS_1" active />
                  <NeuralNode label="SENS_2" active />
                  <NeuralNode label="SENS_3" />
                </div>
                
                {/* Hidden Layer 1 */}
                <div className="flex flex-col gap-12 relative">
                  <NeuralNode label="L1_A" active />
                  <NeuralNode label="L1_B" active />
                </div>
                
                {/* Hidden Layer 2 */}
                <div className="flex flex-col gap-8">
                  <NeuralNode label="L2_A" active />
                  <NeuralNode label="L2_B" />
                  <NeuralNode label="L2_C" active />
                </div>
                
                {/* Output Layer */}
                <div className="flex flex-col gap-4">
                  <NeuralNode label="PREDICT" active />
                </div>
              </div>
            </div>

            {/* Memory Zones */}
            <div className="lg:col-span-1">
              <LearningMemory />
            </div>

            {/* Chart */}
            <div className="lg:col-span-3 glass rounded-2xl p-6 border-white/5">
               <h3 className="text-lg font-medium mb-6 text-white">Confidence Evolution Over Epochs</h3>
               <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={confidenceEvolution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4b5563" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4b5563" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                    <XAxis dataKey="epoch" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(11, 17, 32, 0.9)', borderColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="baseline" stroke="#6b7280" strokeWidth={2} fill="url(#colorBaseline)" name="Standard GPS" />
                    <Area type="monotone" dataKey="ai" stroke="#a855f7" strokeWidth={2} fill="url(#colorAi)" name="NavAI Confidence" />
                  </AreaChart>
                </ResponsiveContainer>
               </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
