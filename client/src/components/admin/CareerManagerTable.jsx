import React, { useState } from 'react';
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
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CAREERS_DATABASE } from '../../data/careersData';

export default function CareerManagerTable() {
  const [careersList, setCareersList] = useState(CAREERS_DATABASE);
  const [search, setSearch] = useState('');
  const [filterDomain, setFilterDomain] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  const filtered = careersList.filter((c) => {
    const matchesDomain = filterDomain === 'All' || c.domain === filterDomain;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.domain.toLowerCase().includes(search.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const handleToggleTrending = (id) => {
    setCareersList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isTrending: !c.isTrending } : c))
    );
    toast.success('Updated career trending visibility.');
  };

  const handleDeleteCareer = (id, title) => {
    setCareersList((prev) => prev.filter((c) => c.id !== id));
    toast.success(`Removed "${title}" from Career Bank index.`);
  };

  const handleCreateCareer = (e) => {
    e.preventDefault();
    if (!newCareer.title.trim()) return;

    const created = {
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

    setCareersList([created, ...careersList]);
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
    toast.success(`Published "${created.title}" to Global Career Bank!`);
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Table Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#E8602E] font-mono block">
            Database Catalog Management
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Global Career Bank CRUD Index ({careersList.length} Roles)
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-2.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Career Pathway</span>
        </button>
      </div>

      {/* Search & Domain Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search indexed roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass-input text-xs text-white pl-9 pr-3 py-2.5 rounded-xl focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A]"
          />
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1">
          {domains.map((dom) => (
            <button
              key={dom}
              type="button"
              onClick={() => setFilterDomain(dom)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                filterDomain === dom
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/10'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-black/60 text-[#A1A1AA] uppercase text-[10px] tracking-wider border-b border-white/10">
            <tr>
              <th className="p-4">Career Role</th>
              <th className="p-4">Domain</th>
              <th className="p-4">Target Comp</th>
              <th className="p-4">Growth</th>
              <th className="p-4">Trending</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {filtered.map((career) => (
              <tr key={career.id} className="hover:bg-white/[0.03] transition-colors">
                <td className="p-4 font-sans font-bold text-white flex items-center gap-3 min-w-[220px]">
                  <img
                    src={career.thumbnail}
                    alt={career.title}
                    className="w-9 h-9 rounded-xl object-cover border border-white/10 flex-none"
                  />
                  <div>
                    <span className="block">{career.title}</span>
                    <span className="text-[10px] font-mono text-[#E8602E]">
                      #{career.passportCode || 'ROLE-INDEX'}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-[#D4D4D8]">{career.domain}</td>
                <td className="p-4 font-bold text-white">{career.avgComp || '$150,000'}</td>
                <td className="p-4 text-[#10B981] font-bold">{career.growthRate || '+24%'}</td>
                <td className="p-4">
                  <button
                    type="button"
                    onClick={() => handleToggleTrending(career.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                      career.isTrending
                        ? 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]/40'
                        : 'bg-white/5 text-[#71717A] border-white/10'
                    }`}
                  >
                    <FontAwesomeIcon icon={faFire} className="text-[9px]" />
                    <span>{career.isTrending ? 'Trending' : 'Standard'}</span>
                  </button>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      to={`/careers/${career.id}`}
                      className="p-2 rounded-lg bg-white/[0.06] hover:bg-[#E8602E] text-white transition-colors"
                      title="Inspect Roadmap View"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteCareer(career.id, career.title)}
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition-colors cursor-pointer"
                      title="Delete Role"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Career Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h4 className="text-lg font-bold text-white">Create New Career Pathway</h4>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#A1A1AA] hover:text-white"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <form onSubmit={handleCreateCareer} className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-[#A1A1AA] uppercase text-[10px]">Career Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autonomous Robotics Vision Engineer"
                  value={newCareer.title}
                  onChange={(e) => setNewCareer({ ...newCareer, title: e.target.value })}
                  className="w-full glass-input p-3 rounded-xl text-white font-sans text-xs focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#A1A1AA] uppercase text-[10px]">Domain</label>
                  <select
                    value={newCareer.domain}
                    onChange={(e) => setNewCareer({ ...newCareer, domain: e.target.value })}
                    className="w-full glass-input p-3 rounded-xl text-white text-xs focus:outline-none bg-[#121215]"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Business & Finance">Business & Finance</option>
                    <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                    <option value="Creative & Design">Creative & Design</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#A1A1AA] uppercase text-[10px]">Avg Target Comp</label>
                  <input
                    type="text"
                    placeholder="$165,000"
                    value={newCareer.avgComp}
                    onChange={(e) => setNewCareer({ ...newCareer, avgComp: e.target.value })}
                    className="w-full glass-input p-3 rounded-xl text-white text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#A1A1AA] uppercase text-[10px]">Summary & Overview</label>
                <textarea
                  rows={3}
                  placeholder="Describe the day-to-day impact and engineering scope..."
                  value={newCareer.heroSummary}
                  onChange={(e) => setNewCareer({ ...newCareer, heroSummary: e.target.value })}
                  className="w-full glass-input p-3 rounded-xl text-white font-sans text-xs focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm cursor-pointer"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
