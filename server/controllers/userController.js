import Bookmark from '../models/Bookmark.js';
import Notification from '../models/Notification.js';

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
