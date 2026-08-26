export const STORY_CATEGORIES = [
  'All Stories',
  'Non-Tech to Tech',
  'College to FAANG',
  'Self-Taught to Full-Stack',
  'Lateral Career Switcher',
  'Veteran / Returning Pro',
];

export const STORIES_DATABASE = [
  {
    id: 'sophia-lin-uiux',
    name: 'Sophia Lin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    title: 'From Art History Major to Lead UI/UX Systems Architect at Figma',
    category: 'Non-Tech to Tech',
    domain: 'UI/UX & Product Design',
    careerId: 'product-designer',
    currentCompany: 'Figma',
    currentRole: 'Lead UI/UX Systems Architect',
    previousRole: 'Art Gallery Coordinator (BA in Art History)',
    previousSalary: '$38,000 / yr',
    currentSalary: '$165,000 / yr',
    salaryIncrease: '+334%',
    timeToTransition: '5 Months',
    upvotes: 248,
    isFeatured: true,
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
    quote:
      'The RIASEC assessment revealed my high Artistic-Investigative score. PathSeeker gave me the exact 90-day design token curriculum that got me hired at Figma.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Art History & Gallery Operations',
        description:
          'Graduated with a liberal arts degree, managing gallery exhibitions. Felt capped in earning potential with zero programming experience.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Mastering Tokenized Design Systems & Spatial UI',
        description:
          'Followed PathSeeker 90-day design roadmap. Overcame imposter syndrome by building an open-source enterprise Figma design system with 1,200+ stars.',
        timeframe: 'Months 1–4',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Multiple Offers & Placement at Figma',
        description:
          'Received 3 competing offers from Stripe, Spotify, and Figma. Accepted Lead Systems Architect offer with complete equity package.',
        timeframe: 'Month 5',
      },
    ],

    advice: [
      'Focus on deep design token systems and auto-layout architecture rather than surface-level redesigns.',
      'Document your design rationale in public case studies with before/after usability metrics.',
      'Treat engineering handoff as a first-class skill by learning basic HTML/Tailwind semantics.',
    ],

    toolsUsed: ['Figma Variables', 'Tailwind CSS', 'Storybook', 'Framer', 'Zeroheight'],
  },
  {
    id: 'tariq-mansoor-ai',
    name: 'Tariq Al-Mansoor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    title: 'Self-Taught Python Coder to Foundation AI Engineer at DeepMind',
    category: 'Self-Taught to Full-Stack',
    domain: 'AI & Machine Learning',
    careerId: 'ai-engineer',
    currentCompany: 'DeepMind',
    currentRole: 'Foundation AI Engineer',
    previousRole: 'Retail Customer Support Representative',
    previousSalary: '$32,000 / yr',
    currentSalary: '$195,000 / yr',
    salaryIncrease: '+509%',
    timeToTransition: '7 Months',
    upvotes: 312,
    isFeatured: true,
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    quote:
      'I worked late night retail shifts while coding tensor pipelines at 5 AM. PathSeeker’s PyTorch masterclass was the catalyst that changed my life.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Customer Support & Zero Tech Network',
        description:
          'Spent 3 years answering customer support tickets. Taught myself basic Python on weekends without any computer science degree.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Transformer Architecture & vLLM Serving',
        description:
          'Completed PathSeeker Foundation AI masterclasses. Re-implemented FlashAttention from scratch and optimized inference on quantized GPUs.',
        timeframe: 'Months 1–6',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Hired as Foundation AI Engineer at DeepMind',
        description:
          'Cracked the technical interview on transformer parallelization and joined the LLM distributed systems research squad.',
        timeframe: 'Month 7',
      },
    ],

    advice: [
      'Write technical breakdown blogs explaining math formulas in plain English.',
      'Benchmark your models with real throughput metrics (tokens/sec) rather than toy notebooks.',
      'Contribute small fixes to open-source libraries like HuggingFace or vLLM.',
    ],

    toolsUsed: ['PyTorch', 'vLLM', 'CUDA', 'Docker', 'HuggingFace', 'Ray'],
  },
  {
    id: 'elena-vance-cloud',
    name: 'Elena Vance',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    title: 'Chemical Engineer to Multi-Region Cloud Solutions Architect at AWS',
    category: 'Lateral Career Switcher',
    domain: 'Software & Cloud Architecture',
    careerId: 'cloud-architect',
    currentCompany: 'AWS Solutions',
    currentRole: 'Principal Cloud Architect',
    previousRole: 'Petroleum Process Engineer (BS Chemical Eng)',
    previousSalary: '$72,000 / yr',
    currentSalary: '$180,000 / yr',
    salaryIncrease: '+150%',
    timeToTransition: '4 Months',
    upvotes: 189,
    isFeatured: false,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    quote:
      'Engineering math gave me problem-solving stamina, but PathSeeker’s Kubernetes & Terraform blueprints gave me the exact enterprise cloud mastery AWS looks for.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Industrial Process Engineering',
        description:
          'Worked in chemical refineries with strict physical constraints. Wanted a remote, high-scale software infrastructure career.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Kubernetes Multi-Region & Terraform GitOps',
        description:
          'Earned CKA (Certified Kubernetes Administrator) and built multi-region active-active disaster recovery infrastructure.',
        timeframe: 'Months 1–3',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Principal Cloud Architect Placement',
        description:
          'Joined AWS Cloud Solutions assisting Fortune 500 enterprise migrations with zero downtime.',
        timeframe: 'Month 4',
      },
    ],

    advice: [
      'Learn infrastructure as code (Terraform) before touching cloud web consoles.',
      'Practice building chaos engineering drills that simulate catastrophic regional outages.',
    ],

    toolsUsed: ['Kubernetes', 'Terraform', 'AWS CDK', 'Istio', 'Prometheus'],
  },
  {
    id: 'david-rivera-quant',
    name: 'David Rivera',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    title: 'Barista to Quantitative Algorithmic Strategist at Citadel',
    category: 'Non-Tech to Tech',
    domain: 'Quant Finance & Blockchain',
    careerId: 'quant-trader',
    currentCompany: 'Citadel Securities',
    currentRole: 'Quantitative Strategist',
    previousRole: 'Coffee Shop Barista & Math Tutor',
    previousSalary: '$28,000 / yr',
    currentSalary: '$220,000 / yr',
    salaryIncrease: '+685%',
    timeToTransition: '8 Months',
    upvotes: 410,
    isFeatured: true,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    quote:
      'PathSeeker showed me that mathematical intuition is the highest-leverage skill in high-frequency trading. The orderbook simulations gave me an unbeatable edge.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Part-Time Barista & Math Enthusiast',
        description:
          'Loved calculus and discrete probability but lacked direction. Worked long cafe shifts to pay student rent.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'C++ Low-Latency & Statistical Arbitrage',
        description:
          'Built an ultra-fast lock-free orderbook simulation in C++20 capable of processing 4.8 million tick updates per second.',
        timeframe: 'Months 1–7',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Quantitative Strategist Offer at Citadel',
        description:
          'Aced the algorithmic math tests and signed a top-tier quantitative trading contract in Chicago.',
        timeframe: 'Month 8',
      },
    ],

    advice: [
      'Deeply study stochastic calculus, linear algebra, and C++ memory models.',
      'Backtest statistical arbitrage models with real historical tick data including fees and slippage.',
    ],

    toolsUsed: ['C++20', 'Python (NumPy/Pandas)', 'CMake', 'Linux Perf', 'ZeroMQ'],
  },
  {
    id: 'priya-sharma-cyber',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    title: 'High School Teacher to Cybersecurity Threat Lead at CrowdStrike',
    category: 'Non-Tech to Tech',
    domain: 'Cybersecurity & Defense',
    careerId: 'cybersecurity-lead',
    currentCompany: 'CrowdStrike',
    currentRole: 'Senior Threat Intelligence Lead',
    previousRole: 'Secondary School Science Teacher',
    previousSalary: '$44,000 / yr',
    currentSalary: '$155,000 / yr',
    salaryIncrease: '+252%',
    timeToTransition: '6 Months',
    upvotes: 195,
    isFeatured: false,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    quote:
      'Teaching taught me how to communicate clearly under stress. PathSeeker taught me Ghidra reverse engineering and SIEM threat hunting.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'High School Science Classroom',
        description:
          '6 years teaching physics. Burned out from administrative overhead and looking for an analytical defense career.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Binary Analysis, Ghidra & SOC Defenses',
        description:
          'Participated in 14 Capture-The-Flag (CTF) security competitions and wrote open-source memory dump dissection scripts.',
        timeframe: 'Months 1–5',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'CrowdStrike Threat Intelligence Lead',
        description:
          'Analyzing zero-day malware campaigns and safeguarding critical enterprise cloud infrastructure.',
        timeframe: 'Month 6',
      },
    ],

    advice: [
      'Set up your own home lab with isolated Virtual Machines to safely execute malware samples.',
      'Publish CTF writeups on GitHub — hiring managers read them closely.',
    ],

    toolsUsed: ['Ghidra', 'Wireshark', 'Splunk', 'YARA', 'Python', 'Metasploit'],
  },
  {
    id: 'marcus-thorne-robotics',
    name: 'Marcus Thorne',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    title: 'Mechanical Technician to Autonomous Robotics Lead at Boston Dynamics',
    category: 'Veteran / Returning Pro',
    domain: 'Robotics & Autonomous Systems',
    careerId: 'ai-engineer',
    currentCompany: 'Boston Dynamics',
    currentRole: 'Autonomous Systems Engineer',
    previousRole: 'Automotive Repair Technician',
    previousSalary: '$41,000 / yr',
    currentSalary: '$160,000 / yr',
    salaryIncrease: '+290%',
    timeToTransition: '6 Months',
    upvotes: 215,
    isFeatured: false,
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    quote:
      'I knew mechanical hardware from fixing engines. PathSeeker gave me ROS 2, sensor fusion, and computer vision skills to bring robots to life.',
    
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Automotive Shop Floor',
        description:
          '8 years repairing engines and suspension systems. Wanted to program intelligent autonomous machines.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'ROS 2, LiDAR SLAM & Sensor Fusion',
        description:
          'Built a self-navigating bipedal robot simulation in Gazebo utilizing Extended Kalman Filters and depth sensors.',
        timeframe: 'Months 1–5',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Autonomous Robotics Engineer',
        description:
          'Developing vision-guided navigation algorithms for industrial quadruped robots.',
        timeframe: 'Month 6',
      },
    ],

    advice: [
      'Master Linux, C++, and ROS 2 ecosystem mechanics thoroughly.',
      'Demonstrate real-world hardware integration videos in your portfolio.',
    ],

    toolsUsed: ['ROS 2', 'Gazebo', 'OpenCV', 'C++', 'Python', 'LiDAR SLAM'],
  },
];
