import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faPlay,
  faClock,
  faEye,
  faStar,
  faShareNodes,
  faBookmark as faBookmarkSolid,
  faGraduationCap,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import InteractiveTranscript from '../components/multimedia/InteractiveTranscript';
import MasterclassTakeaways from '../components/multimedia/MasterclassTakeaways';
import SpeakerDossier from '../components/multimedia/SpeakerDossier';
import CommunityDiscussion from '../components/multimedia/CommunityDiscussion';
import MediaCard from '../components/multimedia/MediaCard';
import { MULTIMEDIA_DATABASE } from '../data/multimediaData';
import { CAREERS_DATABASE } from '../data/careersData';

export default function MediaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSeconds, setActiveSeconds] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Find Masterclass
  const media = MULTIMEDIA_DATABASE.find(
    (item) => item.id === id || item.numericId === id
  );

  // Linked Career Bank Profile
  const linkedCareer = CAREERS_DATABASE.find(
    (c) => c.id === media?.careerId
  );

  // Related adjacent sessions
  const relatedMedia = MULTIMEDIA_DATABASE.filter(
    (item) => item.id !== media?.id
  ).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!media) {
    return (
      <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between">
        <NotchNavbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Masterclass Not Found</h2>
          <p className="text-sm text-[#A1A1AA]">
            The requested session could not be located in the Career Passport archive.
          </p>
          <Link
            to="/multimedia"
            className="px-6 py-2.5 rounded-xl bg-[#E8602E] text-white text-xs font-bold"
          >
            Return to Multimedia Hub
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Masterclass link copied to clipboard!');
  };

  const handleSeekTo = (seconds) => {
    setActiveSeconds(seconds);
    toast.success(`Jumped to timestamp ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30 relative">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-32 left-1/3 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-3/4 right-10 opacity-30 pointer-events-none" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/multimedia')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to Multimedia Hub</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsBookmarked(!isBookmarked);
                toast.success(isBookmarked ? 'Removed from saved' : 'Saved to Career Passport bookmarks!');
              }}
              className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-bold border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon
                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                className={isBookmarked ? 'text-[#E8602E]' : ''}
              />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-bold border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faShareNodes} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            SECTION 1: RESPONSIVE VIDEO/AUDIO THEATER & AMBIENT GLOW
            ======================================================== */}
        <section className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/15 shadow-2xl p-2 sm:p-4 bg-black/60">
            {/* Ambient Screen Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E8602E]/25 via-[#BC4C22]/15 to-[#FFB800]/20 blur-3xl -z-10" />

            {/* Video Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0A0A0F] border border-white/10">
              <iframe
                src={`${media.videoUrl}?autoplay=0&rel=0`}
                title={media.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Video Metadata Header */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 flex-wrap text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 font-bold uppercase">
                {media.domain}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                {media.type}
              </span>
              <span className="text-[#A1A1AA] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
                {media.duration}
              </span>
              <span className="text-[#A1A1AA] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faEye} />
                {media.views} views
              </span>
              <span className="text-[#FFB800] font-bold">
                ★ {media.rating} Rating
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight">
              {media.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-4xl">
              {media.summary}
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: SYNCHRONIZED INTERACTIVE TRANSCRIPT
            ======================================================== */}
        <section>
          <InteractiveTranscript
            transcript={media.transcript}
            activeSeconds={activeSeconds}
            onSeekTo={handleSeekTo}
          />
        </section>

        {/* ========================================================
            SECTION 3 & 5: KEY TAKEAWAYS & DOWNLOADABLE HANDOUTS
            ======================================================== */}
        <section>
          <MasterclassTakeaways
            takeaways={media.takeaways}
            handouts={media.handouts}
          />
        </section>

        {/* ========================================================
            SECTION 4: SPEAKER & MENTOR DOSSIER
            ======================================================== */}
        <section>
          <SpeakerDossier speaker={media.speaker} />
        </section>

        {/* ========================================================
            SECTION 6: COMMUNITY DISCUSSION & TIMESTAMPED Q&A
            ======================================================== */}
        <section>
          <CommunityDiscussion initialFaqs={media.faqs} />
        </section>

        {/* ========================================================
            SECTION 7: RELATED MASTERCLASSES & LINKED CAREER PATHWAY
            ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Related Career Pathway & Recommended Masterclasses
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Continue learning through adjacent technical sessions and pathway roadmaps.
              </p>
            </div>

            {linkedCareer && (
              <Link
                to={`/careers/${linkedCareer.id}`}
                className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-[#E8602E] text-white text-xs font-bold transition-all border border-white/15 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>View {linkedCareer.title} Pathway</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedMedia.map((rel) => (
              <MediaCard key={rel.id} media={rel} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
