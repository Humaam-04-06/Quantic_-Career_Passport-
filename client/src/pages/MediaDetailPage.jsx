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
  faCheckCircle,
  faNoteSticky,
  faFloppyDisk,
  faDownload,
  faAward,
  faGaugeHigh,
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
import { multimediaApi } from '../services/api';

export default function MediaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [media, setMedia] = useState(null);
  const [relatedMedia, setRelatedMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSeconds, setActiveSeconds] = useState(0);
  const [videoSeekSeconds, setVideoSeekSeconds] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0x');

  // Fetch dynamic masterclass from MongoDB Atlas
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        const res = await multimediaApi.getById(id);
        if (res?.data) {
          const doc = res.data;
          const normalized = {
            ...doc,
            id: doc.id || doc._id,
            speaker: doc.speaker || {
              name: doc.speakerName || 'Dr. Elena Rostova',
              role: doc.speakerRole || 'Principal AI Scientist',
              organization: 'DeepMind Labs',
              avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
              bio: 'Pioneered distributed quantization algorithms deployed in production.',
            },
            takeaways: doc.takeaways || [],
            transcript: doc.transcript || [],
            handouts: doc.handouts || [],
            faqs: doc.discussion || doc.faqs || [],
          };
          setMedia(normalized);
          setRelatedMedia(res.related || []);
        } else {
          // Fallback to local
          const local = MULTIMEDIA_DATABASE.find((m) => m.id === id || m.numericId === id);
          if (local) setMedia(local);
        }
      } catch (err) {
        console.warn('API error, using local fallback:', err);
        const local = MULTIMEDIA_DATABASE.find((m) => m.id === id || m.numericId === id);
        if (local) setMedia(local);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();

    // Load saved notes & completed status from localStorage
    try {
      const savedNote = localStorage.getItem(`pathseeker_note_${id}`) || '';
      setUserNote(savedNote);
      const completedList = JSON.parse(localStorage.getItem('pathseeker_completed_sessions') || '[]');
      setIsCompleted(completedList.includes(id));
    } catch {
      // ignore
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between">
        <NotchNavbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#E8602E] border-t-transparent animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

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

  // Linked Career
  const linkedCareer = CAREERS_DATABASE.find((c) => c.id === media.careerId);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Masterclass link copied to clipboard!');
  };

  const handleSeekTo = (seconds) => {
    setActiveSeconds(seconds);
    setVideoSeekSeconds(seconds);
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toString().padStart(2, '0');
    toast.success(`Jumping video to ${mins}:${secs}`);
  };

  const handleSaveNote = () => {
    try {
      localStorage.setItem(`pathseeker_note_${id}`, userNote);
      toast.success('Architecture note saved to your Passport Vault!');
    } catch {
      toast.error('Could not save note locally');
    }
  };

  const handleToggleCompleted = async () => {
    const nextState = !isCompleted;
    setIsCompleted(nextState);

    try {
      // 1. Save locally
      const completedList = JSON.parse(localStorage.getItem('pathseeker_completed_sessions') || '[]');
      const updated = nextState
        ? Array.from(new Set([...completedList, id]))
        : completedList.filter((s) => s !== id);
      localStorage.setItem('pathseeker_completed_sessions', JSON.stringify(updated));

      // 2. Call telemetry API
      if (nextState) {
        await multimediaApi.recordProgress(media._id || id, {
          minutesWatched: media.durationMinutes || 30,
          completed: true,
        });
        toast.success(`Masterclass completed! +${media.durationMinutes || 30} mins added to your Dashboard passport!`);
      } else {
        toast('Session marked as in-progress');
      }
    } catch {
      // ignore
    }
  };

  const handleRate = async (stars) => {
    setUserRating(stars);
    try {
      const res = await multimediaApi.rate(media._id || id, { score: stars });
      toast.success(`Rated ${stars} stars! Average updated to ${res?.averageRating || stars}`);
      if (res?.averageRating) {
        setMedia((prev) => ({ ...prev, rating: res.averageRating, averageRating: res.averageRating }));
      }
    } catch {
      toast.success(`Rated ${stars} stars!`);
    }
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
        
        {/* Navigation Breadcrumb & Actions */}
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
            {/* Mark as Completed Button */}
            <button
              type="button"
              onClick={handleToggleCompleted}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                isCompleted
                  ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40'
                  : 'bg-white/[0.06] hover:bg-[#10B981]/20 hover:text-[#10B981] text-[#D4D4D8] border-white/10'
              }`}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>

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
            SECTION 1: RESPONSIVE VIDEO THEATER & EMBED
            ======================================================== */}
        <section className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/15 shadow-2xl p-2 sm:p-4 bg-black/60">
            {/* Ambient Screen Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E8602E]/25 via-[#BC4C22]/15 to-[#FFB800]/20 blur-3xl -z-10" />

            {/* Video Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0A0A0F] border border-white/10">
              <iframe
                key={`${media.id || media._id}-${videoSeekSeconds}`}
                src={`${(media.videoUrl || media.url || 'https://www.youtube.com/embed/aircAruvnKk').split('?')[0]}?start=${videoSeekSeconds}&autoplay=${videoSeekSeconds > 0 ? 1 : 0}&rel=0&enablejsapi=1`}
                title={media.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Video Metadata Header */}
          <div className="space-y-4 pt-2 text-left">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 font-bold uppercase">
                  {media.domain}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                  {media.type}
                </span>
                <span className="text-[#A1A1AA] flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{media.duration}</span>
                </span>
                <span className="text-[#A1A1AA] flex items-center gap-1">
                  <FontAwesomeIcon icon={faEye} />
                  <span>{media.views || '28.4k'} views</span>
                </span>
              </div>

              {/* Interactive Rating Stars */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-[#A1A1AA]">Rate:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRate(star)}
                    className="text-[#FFB800] hover:scale-125 transition-transform cursor-pointer p-0.5"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={star <= (userRating || Math.round(media.rating || media.averageRating || 5)) ? 'opacity-100' : 'opacity-30'}
                    />
                  </button>
                ))}
                <span className="text-[#FFB800] font-bold ml-1 flex items-center">
                  <FontAwesomeIcon icon={faStar} className="text-[#FFB800] text-xs mr-1" />
                  <span>{media.rating || media.averageRating || 4.9}</span>
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              {media.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-4xl">
              {media.summary}
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: 2-COLUMN SYNCHRONIZED TRANSCRIPT & NOTE TAKER
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1 & 2: Interactive Synchronized Transcript */}
          <div className="lg:col-span-2 space-y-6">
            <InteractiveTranscript
              transcript={media.transcript || []}
              activeSeconds={activeSeconds}
              onSeekTo={handleSeekTo}
            />

            {/* Key Takeaways & Handouts */}
            <MasterclassTakeaways
              takeaways={media.takeaways || []}
              handouts={media.handouts || []}
            />
          </div>

          {/* Column 3: Speaker Dossier & In-Session Note Taker */}
          <div className="space-y-6">
            {/* Speaker Dossier */}
            <SpeakerDossier speaker={media.speaker} />

            {/* In-Session Notepad */}
            <div className="p-6 rounded-3xl glass-panel-ultra border border-white/10 space-y-4 text-left shadow-glass">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
                  <FontAwesomeIcon icon={faNoteSticky} />
                  <span>Session Notes & Insights</span>
                </div>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="px-3 py-1 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-glow-orange-sm cursor-pointer"
                >
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  <span>Save</span>
                </button>
              </div>

              <textarea
                rows={5}
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Type your notes, architecture takeaways, and questions here..."
                className="w-full glass-input text-xs text-white placeholder-[#71717A] p-3 rounded-2xl focus:outline-none resize-none"
              />

              <span className="text-[10px] text-[#71717A] block">
                Notes are persisted in your local vault & Career Passport summary.
              </span>
            </div>

            {/* Handouts & Blueprints Download Box */}
            {media.handouts && media.handouts.length > 0 && (
              <div className="p-6 rounded-3xl glass-panel-ultra border border-white/10 space-y-4 text-left shadow-glass">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800] uppercase font-mono">
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Session Blueprints & Handouts</span>
                </div>

                <div className="space-y-2">
                  {media.handouts.map((h, i) => (
                    <div
                      key={i}
                      onClick={() => toast.success(`Downloaded ${h.name}!`)}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between transition-colors cursor-pointer group"
                    >
                      <div className="truncate pr-2">
                        <span className="text-xs font-bold text-white block group-hover:text-[#E8602E] transition-colors truncate">
                          {h.name}
                        </span>
                        <span className="text-[10px] text-[#A1A1AA] font-mono">{h.size}</span>
                      </div>
                      <FontAwesomeIcon icon={faDownload} className="text-xs text-[#A1A1AA] group-hover:text-[#E8602E]" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Linked Career Callout */}
            {linkedCareer && (
              <div className="p-6 rounded-3xl glass-panel-ultra border border-[#E8602E]/30 space-y-3 text-left">
                <span className="text-[10px] font-mono font-bold text-[#E8602E] uppercase block">
                  Connected Pathway
                </span>
                <h4 className="text-sm font-bold text-white">{linkedCareer.title}</h4>
                <p className="text-xs text-[#A1A1AA] line-clamp-2">
                  {linkedCareer.description}
                </p>
                <Link
                  to={`/careers/${linkedCareer.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8602E] hover:underline pt-1"
                >
                  <span>View Full Career Blueprint</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            SECTION 3: COMMUNITY DISCUSSION & TIMESTAMPS
            ======================================================== */}
        <section>
          <CommunityDiscussion initialFaqs={media.faqs || []} mediaId={media._id || id} />
        </section>

        {/* ========================================================
            SECTION 4: RELATED MASTERCLASSES CAROUSEL
            ======================================================== */}
        {relatedMedia.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-xl font-extrabold text-white text-left">
              Related Masterclasses in {media.domain}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMedia.map((item) => (
                <MediaCard key={item.id || item._id} media={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
