import express from 'express';

const router = express.Router();

router.get('/prediction', (req, res) => {
  res.json({
    predictedRoute: 'Highway-45',
    confidenceLevel: 96,
    anomalyDetected: false,
    correctionApplied: true
  });
});

export default router;