import express from 'express';
import {
  getMultimedia,
  getMediaById,
  recordProgress,
  postDiscussion,
  updateDiscussion,
  deleteDiscussion,
  rateMedia,
} from '../controllers/multimediaController.js';

const router = express.Router();

router.get('/', getMultimedia);
router.get('/:id', getMediaById);
router.post('/:id/progress', recordProgress);
router.post('/:id/discussion', postDiscussion);
router.put('/:id/discussion/:commentId', updateDiscussion);
router.delete('/:id/discussion/:commentId', deleteDiscussion);
router.post('/:id/rate', rateMedia);

export default router;
