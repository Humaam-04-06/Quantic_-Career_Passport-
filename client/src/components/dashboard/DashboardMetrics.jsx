import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faListCheck,
  faVideo,
  faAward,
  faFire,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';

export default function DashboardMetrics({ profile, completedTaskCount, totalTaskCount }) {
  const readinessPercent = Math.round((completedTaskCount / (totalTaskCount || 1)) * 100);

  const metrics = [
    {
      id: 'readiness',
      title: 'Career Readiness Index',
      value: `${readinessPercent}%`,
      subtitle: readinessPercent >= 80 ? 'Interview Ready' : 'In Acceleration',
      icon: faChartLine,
      color: 'text-[#E8602E]',
      bgGlow: 'bg-[#E8602E]/20',
      badge: 'Mid-Level FAANG Tier',
    },
    {
      id: 'sprints',
      title: 'Roadmap Sprints Completed',
      value: `${completedTaskCount} / ${totalTaskCount}`,
      subtitle: `${totalTaskCount - completedTaskCount} Sprints Remaining`,
      icon: faListCheck,
      color: 'text-[#10B981]',
      bgGlow: 'bg-[#10B981]/20',
      badge: `${profile.streakDays}-Day Streak 🔥`,
    },
    {
      id: 'masterclasses',
      title: 'Masterclass Curriculum',
      value: `${profile.masterclassesCompleted} Sessions`,
      subtitle: `${profile.totalHoursWatched} Hrs Watched`,
      icon: faVideo,
      color: 'text-[#FFB800]',
      bgGlow: 'bg-[#FFB800]/20',
      badge: '+4.2 CEU Credits',
    },
    {
      id: 'badges',
      title: 'Verified Digital Badges',
      value: `${profile.badgesEarned} Badges`,
      subtitle: 'RIASEC • K8s • LoRA',
      icon: faAward,
      color: 'text-[#06B6D4]',
      bgGlow: 'bg-[#06B6D4]/20',
      badge: 'Blockchain Verified',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map((m) => (
        <div
          key={m.id}
          className="p-6 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4 shadow-glass"
        >
          <div className="flex items-center justify-between">
            <div
              className={`w-11 h-11 rounded-2xl ${m.bgGlow} ${m.color} flex items-center justify-center text-lg shadow-sm`}
            >
              <FontAwesomeIcon icon={m.icon} />
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[10px] font-mono text-[#D4D4D8] border border-white/10">
              {m.badge}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-semibold block">
              {m.title}
            </span>
            <strong className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">
              {m.value}
            </strong>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#71717A]">
            <span>{m.subtitle}</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="text-[#10B981] text-xs" />
          </div>
        </div>
      ))}
    </div>
  );
}
