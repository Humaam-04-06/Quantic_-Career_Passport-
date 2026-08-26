import Career from '../models/Career.js';
import UserProfile from '../models/UserProfile.js';

// @desc    Get all careers with advanced filtering and search
// @route   GET /api/v1/careers
// @access  Public
export const getCareers = async (req, res, next) => {
  try {
    const { search, domain, demand, minSalary, maxSalary, skill, page = 1, limit = 12 } = req.query;

    let query = {};

    // Search keyword
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { requiredSkills: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    // Filter by domain
    if (domain && domain !== 'All') {
      query.domain = domain;
    }

    // Filter by demand level
    if (demand && demand !== 'All') {
      query.jobDemand = demand;
    }

    // Filter by salary
    if (minSalary || maxSalary) {
      query['expectedSalary.entryLevel'] = {};
      if (minSalary) query['expectedSalary.entryLevel'].$gte = Number(minSalary);
      if (maxSalary) query['expectedSalary.entryLevel'].$lte = Number(maxSalary);
    }

    // Filter by specific skill
    if (skill) {
      query.requiredSkills = { $in: [new RegExp(skill, 'i')] };
    }

    const total = await Career.countDocuments(query);
    const careers = await Career.find(query)
      .sort({ isTrending: -1, viewsCount: -1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      count: careers.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      data: careers,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single career details & increment view count
// @route   GET /api/v1/careers/:id
// @access  Public
export const getCareerById = async (req, res, next) => {
  try {
    const career = await Career.findByIdAndUpdate(
      req.params.id,
      { $inc: { viewsCount: 1 } },
      { new: true }
    );

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    // Find related careers in the same domain
    const relatedCareers = await Career.find({
      domain: career.domain,
      _id: { $ne: career._id },
    }).limit(3);

    res.status(200).json({
      success: true,
      data: career,
      related: relatedCareers,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get trending & top pick careers
// @route   GET /api/v1/careers/trending
// @access  Public
export const getTrendingCareers = async (req, res, next) => {
  try {
    const trending = await Career.find({ isTrending: true }).limit(6);
    const topViews = await Career.find().sort({ viewsCount: -1 }).limit(6);

    res.status(200).json({
      success: true,
      trending,
      topViews,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic recommendations based on user profile skills & interests
// @route   GET /api/v1/careers/recommendations
// @access  Private
export const getRecommendations = async (req, res, next) => {
  try {
    const profile = await UserProfile.findOne({ user: req.user.id });

    let query = {};
    if (profile && (profile.skills.length > 0 || profile.interests.length > 0)) {
      const matchCriteria = [...profile.skills, ...profile.interests];
      query = {
        $or: [
          { requiredSkills: { $in: matchCriteria.map(k => new RegExp(k, 'i')) } },
          { domain: profile.targetCareerDomain },
        ],
      };
    }

    const recommendations = await Career.find(query).limit(6);

    res.status(200).json({
      success: true,
      data: recommendations.length > 0 ? recommendations : await Career.find().limit(6),
    });
  } catch (error) {
    next(error);
  }
};
