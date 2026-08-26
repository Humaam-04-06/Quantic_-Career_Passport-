import express from 'express';
import {
  submitFeedback,
  getMyFeedback,
} from '../controllers/feedbackController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/my', protect, getMyFeedback);

export default router;
