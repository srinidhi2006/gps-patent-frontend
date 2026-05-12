export const attackTimeline = [
  { time: '00:00', event: 'Nominal Navigation', risk: 10, type: 'safe' },
  { time: '00:05', event: 'Anomalous Signal Strength', risk: 45, type: 'warning' },
  { time: '00:08', event: 'Position Drift Detected', risk: 85, type: 'critical' },
  { time: '00:10', event: 'Spoofed Satellite Identified', risk: 98, type: 'critical' },
  { time: '00:12', event: 'Signal Isolated & Rejected', risk: 30, type: 'recovery' },
  { time: '00:15', event: 'AI Dead-Reckoning Active', risk: 15, type: 'safe' },
];

export const satellites = [
  { id: 'SAT-11', status: 'authentic', strength: 82 },
  { id: 'SAT-14', status: 'authentic', strength: 78 },
  { id: 'SAT-22', status: 'spoofed', strength: 99 },
  { id: 'SAT-05', status: 'authentic', strength: 85 },
];
