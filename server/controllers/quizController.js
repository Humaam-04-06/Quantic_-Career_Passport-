import QuizQuestion from '../models/QuizQuestion.js';
import QuizResult from '../models/QuizResult.js';
import Career from '../models/Career.js';

// @desc    Get all active quiz questions ordered
// @route   GET /api/v1/quiz/questions
// @access  Public
export const getQuestions = async (req, res, next) => {
  try {
    const questions = await QuizQuestion.find().sort({ order: 1 });
    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};

import UserProfile from '../models/UserProfile.js';

// @desc    Submit quiz answers, compute category scores, recommend career streams
// @route   POST /api/v1/quiz/submit & POST /api/v1/quiz/evaluate
// @access  Public / Optional Auth
export const submitQuiz = async (req, res, next) => {
  try {
    const { answers, persona, timeTakenSeconds } = req.body;

    const scoresByCategory = {
      analytical: 0,
      creative: 0,
      leadership: 0,
      technical: 0,
      social: 0,
      investigative: 0,
      practical: 0,
    };

    // Calculate score distribution if array of answers provided
    if (Array.isArray(answers)) {
      for (const ans of answers) {
        if (ans.questionId && scoresByCategory[ans.questionId] !== undefined) {
          scoresByCategory[ans.questionId] += Number(ans.answerValue) || 3;
        }
      }
    } else if (typeof answers === 'object' && answers !== null) {
      for (const [key, val] of Object.entries(answers)) {
        if (scoresByCategory[key] !== undefined) {
          scoresByCategory[key] = Number(val) || 3;
        }
      }
    }

    // Determine top 2-3 personality traits
    const sortedTraits = Object.entries(scoresByCategory)
      .sort(([, a], [, b]) => b - a)
      .map(([trait]) => trait);

    const topTraits = sortedTraits.slice(0, 3);

    // Map top traits to recommended domains
    const domainMapping = {
      technical: 'Technology',
      analytical: 'Business & Finance',
      investigative: 'Technology',
      creative: 'Creative & Design',
      leadership: 'Business & Finance',
      social: 'Healthcare',
      practical: 'Technology',
    };

    const recommendedDomains = [...new Set(topTraits.map((t) => domainMapping[t] || 'Technology'))];

    // Find recommended careers in these domains
    const recommendedCareers = await Career.find({
      domain: { $in: recommendedDomains },
    }).limit(6);

    let savedResult = null;

    // If user is authenticated, save quiz history & update UserProfile
    if (req.user && req.user.id) {
      const quizResult = await QuizResult.create({
        user: req.user.id,
        scoresByCategory,
        topTraits,
        recommendedDomains,
        recommendedCareers: recommendedCareers.map((c) => c._id),
        answers: Array.isArray(answers) ? answers : [],
        timeTakenSeconds: timeTakenSeconds || 120,
      });

      savedResult = await QuizResult.findById(quizResult._id).populate('recommendedCareers');

      // Update UserProfile with Holland Code & target domain
      const hollandLetter = topTraits[0] ? topTraits[0][0].toUpperCase() : 'I';
      const hollandCode = `${hollandLetter}RA-94`;
      await UserProfile.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: {
            hollandArchetype: hollandCode,
            readinessScore: 88,
          },
        }
      );
    }

    res.status(200).json({
      success: true,
      message: 'Cognitive assessment evaluated successfully',
      data: {
        scoresByCategory,
        topTraits,
        recommendedDomains,
        recommendedCareers,
        savedResult,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's past quiz history
// @route   GET /api/v1/quiz/history
// @access  Private
export const getQuizHistory = async (req, res, next) => {
  try {
    const history = await QuizResult.find({ user: req.user.id })
      .populate('recommendedCareers')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single quiz result by ID
// @route   GET /api/v1/quiz/results/:id
// @access  Private
export const getQuizResultById = async (req, res, next) => {
  try {
    const result = await QuizResult.findById(req.params.id).populate('recommendedCareers');
    if (!result) {
      return res.status(404).json({ success: false, message: 'Quiz result not found' });
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
