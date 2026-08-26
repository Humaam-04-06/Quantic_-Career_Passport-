import Bookmark from '../models/Bookmark.js';
import Notification from '../models/Notification.js';
import UserProfile from '../models/UserProfile.js';

// @desc    Get all user bookmarks
// @route   GET /api/v1/user/bookmarks
// @access  Private
export const getBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.id })
      .populate('career')
      .populate('multimedia')
      .populate('resource')
      .populate('story')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookmarks.length,
      data: bookmarks,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add or toggle bookmark
// @route   POST /api/v1/user/bookmarks
// @access  Private
export const addBookmark = async (req, res, next) => {
  try {
    const { itemType, itemId, notes, tags } = req.body;

    const query = {
      user: req.user.id,
      itemType,
      [itemType]: itemId,
    };

    const existing = await Bookmark.findOne(query);
    if (existing) {
      // If exists, remove it (toggle off)
      await Bookmark.findByIdAndDelete(existing._id);
      if (itemType === 'career') {
        await UserProfile.findOneAndUpdate(
          { user: req.user.id },
          { $pull: { savedCareers: itemId } }
        );
      }
      return res.status(200).json({
        success: true,
        message: 'Bookmark removed',
        isBookmarked: false,
      });
    }

    const newBookmark = await Bookmark.create({
      user: req.user.id,
      itemType,
      [itemType]: itemId,
      notes: notes || '',
      tags: tags || [],
    });

    if (itemType === 'career') {
      await UserProfile.findOneAndUpdate(
        { user: req.user.id },
        { $addToSet: { savedCareers: itemId } }
      );
    }

    const populated = await Bookmark.findById(newBookmark._id)
      .populate('career')
      .populate('multimedia')
      .populate('resource');

    res.status(201).json({
      success: true,
      message: 'Bookmark saved successfully',
      isBookmarked: true,
      data: populated,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update sticky notes on bookmark
// @route   PUT /api/v1/user/bookmarks/:id
// @access  Private
export const updateBookmarkNotes = async (req, res, next) => {
  try {
    const { notes, tags } = req.body;

    const bookmark = await Bookmark.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { notes, tags },
      { new: true }
    );

    if (!bookmark) {
      return res.status(404).json({ success: false, message: 'Bookmark not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Sticky note updated',
      data: bookmark,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete bookmark
// @route   DELETE /api/v1/user/bookmarks/:id
// @access  Private
export const deleteBookmark = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!bookmark) {
      return res.status(404).json({ success: false, message: 'Bookmark not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Bookmark deleted',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user notifications
// @route   GET /api/v1/user/notifications
// @access  Private
export const getNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user dashboard data
// @route   GET /api/v1/user/dashboard
// @access  Private
export const getDashboard = async (req, res, next) => {
  try {
    let profile = await UserProfile.findOne({ user: req.user.id }).populate('savedCareers');
    
    if (!profile) {
      profile = await UserProfile.create({
        user: req.user.id,
        passportUid: `CPP-2026-${Math.floor(1000 + Math.random() * 9000)}X`,
        hollandCode: 'IRA-94',
        readinessScore: 88,
        streakDays: 14,
        targetRole: 'AI & Cloud Solutions Architect',
        targetCompany: 'Anthropic / AWS',
        checklistTasks: [
          {
            id: 'task-1',
            stageNumber: 1,
            stageName: 'Stage 1 • Cognitive Alignment',
            title: 'Complete 7-Step Holland RIASEC Cognitive Assessment',
            category: 'Assessment',
            isCompleted: true,
            timeframe: 'Day 1',
            impactScore: 10,
          },
          {
            id: 'task-2',
            stageNumber: 1,
            stageName: 'Stage 1 • Cognitive Alignment',
            title: 'Review RIASEC Radar & Download Career Passport Certificate',
            category: 'Credentials',
            isCompleted: true,
            timeframe: 'Day 3',
            impactScore: 5,
          },
          {
            id: 'task-3',
            stageNumber: 1,
            stageName: 'Stage 1 • Cognitive Alignment',
            title: 'Select Primary Career Pathway (AI & Cloud Architect)',
            category: 'Milestone',
            isCompleted: true,
            timeframe: 'Day 7',
            impactScore: 8,
          },
          {
            id: 'task-4',
            stageNumber: 2,
            stageName: 'Stage 2 • Core Engineering Sprints',
            title: 'Master Transformer FlashAttention-2 & KV-Cache Math',
            category: 'Masterclass',
            isCompleted: true,
            timeframe: 'Day 15',
            impactScore: 12,
          },
          {
            id: 'task-5',
            stageNumber: 2,
            stageName: 'Stage 2 • Core Engineering Sprints',
            title: 'Deploy Multi-Region Kubernetes Cluster via Terraform GitOps',
            category: 'Hands-on Lab',
            isCompleted: true,
            timeframe: 'Day 30',
            impactScore: 15,
          },
          {
            id: 'task-6',
            stageNumber: 2,
            stageName: 'Stage 2 • Core Engineering Sprints',
            title: 'Build Lock-Free Orderbook Simulation in C++20 / Python',
            category: 'Lab Sprint',
            isCompleted: false,
            timeframe: 'Day 45',
            impactScore: 14,
          },
          {
            id: 'task-7',
            stageNumber: 2,
            stageName: 'Stage 2 • Core Engineering Sprints',
            title: 'Audit System Design Blueprint for Distributed Rate Limiting',
            category: 'Blueprint',
            isCompleted: false,
            timeframe: 'Day 60',
            impactScore: 12,
          },
          {
            id: 'task-8',
            stageNumber: 3,
            stageName: 'Stage 3 • Production Capstones & Placement',
            title: 'Publish Open-Source Capstone Repository with 100% Test Coverage',
            category: 'Capstone',
            isCompleted: false,
            timeframe: 'Day 75',
            impactScore: 18,
          },
          {
            id: 'task-9',
            stageNumber: 3,
            stageName: 'Stage 3 • Production Capstones & Placement',
            title: 'Complete 3 Live Mock Technical System Design Interviews',
            category: 'Interview Drills',
            isCompleted: false,
            timeframe: 'Day 85',
            impactScore: 10,
          },
          {
            id: 'task-10',
            stageNumber: 3,
            stageName: 'Stage 3 • Production Capstones & Placement',
            title: 'Execute $160k+ Salary Negotiation Playbook on First Offer',
            category: 'Career Placement',
            isCompleted: false,
            timeframe: 'Day 90',
            impactScore: 10,
          },
        ],
      });
    }

    res.status(200).json({
      success: true,
      data: {
        user: req.user,
        profile,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Toggle a task in candidate roadmap
// @route   PUT /api/v1/user/tasks/:taskId
// @access  Private
export const toggleTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const profile = await UserProfile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    const taskIndex = profile.checklistTasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      profile.checklistTasks[taskIndex].isCompleted = !profile.checklistTasks[taskIndex].isCompleted;
      await profile.save();
    }

    res.status(200).json({
      success: true,
      data: profile.checklistTasks,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add custom sprint milestone
// @route   POST /api/v1/user/tasks
// @access  Private
export const addTask = async (req, res, next) => {
  try {
    const { title, stageNumber, stageName, category } = req.body;
    const profile = await UserProfile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    const newTask = {
      id: `task-${Date.now()}`,
      stageNumber: stageNumber || 2,
      stageName: stageName || 'Stage 2 • Core Engineering Sprints',
      title: title.trim(),
      category: category || 'Custom Goal',
      isCompleted: false,
      timeframe: 'In Progress',
      impactScore: 10,
    };

    profile.checklistTasks.unshift(newTask);
    await profile.save();

    res.status(201).json({
      success: true,
      data: profile.checklistTasks,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark notification as read
// @route   PUT /api/v1/user/notifications/:id/read
// @access  Private
export const markNotificationRead = async (req, res, next) => {
  try {
    await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { isRead: true }
    );

    res.status(200).json({
      success: true,
      message: 'Notification marked as read',
    });
  } catch (error) {
    next(error);
  }
};
