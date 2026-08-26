export const CANDIDATE_PROFILE = {
  id: 'cand-alex-morgan',
  name: 'Alex Morgan',
  email: 'alex.morgan@pathseeker.ai',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  roleStage: 'Graduate', // 'Student' | 'Graduate' | 'Professional'
  targetRole: 'AI & Cloud Solutions Architect',
  targetCompany: 'Anthropic / AWS',
  hollandCode: 'IRA-94',
  hollandArchetype: 'The Visionary Systems Builder (Investigative-Realistic-Artistic)',
  passportUid: 'CPP-2026-8894X',
  issueDate: 'August 2026',
  expiryDate: 'August 2029',
  verificationHash: '0x8F9A...B34D (Cryptographically Verified)',
  readinessScore: 88,
  streakDays: 14,
  sprintsCompleted: 18,
  totalSprints: 24,
  masterclassesCompleted: 4,
  totalHoursWatched: 8.5,
  badgesEarned: 3,
};

export const ROLE_STAGE_CONFIGS = {
  Student: {
    stageLabel: 'High School & Foundation',
    badgeColor: 'bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/40',
    primaryGoal: 'Academic Stream Selection & Core STEM Prerequisites',
    recommendedSprints: 12,
  },
  Graduate: {
    stageLabel: 'Early Career & Industry Launch',
    badgeColor: 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]/40',
    primaryGoal: 'Full-Stack Architecture & High-Comp Placement ($120k+)',
    recommendedSprints: 24,
  },
  Professional: {
    stageLabel: 'Executive Mastery & Lateral Pivot',
    badgeColor: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40',
    primaryGoal: 'Strategic Pivot to Foundation AI & Quant Architecture',
    recommendedSprints: 16,
  },
};

export const INITIAL_ROADMAP_TASKS = [
  // Stage 1: Foundation & Cognitive Discovery
  {
    id: 'task-1',
    stageNumber: 1,
    stageName: 'Stage 1 • Cognitive Alignment',
    title: 'Complete 7-Step Holland RIASEC Cognitive Assessment',
    category: 'Assessment',
    isCompleted: true,
    timeframe: 'Day 1',
    impactScore: 10,
  },
  {
    id: 'task-2',
    stageNumber: 1,
    stageName: 'Stage 1 • Cognitive Alignment',
    title: 'Review RIASEC Radar & Download Career Passport Certificate',
    category: 'Credentials',
    isCompleted: true,
    timeframe: 'Day 3',
    impactScore: 5,
  },
  {
    id: 'task-3',
    stageNumber: 1,
    stageName: 'Stage 1 • Cognitive Alignment',
    title: 'Select Primary Career Pathway (AI & Cloud Architect)',
    category: 'Milestone',
    isCompleted: true,
    timeframe: 'Day 7',
    impactScore: 8,
  },

  // Stage 2: Core Engineering & Framework Sprints
  {
    id: 'task-4',
    stageNumber: 2,
    stageName: 'Stage 2 • Core Engineering Sprints',
    title: 'Master Transformer FlashAttention-2 & KV-Cache Math',
    category: 'Masterclass',
    isCompleted: true,
    timeframe: 'Day 15',
    impactScore: 12,
  },
  {
    id: 'task-5',
    stageNumber: 2,
    stageName: 'Stage 2 • Core Engineering Sprints',
    title: 'Deploy Multi-Region Kubernetes Cluster via Terraform GitOps',
    category: 'Hands-on Lab',
    isCompleted: true,
    timeframe: 'Day 30',
    impactScore: 15,
  },
  {
    id: 'task-6',
    stageNumber: 2,
    stageName: 'Stage 2 • Core Engineering Sprints',
    title: 'Build Lock-Free Orderbook Simulation in C++20 / Python',
    category: 'Lab Sprint',
    isCompleted: false,
    timeframe: 'Day 45',
    impactScore: 14,
  },
  {
    id: 'task-7',
    stageNumber: 2,
    stageName: 'Stage 2 • Core Engineering Sprints',
    title: 'Audit System Design Blueprint for Distributed Rate Limiting',
    category: 'Blueprint',
    isCompleted: false,
    timeframe: 'Day 60',
    impactScore: 12,
  },

  // Stage 3: Production Capstones & Placement
  {
    id: 'task-8',
    stageNumber: 3,
    stageName: 'Stage 3 • Production Capstones & Placement',
    title: 'Publish Open-Source Capstone Repository with 100% Test Coverage',
    category: 'Capstone',
    isCompleted: false,
    timeframe: 'Day 75',
    impactScore: 18,
  },
  {
    id: 'task-9',
    stageNumber: 3,
    stageName: 'Stage 3 • Production Capstones & Placement',
    title: 'Complete 3 Live Mock Technical System Design Interviews',
    category: 'Interview Drills',
    isCompleted: false,
    timeframe: 'Day 85',
    impactScore: 10,
  },
  {
    id: 'task-10',
    stageNumber: 3,
    stageName: 'Stage 3 • Production Capstones & Placement',
    title: 'Execute $160k+ Salary Negotiation Playbook on First Offer',
    category: 'Career Placement',
    isCompleted: false,
    timeframe: 'Day 90',
    impactScore: 10,
  },
];

export const SKILL_COMPETENCIES = [
  { axis: 'Distributed Systems', score: 92, benchmark: 85 },
  { axis: 'Foundation AI & LLMs', score: 88, benchmark: 80 },
  { axis: 'Cloud GitOps & K8s', score: 84, benchmark: 75 },
  { axis: 'Clean Architecture', score: 90, benchmark: 82 },
  { axis: 'Algorithms & Perf', score: 86, benchmark: 80 },
  { axis: 'Tech Communication', score: 94, benchmark: 88 },
];

export const HARD_SKILL_CHIPS = [
  { name: 'PyTorch', level: 'Mastery', color: 'text-[#E8602E] border-[#E8602E]/40 bg-[#E8602E]/10' },
  { name: 'Kubernetes', level: 'Advanced', color: 'text-[#3B82F6] border-[#3B82F6]/40 bg-[#3B82F6]/10' },
  { name: 'Terraform', level: 'Proficient', color: 'text-[#A855F7] border-[#A855F7]/40 bg-[#A855F7]/10' },
  { name: 'TypeScript', level: 'Mastery', color: 'text-[#10B981] border-[#10B981]/40 bg-[#10B981]/10' },
  { name: 'vLLM Serving', level: 'Advanced', color: 'text-[#FFB800] border-[#FFB800]/40 bg-[#FFB800]/10' },
  { name: 'Docker', level: 'Mastery', color: 'text-[#06B6D4] border-[#06B6D4]/40 bg-[#06B6D4]/10' },
  { name: 'Istio Service Mesh', level: 'Intermediate', color: 'text-[#F43F5E] border-[#F43F5E]/40 bg-[#F43F5E]/10' },
  { name: 'PostgreSQL / CockroachDB', level: 'Proficient', color: 'text-[#84CC16] border-[#84CC16]/40 bg-[#84CC16]/10' },
];

export const SAVED_CAREERS = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    domain: 'Technology',
    avgSalary: '$165,000 / yr',
    growthRate: '+38% YoY',
    fitScore: '96% Fit',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cloud-architect',
    title: 'Cloud & Distributed Systems Architect',
    domain: 'Technology',
    avgSalary: '$155,000 / yr',
    growthRate: '+28% YoY',
    fitScore: '92% Fit',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'quant-trader',
    title: 'Quantitative Algorithmic Strategist',
    domain: 'Business & Finance',
    avgSalary: '$235,000 / yr',
    growthRate: '+22% YoY',
    fitScore: '89% Fit',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
  },
];

export const SAVED_LEARNING_ITEMS = [
  {
    id: 'media-1',
    title: 'A Day in the Life of a Senior AI & ML Engineer',
    speaker: 'Dr. Elena Rostova',
    format: 'Video Masterclass',
    duration: '14 mins',
    progressPct: 78,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    link: '/multimedia/m1',
  },
  {
    id: 'media-2',
    title: 'Breaking into High-Frequency Trading & Quant Finance',
    speaker: 'David Sterling',
    format: 'Audio Podcast',
    duration: '32 mins',
    progressPct: 45,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    link: '/multimedia/m3',
  },
];

export const SAVED_RESOURCE_VAULT = [
  {
    id: 'res-1',
    title: 'The Distributed Systems & FAANG Architecture Bible',
    format: 'PDF',
    size: '14.8 MB',
    pages: '48 Pages',
    downloadedAt: '2 days ago',
  },
  {
    id: 'res-2',
    title: 'FAANG-Approved Engineering ATS Resume & Portfolio Kit',
    format: 'FIG',
    size: '8.4 MB',
    pages: '6 Templates',
    downloadedAt: '5 days ago',
  },
  {
    id: 'res-3',
    title: 'The $200k+ Tech Offer Negotiation Scriptbook',
    format: 'PDF',
    size: '5.1 MB',
    pages: '28 Pages',
    downloadedAt: '1 week ago',
  },
];
