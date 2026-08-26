import Multimedia from '../models/Multimedia.js';

// @desc    Get all multimedia items with category and search filter
// @route   GET /api/v1/multimedia
// @access  Public
export const getMultimedia = async (req, res, next) => {
  try {
    const { domain, type, search } = req.query;

    let query = {};
    if (domain && domain !== 'All') query.domain = domain;
    if (type && type !== 'All') query.type = type;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { speakerName: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    const mediaList = await Multimedia.find(query).sort({ averageRating: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: mediaList.length,
      data: mediaList,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single media by ID and increment view
// @route   GET /api/v1/multimedia/:id
// @access  Public
export const getMediaById = async (req, res, next) => {
  try {
    const media = await Multimedia.findByIdAndUpdate(
      req.params.id,
      { $inc: { viewsCount: 1 } },
      { new: true }
    );

    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }

    // Get related suggestions
    const related = await Multimedia.find({
      domain: media.domain,
      _id: { $ne: media._id },
    }).limit(4);

    res.status(200).json({
      success: true,
      data: media,
      related,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Rate and review multimedia item
// @route   POST /api/v1/multimedia/:id/rate
// @access  Private
export const rateMedia = async (req, res, next) => {
  try {
    const { score, comment } = req.body;
    const media = await Multimedia.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }

    // Check if user already rated
    const existingIndex = media.ratings.findIndex(r => r.user.toString() === req.user.id);
    if (existingIndex > -1) {
      media.ratings[existingIndex].score = score;
      media.ratings[existingIndex].comment = comment || '';
    } else {
      media.ratings.push({
        user: req.user.id,
        score,
        comment,
      });
    }

    // Recalculate average
    const totalScore = media.ratings.reduce((acc, curr) => acc + curr.score, 0);
    media.averageRating = (totalScore / media.ratings.length).toFixed(1);
    media.totalRatingsCount = media.ratings.length;

    await media.save();

    res.status(200).json({
      success: true,
      message: 'Rating submitted successfully',
      data: media,
    });
  } catch (error) {
    next(error);
  }
};
