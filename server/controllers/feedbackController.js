import Feedback from '../models/Feedback.js';

// @desc    Submit user feedback or bug report
// @route   POST /api/v1/feedback
// @access  Public / Private
export const submitFeedback = async (req, res, next) => {
  try {
    const { name, email, type, message, rating } = req.body;

    const feedback = await Feedback.create({
      user: req.user ? req.user.id : undefined,
      name: req.user ? req.user.name : name,
      email: req.user ? req.user.email : email,
      type: type || 'suggestion',
      message,
      rating: rating || 5,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your valuable feedback!',
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current user's submitted feedback
// @route   GET /api/v1/feedback/my
// @access  Private
export const getMyFeedback = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    next(error);
  }
};
