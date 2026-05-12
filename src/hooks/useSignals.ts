import { useState, useEffect } from 'react';
import { SignalData, AnomalyData } from '../types/metrics';
import { mockSignals, mockAnomalies } from '../data/signals';

export function useSignals() {
  const [signals, setSignals] = useState<SignalData[]>([]);
  const [anomalies, setAnomalies] = useState<AnomalyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSignals(mockSignals);
      setAnomalies(mockAnomalies);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { signals, anomalies, isLoading };
}
