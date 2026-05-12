import calculateThreatScore from '../services/threatScore';
import detectRouteDeviation from '../services/routeDeviation';
import detectSpoof from '../services/spoofDetection';
import { Request, Response } from 'express';
import Telemetry from '../models/Telemetry';

export const addTelemetry = async (req: Request, res: Response) => {
  try {
    const spoofDetected = detectSpoof(req.body);
    const routeDeviation = detectRouteDeviation(req.body);
    const threatAnalysis = calculateThreatScore({
  spoofDetected,
  routeDeviation,
  signalStrength: req.body.signalStrength
});
const telemetry = await Telemetry.create({
  ...req.body,
  spoofDetected,
  routeDeviation,
  threatScore: threatAnalysis.threatScore,
  riskLevel: threatAnalysis.riskLevel
});
    res.status(201).json(telemetry);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to store telemetry data'
    });
  }
};

export const getTelemetry = async (req: Request, res: Response) => {
  try {
    const data = await Telemetry.find().sort({ timestamp: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch telemetry'
    });
  }
};