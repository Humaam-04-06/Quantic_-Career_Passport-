import mongoose from 'mongoose';

const multimediaSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
  },
  numericId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['video', 'audio', 'explainer', 'Video Masterclasses', 'Audio Podcasts', 'Quick Micro-Lessons'],
    required: true,
    default: 'Video Masterclasses',
  },
  domain: {
    type: String,
    required: true,
    default: 'Technology',
  },
  duration: {
    type: String,
    default: '25:00',
  },
  durationMinutes: {
    type: Number,
    default: 25,
  },
  durationSeconds: {
    type: Number,
    default: 1500,
  },
  views: {
    type: String,
    default: '12.4k',
  },
  viewsCount: {
    type: Number,
    default: 1240,
  },
  averageRating: {
    type: Number,
    default: 4.9,
  },
  totalRatingsCount: {
    type: Number,
    default: 48,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
  careerId: {
    type: String,
    default: 'ai-engineer',
  },
  thumbnail: {
    type: String,
    default: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
  },
  thumbnailUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
    default: 'https://www.youtube.com/embed/aircAruvnKk',
  },
  url: {
    type: String,
  },
  audioUrl: {
    type: String,
    default: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
  },
  summary: {
    type: String,
    default: '',
  },
  speaker: {
    name: { type: String, default: 'Dr. Elena Rostova' },
    role: { type: String, default: 'Principal AI Researcher' },
    organization: { type: String, default: 'DeepMind / Stanford AI Lab' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    verified: { type: Boolean, default: true },
    bio: { type: String, default: '' },
    linkedin: { type: String, default: 'https://linkedin.com' },
    github: { type: String, default: 'https://github.com' },
  },
  speakerName: {
    type: String,
  },
  speakerRole: {
    type: String,
  },
  takeaways: [
    {
      title: String,
      desc: String,
    },
  ],
  transcript: [
    {
      time: String,
      seconds: Number,
      text: String,
    },
  ],
  handouts: [
    {
      name: String,
      size: String,
      type: { type: String, default: 'PDF Document' },
    },
  ],
  faqs: [
    {
      user: String,
      role: String,
      timeAgo: { type: String, default: 'Just now' },
      timestamp: String,
      question: String,
      answer: String,
      upvotes: { type: Number, default: 0 },
    },
  ],
  discussion: [
    {
      userEmail: String,
      userName: String,
      userAvatar: String,
      userRole: String,
      timestampTag: String,
      text: String,
      upvotes: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  tags: [String],
}, {
  timestamps: true,
});

// Pre-save normalization
multimediaSchema.pre('save', function (next) {
  if (!this.thumbnail && this.thumbnailUrl) this.thumbnail = this.thumbnailUrl;
  if (!this.thumbnailUrl && this.thumbnail) this.thumbnailUrl = this.thumbnail;
  if (!this.url && this.videoUrl) this.url = this.videoUrl;
  if (!this.videoUrl && this.url) this.videoUrl = this.url;
  if (this.speaker && !this.speakerName) this.speakerName = this.speaker.name;
  if (this.speaker && !this.speakerRole) this.speakerRole = this.speaker.role;
  next();
});

export default mongoose.model('Multimedia', multimediaSchema);
