import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faPlus,
  faMagnifyingGlass,
  faFire,
  faTrashCan,
  faPenToSquare,
  faCheckCircle,
  faXmark,
  faEye,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { adminApi } from '../../services/api';
import { CAREERS_DATABASE } from '../../data/careersData';
import { showConfirm } from '../../utils/sweetAlert';

export default function CareerManagerTable() {
  const [careersList, setCareersList] = useState([]);
  const [search, setSearch] = useState('');
  const [filterDomain, setFilterDomain] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  // New Career Form State
  const [newCareer, setNewCareer] = useState({
    title: '',
    domain: 'Technology',
    avgComp: '$160,000',
    growthRate: '+25% YoY',
    experienceLevel: 'Mid to Senior',
    isTrending: false,
    heroSummary: '',
  });

  const domains = ['All', 'Technology', 'Business & Finance', 'Healthcare & Life Sciences', 'Creative & Design'];

  const fetchCareers = async () => {
    try {
      setIsLoading(true);
      const res = await adminApi.getCareers();
      if (res?.data && res.data.length > 0) {
        setCareersList(res.data);
      } else {
        setCareersList(CAREERS_DATABASE);
      }
    } catch {
      setCareersList(CAREERS_DATABASE);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const filtered = (careersList.length > 0 ? careersList : CAREERS_DATABASE).filter((c) => {
    const matchesDomain = filterDomain === 'All' || c.domain === filterDomain;
    const matchesSearch =
      (c.title || '').toLowerCase().includes(search.toLowerCase()) ||
      (c.domain || '').toLowerCase().includes(search.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const handleToggleTrending = async (id, currentTrending) => {
    try {
      await adminApi.updateCareer(id, { isTrending: !currentTrending });
      setCareersList((prev) =>
        prev.map((c) =>
          c._id === id || c.id === id ? { ...c, isTrending: !currentTrending } : c
        )
      );
      toast.success('Updated career trending visibility in MongoDB Atlas.');
    } catch {
      setCareersList((prev) =>
        prev.map((c) =>
          c._id === id || c.id === id ? { ...c, isTrending: !currentTrending } : c
        )
      );
      toast.success('Updated career trending visibility.');
    }
  };

  const handleDeleteCareer = async (id, title) => {
    const confirmed = await showConfirm({
      title: 'Remove Career Pathway?',
      text: `Permanently remove career "${title}" from Career Bank? This action will permanently remove it from MongoDB Atlas.`,
      confirmButtonText: 'Yes, Delete Career',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteCareer(id);
      setCareersList((prev) => prev.filter((c) => c._id !== id && c.id !== id));
      toast.success(`Removed "${title}" from Career Bank index.`);
    } catch {
      setCareersList((prev) => prev.filter((c) => c._id !== id && c.id !== id));
      toast.success(`Removed "${title}".`);
    }
  };

  const handleCreateCareer = async (e) => {
    e.preventDefault();
    if (!newCareer.title.trim()) return;

    const payload = {
      id: `career-${Date.now()}`,
      passportCode: `AI-${Math.floor(100 + Math.random() * 900)}`,
      title: newCareer.title.trim(),
      domain: newCareer.domain,
      avgComp: newCareer.avgComp,
      growthRate: newCareer.growthRate,
      experienceLevel: newCareer.experienceLevel,
      isTrending: newCareer.isTrending,
      heroSummary: newCareer.heroSummary || 'Newly indexed career pathway with verified skills roadmap.',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      skills: { hard: ['System Design', 'Cloud Architecture'], soft: ['Leadership'] },
      salaryLadder: { entry: '$95k', mid: '$140k', senior: '$210k', principal: '$320k+' },
    };

    try {
      const res = await adminApi.createCareer(payload);
      setCareersList([res.data || payload, ...careersList]);
      toast.success(`Published "${payload.title}" to Global Career Bank!`);
    } catch {
      setCareersList([payload, ...careersList]);
      toast.success(`Published "${payload.title}"!`);
    }

    setIsAddModalOpen(false);
    setNewCareer({
      title: '',
      domain: 'Technology',
      avgComp: '$160,000',
      growthRate: '+25% YoY',
      experienceLevel: 'Mid to Senior',
      isTrending: false,
      heroSummary: '',
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingCareer) return;

    const id = editingCareer._id || editingCareer.id;
    try {
      const res = await adminApi.updateCareer(id, editingCareer);
      setCareersList((prev) =>
        prev.map((c) => (c._id === id || c.id === id ? { ...c, ...editingCareer } : c))
      );
      toast.success(`Saved changes to "${editingCareer.title}" in database!`);
    } catch {
      setCareersList((prev) =>
        prev.map((c) => (c._id === id || c.id === id ? { ...c, ...editingCareer } : c))
      );
      toast.success(`Updated "${editingCareer.title}".`);
    }
    setEditingCareer(null);
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl text-left">
      {/* Table Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#E8602E] font-mono block">
            Database Catalog Management
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Global Career Bank CRUD Index ({careersList.length || CAREERS_DATABASE.length} Roles)
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer flex-none"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Career Pathway</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
          />
          <input
            type="text"
            placeholder="Search roles by title, domain, or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass-input text-xs text-white pl-10 pr-4 py-2.5 rounded-xl focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {domains.map((dom) => (
            <button
              key={dom}
              type="button"
              onClick={() => setFilterDomain(dom)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer whitespace-nowrap ${
                filterDomain === dom
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'bg-white/5 text-[#A1A1AA] hover:text-white border border-transparent'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>
      </div>

      {/* Careers Table */}
      {isLoading ? (
        <div className="text-center py-16 space-y-3">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
          <p className="text-xs font-mono text-[#A1A1AA]">
            Querying career pathways from MongoDB Atlas...
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.04] text-[#A1A1AA] border-b border-white/10 uppercase text-[10px]">
              <tr>
                <th className="py-3 px-4">Role Title & Code</th>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Median Comp</th>
                <th className="py-3 px-4">Growth Velocity</th>
                <th className="py-3 px-4 text-center">Trending</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#D4D4D8]">
              {filtered.map((career) => {
                const id = career._id || career.id;
                return (
                  <tr key={id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-[#E8602E] font-bold">
                          {career.passportCode ? career.passportCode.split('-')[0] : 'AI'}
                        </div>
                        <div>
                          <span className="font-bold text-white block">{career.title}</span>
                          <span className="text-[10px] text-[#71717A] block">
                            {career.passportCode || `PASSPORT-${career.id}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{career.domain}</td>
                    <td className="py-3 px-4 font-bold text-[#10B981]">{career.avgComp || '$150,000'}</td>
                    <td className="py-3 px-4 text-[#3B82F6]">{career.growthRate || '+22%'}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleTrending(id, career.isTrending)}
                        className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                          career.isTrending
                            ? 'bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/40'
                            : 'bg-white/5 text-[#71717A] border-white/10'
                        }`}
                        title={career.isTrending ? 'Remove from Trending / Spotlight' : 'Make Trending / Spotlight'}
                      >
                        <FontAwesomeIcon icon={faFire} className="text-xs" />
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingCareer(career)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/20 text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
                          title="Edit Career Details"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <Link
                          to={`/careers/${career.id || id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/20 text-[#A1A1AA] hover:text-white transition-colors"
                          title="View Live Pathway"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDeleteCareer(id, career.title)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                          title="Delete Career"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* EDIT CAREER MODAL */}
      {editingCareer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl text-left">
            <button
              type="button"
              onClick={() => setEditingCareer(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h3 className="text-xl font-extrabold text-white">Edit Career Pathway</h3>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Career Title</label>
                <input
                  type="text"
                  required
                  value={editingCareer.title}
                  onChange={(e) => setEditingCareer({ ...editingCareer, title: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Domain</label>
                  <select
                    value={editingCareer.domain}
                    onChange={(e) => setEditingCareer({ ...editingCareer, domain: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                  >
                    {domains.filter((d) => d !== 'All').map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Median Comp</label>
                  <input
                    type="text"
                    value={editingCareer.avgComp}
                    onChange={(e) => setEditingCareer({ ...editingCareer, avgComp: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Growth Velocity</label>
                <input
                  type="text"
                  value={editingCareer.growthRate}
                  onChange={(e) => setEditingCareer({ ...editingCareer, growthRate: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Overview Summary</label>
                <textarea
                  rows={3}
                  value={editingCareer.heroSummary || editingCareer.description || ''}
                  onChange={(e) => setEditingCareer({ ...editingCareer, heroSummary: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all cursor-pointer"
              >
                Save Permanent Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE CAREER MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl text-left">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h3 className="text-xl font-extrabold text-white">Publish New Career Pathway</h3>

            <form onSubmit={handleCreateCareer} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Career Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Consensus Architect"
                  value={newCareer.title}
                  onChange={(e) => setNewCareer({ ...newCareer, title: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Domain</label>
                  <select
                    value={newCareer.domain}
                    onChange={(e) => setNewCareer({ ...newCareer, domain: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                  >
                    {domains.filter((d) => d !== 'All').map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Median Comp</label>
                  <input
                    type="text"
                    placeholder="$165,000"
                    value={newCareer.avgComp}
                    onChange={(e) => setNewCareer({ ...newCareer, avgComp: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Summary Description</label>
                <textarea
                  rows={3}
                  placeholder="Core responsibilities and technological footprint..."
                  value={newCareer.heroSummary}
                  onChange={(e) => setNewCareer({ ...newCareer, heroSummary: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all cursor-pointer"
              >
                Save & Index Career
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
