import express from 'express';

const router = express.Router();

router.get('/stats', (req, res) => {
  res.json({
    aiConfidence: 97,
    activeSatellites: 14,
    threatsDetected: 2,
    signalReliability: 93
  });
});

export default router;