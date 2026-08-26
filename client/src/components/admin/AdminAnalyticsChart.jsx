import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
  faChartArea,
  faCompass,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import { DOMAIN_DISTRIBUTION, WEEKLY_VELOCITY } from '../../data/adminData';

export default function AdminAnalyticsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
          <span className="text-xs font-mono text-[#A1A1AA]">Live Real-Time</span>
        </div>

        <div className="space-y-4">
          {DOMAIN_DISTRIBUTION.map((item, i) => (
            <div key={i} className="space-y-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
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
                  className="h-full rounded-full transition-all duration-700"
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
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-[#E8602E]">
                <span className="w-2 h-2 rounded-full bg-[#E8602E]" />
                Quiz
              </span>
              <span className="flex items-center gap-1 text-[#10B981]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Passport
              </span>
            </div>
          </div>

          {/* Simple Visual Bar Chart */}
          <div className="grid grid-cols-7 gap-2 items-end h-48 pt-6 pb-2">
            {WEEKLY_VELOCITY.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1 h-36">
                  {/* Quiz Bar */}
                  <div
                    className="w-2.5 bg-[#E8602E] rounded-t-sm transition-all duration-500 shadow-glow-orange-sm"
                    style={{ height: `${(day.quizzes / 800) * 100}%` }}
                    title={`${day.day}: ${day.quizzes} Quizzes`}
                  />
                  {/* Passport Bar */}
                  <div
                    className="w-2.5 bg-[#10B981] rounded-t-sm transition-all duration-500"
                    style={{ height: `${(day.passports / 800) * 100}%` }}
                    title={`${day.day}: ${day.passports} Passports`}
                  />
                </div>
                <span className="text-[10px] font-mono text-[#71717A] uppercase font-bold">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-[#A1A1AA]">Peak Ingestion Day:</span>
          <span className="text-[#FFE8DE] font-bold">Sunday (1,170 Events)</span>
        </div>
      </div>
    </div>
  );
}
