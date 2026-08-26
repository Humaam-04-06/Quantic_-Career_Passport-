import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faSquare,
  faPlus,
  faListCheck,
  faCircleCheck,
  faClock,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function RoadmapChecklist({ tasks, onToggleTask, onAddTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedStage, setSelectedStage] = useState(2);

  const stages = [
    { num: 1, name: 'Stage 1 • Cognitive Alignment' },
    { num: 2, name: 'Stage 2 • Core Engineering Sprints' },
    { num: 3, name: 'Stage 3 • Production Capstones & Placement' },
  ];

  const handleAddNewTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    onAddTask({
      id: `custom-task-${Date.now()}`,
      stageNumber: selectedStage,
      stageName: stages.find((s) => s.num === selectedStage).name,
      title: newTaskTitle.trim(),
      category: 'Custom Goal',
      isCompleted: false,
      timeframe: 'In Progress',
      impactScore: 10,
    });
    setNewTaskTitle('');
    toast.success('Custom sprint goal added to your 90-day roadmap!');
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header & Stage Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faListCheck} />
            <span>Interactive 90-Day Sprint Roadmap</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
            Execution Checklist & Milestone Sprints
          </h2>
        </div>

        {/* Stage Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {stages.map((stg) => {
            const isSelected = selectedStage === stg.num;
            const stageTasks = tasks.filter((t) => t.stageNumber === stg.num);
            const doneCount = stageTasks.filter((t) => t.isCompleted).length;

            return (
              <button
                key={stg.num}
                type="button"
                onClick={() => setSelectedStage(stg.num)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/10'
                }`}
              >
                <span>Stage 0{stg.num}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-[#71717A]'
                  }`}
                >
                  {doneCount}/{stageTasks.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Task List */}
      <div className="space-y-3">
        {tasks
          .filter((t) => t.stageNumber === selectedStage)
          .map((task) => (
            <div
              key={task.id}
              onClick={() => onToggleTask(task.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                task.isCompleted
                  ? 'bg-[#10B981]/[0.06] border-[#10B981]/30 text-[#D4D4D8]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#E8602E]/60 text-white'
              }`}
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="pt-0.5 text-base flex-none">
                  <FontAwesomeIcon
                    icon={task.isCompleted ? faCheckSquare : faSquare}
                    className={task.isCompleted ? 'text-[#10B981]' : 'text-[#71717A]'}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                        task.isCompleted
                          ? 'bg-[#10B981]/20 text-[#10B981]'
                          : 'bg-[#E8602E]/15 text-[#E8602E]'
                      }`}
                    >
                      {task.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#71717A]">
                      {task.timeframe}
                    </span>
                  </div>

                  <h4
                    className={`text-xs sm:text-sm font-bold ${
                      task.isCompleted ? 'line-through opacity-70 text-[#A1A1AA]' : 'text-white'
                    }`}
                  >
                    {task.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-none font-mono text-xs text-[#FFB800]">
                <span>+{task.impactScore} Pts</span>
              </div>
            </div>
          ))}
      </div>

      {/* Add Custom Sprint Goal */}
      <form onSubmit={handleAddNewTask} className="flex gap-3 pt-2">
        <input
          type="text"
          placeholder="Add a custom sprint milestone (e.g. Implement Raft consensus in Go)..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="flex-1 glass-input text-xs sm:text-sm text-white p-3.5 rounded-2xl focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm flex items-center gap-2 cursor-pointer flex-none"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Goal</span>
        </button>
      </form>
    </div>
  );
}
