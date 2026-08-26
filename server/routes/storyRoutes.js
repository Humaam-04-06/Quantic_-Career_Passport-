import express from 'express';
import {
  getStories,
  getMyStories,
  getStoryById,
  submitStory,
  updateStory,
  likeStory,
  deleteStory,
} from '../controllers/storyController.js';

const router = express.Router();

router.get('/my-stories', getMyStories);
router.get('/', getStories);
router.get('/:id', getStoryById);
router.post('/', submitStory);
router.put('/:id', updateStory);
router.post('/:id/like', likeStory);
router.delete('/:id', deleteStory);

export default router;
