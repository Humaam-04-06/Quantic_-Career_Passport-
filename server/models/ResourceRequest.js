import mongoose from 'mongoose';

const resourceRequestSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  requestedTopic: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    default: 'System Design & Architecture',
  },
  useCase: {
    type: String,
    trim: true,
  },
  targetRole: {
    type: String,
    default: 'Software Engineer',
  },
  status: {
    type: String,
    enum: ['Pending', 'Under Review', 'In Production', 'Published'],
    default: 'Pending',
  },
}, {
  timestamps: true,
});

export default mongoose.model('ResourceRequest', resourceRequestSchema);
