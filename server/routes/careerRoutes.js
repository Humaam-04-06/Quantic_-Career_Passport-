import express from 'express';
import {
  getCareers,
  getCareerById,
  getTrendingCareers,
  getRecommendations,
} from '../controllers/careerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCareers);
router.get('/trending', getTrendingCareers);
router.get('/recommendations', protect, getRecommendations);
router.get('/:id', getCareerById);

export default router;
