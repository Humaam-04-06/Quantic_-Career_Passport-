import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'System Design & Architecture',
      'Resumes & Portfolios',
      'AI & LLM Engineering',
      'Cloud & DevOps',
      'Interview Cheat-sheets',
      'Salary Negotiation',
    ],
    default: 'System Design & Architecture',
  },
  format: {
    type: String,
    enum: ['PDF', 'FIG', 'ZIP', 'NOTION'],
    default: 'PDF',
  },
  fileSize: {
    type: String,
    default: '5.0 MB',
  },
  pages: {
    type: String,
    default: '12 Pages',
  },
  downloads: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    default: 'PathSeeker Editorial Faculty',
  },
  coverImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  summary: {
    type: String,
    required: true,
  },
  topics: [{
    type: String,
  }],
  tableOfContents: [{
    type: String,
  }],
  previewPages: [{
    pageNumber: Number,
    title: String,
    content: String,
  }],
  downloadFileContent: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Resource', resourceSchema);
