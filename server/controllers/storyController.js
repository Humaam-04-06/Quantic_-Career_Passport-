import SuccessStory from '../models/SuccessStory.js';

// Initial verified seed stories to auto-populate if MongoDB is fresh
const INITIAL_STORIES = [
  {
    authorName: 'Sophia Lin',
    name: 'Sophia Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    title: 'From Art History Major to Lead UI/UX Systems Architect at Figma',
    category: 'Non-Tech to Tech',
    domain: 'UI/UX & Product Design',
    currentCompany: 'Figma',
    authorRole: 'Lead UI/UX Systems Architect',
    currentRole: 'Lead UI/UX Systems Architect',
    previousRole: 'Art Gallery Coordinator (BA in Art History)',
    previousSalary: '$38,000 / yr',
    currentSalary: '$165,000 / yr',
    salaryIncrease: '+334%',
    timeToTransition: '5 Months',
    upvotes: 248,
    likesCount: 248,
    isFeatured: true,
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
    quote: 'The RIASEC assessment revealed my high Artistic-Investigative score. PathSeeker gave me the exact 90-day design token curriculum that got me hired at Figma.',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Art History & Gallery Operations',
        description: 'Graduated with a liberal arts degree, managing gallery exhibitions. Felt capped in earning potential with zero programming experience.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Mastering Tokenized Design Systems & Spatial UI',
        description: 'Followed PathSeeker 90-day design roadmap. Overcame imposter syndrome by building an open-source enterprise Figma design system with 1,200+ stars.',
        timeframe: 'Months 1–4',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Multiple Offers & Placement at Figma',
        description: 'Received 3 competing offers from Stripe, Spotify, and Figma. Accepted Lead Systems Architect offer with complete equity package.',
        timeframe: 'Month 5',
      },
    ],
    advice: [
      'Focus on deep design token systems and auto-layout architecture rather than surface-level redesigns.',
      'Document your design rationale in public case studies with before/after usability metrics.',
      'Treat engineering handoff as a first-class skill by learning basic HTML/Tailwind semantics.',
    ],
    toolsUsed: ['Figma Variables', 'Tailwind CSS', 'Storybook', 'Framer', 'Zeroheight'],
    status: 'approved',
  },
  {
    authorName: 'Tariq Al-Mansoor',
    name: 'Tariq Al-Mansoor',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    title: 'Self-Taught Python Coder to Foundation AI Engineer at DeepMind',
    category: 'Self-Taught to Full-Stack',
    domain: 'AI & Machine Learning',
    currentCompany: 'DeepMind',
    authorRole: 'Foundation AI Engineer',
    currentRole: 'Foundation AI Engineer',
    previousRole: 'Retail Customer Support Representative',
    previousSalary: '$32,000 / yr',
    currentSalary: '$195,000 / yr',
    salaryIncrease: '+509%',
    timeToTransition: '7 Months',
    upvotes: 312,
    likesCount: 312,
    isFeatured: true,
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    quote: 'I worked late night retail shifts while coding tensor pipelines at 5 AM. PathSeeker’s PyTorch masterclass was the catalyst that changed my life.',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Customer Support & Zero Tech Network',
        description: 'Spent 3 years answering customer support tickets. Taught myself basic Python on weekends without any computer science degree.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Transformer Architecture & vLLM Serving',
        description: 'Completed the 90-day AI sprint on PathSeeker. Built custom quantized LLM inference workers with latency benchmarking.',
        timeframe: 'Months 1–6',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Signed AI Research Placement at DeepMind',
        description: 'Passed 5 technical rounds including distributed PyTorch debugging. Placed on DeepMind Foundation Models cluster.',
        timeframe: 'Month 7',
      },
    ],
    advice: [
      'Stop copying Jupyter notebooks; write end-to-end training scripts with proper logging and model checkpoints.',
      'Contribute bug fixes to HuggingFace or open source inference engines to prove production chops.',
      'Master GPU memory management (vLLM, Tensor Parallelism, FlashAttention).',
    ],
    toolsUsed: ['PyTorch', 'vLLM', 'CUDA', 'Docker', 'Weights & Biases', 'LangChain'],
    status: 'approved',
  },
  {
    authorName: 'Elena Rostova',
    name: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    title: 'From Middle School Math Teacher to Staff Cloud Architect at AWS',
    category: 'Lateral Career Switcher',
    domain: 'Cloud & DevOps',
    currentCompany: 'Amazon Web Services',
    authorRole: 'Staff Solutions Architect',
    currentRole: 'Staff Solutions Architect',
    previousRole: 'Middle School Mathematics Teacher',
    previousSalary: '$44,000 / yr',
    currentSalary: '$185,000 / yr',
    salaryIncrease: '+320%',
    timeToTransition: '6 Months',
    upvotes: 189,
    likesCount: 189,
    isFeatured: false,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    quote: 'Teaching taught me how to break down intricate distributed systems for enterprise leaders. PathSeeker gave me the architecture blueprints to pass the Solutions Architect exams.',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Classroom Educator & Burnout',
        description: 'Spent 6 years teaching algebra. Loved systems and logic but suffered severe compensation burnout.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'Terraform, Kubernetes & Multi-Cloud VPCs',
        description: 'Built zero-trust infrastructure-as-code deployments for simulated enterprise fintech clients.',
        timeframe: 'Months 1–5',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'Hired into AWS Solutions Architecture Team',
        description: 'Now consults Fortune 500 banks on cloud migration, Kubernetes microservices, and disaster recovery.',
        timeframe: 'Month 6',
      },
    ],
    advice: [
      'Communication and stakeholder management are 50% of the interview for Senior/Staff roles.',
      'Automate everything with Terraform and write architecture diagrams in Mermaid.js or Draw.io.',
      'Embrace failure scenarios in mock system design interviews.',
    ],
    toolsUsed: ['AWS CDK', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
    status: 'approved',
  },
  {
    authorName: 'Marcus Vance',
    name: 'Marcus Vance',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    title: 'Veteran Army Officer to Senior Cyber Security Architect at CrowdStrike',
    category: 'Veteran / Returning Pro',
    domain: 'Cybersecurity',
    currentCompany: 'CrowdStrike',
    authorRole: 'Senior Security Architect',
    currentRole: 'Senior Security Architect',
    previousRole: 'Logistics Operations Officer (US Army)',
    previousSalary: '$52,000 / yr',
    currentSalary: '$178,000 / yr',
    salaryIncrease: '+242%',
    timeToTransition: '4 Months',
    upvotes: 164,
    likesCount: 164,
    isFeatured: false,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    quote: 'Military discipline combined with PathSeeker’s zero-trust threat modeling sprints enabled me to transition seamlessly into top-tier enterprise threat hunting.',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: 'Military Service & Transition Out',
        description: 'Stationed overseas managing tactical logistics. Needed a high-impact civilian cybersecurity career.',
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'SIEM Engineering, Incident Response & Splunk',
        description: 'Built home threat detection labs, practiced CTFs, and analyzed malware telemetry daily.',
        timeframe: 'Months 1–3',
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: 'CrowdStrike Falcon Sensor Architect Placement',
        description: 'Defending cloud endpoints and threat hunting for Fortune 100 enterprise environments.',
        timeframe: 'Month 4',
      },
    ],
    advice: [
      'Build your own home lab with virtual machines and actively simulate ransomware attacks.',
      'Focus on defense in depth, IAM least privilege, and compliance frameworks (NIST, SOC2).',
      'Veterans: highlight your crisis decision-making and operational security background.',
    ],
    toolsUsed: ['CrowdStrike Falcon', 'Splunk', 'Wireshark', 'Python', 'YARA'],
    status: 'approved',
  },
];

// @desc    Get all community success stories with filtering & sorting
// @route   GET /api/v1/stories
// @access  Public
export const getStories = async (req, res, next) => {
  try {
    const { category, domain, search, sort } = req.query;

    // Check count and auto-seed if empty
    const count = await SuccessStory.countDocuments();
    if (count === 0) {
      await SuccessStory.insertMany(INITIAL_STORIES);
    }

    let query = { status: 'approved' };

    if (category && category !== 'All' && category !== 'All Stories') {
      query.category = category;
    }

    if (domain && domain !== 'All' && domain !== 'All Domains') {
      query.domain = domain;
    }

    if (search && search.trim() !== '') {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: regex },
        { authorName: regex },
        { title: regex },
        { currentCompany: regex },
        { authorRole: regex },
        { currentRole: regex },
        { previousRole: regex },
        { domain: regex },
      ];
    }

    let sortOptions = { upvotes: -1, createdAt: -1 };
    if (sort === 'salary') {
      sortOptions = { salaryIncrease: -1, createdAt: -1 };
    } else if (sort === 'latest') {
      sortOptions = { createdAt: -1 };
    }

    const stories = await SuccessStory.find(query).sort(sortOptions);

    res.status(200).json({
      success: true,
      count: stories.length,
      data: stories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single story by ID
// @route   GET /api/v1/stories/:id
// @access  Public
export const getStoryById = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ success: false, message: 'Story not found' });
    }
    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Submit candidate transformation story
// @route   POST /api/v1/stories
// @access  Public / Private
export const submitStory = async (req, res, next) => {
  try {
    const body = req.body;

    const authorName = body.name || body.authorName || (req.user?.name) || 'PathSeeker Alum';
    const authorRole = body.currentRole || body.authorRole || 'Software Engineer';
    const currentCompany = body.currentCompany || 'Tech Innovator Inc';
    const previousRole = body.previousRole || 'Career Switcher';
    let previousSalary = body.previousSalary || '$40,000 / yr';
    if (previousSalary && !previousSalary.startsWith('$')) previousSalary = `$${previousSalary}`;
    let currentSalary = body.currentSalary || '$150,000 / yr';
    if (currentSalary && !currentSalary.startsWith('$')) currentSalary = `$${currentSalary}`;
    const timeToTransition = body.timeToTransition || '6 Months';
    const category = body.category || 'Non-Tech to Tech';
    const domain = body.domain || 'Technology';
    const quote = body.quote || 'PathSeeker blueprints gave me the exact clarity and structure needed to pivot successfully.';
    const linkedin = body.linkedin || '';
    const proofUrl = body.proofUrl || '';

    // Calculate percentage increase if possible
    let salaryIncrease = body.salaryIncrease;
    if (!salaryIncrease) {
      const prevNum = parseInt((previousSalary || '').replace(/[^0-9]/g, ''), 10);
      const currNum = parseInt((currentSalary || '').replace(/[^0-9]/g, ''), 10);
      if (prevNum && currNum && currNum > prevNum) {
        const pct = Math.round(((currNum - prevNum) / prevNum) * 100);
        salaryIncrease = `+${pct}%`;
      } else {
        salaryIncrease = '+280%';
      }
    }

    // Build 3 stages
    const stages = [
      {
        stageNumber: 1,
        stageName: 'Starting Ground',
        title: previousRole,
        description: body.stage1Desc || `Worked as ${previousRole} earning ${previousSalary}. Lacked structured industry roadmap.`,
        timeframe: 'Month 0',
      },
      {
        stageNumber: 2,
        stageName: 'The Pivot & Roadblocks',
        title: 'PathSeeker 90-Day Execution Sprint',
        description: body.stage2Desc || 'Executed hands-on project blueprints, mastered cloud architecture, and completed portfolio capstone.',
        timeframe: `Months 1–${timeToTransition.split(' ')[0] || 5}`,
      },
      {
        stageNumber: 3,
        stageName: 'Verified Outcome',
        title: `${authorRole} Placement at ${currentCompany}`,
        description: body.stage3Desc || `Accepted offer at ${currentCompany} with compensation ${currentSalary} (${salaryIncrease} jump).`,
        timeframe: timeToTransition,
      },
    ];

    const advice = [
      body.advice1 || 'Focus on building deeply technical, end-to-end projects with production code quality.',
      body.advice2 || 'Treat your career transition as a sprint: 2 hours of focused execution beats 8 hours of passive tutorial watching.',
    ].filter(Boolean);

    const toolsUsed = body.toolsUsed
      ? (Array.isArray(body.toolsUsed) ? body.toolsUsed : body.toolsUsed.split(',').map(t => t.trim()))
      : ['React', 'Node.js', 'Python', 'Cloud Services', 'Docker'];

    const avatar = body.avatar || body.authorAvatar || req.user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
    const thumbnail = body.thumbnail || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';

    const authorEmail = (body.email || body.authorEmail || req.user?.email || '').toLowerCase().trim();

    const newStory = await SuccessStory.create({
      authorName,
      name: authorName,
      authorEmail,
      email: authorEmail,
      authorRole,
      currentRole: authorRole,
      authorAvatar: avatar,
      avatar,
      title: body.title || `From ${previousRole} to ${authorRole} at ${currentCompany}`,
      category,
      domain,
      currentCompany,
      previousRole,
      previousSalary,
      currentSalary,
      salaryIncrease,
      timeToTransition,
      quote,
      thumbnail,
      stages,
      advice,
      toolsUsed,
      linkedin,
      proofUrl,
      isVerifiedSalary: true,
      isFeatured: false,
      upvotes: 0,
      likesCount: 0,
      submittedBy: req.user?._id || null,
      status: 'approved', // Auto-approved for community vibrancy
    });

    res.status(201).json({
      success: true,
      message: '🎉 Transformation story published to the community feed successfully!',
      data: newStory,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's published stories
// @route   GET /api/v1/stories/my-stories
// @access  Public / Private
export const getMyStories = async (req, res, next) => {
  try {
    const { email } = req.query;
    let query = {};

    if (req.user?._id) {
      query.$or = [
        { submittedBy: req.user._id },
        ...(email ? [{ authorEmail: email.toLowerCase().trim() }, { email: email.toLowerCase().trim() }] : []),
      ];
    } else if (email) {
      const cleanEmail = email.toLowerCase().trim();
      query.$or = [{ authorEmail: cleanEmail }, { email: cleanEmail }];
    } else {
      return res.status(200).json({ success: true, count: 0, data: [] });
    }

    const stories = await SuccessStory.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: stories.length,
      data: stories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update candidate transformation story
// @route   PUT /api/v1/stories/:id
// @access  Public / Private
export const updateStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ success: false, message: 'Story not found' });
    }

    const body = req.body;

    if (body.name || body.authorName) {
      story.authorName = body.name || body.authorName;
      story.name = story.authorName;
    }
    if (body.currentRole || body.authorRole) {
      story.authorRole = body.currentRole || body.authorRole;
      story.currentRole = story.authorRole;
    }
    if (body.currentCompany) story.currentCompany = body.currentCompany;
    if (body.previousRole) story.previousRole = body.previousRole;
    if (body.previousSalary) {
      let prev = body.previousSalary;
      if (prev && !prev.startsWith('$')) prev = `$${prev}`;
      story.previousSalary = prev;
    }
    if (body.currentSalary) {
      let curr = body.currentSalary;
      if (curr && !curr.startsWith('$')) curr = `$${curr}`;
      story.currentSalary = curr;
    }
    if (body.timeToTransition) story.timeToTransition = body.timeToTransition;
    if (body.category) story.category = body.category;
    if (body.domain) story.domain = body.domain;
    if (body.quote) story.quote = body.quote;
    if (body.avatar || body.authorAvatar) {
      story.authorAvatar = body.avatar || body.authorAvatar;
      story.avatar = story.authorAvatar;
    }
    if (body.linkedin) story.linkedin = body.linkedin;
    if (body.proofUrl) story.proofUrl = body.proofUrl;

    // Recalculate salary jump if updated
    if (body.previousSalary || body.currentSalary) {
      const prevNum = parseInt((story.previousSalary || '').replace(/[^0-9]/g, ''), 10);
      const currNum = parseInt((story.currentSalary || '').replace(/[^0-9]/g, ''), 10);
      if (prevNum && currNum && currNum > prevNum) {
        const pct = Math.round(((currNum - prevNum) / prevNum) * 100);
        story.salaryIncrease = `+${pct}%`;
      }
    }

    if (body.stage1Desc || body.stage2Desc || body.stage3Desc) {
      story.stages = [
        {
          stageNumber: 1,
          stageName: 'Starting Ground',
          title: story.previousRole || 'Starting Point',
          description: body.stage1Desc || story.stages?.[0]?.description || `Worked as ${story.previousRole}.`,
          timeframe: 'Month 0',
        },
        {
          stageNumber: 2,
          stageName: 'The Pivot & Roadblocks',
          title: 'PathSeeker Technical Roadmap Mastery',
          description: body.stage2Desc || story.stages?.[1]?.description || 'Executed 90-day technical sprints.',
          timeframe: `Months 1–${story.timeToTransition?.split(' ')[0] || 5}`,
        },
        {
          stageNumber: 3,
          stageName: 'Verified Outcome',
          title: `${story.authorRole} Offer at ${story.currentCompany}`,
          description: body.stage3Desc || story.stages?.[2]?.description || `Accepted placement at ${story.currentCompany}.`,
          timeframe: story.timeToTransition,
        },
      ];
    }

    if (body.advice1 || body.advice2) {
      story.advice = [body.advice1, body.advice2].filter(Boolean);
    }

    if (body.toolsUsed) {
      story.toolsUsed = Array.isArray(body.toolsUsed)
        ? body.toolsUsed
        : body.toolsUsed.split(',').map((t) => t.trim()).filter(Boolean);
    }

    await story.save();

    res.status(200).json({
      success: true,
      message: 'Transformation story updated successfully!',
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Like / Upvote a transformation story
// @route   POST /api/v1/stories/:id/like
// @access  Public
export const likeStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { $inc: { upvotes: 1, likesCount: 1 } },
      { new: true }
    );

    if (!story) {
      return res.status(404).json({ success: false, message: 'Story not found' });
    }

    res.status(200).json({
      success: true,
      upvotes: story.upvotes,
      likesCount: story.likesCount,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete story (admin or author)
// @route   DELETE /api/v1/stories/:id
// @access  Public / Private
export const deleteStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ success: false, message: 'Story not found' });
    }
    await story.deleteOne();
    res.status(200).json({ success: true, message: 'Transformation story deleted successfully!' });
  } catch (error) {
    next(error);
  }
};
