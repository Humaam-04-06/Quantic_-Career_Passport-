import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import QuizIntro from '../components/quiz/QuizIntro';
import QuizStepper from '../components/quiz/QuizStepper';
import QuizQuestionCard from '../components/quiz/QuizQuestionCard';
import QuizResults from '../components/quiz/QuizResults';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { analyzeQuizWithGemini } from '../services/geminiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBrain } from '@fortawesome/free-solid-svg-icons';

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role');

  const [view, setView] = useState('intro'); // 'intro' | 'in_progress' | 'analyzing' | 'results'
  const [selectedPersona, setSelectedPersona] = useState(
    initialRole === 'graduate' ? 'Graduate' : initialRole === 'pro' ? 'Professional' : 'Student'
  );
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [answers, setAnswers] = useState({
    technical: 7,
    creative: 4,
    analytical: 4,
    social: 3,
    enterprising: 3,
    conventional: 3,
    workStyle: 'startup',
  });

  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, currentStepIndex]);

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];

  const handleAnswerChange = (val) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.dimension]: val,
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Trigger AI Analysis
      handleCompleteQuiz();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleCompleteQuiz = async () => {
    setView('analyzing');
    try {
      const result = await analyzeQuizWithGemini(answers, selectedPersona);
      setAnalysisResult(result);
      setView('results');
    } catch (error) {
      console.error('Quiz analysis error:', error);
      setView('results');
    }
  };

  const handleRetake = () => {
    setCurrentStepIndex(0);
    setAnalysisResult(null);
    setView('intro');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-[#E8602E]/30 relative overflow-x-clip">
      {/* Notch Navigation */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Orbs */}
      <div className="ambient-orange-spotlight top-32 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-10 opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* VIEW 1: QUIZ INTRO */}
        {view === 'intro' && (
          <QuizIntro
            selectedPersona={selectedPersona}
            onSelectPersona={setSelectedPersona}
            onStart={() => setView('in_progress')}
          />
        )}

        {/* VIEW 2: QUIZ IN PROGRESS */}
        {view === 'in_progress' && (
          <div className="w-full flex flex-col items-center">
            <QuizStepper
              currentStep={currentStepIndex + 1}
              totalSteps={QUIZ_QUESTIONS.length}
            />

            <QuizQuestionCard
              question={currentQuestion}
              value={answers[currentQuestion.dimension]}
              onChange={handleAnswerChange}
              onNext={handleNext}
              onPrev={handlePrev}
              isFirst={currentStepIndex === 0}
              isLast={currentStepIndex === QUIZ_QUESTIONS.length - 1}
            />
          </div>
        )}

        {/* VIEW 3: ANALYZING AI SCREEN */}
        {view === 'analyzing' && (
          <div className="w-full max-w-md p-10 rounded-[2.5rem] glass-panel-ultra text-center space-y-6 animate-pulse">
            <div className="w-16 h-16 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-3xl mx-auto shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faBrain} className="animate-spin" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold font-display text-white mb-2">
                Synthesizing Cognitive Profile...
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Evaluating Holland RIASEC weights, cross-referencing global career trajectories, and generating your custom Career Passport certificate.
              </p>
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF7A45] to-[#E8602E] animate-pulse w-3/4 rounded-full" />
            </div>
          </div>
        )}

        {/* VIEW 4: RESULTS DASHBOARD */}
        {view === 'results' && analysisResult && (
          <QuizResults
            analysis={analysisResult}
            scores={answers}
            persona={selectedPersona}
            onRetake={handleRetake}
          />
        )}
      </main>

      {/* Glass Footer */}
      <Footer />
    </div>
  );
}
