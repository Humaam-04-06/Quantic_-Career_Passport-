import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
  faVolumeHigh,
  faVolumeMute,
  faHeadphones,
  faXmark,
  faGaugeHigh,
} from '@fortawesome/free-solid-svg-icons';

export default function FloatingAudioPlayer({ currentTrack, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // Default placeholder duration in seconds
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, playbackRate, currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatSeconds = (sec) => {
    if (!sec || isNaN(sec)) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    const nextIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    setPlaybackRate(speeds[nextIndex]);
  };

  if (!currentTrack) return null;

  return (
    <aside aria-label="Audio podcast player" className="fixed bottom-6 left-4 right-4 sm:left-12 sm:right-12 lg:left-1/4 lg:right-1/4 z-50 rounded-2xl glass-panel-ultra border border-white/20 p-3 sm:p-4 shadow-2xl backdrop-blur-2xl flex flex-col gap-2">
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
      />

      {/* Top Details & Controls Bar */}
      <div className="flex items-center justify-between gap-3">
        {/* Left Track Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center flex-none border border-[#E8602E]/40 shadow-glow-orange-sm">
            <FontAwesomeIcon icon={faHeadphones} className="text-sm" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white truncate max-w-[180px] sm:max-w-xs">
              {currentTrack.title}
            </h4>
            <span className="text-[10px] text-[#A1A1AA] truncate block">
              {currentTrack.speaker?.name} • {currentTrack.domain}
            </span>
          </div>
        </div>

        {/* Center Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 15);
            }}
            title="Rewind 15s"
            className="p-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer text-xs"
          >
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause' : 'Play'}
            className="w-10 h-10 rounded-full bg-[#E8602E] text-white flex items-center justify-center text-sm shadow-glow-orange hover:scale-105 transition-transform cursor-pointer"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className={isPlaying ? '' : 'ml-0.5'} />
          </button>

          <button
            type="button"
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 15);
            }}
            title="Fast Forward 15s"
            className="p-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer text-xs"
          >
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
        </div>

        {/* Right Speed & Close Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSpeed}
            className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-mono text-[10px] font-bold hover:bg-white/20 transition-colors cursor-pointer border border-white/15"
            title="Change Playback Speed"
          >
            <FontAwesomeIcon icon={faGaugeHigh} className="mr-1 text-[9px] text-[#E8602E]" />
            {playbackRate}x
          </button>

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute' : 'Mute'}
            className="p-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer text-xs hidden sm:block"
          >
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close Player"
            className="p-2 text-[#71717A] hover:text-white transition-colors cursor-pointer text-xs"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>

      {/* Bottom Timeline Scrubber */}
      <div className="flex items-center gap-2 w-full pt-1">
        <span className="text-[9px] font-mono text-[#A1A1AA] flex-none">
          {formatSeconds(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Audio timeline seek slider"
          className="flex-1 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E8602E]"
        />
        <span className="text-[9px] font-mono text-[#A1A1AA] flex-none">
          {formatSeconds(duration)}
        </span>
      </div>
    </aside>
  );
}
