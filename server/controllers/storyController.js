import SuccessStory from '../models/SuccessStory.js';

// @desc    Get approved success stories with domain filter
// @route   GET /api/v1/stories
// @access  Public
export const getStories = async (req, res, next) => {
  try {
    const { domain } = req.query;

    let query = { status: 'approved' };
    if (domain && domain !== 'All') {
      query.domain = domain;
    }

    const stories = await SuccessStory.find(query).sort({ likesCount: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: stories.length,
      data: stories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single story by ID
// @route   GET /api/v1/stories/:id
// @access  Public
export const getStoryById = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ success: false, message: 'Story not found' });
    }
    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Submit user's own career success story (requires admin approval)
// @route   POST /api/v1/stories
// @access  Private
export const submitStory = async (req, res, next) => {
  try {
    const { authorName, authorRole, domain, currentCompany, educationalBackground, challengesFaced, turningPoint, currentOutcome, keyAdvice } = req.body;

    const story = await SuccessStory.create({
      authorName: authorName || req.user.name,
      authorRole,
      domain,
      currentCompany,
      timeline: {
        educationalBackground,
        challengesFaced,
        turningPoint,
        currentOutcome,
      },
      keyAdvice,
      submittedBy: req.user.id,
      status: 'pending',
    });

    res.status(201).json({
      success: true,
      message: 'Story submitted successfully! It will appear once approved by an administrator.',
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Like a success story
// @route   POST /api/v1/stories/:id/like
// @access  Private
export const likeStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { $inc: { likesCount: 1 } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      likesCount: story.likesCount,
    });
  } catch (error) {
    next(error);
  }
};
