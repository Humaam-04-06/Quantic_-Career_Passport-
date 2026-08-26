import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faPassport,
  faBrain,
  faServer,
  faArrowTrendUp,
  faArrowsRotate,
  faFileArrowDown,
  faShieldHalved,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { ADMIN_TELEMETRY_KPIS } from '../../data/adminData';

export default function AdminOverviewMetrics({ onFlushCache }) {
  const getIcon = (id) => {
    switch (id) {
      case 'candidates':
        return faUsers;
      case 'passports':
        return faPassport;
      case 'quizzes':
        return faBrain;
      default:
        return faServer;
    }
  };

  const getColor = (id) => {
    switch (id) {
      case 'candidates':
        return 'text-[#E8602E] bg-[#E8602E]/20';
      case 'passports':
        return 'text-[#FFB800] bg-[#FFB800]/20';
      case 'quizzes':
        return 'text-[#06B6D4] bg-[#06B6D4]/20';
      default:
        return 'text-[#10B981] bg-[#10B981]/20';
    }
  };

  const handleExportTelemetry = () => {
    toast.success('Compiling Global Platform Telemetry PDF Report...');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel-ultra p-5 rounded-3xl border border-white/10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8602E] font-bold block">
            System Operations Console
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Global Telemetry & Performance KPIs
          </h2>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={onFlushCache}
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/15 text-[#D4D4D8] hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span>Flush Edge Cache</span>
          </button>

          <button
            type="button"
            onClick={handleExportTelemetry}
            className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Export Telemetry Dossier</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ADMIN_TELEMETRY_KPIS.map((kpi) => (
          <div
            key={kpi.id}
            className="p-6 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4 shadow-glass"
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-11 h-11 rounded-2xl ${getColor(kpi.id)} flex items-center justify-center text-lg shadow-sm`}
              >
                <FontAwesomeIcon icon={getIcon(kpi.id)} />
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[10px] font-mono text-[#D4D4D8] border border-white/10">
                {kpi.badge}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-semibold block">
                {kpi.title}
              </span>
              <strong className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">
                {kpi.value}
              </strong>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#10B981] font-mono font-bold">
              <span>{kpi.growth}</span>
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
