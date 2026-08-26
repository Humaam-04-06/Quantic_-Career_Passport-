import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  authorRole: {
    type: String,
    required: true,
  },
  authorAvatar: {
    type: String,
    default: '',
  },
  domain: {
    type: String,
    required: true,
    enum: ['Technology', 'Healthcare', 'Engineering', 'Business & Finance', 'Creative & Design', 'Science & Research', 'Law & Public Policy', 'Education'],
  },
  currentCompany: {
    type: String,
    default: '',
  },
  timeline: {
    educationalBackground: {
      type: String,
      required: true,
    },
    challengesFaced: {
      type: String,
      required: true,
    },
    turningPoint: {
      type: String,
      required: true,
    },
    currentOutcome: {
      type: String,
      required: true,
    },
  },
  keyAdvice: {
    type: String,
    default: '',
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  likesCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model('SuccessStory', successStorySchema);
