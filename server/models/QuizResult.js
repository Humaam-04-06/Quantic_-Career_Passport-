import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  scoresByCategory: {
    analytical: { type: Number, default: 0 },
    creative: { type: Number, default: 0 },
    leadership: { type: Number, default: 0 },
    technical: { type: Number, default: 0 },
    social: { type: Number, default: 0 },
    investigative: { type: Number, default: 0 },
    practical: { type: Number, default: 0 },
  },
  topTraits: [String],
  recommendedDomains: [String],
  recommendedCareers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Career',
  }],
  answers: [{
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'QuizQuestion',
    },
    answerValue: mongoose.Schema.Types.Mixed,
  }],
  timeTakenSeconds: Number,
}, {
  timestamps: true,
});

export default mongoose.model('QuizResult', quizResultSchema);
