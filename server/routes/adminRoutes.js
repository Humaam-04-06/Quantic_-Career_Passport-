import express from 'express';
import {
  getAdminStats,
  createCareer,
  updateCareer,
  deleteCareer,
  updateStoryStatus,
  replyFeedback,
} from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleGuard.js';

const router = express.Router();

// Protect all admin routes
router.use(protect);
router.use(authorize('admin'));

router.get('/stats', getAdminStats);

// Career management
router.post('/careers', createCareer);
router.put('/careers/:id', updateCareer);
router.delete('/careers/:id', deleteCareer);

// Story moderation
router.put('/stories/:id/status', updateStoryStatus);

// Feedback reply
router.put('/feedback/:id/reply', replyFeedback);

export default router;
