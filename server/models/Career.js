import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Career title is required'],
    trim: true,
  },
  domain: {
    type: String,
    required: [true, 'Career domain is required'],
    enum: ['Technology', 'Healthcare', 'Engineering', 'Business & Finance', 'Creative & Design', 'Science & Research', 'Law & Public Policy', 'Education'],
  },
  description: {
    type: String,
    required: [true, 'Career description is required'],
  },
  overview: {
    type: String,
    default: '',
  },
  requiredSkills: [{
    type: String,
    trim: true,
  }],
  educationPath: {
    recommendedDegree: String,
    alternativeCertifications: [String],
    timelineMonths: Number,
  },
  expectedSalary: {
    currency: { type: String, default: 'USD' },
    entryLevel: Number,
    midLevel: Number,
    seniorLevel: Number,
  },
  jobDemand: {
    type: String,
    enum: ['Very High', 'High', 'Moderate', 'Emerging'],
    default: 'High',
  },
  growthRatePercent: {
    type: Number,
    default: 15,
  },
  dailyResponsibilities: [String],
  roadmapSteps: [{
    stepNumber: Number,
    title: String,
    description: String,
    keyMilestones: [String],
  }],
  tags: [String],
  isTrending: {
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

careerSchema.index({ title: 'text', domain: 'text', description: 'text', requiredSkills: 'text' });

export default mongoose.model('Career', careerSchema);
