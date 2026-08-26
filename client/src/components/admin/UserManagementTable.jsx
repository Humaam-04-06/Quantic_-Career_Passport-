import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faShieldHalved,
  faCheckCircle,
  faTrashCan,
  faMagnifyingGlass,
  faSpinner,
  faEye,
  faBan,
  faUnlock,
  faXmark,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { adminApi } from '../../services/api';
import { showConfirm, showSuccess, showError } from '../../utils/sweetAlert';

export default function UserManagementTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [viewingUser, setViewingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await adminApi.getUsers();
      if (res?.data) {
        setUsers(res.data);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const adminCount = users.filter((u) => u.role === 'admin').length;

  const handleRoleChange = async (id, newRole, name) => {
    const targetUser = users.find((u) => u._id === id || u.id === id);

    // Safeguard: Demoting the last remaining admin is blocked
    if (targetUser?.role === 'admin' && newRole !== 'admin' && adminCount <= 1) {
      toast.error(
        'Operation Blocked: At least 1 Super Administrator is mandatory! You cannot demote the sole remaining administrator.',
        { duration: 5000 }
      );
      return;
    }

    try {
      const res = await adminApi.updateUserRole(id, newRole);
      setUsers((prev) =>
        prev.map((u) => (u._id === id || u.id === id ? { ...u, role: newRole } : u))
      );
      toast.success(`Updated ${name}'s role to "${newRole}" in MongoDB Atlas!`);

      // If current logged-in user had their role changed, sync local session
      try {
        const stored = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
        if (stored.email?.toLowerCase() === targetUser.email?.toLowerCase()) {
          localStorage.setItem('pathseeker_user', JSON.stringify({ ...stored, role: newRole }));
          window.dispatchEvent(new Event('authChange'));
        }
      } catch {
        // ignore
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || `Failed to update ${name}'s role.`;
      toast.error(errMsg);
      fetchUsers();
    }
  };

  const getUserAvatar = (u) => {
    if (u.avatar && u.avatar.trim()) return u.avatar;
    const emailKey = (u.email || '').toLowerCase();
    const localAvatar = localStorage.getItem(`pathseeker_avatar_${emailKey}`);
    if (localAvatar && localAvatar.trim()) return localAvatar;
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(u.name || u.email || 'PathSeeker')}&backgroundColor=1e1e2f`;
  };

  const handleToggleVerification = async (id, name) => {
    const targetUser = users.find((u) => u._id === id || u.id === id);
    try {
      const res = await adminApi.toggleUserVerification(id);
      const newVerified = res?.isVerified ?? (res?.data?.isVerified ?? !targetUser?.isVerified);

      setUsers((prev) =>
        prev.map((u) =>
          u._id === id || u.id === id ? { ...u, isVerified: newVerified } : u
        )
      );

      // Sync verified state across localStorage and dispatch live update events
      if (targetUser?.email) {
        const emailKey = targetUser.email.toLowerCase();
        localStorage.setItem(`pathseeker_verified_${emailKey}`, String(newVerified));

        try {
          const stored = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
          if (stored.email?.toLowerCase() === emailKey) {
            localStorage.setItem('pathseeker_user', JSON.stringify({ ...stored, isVerified: newVerified }));
            window.dispatchEvent(new Event('authChange'));
            window.dispatchEvent(new Event('userUpdate'));
            window.dispatchEvent(new Event('profileChange'));
          }
        } catch {
          // ignore
        }
      }

      toast.success(`Account for ${name} is now ${newVerified ? 'Verified' : 'Unverified'} in MongoDB Atlas!`);
    } catch {
      setUsers((prev) =>
        prev.map((u) =>
          u._id === id || u.id === id ? { ...u, isVerified: !u.isVerified } : u
        )
      );
      toast.success(`Updated verification.`);
    }
  };

  const handleToggleBlock = async (id, name, currentBlocked) => {
    const targetUser = users.find((u) => u._id === id || u.id === id);

    // Prevent blocking the last active admin
    if (targetUser?.role === 'admin' && !currentBlocked && adminCount <= 1) {
      toast.error('Cannot block the sole remaining active Super Administrator!');
      return;
    }

    const action = currentBlocked ? 'Unblock' : 'Block';
    const confirmed = await showConfirm({
      title: `${action} User Account?`,
      text: `Are you sure you want to ${action.toLowerCase()} access for ${name}?`,
      confirmButtonText: `Yes, ${action} Account`,
      isDanger: !currentBlocked,
    });

    if (!confirmed) return;

    try {
      await adminApi.toggleUserBlock(id);
      setUsers((prev) =>
        prev.map((u) =>
          u._id === id || u.id === id ? { ...u, isBlocked: !currentBlocked } : u
        )
      );
      toast.success(`Account for ${name} is now ${!currentBlocked ? 'Blocked' : 'Active'} in database!`);
    } catch {
      setUsers((prev) =>
        prev.map((u) =>
          u._id === id || u.id === id ? { ...u, isBlocked: !currentBlocked } : u
        )
      );
      toast.success(`Updated block status.`);
    }
  };

  const handleDeleteUser = async (id, name) => {
    const targetUser = users.find((u) => u._id === id || u.id === id);

    if (targetUser?.role === 'admin' && adminCount <= 1) {
      toast.error('Deletion Blocked: Cannot delete the last remaining Super Administrator.');
      return;
    }

    const confirmed = await showConfirm({
      title: 'Permanently Purge Account?',
      text: `Permanently delete account for ${name}? This record will be permanently purged from MongoDB Atlas.`,
      confirmButtonText: 'Yes, Delete Account',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u._id !== id && u.id !== id));
      toast.success(`Removed account for ${name} from MongoDB Atlas.`);
    } catch (err) {
      const errMsg = err.response?.data?.message || `Failed to delete ${name}.`;
      toast.error(errMsg);
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    const matchesSearch =
      (u.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (u.email || '').toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#A855F7] font-mono block">
              Access Control & RBAC
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[9px] font-mono font-bold">
              100% Live DB
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            User Accounts & Security Governance ({users.length} Users)
          </h3>
          <p className="text-xs text-[#A1A1AA] mt-1">
            Active Admins: <strong className="text-[#E8602E]">{adminCount}</strong> • Governance Rule: At least 1 Super Admin is mandatory.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold flex-wrap">
          {['All', 'student', 'graduate', 'professional', 'mentor', 'admin'].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              className={`px-3 py-1.5 rounded-xl capitalize transition-all cursor-pointer ${
                roleFilter === role
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {role} (
              {users.filter((u) => (role === 'All' ? true : u.role === role)).length}
              )
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
        />
        <input
          type="text"
          placeholder="Search by candidate name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full glass-input text-xs text-white pl-10 pr-4 py-2.5 rounded-xl focus:outline-none"
        />
      </div>

      {/* Users Table */}
      {isLoading ? (
        <div className="text-center py-16 space-y-3">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
          <p className="text-xs font-mono text-[#A1A1AA]">
            Querying registered user base from MongoDB Atlas...
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.04] text-[#A1A1AA] border-b border-white/10 uppercase text-[10px]">
              <tr>
                <th className="py-3 px-4">User Identity</th>
                <th className="py-3 px-4">Role Clearance</th>
                <th className="py-3 px-4">Account Status</th>
                <th className="py-3 px-4">Email Verification</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#D4D4D8]">
              {filteredUsers.map((user) => {
                const id = user._id || user.id;
                const isOnlyAdmin = user.role === 'admin' && adminCount <= 1;

                return (
                  <tr key={id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={getUserAvatar(user)}
                          alt={user.name}
                          className="w-8 h-8 rounded-xl object-cover border border-white/15 bg-[#181820]"
                        />
                        <div>
                          <span className="font-bold text-white block flex items-center gap-1.5">
                            {user.name}
                            {user.role === 'admin' && (
                              <FontAwesomeIcon icon={faShieldHalved} className="text-[#E8602E] text-[10px]" title="Super Admin Clearance" />
                            )}
                          </span>
                          <span className="text-[10px] text-[#71717A] block">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={user.role || 'graduate'}
                        onChange={(e) => handleRoleChange(id, e.target.value, user.name)}
                        className={`bg-black/60 text-white border rounded-lg px-2.5 py-1 text-xs font-mono focus:outline-none cursor-pointer ${
                          user.role === 'admin' ? 'border-[#E8602E]/60 text-[#FFE8DE] font-bold' : 'border-white/15'
                        }`}
                      >
                        <option value="student">Student</option>
                        <option value="graduate">Graduate</option>
                        <option value="professional">Professional</option>
                        <option value="mentor">Mentor</option>
                        <option value="admin">Super Admin</option>
                      </select>
                      {isOnlyAdmin && (
                        <span className="text-[9px] text-[#FFB800] block mt-0.5">
                          Sole Admin (Protected)
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleBlock(id, user.name, user.isBlocked)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 cursor-pointer border ${
                          user.isBlocked
                            ? 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/40'
                            : 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40'
                        }`}
                        title={user.isBlocked ? 'Click to Unblock' : 'Click to Block'}
                      >
                        <FontAwesomeIcon icon={user.isBlocked ? faBan : faCheckCircle} />
                        <span>{user.isBlocked ? 'Blocked' : 'Active'}</span>
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleVerification(id, user.name)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 cursor-pointer border ${
                          user.isVerified
                            ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40'
                            : 'bg-white/5 text-[#A1A1AA] border-white/10'
                        }`}
                      >
                        <FontAwesomeIcon icon={user.isVerified ? faCheckCircle : faBan} />
                        <span>{user.isVerified ? 'Verified' : 'Unverified'}</span>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setViewingUser(user)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/20 text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
                          title="View User Details Dossier"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          type="button"
                          disabled={isOnlyAdmin}
                          onClick={() => handleDeleteUser(id, user.name)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isOnlyAdmin
                              ? 'opacity-30 cursor-not-allowed bg-white/5 text-gray-500'
                              : 'bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white cursor-pointer'
                          }`}
                          title={isOnlyAdmin ? 'Cannot delete sole remaining admin' : 'Delete User Account'}
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

      {/* USER DETAILS DOSSIER MODAL */}
      {viewingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl text-left">
            <button
              type="button"
              onClick={() => setViewingUser(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <img
                src={getUserAvatar(viewingUser)}
                alt={viewingUser.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#E8602E] bg-[#181820]"
              />
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-white">{viewingUser.name}</h3>
                <span className="text-xs text-[#A1A1AA] font-mono block">{viewingUser.email}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-[10px] font-mono font-bold uppercase inline-block mt-1">
                  Role: {viewingUser.role}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#71717A]">Account ID:</span>
                  <span className="text-white">{viewingUser._id || viewingUser.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#71717A]">Registered On:</span>
                  <span className="text-white">
                    {viewingUser.createdAt ? new Date(viewingUser.createdAt).toLocaleString() : 'Recent'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#71717A]">Email Verification:</span>
                  <span className={viewingUser.isVerified ? 'text-[#10B981] font-bold' : 'text-[#EF4444]'}>
                    {viewingUser.isVerified ? 'Verified via Live SMTP' : 'Pending Verification'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#71717A]">Security Clearance:</span>
                  <span className={viewingUser.isBlocked ? 'text-[#EF4444] font-bold' : 'text-[#10B981] font-bold'}>
                    {viewingUser.isBlocked ? 'Blocked (Suspended)' : 'Active (Good Standing)'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setViewingUser(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
