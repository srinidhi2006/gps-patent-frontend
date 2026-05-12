import { useState, useEffect } from 'react';
import { MetricData } from '../types/metrics';
import { mockMetrics } from '../data/metrics';

export function useMetrics() {
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setMetrics(mockMetrics);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { metrics, isLoading };
}
