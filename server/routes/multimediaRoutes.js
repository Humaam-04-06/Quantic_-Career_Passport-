import express from 'express';
import {
  getMultimedia,
  getMediaById,
  rateMedia,
} from '../controllers/multimediaController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getMultimedia);
router.get('/:id', getMediaById);
router.post('/:id/rate', protect, rateMedia);

export default router;
