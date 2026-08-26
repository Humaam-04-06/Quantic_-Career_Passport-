import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  authorEmail: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  authorRole: {
    type: String,
    required: true,
  },
  currentRole: {
    type: String,
  },
  authorAvatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  avatar: {
    type: String,
  },
  title: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    enum: ['Non-Tech to Tech', 'College to FAANG', 'Self-Taught to Full-Stack', 'Lateral Career Switcher', 'Veteran / Returning Pro', 'All Stories'],
    default: 'Non-Tech to Tech',
  },
  domain: {
    type: String,
    required: true,
    default: 'Technology',
  },
  currentCompany: {
    type: String,
    required: true,
  },
  previousRole: {
    type: String,
    default: 'Entry Level Candidate',
  },
  previousSalary: {
    type: String,
    default: '$35,000 / yr',
  },
  currentSalary: {
    type: String,
    default: '$145,000 / yr',
  },
  salaryIncrease: {
    type: String,
    default: '+314%',
  },
  timeToTransition: {
    type: String,
    default: '6 Months',
  },
  quote: {
    type: String,
    default: '',
  },
  thumbnail: {
    type: String,
    default: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
  },
  stages: [
    {
      stageNumber: { type: Number },
      stageName: { type: String },
      title: { type: String },
      description: { type: String },
      timeframe: { type: String },
    },
  ],
  timeline: {
    educationalBackground: { type: String },
    challengesFaced: { type: String },
    turningPoint: { type: String },
    currentOutcome: { type: String },
  },
  advice: [{ type: String }],
  keyAdvice: {
    type: String,
    default: '',
  },
  toolsUsed: [{ type: String }],
  linkedin: {
    type: String,
    default: '',
  },
  proofUrl: {
    type: String,
    default: '',
  },
  isVerifiedSalary: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: String,
  }],
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'approved', // Auto-approved for community vibrancy
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

// Pre-save hook to normalize name and alias fields
successStorySchema.pre('save', function (next) {
  if (!this.name) this.name = this.authorName;
  if (!this.authorName) this.authorName = this.name;
  if (!this.currentRole) this.currentRole = this.authorRole;
  if (!this.authorRole) this.authorRole = this.currentRole;
  if (!this.avatar) this.avatar = this.authorAvatar;
  if (!this.authorAvatar) this.authorAvatar = this.avatar;
  if (this.upvotes === 0 && this.likesCount > 0) this.upvotes = this.likesCount;
  if (this.likesCount === 0 && this.upvotes > 0) this.likesCount = this.upvotes;
  next();
});

export default mongoose.model('SuccessStory', successStorySchema);
