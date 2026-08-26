import express from 'express';
import {
  getResources,
  trackDownload,
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/', getResources);
router.post('/:id/download', trackDownload);

export default router;
