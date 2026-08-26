import express from 'express';
import {
  register,
  login,
  getMe,
  updateProfile,
  uploadResume,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/upload-resume', protect, upload.single('resume'), uploadResume);

export default router;
