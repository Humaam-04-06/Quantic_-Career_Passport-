import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faWandMagicSparkles,
  faPaperPlane,
  faXmark,
  faCopy,
  faCheck,
  faArrowUpRightFromSquare,
  faChevronDown,
  faUser,
  faTrashCan,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { chatApi } from '../../services/api';

// Starter Quick Prompt Suggestions based on role
const CANDIDATE_STARTER_PROMPTS = [
  { id: '1', label: '🔑 How do I log in or sign up?', query: 'How do I log in or create an account on PathSeeker?' },
  { id: '2', label: '🧠 How does the RIASEC Quiz work?', query: 'How does the Holland RIASEC cognitive interest assessment work and how does it sync to my 3D passport?' },
  { id: '3', label: '💼 Explore 150+ Career Pathways', query: 'Where can I explore 150+ career pathways and compare roles?' },
  { id: '4', label: '🛡️ How to verify my 3D Passport?', query: 'How do I verify my 3D digital career passport via Email OTP?' },
];

const ADMIN_STARTER_PROMPTS = [
  { id: 'a1', label: '🤖 How many candidates are in Machine Learning?', query: 'How many candidates are in Machine Learning?' },
  { id: 'a2', label: '📊 Show live candidate domain breakdown', query: 'Show me the live candidate distribution and domain telemetry.' },
  { id: 'a3', label: '✍️ How many stories are pending moderation?', query: 'How many community stories are pending moderation?' },
  { id: 'a4', label: '🧭 How do I manage career pathways?', query: 'How do I add, edit, or delete careers in the Career Bank CMS?' },
];

// Function to generate the default clean welcome message
const createDefaultWelcomeMessage = () => [
  {
    id: 'welcome',
    role: 'model',
    text: `### 👋 Hi, I'm your AI Assistant!
I am here to guide you through the **PathSeeker** platform.

Ask me anything about:
* 🧭 **Career Blueprints:** [Explore 150+ Careers](/careers)
* 🧠 **Holland RIASEC Quiz:** [Take the Assessment](/quiz)
* 🛡️ **Digital Passport:** [Open Candidate Dashboard](/dashboard)
* 🎥 **Masterclasses:** [Stream Multimedia Learning](/multimedia)
* 📚 **Engineering Blueprints:** [Download System Design PDFs](/resources)
* 🔑 **Account Access:** [Sign In](/login) or [Register](/register)

*How can I assist you today?*`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export default function AiCareerChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Read current user context in real-time
  const getCurrentUser = () => {
    try {
      return JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
    } catch {
      return null;
    }
  };

  const [currentUser, setCurrentUser] = useState(getCurrentUser);
  const prevUserEmailRef = useRef(currentUser ? (currentUser.email || 'user') : null);

  // Initial message state on mount / refresh:
  // - If user is LOGGED IN: read from sessionStorage (persists across page refresh while logged in)
  // - If user is GUEST / LOGGED OUT: start fresh with createDefaultWelcomeMessage() (does NOT persist across refresh)
  const [messages, setMessages] = useState(() => {
    const initialUser = getCurrentUser();
    if (initialUser && (initialUser.token || initialUser.email)) {
      try {
        const savedSession = sessionStorage.getItem('pathseeker_active_chat_session');
        if (savedSession) {
          return JSON.parse(savedSession);
        }
      } catch {
        // ignore
      }
    }
    return createDefaultWelcomeMessage();
  });

  // Synchronize authentication changes (Login, Logout, Account Switch)
  useEffect(() => {
    const handleAuth = () => {
      const newUser = getCurrentUser();
      const newEmail = newUser ? (newUser.email || 'user') : null;
      const prevEmail = prevUserEmailRef.current;

      setCurrentUser(newUser);

      // 1. User logged out (prevEmail was set, now newEmail is null)
      if (prevEmail !== null && newEmail === null) {
        sessionStorage.removeItem('pathseeker_active_chat_session');
        localStorage.removeItem('pathseeker_chat_history');
        setMessages(createDefaultWelcomeMessage());
      }
      // 2. User logged in from guest state (prevEmail was null, now newEmail is set)
      else if (prevEmail === null && newEmail !== null) {
        sessionStorage.removeItem('pathseeker_active_chat_session');
        localStorage.removeItem('pathseeker_chat_history');
        setMessages(createDefaultWelcomeMessage());
      }
      // 3. User switched to a different account (prevEmail !== newEmail)
      else if (prevEmail !== newEmail) {
        sessionStorage.removeItem('pathseeker_active_chat_session');
        localStorage.removeItem('pathseeker_chat_history');
        setMessages(createDefaultWelcomeMessage());
      }

      prevUserEmailRef.current = newEmail;
    };

    window.addEventListener('storage', handleAuth);
    window.addEventListener('authChange', handleAuth);
    window.addEventListener('userUpdate', handleAuth);
    window.addEventListener('profileChange', handleAuth);

    return () => {
      window.removeEventListener('storage', handleAuth);
      window.removeEventListener('authChange', handleAuth);
      window.removeEventListener('userUpdate', handleAuth);
      window.removeEventListener('profileChange', handleAuth);
    };
  }, []);

  const isAdmin = currentUser && (currentUser.role === 'admin' || currentUser.isAdmin === true);

  // Save messages:
  // - If user is LOGGED IN: save to sessionStorage so it persists across refreshes in the active session
  // - If user is GUEST / LOGGED OUT: do NOT save to storage, so refreshing page immediately resets chat
  useEffect(() => {
    const activeUser = getCurrentUser();
    if (activeUser && (activeUser.token || activeUser.email)) {
      try {
        sessionStorage.setItem('pathseeker_active_chat_session', JSON.stringify(messages));
      } catch {
        // ignore
      }
    } else {
      try {
        sessionStorage.removeItem('pathseeker_active_chat_session');
        localStorage.removeItem('pathseeker_chat_history');
      } catch {
        // ignore
      }
    }
  }, [messages]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Handle Send Message
  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputQuery).trim();
    if (!text || isLoading) return;

    const userMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputQuery('');
    setIsLoading(true);

    try {
      const apiPayload = updatedHistory
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role === 'user' ? 'user' : 'model',
          text: m.text,
        }));

      if (apiPayload.length === 0) {
        apiPayload.push({ role: 'user', text });
      }

      const activeUser = getCurrentUser();
      const res = await chatApi.sendMessage(apiPayload, activeUser);

      const aiMessage = {
        id: 'model-' + Date.now(),
        role: 'model',
        text: res?.reply || 'I am here to guide you through PathSeeker. Ask me anything!',
        model: res?.model || 'AI Assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.warn('AI Chat request fallback:', err);
      const fallbackAi = {
        id: 'model-' + Date.now(),
        role: 'model',
        text: `### 🧭 PathSeeker Navigation Guide

Here are direct links to help you navigate:
* 🔑 **Sign In:** [Go to Login Page](/login)
* 🚀 **Register:** [Create your Passport](/register)
* 🧠 **Holland RIASEC Quiz:** [Start the 7-Step Quiz](/quiz)
* 💼 **150+ Career Blueprints:** [Browse Career Bank](/careers)
* 🛡️ **Dashboard & 3D Passport:** [View Candidate Dashboard](/dashboard)
* 🎥 **Multimedia Masterclasses:** [Watch Sessions](/multimedia)
* 📚 **Blueprint Downloads:** [Browse Resource Library](/resources)

*Feel free to ask another specific question!*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackAi]);
    } finally {
      setIsLoading(false);
    }
  };

  // Copy response text
  const handleCopyMessage = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success('Copied response to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Clear chat conversation
  const handleClearChat = () => {
    const welcome = [
      {
        id: 'welcome-' + Date.now(),
        role: 'model',
        text: `### 🔄 Chat Cleared
Conversation refreshed! How can I help you navigate PathSeeker today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
    setMessages(welcome);
    toast.success('Chat history cleared.');
  };

  // Custom Markdown Parser to render bold, headings, bullets, and Clickable Router Links
  const renderFormattedMarkdown = (rawText) => {
    if (!rawText) return null;

    const lines = rawText.split('\n');

    return (
      <div className="space-y-2 text-xs leading-relaxed">
        {lines.map((line, idx) => {
          const trimmed = line.trim();

          if (!trimmed) return <div key={idx} className="h-1" />;

          // Heading 3: ### Title
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={idx} className="text-sm font-extrabold text-white pt-1 pb-0.5 border-b border-white/10 flex items-center gap-1.5 font-display">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[#E8602E] text-xs" />
                <span>{trimmed.replace(/^###\s+/, '')}</span>
              </h4>
            );
          }

          // Heading 2: ## Title
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={idx} className="text-base font-extrabold text-white pt-1">
                {trimmed.replace(/^##\s+/, '')}
              </h3>
            );
          }

          // Blockquote: > Quote
          if (trimmed.startsWith('> ')) {
            return (
              <div key={idx} className="p-2.5 rounded-xl bg-[#E8602E]/10 border-l-2 border-[#E8602E] text-[#FFE8DE] text-[11px] my-1 font-mono">
                {parseInlineMarkdown(trimmed.replace(/^>\s+/, ''))}
              </div>
            );
          }

          // Bullet List: * item or - item
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-[#E8602E] font-bold text-xs mt-0.5">•</span>
                <span className="text-[#D4D4D8]">
                  {parseInlineMarkdown(trimmed.replace(/^[\*\-]\s+/, ''))}
                </span>
              </div>
            );
          }

          // Numbered List: 1. item
          if (/^\d+\.\s+/.test(trimmed)) {
            const num = trimmed.match(/^(\d+)\.\s+/)[1];
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="w-4 h-4 rounded-full bg-white/10 text-[#E8602E] font-mono font-bold text-[9px] flex items-center justify-center flex-none mt-0.5">
                  {num}
                </span>
                <span className="text-[#D4D4D8]">
                  {parseInlineMarkdown(trimmed.replace(/^\d+\.\s+/, ''))}
                </span>
              </div>
            );
          }

          // Standard Paragraph
          return (
            <p key={idx} className="text-[#D4D4D8]">
              {parseInlineMarkdown(line)}
            </p>
          );
        })}
      </div>
    );
  };

  // Helper to parse bold, backticks, and [Text](/link)
  const parseInlineMarkdown = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseBoldAndCode(text.substring(lastIndex, match.index)));
      }

      const linkLabel = match[1];
      const linkUrl = match[2];

      if (linkUrl.startsWith('/')) {
        parts.push(
          <Link
            key={match.index}
            to={linkUrl}
            className="inline-flex items-center gap-1 font-bold text-[#E8602E] hover:text-[#FF7A45] underline underline-offset-2 px-1 py-0.5 rounded bg-[#E8602E]/15 hover:bg-[#E8602E]/25 transition-all cursor-pointer"
          >
            <span>{linkLabel}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#FFB800] hover:underline"
          >
            <span>{linkLabel}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
          </a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(parseBoldAndCode(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : parseBoldAndCode(text);
  };

  // Helper to parse **bold** and `code`
  const parseBoldAndCode = (str) => {
    if (typeof str !== 'string') return str;

    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseCodePill(str.substring(lastIndex, match.index)));
      }
      parts.push(
        <strong key={match.index} className="text-white font-extrabold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < str.length) {
      parts.push(parseCodePill(str.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : str;
  };

  // Helper to parse `code`
  const parseCodePill = (str) => {
    if (typeof str !== 'string') return str;
    const codeRegex = /`([^`]+)`/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.substring(lastIndex, match.index));
      }
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-black/60 text-[#10B981] font-mono text-[10px] border border-white/10"
        >
          {match[1]}
        </code>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < str.length) {
      parts.push(str.substring(lastIndex));
    }

    return parts.length > 0 ? parts : str;
  };

  const activePrompts = isAdmin ? ADMIN_STARTER_PROMPTS : CANDIDATE_STARTER_PROMPTS;

  return (
    <>
      {/* 1. FLOATING CHAT TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#E8602E] via-[#BC4C22] to-[#FF7A45] text-white font-extrabold text-xs shadow-[0_0_30px_rgba(232,96,46,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/25 backdrop-blur-md"
            title="Ask AI Assistant"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full bg-[#E8602E] opacity-40 blur-sm animate-pulse pointer-events-none" />

            {/* FontAwesome AI Bot Icon */}
            <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-sm shadow-inner flex-none">
              <FontAwesomeIcon icon={faRobot} className="text-white drop-shadow group-hover:rotate-12 transition-transform" />
            </div>

            <div className="text-left leading-tight hidden sm:block">
              <span className="block text-xs font-black text-white">
                AI Assistant
              </span>
            </div>

            {/* Online Live Badge */}
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-black animate-ping" />
          </button>
        )}
      </div>

      {/* 2. CHATBOT MODAL WINDOW */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-[94vw] sm:w-[440px] rounded-3xl glass-panel-ultra border-2 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[620px] max-h-[88vh]'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#121218] via-black to-[#181210] border-b border-white/15 flex items-center justify-between flex-none select-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#E8602E] to-[#BC4C22] text-white flex items-center justify-center text-sm shadow-glow-orange-sm flex-none">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-extrabold text-white font-display">
                    AI Assistant
                  </h3>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[8px] font-mono font-bold">
                    {isAdmin ? 'Admin Clearance' : 'Gemini Live'}
                  </span>
                </div>
                <p className="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Interactive Career & Navigation Engine</span>
                </p>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
                title="Clear Chat History"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>

              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                <FontAwesomeIcon icon={isMinimized ? faChevronDown : faMinus} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[#A1A1AA] hover:text-red-400 hover:bg-white/10 transition-colors text-xs cursor-pointer"
                title="Close"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          {/* Body Content (Visible when not minimized) */}
          {!isMinimized && (
            <>
              {/* Messages Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left custom-scrollbar bg-black/40">
                {/* Starter Question Chips on Initial View */}
                {messages.length <= 1 && (
                  <div className="space-y-2 pb-2">
                    <span className="text-[10px] font-mono uppercase text-[#A1A1AA] block font-bold">
                      💡 {isAdmin ? 'Administrator Insights & Telemetry:' : 'Suggested Topics & Platform Guides:'}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {activePrompts.map((prompt) => (
                        <button
                          key={prompt.id}
                          type="button"
                          onClick={() => handleSendMessage(prompt.query)}
                          className="text-left px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-[#E8602E]/20 text-[#D4D4D8] hover:text-white text-xs border border-white/10 hover:border-[#E8602E]/40 transition-all flex items-center justify-between group cursor-pointer shadow-sm"
                        >
                          <span className="truncate">{prompt.label}</span>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="text-[10px] text-[#A1A1AA] group-hover:text-[#E8602E] transition-colors"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conversation History */}
                {messages.map((msg) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                    >
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#71717A] px-1">
                        <FontAwesomeIcon icon={isUser ? faUser : faRobot} />
                        <span>{isUser ? 'You' : 'AI Assistant'}</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </div>

                      <div
                        className={`relative max-w-[88%] sm:max-w-[85%] rounded-2xl p-3.5 shadow-md ${
                          isUser
                            ? 'bg-gradient-to-br from-[#E8602E] to-[#BC4C22] text-white rounded-tr-none'
                            : 'bg-white/[0.06] text-[#D4D4D8] rounded-tl-none border border-white/10 backdrop-blur-md'
                        }`}
                      >
                        {/* Copy Button for Model Replies */}
                        {!isUser && (
                          <button
                            type="button"
                            onClick={() => handleCopyMessage(msg.text, msg.id)}
                            className="absolute top-2.5 right-2.5 p-1 rounded-lg text-[#71717A] hover:text-white bg-white/5 hover:bg-white/10 transition-colors text-[10px] cursor-pointer"
                            title="Copy Response"
                          >
                            <FontAwesomeIcon icon={copiedId === msg.id ? faCheck : faCopy} />
                          </button>
                        )}

                        {/* Formatted Markdown Body */}
                        {isUser ? (
                          <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        ) : (
                          renderFormattedMarkdown(msg.text)
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Loading / Generating Indicator */}
                {isLoading && (
                  <div className="flex items-start gap-2.5 animate-fadeIn">
                    <div className="w-7 h-7 rounded-xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xs flex-none">
                      <FontAwesomeIcon icon={faRobot} className="animate-spin" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#A1A1AA] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E8602E] animate-ping" />
                      <span>Synthesizing answer...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3.5 bg-black/80 border-t border-white/15 space-y-2 flex-none"
              >
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask about careers, login, quiz, blueprints..."
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    disabled={isLoading}
                    className="w-full glass-input text-xs text-white pl-4 pr-12 py-3 rounded-2xl focus:outline-none placeholder-[#71717A]"
                  />

                  <button
                    type="submit"
                    disabled={!inputQuery.trim() || isLoading}
                    className="absolute right-2 p-2 w-8 h-8 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] disabled:opacity-40 disabled:hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-all shadow-glow-orange-sm cursor-pointer"
                    title="Send Query"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-[#71717A] px-1">
                  <span>AI Assistant • Powered by Google Gemini</span>
                  <span className="text-[#E8602E]">Press Enter ↵ to Send</span>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
