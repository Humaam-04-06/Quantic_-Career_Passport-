import Resource from '../models/Resource.js';

// @desc    Get all downloadable resources & guides
// @route   GET /api/v1/resources
// @access  Public
export const getResources = async (req, res, next) => {
  try {
    const { category, targetAudience, tag, search } = req.query;

    let query = {};
    if (category && category !== 'All') query.category = category;
    if (targetAudience && targetAudience !== 'All') {
      query.$or = [{ targetAudience: 'All' }, { targetAudience }];
    }
    if (tag && tag !== 'All') query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const resources = await Resource.find(query).sort({ downloadCount: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Track download count
// @route   POST /api/v1/resources/:id/download
// @access  Public
export const trackDownload = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndUpdate(
      req.params.id,
      { $inc: { downloadCount: 1 } },
      { new: true }
    );

    if (!resource) {
      return res.status(404).json({ success: false, message: 'Resource not found' });
    }

    res.status(200).json({
      success: true,
      downloadCount: resource.downloadCount,
    });
  } catch (error) {
    next(error);
  }
};
