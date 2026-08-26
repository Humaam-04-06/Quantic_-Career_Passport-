import express from 'express';
import { handleChatMessage, getAiStatus } from '../controllers/aiChatController.js';

const router = express.Router();

router.post('/', handleChatMessage);
router.get('/status', getAiStatus);

export default router;
