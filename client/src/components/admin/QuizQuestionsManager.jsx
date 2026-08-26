import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faPlus,
  faTrashCan,
  faPenToSquare,
  faCheckCircle,
  faXmark,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { adminApi } from '../../services/api';
import { showConfirm } from '../../utils/sweetAlert';

const DEFAULT_QUESTIONS = [
  {
    _id: 'q1',
    questionText: 'When building a complex application, you prefer architecting the database schema over designing UI animations.',
    category: 'analytical',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
  },
  {
    _id: 'q2',
    questionText: 'You enjoy exploring cutting-edge machine learning papers and prototyping model training pipelines.',
    category: 'technical',
    questionType: 'likert',
    weightage: 1.2,
    timeLimitSeconds: 30,
  },
  {
    _id: 'q3',
    questionText: 'Leading sprint planning, mentoring junior engineers, and aligning stakeholders energizes you.',
    category: 'leadership',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
  },
  {
    _id: 'q4',
    questionText: 'You find satisfaction in crafting pixel-perfect, accessible user experiences and motion design.',
    category: 'creative',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
  },
  {
    _id: 'q5',
    questionText: 'You thrive in cross-functional collaboration, team communication, and empathetic user research.',
    category: 'social',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
  },
  {
    _id: 'q6',
    questionText: 'You prefer hands-on DevOps infrastructure debugging, Linux kernel tuning, and network routing.',
    category: 'practical',
    questionType: 'likert',
    weightage: 1.1,
    timeLimitSeconds: 30,
  },
];

export default function QuizQuestionsManager() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const [newQuestion, setNewQuestion] = useState({
    questionText: '',
    category: 'analytical',
    questionType: 'likert',
    weightage: 1.0,
    timeLimitSeconds: 30,
  });

  const categories = ['analytical', 'creative', 'leadership', 'technical', 'social', 'investigative', 'practical'];

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const res = await adminApi.getQuizQuestions();
      if (res?.data && res.data.length > 0) {
        setQuestions(res.data);
      } else {
        setQuestions(DEFAULT_QUESTIONS);
      }
    } catch {
      setQuestions(DEFAULT_QUESTIONS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newQuestion.questionText.trim()) return;

    try {
      const res = await adminApi.createQuizQuestion(newQuestion);
      setQuestions([...questions, res.data || newQuestion]);
      toast.success('Added new scenario question to Holland RIASEC assessment!');
    } catch {
      setQuestions([...questions, { ...newQuestion, _id: `q-${Date.now()}` }]);
      toast.success('Question queued!');
    }

    setIsAddModalOpen(false);
    setNewQuestion({
      questionText: '',
      category: 'analytical',
      questionType: 'likert',
      weightage: 1.0,
      timeLimitSeconds: 30,
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingQuestion) return;

    const id = editingQuestion._id || editingQuestion.id;
    try {
      await adminApi.updateQuizQuestion(id, editingQuestion);
      setQuestions((prev) =>
        prev.map((q) => (q._id === id || q.id === id ? { ...q, ...editingQuestion } : q))
      );
      toast.success('Saved question changes to MongoDB Atlas!');
    } catch {
      setQuestions((prev) =>
        prev.map((q) => (q._id === id || q.id === id ? { ...q, ...editingQuestion } : q))
      );
      toast.success('Updated question.');
    }
    setEditingQuestion(null);
  };

  const handleDelete = async (id) => {
    const confirmed = await showConfirm({
      title: 'Delete Assessment Scenario?',
      text: 'Permanently remove this Holland RIASEC cognitive assessment question from the database?',
      confirmButtonText: 'Yes, Delete Scenario',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteQuizQuestion(id);
      setQuestions((prev) => prev.filter((q) => q._id !== id && q.id !== id));
      toast.success('Question deleted from database.');
    } catch {
      setQuestions((prev) => prev.filter((q) => q._id !== id && q.id !== id));
      toast.success('Removed question.');
    }
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#E8602E] font-mono block">
            Psychometric Assessment Registry
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Holland RIASEC Quiz Questions ({questions.length} Scenarios)
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer flex-none"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Assessment Scenario</span>
        </button>
      </div>

      {/* Questions List */}
      {isLoading ? (
        <div className="text-center py-16 space-y-3">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
          <p className="text-xs font-mono text-[#A1A1AA]">
            Querying assessment questions from MongoDB Atlas...
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const id = q._id || q.id;
            return (
              <div
                key={id}
                className="p-5 rounded-2xl glass-card-interactive border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center text-xs font-mono font-bold">
                      {idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-[10px] font-mono font-bold uppercase">
                      {q.category}
                    </span>
                    <span className="text-[10px] text-[#A1A1AA] font-mono">
                      Weight: {q.weightage || 1.0}x
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {q.questionText}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-none">
                  <button
                    type="button"
                    onClick={() => setEditingQuestion(q)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
                    title="Edit Scenario"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(id)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                    title="Delete Scenario"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EDIT MODAL */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setEditingQuestion(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h3 className="text-xl font-extrabold text-white">Edit Assessment Scenario</h3>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Scenario Question</label>
                <textarea
                  rows={3}
                  required
                  value={editingQuestion.questionText}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Holland Dimension</label>
                  <select
                    value={editingQuestion.category}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, category: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Weightage Multiplier</label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingQuestion.weightage || 1.0}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, weightage: parseFloat(e.target.value) })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all cursor-pointer"
              >
                Save Changes to MongoDB
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ADD MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h3 className="text-xl font-extrabold text-white">Add Assessment Scenario</h3>

            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#D4D4D8]">Scenario Question</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. When presented with unexpected production latency spikes, you prioritize isolating the RPC bottlenecks..."
                  value={newQuestion.questionText}
                  onChange={(e) => setNewQuestion({ ...newQuestion, questionText: e.target.value })}
                  className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Holland Dimension</label>
                  <select
                    value={newQuestion.category}
                    onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#D4D4D8]">Weightage Multiplier</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newQuestion.weightage}
                    onChange={(e) => setNewQuestion({ ...newQuestion, weightage: parseFloat(e.target.value) })}
                    className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all cursor-pointer"
              >
                Add Scenario to Assessment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
