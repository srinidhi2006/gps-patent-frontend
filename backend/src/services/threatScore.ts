interface ThreatData {
  spoofDetected: boolean;
  routeDeviation: boolean;
  signalStrength: number;
}

const calculateThreatScore = (data: ThreatData) => {
  let score = 0;

  if (data.spoofDetected) {
    score += 50;
  }

  if (data.routeDeviation) {
    score += 30;
  }

  if (data.signalStrength < 30) {
    score += 20;
  }

  let riskLevel = 'LOW';

  if (score >= 70) {
    riskLevel = 'HIGH';
  } else if (score >= 40) {
    riskLevel = 'MEDIUM';
  }

  return {
    threatScore: score,
    riskLevel
  };
};

export default calculateThreatScore;