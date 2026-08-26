import express from 'express';
import {
  getStories,
  getStoryById,
  submitStory,
  likeStory,
} from '../controllers/storyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStoryById);
router.post('/', protect, submitStory);
router.post('/:id/like', protect, likeStory);

export default router;
