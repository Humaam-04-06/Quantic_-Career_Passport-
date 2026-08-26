import mongoose from 'mongoose';
import 'dotenv/config';
import Multimedia from '../models/Multimedia.js';

const RICH_MASTERCLASSES = [
  {
    id: 'deep-learning-transformers',
    numericId: '1',
    title: 'Architecting Foundation Transformers & LLM Inference Clusters',
    type: 'Video Masterclasses',
    domain: 'AI & Machine Learning',
    duration: '18:40',
    durationMinutes: 19,
    durationSeconds: 1120,
    views: '28.4k',
    viewsCount: 28400,
    averageRating: 4.9,
    totalRatingsCount: 148,
    isFeatured: true,
    isTrending: true,
    careerId: 'ai-engineer',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary: 'Deep dive into self-attention tensor mechanics, multi-head quantization techniques (FlashAttention-2), and high-throughput vLLM serving infrastructure for production systems.',
    speaker: {
      name: 'Dr. Elena Rostova',
      role: 'Principal AI Research Scientist',
      organization: 'DeepMind / Stanford AI Lab',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Pioneered distributed quantization algorithms deployed in production across major foundation models. Keynote speaker at NeurIPS and ICML.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    takeaways: [
      {
        title: 'Attention Matrix Bottlenecks',
        desc: 'Standard self-attention scales quadratically with sequence length O(N²). FlashAttention leverages GPU SRAM caching to reduce memory IO overhead by 4.2x.',
      },
      {
        title: 'KV Cache Paging & vLLM Serving',
        desc: 'PagedAttention mimics virtual memory operating system concepts, eliminating fragmented GPU memory allocation during high-concurrency token generation.',
      },
      {
        title: 'LoRA & QLoRA Parameter Fine-Tuning',
        desc: 'Inject trainable low-rank decomposition matrices while freezing foundation weights to achieve full fine-tuning performance with 65% less VRAM.',
      },
    ],
    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome to this masterclass on neural network architectures and multi-layer perceptrons.' },
      { time: '02:30', seconds: 150, text: 'Visualizing neurons as mathematical activation holding units with values between 0.0 and 1.0.' },
      { time: '05:15', seconds: 315, text: 'Layered representation: computing weights, biases, and sigmoid activations across hidden layers.' },
      { time: '08:45', seconds: 525, text: 'Pattern recognition: breaking complex image recognition down into distinct sub-component features.' },
      { time: '12:10', seconds: 730, text: 'Matrix vector notation: expressing forward propagation as compact linear algebra operations.' },
      { time: '16:30', seconds: 990, text: 'Connecting classical perceptrons to modern Transformer attention mechanisms and LLM inference.' },
    ],
    handouts: [
      { name: 'Transformer Architecture & KV-Cache Cheatsheet (PDF)', size: '3.4 MB', type: 'PDF Document' },
      { name: 'vLLM Multi-GPU Benchmark Repo & Scripts', size: 'Git Repo', type: 'Source Code' },
      { name: 'FlashAttention-2 Mathematical Derivation Slides', size: '12.8 MB', type: 'Keynote Slides' },
    ],
    discussion: [
      {
        userName: 'Alex Chen',
        userRole: 'ML Engineer at Stripe',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        timestampTag: '05:15',
        text: 'Does FlashAttention-2 support variable sequence lengths in batch inference without zero-padding computational overhead?',
        upvotes: 42,
      },
      {
        userName: 'Sarah Miller',
        userRole: 'Data Scientist at Airbnb',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        timestampTag: '12:10',
        text: 'What is the observed perplexity loss when quantizing Llama 3 70B to FP8 precision on H100 GPUs in production?',
        upvotes: 29,
      },
    ],
    tags: ['AI', 'Transformers', 'vLLM', 'PyTorch', 'GPU Optimization'],
  },
  {
    id: 'kubernetes-cloud-resilience',
    numericId: '2',
    title: 'Zero-Downtime Multi-Region Kubernetes & GitOps Orchestration',
    type: 'Video Masterclasses',
    domain: 'Software & Cloud Architecture',
    duration: '12:45',
    durationMinutes: 13,
    durationSeconds: 765,
    views: '19.2k',
    viewsCount: 19200,
    averageRating: 4.8,
    totalRatingsCount: 94,
    isFeatured: false,
    isTrending: true,
    careerId: 'cloud-architect',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=ambient-piano-10781.mp3',
    summary: 'Blueprint for designing global active-active Kubernetes clusters, automated ArgoCD GitOps pipelines, and chaos engineering drills for 99.999% availability.',
    speaker: {
      name: 'Marcus Vance',
      role: 'Staff Solutions Architect',
      organization: 'Amazon Web Services (AWS)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Enterprise cloud architect who designed multi-region architectures for Fortune 50 fintech companies. Certified Kubernetes Administrator (CKA).',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    takeaways: [
      {
        title: 'Global Traffic Management & Anycast DNS',
        desc: 'Route user requests to the geographically nearest healthy cluster with sub-second health-check failover.',
      },
      {
        title: 'Declarative State Sync with ArgoCD',
        desc: 'Enforce immutable infrastructure state with Git as the single source of truth and automated drift detection.',
      },
      {
        title: 'Chaos Mesh Fault Injection Drills',
        desc: 'Simulate packet loss, node crashes, and network partitions continuously during production peak hours.',
      },
    ],
    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome to this architectural guide on multi-region Kubernetes deployments.' },
      { time: '02:15', seconds: 135, text: 'Examining the global network topology: BGP Anycast routing and multi-region VPC peering.' },
      { time: '05:40', seconds: 340, text: 'Configuring ArgoCD application sets to synchronize microservices across 3 distinct cloud availability zones.' },
      { time: '09:10', seconds: 550, text: 'Implementing cross-region database replication with CockroachDB and Raft consensus protocols.' },
      { time: '11:30', seconds: 690, text: 'Running automated Chaos Mesh experiments to validate zero packet drop during simulated node drain.' },
    ],
    handouts: [
      { name: 'Multi-Region Kubernetes Terraform Blueprint (Repo)', size: 'Git Repo', type: 'Source Code' },
      { name: 'Zero-Downtime GitOps Architecture Diagram (PDF)', size: '4.2 MB', type: 'PDF Document' },
    ],
    discussion: [
      {
        userName: 'David Sterling',
        userRole: 'DevOps Engineer at Citadel',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        timestampTag: '05:40',
        text: 'How do you handle secrets encryption across multiple clusters using HashiCorp Vault in GitOps?',
        upvotes: 38,
      },
    ],
    tags: ['Kubernetes', 'AWS', 'DevOps', 'ArgoCD', 'Cloud Architecture'],
  },
  {
    id: 'design-tokens-spatial-ui',
    numericId: '3',
    title: 'Building Tokenized Design Systems & Spatial UI Architectures',
    type: 'Video Masterclasses',
    domain: 'UI/UX & Product Design',
    duration: '15:20',
    durationMinutes: 15,
    durationSeconds: 920,
    views: '16.8k',
    viewsCount: 16800,
    averageRating: 4.9,
    totalRatingsCount: 112,
    isFeatured: false,
    isTrending: false,
    careerId: 'product-designer',
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary: 'Master design token variables, semantic color scales, accessible typography ratios, and seamless Figma-to-Tailwind engineer handoff architectures.',
    speaker: {
      name: 'Julianne Hayes',
      role: 'Head of Design Systems',
      organization: 'Ex-Airbnb / Figma Community Advocate',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Design systems lead who architected cross-platform token structures for over 300 designers and engineers.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    takeaways: [
      {
        title: '3-Tier Token Architecture',
        desc: 'Structure tokens into Global Primitives, Semantic Context Tokens, and Component-Level Overrides.',
      },
      {
        title: 'Automated CI/CD Token Export',
        desc: 'Export Figma Variables directly to Tailwind CSS and iOS/Android styling files via Style Dictionary CLI.',
      },
    ],
    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome to this masterclass on architecting scalable design token systems in Figma.' },
      { time: '03:40', seconds: 220, text: 'Structuring 3-tier token hierarchy: Global Primitives, Semantic Context, and Component Overrides.' },
      { time: '07:15', seconds: 435, text: 'Automated CI/CD token export: compiling Figma Variables directly into Tailwind CSS classes.' },
      { time: '11:50', seconds: 710, text: 'Spatial layout systems: implementing 8pt grid mechanics for responsive cross-platform UI.' },
      { time: '14:10', seconds: 850, text: 'Design handoff checklist: documentation standards and developer inspection workflows.' },
    ],
    handouts: [
      { name: 'Enterprise Token Hierarchy Starter Kit (Figma File)', size: '22 MB', type: 'Design Asset' },
    ],
    discussion: [
      {
        userName: 'Sophia Lin',
        userRole: 'Lead UI/UX at Figma',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        timestampTag: '03:40',
        text: 'What naming convention works best when scaling tokens across both Web and native Mobile apps?',
        upvotes: 21,
      },
    ],
    tags: ['Figma', 'UI/UX', 'Design Tokens', 'Tailwind', 'Design Systems'],
  },
  {
    id: 'quant-finance-arbitrage-podcast',
    numericId: '4',
    title: 'Podcast: Quantitative Trading, Statistical Arbitrage & High-Frequency Systems',
    type: 'Audio Podcasts',
    domain: 'Business & Finance',
    duration: '06:12',
    durationMinutes: 6,
    durationSeconds: 372,
    views: '11.5k',
    viewsCount: 11500,
    averageRating: 5.0,
    totalRatingsCount: 88,
    isFeatured: false,
    isTrending: true,
    careerId: 'quantitative-analyst',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    summary: 'In this podcast episode, Dr. Sterling Thorne breaks down stochastic calculus, order book market microstructure, low-latency C++ kernels, and how engineers can pivot into Quant roles.',
    speaker: {
      name: 'Dr. Sterling Thorne',
      role: 'Lead Quantitative Strategist',
      organization: 'Citadel Securities',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'PhD in Applied Mathematics from MIT. Leads algorithmic statistical arbitrage trading desks managing multi-billion dollar portfolios.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    takeaways: [
      {
        title: 'Microstructure Alpha vs Macro Forecasting',
        desc: 'Why capturing order-book imbalance in microseconds generates consistent Sharpe ratios above 4.0.',
      },
      {
        title: 'Transitioning from SWE to Quant Dev',
        desc: 'Mastering lock-free ring buffers, cache coherency, and kernel bypass networking (Solarflare OpenOnload).',
      },
    ],
    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome to this episode with Dr. Sterling Thorne on statistical arbitrage.' },
      { time: '01:30', seconds: 90, text: 'Discussing mathematical prerequisites: stochastic calculus, Markov chains, and linear algebra.' },
      { time: '03:15', seconds: 195, text: 'Breaking down C++ low-latency memory optimization techniques used in high-frequency trading.' },
      { time: '05:00', seconds: 300, text: 'Advice for software engineers and data scientists pivoting into quantitative trading desks.' },
    ],
    handouts: [
      { name: 'Quantitative Finance Math & C++ Reading List (PDF)', size: '1.8 MB', type: 'PDF Document' },
    ],
    discussion: [
      {
        userName: 'Aarav Mehta',
        userRole: 'Senior Cloud Engineer',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        timestampTag: '01:30',
        text: 'What open-source backtesting frameworks do you recommend for practicing statistical arbitrage strategies?',
        upvotes: 35,
      },
    ],
    tags: ['Finance', 'Quant', 'Podcast', 'C++', 'Algorithmic Trading'],
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas');
    await Multimedia.deleteMany({});
    await Multimedia.insertMany(RICH_MASTERCLASSES);
    console.log('✅ Successfully re-seeded', RICH_MASTERCLASSES.length, 'masterclasses into MongoDB Atlas with accurate durations & timestamps!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding multimedia:', err);
    process.exit(1);
  }
}

seed();
