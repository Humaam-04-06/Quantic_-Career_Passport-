import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['PDF Guide', 'Checklist', 'Infographic', 'Scholarship', 'Template', 'Roadmap'],
    default: 'PDF Guide',
  },
  targetAudience: {
    type: String,
    enum: ['All', 'Student', 'Graduate', 'Professional'],
    default: 'All',
  },
  fileUrl: {
    type: String,
    required: true,
  },
  fileSizeMb: {
    type: Number,
    default: 1.5,
  },
  tags: [{
    type: String,
    enum: ['Beginner', 'Advanced', 'Scholarship', 'Skill-Building', 'Interview-Prep', 'Resume-Building', 'Salary-Negotiation'],
  }],
  downloadCount: {
    type: Number,
    default: 0,
  },
  previewAvailable: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Resource', resourceSchema);
