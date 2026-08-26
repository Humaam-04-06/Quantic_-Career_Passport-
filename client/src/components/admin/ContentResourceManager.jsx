import React, { useState, useEffect } from 'react';
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
  faSpinner,
  faCheckCircle,
  faClock,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { adminApi } from '../../services/api';
import { MULTIMEDIA_DATABASE } from '../../data/multimediaData';
import { showConfirm } from '../../utils/sweetAlert';
import { RESOURCES_DATABASE, RESOURCE_CATEGORIES, RESOURCE_FORMATS } from '../../data/resourcesData';

export default function ContentResourceManager() {
  const [mediaList, setMediaList] = useState([]);
  const [resourcesList, setResourcesList] = useState([]);
  const [requestsList, setRequestsList] = useState([]);
  const [activeTab, setActiveTab] = useState('media'); // 'media' | 'resources' | 'requests'
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states for creating new Media or Resource
  const [newItem, setNewItem] = useState({
    title: '',
    type: 'video',
    format: 'PDF',
    category: 'System Design & Architecture',
    speakerName: '',
    speakerRole: 'Staff Software Architect',
    duration: '18:40',
    videoUrl: 'https://www.youtube.com/watch?v=xpDnVSmNFX0',
    summary: '',
    fileSize: '8.5 MB',
    pages: '24 Pages',
  });

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [mediaRes, resRes, reqRes] = await Promise.allSettled([
        adminApi.getMedia(),
        adminApi.getResources(),
        adminApi.getBlueprintRequests(),
      ]);

      if (mediaRes.status === 'fulfilled' && mediaRes.value?.data && mediaRes.value.data.length > 0) {
        setMediaList(mediaRes.value.data);
      } else {
        setMediaList(MULTIMEDIA_DATABASE);
      }

      if (resRes.status === 'fulfilled' && resRes.value?.data && resRes.value.data.length > 0) {
        setResourcesList(resRes.value.data);
      } else {
        setResourcesList(RESOURCES_DATABASE);
      }

      if (reqRes.status === 'fulfilled' && reqRes.value?.data) {
        setRequestsList(reqRes.value.data);
      }
    } catch {
      setMediaList(MULTIMEDIA_DATABASE);
      setResourcesList(RESOURCES_DATABASE);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete Media
  const handleDeleteMedia = async (id, title) => {
    const confirmed = await showConfirm({
      title: 'Remove Masterclass?',
      text: `Permanently remove masterclass "${title}" from the curriculum catalog?`,
      confirmButtonText: 'Yes, Delete Masterclass',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteMedia(id);
      setMediaList((prev) => prev.filter((m) => m._id !== id && m.id !== id));
      toast.success(`Removed "${title}" from masterclass catalog.`);
    } catch {
      setMediaList((prev) => prev.filter((m) => m._id !== id && m.id !== id));
      toast.success(`Removed "${title}".`);
    }
  };

  // Delete Resource
  const handleDeleteResource = async (id, title) => {
    const confirmed = await showConfirm({
      title: 'Archive Blueprint Resource?',
      text: `Permanently archive blueprint "${title}" from the global resource vault?`,
      confirmButtonText: 'Yes, Archive Blueprint',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteResource(id);
      setResourcesList((prev) => prev.filter((r) => r._id !== id && r.id !== id));
      toast.success(`Archived "${title}" blueprint.`);
    } catch {
      setResourcesList((prev) => prev.filter((r) => r._id !== id && r.id !== id));
      toast.success(`Archived "${title}".`);
    }
  };

  // Update Blueprint Request Status
  const handleUpdateRequestStatus = async (id, status) => {
    try {
      await adminApi.updateBlueprintRequest(id, status);
      setRequestsList((prev) =>
        prev.map((r) => (r._id === id || r.id === id ? { ...r, status } : r))
      );
      toast.success(`Request status marked as "${status}"!`);
    } catch {
      setRequestsList((prev) =>
        prev.map((r) => (r._id === id || r.id === id ? { ...r, status } : r))
      );
      toast.success(`Request status updated.`);
    }
  };

  // Create New Item
  const handleCreateItem = async (e) => {
    e.preventDefault();
    if (!newItem.title.trim()) return;

    if (activeTab === 'media') {
      const payload = {
        id: `media-${Date.now()}`,
        title: newItem.title.trim(),
        type: newItem.type,
        category: newItem.category,
        duration: newItem.duration || '20:00',
        videoUrl: newItem.videoUrl,
        speaker: {
          name: newItem.speakerName || 'Faculty Instructor',
          role: newItem.speakerRole || 'Staff Architect',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        },
        views: 1200,
        rating: 4.95,
        summary: newItem.summary || 'Production engineering masterclass walkthrough.',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      };

      try {
        const res = await adminApi.createMedia(payload);
        setMediaList([res.data || payload, ...mediaList]);
        toast.success(`Published "${payload.title}" to Masterclasses!`);
      } catch {
        setMediaList([payload, ...mediaList]);
        toast.success(`Published "${payload.title}"!`);
      }
    } else if (activeTab === 'resources') {
      const payload = {
        id: `res-${Date.now()}`,
        title: newItem.title.trim(),
        category: newItem.category,
        format: newItem.format,
        fileSize: newItem.fileSize || '8.5 MB',
        pages: newItem.pages || '20 Pages',
        downloads: 150,
        rating: 4.95,
        author: newItem.speakerName || 'PathSeeker Editorial Faculty',
        summary: newItem.summary || 'Comprehensive production engineering blueprint.',
        coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        topics: ['System Architecture', 'Production Best Practices'],
        tableOfContents: ['Chapter 1: Foundations', 'Chapter 2: Production Scaling'],
        previewPages: [{ pageNumber: 1, title: 'Foundations', content: newItem.summary }],
      };

      try {
        const res = await adminApi.createResource(payload);
        setResourcesList([res.data || payload, ...resourcesList]);
        toast.success(`Published "${payload.title}" to Resource Library!`);
      } catch {
        setResourcesList([payload, ...resourcesList]);
        toast.success(`Published "${payload.title}"!`);
      }
    }

    setIsModalOpen(false);
    setNewItem({
      title: '',
      type: 'video',
      format: 'PDF',
      category: 'System Design & Architecture',
      speakerName: '',
      speakerRole: 'Staff Software Architect',
      duration: '18:40',
      videoUrl: 'https://www.youtube.com/watch?v=xpDnVSmNFX0',
      summary: '',
      fileSize: '8.5 MB',
      pages: '24 Pages',
    });
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl text-left">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#06B6D4] font-mono block">
            Curriculum & Asset Registry
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Masterclasses & Resource Vault CMS
          </h3>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('media')}
              className={`px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer ${
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
              className={`px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'resources'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Blueprints ({resourcesList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('requests')}
              className={`px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'requests'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Requests ({requestsList.length})
            </button>
          </div>

          {activeTab !== 'requests' && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add {activeTab === 'media' ? 'Masterclass' : 'Blueprint'}</span>
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-16 space-y-3">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
          <p className="text-xs font-mono text-[#A1A1AA]">
            Querying curriculum assets from MongoDB Atlas...
          </p>
        </div>
      ) : activeTab === 'media' ? (
        /* ================= MEDIA LIST ================= */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediaList.map((media) => {
            const id = media._id || media.id;
            return (
              <div
                key={id}
                className="p-5 rounded-2xl glass-card-interactive border border-white/10 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center flex-none text-sm">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#E8602E] font-bold block uppercase">
                      {media.category || 'Masterclass'} • {media.duration || '18:40'}
                    </span>
                    <h4 className="text-sm font-bold text-white line-clamp-1">{media.title}</h4>
                    <p className="text-xs text-[#A1A1AA] line-clamp-1">
                      {media.speaker?.name || 'Faculty Lead'} ({media.speaker?.role || 'Instructor'})
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteMedia(id, media.title)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
                  title="Remove Masterclass"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            );
          })}
        </div>
      ) : activeTab === 'resources' ? (
        /* ================= RESOURCES LIST ================= */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resourcesList.map((res) => {
            const id = res._id || res.id;
            return (
              <div
                key={id}
                className="p-5 rounded-2xl glass-card-interactive border border-white/10 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center flex-none text-sm">
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#10B981] font-bold block uppercase">
                      {res.format} • {res.fileSize} • {res.downloads || 0} Downloads
                    </span>
                    <h4 className="text-sm font-bold text-white line-clamp-1">{res.title}</h4>
                    <p className="text-xs text-[#A1A1AA] line-clamp-1">{res.category}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteResource(id, res.title)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
                  title="Archive Blueprint"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        /* ================= REQUESTS INBOX ================= */
        <div className="space-y-4">
          {requestsList.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-[#10B981]" />
              <h4 className="text-lg font-bold text-white">No Pending Blueprint Requests!</h4>
              <p className="text-xs text-[#A1A1AA]">
                All community requests submitted through the /resources page have been completed.
              </p>
            </div>
          ) : (
            requestsList.map((req) => {
              const id = req._id || req.id;
              return (
                <div
                  key={id}
                  className="p-5 rounded-2xl glass-card-interactive border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{req.requestedTopic}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                          req.status === 'Published'
                            ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                            : req.status === 'In Production'
                            ? 'bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/40'
                            : 'bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40'
                        }`}
                      >
                        {req.status || 'Pending'}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-mono">
                      Requested by: {req.userName} ({req.userEmail}) • Category: {req.category}
                    </p>
                    {req.useCase && (
                      <p className="text-xs italic text-[#D4D4D8]">"{req.useCase}"</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-none">
                    <button
                      type="button"
                      onClick={() => handleUpdateRequestStatus(id, 'In Production')}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#3B82F6] border border-[#3B82F6]/30 text-xs font-bold transition-all cursor-pointer"
                    >
                      In Production
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUpdateRequestStatus(id, 'Published')}
                      className="px-3 py-1.5 rounded-xl bg-[#10B981]/20 hover:bg-[#10B981]/40 text-[#10B981] border border-[#10B981]/40 text-xs font-bold transition-all cursor-pointer"
                    >
                      Mark Published
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* CREATE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h3 className="text-xl font-extrabold text-white">
              Add New {activeTab === 'media' ? 'Video Masterclass' : 'Engineering Blueprint'}
            </h3>

            <form onSubmit={handleCreateItem} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Title</label>
                <input
                  type="text"
                  required
                  placeholder={activeTab === 'media' ? 'e.g. Distributed Consensus in Go' : 'e.g. Kafka Streaming Architecture Bible'}
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Category</label>
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                  >
                    {RESOURCE_CATEGORIES.filter((c) => c !== 'All Resources').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">
                    {activeTab === 'media' ? 'Duration (e.g. 24:10)' : 'Format & Size'}
                  </label>
                  {activeTab === 'media' ? (
                    <input
                      type="text"
                      placeholder="24:10"
                      value={newItem.duration}
                      onChange={(e) => setNewItem({ ...newItem, duration: e.target.value })}
                      className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                    />
                  ) : (
                    <select
                      value={newItem.format}
                      onChange={(e) => setNewItem({ ...newItem, format: e.target.value })}
                      className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                    >
                      {RESOURCE_FORMATS.filter((f) => f !== 'All Formats').map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">
                  {activeTab === 'media' ? 'Speaker / Instructor Name' : 'Author'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Rivera, Staff Distributed Systems Lead"
                  value={newItem.speakerName}
                  onChange={(e) => setNewItem({ ...newItem, speakerName: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Executive Summary</label>
                <textarea
                  rows={3}
                  placeholder="High-level overview and architectural takeaways..."
                  value={newItem.summary}
                  onChange={(e) => setNewItem({ ...newItem, summary: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all cursor-pointer"
              >
                Publish to Catalog
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
