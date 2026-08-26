import express from 'express';
import {
  getResources,
  getResourceById,
  trackDownload,
  requestBlueprint,
  getResourceTelemetry,
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/telemetry', getResourceTelemetry);
router.get('/', getResources);
router.post('/request', requestBlueprint);
router.get('/:id', getResourceById);
router.post('/:id/download', trackDownload);

export default router;
