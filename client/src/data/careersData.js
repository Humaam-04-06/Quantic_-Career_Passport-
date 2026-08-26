export const CAREER_DOMAINS = [
  'All Domains',
  'AI & Machine Learning',
  'Software & Cloud Architecture',
  'UI/UX & Product Design',
  'Quant Finance & Blockchain',
  'Cybersecurity & Defense',
  'Robotics & Autonomous Systems',
  'Healthcare & Bio-Informatics',
];

export const CAREERS_DATABASE = [
  {
    id: 'ai-engineer',
    numericId: '1',
    title: 'Senior AI & Machine Learning Engineer',
    passportCode: 'CP-AI-01',
    domain: 'AI & Machine Learning',
    category: 'Advanced Computing',
    experienceLevel: 'Mid to Senior',
    workEnvironment: 'Hybrid / Remote',
    entrySalary: '$95,000',
    seniorSalary: '$220,000',
    avgComp: '$165,000',
    growthRate: '+28% YoY',
    demandLevel: 'Exponential',
    stressScore: 'Moderate (6/10)',
    workLifeScore: '8.2/10',
    isTrending: true,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Architect, fine-tune, and deploy state-of-the-art transformer neural networks, distributed LLM inference pipelines, and autonomous agent systems at global scale.',
    fullDescription:
      'As a Senior AI & Machine Learning Engineer, you bridge mathematical theory with production systems. You design custom model architectures, evaluate tensor efficiency across GPU clusters, and build low-latency API layers serving millions of real-time predictions.',
    
    // 4-Tier Salary Progression
    salaryLadder: [
      { level: 'Junior AI Associate', exp: '0 – 2 Years', salary: '$95,000 – $120,000', focus: 'Data cleaning, PyTorch model training, basic evaluation benchmarks.' },
      { level: 'Mid-Level ML Engineer', exp: '2 – 5 Years', salary: '$125,000 – $165,000', focus: 'End-to-end MLOps, vector databases, fine-tuning open-source LLMs.' },
      { level: 'Senior AI Specialist', exp: '5 – 8 Years', salary: '$170,000 – $220,000', focus: 'Distributed multi-GPU training, quantization, model architecture innovation.' },
      { level: 'Principal AI Architect', exp: '8+ Years', salary: '$240,000 – $340,000+', focus: 'Organization AI vision, proprietary foundation model training, executive strategy.' },
    ],

    // Day in the life timeline
    dayInLife: [
      { time: '09:30 AM', title: 'Global Standup & GPU Training Check', desc: 'Inspect overnight cluster loss curves and wandb training runs across AWS H100 pods.' },
      { time: '11:00 AM', title: 'Deep Architecture & Tensor Optimization', desc: 'Profile attention layer bottlenecks and implement FlashAttention-2 quantization in PyTorch.' },
      { time: '02:00 PM', title: 'Cross-Functional Model Evaluation Review', desc: 'Collaborate with Product and Security teams to assess hallucination metrics and safety guardrails.' },
      { time: '04:30 PM', title: 'Research Reading & Open-Source Review', desc: 'Evaluate new arXiv preprints on mixture-of-experts (MoE) routing and draft design proposals.' },
    ],

    // Skills Matrix
    skills: {
      hard: ['PyTorch / JAX', 'Transformers & HuggingFace', 'CUDA & TensorRT', 'Vector DBs (Pinecone/Milvus)', 'Distributed Training (vLLM)', 'Python / C++'],
      soft: ['Stochastic Reasoning', 'Scientific Rigor', 'Cross-Team Communication', 'First-Principles Thinking'],
      tools: ['Weights & Biases', 'Docker & Kubernetes', 'AWS SageMaker', 'LangChain / LlamaIndex', 'Triton Inference Server'],
    },

    // 3-Phase Roadmap
    roadmap: [
      {
        phase: 'Phase 1: Mathematical Foundations & Python Scientific Stack',
        timeframe: 'Months 1 – 3',
        milestones: [
          'Master Linear Algebra, Multivariable Calculus, Probability Distributions, and Statistics.',
          'Build neural networks from scratch using NumPy to understand backpropagation and gradient descent.',
          'Complete verified coursework in Data Structures, Algorithms, and Python scientific libraries.',
        ],
      },
      {
        phase: 'Phase 2: Deep Learning, PyTorch & LLM Architectures',
        timeframe: 'Months 4 – 6',
        milestones: [
          'Train Convolutional (CNNs), Recurrent (RNNs), and Transformer models on real-world datasets.',
          'Fine-tune open-source models (Llama 3 / Mistral) using LoRA/QLoRA on GPU instances.',
          'Build an end-to-end Retrieval-Augmented Generation (RAG) system with hybrid semantic search.',
        ],
      },
      {
        phase: 'Phase 3: Production MLOps, Quantization & Portfolio Placement',
        timeframe: 'Months 7 – 9',
        milestones: [
          'Deploy optimized models using vLLM, Triton, and Docker on cloud Kubernetes clusters.',
          'Benchmark latency, throughput, and memory consumption under high concurrency.',
          'Publish technical GitHub case study, interactive demo on HuggingFace Spaces, and apply for verified roles.',
        ],
      },
    ],

    certifications: [
      'AWS Certified Machine Learning – Specialty',
      'Google Cloud Professional Machine Learning Engineer',
      'DeepLearning.AI Deep Learning Specialization',
    ],
    prerequisites: 'Bachelor or Master in Computer Science, Mathematics, Data Science, or verified portfolio equivalent.',
  },
  {
    id: 'cloud-architect',
    numericId: '2',
    title: 'Distributed Cloud & DevOps Architect',
    passportCode: 'CP-CS-02',
    domain: 'Software & Cloud Architecture',
    category: 'Infrastructure Engineering',
    experienceLevel: 'Senior',
    workEnvironment: 'Remote',
    entrySalary: '$90,000',
    seniorSalary: '$210,000',
    avgComp: '$155,000',
    growthRate: '+24% YoY',
    demandLevel: 'High',
    stressScore: 'Moderate (5/10)',
    workLifeScore: '8.5/10',
    isTrending: true,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Engineer immutable multi-region cloud infrastructures, Kubernetes service meshes, and resilient zero-downtime microservice pipelines for global web applications.',
    fullDescription:
      'Distributed Cloud Architects design enterprise cloud topologies across AWS, GCP, and Azure. You automate infrastructure using Terraform, implement zero-trust security postures, and ensure 99.999% high availability under peak global traffic loads.',
    
    salaryLadder: [
      { level: 'Junior DevOps Engineer', exp: '0 – 2 Years', salary: '$90,000 – $115,000', focus: 'CI/CD pipeline maintenance, Docker scripting, basic AWS EC2/S3 management.' },
      { level: 'Cloud Systems Engineer', exp: '2 – 5 Years', salary: '$120,000 – $155,000', focus: 'Kubernetes cluster orchestration, Terraform IaaS, monitoring with Prometheus.' },
      { level: 'Senior Cloud Architect', exp: '5 – 8 Years', salary: '$160,000 – $210,000', focus: 'Multi-region disaster recovery, FinOps cloud cost optimization, service mesh.' },
      { level: 'Principal Infrastructure Lead', exp: '8+ Years', salary: '$225,000 – $320,000+', focus: 'Enterprise infrastructure sovereignty, hybrid-cloud strategy, C-suite leadership.' },
    ],

    dayInLife: [
      { time: '09:00 AM', title: 'Observability & SLA Health Check', desc: 'Review Datadog and Grafana dashboards for latency anomalies, error rates, and pod scaling.' },
      { time: '11:00 AM', title: 'Terraform Modules & Infrastructure-as-Code', desc: 'Author reusable, secure Terraform modules for autoscaling VPC microservice clusters.' },
      { time: '02:00 PM', title: 'Chaos Engineering & Failover Drill', desc: 'Simulate region-level database outages to verify automated multi-AZ failover recovery.' },
      { time: '04:00 PM', title: 'Cloud Cost & Security Audit', desc: 'Optimize AWS compute reservations and verify IAM policies with zero-trust compliance standards.' },
    ],

    skills: {
      hard: ['Kubernetes (K8s)', 'Terraform / OpenTofu', 'AWS / GCP / Azure', 'Docker & Helm', 'CI/CD (GitHub Actions)', 'Linux & Bash'],
      soft: ['System Resilience Design', 'Disaster Planning', 'Cross-Team Enablement', 'Root-Cause Analysis'],
      tools: ['Datadog / Grafana', 'ArgoCD / GitOps', 'Istio Service Mesh', 'Vault', 'Kafka'],
    },

    roadmap: [
      {
        phase: 'Phase 1: Linux Mastery, Networking & Containerization',
        timeframe: 'Months 1 – 2',
        milestones: ['Deep dive into Linux kernel, systemd, TCP/IP, DNS, and multi-stage Docker build optimizations.'],
      },
      {
        phase: 'Phase 2: Kubernetes Orchestration & Infrastructure-as-Code',
        timeframe: 'Months 3 – 5',
        milestones: ['Architect production Kubernetes clusters and automate deployments using Terraform and Helm charts.'],
      },
      {
        phase: 'Phase 3: Multi-Region Resilience, GitOps & Enterprise Security',
        timeframe: 'Months 6 – 8',
        milestones: ['Implement GitOps with ArgoCD, zero-trust IAM policies, and chaos engineering disaster recovery pipelines.'],
      },
    ],

    certifications: [
      'AWS Certified Solutions Architect – Professional',
      'Certified Kubernetes Administrator (CKA)',
      'HashiCorp Certified: Terraform Associate',
    ],
    prerequisites: 'Degree in Computer Science or Software Engineering, with solid systems administration background.',
  },
  {
    id: 'product-designer',
    numericId: '3',
    title: 'Principal UI/UX & Design Systems Lead',
    passportCode: 'CP-DE-03',
    domain: 'UI/UX & Product Design',
    category: 'Creative Design',
    experienceLevel: 'Senior',
    workEnvironment: 'Hybrid / Remote',
    entrySalary: '$70,000',
    seniorSalary: '$165,000',
    avgComp: '$130,000',
    growthRate: '+18% YoY',
    demandLevel: 'High',
    stressScore: 'Low (4/10)',
    workLifeScore: '9.0/10',
    isTrending: true,
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Craft tokenized multi-platform design systems, hyper-intuitive user journeys, and accessible, breathtaking aesthetic interactions for digital products.',
    fullDescription:
      'Principal Product Designers bridge user psychology with cutting-edge visual aesthetics. You lead end-to-end design sprints, maintain comprehensive Figma design token libraries, and partner with engineers to ship pixel-perfect user interfaces.',
    
    salaryLadder: [
      { level: 'Junior UI/UX Designer', exp: '0 – 2 Years', salary: '$70,000 – $90,000', focus: 'Wireframing, component styling, user interview transcription.' },
      { level: 'Mid-Level Product Designer', exp: '2 – 5 Years', salary: '$95,000 – $130,000', focus: 'Interactive prototyping, usability testing, micro-interactions.' },
      { level: 'Senior Design Systems Lead', exp: '5 – 8 Years', salary: '$135,000 – $165,000', focus: 'Tokenized multi-brand systems, accessibility audits, design strategy.' },
      { level: 'Design Director / VP of Design', exp: '8+ Years', salary: '$180,000 – $260,000+', focus: 'Brand identity leadership, design org culture, executive UX advocacy.' },
    ],

    dayInLife: [
      { time: '10:00 AM', title: 'Design Critique & Figma Token Sync', desc: 'Review component tokens, spacing variables, and dark/light theme contrast ratios in Figma.' },
      { time: '11:30 AM', title: 'Interactive Micro-Interaction Prototyping', desc: 'Craft fluid spring animations and gestural interactions in ProtoPie and Framer.' },
      { time: '02:30 PM', title: 'User Usability Research Lab', desc: 'Observe target users navigating checkout funnels and note cognitive friction drop-offs.' },
      { time: '04:30 PM', title: 'Engineering Handoff & Spec Review', desc: 'Inspect React component visual accuracy, flexbox behavior, and responsive breakpoints.' },
    ],

    skills: {
      hard: ['Figma Mastery (Variables/Auto-Layout)', 'Design Systems Architecture', 'Prototyping (Framer/ProtoPie)', 'WCAG Accessibility (AAA)', 'Design Tokens (Style Dictionary)'],
      soft: ['User Empathy', 'Visual Storytelling', 'Cross-Disciplinary Critique', 'Design Heuristics'],
      tools: ['Figma', 'Framer', 'ProtoPie', 'FigJam', 'Linear / Jira'],
    },

    roadmap: [
      {
        phase: 'Phase 1: Design Fundamentals, Spatial Grids & Typography',
        timeframe: 'Months 1 – 2',
        milestones: ['Master 8pt spatial layouts, typography scales, color theory, and wireframing best practices.'],
      },
      {
        phase: 'Phase 2: Tokenized Design Systems & Advanced Prototyping',
        timeframe: 'Months 3 – 4',
        milestones: ['Build an enterprise-grade Figma design system with components, states, variables, and documentation.'],
      },
      {
        phase: 'Phase 3: Usability Testing, Live Case Studies & Portfolio',
        timeframe: 'Months 5 – 6',
        milestones: ['Conduct moderated user tests, publish 3 comprehensive problem-solution case studies, and launch portfolio.'],
      },
    ],

    certifications: [
      'Nielsen Norman Group (NN/g) UX Master Certified',
      'Interaction Design Foundation (IxDF) Design Systems Specialist',
    ],
    prerequisites: 'Portfolio demonstrating end-to-end product thinking, wireframes, prototypes, and user validation.',
  },
  {
    id: 'quant-trader',
    numericId: '4',
    title: 'Quantitative Finance & Algorithmic Strategist',
    passportCode: 'CP-QF-04',
    domain: 'Quant Finance & Blockchain',
    category: 'Financial Engineering',
    experienceLevel: 'Mid to Senior',
    workEnvironment: 'Hybrid',
    entrySalary: '$120,000',
    seniorSalary: '$350,000+',
    avgComp: '$235,000',
    growthRate: '+22% YoY',
    demandLevel: 'Exponential',
    stressScore: 'High (8/10)',
    workLifeScore: '7.0/10',
    isTrending: true,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Formulate stochastic pricing models, statistical arbitrage strategies, and nanosecond-execution algorithmic trading engines for global liquidity markets.',
    fullDescription:
      'Quantitative Strategists leverage advanced mathematics, time-series econometrics, and ultra-low-latency C++ programming to discover statistical anomalies across equities, futures, and decentralized crypto order books.',
    
    salaryLadder: [
      { level: 'Junior Quant Researcher', exp: '0 – 2 Years', salary: '$120,000 – $175,000', focus: 'Data backtesting, signal feature extraction, statistical parameter tuning.' },
      { level: 'Quantitative Trader', exp: '2 – 5 Years', salary: '$180,000 – $280,000 + Bonus', focus: 'Live strategy execution, risk factor hedging, market microstructure.' },
      { level: 'Senior Quant Strategist', exp: '5 – 8 Years', salary: '$290,000 – $450,000 + PnL', focus: 'Proprietary alpha generation, cross-asset arbitrage, latency optimization.' },
      { level: 'Portfolio Manager / Partner', exp: '8+ Years', salary: '$500,000 – $1,200,000+', focus: 'Fund capital allocation, institutional risk governance, firm ownership.' },
    ],

    dayInLife: [
      { time: '08:00 AM', title: 'Market Open & Liquidity Spread Analysis', desc: 'Monitor opening auction volatility, fill ratios, and cross-exchange price discrepancies.' },
      { time: '10:30 AM', title: 'Stochastic Backtesting & Parameter Tuning', desc: 'Simulate mean-reversion trading algorithms across 10 years of tick-level orderbook data.' },
      { time: '01:30 PM', title: 'C++ Low-Latency Engine Optimization', desc: 'Eliminate memory allocation overhead and optimize cache hits in the direct market access (DMA) loop.' },
      { time: '04:15 PM', title: 'PnL Attribution & Risk Decomposition', desc: 'Analyze daily Sharpe ratio, drawdown tail-risk, and beta exposure to global indices.' },
    ],

    skills: {
      hard: ['Stochastic Calculus & Probability', 'Modern C++ (C++20)', 'Python (NumPy/Pandas/Polars)', 'Time-Series Econometrics', 'Market Microstructure'],
      soft: ['Probabilistic Decision Making', 'Extreme Intellectual Rigor', 'High-Stress Discipline', 'Fast Pattern Recognition'],
      tools: ['C++', 'KDB+/Q', 'Linux Kernel Tuning', 'Bloomberg Terminal', 'Jupyter Lab'],
    },

    roadmap: [
      {
        phase: 'Phase 1: Advanced Probability, Statistics & Financial Math',
        timeframe: 'Months 1 – 3',
        milestones: ['Master Brownian motion, Ito calculus, Monte Carlo simulations, and multi-factor regression models.'],
      },
      {
        phase: 'Phase 2: Modern C++ Performance & Market Microstructure',
        timeframe: 'Months 4 – 6',
        milestones: ['Build a low-latency limit order book matching engine in modern C++ with lock-free data structures.'],
      },
      {
        phase: 'Phase 3: Backtesting Frameworks & Alpha Discovery',
        timeframe: 'Months 7 – 9',
        milestones: ['Engineer a high-fidelity event-driven backtesting engine with realistic slippage and transaction costs.'],
      },
    ],

    certifications: [
      'CQF (Certificate in Quantitative Finance)',
      'FRM (Financial Risk Manager)',
    ],
    prerequisites: 'Strong background in Mathematics, Physics, Computer Science, or Quantitative Finance.',
  },
  {
    id: 'cybersecurity-lead',
    numericId: '5',
    title: 'Cybersecurity Threat Hunter & Security Architect',
    passportCode: 'CP-SEC-05',
    domain: 'Cybersecurity & Defense',
    category: 'Information Security',
    experienceLevel: 'Mid to Senior',
    workEnvironment: 'Hybrid / Remote',
    entrySalary: '$85,000',
    seniorSalary: '$195,000',
    avgComp: '$145,000',
    growthRate: '+26% YoY',
    demandLevel: 'Exponential',
    stressScore: 'Moderate to High (7/10)',
    workLifeScore: '8.0/10',
    isTrending: true,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Safeguard mission-critical systems through threat intelligence, offensive penetration testing, zero-trust cryptographic policies, and automated incident response.',
    fullDescription:
      'Cybersecurity Architects anticipate and neutralize digital attacks. You engineer hardened boundary defenses, dissect malware payloads, audit smart contracts, and implement military-grade encryption standards across enterprise data networks.',
    
    salaryLadder: [
      { level: 'SOC Security Analyst', exp: '0 – 2 Years', salary: '$85,000 – $105,000', focus: 'SIEM log analysis, triage of security alerts, vulnerability scanning.' },
      { level: 'Penetration Tester / Threat Hunter', exp: '2 – 5 Years', salary: '$110,000 – $145,000', focus: 'Red team offensive assessments, exploit development, reverse engineering.' },
      { level: 'Senior Security Architect', exp: '5 – 8 Years', salary: '$150,000 – $195,000', focus: 'Zero-trust architecture, cloud security posture, cryptographic protocols.' },
      { level: 'Chief Information Security Officer (CISO)', exp: '8+ Years', salary: '$210,000 – $360,000+', focus: 'Corporate cybersecurity governance, nation-state defense, board reporting.' },
    ],

    dayInLife: [
      { time: '09:00 AM', title: 'Global Threat Intelligence Briefing', desc: 'Assess zero-day CVE advisories and threat actor telemetry targeting enterprise cloud assets.' },
      { time: '11:00 AM', title: 'Offensive Penetration Simulation', desc: 'Conduct simulated social engineering and lateral network movement tests against staging APIs.' },
      { time: '02:00 PM', title: 'Cryptographic Security Review', desc: 'Audit TLS 1.3 configurations and evaluate post-quantum encryption readiness for customer databases.' },
      { time: '04:30 PM', title: 'Automated Incident Playbook Testing', desc: 'Enhance automated SOAR scripts to isolate compromised endpoint containers in under 3 seconds.' },
    ],

    skills: {
      hard: ['Network Protocols (TCP/IP, TLS)', 'Ethical Hacking & Metasploit', 'Reverse Engineering (Ghidra)', 'Cloud Security (IAM, KMS)', 'SIEM / EDR (Splunk, CrowdStrike)'],
      soft: ['Adversarial Mindset', 'Incident Response Under Pressure', 'Clear Technical Reporting', 'Legal Compliance Discretion'],
      tools: ['Wireshark', 'Burp Suite Pro', 'Splunk', 'CrowdStrike', 'Ghidra', 'Kali Linux'],
    },

    roadmap: [
      {
        phase: 'Phase 1: Networking, Linux & Security Fundamentals',
        timeframe: 'Months 1 – 2',
        milestones: ['Master packet inspection with Wireshark, Linux kernel security, and fundamental cryptography.'],
      },
      {
        phase: 'Phase 2: Offensive Security, Pen Testing & Web Exploits',
        timeframe: 'Months 3 – 5',
        milestones: ['Complete hands-on labs in OWASP Top 10 vulnerabilities, Active Directory exploitation, and binary analysis.'],
      },
      {
        phase: 'Phase 3: Cloud Threat Hunting, SIEM & Defensive Architecture',
        timeframe: 'Months 6 – 8',
        milestones: ['Design zero-trust cloud security perimeters and author automated incident response playbooks.'],
      },
    ],

    certifications: [
      'OSCP (Offensive Security Certified Professional)',
      'CISSP (Certified Information Systems Security Professional)',
      'CompTIA Security+ / CySA+',
    ],
    prerequisites: 'Computer Science, Information Technology, or military/defense network security background.',
  },
  {
    id: 'robotics-engineer',
    numericId: '6',
    title: 'Robotics & Autonomous Systems Lead',
    passportCode: 'CP-ROB-06',
    domain: 'Robotics & Autonomous Systems',
    category: 'Cyber-Physical Engineering',
    experienceLevel: 'Senior',
    workEnvironment: 'On-site / Lab',
    entrySalary: '$85,000',
    seniorSalary: '$185,000',
    avgComp: '$140,000',
    growthRate: '+21% YoY',
    demandLevel: 'High',
    stressScore: 'Moderate (6/10)',
    workLifeScore: '8.4/10',
    isTrending: false,
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    heroSummary:
      'Program embedded microcontrollers, sensor fusion algorithms (LiDAR/SLAM), and kinematic actuators for autonomous industrial robotics and drones.',
    fullDescription:
      'Robotics Engineers combine mechanical kinematics, electrical circuit engineering, and real-time C++ control software. You bring hardware to life, enabling machines to perceive their environment, map physical space, and execute precise physical operations safely.',
    
    salaryLadder: [
      { level: 'Junior Embedded / Robotics Engineer', exp: '0 – 2 Years', salary: '$85,000 – $110,000', focus: 'Microcontroller programming (STM32/ESP32), motor driver calibration.' },
      { level: 'Autonomous Systems Engineer', exp: '2 – 5 Years', salary: '$115,000 – $150,000', focus: 'ROS 2 nodes, LiDAR point cloud processing, path planning algorithms.' },
      { level: 'Senior Robotics Lead', exp: '5 – 8 Years', salary: '$155,000 – $185,000', focus: 'Sim2Real reinforcement learning, hardware-in-the-loop (HIL) testing.' },
      { level: 'Director of Autonomous Engineering', exp: '8+ Years', salary: '$195,000 – $280,000+', focus: 'Robotics product roadmap, regulatory safety certification, fleet operations.' },
    ],

    dayInLife: [
      { time: '09:30 AM', title: 'Hardware-in-the-Loop Sensor Calibration', desc: 'Calibrate stereo camera arrays and LiDAR depth sensors against ground truth markers in lab.' },
      { time: '11:00 AM', title: 'ROS 2 Motion Planning & SLAM Coding', desc: 'Implement obstacle avoidance algorithms and state estimation filters in real-time C++.' },
      { time: '02:00 PM', title: 'Physical Field Test & Drone Flight Trial', desc: 'Conduct outdoor autonomous navigation obstacle course trials and record IMU telemetry.' },
      { time: '04:30 PM', title: 'Kinematic Simulation & Digital Twin Update', desc: 'Benchmark robot arm trajectory repeatability in NVIDIA Isaac Sim.' },
    ],

    skills: {
      hard: ['ROS 2 (Robot Operating System)', 'Modern C++ & Python', 'Sensor Fusion (Kalman Filters/SLAM)', 'Control Theory (PID/MPC)', 'Embedded Systems (ARM/CAN bus)'],
      soft: ['Physical Safety Intuition', 'Cross-Discipline Hardware/Software Debugging', 'Methodical Experimentation'],
      tools: ['ROS 2 / Gazebo', 'NVIDIA Isaac Sim', 'OpenCV / PCL', 'STM32CubeIDE', 'SolidWorks'],
    },

    roadmap: [
      {
        phase: 'Phase 1: Embedded C++, Microcontrollers & Kinematics',
        timeframe: 'Months 1 – 3',
        milestones: ['Program real-time microcontrollers, interface sensor buses (I2C/SPI), and calculate forward kinematics.'],
      },
      {
        phase: 'Phase 2: ROS 2 Architecture, Computer Vision & SLAM',
        timeframe: 'Months 4 – 6',
        milestones: ['Implement Simultaneous Localization and Mapping (SLAM) and point-cloud obstacle avoidance in ROS 2.'],
      },
      {
        phase: 'Phase 3: Digital Twin Simulation & Hardware Deployment',
        timeframe: 'Months 7 – 9',
        milestones: ['Simulate full autonomous robotic workflows in NVIDIA Isaac Sim and deploy firmware onto physical prototypes.'],
      },
    ],

    certifications: [
      'Certified ROS 2 Developer (ConstructSim)',
      'ARM Accredited Engineer (AAE)',
    ],
    prerequisites: 'Degree in Robotics, Mechanical, Electrical, Mechatronics, or Computer Engineering.',
  },
];
