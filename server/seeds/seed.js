import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';
import UserProfile from '../models/UserProfile.js';
import Career from '../models/Career.js';
import QuizQuestion from '../models/QuizQuestion.js';
import Multimedia from '../models/Multimedia.js';
import SuccessStory from '../models/SuccessStory.js';
import Resource from '../models/Resource.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pathseeker');
    console.log('🌱 Connected to MongoDB for seeding...');

    // Clear existing collections
    await User.deleteMany({});
    await UserProfile.deleteMany({});
    await Career.deleteMany({});
    await QuizQuestion.deleteMany({});
    await Multimedia.deleteMany({});
    await SuccessStory.deleteMany({});
    await Resource.deleteMany({});

    console.log('🧹 Cleaned existing data...');

    // 1. Create Default Users
    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash('Admin@12345', salt);
    const studentPassword = await bcrypt.hash('Student@12345', salt);
    const graduatePassword = await bcrypt.hash('Graduate@12345', salt);
    const proPassword = await bcrypt.hash('Pro@12345', salt);

    const admin = await User.create({
      name: 'System Administrator',
      email: 'admin@pathseeker.com',
      password: adminPassword,
      role: 'admin',
    });

    const student = await User.create({
      name: 'Alex Rivera (Student)',
      email: 'student@pathseeker.com',
      password: studentPassword,
      role: 'student',
    });

    const graduate = await User.create({
      name: 'Sarah Chen (Graduate)',
      email: 'graduate@pathseeker.com',
      password: graduatePassword,
      role: 'graduate',
    });

    const pro = await User.create({
      name: 'Marcus Vance (Professional)',
      email: 'pro@pathseeker.com',
      password: proPassword,
      role: 'professional',
    });

    // Create Profiles
    await UserProfile.create({
      user: student._id,
      educationLevel: 'High School',
      currentInstitutionOrCompany: 'Oakridge International Academy',
      majorOrField: 'Computer Science & STEM',
      skills: ['Python Basics', 'Mathematics', 'Creative Problem Solving'],
      interests: ['Artificial Intelligence', 'Game Development', 'Robotics'],
      targetCareerDomain: 'Technology',
    });

    await UserProfile.create({
      user: graduate._id,
      educationLevel: 'Undergraduate',
      currentInstitutionOrCompany: 'University of California, Berkeley',
      majorOrField: 'B.S. Software Engineering',
      skills: ['JavaScript', 'React.js', 'Node.js', 'SQL', 'Git', 'REST APIs'],
      interests: ['Cloud Architecture', 'Full-Stack Engineering', 'SaaS'],
      targetCareerDomain: 'Technology',
    });

    await UserProfile.create({
      user: pro._id,
      educationLevel: 'Postgraduate',
      currentInstitutionOrCompany: 'Apex Financial Technologies',
      majorOrField: 'M.S. Financial Engineering',
      skills: ['Python', 'Quantitative Modeling', 'Risk Management', 'Machine Learning', 'Data Analysis'],
      interests: ['Fintech', 'Executive Leadership', 'AI in Finance'],
      experienceYears: 6,
      targetCareerDomain: 'Business & Finance',
    });

    console.log('✅ Created 4 Default Users & Profiles');

    // 2. Create Careers
    const careers = await Career.create([
      {
        title: 'Full-Stack Software Engineer',
        domain: 'Technology',
        description: 'Architect, build, and deploy end-to-end web and mobile applications using modern frameworks and cloud platforms.',
        overview: 'Full-stack engineers bridge the gap between user-facing frontends and scalable backend infrastructures.',
        requiredSkills: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Cloud (AWS/GCP)', 'Docker'],
        educationPath: {
          recommendedDegree: "Bachelor's in Computer Science or Software Engineering",
          alternativeCertifications: ['AWS Certified Developer', 'Meta Full-Stack Professional Certificate'],
          timelineMonths: 24,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 78000,
          midLevel: 115000,
          seniorLevel: 165000,
        },
        jobDemand: 'Very High',
        growthRatePercent: 25,
        dailyResponsibilities: [
          'Design interactive UI components with responsive layouts and accessibility.',
          'Build secure RESTful and GraphQL APIs with database indexing.',
          'Implement CI/CD pipelines and automated testing suites.',
          'Collaborate with product designers and engineering teams.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Web Fundamentals', description: 'Master HTML5, Modern CSS (Tailwind), and Core JavaScript (ES6+).', keyMilestones: ['Build 3 responsive interactive landing pages', 'Understand asynchronous JS & DOM'] },
          { stepNumber: 2, title: 'Frontend Framework Mastery', description: 'Deep dive into React, State Management, and API integration.', keyMilestones: ['State lifting, Hooks, Context API', 'Build a full SPA with routing'] },
          { stepNumber: 3, title: 'Backend & Database Architecture', description: 'Build Node.js/Express APIs and design NoSQL/SQL schemas.', keyMilestones: ['JWT Auth & RBAC', 'CRUD with MongoDB & Mongoose'] },
          { stepNumber: 4, title: 'Deployment & DevOps', description: 'Deploy apps to cloud hosting, configure environment secrets, and setup CI/CD.', keyMilestones: ['Vercel, Render, Docker basics', 'Lighthouse optimization'] },
        ],
        tags: ['Full Stack', 'Web Development', 'MERN', 'High Demand'],
        isTrending: true,
        viewsCount: 1420,
      },
      {
        title: 'AI & Machine Learning Engineer',
        domain: 'Technology',
        description: 'Develop, train, and deploy predictive machine learning models, neural networks, and generative AI pipelines.',
        overview: 'AI Engineers transform raw data into intelligent autonomous systems that power recommendations, NLP, and computer vision.',
        requiredSkills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Data Pipelines', 'LLM Fine-tuning', 'Vector Databases'],
        educationPath: {
          recommendedDegree: "Bachelor's/Master's in Data Science, AI, or Mathematics",
          alternativeCertifications: ['DeepLearning.AI TensorFlow Developer', 'Google Cloud Professional ML Engineer'],
          timelineMonths: 30,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 92000,
          midLevel: 140000,
          seniorLevel: 210000,
        },
        jobDemand: 'Very High',
        growthRatePercent: 38,
        dailyResponsibilities: [
          'Preprocess massive datasets and engineer features.',
          'Design and fine-tune transformer models and neural networks.',
          'Deploy model inference endpoints with low latency.',
          'Monitor model drift and performance metrics.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Math & Python Mastery', description: 'Linear Algebra, Calculus, Statistics, NumPy, and Pandas.', keyMilestones: ['Exploratory Data Analysis', 'Statistical Hypothesis Testing'] },
          { stepNumber: 2, title: 'Classical Machine Learning', description: 'Supervised and unsupervised learning with Scikit-learn.', keyMilestones: ['Regression, Classification, Clustering', 'Cross-Validation & Hyperparameter tuning'] },
          { stepNumber: 3, title: 'Deep Learning & GenAI', description: 'Neural networks, PyTorch, Embeddings, and LLM APIs.', keyMilestones: ['RAG architecture with LangChain', 'Vector DB search integration'] },
          { stepNumber: 4, title: 'MLOps & Deployment', description: 'Serve models at scale with FastAPI, Docker, and Cloud GPUs.', keyMilestones: ['Model packaging & latency optimization', 'CI/CD for ML models'] },
        ],
        tags: ['AI', 'Machine Learning', 'GenAI', 'Python', 'Top Rated'],
        isTrending: true,
        viewsCount: 2310,
      },
      {
        title: 'Cloud Solutions Architect',
        domain: 'Technology',
        description: 'Design robust, fault-tolerant, and cost-effective cloud infrastructures across AWS, Google Cloud, and Azure.',
        overview: 'Cloud Architects define enterprise cloud strategy, security perimeters, microservices topology, and disaster recovery.',
        requiredSkills: ['AWS / GCP / Azure', 'Terraform (IaC)', 'Kubernetes (K8s)', 'Microservices', 'Networking & VPCs', 'Linux'],
        educationPath: {
          recommendedDegree: "Bachelor's in Computer Science or Information Systems",
          alternativeCertifications: ['AWS Solutions Architect Professional', 'Google Cloud Certified Professional Cloud Architect'],
          timelineMonths: 24,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 88000,
          midLevel: 135000,
          seniorLevel: 190000,
        },
        jobDemand: 'High',
        growthRatePercent: 22,
        dailyResponsibilities: [
          'Design multi-region scalable cloud architectures.',
          'Implement Infrastructure as Code with Terraform and Ansible.',
          'Optimize cloud expenditure and security compliance.',
          'Manage container orchestration with Kubernetes.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Core Networking & Linux', description: 'TCP/IP, DNS, Subnets, Firewalls, and Linux administration.', keyMilestones: ['Setup secure VPS & SSH', 'Config Nginx reverse proxy'] },
          { stepNumber: 2, title: 'Cloud Platform Services', description: 'Compute, Storage, Serverless, IAM, and Databases on AWS/GCP.', keyMilestones: ['Deploy resilient multi-tier web app', 'IAM least-privilege policies'] },
          { stepNumber: 3, title: 'Containers & Orchestration', description: 'Docker containerization and Kubernetes cluster management.', keyMilestones: ['Write Dockerfiles & compose files', 'Deploy Helm charts on K8s'] },
        ],
        tags: ['Cloud', 'DevOps', 'AWS', 'Kubernetes'],
        isTrending: false,
        viewsCount: 980,
      },
      {
        title: 'UI/UX & Product Designer',
        domain: 'Creative & Design',
        description: 'Create intuitive, accessible, and delightful digital user experiences, design systems, and wireframes.',
        overview: 'Product designers combine user research, interaction design, and visual styling to solve complex user challenges.',
        requiredSkills: ['Figma', 'User Research', 'Design Systems', 'Wireframing', 'Prototyping', 'Accessibility (WCAG)', 'Interaction Design'],
        educationPath: {
          recommendedDegree: "Bachelor's in Interaction Design, Human-Computer Interaction, or Graphic Arts",
          alternativeCertifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Master'],
          timelineMonths: 18,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 65000,
          midLevel: 98000,
          seniorLevel: 145000,
        },
        jobDemand: 'High',
        growthRatePercent: 18,
        dailyResponsibilities: [
          'Conduct user interviews, usability tests, and journey mapping.',
          'Create high-fidelity interactive prototypes in Figma.',
          'Maintain modular design systems with tokenized typography and colors.',
          'Collaborate with developers to ensure pixel-perfect implementation.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Design Foundations', description: 'Color theory, typography, spacing, hierarchy, and Figma mastery.', keyMilestones: ['Build 5 mobile UI mockups', 'Create reusable Figma component sets'] },
          { stepNumber: 2, title: 'User Research & Wireframing', description: 'User personas, information architecture, and wireframes.', keyMilestones: ['Run usability tests with 5 real users', 'Create end-to-end user flows'] },
          { stepNumber: 3, title: 'Design Systems & Hand-off', description: 'Build enterprise design tokens and developer hand-off specs.', keyMilestones: ['Complete full design system kit', 'Publish portfolio with 3 case studies'] },
        ],
        tags: ['Design', 'UI/UX', 'Figma', 'Creativity'],
        isTrending: true,
        viewsCount: 1650,
      },
      {
        title: 'Biomedical Data Scientist',
        domain: 'Healthcare',
        description: 'Analyze clinical genomics, electronic health records, and biological datasets to advance medical diagnostics.',
        overview: 'Biomedical data scientists leverage statistical modeling and bioinformatics to discover biomarkers and clinical solutions.',
        requiredSkills: ['Python / R', 'Bioinformatics', 'Biostatistics', 'SQL', 'Genomics Data', 'Machine Learning', 'Clinical Trials'],
        educationPath: {
          recommendedDegree: "Bachelor's/Master's in Biomedical Informatics, Computational Biology, or Data Science",
          alternativeCertifications: ['HarvardX Data Analysis for Life Sciences', 'NIH Biomedical Data Science Certificate'],
          timelineMonths: 36,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 82000,
          midLevel: 122000,
          seniorLevel: 175000,
        },
        jobDemand: 'Very High',
        growthRatePercent: 30,
        dailyResponsibilities: [
          'Process and analyze large-scale genomic sequence datasets.',
          'Develop statistical models to identify disease correlations.',
          'Ensure HIPAA regulatory compliance and clinical data privacy.',
          'Publish reproducible scientific insights and visualizations.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Biology & Statistics Core', description: 'Molecular biology, genetics, biostatistics, and R programming.', keyMilestones: ['Analyze open public clinical trial data', 'Run survival analysis models'] },
          { stepNumber: 2, title: 'Bioinformatics Algorithms', description: 'Sequence alignment, variant calling, and Python computational biology.', keyMilestones: ['Work with FASTA/VCF file formats', 'Build automated pipeline for gene expression'] },
          { stepNumber: 3, title: 'Clinical ML & Translation', description: 'Predictive modeling on Electronic Health Records (EHR).', keyMilestones: ['Build patient risk classifier', 'Deploy clinical dashboard'] },
        ],
        tags: ['Healthcare', 'Genomics', 'Bioinformatics', 'Data Science'],
        isTrending: true,
        viewsCount: 1120,
      },
      {
        title: 'Quantitative Financial Analyst',
        domain: 'Business & Finance',
        description: 'Formulate mathematical models, algorithmic trading strategies, and risk matrices for financial institutions.',
        overview: 'Quant analysts utilize complex math, financial theory, and algorithmic code to optimize investments and assess volatility.',
        requiredSkills: ['Python / C++', 'Financial Modeling', 'Stochastic Calculus', 'Time Series Forecasting', 'Risk Analytics', 'SQL'],
        educationPath: {
          recommendedDegree: "Bachelor's/Master's in Quantitative Finance, Financial Engineering, or Mathematics",
          alternativeCertifications: ['Chartered Financial Analyst (CFA)', 'Certificate in Quantitative Finance (CQF)'],
          timelineMonths: 30,
        },
        expectedSalary: {
          currency: 'USD',
          entryLevel: 95000,
          midLevel: 155000,
          seniorLevel: 240000,
        },
        jobDemand: 'High',
        growthRatePercent: 19,
        dailyResponsibilities: [
          'Develop time-series forecasting models for market assets.',
          'Backtest trading algorithms against historical market tick data.',
          'Calculate Value-at-Risk (VaR) and stress test balance sheets.',
          'Optimize execution latency and algorithmic order routing.'
        ],
        roadmapSteps: [
          { stepNumber: 1, title: 'Financial Markets & Calculus', description: 'Asset pricing, derivative markets, probability theory, and Python.', keyMilestones: ['Build Black-Scholes option pricing model', 'Time-series analysis of S&P 500'] },
          { stepNumber: 2, title: 'Algorithmic Backtesting', description: 'Build trading strategy pipelines with Pandas, NumPy, and Backtrader.', keyMilestones: ['Backtest mean-reversion strategy', 'Calculate Sharpe and Sortino ratios'] },
          { stepNumber: 3, title: 'Risk Modeling & Portfolio Optimization', description: 'Monte Carlo simulations and Markowitz modern portfolio theory.', keyMilestones: ['Build multi-asset portfolio optimizer', 'Deploy automated risk dashboard'] },
        ],
        tags: ['Finance', 'Quantitative', 'Fintech', 'High Salary'],
        isTrending: false,
        viewsCount: 890,
      }
    ]);

    console.log('✅ Created 6 In-Depth Career Profiles');

    // 3. Create Quiz Questions
    await QuizQuestion.create([
      {
        questionText: 'When faced with a complex, unfamiliar problem, how do you prefer to tackle it?',
        questionType: 'multiple_choice',
        category: 'analytical',
        timeLimitSeconds: 45,
        options: [
          { label: 'Break it down into mathematical or logical step-by-step components.', value: 5, targetDomain: 'Technology' },
          { label: 'Brainstorm creative, unconventional out-of-the-box visual solutions.', value: 4, targetDomain: 'Creative & Design' },
          { label: 'Gather a team, delegate tasks, and strategize an execution roadmap.', value: 4, targetDomain: 'Business & Finance' },
          { label: 'Research biological, scientific, or empirical experimental data.', value: 5, targetDomain: 'Healthcare' },
        ],
        weightage: 1.2,
        order: 1,
      },
      {
        questionText: 'Rate your level of excitement for building software applications or automating workflows with code:',
        questionType: 'slider',
        category: 'technical',
        timeLimitSeconds: 30,
        sliderConfig: { min: 1, max: 10, step: 1, leftLabel: 'Prefer Non-Technical Roles', rightLabel: 'Passionate Coder / Architect' },
        weightage: 1.5,
        order: 2,
      },
      {
        questionText: 'I enjoy analyzing visual patterns, typography, and crafting seamless aesthetic user experiences.',
        questionType: 'likert',
        category: 'creative',
        timeLimitSeconds: 30,
        options: [
          { label: 'Strongly Disagree', value: 1 },
          { label: 'Disagree', value: 2 },
          { label: 'Neutral', value: 3 },
          { label: 'Agree', value: 4 },
          { label: 'Strongly Agree', value: 5 },
        ],
        weightage: 1.0,
        order: 3,
      },
      {
        questionText: 'Rate your interest in analyzing economic trends, stock market movements, and financial investment strategies:',
        questionType: 'slider',
        category: 'analytical',
        timeLimitSeconds: 30,
        sliderConfig: { min: 1, max: 10, step: 1, leftLabel: 'No Financial Interest', rightLabel: 'Love Market Analysis & Capital' },
        weightage: 1.1,
        order: 4,
      },
      {
        questionText: 'I feel deeply fulfilled when helping patients, conducting healthcare experiments, or diagnosing medical data.',
        questionType: 'likert',
        category: 'social',
        timeLimitSeconds: 30,
        options: [
          { label: 'Strongly Disagree', value: 1 },
          { label: 'Disagree', value: 2 },
          { label: 'Neutral', value: 3 },
          { label: 'Agree', value: 4 },
          { label: 'Strongly Agree', value: 5 },
        ],
        weightage: 1.3,
        order: 5,
      },
      {
        questionText: 'When leading a project, how comfortable are you taking responsibility for high-stakes strategic decisions?',
        questionType: 'likert',
        category: 'leadership',
        timeLimitSeconds: 30,
        options: [
          { label: 'Very Uncomfortable', value: 1 },
          { label: 'Somewhat Hesitant', value: 2 },
          { label: 'Neutral', value: 3 },
          { label: 'Confident', value: 4 },
          { label: 'Highly Energized by Leadership', value: 5 },
        ],
        weightage: 1.1,
        order: 6,
      },
      {
        questionText: 'I prefer hands-on tinkering with hardware, robotics, machinery, or physical infrastructure systems.',
        questionType: 'likert',
        category: 'practical',
        timeLimitSeconds: 30,
        options: [
          { label: 'Strongly Disagree', value: 1 },
          { label: 'Disagree', value: 2 },
          { label: 'Neutral', value: 3 },
          { label: 'Agree', value: 4 },
          { label: 'Strongly Agree', value: 5 },
        ],
        weightage: 1.0,
        order: 7,
      },
    ]);

    console.log('✅ Created 7 Interactive Quiz Questions');

    // 4. Create Multimedia Items
    await Multimedia.create([
      {
        title: 'A Day in the Life of a Senior AI & ML Engineer',
        type: 'video',
        url: 'https://www.youtube.com/embed/aircAruvnKk',
        thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        durationMinutes: 14,
        domain: 'Technology',
        speakerName: 'Dr. Elena Rostova',
        speakerRole: 'Principal AI Scientist at DeepMind Labs',
        transcript: 'Welcome to this masterclass overview. In modern AI engineering, over 60% of our pipeline is centered around high-quality dataset curation, distributed tensor evaluation, and ensuring low-latency inference on cloud GPU clusters. Here is how our daily engineering cycle works...',
        tags: ['AI', 'Machine Learning', 'Career Guide', 'Day in Life'],
        averageRating: 4.9,
        totalRatingsCount: 148,
        viewsCount: 2450,
      },
      {
        title: 'Mastering Modern UI/UX: From Wireframe to Design System',
        type: 'video',
        url: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
        thumbnailUrl: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80',
        durationMinutes: 20,
        domain: 'Creative & Design',
        speakerName: 'Jordan Taylor',
        speakerRole: 'Head of Product Design at Figma Studios',
        transcript: 'Today we will dismantle the exact steps to create an accessible, tokenized design system in Figma. We will cover typography scales, 8pt spatial grids, micro-interaction states, and how to present high-fidelity prototypes to stakeholders...',
        tags: ['Figma', 'UI/UX', 'Design Systems', 'Product Design'],
        averageRating: 4.8,
        totalRatingsCount: 92,
        viewsCount: 1820,
      },
      {
        title: 'Podcast: Breaking into High-Frequency Trading & Quant Finance',
        type: 'audio',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        durationMinutes: 32,
        domain: 'Business & Finance',
        speakerName: 'David Sterling',
        speakerRole: 'Quantitative Portfolio Manager',
        transcript: 'In this podcast episode, David discusses the mathematics of modern arbitrage, stochastic calculus requirements, and how software engineers with strong algorithmic problem solving can pivot into quantitative finance roles...',
        tags: ['Quant', 'Finance', 'Fintech', 'Podcast'],
        averageRating: 4.7,
        totalRatingsCount: 65,
        viewsCount: 930,
      },
    ]);

    console.log('✅ Created 3 Multimedia Masterclass Items');

    // 5. Create Success Stories
    await SuccessStory.create([
      {
        authorName: 'Aarav Mehta',
        authorRole: 'Senior Cloud Engineer at Microsoft',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        domain: 'Technology',
        currentCompany: 'Microsoft',
        timeline: {
          educationalBackground: 'Completed B.Tech in Electrical Engineering from a tier-3 college with no prior coding experience.',
          challengesFaced: 'Faced 40+ job application rejections in the first year and struggled with complex distributed systems concepts.',
          turningPoint: 'Dedicated 6 months to hands-on open source contributions and built an end-to-end cloud monitoring microservice.',
          currentOutcome: 'Promoted to Senior Cloud Engineer within 3 years, leading enterprise cloud migration projects across Azure.',
        },
        keyAdvice: 'Do not just watch tutorials. Build 2 deeply complex projects that solve real problems, deploy them live, and write public post-mortems about what broke.',
        status: 'approved',
        likesCount: 84,
      },
      {
        authorName: 'Sophia Lindqvist',
        authorRole: 'Lead UI/UX Designer at Spotify',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
        domain: 'Creative & Design',
        currentCompany: 'Spotify',
        timeline: {
          educationalBackground: 'Graduated with a Bachelor of Fine Arts in Traditional Painting and Printmaking.',
          challengesFaced: 'Felt intense imposter syndrome when transitioning into tech and struggled with developer handoffs.',
          turningPoint: 'Enrolled in a 6-month interactive UX apprenticeship and redesigned an indie music streaming application.',
          currentOutcome: 'Spearheading design systems and audio accessibility features for millions of daily active listeners worldwide.',
        },
        keyAdvice: 'Your non-traditional background is your biggest superpower. Empathy and visual storytelling are what elevate good software into unforgettable experiences.',
        status: 'approved',
        likesCount: 112,
      },
    ]);

    console.log('✅ Created 2 Inspirational Success Stories');

    // 6. Create Downloadable Resources
    await Resource.create([
      {
        title: 'Full-Stack Developer Career Roadmap & Interview Prep 2026',
        description: 'Comprehensive 40-page guide covering data structures, MERN architecture, system design questions, and salary negotiation tactics.',
        category: 'PDF Guide',
        targetAudience: 'All',
        fileUrl: '/uploads/sample_roadmap.pdf',
        fileSizeMb: 3.2,
        tags: ['Beginner', 'Skill-Building', 'Interview-Prep'],
        downloadCount: 540,
      },
      {
        title: 'Global STEM & Tech Scholarships Directory',
        description: 'Curated compilation of 100+ fully-funded undergraduate and postgraduate scholarships with application deadlines and eligibility criteria.',
        category: 'Scholarship',
        targetAudience: 'Student',
        fileUrl: '/uploads/scholarship_directory.pdf',
        fileSizeMb: 2.1,
        tags: ['Scholarship', 'Beginner'],
        downloadCount: 890,
      },
      {
        title: 'Technical Resume & Portfolio Checklist',
        description: 'Actionable 15-point checklist used by FAANG recruiters to evaluate tech resumes, GitHub profiles, and live project demos.',
        category: 'Checklist',
        targetAudience: 'Graduate',
        fileUrl: '/uploads/resume_checklist.pdf',
        fileSizeMb: 1.1,
        tags: ['Resume-Building', 'Interview-Prep'],
        downloadCount: 1240,
      },
    ]);

    console.log('✅ Created 3 Downloadable Resources');

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();
