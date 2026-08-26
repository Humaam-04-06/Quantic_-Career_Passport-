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
