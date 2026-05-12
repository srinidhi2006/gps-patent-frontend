import { SignalData, AnomalyData } from '../types/metrics';

export const mockSignals: SignalData[] = Array.from({ length: 20 }, (_, i) => ({
  time: `10:${i.toString().padStart(2, '0')}`,
  gpsStrength: Math.max(10, 90 - (i * 4) + Math.random() * 20),
  aiConfidence: Math.min(100, 80 + (i * 1) + Math.random() * 5),
  noiseLevel: Math.min(100, 20 + (i * 3) + Math.random() * 15),
}));

export const mockAnomalies: AnomalyData[] = Array.from({ length: 20 }, (_, i) => ({
  time: `10:${i.toString().padStart(2, '0')}`,
  spoofingProbability: i > 10 ? 80 + Math.random() * 20 : 10 + Math.random() * 10,
  threshold: 50,
}));
