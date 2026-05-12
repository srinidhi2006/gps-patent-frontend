import { Request, Response } from 'express';

export const getDashboardStats = (req: Request, res: Response) => {
  res.json({
    aiConfidence: 97,
    activeSatellites: 14,
    threatsDetected: 2,
    signalReliability: 93,
    spoofingRisk: 'LOW',
    systemStatus: 'ACTIVE'
  });
};