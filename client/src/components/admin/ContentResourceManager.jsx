import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faPlus,
  faPlay,
  faDownload,
  faTrashCan,
  faEye,
  faXmark,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { MULTIMEDIA_DATABASE } from '../../data/multimediaData';
import { RESOURCES_DATABASE } from '../../data/resourcesData';

export default function ContentResourceManager() {
  const [mediaList, setMediaList] = useState(MULTIMEDIA_DATABASE);
  const [resourcesList, setResourcesList] = useState(RESOURCES_DATABASE);
  const [activeTab, setActiveTab] = useState('media'); // 'media' | 'resources'
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const [newItem, setNewItem] = useState({
    title: '',
    type: 'Video Masterclass',
    format: 'PDF',
    speaker: '',
    duration: '20 mins',
  });

  const handleDeleteMedia = (id, title) => {
    setMediaList((prev) => prev.filter((m) => m.id !== id));
    toast.success(`Removed "${title}" from masterclass catalog.`);
  };

  const handleDeleteResource = (id, title) => {
    setResourcesList((prev) => prev.filter((r) => r.id !== id));
    toast.success(`Archived "${title}" blueprint.`);
  };

  const handleCreateItem = (e) => {
    e.preventDefault();
    if (!newItem.title.trim()) return;

    if (activeTab === 'media') {
      const created = {
        id: `m-${Date.now()}`,
        title: newItem.title.trim(),
        type: newItem.type,
        duration: newItem.duration,
        speaker: { name: newItem.speaker || 'Senior Engineer', role: 'Staff Architect' },
        views: '1.2k',
        rating: 4.9,
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      };
      setMediaList([created, ...mediaList]);
    } else {
      const created = {
        id: `res-${Date.now()}`,
        title: newItem.title.trim(),
        format: newItem.format,
        fileSize: '6.4 MB',
        downloads: 140,
        rating: 5.0,
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      };
      setResourcesList([created, ...resourcesList]);
    }

    setIsUploadModalOpen(false);
    setNewItem({ title: '', type: 'Video Masterclass', format: 'PDF', speaker: '', duration: '20 mins' });
    toast.success(`Published new item to ${activeTab === 'media' ? 'Masterclasses' : 'Resource Vault'}!`);
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#06B6D4] font-mono block">
            Curriculum & Asset Registry
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Masterclasses & Resource Vault Manager
          </h3>
        </div>

        <div className="flex items-center gap-3">
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
              Masterclasses ({mediaList.length})
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
              Resource Blueprints ({resourcesList.length})
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsUploadModalOpen(true)}
            className="px-4 py-2.5 rounded-2xl bg-[#06B6D4] hover:bg-[#22d3ee] text-black text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-all"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Upload New Asset</span>
          </button>
        </div>
      </div>

      {/* Grid of Items */}
      {activeTab === 'media' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaList.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4 shadow-glass"
            >
              <div className="space-y-3">
                <div className="relative h-32 rounded-2xl overflow-hidden bg-black/40">
                  <img src={m.thumbnail} alt={m.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/70 text-[10px] font-mono text-[#E8602E] font-bold">
                    {m.type}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                  {m.title}
                </h4>
                <span className="text-xs text-[#A1A1AA] font-mono block">
                  Speaker: {m.speaker?.name || 'Industry Lead'} • {m.duration}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#10B981] font-bold">
                  {m.views || '1.4k'} Views
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteMedia(m.id, m.title)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                  title="Archive Masterclass"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesList.map((res) => (
            <div
              key={res.id}
              className="p-5 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4 shadow-glass"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md bg-[#E8602E]/20 text-[#E8602E] text-[10px] font-mono font-bold">
                    {res.format}
                  </span>
                  <span className="text-xs text-[#10B981] font-mono font-bold">
                    {res.downloads || 240} DLs
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                  {res.title}
                </h4>
                <span className="text-xs text-[#A1A1AA] font-mono block">
                  {res.fileSize} • {res.category || 'Architecture'}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => handleDeleteResource(res.id, res.title)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                  title="Archive Resource"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h4 className="text-lg font-bold text-white">
                Upload New {activeTab === 'media' ? 'Masterclass' : 'Resource Blueprint'}
              </h4>
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className="text-[#A1A1AA] hover:text-white"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <form onSubmit={handleCreateItem} className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-[#A1A1AA] uppercase text-[10px]">Asset Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Consensus Engine Architecture"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full glass-input p-3 rounded-xl text-white font-sans text-xs focus:outline-none"
                />
              </div>

              {activeTab === 'media' ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[#A1A1AA] uppercase text-[10px]">Format</label>
                    <select
                      value={newItem.type}
                      onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                      className="w-full glass-input p-3 rounded-xl text-white text-xs focus:outline-none bg-[#121215]"
                    >
                      <option value="Video Masterclass">Video Masterclass</option>
                      <option value="Audio Podcast">Audio Podcast</option>
                      <option value="Micro-Lesson">Micro-Lesson</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[#A1A1AA] uppercase text-[10px]">Speaker</label>
                    <input
                      type="text"
                      placeholder="Dr. Elena Rostova"
                      value={newItem.speaker}
                      onChange={(e) => setNewItem({ ...newItem, speaker: e.target.value })}
                      className="w-full glass-input p-3 rounded-xl text-white text-xs focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-[#A1A1AA] uppercase text-[10px]">File Format</label>
                  <select
                    value={newItem.format}
                    onChange={(e) => setNewItem({ ...newItem, format: e.target.value })}
                    className="w-full glass-input p-3 rounded-xl text-white text-xs focus:outline-none bg-[#121215]"
                  >
                    <option value="PDF">PDF Blueprint</option>
                    <option value="FIG">Figma Kit</option>
                    <option value="JSON">JSON Schema</option>
                  </select>
                </div>
              )}

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#06B6D4] hover:bg-[#22d3ee] text-black text-xs font-bold cursor-pointer"
                >
                  Publish Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
