import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faEnvelope,
  faLock,
  faUser,
  faGraduationCap,
  faPhone,
  faEye,
  faEyeSlash,
  faBolt,
  faArrowRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

import ProfileSetupModal from './ProfileSetupModal.jsx';
import ForgotPasswordModal from './ForgotPasswordModal.jsx';
import { DEFAULT_AVATAR } from '../../data/avatarsData.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const DEMO_ACCOUNTS = {
  'student@pathseeker.ai': {
    name: 'Sarah Chen',
    email: 'student@pathseeker.ai',
    password: 'password123',
    role: 'Student',
    targetRole: 'AI Systems Engineer',
    targetCompany: 'Google DeepMind',
    avatar: DEFAULT_AVATAR,
    skills: ['Python', 'Machine Learning', 'Data Structures', 'PyTorch'],
    isVerified: true,
  },
  'graduate@pathseeker.ai': {
    name: 'Marcus Vance',
    email: 'graduate@pathseeker.ai',
    password: 'password123',
    role: 'Graduate',
    targetRole: 'Cloud Solutions Architect',
    targetCompany: 'AWS / Microsoft',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    skills: ['AWS / Cloud', 'Docker', 'Kubernetes', 'Go'],
    isVerified: true,
  },
  'pro@pathseeker.ai': {
    name: 'Elena Rostova',
    email: 'pro@pathseeker.ai',
    password: 'password123',
    role: 'Professional',
    targetRole: 'Principal Systems Architect',
    targetCompany: 'Anthropic',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    skills: ['Distributed Systems', 'Rust', 'System Design', 'Cybersecurity'],
    isVerified: true,
  },
  'admin@pathseeker.ai': {
    name: 'Super Administrator',
    email: 'admin@pathseeker.ai',
    password: 'Admin@12345',
    role: 'admin',
    targetRole: 'Platform Administrator',
    targetCompany: 'PathSeeker Core',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    skills: ['Platform Governance', 'Audit', 'System Architecture'],
    isVerified: true,
  },
};

export default function VoltAuthCard({ initialMode = 'login' }) {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(initialMode === 'register' || initialMode === 'signup');
  const [mood, setMood] = useState('idle');
  const [bubbleText, setBubbleText] = useState("Hi. I'm Volt. I guard your Career Passport.");
  const [bubblePop, setBubblePop] = useState(false);

  // Setup modal state
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [tempUser, setTempUser] = useState(null);

  // Robot Head 3D transforms
  const [headPos, setHeadPos] = useState({ lx: 0, ly: 0, ry: 0, rx: 0 });
  const [isTurned, setIsTurned] = useState(false);
  const [isHyped, setIsHyped] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Login Fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPass, setShowLoginPass] = useState(false);

  // Sign Up Fields
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupRole, setSignupRole] = useState('Student');
  const [signupPassword, setSignupPassword] = useState('');
  const [showSignupPass, setShowSignupPass] = useState(false);

  // Password strength meter score (0-4) and label
  const [passScore, setPassScore] = useState(0);
  const [panelLabel, setPanelLabel] = useState('NOT LOOKING');

  const lastSaidRef = useRef('');
  const isDoneRef = useRef(false);
  const robotRef = useRef(null);
  const sceneRef = useRef(null);

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const say = (text) => {
    if (text === lastSaidRef.current) return;
    lastSaidRef.current = text;
    setBubbleText(text);
    setBubblePop(false);
    setTimeout(() => setBubblePop(true), 10);
  };

  // Eye tracking & Head Tilt
  const lookAndTilt = (lx, ly, ry, rx) => {
    setHeadPos({ lx, ly, ry, rx });
  };

  const followTyping = (val) => {
    const ratio = Math.min(val.length / 22, 1);
    lookAndTilt(-6 + 12 * ratio, 5, -5 + 10 * ratio, -8);
  };

  // Password Score Calculation
  const evalPassword = (val) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[a-z]/.test(val) && /[A-Z]/.test(val)) score++;
    if (/\d/.test(val)) score++;
    if (/[^a-zA-Z0-9]/.test(val)) score++;
    if (val.length > 0 && score === 0) score = 1;

    setPassScore(score);
    setPanelLabel(
      val.length === 0
        ? 'NOT LOOKING'
        : ['NOT LOOKING', 'TOO SHORT', 'GETTING THERE', 'STRONG', 'FORT KNOX'][score]
    );
  };

  // Mode Switch Handlers
  const handleToggleMode = (signupMode) => {
    setIsSignup(signupMode);
    setIsTurned(false);
    lookAndTilt(0, 0, 0, 0);
    setMood('watching');

    if (signupMode) {
      say('Creating your Career Passport? State your full name below.');
    } else {
      say('Welcome back! Enter your verified credentials.');
    }
  };

  // Form Field Events - Focus & Input
  const handleNameFocus = (val) => {
    setIsTurned(false);
    setMood('watching');
    say(pick(["A future industry leader. State your name.", "Candidate profile detected. Go on, I'm watching."]));
    followTyping(val);
  };

  const handleNameInput = (val) => {
    setSignupName(val);
    followTyping(val);
    const v = val.trim();
    if (v.length >= 2) say(`${v}. Solid name for a Career Passport.`);
    else if (v.length === 0) say("Deleted. Ready when you are.");
  };

  const handleEmailFocus = (val) => {
    setIsTurned(false);
    setMood('watching');
    say("Enter your primary email for Career Passport authentication.");
    followTyping(val);
  };

  const handleEmailInput = (val, setVal) => {
    setVal(val);
    followTyping(val);
    if (EMAIL_RE.test(val.trim())) {
      setMood('happy');
      say(pick(['Valid institutional / personal email detected. Excellent.', 'Email verified by Volt sensors. Ready!']));
    } else {
      setMood('watching');
      if (val.includes('@')) say('Almost there. Check domain formatting.');
    }
  };

  const handlePassFocus = () => {
    setMood('shy');
    setIsTurned(true);
    lookAndTilt(0, 0, 0, 0);
    say('Password input active. Turning around for maximum biometric privacy!');
  };

  const handlePassBlur = (e) => {
    if (e.relatedTarget?.classList?.contains('peek')) return;
    setIsTurned(false);
  };

  const handlePassInput = (val, setVal) => {
    setVal(val);
    evalPassword(val);
  };

  const handlePeekToggle = (isLoginPass) => {
    if (isLoginPass) {
      const show = !showLoginPass;
      setShowLoginPass(show);
      if (show) say("Password revealed? Good thing I'm facing the firewall.");
    } else {
      const show = !showSignupPass;
      setShowSignupPass(show);
      if (show) say("Password revealed? Good thing I'm facing the firewall.");
    }
  };

  // Button Hover & Press Animation
  const handleHype = (on) => {
    if (isDoneRef.current || isPressed) return;
    setIsHyped(on);
    if (on) {
      setIsTurned(false);
      setMood('excited');
      say(pick(['Ready to authenticate? Press the button.', 'Unlocking your verified Career Passport!']));
    } else {
      setMood('idle');
      say('Volt is standing by.');
    }
  };

  const handlePointerDown = () => {
    setIsPressed(true);
    setMood('pressed');
    say(pick(['Processing cryptographic hash...', 'Authenticating credentials...', 'Syncing pathway nodes...']));
  };

  const handlePointerUp = () => {
    setTimeout(() => {
      setIsPressed(false);
      setMood(isDoneRef.current ? 'success' : 'excited');
    }, 340);
  };

  // Submit Handler
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    if (isDoneRef.current) return;

    let complaint = null;

    if (formType === 'login') {
      if (!EMAIL_RE.test(loginEmail.trim())) {
        complaint = 'Please enter a valid email address.';
      } else if (loginPassword.length < 6) {
        complaint = 'Password must be at least 6 characters.';
      }
    } else {
      if (signupName.trim().length < 2) {
        complaint = 'Please provide your full name.';
      } else if (!EMAIL_RE.test(signupEmail.trim())) {
        complaint = 'Please enter a valid email address.';
      } else if (signupPassword.length < 6) {
        complaint = 'Password must be at least 6 characters.';
      }
    }

    if (complaint) {
      setIsShaking(true);
      setMood('error');
      say(complaint);
      toast.error(complaint);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    // SUCCESS SIMULATION
    isDoneRef.current = true;
    setIsSuccess(true);
    setIsSpinning(true);
    setMood('success');

    if (formType === 'signup') {
      const initialUser = {
        name: signupName.trim(),
        email: signupEmail.trim(),
        role: signupRole || 'Student',
        password: signupPassword,
        avatar: DEFAULT_AVATAR,
        token: 'jwt-auth-token-' + Date.now(),
      };
      setTempUser(initialUser);
      say("Awesome! Let's choose your official Passport ID avatar.");
      
      setTimeout(() => {
        setShowSetupModal(true);
      }, 700);
      return;
    }

    // Login Flow with Backend Database Authentication
    const userEmail = loginEmail.trim().toLowerCase();
    let authenticatedUser = null;
    let authFailedReason = null;

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, password: loginPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const savedCustomAvatar = localStorage.getItem(`pathseeker_avatar_${userEmail}`);
        authenticatedUser = {
          ...data.user,
          avatar: savedCustomAvatar || (data.user.avatar && data.user.avatar.trim() ? data.user.avatar : DEFAULT_AVATAR),
          token: data.token,
          password: loginPassword,
        };
      } else if (res.status === 401) {
        authFailedReason = 'invalid_credentials';
      }
    } catch {
      // Backend offline or local fallback
    }

    // If database login was rejected with invalid credentials
    if (authFailedReason === 'invalid_credentials') {
      setIsShaking(true);
      setMood('error');
      isDoneRef.current = false;
      setIsSuccess(false);
      setIsSpinning(false);
      say("Invalid credentials. Use 'Forgot Password?' if you need an email reset code.");
      toast.error("Invalid email or password. Please check your credentials.");
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    // If backend was unreachable or account exists only locally
    if (!authenticatedUser) {
      let existingAccount = null;
      try {
        const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
        existingAccount = accounts[userEmail] || DEMO_ACCOUNTS[userEmail];
      } catch {
        existingAccount = DEMO_ACCOUNTS[userEmail];
      }

      // Reject un-registered accounts trying to log in
      if (!existingAccount) {
        setIsShaking(true);
        setMood('error');
        isDoneRef.current = false;
        setIsSuccess(false);
        setIsSpinning(false);
        say("No registered account found! Please click 'Create account' below to register.");
        toast.error("No account found with this email. Please create an account first.");
        setTimeout(() => setIsShaking(false), 500);
        return;
      }

      // Check password if saved on account
      if (existingAccount.password && existingAccount.password !== loginPassword) {
        setIsShaking(true);
        setMood('error');
        isDoneRef.current = false;
        setIsSuccess(false);
        setIsSpinning(false);
        say("Invalid password. Use 'Forgot Password?' if you need an email reset code.");
        toast.error("Invalid password. Please check your credentials.");
        setTimeout(() => setIsShaking(false), 500);
        return;
      }

      const savedCustomAvatar = localStorage.getItem(`pathseeker_avatar_${userEmail}`);
      authenticatedUser = {
        ...existingAccount,
        avatar: savedCustomAvatar || existingAccount.avatar || DEFAULT_AVATAR,
        password: loginPassword,
        token: 'jwt-auth-token-' + Date.now(),
      };
    }

    // Synchronize latest verified password into local accounts cache
    try {
      const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
      accounts[userEmail] = {
        ...(accounts[userEmail] || {}),
        ...authenticatedUser,
        password: loginPassword,
      };
      localStorage.setItem('pathseeker_accounts', JSON.stringify(accounts));
    } catch {
      // ignore
    }

    // Authorized Access Granted
    say('Access Granted! Welcome to PathSeeker Career Passport.');
    localStorage.setItem('pathseeker_user', JSON.stringify(authenticatedUser));
    window.dispatchEvent(new Event('authChange'));
    window.dispatchEvent(new Event('userUpdate'));
    window.dispatchEvent(new Event('profileChange'));

    toast.success(`Welcome back, ${authenticatedUser.name}!`);

    setTimeout(() => {
      if (authenticatedUser.role === 'admin' || authenticatedUser.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }, 1000);
  };

  const handleSetupComplete = async (completedData) => {
    const fullAccountData = {
      ...completedData,
      password: completedData.password || tempUser?.password || signupPassword || 'password123',
    };

    try {
      const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
      accounts[fullAccountData.email.toLowerCase()] = fullAccountData;
      localStorage.setItem('pathseeker_accounts', JSON.stringify(accounts));
    } catch {
      // ignore
    }

    localStorage.setItem('pathseeker_user', JSON.stringify(fullAccountData));
    window.dispatchEvent(new Event('authChange'));

    // Trigger backend registration to store in MongoDB Atlas and dispatch real Welcome Email
    try {
      await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullAccountData.name,
          email: fullAccountData.email.toLowerCase(),
          password: fullAccountData.password,
          role: (fullAccountData.role || 'student').toLowerCase(),
          skills: fullAccountData.skills || [],
          avatar: fullAccountData.avatar,
        }),
      });
    } catch (err) {
      console.warn('Backend sync note:', err.message);
    }

    setShowSetupModal(false);
    toast.success(`Welcome to PathSeeker, ${fullAccountData.name}! Welcome email dispatched!`);
    navigate('/dashboard');
  };

  // Robot Blinking Loop
  useEffect(() => {
    let blinkTimer;
    const blinkLoop = () => {
      blinkTimer = setTimeout(() => {
        if (mood !== 'success' && !isTurned) {
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 150);
        }
        blinkLoop();
      }, 2600 + Math.random() * 2600);
    };
    blinkLoop();
    return () => clearTimeout(blinkTimer);
  }, [mood, isTurned]);

  // Mouse move listener for head & eye tracking
  useEffect(() => {
    let rafPending = false;
    const handleMouseMove = (e) => {
      const active = document.activeElement;
      if (isDoneRef.current || (active && active.tagName === 'INPUT')) return;
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        if (!robotRef.current) return;
        const rect = robotRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 260));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 260));
        if (!isTurned) {
          lookAndTilt(dx * 7, dy * 6, dx * 12, -dy * 9);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isTurned]);

  return (
    <div className={`relative w-full min-h-screen ${isSignup ? 'is-signup-mode' : ''}`} ref={sceneRef}>
      {/* 1. DYNAMIC ANIMATED BACKGROUND IMAGES (Full Viewport) */}
      <div className="auth-bg-wrapper">
        <div className="bg-layer bg-layer--login" />
        <div className="bg-layer bg-layer--signup" />
      </div>

      {/* 2. DYNAMIC HEADLINE & SUBTEXT OVERLAY (Top-to-Bottom Animated Slide) */}
      <div className="bg-text-overlay">
        <div className="bg-text-card bg-text-card--login">
          <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
            PathSeeker Security Vault
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-xs sm:text-sm text-[#D4D4D8] mt-2 max-w-md mx-auto leading-relaxed">
            Sign in to access your verified Digital Career Passport, milestone trackers, and personalized AI stream insights.
          </p>
        </div>

        <div className="bg-text-card bg-text-card--signup">
          <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
            Verified Multi-Role Onboarding
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
            Claim Your Career Passport
          </h2>
          <p className="text-xs sm:text-sm text-[#D4D4D8] mt-2 max-w-md mx-auto leading-relaxed">
            Join 150,000+ ambitious learners tracking verified skills, industry masterclasses, and global career pathways.
          </p>
        </div>
      </div>

      {/* 3. MAIN ROBOT & CARD STAGE */}
      <div className="scene">
        <main className="stage" id="stage">
          {/* Robot */}
          <div
            ref={robotRef}
            className={`robot ${isHyped ? 'is-hyped' : ''} ${
              isPressed ? 'is-pressed' : ''
            } ${isTurned ? 'is-turned' : ''} ${isSpinning ? 'is-spinning' : ''}`}
            data-mood={mood}
          >
            {/* Speech Bubble */}
            <div
              className={`bubble ${bubblePop ? 'pop' : ''}`}
              role="status"
              aria-live="polite"
            >
              <span>{bubbleText}</span>
            </div>

            {/* Antenna */}
            <div className="antenna" aria-hidden="true">
              <span className="antenna-rod"></span>
              <span className="antenna-tip"></span>
            </div>

            {/* 3D Head */}
            <div
              className="head3d"
              aria-hidden="true"
              style={{
                '--lx': `${headPos.lx}px`,
                '--ly': `${headPos.ly}px`,
                '--ry': `${headPos.ry}deg`,
                '--rx': `${headPos.rx}deg`,
              }}
            >
              <div className="head">
                <span className="ear ear--l"></span>
                <span className="ear ear--r"></span>

                {/* Front Face */}
                <div className="face face--front">
                  <div className="visor">
                    <div className={`eyes ${isBlinking ? 'blink' : ''}`}>
                      <span className="eye eye--l"></span>
                      <span className="eye eye--r"></span>
                    </div>
                    <span className="cheek cheek--l"></span>
                    <span className="cheek cheek--r"></span>
                    <span className="mouth"></span>
                  </div>
                </div>

                {/* Back Face (Password Meter) */}
                <div className="face face--back">
                  <div className="panel">
                    <span className="panel-lights">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <div className="meter" data-lvl={passScore}>
                      <i className={passScore >= 1 ? 'on' : ''}></i>
                      <i className={passScore >= 2 ? 'on' : ''}></i>
                      <i className={passScore >= 3 ? 'on' : ''}></i>
                      <i className={passScore >= 4 ? 'on' : ''}></i>
                    </div>
                    <p className="panel-label font-mono text-[10px] tracking-wider">{panelLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Form Card with Curved Sliding Panels */}
          <div
            className={`card ${isSignup ? 'is-signup-mode' : ''} ${
              isShaking ? 'shake' : ''
            }`}
          >
            <span className="hand hand--l" aria-hidden="true"></span>
            <span className="hand hand--r" aria-hidden="true"></span>

            <div className="card-inner">
              {/* LOGIN FORM PANEL */}
              <form
                className="auth-panel auth-panel--login"
                onSubmit={(e) => handleSubmit(e, 'login')}
                noValidate
              >
                <h1 className="title">Access Your Career Passport</h1>

                <label className="field">
                  <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
                  <input
                    id="loginEmail"
                    type="email"
                    placeholder="name@organization.com"
                    autoComplete="email"
                    value={loginEmail}
                    onFocus={() => handleEmailFocus(loginEmail)}
                    onChange={(e) => handleEmailInput(e.target.value, setLoginEmail)}
                  />
                </label>

                <label className="field">
                  <FontAwesomeIcon icon={faLock} className="field-icon" />
                  <input
                    id="loginPass"
                    type={showLoginPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={loginPassword}
                    onFocus={handlePassFocus}
                    onBlur={handlePassBlur}
                    onChange={(e) =>
                      handlePassInput(e.target.value, setLoginPassword)
                    }
                  />
                  <button
                    className="peek"
                    type="button"
                    aria-label="Show password"
                    aria-pressed={showLoginPass}
                    onClick={() => handlePeekToggle(true)}
                  >
                    <FontAwesomeIcon icon={showLoginPass ? faEyeSlash : faEye} className="text-xs text-white/50" />
                  </button>
                </label>

                <div className="flex justify-end -mt-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-[11px] font-mono text-[#E8602E] hover:text-[#FF7A45] hover:underline cursor-pointer bg-transparent border-none p-0"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  className={`btn ${isSuccess ? 'is-success' : ''}`}
                  type="submit"
                  onMouseEnter={() => handleHype(true)}
                  onMouseLeave={() => handleHype(false)}
                  onFocus={() => handleHype(true)}
                  onBlur={() => handleHype(false)}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  <FontAwesomeIcon icon={faBolt} className="btn-bolt text-xs" />
                  <span className="btn-label">
                    {isSuccess ? 'AUTHENTICATED' : 'UNLOCK PASSPORT'}
                  </span>
                </button>

                <div className="toggle-footer">
                  <span>Don't have a Passport yet?</span>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => handleToggleMode(true)}
                  >
                    Create account
                  </button>
                </div>
              </form>

              {/* SIGN UP FORM PANEL (CURVED SLIDING OVERLAY) */}
              <form
                className="auth-panel auth-panel--signup"
                onSubmit={(e) => handleSubmit(e, 'signup')}
                noValidate
              >
                <h1 className="title">Create Career Passport</h1>

                <label className="field">
                  <FontAwesomeIcon icon={faUser} className="field-icon" />
                  <input
                    id="signupName"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={signupName}
                    onFocus={() => handleNameFocus(signupName)}
                    onChange={(e) => handleNameInput(e.target.value)}
                  />
                </label>

                <label className="field">
                  <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
                  <input
                    id="signupEmail"
                    type="email"
                    placeholder="Your primary email"
                    autoComplete="email"
                    value={signupEmail}
                    onFocus={() => handleEmailFocus(signupEmail)}
                    onChange={(e) => handleEmailInput(e.target.value, setSignupEmail)}
                  />
                </label>

                {/* Candidate Stage / Role Dropdown */}
                <label className="field">
                  <FontAwesomeIcon icon={faGraduationCap} className="field-icon" />
                  <select
                    value={signupRole}
                    onChange={(e) => setSignupRole(e.target.value)}
                    aria-label="Select Candidate Stage"
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Student" className="bg-[#121218] text-white">Student Pathway</option>
                    <option value="Graduate" className="bg-[#121218] text-white">Fresh Graduate Pathway</option>
                    <option value="Professional" className="bg-[#121218] text-white">Working Professional</option>
                  </select>
                </label>

                <label className="field">
                  <FontAwesomeIcon icon={faLock} className="field-icon" />
                  <input
                    id="signupPass"
                    type={showSignupPass ? 'text' : 'password'}
                    placeholder="Create strong password"
                    autoComplete="new-password"
                    value={signupPassword}
                    onFocus={handlePassFocus}
                    onBlur={handlePassBlur}
                    onChange={(e) =>
                      handlePassInput(e.target.value, setSignupPassword)
                    }
                  />
                  <button
                    className="peek"
                    type="button"
                    aria-label="Show password"
                    aria-pressed={showSignupPass}
                    onClick={() => handlePeekToggle(false)}
                  >
                    <FontAwesomeIcon icon={showSignupPass ? faEyeSlash : faEye} className="text-xs text-white/50" />
                  </button>
                </label>

                <button
                  className={`btn ${isSuccess ? 'is-success' : ''}`}
                  type="submit"
                  onMouseEnter={() => handleHype(true)}
                  onMouseLeave={() => handleHype(false)}
                  onFocus={() => handleHype(true)}
                  onBlur={() => handleHype(false)}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  <FontAwesomeIcon icon={faBolt} className="btn-bolt text-xs" />
                  <span className="btn-label">
                    {isSuccess ? 'PASSPORT GENERATED' : 'CLAIM MY PASSPORT'}
                  </span>
                </button>

                <div className="toggle-footer">
                  <span>Already have an account?</span>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => handleToggleMode(false)}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <span className="foot foot--l" aria-hidden="true"></span>
            <span className="foot foot--r" aria-hidden="true"></span>
          </div>
        </main>
      </div>

      {/* Post-Registration Profile Setup & Picture Upload Modal */}
      {showSetupModal && (
        <ProfileSetupModal
          initialData={tempUser}
          onComplete={handleSetupComplete}
        />
      )}

      {/* Forgot Password OTP Verification & Reset Modal */}
      <ForgotPasswordModal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
        onSuccess={() => {
          setIsSignup(false);
          say('Password successfully reset! Please enter your new password to sign in.');
        }}
      />
    </div>
  );
}
