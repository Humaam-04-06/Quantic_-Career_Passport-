import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  itemType: {
    type: String,
    enum: ['career', 'multimedia', 'resource', 'story'],
    required: true,
  },
  career: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Career',
  },
  multimedia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Multimedia',
  },
  resource: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource',
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SuccessStory',
  },
  notes: {
    type: String,
    default: '',
  },
  tags: [String],
}, {
  timestamps: true,
});

export default mongoose.model('Bookmark', bookmarkSchema);
