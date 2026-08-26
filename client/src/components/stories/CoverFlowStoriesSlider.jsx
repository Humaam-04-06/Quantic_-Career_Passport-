import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faArrowTrendUp,
  faBuilding,
  faQuoteLeft,
  faAward,
  faCheckCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { STORIES_DATABASE } from '../../data/storiesData';

export default function CoverFlowStoriesSlider({ onSelectStory }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const slides = STORIES_DATABASE;

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(slides.length - 1, prev + 1));
  };

  // Keyboard navigation & Wheel scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Touch & Mouse Drag
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = currentX - startX.current;
    if (diff < -50) {
      handleNext();
      isDragging.current = false;
    } else if (diff > 50) {
      handlePrev();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // GSAP 3D Cover Flow Physics Animation
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const diff = i - activeIndex;
      const absDiff = Math.abs(diff);

      let translateX = diff * 170;
      if (diff > 0) translateX += 90;
      if (diff < 0) translateX -= 90;

      const rotateY = diff === 0 ? 0 : diff > 0 ? -52 : 52;
      const zIndex = 100 - absDiff * 10;
      const opacity = absDiff > 3 ? 0 : 1 - absDiff * 0.18;
      const scale = diff === 0 ? 1.05 : Math.max(0.72, 1 - absDiff * 0.12);

      gsap.to(card, {
        x: translateX,
        rotateY: rotateY,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  }, [activeIndex]);

  const activeStory = slides[activeIndex] || slides[0];

  return (
    <div className="w-full rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
      {/* Header & Category Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faAward} />
            <span>3D Cover Flow Transformation Gallery</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
            Real Candidates, Verified Career Pivots
          </h2>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-2xl bg-white/[0.06] hover:bg-[#E8602E] disabled:opacity-30 disabled:hover:bg-white/[0.06] text-white flex items-center justify-center transition-all border border-white/10 shadow-glass cursor-pointer"
            title="Previous Story"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
          </button>

          <span className="font-mono text-xs text-[#A1A1AA]">
            {activeIndex + 1} / {slides.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === slides.length - 1}
            className="w-10 h-10 rounded-2xl bg-white/[0.06] hover:bg-[#E8602E] disabled:opacity-30 disabled:hover:bg-white/[0.06] text-white flex items-center justify-center transition-all border border-white/10 shadow-glass cursor-pointer"
            title="Next Story"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </button>
        </div>
      </div>

      {/* 3D Cover Flow Carousel Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="relative h-[340px] sm:h-[390px] w-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1200px' }}
      >
        <div className="relative w-64 sm:w-72 h-[300px] sm:h-[340px] flex items-center justify-center">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={slide.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onClick={() => setActiveIndex(idx)}
                className={`absolute inset-0 rounded-3xl overflow-hidden glass-panel-ultra border-2 transition-colors cursor-pointer shadow-2xl ${
                  isActive
                    ? 'border-[#E8602E] shadow-glow-orange'
                    : 'border-white/15 hover:border-white/40'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Fitted Background Image */}
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-90 contrast-115"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#E8602E]">
                    {slide.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-[10px] font-bold font-mono">
                    {slide.salaryIncrease}
                  </span>
                </div>

                {/* Bottom Card Title & Candidate Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1 z-10">
                  <div className="flex items-center gap-2">
                    <img
                      src={slide.avatar}
                      alt={slide.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#E8602E]"
                    />
                    <span className="text-xs font-bold text-white truncate">
                      {slide.name}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">
                    {slide.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Story Highlight Details Card */}
      <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-white">{activeStory.name}</span>
            <span className="text-xs text-[#A1A1AA]">
              Transitioned from <strong className="text-white">{activeStory.previousRole}</strong> ➔ <strong className="text-[#E8602E]">{activeStory.currentRole} at {activeStory.currentCompany}</strong>
            </span>
          </div>

          <div className="flex items-start gap-2 text-xs sm:text-sm text-[#D4D4D8] italic">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-[#E8602E] text-xs flex-none mt-1" />
            <span>&quot;{activeStory.quote}&quot;</span>
          </div>
        </div>

        {/* Action Button to Open Full Blueprint Modal */}
        <button
          type="button"
          onClick={() => onSelectStory && onSelectStory(activeStory)}
          className="flex-none px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer self-stretch md:self-auto justify-center"
        >
          <span>View 3-Stage Blueprint</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </button>
      </div>
    </div>
  );
}
