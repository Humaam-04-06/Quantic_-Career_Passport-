import { generateGeminiChatResponse } from '../services/geminiService.js';

// @desc    Handle AI Chat queries
// @route   POST /api/v1/chat
// @access  Public
export const handleChatMessage = async (req, res, next) => {
  try {
    const { messages, user } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Messages array is required for chat interaction',
      });
    }

    const { reply, model, isFallback } = await generateGeminiChatResponse(messages, user);

    res.status(200).json({
      success: true,
      reply,
      model,
      isFallback,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get AI Chat Service Status
// @route   GET /api/v1/chat/status
// @access  Public
export const getAiStatus = (req, res) => {
  const hasKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '' && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE';
  res.status(200).json({
    success: true,
    hasApiKey: hasKey,
    supportedModels: ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'],
    engineStatus: 'Ready for Prompt Ingestion',
  });
};
