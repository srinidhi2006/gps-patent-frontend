export const memoryZones = [
  { id: 1, area: 'Tunnel Sector 7', anomalyRate: 85, confidenceGain: 92, status: 'mapped' },
  { id: 2, area: 'Urban Canyon Alpha', anomalyRate: 64, confidenceGain: 88, status: 'mapped' },
  { id: 3, area: 'Bridge Expanse', anomalyRate: 22, confidenceGain: 99, status: 'safe' },
  { id: 4, area: 'Industrial Grid', anomalyRate: 91, confidenceGain: 76, status: 'learning' }
];

export const confidenceEvolution = [
  { epoch: '100', baseline: 60, ai: 65 },
  { epoch: '200', baseline: 62, ai: 72 },
  { epoch: '300', baseline: 61, ai: 85 },
  { epoch: '400', baseline: 60, ai: 94 },
  { epoch: '500', baseline: 63, ai: 98 },
];
