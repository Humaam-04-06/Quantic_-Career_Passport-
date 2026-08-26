import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faBrain,
  faWandMagicSparkles,
  faArrowRight,
  faCircleCheck,
  faChartLine,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import HeroFluidText from './HeroFluidText.jsx';

gsap.registerPlugin(ScrollTrigger);

const careerImages = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', // AI
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', // Cloud
  'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=600&q=80', // Design
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80', // Biomedical
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80', // Finance
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80', // Cyber
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80', // Robotics
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80', // Leadership
];

const galleryItems = [...careerImages, ...careerImages, ...careerImages].slice(0, 24);

const textContent = [
  {
    tag: 'INTELLIGENT MATCHING',
    title: 'AI-Driven Career Discovery',
    desc: 'Discover tailored career tracks that align with your distinct skills, educational stage, and passions with real-time global industry demand.',
    stats: '150+ Career Tracks Mapped',
  },
  {
    tag: 'INTERACTIVE ASSESSMENT',
    title: 'Scientifically Calibrated Quiz',
    desc: 'Engage in multi-step timed assessments with Likert rating scales and passion sliders to unlock your cognitive profile and top strengths.',
    stats: '98.4% Recommendation Accuracy',
  },
  {
    tag: 'STEP-BY-STEP BLUEPRINTS',
    title: 'Verified Career Roadmaps',
    desc: 'Follow structured step-by-step milestones, required skills, expected salary benchmarks, and alternative degree & certification paths.',
    stats: 'Up to $240k+ Salary Insights',
  },
  {
    tag: 'EXPEDITION & GROWTH',
    title: 'Multimedia & Career Passport',
    desc: 'Access expert video masterclasses, audio podcasts, downloadable guides, and export your personal career passport summary directly to PDF.',
    stats: 'Interactive Learning & PDF Export',
  },
];

const scatterPositions = [
  { top: '12%', left: '10%' },
  { top: '18%', left: '78%' },
  { top: '58%', left: '8%' },
  { top: '72%', left: '82%' },
  { top: '82%', left: '26%' },
  { top: '22%', left: '46%' },
];

export default function GlobeHero() {
  const [dynamicText, setDynamicText] = useState(textContent[0]);
  const [focusIdx, setFocusIdx] = useState(0);

  const galleryContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const sphereRef = useRef(null);
  const journeySectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tagRef = useRef(null);
  const statsRef = useRef(null);
  const activeTextIdxRef = useRef(0);

  const getResponsiveRadius = () => {
    if (typeof window === 'undefined') return 380;
    if (window.innerWidth < 640) return 160;
    if (window.innerWidth < 1024) return 260;
    return 380;
  };

  const [radius, setRadius] = useState(getResponsiveRadius);

  useEffect(() => {
    const handleResize = () => {
      setRadius(getResponsiveRadius());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sphereCards = useMemo(() => {
    return galleryItems.map((src, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / galleryItems.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const rotY = Math.atan2(x, z) * (180 / Math.PI);
      const rotX = Math.asin(-y / radius) * (180 / Math.PI);

      return {
        src,
        transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`,
      };
    });
  }, [radius]);

  const scatterCards = useMemo(() => {
    return scatterPositions.map((pos, i) => {
      const rot = Math.sin(i * 99) * 0.5 * 40;
      return {
        src: careerImages[i % careerImages.length],
        top: pos.top,
        left: pos.left,
        transform: `rotate(${rot.toFixed(2)}deg) scale(0.85)`,
      };
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sphereRef.current && galleryContainerRef.current) {
        gsap.to(sphereRef.current, {
          rotateY: 360 * 2,
          rotateX: 45,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryContainerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            pin: sceneRef.current || true,
            pinSpacing: false,
            onUpdate: (self) => {
              const progress = self.progress;
              const textIndex = Math.floor(progress * textContent.length) % textContent.length;

              if (activeTextIdxRef.current !== textIndex) {
                activeTextIdxRef.current = textIndex;
                gsap.to([titleRef.current, descRef.current, tagRef.current, statsRef.current], {
                  opacity: 0,
                  y: -10,
                  duration: 0.2,
                  onComplete: () => {
                    setDynamicText(textContent[textIndex]);
                    gsap.to([titleRef.current, descRef.current, tagRef.current, statsRef.current], {
                      opacity: 1,
                      y: 0,
                      duration: 0.25,
                    });
                  },
                });
              }

              const currentFocus = Math.floor(progress * galleryItems.length);
              setFocusIdx(currentFocus);
            },
          },
        });
      }

      if (journeySectionRef.current) {
        gsap.to('.constellation-card', {
          y: -120,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: {
            trigger: journeySectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#000000] text-white selection:bg-[#E8602E] selection:text-white">
      {/* Background Clinical SaaS Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top Ambient Glow Orb */}
      <div className="ambient-orange-spotlight top-[-150px] left-1/2 -translate-x-1/2 opacity-70" />

      {/* 1. HERO HEADER INTRO */}
      <section className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 text-center flex flex-col items-center max-w-5xl mx-auto">
        {/* Chunky Clay Pill Badge 
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#121215] border border-[#232328] shadow-[0_4px_16px_rgba(0,0,0,0.8),inset_1px_1px_2px_rgba(255,255,255,0.08)] text-[11px] sm:text-xs font-semibold text-[#D4D4D8] mb-6">
          <FontAwesomeIcon icon={faRocket} className="text-[#E8602E] text-xs" />
          <span className="text-[#E8602E] font-bold">TechWiz 6</span>
          <span className="text-[#D4D4D8]">Next-Gen Career Passport Platform</span>
        </div>
        */}

        {/* Animated Fluid Water Inside Text */}
        <div className="w-full max-w-4xl mb-4">
          <HeroFluidText line1="Discover What" line2="Fits You Best" />
        </div>

        {/* Subtitle */}
        <p className="text-[#A1A1AA] text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Personalized guidance for <strong className="text-white">Students</strong>, <strong className="text-white">Graduates</strong>, and <strong className="text-white">Working Professionals</strong>. Powered by AI interest matching and global career analytics.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/quiz"
            className="btn-primary-orange text-sm sm:text-base px-8 py-3.5 flex items-center gap-2.5 font-bold"
          >
            <FontAwesomeIcon icon={faBrain} className="text-white text-base" />
            <span>Take Career Quiz</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
          </Link>

          <Link
            to="/careers"
            className="btn-secondary-dark text-sm sm:text-base px-8 py-3.5 flex items-center gap-2.5 font-semibold"
          >
            <FontAwesomeIcon icon={faCompass} className="text-[#E8602E] text-base" />
            <span>Explore Career Bank</span>
          </Link>
        </div>

        {/* Key USPs */}
        <div className="mt-12 pt-8 border-t border-[#232328]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#E8602E]" />
            <span>Role-Based Segmentation</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChartLine} className="text-[#E8602E]" />
            <span>Salary & Growth Benchmarks</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[#E8602E]" />
            <span>Export Passport to PDF</span>
          </div>
        </div>
      </section>

      {/* 2. 3D ROTATING GLOBE SCENE SECTION */}
      <section className="relative h-[320vh] w-full" ref={galleryContainerRef}>
        {/* Sticky 3D Viewport Scene */}
        <div
          ref={sceneRef}
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1200px]"
        >
          
          {/* Dynamic Floating Story Text (Responsive: bottom on mobile, left on desktop) */}
          <div className="absolute bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 left-4 right-4 sm:right-auto sm:left-10 lg:left-16 z-20 max-w-sm sm:max-w-md pointer-events-none p-5 sm:p-7 lg:p-8 rounded-3xl bg-[#0A0A0C]/90 backdrop-blur-2xl border border-[#232328] shadow-[0_20px_50px_rgba(0,0,0,0.9)] mx-auto sm:mx-0">
            <span
              ref={tagRef}
              className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-[#E8602E] block mb-1.5"
            >
              {dynamicText.tag}
            </span>
            <h2
              ref={titleRef}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white mb-2 sm:mb-3 tracking-tight"
            >
              {dynamicText.title}
            </h2>
            <p
              ref={descRef}
              className="text-[#D4D4D8] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4"
            >
              {dynamicText.desc}
            </p>
            <div
              ref={statsRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] text-[11px] sm:text-xs font-bold"
            >
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[10px]" />
              <span>{dynamicText.stats}</span>
            </div>
          </div>

          {/* 3D Sphere of Career Cards */}
          <div className="relative w-0 h-0 [transform-style:preserve-3d]" ref={sphereRef}>
            {sphereCards.map((card, i) => {
              const isActive = Math.abs(i - focusIdx) < 2;
              return (
                <div
                  key={i}
                  className={`absolute w-[140px] sm:w-[170px] h-[190px] sm:h-[230px] -left-[70px] sm:-left-[85px] -top-[95px] sm:-top-[115px] bg-[#121215] rounded-2xl p-2 [transform-style:preserve-3d] [backface-visibility:visible] border border-[#232328] shadow-[0_12px_30px_rgba(0,0,0,0.9),inset_2px_2px_4px_rgba(255,255,255,0.06)] transition-all duration-300 ${
                    isActive
                      ? 'border-[#E8602E] shadow-[0_0_30px_rgba(232,96,46,0.6)] scale-105'
                      : 'hover:border-[#E8602E]/60'
                  }`}
                  style={{ transform: card.transform }}
                >
                  <img
                    src={card.src}
                    alt="Career Role"
                    className={`w-full h-full object-cover rounded-xl transition-all duration-400 ${
                      isActive ? 'grayscale-0 brightness-100' : 'grayscale-[60%] brightness-[0.55]'
                    }`}
                  />
                  {isActive && (
                    <div className="absolute inset-x-3 bottom-3 p-1.5 rounded-lg bg-[#000000]/80 backdrop-blur-md text-[10px] font-bold text-center text-[#E8602E] border border-[#E8602E]/40">
                      Trending Track
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Futuristic Network Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="rgba(232, 96, 46, 0.15)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M15,0 L85,100"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.2"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* 3. SCATTER CONSTELLATION & CALL TO ACTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-[#000000] via-[#0A0A0E] to-[#000000]"
        ref={journeySectionRef}
      >
        {/* Ambient Orange Center Spotlight */}
        <div className="ambient-orange-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

        {/* Scattered Constellation Background Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {scatterCards.map((card, i) => (
            <div
              key={i}
              className="constellation-card absolute w-[90px] sm:w-[120px] h-[130px] sm:h-[170px] bg-[#121215] rounded-xl p-1.5 border border-[#232328] shadow-2xl opacity-40"
              style={{
                top: card.top,
                left: card.left,
                transform: card.transform,
              }}
            >
              <img
                src={card.src}
                alt="Constellation Track"
                className="w-full h-full object-cover rounded-lg grayscale brightness-50"
              />
            </div>
          ))}
        </div>

        {/* Central Journey Card */}
        <div className="relative z-10 text-center max-w-2xl mx-auto p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0A0A0C]/90 backdrop-blur-2xl border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] text-xs font-bold mb-4">
            <FontAwesomeIcon icon={faRocket} className="text-xs" />
            <span>Career Passport Ignition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mb-4 tracking-tight">
            Start Your Journey Today
          </h2>
          <p className="text-[#D4D4D8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Join thousands of students, graduates, and professionals finding clarity, verified learning milestones, and high-impact careers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="btn-primary-orange text-sm sm:text-base px-8 py-3.5 font-bold flex items-center gap-2"
            >
              <span>Create Free Passport</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
            <Link
              to="/careers"
              className="btn-secondary-dark text-sm sm:text-base px-7 py-3.5 font-semibold"
            >
              Browse Roles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
