import Multimedia from '../models/Multimedia.js';
import UserProfile from '../models/UserProfile.js';

// Pre-seeded rich masterclasses if MongoDB Atlas collection is empty
const INITIAL_MASTERCLASSES = [
  {
    id: 'deep-learning-transformers',
    numericId: '1',
    title: 'Architecting Foundation Transformers & LLM Inference Clusters',
    type: 'Video Masterclasses',
    domain: 'AI & Machine Learning',
    duration: '42:15',
    durationMinutes: 42,
    durationSeconds: 2535,
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
      { time: '00:00', seconds: 0, text: 'Welcome to this masterclass on modern transformer architectures and high-throughput inference optimization.' },
      { time: '03:15', seconds: 195, text: 'Let us dissect the primary limitation of standard self-attention: the quadratic scaling factor across long context windows.' },
      { time: '08:40', seconds: 520, text: 'Here we introduce FlashAttention-2, which reorganizes the backward and forward passes to keep computation inside fast GPU SRAM.' },
      { time: '16:20', seconds: 980, text: 'Moving on to KV-cache management during real-time streaming tokens, where PagedAttention eliminates internal memory fragmentation.' },
      { time: '25:05', seconds: 1505, text: 'Examining quantization strategies: comparing 8-bit FP8 precision against 4-bit AWQ and GPTQ weight compression schemes.' },
      { time: '34:50', seconds: 2090, text: 'Finally, deploying the optimized model container onto a multi-node Kubernetes cluster with automatic horizontal pod scaling.' },
      { time: '41:10', seconds: 2470, text: 'Summary of production checklist: benchmark latency, verify perplexity drift, and configure automated failover fallbacks.' },
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
        timestampTag: '08:40',
        text: 'Does FlashAttention-2 support variable sequence lengths in batch inference without zero-padding computational overhead?',
        upvotes: 42,
      },
      {
        userName: 'Sarah Miller',
        userRole: 'Data Scientist at Airbnb',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        timestampTag: '25:05',
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
    duration: '38:40',
    durationMinutes: 38,
    durationSeconds: 2320,
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
      { time: '00:00', seconds: 0, text: 'Welcome to this deep architectural guide on multi-region Kubernetes deployments.' },
      { time: '05:10', seconds: 310, text: 'Examining the global network topology: BGP Anycast routing and multi-region VPC peering.' },
      { time: '14:20', seconds: 860, text: 'Configuring ArgoCD application sets to synchronize microservices across 3 distinct cloud availability zones.' },
      { time: '24:00', seconds: 1440, text: 'Implementing cross-region database replication with CockroachDB and Raft consensus protocols.' },
      { time: '35:10', seconds: 2110, text: 'Running automated Chaos Mesh experiments to validate zero packet drop during simulated node drain.' },
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
        timestampTag: '14:20',
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
    duration: '34:10',
    durationMinutes: 34,
    durationSeconds: 2050,
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
      { time: '08:30', seconds: 510, text: 'Defining semantic color tokens: linking dark mode and high-contrast accessibility requirements.' },
      { time: '19:45', seconds: 1185, text: 'Setting up Style Dictionary pipelines to compile design variables into JSON and CSS custom properties.' },
    ],
    handouts: [
      { name: 'Enterprise Token Hierarchy Starter Kit (Figma File)', size: '22 MB', type: 'Design Asset' },
    ],
    discussion: [
      {
        userName: 'Sophia Lin',
        userRole: 'Lead UI/UX at Figma',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        timestampTag: '08:30',
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
    duration: '45:00',
    durationMinutes: 45,
    durationSeconds: 2700,
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
      { time: '10:15', seconds: 615, text: 'Discussing the mathematical prerequisites: Ito calculus, Markov chains, and linear algebra.' },
      { time: '22:40', seconds: 1360, text: 'Breaking down C++ low-latency memory optimization techniques used in high-frequency trading.' },
    ],
    handouts: [
      { name: 'Quantitative Finance Math & C++ Reading List (PDF)', size: '1.8 MB', type: 'PDF Document' },
    ],
    discussion: [
      {
        userName: 'Aarav Mehta',
        userRole: 'Senior Cloud Engineer',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        timestampTag: '10:15',
        text: 'What open-source backtesting frameworks do you recommend for practicing statistical arbitrage strategies?',
        upvotes: 35,
      },
    ],
    tags: ['Finance', 'Quant', 'Podcast', 'C++', 'Algorithmic Trading'],
  },
];

// @desc    Get all multimedia items with filtering & search
// @route   GET /api/v1/multimedia
// @access  Public
export const getMultimedia = async (req, res, next) => {
  try {
    const { domain, type, search } = req.query;

    // Check count and auto-seed if empty
    const count = await Multimedia.countDocuments();
    if (count === 0) {
      await Multimedia.insertMany(INITIAL_MASTERCLASSES);
    }

    let query = {};
    if (domain && domain !== 'All' && domain !== 'All Domains') {
      query.domain = domain;
    }
    if (type && type !== 'All' && type !== 'All Formats') {
      if (type === 'Video Masterclasses' || type === 'video') {
        query.type = { $in: ['video', 'Video Masterclasses'] };
      } else if (type === 'Audio Podcasts' || type === 'audio') {
        query.type = { $in: ['audio', 'Audio Podcasts'] };
      } else {
        query.type = type;
      }
    }
    if (search && search.trim() !== '') {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { title: regex },
        { summary: regex },
        { speakerName: regex },
        { 'speaker.name': regex },
        { tags: { $in: [regex] } },
      ];
    }

    const mediaList = await Multimedia.find(query).sort({ isFeatured: -1, averageRating: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: mediaList.length,
      data: mediaList,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single media by ID or slug and increment views
// @route   GET /api/v1/multimedia/:id
// @access  Public
export const getMediaById = async (req, res, next) => {
  try {
    const param = req.params.id;

    // Find by _id or custom slug id or numericId
    let media = null;
    if (param.match(/^[0-9a-fA-F]{24}$/)) {
      media = await Multimedia.findById(param);
    }
    if (!media) {
      media = await Multimedia.findOne({ $or: [{ id: param }, { numericId: param }] });
    }

    if (!media) {
      return res.status(404).json({ success: false, message: 'Masterclass not found' });
    }

    // Increment views
    media.viewsCount = (media.viewsCount || 0) + 1;
    await media.save();

    // Fetch related sessions
    const related = await Multimedia.find({
      _id: { $ne: media._id },
    }).limit(3);

    res.status(200).json({
      success: true,
      data: media,
      related,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Record watch time progress & session completion
// @route   POST /api/v1/multimedia/:id/progress
// @access  Public / Private
export const recordProgress = async (req, res, next) => {
  try {
    const { minutesWatched, completed } = req.body;
    const mediaId = req.params.id;

    const media = await Multimedia.findById(mediaId).catch(() => null)
      || await Multimedia.findOne({ id: mediaId });

    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Watch progress registered successfully',
      mediaTitle: media.title,
      minutesWatched: minutesWatched || 15,
      completed: !!completed,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Post community discussion question or note
// @route   POST /api/v1/multimedia/:id/discussion
// @access  Public / Private
export const postDiscussion = async (req, res, next) => {
  try {
    const { text, timestampTag, userName, userAvatar, userRole, userEmail } = req.body;
    const param = req.params.id;

    let media = null;
    if (param.match(/^[0-9a-fA-F]{24}$/)) {
      media = await Multimedia.findById(param);
    }
    if (!media) {
      media = await Multimedia.findOne({ $or: [{ id: param }, { numericId: param }] });
    }

    if (!media) {
      return res.status(404).json({ success: false, message: 'Masterclass not found' });
    }

    const newComment = {
      userEmail: userEmail || req.user?.email || '',
      userName: userName || req.user?.name || 'PathSeeker Candidate',
      userAvatar: userAvatar || req.user?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f',
      userRole: userRole || req.user?.role || 'Candidate Member',
      timestampTag: timestampTag || '00:00',
      text: text || '',
      upvotes: 0,
      createdAt: new Date(),
    };

    media.discussion.unshift(newComment);
    await media.save();

    res.status(201).json({
      success: true,
      message: 'Discussion question posted successfully',
      data: media.discussion,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a discussion comment
// @route   PUT /api/v1/multimedia/:id/discussion/:commentId
// @access  Public / Private
export const updateDiscussion = async (req, res, next) => {
  try {
    const { text, timestampTag } = req.body;
    const { id, commentId } = req.params;

    let media = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      media = await Multimedia.findById(id);
    }
    if (!media) {
      media = await Multimedia.findOne({ $or: [{ id: id }, { numericId: id }] });
    }

    if (!media) {
      return res.status(404).json({ success: false, message: 'Masterclass not found' });
    }

    const comment = media.discussion.id(commentId) || media.discussion.find(c => c._id?.toString() === commentId || c.id === commentId);
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    if (text !== undefined) comment.text = text;
    if (timestampTag !== undefined) comment.timestampTag = timestampTag;

    await media.save();

    res.status(200).json({
      success: true,
      message: 'Comment updated successfully',
      data: media.discussion,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a discussion comment
// @route   DELETE /api/v1/multimedia/:id/discussion/:commentId
// @access  Public / Private
export const deleteDiscussion = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    let media = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      media = await Multimedia.findById(id);
    }
    if (!media) {
      media = await Multimedia.findOne({ $or: [{ id: id }, { numericId: id }] });
    }

    if (!media) {
      return res.status(404).json({ success: false, message: 'Masterclass not found' });
    }

    media.discussion = media.discussion.filter(
      (c) => c._id?.toString() !== commentId && c.id !== commentId
    );

    await media.save();

    res.status(200).json({
      success: true,
      message: 'Comment deleted successfully',
      data: media.discussion,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Rate and review multimedia item
// @route   POST /api/v1/multimedia/:id/rate
// @access  Public / Private
export const rateMedia = async (req, res, next) => {
  try {
    const { score, comment } = req.body;
    const param = req.params.id;

    let media = null;
    if (param.match(/^[0-9a-fA-F]{24}$/)) {
      media = await Multimedia.findById(param);
    }
    if (!media) {
      media = await Multimedia.findOne({ $or: [{ id: param }, { numericId: param }] });
    }

    if (!media) {
      return res.status(404).json({ success: false, message: 'Masterclass not found' });
    }

    const numScore = parseFloat(score) || 5.0;
    const total = (media.averageRating * media.totalRatingsCount) + numScore;
    media.totalRatingsCount = (media.totalRatingsCount || 0) + 1;
    media.averageRating = parseFloat((total / media.totalRatingsCount).toFixed(1));

    await media.save();

    res.status(200).json({
      success: true,
      message: 'Rating recorded successfully',
      averageRating: media.averageRating,
      totalRatingsCount: media.totalRatingsCount,
    });
  } catch (error) {
    next(error);
  }
};
