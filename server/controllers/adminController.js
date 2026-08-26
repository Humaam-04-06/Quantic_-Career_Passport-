import User from '../models/User.js';
import Career from '../models/Career.js';
import QuizQuestion from '../models/QuizQuestion.js';
import QuizResult from '../models/QuizResult.js';
import Multimedia from '../models/Multimedia.js';
import SuccessStory from '../models/SuccessStory.js';
import Resource from '../models/Resource.js';
import Feedback from '../models/Feedback.js';
import Notification from '../models/Notification.js';

// @desc    Get admin analytics, usage statistics & telemetry
// @route   GET /api/v1/admin/stats
// @access  Private (Admin only)
export const getAdminStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const studentsCount = await User.countDocuments({ role: 'student' });
    const graduatesCount = await User.countDocuments({ role: 'graduate' });
    const prosCount = await User.countDocuments({ role: 'professional' });

    const totalCareers = await Career.countDocuments();
    const totalQuizzesTaken = await QuizResult.countDocuments();
    const totalMedia = await Multimedia.countDocuments();
    const totalStories = await SuccessStory.countDocuments();
    const pendingStories = await SuccessStory.countDocuments({ status: 'pending' });
    const totalFeedback = await Feedback.countDocuments();
    const openFeedback = await Feedback.countDocuments({ status: { $in: ['new', 'in_progress'] } });

    // Popular careers
    const topCareers = await Career.find().sort({ viewsCount: -1 }).limit(5);

    // Feedback breakdown
    const feedbackStats = await Feedback.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        users: {
          total: totalUsers,
          students: studentsCount,
          graduates: graduatesCount,
          professionals: prosCount,
        },
        careers: totalCareers,
        quizzesTaken: totalQuizzesTaken,
        mediaCount: totalMedia,
        stories: {
          total: totalStories,
          pending: pendingStories,
        },
        feedback: {
          total: totalFeedback,
          open: openFeedback,
          breakdown: feedbackStats,
        },
        topCareers,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Career Management (Create, Update, Delete)
export const createCareer = async (req, res, next) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json({ success: true, data: career });
  } catch (error) {
    next(error);
  }
};

export const updateCareer = async (req, res, next) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!career) return res.status(404).json({ success: false, message: 'Career not found' });
    res.status(200).json({ success: true, data: career });
  } catch (error) {
    next(error);
  }
};

export const deleteCareer = async (req, res, next) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);
    if (!career) return res.status(404).json({ success: false, message: 'Career not found' });
    res.status(200).json({ success: true, message: 'Career deleted' });
  } catch (error) {
    next(error);
  }
};

// @desc    Story Moderation (Approve, Reject)
export const updateStoryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const story = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { status, approvedBy: req.user.id },
      { new: true }
    );

    if (!story) return res.status(404).json({ success: false, message: 'Story not found' });

    if (story.submittedBy) {
      await Notification.create({
        user: story.submittedBy,
        title: `Story ${status.toUpperCase()}`,
        message: `Your career success story has been ${status} by the admin team.`,
        type: 'story_approved',
      });
    }

    res.status(200).json({ success: true, data: story });
  } catch (error) {
    next(error);
  }
};

// @desc    Feedback Reply
export const replyFeedback = async (req, res, next) => {
  try {
    const { replyMessage, status } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      {
        adminReply: replyMessage,
        status: status || 'resolved',
        repliedAt: Date.now(),
      },
      { new: true }
    );

    if (!feedback) return res.status(404).json({ success: false, message: 'Feedback not found' });

    if (feedback.user) {
      await Notification.create({
        user: feedback.user,
        title: 'Admin Replied to Your Feedback',
        message: replyMessage,
        type: 'feedback_reply',
      });
    }

    res.status(200).json({ success: true, data: feedback });
  } catch (error) {
    next(error);
  }
};
