import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ['likert', 'slider', 'multiple_choice', 'scenario'],
    default: 'likert',
  },
  category: {
    type: String,
    enum: ['analytical', 'creative', 'leadership', 'technical', 'social', 'investigative', 'practical'],
    required: true,
  },
  timeLimitSeconds: {
    type: Number,
    default: 30,
  },
  options: [{
    label: String,
    value: Number,
    targetDomain: String,
  }],
  sliderConfig: {
    min: { type: Number, default: 1 },
    max: { type: Number, default: 10 },
    step: { type: Number, default: 1 },
    leftLabel: { type: String, default: 'Low Interest' },
    rightLabel: { type: String, default: 'High Passion' },
  },
  weightage: {
    type: Number,
    default: 1.0,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model('QuizQuestion', quizQuestionSchema);
