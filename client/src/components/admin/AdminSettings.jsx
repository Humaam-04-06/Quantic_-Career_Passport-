import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faKey,
  faDatabase,
  faShieldHalved,
  faSliders,
  faCheck,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function AdminSettings() {
  const [geminiKey, setGeminiKey] = useState('AIzaSyD-••••••••••••••••••••••••');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [rateLimitStrict, setRateLimitStrict] = useState(true);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    toast.success('Platform operational configuration updated!');
  };

  const handleRunSeeder = () => {
    toast.success('Triggering MongoDB 150+ Career Database Seeder...');
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#E8602E] font-mono block">
            System Preferences
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Platform Engine & API Settings
          </h3>
        </div>

        <span className="px-3 py-1 rounded-full bg-white/[0.06] text-xs font-mono text-[#D4D4D8] border border-white/10">
          Environment: Production
        </span>
      </div>

      <form onSubmit={handleSaveSettings} className="space-y-6 text-xs font-mono">
        {/* Gemini AI API Configuration */}
        <div className="space-y-2 p-5 rounded-2xl bg-black/40 border border-white/10">
          <div className="flex items-center justify-between">
            <label className="text-white font-bold flex items-center gap-2">
              <FontAwesomeIcon icon={faKey} className="text-[#E8602E]" />
              <span>Gemini AI 1.5 Pro API Key</span>
            </label>
            <span className="text-[10px] text-[#10B981]">Connected (185ms Latency)</span>
          </div>
          <input
            type="password"
            value={geminiKey}
            onChange={(e) => setGeminiKey(e.target.value)}
            className="w-full glass-input p-3.5 rounded-xl text-white focus:outline-none"
          />
          <span className="text-[10px] text-[#71717A] block">
            Used for real-time Holland RIASEC score calculation and natural language career roadmapping.
          </span>
        </div>

        {/* Operational Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div>
              <strong className="text-white block">Strict API Rate Limiting</strong>
              <span className="text-[10px] text-[#71717A]">60 requests / minute per IP</span>
            </div>
            <button
              type="button"
              onClick={() => setRateLimitStrict(!rateLimitStrict)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                rateLimitStrict ? 'bg-[#10B981]' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                  rateLimitStrict ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div>
              <strong className="text-white block">Maintenance Mode</strong>
              <span className="text-[10px] text-[#71717A]">Display maintenance banner</span>
            </div>
            <button
              type="button"
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                maintenanceMode ? 'bg-[#E8602E]' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                  maintenanceMode ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Database Seeder Trigger */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <strong className="text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faDatabase} className="text-[#06B6D4]" />
              <span>Full MongoDB Seeder Routine</span>
            </strong>
            <span className="text-[10px] text-[#A1A1AA] block mt-0.5">
              Re-populate or sync all 150+ career roles, masterclasses, and roadmap blueprints.
            </span>
          </div>

          <button
            type="button"
            onClick={handleRunSeeder}
            className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer flex-none"
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span>Execute Seeder</span>
          </button>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm flex items-center gap-2 cursor-pointer transition-all"
          >
            <FontAwesomeIcon icon={faCheck} />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}
