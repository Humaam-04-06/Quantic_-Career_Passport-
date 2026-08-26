export const MEDIA_TYPES = [
  'All Formats',
  'Video Masterclasses',
  'Audio Podcasts',
  'Quick Micro-Lessons',
];

export const MULTIMEDIA_DATABASE = [
  {
    id: 'deep-learning-transformers',
    numericId: '1',
    title: 'Architecting Foundation Transformers & LLM Inference Clusters',
    type: 'Video Masterclasses',
    domain: 'AI & Machine Learning',
    duration: '42:15',
    durationSeconds: 2535,
    views: '28.4k',
    rating: 4.9,
    isFeatured: true,
    isTrending: true,
    careerId: 'ai-engineer',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk', // Illustrative educational video embed
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary:
      'Deep dive into self-attention tensor mechanics, multi-head quantization techniques (FlashAttention-2), and high-throughput vLLM serving infrastructure for production systems.',
    
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

    faqs: [
      {
        user: 'Alex Chen',
        role: 'ML Engineer',
        timeAgo: '2 days ago',
        timestamp: '08:40',
        question: 'Does FlashAttention-2 support variable sequence lengths in batch inference without padding overhead?',
        answer: 'Yes! FlashAttention-2 handles ragged batched tensors natively, avoiding zero-padding computation and boosting throughput by an additional 25%.',
        upvotes: 42,
      },
      {
        user: 'Sarah Miller',
        role: 'Data Scientist',
        timeAgo: '4 days ago',
        timestamp: '25:05',
        question: 'What is the observed perplexity loss when quantizing Llama 3 70B to FP8 on H100 GPUs?',
        answer: 'Across standard MMLU benchmarks, FP8 quantization retains over 99.4% of full FP16 accuracy with virtually zero perceptible hallucination increase.',
        upvotes: 29,
      },
    ],
  },
  {
    id: 'kubernetes-cloud-resilience',
    numericId: '2',
    title: 'Zero-Downtime Multi-Region Kubernetes & GitOps Orchestration',
    type: 'Video Masterclasses',
    domain: 'Software & Cloud Architecture',
    duration: '38:40',
    durationSeconds: 2320,
    views: '19.2k',
    rating: 4.8,
    isFeatured: false,
    isTrending: true,
    careerId: 'cloud-architect',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary:
      'Master ArgoCD GitOps sync pipelines, automated canary deployments with Istio service mesh, and chaos engineering disaster recovery drills.',
    
    speaker: {
      name: 'Marcus Vance',
      role: 'Staff Infrastructure Architect',
      organization: 'AWS Cloud Solutions / Kubernetes Contributor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: '12+ years architecting multi-region systems serving 500M+ monthly users. Author of production GitOps automation frameworks.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },

    takeaways: [
      {
        title: 'GitOps Single Source of Truth',
        desc: 'Declarative infrastructure defined in Git triggers automatic sync state reconciliation through ArgoCD without granting developer cluster write permissions.',
      },
      {
        title: 'Canary Traffic Weighting',
        desc: 'Route 5% of real-world user traffic to the new container release while analyzing Datadog error metrics before progressive 100% rollout.',
      },
      {
        title: 'Active-Active Multi-Region Failover',
        desc: 'Global Anycast DNS and Cross-Region DynamoDB/Spanner replication allow seamless zero-downtime routing during catastrophic data center outages.',
      },
    ],

    transcript: [
      { time: '00:00', seconds: 0, text: 'Today we will architect a zero-downtime multi-region Kubernetes deployment from scratch using ArgoCD and Istio.' },
      { time: '05:20', seconds: 320, text: 'Setting up our declarative Git repository structure for dev, staging, and multi-region production clusters.' },
      { time: '12:45', seconds: 765, text: 'Configuring Istio VirtualService and DestinationRule for granular 95/5 canary traffic shifting.' },
      { time: '21:10', seconds: 1270, text: 'Automating rollback triggers when Prometheus latency spikes exceed the 99th percentile SLA threshold.' },
      { time: '31:30', seconds: 1890, text: 'Simulating an entire AWS us-east-1 region failure and observing automated Global Server Load Balancer failover.' },
    ],

    handouts: [
      { name: 'Enterprise Kubernetes & ArgoCD Production Manifests', size: '5.1 MB', type: 'YAML / Helm' },
      { name: 'Disaster Recovery & Chaos Drill Playbook (PDF)', size: '2.8 MB', type: 'PDF Document' },
    ],

    faqs: [
      {
        user: 'Devin K.',
        role: 'DevOps Engineer',
        timeAgo: '1 day ago',
        timestamp: '12:45',
        question: 'How do you handle stateful database migrations during live 5% canary rollouts?',
        answer: 'Always use backwards-compatible schema evolutions: expand the schema first, deploy canary, verify, contract old fields only in subsequent releases.',
        upvotes: 35,
      },
    ],
  },
  {
    id: 'design-systems-scale',
    numericId: '3',
    title: 'Tokenized Design Systems & Spatial UI Architecture at Enterprise Scale',
    type: 'Video Masterclasses',
    domain: 'UI/UX & Product Design',
    duration: '31:10',
    durationSeconds: 1870,
    views: '15.8k',
    rating: 4.9,
    isFeatured: false,
    isTrending: false,
    careerId: 'product-designer',
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary:
      'Learn how to structure Figma design token libraries (colors, spatial scales, typography), automate CSS/Tailwind exports, and ensure WCAG AAA accessibility.',
    
    speaker: {
      name: 'Julianne Hayes',
      role: 'Head of Product Design Systems',
      organization: 'Figma Community Ambassador / Ex-Airbnb',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Created award-winning tokenized design libraries supporting 40+ engineering teams across web, iOS, and Android products.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },

    takeaways: [
      {
        title: '3-Tier Token Hierarchy',
        desc: 'Structure tokens into Global (Raw values) → Semantic (Purpose-driven e.g. surface-primary) → Component-specific scopes.',
      },
      {
        title: 'Dark/Light Theme Token Automation',
        desc: 'Use Figma Variables to automatically swap entire color palettes without redrawing components.',
      },
    ],

    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome! Today we build an enterprise-grade multi-brand design system from raw tokens to code export.' },
      { time: '07:15', seconds: 435, text: 'Defining semantic token aliases that decouple design intention from specific hex values.' },
      { time: '18:40', seconds: 1120, text: 'Exporting tokens directly into Tailwind CSS and Style Dictionary for React/React Native.' },
    ],

    handouts: [
      { name: 'Figma Community Design Token Template (Community Link)', size: 'Figma File', type: 'UI Kit' },
      { name: 'WCAG AAA Accessibility Contrast Guide', size: '1.9 MB', type: 'PDF Document' },
    ],

    faqs: [],
  },
  {
    id: 'quant-alpha-signals-podcast',
    numericId: '4',
    title: 'The Math of High-Frequency Alpha: Orderbook Dynamics & Nanosecond Execution',
    type: 'Audio Podcasts',
    domain: 'Quant Finance & Blockchain',
    duration: '52:30',
    durationSeconds: 3150,
    views: '34.1k',
    rating: 5.0,
    isFeatured: true,
    isTrending: true,
    careerId: 'quant-trader',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary:
      'In-depth audio interview with veteran hedge fund strategists on statistical arbitrage, C++ kernel bypass networking, and microstructure tick anomalies.',
    
    speaker: {
      name: 'Dr. Sterling Thorne & Ray Zhang',
      role: 'Managing Partners & Lead Quants',
      organization: 'Citadel Securities / Renaissance Alum',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Managing $4.2B in multi-strategy statistical arbitrage portfolios with 18 consecutive positive quarters.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },

    takeaways: [
      {
        title: 'Microstructure Alpha Decay',
        desc: 'Predictive price signals derived from orderbook level-2 queue imbalance decay within 25 to 50 microseconds.',
      },
      {
        title: 'Kernel-Bypass Solarflare NICs',
        desc: 'Routing network packets directly into user-space memory buffers eliminates Linux kernel context switching delays.',
      },
    ],

    transcript: [
      { time: '00:00', seconds: 0, text: 'Welcome to PathSeeker Quants. Today we sit down with Ray and Sterling to discuss high-frequency orderbook microstructure.' },
      { time: '14:20', seconds: 860, text: 'Ray explains how queue cancellation rates provide early signals for institutional market order execution.' },
      { time: '28:10', seconds: 1690, text: 'Deep dive into C++20 memory alignment, cache line eviction penalties, and zero-allocation data structures.' },
    ],

    handouts: [
      { name: 'C++ Lock-Free Orderbook Implementation Whitepaper', size: '4.2 MB', type: 'PDF Document' },
    ],

    faqs: [],
  },
  {
    id: 'cybersecurity-threat-hunting-micro',
    numericId: '5',
    title: 'Dissecting Zero-Day Malware: Reverse Engineering with Ghidra in 15 Minutes',
    type: 'Quick Micro-Lessons',
    domain: 'Cybersecurity & Defense',
    duration: '14:50',
    durationSeconds: 890,
    views: '22.7k',
    rating: 4.9,
    isFeatured: false,
    isTrending: true,
    careerId: 'cybersecurity-lead',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    summary:
      'A rapid technical walkthrough on analyzing obfuscated binary payloads, reconstructing C decompiled code, and identifying remote shellcode hooks in Ghidra.',
    
    speaker: {
      name: 'Aiden Brooks',
      role: 'Principal Threat Intelligence Lead',
      organization: 'Mandiant / CrowdStrike Fellow',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      verified: true,
      bio: 'Analyzed over 4,000 nation-state malware binaries and authored open-source memory forensics plugins.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },

    takeaways: [
      {
        title: 'Static Decompilation Heuristics',
        desc: 'Identifying anti-debugging tricks (PEB BeingDebugged flags) and reconstructing encrypted string tables via XOR brute-force scripts.',
      },
    ],

    transcript: [
      { time: '00:00', seconds: 0, text: 'In this micro-lesson, we load an obfuscated ransomware dropper into NSA Ghidra to pinpoint its command-and-control IP.' },
      { time: '04:30', seconds: 270, text: 'Locating the XOR decryption loop in the .rdata section and generating a Python script to decode the payload.' },
      { time: '11:15', seconds: 675, text: 'Generating YARA detection rules to identify similar malware variants across enterprise endpoints.' },
    ],

    handouts: [
      { name: 'Ghidra Reverse Engineering Shortcut & YARA Cheat Sheet', size: '1.5 MB', type: 'PDF Document' },
    ],

    faqs: [],
  },
];
