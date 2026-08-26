import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  educationLevel: {
    type: String,
    enum: ['High School', 'Undergraduate', 'Postgraduate', 'Doctorate', 'Self-Taught', 'Other'],
    default: 'Undergraduate',
  },
  currentInstitutionOrCompany: {
    type: String,
    default: '',
  },
  majorOrField: {
    type: String,
    default: '',
  },
  skills: [{
    type: String,
    trim: true,
  }],
  interests: [{
    type: String,
    trim: true,
  }],
  experienceYears: {
    type: Number,
    default: 0,
  },
  bio: {
    type: String,
    default: '',
  },
  resumeUrl: {
    type: String,
    default: '',
  },
  targetCareerDomain: {
    type: String,
    default: 'Technology',
  },
  passportUid: {
    type: String,
    default: function() {
      return `CPP-2026-${Math.floor(1000 + Math.random() * 9000)}X`;
    },
  },
  hollandCode: {
    type: String,
    default: 'IRA-94',
  },
  readinessScore: {
    type: Number,
    default: 88,
  },
  streakDays: {
    type: Number,
    default: 14,
  },
  targetRole: {
    type: String,
    default: 'AI & Cloud Solutions Architect',
  },
  targetCompany: {
    type: String,
    default: 'Anthropic / AWS',
  },
  savedCareers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Career',
  }],
  checklistTasks: [{
    id: String,
    stageNumber: Number,
    stageName: String,
    title: String,
    category: String,
    isCompleted: { type: Boolean, default: false },
    timeframe: String,
    impactScore: Number,
  }],
  preferredSalaryRange: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 0 },
  },
  savedFilters: [{
    name: String,
    domain: String,
    demandLevel: String,
    minSalary: Number,
  }],
}, {
  timestamps: true,
});

export default mongoose.model('UserProfile', userProfileSchema);
