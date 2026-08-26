import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faCircleCheck,
  faTriangleExclamation,
  faLock,
  faKey,
  faFingerprint,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { SECURITY_AUDIT_EVENTS, SYSTEM_HEALTH_METRICS } from '../../data/adminData';

export default function SecurityAuditLog() {
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'warning':
        return 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30';
      case 'success':
        return 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30';
      default:
        return 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30';
    }
  };

  const handleRotateKey = () => {
    toast.success('Rotated Admin API Cryptographic Bearer Token.');
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#10B981] font-mono block">
            Cryptographic Integrity & Audit
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Security Telemetry & Event Stream
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-xs font-mono font-bold flex items-center gap-1.5">
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Postures: 100% Compliant</span>
          </span>

          <button
            type="button"
            onClick={handleRotateKey}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/15 text-xs text-white font-mono flex items-center gap-1.5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faKey} />
            <span>Rotate Key</span>
          </button>
        </div>
      </div>

      {/* Security Health Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Database Cluster</span>
          <span className="text-white font-bold block">{SYSTEM_HEALTH_METRICS.databaseEngine}</span>
        </div>
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Transport Encryption</span>
          <span className="text-[#10B981] font-bold block">{SYSTEM_HEALTH_METRICS.sslGrade}</span>
        </div>
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Cognitive AI Pipeline</span>
          <span className="text-[#FFB800] font-bold block">{SYSTEM_HEALTH_METRICS.geminiAiStatus}</span>
        </div>
      </div>

      {/* Audit Event Stream */}
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#A1A1AA] block">
          Immutable Ledger Audit Events:
        </span>

        <div className="space-y-2.5">
          {SECURITY_AUDIT_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-0.5 rounded-md border text-[10px] font-bold ${getSeverityStyle(
                    evt.severity
                  )}`}
                >
                  {evt.type}
                </span>
                <span className="text-white font-sans font-medium">{evt.description}</span>
              </div>

              <div className="flex items-center gap-3 text-[#71717A] text-[11px] flex-none">
                <span>IP: {evt.ip}</span>
                <span>•</span>
                <span>{evt.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
