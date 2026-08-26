import express from 'express';
import {
  getQuestions,
  submitQuiz,
  getQuizHistory,
  getQuizResultById,
} from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/evaluate', submitQuiz);
router.post('/submit', protect, submitQuiz);
router.get('/history', protect, getQuizHistory);
router.get('/results/:id', protect, getQuizResultById);

export default router;
