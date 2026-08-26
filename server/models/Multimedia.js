import mongoose from 'mongoose';

const multimediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['video', 'audio', 'explainer'],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
  durationMinutes: {
    type: Number,
    default: 10,
  },
  domain: {
    type: String,
    required: true,
  },
  speakerName: {
    type: String,
    default: '',
  },
  speakerRole: {
    type: String,
    default: '',
  },
  transcript: {
    type: String,
    default: '',
  },
  tags: [String],
  ratings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  averageRating: {
    type: Number,
    default: 5.0,
  },
  totalRatingsCount: {
    type: Number,
    default: 0,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Multimedia', multimediaSchema);
