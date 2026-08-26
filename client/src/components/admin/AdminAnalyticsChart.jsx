import React, { useState } from 'react';
import { DOMAIN_DISTRIBUTION, WEEKLY_VELOCITY } from '../../data/adminData';

export default function AdminAnalyticsChart({ stats }) {
  const domainData = stats?.domainDistribution || DOMAIN_DISTRIBUTION;
  const velocityData = stats?.weeklyVelocity || WEEKLY_VELOCITY;
  const peakDayText = stats?.peakDay ? `${stats.peakDay.day || stats.peakDay} (${stats.peakDay.total ? `${stats.peakDay.total} Events` : stats.peakDay})` : 'Sunday (15 Events)';

  const [hoveredDay, setHoveredDay] = useState(null);

  // Dynamically calculate the maximum value across all days for perfect proportional scaling
  const maxMetricValue = Math.max(
    ...velocityData.map((d) => Math.max(d.quizzes || 0, d.passports || 0, 1)),
    1
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
      {/* 1. Domain Popularity Distribution (7 Cols) */}
      <div className="lg:col-span-7 rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#E8602E] font-mono block">
              Cognitive Aptitude Matches
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Candidate Domain Distribution
            </h3>
          </div>
          <span className="text-xs font-mono text-[#10B981] flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            Live Real-Time
          </span>
        </div>

        <div className="space-y-4">
          {domainData.map((item, i) => (
            <div key={i} className="space-y-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{item.domain}</span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-[#A1A1AA] text-[10px]">{item.count}</span>
                  <strong style={{ color: item.color }} className="font-extrabold">
                    {item.percent}%
                  </strong>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 shadow-sm"
                  style={{
                    width: `${item.percent}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Weekly Velocity Telemetry (5 Cols) */}
      <div className="lg:col-span-5 rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#10B981] font-mono block">
                7-Day Ingestion Velocity
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Tests vs Passports
              </h3>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono">
              <span className="flex items-center gap-1.5 text-[#E8602E]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8602E] shadow-glow-orange-sm" />
                Quiz Tests
              </span>
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                Passports
              </span>
            </div>
          </div>

          {/* Active Hover Detail Popup */}
          <div className="h-6 flex items-center justify-center">
            {hoveredDay ? (
              <span className="text-xs font-mono text-[#FFE8DE] bg-[#E8602E]/20 px-3 py-0.5 rounded-full border border-[#E8602E]/40 animate-fadeIn">
                <strong>{hoveredDay.day}:</strong> {hoveredDay.quizzes} Quizzes • {hoveredDay.passports} Passports ({hoveredDay.quizzes + hoveredDay.passports} Total)
              </span>
            ) : (
              <span className="text-[10px] font-mono text-[#71717A]">
                Hover over bars to view daily event metrics
              </span>
            )}
          </div>

          {/* Dynamic Scaling Visual Bar Chart */}
          <div className="grid grid-cols-7 gap-2 items-end h-44 pt-4 pb-2">
            {velocityData.map((day, i) => {
              const quizPercent = Math.max(10, Math.round(((day.quizzes || 0) / maxMetricValue) * 88));
              const passportPercent = Math.max(10, Math.round(((day.passports || 0) / maxMetricValue) * 88));

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer"
                >
                  <div className="w-full flex items-end justify-center gap-1.5 h-32 p-1 rounded-xl group-hover:bg-white/[0.04] transition-colors">
                    {/* Quiz Bar */}
                    <div
                      className="w-3 bg-[#E8602E] rounded-t-md transition-all duration-500 shadow-glow-orange-sm group-hover:brightness-125"
                      style={{ height: `${quizPercent}%` }}
                      title={`${day.day}: ${day.quizzes} Quizzes`}
                    />
                    {/* Passport Bar */}
                    <div
                      className="w-3 bg-[#10B981] rounded-t-md transition-all duration-500 group-hover:brightness-125"
                      style={{ height: `${passportPercent}%` }}
                      title={`${day.day}: ${day.passports} Passports`}
                    />
                  </div>
                  <span className={`text-[10px] font-mono uppercase font-bold transition-colors ${
                    hoveredDay?.day === day.day ? 'text-[#E8602E]' : 'text-[#71717A]'
                  }`}>
                    {day.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-[#A1A1AA]">Peak Ingestion Day:</span>
          <span className="text-[#FFE8DE] font-bold">{peakDayText}</span>
        </div>
      </div>
    </div>
  );
}
