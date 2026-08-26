import express from 'express';
import {
  getAdminStats,
  getPendingStories,
  updateStoryStatus,
  deleteStory,
  getAdminMedia,
  createMedia,
  updateMedia,
  deleteMedia,
  getAdminResources,
  createResource,
  updateResource,
  deleteResource,
  getBlueprintRequests,
  updateBlueprintRequestStatus,
  getAdminCareers,
  createCareer,
  updateCareer,
  deleteCareer,
  getAdminQuizQuestions,
  createQuizQuestion,
  updateQuizQuestion,
  deleteQuizQuestion,
  getUsers,
  updateUserRole,
  toggleUserVerification,
  toggleUserBlock,
  deleteUser,
  flushCache,
} from '../controllers/adminController.js';

const router = express.Router();

// 1. Overview stats & Telemetry
router.get('/stats', getAdminStats);
router.post('/system/flush-cache', flushCache);

// 2. Stories moderation
router.get('/stories', getPendingStories);
router.put('/stories/:id/status', updateStoryStatus);
router.delete('/stories/:id', deleteStory);

// 3. Multimedia CMS
router.get('/multimedia', getAdminMedia);
router.post('/multimedia', createMedia);
router.put('/multimedia/:id', updateMedia);
router.delete('/multimedia/:id', deleteMedia);

// 4. Resources CMS & Blueprint Requests
router.get('/resources', getAdminResources);
router.post('/resources', createResource);
router.put('/resources/:id', updateResource);
router.delete('/resources/:id', deleteResource);
router.get('/requests', getBlueprintRequests);
router.put('/requests/:id', updateBlueprintRequestStatus);

// 5. Careers Bank CRUD
router.get('/careers', getAdminCareers);
router.post('/careers', createCareer);
router.put('/careers/:id', updateCareer);
router.delete('/careers/:id', deleteCareer);

// 6. Quiz Questions CMS
router.get('/quiz-questions', getAdminQuizQuestions);
router.post('/quiz-questions', createQuizQuestion);
router.put('/quiz-questions/:id', updateQuizQuestion);
router.delete('/quiz-questions/:id', deleteQuizQuestion);

// 7. Users & Roles & Blocking
router.get('/users', getUsers);
router.put('/users/:id/role', updateUserRole);
router.put('/users/:id/verify', toggleUserVerification);
router.put('/users/:id/block', toggleUserBlock);
router.delete('/users/:id', deleteUser);

export default router;
