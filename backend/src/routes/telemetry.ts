import express from 'express';

import {
  addTelemetry,
  getTelemetry
} from '../controllers/telemetryController';

const router = express.Router();

router.post('/add', addTelemetry);

router.get('/live', getTelemetry);

export default router;