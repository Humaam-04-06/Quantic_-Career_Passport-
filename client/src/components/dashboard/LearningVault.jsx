import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faPlay,
  faDownload,
  faFilePdf,
  faFileCode,
  faFileLines,
  faArrowRight,
  faFileArrowDown,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { SAVED_LEARNING_ITEMS, SAVED_RESOURCE_VAULT } from '../../data/dashboardData';

export default function LearningVault({ onExportPdf }) {
  const [activeTab, setActiveTab] = useState('media'); // 'media' | 'resources'

  const handleDownloadFile = (title) => {
    toast.success(`Exporting "${title}" from your vault!`);
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Learning Curriculum & Vault</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Masterclasses & Resource Vault
          </h3>
        </div>

        {/* Tab Controls & PDF Export */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('media')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'media'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Masterclasses ({SAVED_LEARNING_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'resources'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Downloaded Vault ({SAVED_RESOURCE_VAULT.length})
            </button>
          </div>

          <button
            type="button"
            onClick={onExportPdf}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] hover:from-[#FF7A45] hover:to-[#E8602E] text-white text-xs font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Export Passport PDF Dossier</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Masterclasses */}
      {activeTab === 'media' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAVED_LEARNING_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl glass-card-interactive flex items-center gap-4 shadow-glass"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-none bg-black/40">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-85"
                />
                <Link
                  to={item.link}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 text-[#E8602E] transition-colors"
                >
                  <FontAwesomeIcon icon={faPlay} className="text-sm" />
                </Link>
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <span className="text-[10px] font-mono text-[#E8602E] font-bold">
                  {item.format} • {item.duration}
                </span>
                <h4 className="text-sm font-bold text-white truncate leading-snug">
                  {item.title}
                </h4>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA]">
                    <span>Watch Progress</span>
                    <span className="text-white font-bold">{item.progressPct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#E8602E] rounded-full"
                      style={{ width: `${item.progressPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Tab 2: Resource Vault */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAVED_RESOURCE_VAULT.map((res) => (
            <div
              key={res.id}
              className="p-5 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4 shadow-glass"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md bg-[#E8602E]/20 text-[#E8602E] text-[10px] font-mono font-bold">
                    {res.format}
                  </span>
                  <span className="text-[10px] text-[#71717A] font-mono">
                    {res.downloadedAt}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                  {res.title}
                </h4>
                <span className="text-xs text-[#A1A1AA] font-mono block">
                  {res.size} • {res.pages}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleDownloadFile(res.title)}
                className="w-full py-2 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FontAwesomeIcon icon={faDownload} className="text-[10px]" />
                <span>Re-Download Blueprint</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
