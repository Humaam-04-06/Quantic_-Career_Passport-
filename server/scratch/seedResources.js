import mongoose from 'mongoose';
import 'dotenv/config';
import Resource from '../models/Resource.js';

const RICH_RESOURCES = [
  {
    id: 'system-design-bible-2026',
    title: 'The Distributed Systems & FAANG Architecture Bible (2026 Edition)',
    category: 'System Design & Architecture',
    format: 'PDF',
    fileSize: '14.8 MB',
    pages: '48 Pages',
    downloads: 14250,
    rating: 4.95,
    isFeatured: true,
    author: 'Staff Dist Sys Lead, ex-Google',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    summary:
      'Comprehensive architectural blueprints covering consistent hashing, Raft consensus, write-ahead logging, rate limiters, global caching strategies, and multi-region database sharding.',
    topics: ['Consistent Hashing', 'Raft Consensus', 'Distributed Caching', 'Database Sharding', 'Event Sinks'],
    tableOfContents: [
      'Chapter 1: Scalability Fundamentals & Latency Numbers Every Engineer Should Know',
      'Chapter 2: Designing a Global Distributed Rate Limiter (Token Bucket vs Sliding Window)',
      'Chapter 3: Distributed Consensus: Raft vs Paxos in Production Systems',
      'Chapter 4: Sharding, Replication, and Multi-Leader Conflict Resolution',
      'Chapter 5: Event-Driven Architectures with Kafka, Flink, and Event Sourcing',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'System Design Framework: The 4-Step FAANG Blueprint',
        content:
          'Step 1: Understand Problem & Scope Constraints (DAU, RPS, Read/Write Ratio, SLA/SLO). Step 2: High-Level Architecture Block Diagram. Step 3: Deep-Dive Bottlenecks & Failure Modes. Step 4: Scale Out & Cost Estimation.',
      },
      {
        pageNumber: 2,
        title: 'Distributed Rate Limiting at Scale',
        content:
          'Architecture diagram comparing Redis Cluster token buckets with local memory caching. Handling network partitions, burst capacity, and sub-millisecond response guarantees.',
      },
      {
        pageNumber: 3,
        title: 'Multi-Region Active-Active Sharding Strategies',
        content:
          'Geo-partitioning tables by Tenant ID. CockroachDB and Spanner consistency models compared with Cassandra eventual consistency and quorum read/writes.',
      },
    ],
    downloadFileContent: `# 🏛️ The Distributed Systems & FAANG Architecture Bible (2026)
Author: Staff Distributed Systems Lead, ex-Google
Verified Verification Hash: SHA256-DISTRIB-SYS-9941

## Core Scalability Commandments
1. Read Latency: Memory (100ns) -> SSD (100μs) -> Multi-Region Network (150ms).
2. Rate Limiting: Always utilize local Redis Token Buckets with async background reconciliation.
3. Consensus: Raft algorithm quorum sizes must be 2F + 1 nodes.

## Production Microservice Checklist
- [x] Implement Circuit Breakers with 500ms timeout
- [x] Configure Exponential Backoff with Jitter on all RPCs
- [x] Enable Distributed Tracing via OpenTelemetry & Jaeger
`,
  },
  {
    id: 'faang-ats-resume-kit',
    title: 'FAANG-Approved Engineering ATS Resume & Portfolio Kit',
    category: 'Resumes & Portfolios',
    format: 'FIG',
    fileSize: '8.4 MB',
    pages: '6 Templates',
    downloads: 9840,
    rating: 4.9,
    isFeatured: false,
    author: 'Principal Recruiter, ex-Meta',
    coverImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    summary:
      'Clean, ATS-verified single-page engineering resume templates and portfolio design systems built in Figma with auto-layout and variable tokens.',
    topics: ['ATS Parsing', 'Figma Variables', 'Action-Impact Formula', 'Design Tokens'],
    tableOfContents: [
      'Template 1: Junior / Career Switcher High-Impact Format',
      'Template 2: Senior Full-Stack & Systems Architect Format',
      'Template 3: Machine Learning & AI Research Specialist Format',
      'Template 4: Product Design & Design Systems Lead Resume',
      'Template 5: Interactive Web Portfolio Wireframe Kit',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'The Action-Impact Bullet Formula',
        content:
          'Never write "Worked on React app". Always use: [Action Verb] + [Engineered Feature/System] + [Quantifiable Business Impact]. Example: "Architected real-time WebSocket state engine, reducing UI latency by 42% for 1.2M active users."',
      },
      {
        pageNumber: 2,
        title: 'ATS Parse Validation Rules',
        content:
          'Clean single-column structure with standard header tags (Experience, Education, Technical Skills, Open Source). No floating text boxes or complex nested tables.',
      },
    ],
    downloadFileContent: `# 📄 FAANG ATS Resume & Engineering Portfolio Guide
Author: Principal Technical Recruiter, ex-Meta
Verified Hash: SHA256-ATS-RESUME-8812

## The High-Impact Resume Formula
Every bullet point must adhere to:
[Strong Action Verb] + [What You Built/Architected] + [Measurable Business / Technical Metric]

### Good Examples:
- "Architected distributed Redis caching layer, decreasing p99 API latency from 450ms to 42ms for 2.4M daily requests."
- "Engineered multi-tenant Kubernetes deployment pipeline with ArgoCD, cutting release cycle time by 65%."
`,
  },
  {
    id: 'pytorch-transformer-llm-cheatsheet',
    title: 'PyTorch Transformer & LLM Fine-Tuning Cheat-sheet',
    category: 'AI & LLM Engineering',
    format: 'PDF',
    fileSize: '6.2 MB',
    pages: '16 Pages',
    downloads: 11200,
    rating: 4.98,
    isFeatured: false,
    author: 'Foundation Model AI Scientist',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    summary:
      'Mathematical formulas, memory calculation cheat-sheets, LoRA/QLoRA hyperparameter setups, FlashAttention configs, and vLLM production serving scripts.',
    topics: ['LoRA / QLoRA', 'FlashAttention-2', 'KV-Cache Memory Calc', 'vLLM Serving', 'DPO / RLHF'],
    tableOfContents: [
      'Section 1: Attention Matrix Math & FlashAttention-2 Implementation',
      'Section 2: VRAM Calculation Formula for Training & Inference',
      'Section 3: LoRA vs QLoRA: Rank (r), Alpha (α), and Target Modules Cheat-sheet',
      'Section 4: Direct Preference Optimization (DPO) Loss Function Implementation in PyTorch',
      'Section 5: High-Throughput vLLM PagedAttention Benchmark Script',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'GPU Memory Formula for Model Training',
        content:
          'Memory = (Weights + Gradients + Optimizer States + Activations). For AdamW: 16 bytes per parameter (FP16 weights = 2 bytes, gradients = 2 bytes, Adam momentum + variance = 8 bytes, FP32 master weights = 4 bytes).',
      },
      {
        pageNumber: 2,
        title: 'LoRA / QLoRA Parameter Selection Matrix',
        content:
          'Recommended rank r=16 or r=32 with alpha=2*r. Target all linear projection layers (q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj) for maximum downstream accuracy.',
      },
    ],
    downloadFileContent: `# 🧠 PyTorch LLM & Transformer Fine-Tuning Cheat Sheet
Author: Foundation Model AI Research Scientist
Verified Hash: SHA256-PYTORCH-LLM-4419

## GPU VRAM Training Equation
VRAM (Bytes) = Parameters * (2 [FP16 weights] + 2 [Gradients] + 12 [AdamW States]) + Activations
For 7B Parameter Model with Full FP16 Fine-Tuning: Minimum ~112 GB VRAM.
With 4-Bit QLoRA: Runs efficiently on a single 24GB RTX 4090 / A10G!
`,
  },
  {
    id: 'kubernetes-gitops-production-manifests',
    title: 'Enterprise Kubernetes & GitOps Production Starter Pack',
    category: 'Cloud & DevOps',
    format: 'ZIP',
    fileSize: '22.4 MB',
    pages: '32 Config Files',
    downloads: 7450,
    rating: 4.92,
    isFeatured: false,
    author: 'Lead Infrastructure Engineer',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    summary:
      'Production-ready Terraform modules, ArgoCD GitOps pipelines, Istio service mesh configs, Prometheus/Grafana alerting rules, and multi-region Helm charts.',
    topics: ['ArgoCD', 'Terraform AWS/GCP', 'Istio Mesh', 'Prometheus Alerts', 'Zero-Downtime Helm'],
    tableOfContents: [
      'Module 1: Multi-AZ EKS / GKE Terraform Root Manifests',
      'Module 2: ArgoCD ApplicationSet with Multi-Cluster Rollouts',
      'Module 3: Istio VirtualService & DestinationRule with Canary Deployments',
      'Module 4: Prometheus Operator ServiceMonitor & High-Severity PagerDuty Alerts',
      'Module 5: Vault CSI Driver for Automated Kubernetes Secret Injection',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'GitOps Pipeline Architecture',
        content:
          'Automated sync triggers from GitHub PRs to ArgoCD controllers with automated rollback on healthcheck failure. Zero manual `kubectl apply` in production.',
      },
    ],
    downloadFileContent: `# ☁️ Enterprise Kubernetes GitOps Blueprint
Author: Lead Infrastructure Architect
Verified Hash: SHA256-K8S-GITOPS-3391

## Cluster Best Practices
- Never allow containers to run as Root (\`runAsNonRoot: true\`)
- Always set memory and CPU requests equal to limits to avoid OOMKills
- Use ArgoCD ApplicationSets for declarative multi-region rollouts
`,
  },
  {
    id: 'salary-negotiation-scripts-playbook',
    title: 'The $200k+ Tech Offer Negotiation Scriptbook',
    category: 'Salary Negotiation',
    format: 'PDF',
    fileSize: '5.1 MB',
    pages: '28 Pages',
    downloads: 13800,
    rating: 4.97,
    isFeatured: false,
    author: 'Executive Career Coach & Ex-Director of Talent',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    summary:
      'Word-for-word email and phone scripts to counter initial recruiter offers, leverage competing offers, negotiate equity grants, and secure signing bonuses.',
    topics: ['Counter-Offer Scripts', 'Equity Vesting (RSUs vs ISOs)', 'Competing Offers', 'Signing Bonus Levers'],
    tableOfContents: [
      'Chapter 1: The Golden Rule: Never Give a Number First',
      'Chapter 2: Word-for-Word Scripts for Initial Recruiter Phone Screens',
      'Chapter 3: Structuring the Counter-Offer Email with Competing Leverage',
      'Chapter 4: Valuing Startup Equity vs Public RSUs (Tax & Vesting Schedules)',
      'Chapter 5: Negotiating Remote Stipends, Title Upgrades, and Accelerated Reviews',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'Script: When Recruiter Asks for Desired Salary',
        content:
          '"I am currently focused on finding the right technical and cultural fit. Given my background in distributed systems and the scope of this role, I expect a competitive package at market top-of-band. What is the approved compensation range for this level?"',
      },
      {
        pageNumber: 2,
        title: 'Script: The Competing Offer Multiplier',
        content:
          '"I have received a formal offer from [Company B] with a total compensation of $185k. However, your engineering team is my clear top choice. If you can bridge the base to $165k and add a $20k signing bonus, I am prepared to sign today."',
      },
    ],
    downloadFileContent: `# 💼 Tech Salary Negotiation Scriptbook ($200k+ Playbook)
Author: Executive Career Coach & Ex-Director of Talent
Verified Hash: SHA256-NEGOTIATION-7712

## Key Negotiation Principles
1. Silence is leverage: pause 3-5 seconds after hearing an initial offer.
2. Base salary is permanent; signing bonuses and equity refreshers bridge gaps.
3. Always get all counter-terms in writing before releasing other offers.
`,
  },
  {
    id: 'coding-interview-patterns-handbook',
    title: 'The 14 Essential Coding Interview Algorithmic Patterns',
    category: 'Interview Cheat-sheets',
    format: 'PDF',
    fileSize: '9.5 MB',
    pages: '42 Pages',
    downloads: 16500,
    rating: 4.96,
    isFeatured: false,
    author: 'Competitive Programmer & FAANG Staff Engineer',
    coverImage: 'https://images.unsplash.com/photo-1516116211227-bbc13c726352?auto=format&fit=crop&w=800&q=80',
    summary:
      'Master Sliding Window, Two Pointers, Fast & Slow Pointers, Monotonic Stack, Top K Elements, and Dynamic Programming with visual code templates.',
    topics: ['Sliding Window', 'Two Pointers', 'Monotonic Stack', 'Top K Elements', 'DP State Transitions'],
    tableOfContents: [
      'Pattern 1: Two Pointers (Opposite Ends & Same Direction)',
      'Pattern 2: Dynamic Sized Sliding Window (Substrings & Subarrays)',
      'Pattern 3: Monotonic Stack / Queue (Next Greater Element & Histogram)',
      'Pattern 4: Top K Elements with Min/Max Heap',
      'Pattern 5: Interval Scheduling & Merge Intervals',
      'Pattern 6: 2D Dynamic Programming (Grid Paths & Knapsack)',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'Sliding Window Template (Python & C++)',
        content:
          'Universal sliding window template with frequency hashmap, expansion pointer right, and contraction pointer left when window conditions break.',
      },
    ],
    downloadFileContent: `# ⚡ The 14 Essential Coding Interview Patterns
Author: FAANG Staff Engineer & ICPC Gold Medalist
Verified Hash: SHA256-ALGO-PATTERNS-5521

## 1. Sliding Window Template (Python 3)
\`\`\`python
def sliding_window(nums, k):
    left = 0
    window_sum = 0
    max_len = 0
    for right in range(len(nums)):
        window_sum += nums[right]
        while window_sum > k:
            window_sum -= nums[left]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len
\`\`\`
`,
  },
  {
    id: 'cloud-security-zero-trust-blueprint',
    title: 'Cloud Security & Zero-Trust Architecture Blueprint',
    category: 'Cloud & DevOps',
    format: 'PDF',
    fileSize: '11.3 MB',
    pages: '34 Pages',
    downloads: 5120,
    rating: 4.88,
    isFeatured: false,
    author: 'Principal Security Architect',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    summary:
      'SOC 2 and ISO 27001 compliant cloud architectures covering IAM least privilege, mTLS service-to-service encryption, WAF rules, and automated SIEM threat detection.',
    topics: ['Zero Trust IAM', 'mTLS Istio', 'KMS Key Management', 'SIEM & SOC 2 Compliance'],
    tableOfContents: [
      'Chapter 1: Zero Trust Core Tenets & Identity Federation (OIDC/SAML)',
      'Chapter 2: Securing Microservices with mTLS and Spire/Spiffe',
      'Chapter 3: Secrets Management with HashiCorp Vault & AWS KMS',
      'Chapter 4: Continuous Vulnerability Scanning in CI/CD (Trivy, Snyk, Semgrep)',
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'Zero-Trust IAM Enforcement Rules',
        content:
          'Principle of least privilege with temporary short-lived AWS STS assumed roles. Zero long-lived root API access keys stored on developer machines.',
      },
    ],
    downloadFileContent: `# 🛡️ Cloud Security & Zero-Trust Blueprint
Author: Principal Cloud Security Architect
Verified Hash: SHA256-SECURITY-ZERO-TRUST-1109

## Zero-Trust Architecture Checklist
- [x] Eliminate hardcoded API credentials using HashiCorp Vault / AWS Secrets Manager
- [x] Enforce mTLS encryption for all internal cluster pod-to-pod traffic
- [x] Implement automated Trivy container image scanning in GitHub Actions
`,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas');
    await Resource.deleteMany({});
    await Resource.insertMany(RICH_RESOURCES);
    console.log('✅ Successfully seeded', RICH_RESOURCES.length, 'rich engineering blueprints into MongoDB Atlas!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding resources:', err);
    process.exit(1);
  }
}

seed();
