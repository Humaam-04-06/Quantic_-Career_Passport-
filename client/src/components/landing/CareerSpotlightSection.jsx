import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faArrowRight,
  faFire,
  faDollarSign,
  faChartLine,
  faTag,
  faLayerGroup,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const DOMAINS = ['All', 'Technology', 'Healthcare', 'Engineering', 'Business & Finance', 'Creative & Design'];

const SPOTLIGHT_CAREERS = [
  {
    id: '1',
    title: 'AI & Machine Learning Engineer',
    domain: 'Technology',
    description: 'Design and deploy deep learning architectures, LLM fine-tuning pipelines, and neural networks powering real-time inference.',
    entrySalary: '$92,000',
    seniorSalary: '$210,000',
    growthRate: '+38% Growth',
    demand: 'Very High',
    skills: ['Python', 'PyTorch', 'Transformers', 'MLOps', 'Vector DBs'],
    isTrending: true,
  },
  {
    id: '2',
    title: 'Full-Stack Cloud Architect',
    domain: 'Technology',
    description: 'Architect distributed multi-tier microservices, modern React/Node interfaces, and resilient cloud infrastructures.',
    entrySalary: '$88,000',
    seniorSalary: '$190,000',
    growthRate: '+25% Growth',
    demand: 'High',
    skills: ['React.js', 'Node.js', 'AWS/GCP', 'Kubernetes', 'Docker'],
    isTrending: true,
  },
  {
    id: '3',
    title: 'Biomedical Data Scientist',
    domain: 'Healthcare',
    description: 'Analyze clinical genomics, digital health records, and biological datasets to engineer diagnostic biomarker algorithms.',
    entrySalary: '$82,000',
    seniorSalary: '$175,000',
    growthRate: '+30% Growth',
    demand: 'Very High',
    skills: ['Genomics', 'Python/R', 'Biostatistics', 'Clinical Trials'],
    isTrending: false,
  },
  {
    id: '4',
    title: 'Quantitative Portfolio Analyst',
    domain: 'Business & Finance',
    description: 'Formulate algorithmic trading strategies, stochastic risk matrices, and automated execution systems for asset management.',
    entrySalary: '$95,000',
    seniorSalary: '$240,000',
    growthRate: '+19% Growth',
    demand: 'High',
    skills: ['Stochastic Math', 'Python/C++', 'Time Series', 'Risk Analytics'],
    isTrending: false,
  },
  {
    id: '5',
    title: 'Principal UI/UX & Product Designer',
    domain: 'Creative & Design',
    description: 'Design tokenized multi-platform design systems, high-fidelity prototypes, and user journey architectures.',
    entrySalary: '$65,000',
    seniorSalary: '$145,000',
    growthRate: '+18% Growth',
    demand: 'High',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'WCAG Accessibility'],
    isTrending: true,
  },
  {
    id: '6',
    title: 'Robotics & Autonomous Systems Lead',
    domain: 'Engineering',
    description: 'Program embedded microcontrollers, sensor fusion algorithms, and kinematic actuators for industrial autonomous robotics.',
    entrySalary: '$85,000',
    seniorSalary: '$180,000',
    growthRate: '+22% Growth',
    demand: 'High',
    skills: ['ROS 2', 'C++', 'Control Systems', 'Computer Vision'],
    isTrending: false,
  },
];

export default function CareerSpotlightSection() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCareers = SPOTLIGHT_CAREERS.filter((career) => {
    const matchesDomain = selectedDomain === 'All' || career.domain === selectedDomain;
    const matchesSearch =
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="ambient-orange-spotlight top-1/3 left-10 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-10 right-10 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4">
              <FontAwesomeIcon icon={faCompass} className="text-xs" />
              <span>Career Bank Exploration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Explore High-Demand <span className="gradient-text-fire">Global Roles</span>
            </h2>
            <p className="text-[#A1A1AA] text-base mt-2 max-w-xl">
              Access real-world salary ranges, daily responsibilities, required skillsets, and step-by-step verified learning roadmaps.
            </p>
          </div>

          <Link
            to="/careers"
            className="btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2"
          >
            <span>View All 150+ Careers</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#E8602E]" />
          </Link>
        </div>

        {/* Filter Bar & Search in Frosted Glass Panel */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-3.5 rounded-3xl glass-panel-ultra mb-12">
          {/* Domain Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {DOMAINS.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDomain === domain
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full lg:w-72">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
            />
            <input
              type="text"
              placeholder="Search roles or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-input text-white placeholder-[#71717A] text-xs pl-9 pr-4 py-2.5 rounded-2xl focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Career Spotlight Cards Grid with Ultra-Glass Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="group relative p-7 rounded-[2rem] glass-card-interactive flex flex-col justify-between"
            >
              <div>
                {/* Header Meta: Domain & Trending Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                    {career.domain}
                  </span>
                  {career.isTrending && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8602E]/20 border border-[#E8602E]/40 text-[#E8602E] text-[10px] font-bold backdrop-blur-md">
                      <FontAwesomeIcon icon={faFire} className="text-[9px]" />
                      <span>Trending</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold font-display text-white mb-2.5 group-hover:text-[#FFE8DE] transition-colors">
                  {career.title}
                </h3>

                {/* Description */}
                <p className="text-[#D4D4D8] text-xs leading-relaxed line-clamp-3 mb-5">
                  {career.description}
                </p>

                {/* Required Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {career.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-[10px] font-medium bg-white/[0.05] text-[#D4D4D8] border border-white/10 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Salary & Demand Metric Box */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                      Salary Range
                    </span>
                    <span className="text-xs font-bold text-white">
                      {career.entrySalary} - {career.seniorSalary}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                      Growth Rate
                    </span>
                    <span className="text-xs font-bold text-[#E8602E]">
                      {career.growthRate}
                    </span>
                  </div>
                </div>

                {/* Action Link */}
                <Link
                  to={`/careers/${career.id}`}
                  className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-[#D4D4D8] hover:text-white text-xs font-bold border border-white/15 hover:border-[#E8602E] transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Explore Verified Roadmap</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[10px] transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
