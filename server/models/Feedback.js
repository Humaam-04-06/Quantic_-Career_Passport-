import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['bug', 'suggestion', 'query', 'general'],
    default: 'suggestion',
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  status: {
    type: String,
    enum: ['new', 'in_progress', 'resolved', 'closed'],
    default: 'new',
  },
  adminReply: {
    type: String,
    default: '',
  },
  repliedAt: Date,
}, {
  timestamps: true,
});

export default mongoose.model('Feedback', feedbackSchema);
