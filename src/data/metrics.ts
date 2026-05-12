import { MetricData } from '../types/metrics';

export const mockMetrics: MetricData[] = [
  { id: 'm1', label: 'GPS Reliability', value: 42, unit: '%', status: 'warning', trend: 'down', progress: 42 },
  { id: 'm2', label: 'Signal Strength', value: -85, unit: 'dBm', status: 'critical', trend: 'down', progress: 30 },
  { id: 'm3', label: 'AI Confidence', value: 98.5, unit: '%', status: 'normal', trend: 'up', progress: 98.5 },
  { id: 'm4', label: 'Spoofing Risk', value: 89, unit: '%', status: 'critical', trend: 'up', progress: 89 },
  { id: 'm5', label: 'Satellite Count', value: 4, unit: 'visible', status: 'warning', trend: 'down', progress: 33 },
  { id: 'm6', label: 'Correction Status', value: 'Active', unit: '', status: 'normal', trend: 'stable', progress: 100 },
];
