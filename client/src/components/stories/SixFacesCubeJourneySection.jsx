import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faChevronLeft,
  faChevronRight,
  faCompass,
  faCode,
  faTriangleExclamation,
  faRocket,
  faAward,
  faGraduationCap,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

// 6 Faces Data Mapping directly to PathSeeker Candidate Milestones
const CUBE_FACES = [
  {
    id: 'f0',
    faceKey: 'top',
    tag: 'Milestone 01 • The Crossroads',
    title: ['BREAKING', 'NON-TECH', 'DEADLOCKS'],
    body: 'Stuck in a low-ceiling retail or non-tech role? Taking the 7-step Holland RIASEC cognitive assessment is the catalyst that pinpoints your hidden engineering aptitude.',
    stats: [
      { num: '7-Step', label: 'RIASEC Assessment' },
      { num: '100%', label: 'Persona Matched' },
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    icon: faCompass,
    stop: { rx: 90, ry: 0 },
  },
  {
    id: 'f1',
    faceKey: 'front',
    tag: 'Milestone 02 • The Pivot Engine',
    title: ['THE 90-DAY', 'SPRINT', 'CURRICULUM'],
    body: 'Structured daily masterclasses in Transformers, Cloud GitOps, and Design Tokens replace aimless tutorial hopping with deliberate hands-on engineering.',
    stats: [
      { num: '90-Day', label: 'Action Blueprint' },
      { num: '40+ Hrs', label: 'Live Masterclasses' },
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    icon: faCode,
    stop: { rx: 0, ry: 0 },
  },
  {
    id: 'f2',
    faceKey: 'right',
    tag: 'Milestone 03 • The Crucible',
    title: ['OVERCOMING', 'BUGS &', 'IMPOSTER SYNDROME'],
    body: 'Debugging distributed systems and surviving initial interview rejections build true technical grit. Every failed test run sharpens your architecture instincts.',
    stats: [
      { num: '14+', label: 'Mock Tech Drills' },
      { num: '0 to 1', label: 'Grit Breakthrough' },
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    icon: faTriangleExclamation,
    stop: { rx: 0, ry: -90 },
  },
  {
    id: 'f3',
    faceKey: 'back',
    tag: 'Milestone 04 • Proof of Work',
    title: ['BUILDING', 'PRODUCTION', 'CAPSTONE PROOF'],
    body: 'No toy projects. Candidates build enterprise-grade full-stack architectures, deploy on multi-node Kubernetes, and publish verified GitHub repositories.',
    stats: [
      { num: '3', label: 'Production Capstones' },
      { num: '1.2k', label: 'GitHub Stars' },
    ],
    image: 'https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=800&q=80',
    icon: faRocket,
    stop: { rx: 0, ry: -180 },
  },
  {
    id: 'f4',
    faceKey: 'left',
    tag: 'Milestone 05 • The Breakthrough',
    title: ['SECURING', 'THE VERIFIED', 'JOB OFFER'],
    body: 'Negotiating multiple competing offers from Figma, AWS, and DeepMind. Transforming average compensation from $38k to $165k+ with verified credentials.',
    stats: [
      { num: '+334%', label: 'Avg Salary Jump' },
      { num: '$165k', label: 'Verified Base' },
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    icon: faAward,
    stop: { rx: 0, ry: -270 },
  },
  {
    id: 'f5',
    faceKey: 'bottom',
    tag: 'Milestone 06 • Giving Back',
    title: ['MENTORING', 'TOMORROW’S', 'CANDIDATES'],
    body: 'Alumni return to the PathSeeker ecosystem as keynote faculty, hosting video masterclasses, reviewing junior portfolios, and paying it forward.',
    stats: [
      { num: '1,420+', label: 'Alumni Network' },
      { num: 'Global', label: 'Tech Community' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    icon: faGraduationCap,
    stop: { rx: -90, ry: -360 },
  },
];

export default function SixFacesCubeJourneySection() {
  const [activeFaceIndex, setActiveFaceIndex] = useState(1);
  const cubeRef = useRef(null);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const rotX = useRef(0);
  const rotY = useRef(0);

  // Smooth rotation update on step change
  useEffect(() => {
    const targetStop = CUBE_FACES[activeFaceIndex].stop;
    rotX.current = targetStop.rx;
    rotY.current = targetStop.ry;

    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${targetStop.rx}deg) rotateY(${targetStop.ry}deg)`;
    }
  }, [activeFaceIndex]);

  // Drag interaction physics
  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastMouseX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    lastMouseY.current = e.clientY || (e.touches && e.touches[0].clientY) || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    const deltaX = clientX - lastMouseX.current;
    const deltaY = clientY - lastMouseY.current;

    rotY.current += deltaX * 0.5;
    rotX.current -= deltaY * 0.5;

    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
    }

    lastMouseX.current = clientX;
    lastMouseY.current = clientY;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const currentFace = CUBE_FACES[activeFaceIndex];

  return (
    <div className="w-full rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 lg:p-12 space-y-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faCube} />
            <span>Interactive 3D Six-Stage Transformation Journey</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
            The Blueprint of Every Successful Career Pivot
          </h2>
        </div>

        {/* Milestone Steps Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CUBE_FACES.map((face, idx) => {
            const isActive = idx === activeFaceIndex;
            return (
              <button
                key={face.id}
                type="button"
                onClick={() => setActiveFaceIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/10'
                }`}
              >
                Face 0{idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 3D Cube & Side Text Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[460px]">
        
        {/* Left Interactive 3D Cube Stage (7 Columns) */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="lg:col-span-7 flex items-center justify-center p-8 cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: '1100px' }}
        >
          <div
            ref={cubeRef}
            className="cube-3d-wrapper"
            style={{
              width: 'min(58vw, 320px)',
              height: 'min(58vw, 320px)',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: isDragging.current ? 'none' : 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {/* Top Face */}
            <div className="cube-face cube-face--top">
              <img src={CUBE_FACES[0].image} alt="Top Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">01 • CROSSROADS</span>
            </div>

            {/* Front Face */}
            <div className="cube-face cube-face--front">
              <img src={CUBE_FACES[1].image} alt="Front Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">02 • PIVOT ENGINE</span>
            </div>

            {/* Right Face */}
            <div className="cube-face cube-face--right">
              <img src={CUBE_FACES[2].image} alt="Right Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">03 • CRUCIBLE</span>
            </div>

            {/* Back Face */}
            <div className="cube-face cube-face--back">
              <img src={CUBE_FACES[3].image} alt="Back Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">04 • PROOF OF WORK</span>
            </div>

            {/* Left Face */}
            <div className="cube-face cube-face--left">
              <img src={CUBE_FACES[4].image} alt="Left Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">05 • OFFER BREAKTHROUGH</span>
            </div>

            {/* Bottom Face */}
            <div className="cube-face cube-face--bottom">
              <img src={CUBE_FACES[5].image} alt="Bottom Face" className="w-full h-full object-cover" />
              <div className="cube-face-overlay" />
              <span className="cube-face-tag">06 • GIVING BACK</span>
            </div>
          </div>
        </div>

        {/* Right Storytelling Card (5 Columns) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel-ultra border border-white/20 space-y-6 shadow-2xl relative">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#E8602E] uppercase tracking-wider">
              {currentFace.tag}
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xs">
              <FontAwesomeIcon icon={currentFace.icon} />
            </div>
          </div>

          <div className="space-y-1">
            {currentFace.title.map((line, i) => (
              <h3 key={i} className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-none tracking-tight">
                {line}
              </h3>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
            {currentFace.body}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {currentFace.stats.map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-xl sm:text-2xl font-extrabold text-[#E8602E] font-mono block">
                  {stat.num}
                </span>
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Step Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setActiveFaceIndex((prev) => (prev === 0 ? CUBE_FACES.length - 1 : prev - 1))}
              className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer border border-white/10"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Prev Milestone</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFaceIndex((prev) => (prev + 1) % CUBE_FACES.length)}
              className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Milestone</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
