'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { AnomalyData } from '../../types/metrics';

export default function AnomalyChart({ data }: { data: AnomalyData[] }) {
  return (
    <div className="w-full h-[300px] min-h-[300px]">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis dataKey="time" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(11, 17, 32, 0.9)', borderColor: 'rgba(239, 68, 68, 0.2)', borderRadius: '8px' }}
          />
          <ReferenceLine y={50} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Danger Threshold', fill: '#ef4444', fontSize: 10 }} />
          <Line type="monotone" dataKey="spoofingProbability" stroke="#eab308" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: '#eab308', stroke: '#fff' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
