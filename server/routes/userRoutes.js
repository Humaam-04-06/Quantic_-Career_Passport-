import express from 'express';
import {
  getBookmarks,
  addBookmark,
  updateBookmarkNotes,
  deleteBookmark,
  getNotifications,
  markNotificationRead,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/bookmarks', protect, getBookmarks);
router.post('/bookmarks', protect, addBookmark);
router.put('/bookmarks/:id', protect, updateBookmarkNotes);
router.delete('/bookmarks/:id', protect, deleteBookmark);

router.get('/notifications', protect, getNotifications);
router.put('/notifications/:id/read', protect, markNotificationRead);

export default router;
