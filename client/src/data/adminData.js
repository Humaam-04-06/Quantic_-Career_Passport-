export const ADMIN_TELEMETRY_KPIS = [
  {
    id: 'candidates',
    title: 'Total Active Candidates',
    value: '14,290',
    growth: '+24.6% MoM',
    badge: 'Global Learners',
    status: 'success',
  },
  {
    id: 'passports',
    title: 'Career Passports Issued',
    value: '8,940',
    growth: '+31.2% MoM',
    badge: 'Blockchain Verified',
    status: 'warning',
  },
  {
    id: 'quizzes',
    title: 'Cognitive Quiz Tests',
    value: '19,850',
    growth: '92.4% Complete',
    badge: 'Holland RIASEC',
    status: 'info',
  },
  {
    id: 'system',
    title: 'System Uptime & Latency',
    value: '99.98%',
    growth: '185ms Gemini AI',
    badge: 'All Systems Green',
    status: 'success',
  },
];

export const DOMAIN_DISTRIBUTION = [
  { domain: 'AI & Machine Learning', percent: 38, count: '5,430 Candidates', color: '#E8602E' },
  { domain: 'Cloud & Distributed Systems', percent: 26, count: '3,715 Candidates', color: '#FFB800' },
  { domain: 'Quantitative Finance & Web3', percent: 18, count: '2,572 Candidates', color: '#10B981' },
  { domain: 'Cybersecurity & Defense', percent: 12, count: '1,714 Candidates', color: '#06B6D4' },
  { domain: 'UI/UX & Product Design', percent: 6, count: '859 Candidates', color: '#A855F7' },
];

export const WEEKLY_VELOCITY = [
  { day: 'Mon', quizzes: 340, passports: 180 },
  { day: 'Tue', quizzes: 420, passports: 220 },
  { day: 'Wed', quizzes: 510, passports: 290 },
  { day: 'Thu', quizzes: 480, passports: 260 },
  { day: 'Fri', quizzes: 590, passports: 340 },
  { day: 'Sat', quizzes: 680, passports: 410 },
  { day: 'Sun', quizzes: 720, passports: 450 },
];

export const PENDING_MODERATION_STORIES = [
  {
    id: 'mod-1',
    author: 'Aria Chen',
    email: 'aria.chen@alumni.stanford.edu',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    transition: 'Traditional Data Analyst to Senior LLM Evaluation Engineer',
    company: 'Mistral AI',
    salaryJump: '$82k to $175k (+113%)',
    hollandCode: 'IRC-91',
    submittedAt: '2 hours ago',
    storyExcerpt:
      'Following the 90-day PathSeeker Transformer Fine-Tuning roadmap allowed me to build 3 production benchmark capstones. Within 6 weeks, I landed 4 FAANG interviews and signed an offer with Mistral AI.',
    proofAttachment: 'Verified_Offer_Letter_Redacted.pdf',
    status: 'Pending Review',
  },
  {
    id: 'mod-2',
    author: 'Marcus Vance',
    email: 'marcus.v@nyu.edu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    transition: 'Physics Postdoc to High-Frequency Algorithmic Quant',
    company: 'Jane Street Capital',
    salaryJump: '$65k to $280k (+330%)',
    hollandCode: 'IRE-96',
    submittedAt: '5 hours ago',
    storyExcerpt:
      'The Quant Finance Masterclass and C++20 Orderbook Simulation blueprint gave me the exact domain mastery needed to pass Jane Street’s rigorous technical bar.',
    proofAttachment: 'Trading_Passport_Attestation.png',
    status: 'Pending Review',
  },
  {
    id: 'mod-3',
    author: 'Maya Lin',
    email: 'maya.lin@designer.io',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    transition: 'Graphic Designer to Lead AI Design Systems Architect',
    company: 'Figma',
    salaryJump: '$70k to $160k (+128%)',
    hollandCode: 'AES-93',
    submittedAt: '1 day ago',
    storyExcerpt:
      'Transitioning from static visuals to prompt-driven UI design was seamless using the Figma ATS kit and Cognitive Quiz recommendations.',
    proofAttachment: 'Figma_Lead_Badge.pdf',
    status: 'Pending Review',
  },
];

export const SECURITY_AUDIT_EVENTS = [
  {
    id: 'evt-1',
    type: 'PASSPORT_ISSUANCE',
    description: 'Digital Career Passport UID #CPP-2026-8894X issued to Alex Morgan',
    ip: '192.168.1.45',
    timestamp: 'Just now',
    severity: 'info',
  },
  {
    id: 'evt-2',
    type: 'ADMIN_LOGIN',
    description: 'Root Super Admin session authenticated via 2FA FIDO2 Key',
    ip: '10.0.4.12',
    timestamp: '14 mins ago',
    severity: 'success',
  },
  {
    id: 'evt-3',
    type: 'QUIZ_EVALUATION',
    description: 'Gemini AI multi-dimensional Holland scoring batch (12 assessments)',
    ip: 'Internal Worker #3',
    timestamp: '32 mins ago',
    severity: 'info',
  },
  {
    id: 'evt-4',
    type: 'RATE_LIMIT_BLOCKED',
    description: 'Excessive anonymous API requests throttled (429 Too Many Requests)',
    ip: '45.134.22.8',
    timestamp: '1 hour ago',
    severity: 'warning',
  },
  {
    id: 'evt-5',
    type: 'CACHE_PURGE',
    description: 'Career Bank global Edge Cache invalidated after indexing new role',
    ip: '10.0.4.12',
    timestamp: '3 hours ago',
    severity: 'info',
  },
];

export const SYSTEM_HEALTH_METRICS = {
  serverStatus: 'Operational',
  cpuUsage: 14,
  memoryUsage: '1.2 GB / 8.0 GB',
  networkLatency: '18ms',
  geminiAiStatus: 'Optimal (185ms)',
  databaseEngine: 'MongoDB Atlas (Replica Set 3-Node)',
  sslGrade: 'A+ (TLS 1.3 Strict)',
};
