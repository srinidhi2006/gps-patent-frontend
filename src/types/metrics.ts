export interface MetricData {
  id: string;
  label: string;
  value: number | string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  progress?: number;
}

export interface SignalData {
  time: string;
  gpsStrength: number;
  aiConfidence: number;
  noiseLevel: number;
}

export interface AnomalyData {
  time: string;
  spoofingProbability: number;
  threshold: number;
}
