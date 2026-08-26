import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
  },
  passportCode: {
    type: String,
    default: 'AI-2026',
  },
  title: {
    type: String,
    required: [true, 'Career title is required'],
    trim: true,
  },
  domain: {
    type: String,
    required: [true, 'Career domain is required'],
    default: 'Technology',
  },
  description: {
    type: String,
    default: '',
  },
  heroSummary: {
    type: String,
    default: '',
  },
  overview: {
    type: String,
    default: '',
  },
  avgComp: {
    type: String,
    default: '$160,000',
  },
  growthRate: {
    type: String,
    default: '+25% YoY',
  },
  growthRatePercent: {
    type: Number,
    default: 25,
  },
  experienceLevel: {
    type: String,
    default: 'Mid to Senior',
  },
  thumbnail: {
    type: String,
    default: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  },
  skills: {
    hard: [{ type: String }],
    soft: [{ type: String }],
    tools: [{ type: String }],
  },
  salaryLadder: {
    entry: { type: String, default: '$95k' },
    mid: { type: String, default: '$140k' },
    senior: { type: String, default: '$210k' },
    principal: { type: String, default: '$320k+' },
  },
  jobDemand: {
    type: String,
    enum: ['Very High', 'High', 'Moderate', 'Emerging'],
    default: 'Very High',
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Career', careerSchema);
