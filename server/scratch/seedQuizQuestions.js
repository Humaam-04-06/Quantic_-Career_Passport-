import mongoose from 'mongoose';
import 'dotenv/config';
import QuizQuestion from '../models/QuizQuestion.js';

const INITIAL_QUESTIONS = [
  {
    questionText: 'When building a complex system, you prefer architecting scalable database schemas and caching layers over styling frontend interfaces.',
    category: 'analytical',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
    order: 1,
  },
  {
    questionText: 'You enjoy exploring cutting-edge machine learning research papers and benchmarking transformer models on GPU clusters.',
    category: 'technical',
    questionType: 'likert',
    weightage: 1.2,
    timeLimitSeconds: 30,
    order: 2,
  },
  {
    questionText: 'Leading sprint retrospectives, prioritizing product roadmaps, and mentoring junior engineers motivates you most.',
    category: 'leadership',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
    order: 3,
  },
  {
    questionText: 'You find satisfaction in crafting pixel-perfect, accessible user interfaces, kinetic typography, and motion design systems.',
    category: 'creative',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
    order: 4,
  },
  {
    questionText: 'You thrive when conducting empathetic user research interviews and synthesizing cross-functional feedback.',
    category: 'social',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
    order: 5,
  },
  {
    questionText: 'You enjoy hands-on Linux kernel debugging, networking packet captures, and embedded hardware prototyping.',
    category: 'practical',
    questionType: 'likert',
    weightage: 1.1,
    timeLimitSeconds: 30,
    order: 6,
  },
  {
    questionText: 'You excel at finding subtle edge cases in multi-threaded asynchronous code and designing fault-tolerant retry loops.',
    category: 'investigative',
    questionType: 'likert',
    weightage: 1.2,
    timeLimitSeconds: 30,
    order: 7,
  },
  {
    questionText: 'You are energized by financial modeling, quantitative risk forecasting, and algorithmic portfolio balancing.',
    category: 'analytical',
    questionType: 'likert',
    weightage: 1.1,
    timeLimitSeconds: 30,
    order: 8,
  },
];

async function seedQuiz() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas');

    await QuizQuestion.deleteMany({});
    const created = await QuizQuestion.insertMany(INITIAL_QUESTIONS);
    console.log(`✅ Seeded ${created.length} Holland RIASEC questions into MongoDB Atlas!`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedQuiz();
