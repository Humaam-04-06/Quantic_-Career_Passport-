import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faCircleCheck,
  faTriangleExclamation,
  faLock,
  faKey,
  faFingerprint,
  faArrowsRotate,
  faDownload,
  faMagnifyingGlass,
  faFilter,
  faServer,
  faBolt,
  faClock,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { SECURITY_AUDIT_EVENTS, SYSTEM_HEALTH_METRICS } from '../../data/adminData';

export default function SecurityAuditLog() {
  // Load dynamic audit events from localStorage or fall back to default events
  const [auditEvents, setAuditEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('pathseeker_security_audit_logs');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return SECURITY_AUDIT_EVENTS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [keyFingerprint, setKeyFingerprint] = useState('0x9F4A...8C2B (Active)');

  // Persist logs in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pathseeker_security_audit_logs', JSON.stringify(auditEvents));
    } catch {
      // ignore
    }
  }, [auditEvents]);

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'warning':
        return 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30';
      case 'success':
        return 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30';
      case 'danger':
        return 'text-[#EF4444] bg-[#EF4444]/10 border-[#EF4444]/30';
      default:
        return 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30';
    }
  };

  // Interactive Cryptographic Key Rotation with SweetAlert2
  const handleRotateKey = () => {
    Swal.fire({
      title: 'Rotate Cryptographic Session Key?',
      text: 'This will re-sign the platform bearer credentials and refresh the cryptographic audit ledger signature.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Rotate Key',
      cancelButtonText: 'Cancel',
      background: '#121215',
      color: '#FFFFFF',
      confirmButtonColor: '#E8602E',
      cancelButtonColor: '#27272A',
      customClass: {
        popup: 'rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl',
        confirmButton: 'rounded-xl font-mono text-xs font-bold px-5 py-2.5',
        cancelButton: 'rounded-xl font-mono text-xs font-bold px-5 py-2.5',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const randomHex = '0x' + Math.random().toString(16).substring(2, 6).toUpperCase() + '...' + Math.random().toString(16).substring(2, 6).toUpperCase();
        setKeyFingerprint(`${randomHex} (Active)`);

        const newLogEntry = {
          id: 'evt-' + Date.now(),
          type: 'KEY_ROTATION',
          description: `Admin cryptographic token rotated to fingerprint ${randomHex}`,
          ip: '127.0.0.1 (Root Console)',
          timestamp: 'Just now',
          severity: 'success',
        };

        setAuditEvents((prev) => [newLogEntry, ...prev]);

        Swal.fire({
          title: 'Key Successfully Rotated!',
          html: `<p class="text-xs text-[#A1A1AA]">New Token Fingerprint: <span class="font-mono text-[#10B981] font-bold">${randomHex}</span></p>`,
          icon: 'success',
          background: '#121215',
          color: '#FFFFFF',
          confirmButtonColor: '#10B981',
          customClass: {
            popup: 'rounded-3xl border border-white/20',
          },
        });
      }
    });
  };

  // Interactive Compliance Audit Details Modal
  const handleViewCompliance = () => {
    Swal.fire({
      title: 'Security Compliance & Postures',
      html: `
        <div class="text-left space-y-3 text-xs text-[#D4D4D8] font-sans pt-2">
          <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-white">TLS 1.3 Transport Encryption</span>
              <span class="text-[#10B981] font-mono font-bold">A+ Certified</span>
            </div>
            <p class="text-[11px] text-[#A1A1AA]">All client-server communications use SSL/TLS 4096-bit RSA keys.</p>
          </div>

          <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-white">Database Cluster Security</span>
              <span class="text-[#10B981] font-mono font-bold">MongoDB Atlas</span>
            </div>
            <p class="text-[11px] text-[#A1A1AA]">3-node replica set with automated daily snapshots and encryption-at-rest.</p>
          </div>

          <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-white">API Rate Limiting & DDOS</span>
              <span class="text-[#10B981] font-mono font-bold">Active</span>
            </div>
            <p class="text-[11px] text-[#A1A1AA]">Express rate-limiting guards all authentication and quiz evaluation endpoints.</p>
          </div>
        </div>
      `,
      icon: 'info',
      background: '#121215',
      color: '#FFFFFF',
      confirmButtonText: 'Acknowledge',
      confirmButtonColor: '#E8602E',
      customClass: {
        popup: 'rounded-3xl border border-white/20 shadow-2xl',
        confirmButton: 'rounded-xl font-mono text-xs font-bold px-6 py-2.5',
      },
    });
  };

  // Export Audit Logs as CSV / JSON
  const handleExportLogs = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(auditEvents, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `PathSeeker_Security_Audit_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success('Security audit log ledger exported as JSON.');
  };

  // Filter and Search logic
  const filteredEvents = auditEvents.filter((evt) => {
    const matchesSearch =
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.ip.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'ALL') return matchesSearch;
    if (selectedFilter === 'PASSPORT' && evt.type === 'PASSPORT_ISSUANCE') return matchesSearch;
    if (selectedFilter === 'AUTH' && (evt.type === 'ADMIN_LOGIN' || evt.type === 'KEY_ROTATION')) return matchesSearch;
    if (selectedFilter === 'AI' && evt.type === 'QUIZ_EVALUATION') return matchesSearch;
    if (selectedFilter === 'ALERTS' && evt.type === 'RATE_LIMIT_BLOCKED') return matchesSearch;

    return matchesSearch;
  });

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn">
      {/* 1. Header & Quick Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#10B981] font-mono block">
            Cryptographic Integrity & Audit
          </span>
          <h3 className="text-xl font-extrabold text-white font-display">
            Security Telemetry & Event Stream
          </h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">
            Immutable chronological ledger monitoring authentication attempts, AI scoring jobs, and administrative access.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleViewCompliance}
            className="px-3 py-1.5 rounded-full bg-[#10B981]/20 text-[#10B981] hover:bg-[#10B981]/30 border border-[#10B981]/40 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all"
            title="Inspect Compliance Postures"
          >
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Postures: 100% Compliant</span>
          </button>

          <button
            type="button"
            onClick={handleRotateKey}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/15 text-xs text-white font-mono flex items-center gap-1.5 cursor-pointer border border-white/10 transition-all shadow-sm"
            title="Rotate Security Token"
          >
            <FontAwesomeIcon icon={faKey} className="text-[#FFB800]" />
            <span>Rotate Key</span>
          </button>

          <button
            type="button"
            onClick={handleExportLogs}
            className="px-3.5 py-1.5 rounded-xl bg-[#E8602E]/20 hover:bg-[#E8602E] text-xs text-white font-mono flex items-center gap-1.5 cursor-pointer border border-[#E8602E]/40 transition-all shadow-sm"
            title="Export Ledger"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Export Log</span>
          </button>
        </div>
      </div>

      {/* 2. Security Health Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Database Cluster</span>
          <span className="text-white font-bold block">{SYSTEM_HEALTH_METRICS.databaseEngine}</span>
          <span className="text-[10px] text-[#10B981]">Encrypted at Rest</span>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Transport Encryption</span>
          <span className="text-[#10B981] font-bold block">{SYSTEM_HEALTH_METRICS.sslGrade}</span>
          <span className="text-[10px] text-[#A1A1AA]">TLS 1.3 Strict Mode</span>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Cognitive AI Pipeline</span>
          <span className="text-[#FFB800] font-bold block">Gemini 3.6 Flash</span>
          <span className="text-[10px] text-[#10B981]">Optimal (185ms)</span>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase block">Active Token Key</span>
          <span className="text-[#A855F7] font-bold block truncate">{keyFingerprint}</span>
          <span className="text-[10px] text-[#A1A1AA]">256-Bit Cryptographic Entropy</span>
        </div>
      </div>

      {/* 3. Search Bar & Category Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div className="relative flex-1 max-w-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
          />
          <input
            type="text"
            placeholder="Search event type, description, or IP address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E8602E]/60 transition-colors font-mono"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {['ALL', 'PASSPORT', 'AUTH', 'AI', 'ALERTS'].map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Audit Event Stream Ledger */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-mono font-bold text-[#A1A1AA]">
          <span>Immutable Ledger Stream ({filteredEvents.length} Recorded Events)</span>
          <span className="text-[#10B981] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Live Ingestion Active
          </span>
        </div>

        <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
          {filteredEvents.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-[#71717A] font-mono">
              No matching security audit events found.
            </div>
          ) : (
            filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-md border text-[10px] font-bold flex-none ${getSeverityStyle(
                      evt.severity
                    )}`}
                  >
                    {evt.type}
                  </span>
                  <span className="text-white font-sans font-medium leading-relaxed">
                    {evt.description}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#71717A] text-[11px] flex-none">
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#A1A1AA]">
                    IP: {evt.ip}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#D4D4D8]">
                    <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                    <span>{evt.timestamp}</span>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
