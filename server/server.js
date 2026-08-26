import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import multimediaRoutes from './routes/multimediaRoutes.js';
import storyRoutes from './routes/storyRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Setup environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/careers', careerRoutes);
app.use('/api/v1/quiz', quizRoutes);
app.use('/api/v1/multimedia', multimediaRoutes);
app.use('/api/v1/stories', storyRoutes);
app.use('/api/v1/resources', resourceRoutes);
app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'PathSeeker API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 PathSeeker Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});
