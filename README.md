# 🎓 PathSeeker — Career Passport Platform
> **AI-Driven Multi-Tier Career Exploration, RIASEC Aptitude Profiling & Cryptographic Digital Passport Ecosystem.**  
> *Engineered for TechWiz 6 — Global AI Web Application Competition*

[![TechWiz 6](https://img.shields.io/badge/Competition-TechWiz%206-blue?style=for-the-badge&logo=codeforces)](https://www.aptech-worldwide.com)
[![Project Status](https://img.shields.io/badge/Project%20Status-85%25%20Completed-success?style=for-the-badge)](https://github.com)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas%20Cloud-emerald?style=for-the-badge&logo=mongodb)](https://mongodb.com)
[![SMTP](https://img.shields.io/badge/SMTP-Gmail%20Live%20Relay-red?style=for-the-badge&logo=gmail)](https://gmail.com)
[![Frontend](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite%20%2B%20Tailwind-blueviolet?style=for-the-badge&logo=react)](https://react.dev)

---

## 📊 Executive Platform Progress Tracker

```mermaid
pie title PathSeeker Platform Module Progress
    "Completed: Landing Page & GSAP Section" : 15
    "Completed: AI RIASEC Quiz & Radar Chart (/quiz)" : 15
    "Completed: 150+ Career Bank & Comparison (/careers)" : 15
    "Completed: Volt 3D Auth & Gmail SMTP (/login)" : 15
    "Completed: 3D Career Passport & Dashboard (/dashboard)" : 15
    "Completed: Community Transformation Stories (/stories)" : 10
    "Remaining: Multimedia Hub & Video Player (/multimedia)" : 8
    "Remaining: Document Resource Library (/resources)" : 4
    "Remaining: Admin Control Panel (/admin)" : 3
```

| Module / Page | Route | Status | Key Highlights |
| :--- | :--- | :--- | :--- |
| **Interactive Landing Page** | `/` | `COMPLETED` | 3D rotating Three.js wireframe globe, vertical GSAP multimedia conduit, persona matrix, ultra-glass cards, categorized sitemap. |
| **AI Interest Quiz & Stream Matching** | `/quiz` | `COMPLETED` | 7-step cognitive assessment, 6-axis Holland RIASEC spider chart, exportable Career Passport certificate, 90-day roadmap, auto-sync to passport. |
| **Global Career Bank Explorer** | `/careers` | `COMPLETED` | 150+ roles, live market intelligence ticker, domain filter pills, salary slider, 3-way comparison matrix modal, fitted background cards. |
| **Deep-Dive Career Pathway Detail** | `/careers/:id` | `COMPLETED` | 7 sections: role hero, 4-tier compensation progression ladder, hour-by-hour day in the life timeline, skill tree matrix, 3-phase roadmap. |
| **Volt 3D Robot Auth & Live SMTP** | `/login`, `/register` | `COMPLETED` | 3D Volt robot guardian (cursor eye-tracking, 180° privacy turnaround, 4-level LED password meter), live Gmail SMTP welcome & OTP delivery. |
| **Candidate Career Passport Command Center** | `/dashboard` | `COMPLETED` | 3D Holographic Passport ID card, Email OTP verification, 0% baseline stats, 10-step sprint roadmap, multi-axis skill radar, pinned careers, story manager. |
| **Community Transformation Stories Hub** | `/stories`, `/stories/submit` | `COMPLETED` | 100% dynamic MongoDB Atlas story feed, live salary jump calculator, 3D Coverflow slider, 3-stage case studies, live upvoting, interactive submission studio. |
| **Multimedia Masterclasses Hub** | `/multimedia`, `/multimedia/:id` | `IN PROGRESS` | Video player with synchronized live transcript accordions, audio podcasts, filterable categories, bookmarks, and speaker profiles. |
| **Document Resource Library** | `/resources` | `IN PROGRESS` | Downloadable system design blueprints, salary guides, PDF live preview modal, category tabs, popularity sorting. |
| **Enterprise Admin Command Center** | `/admin` | `IN PROGRESS` | Live MongoDB CRUD career editor, story moderation queue, user role management, platform analytics telemetry. |

---

## 🚀 1. What Has Been Built (Completed Features)

### 🌟 1.1 Signature Ultra-Glassmorphism & Design System
- **Luxury Pitch-Black Palette:** Pure Pitch Black (`#000000`), Fire Orange (`#E8602E`), Burnt Rust (`#BC4C22`), Gold Energy (`#FFB800`), Emerald Verified Green (`#10B981`), Crisp White Headings (`#FFFFFF`), Soft Gray Body Text (`#D4D4D8`).
- **Glassmorphism Specification:** Multi-layer dark smoke glass (`rgba(18, 18, 24, 0.75)`), specular top border highlight (`border-t-[rgba(255,255,255,0.25)]`), ambient orange spotlight glow fields, and inner bevel drop shadows.
- **Typography & Icons:** Modern Google typography (*Outfit*, *Inter*, *Plus Jakarta Sans*) with FontAwesome SVG icons strictly.

---

### 🌐 1.2 Interactive Landing Page (`/`)
- **Sticky Notch Header (`NotchNavbar.jsx`):** Floating dynamic notch with active route indicators and mobile slide-out drawer.
- **3D Wireframe Globe Hero (`HeroSection.jsx`):** Three.js interactive rotating globe with pinpoint markers and animated typography shaders.
- **Candidate Persona Matrix (`PersonaSection.jsx`):** Tailored paths for **Students**, **Fresh Graduates**, and **Working Professionals**.
- **Vertical GSAP Multimedia Conduit (`MultimediaSection.jsx`):** 2200px vertical track, 3D isometric tablet background, glowing curving SVG trails (`#linePath01`–`#linePath04`), and masterclass cards with Framer Motion transcript accordions.
- **Featured Career Spotlight (`CareerSpotlightSection.jsx`):** High-visibility fitted background imagery with hover zoom and domain tabs.

---

### 🧠 1.3 AI Holland RIASEC Cognitive Quiz (`/quiz`)
- **7-Step Psychometric Assessment (`QuizQuestionCard.jsx`):** Precision slider (1–10) and Likert scale inputs assessing *Realistic, Investigative, Artistic, Social, Enterprising, and Conventional* dimensions.
- **Mathematical 6-Axis Spider Radar Chart (`RadarSkillChart.jsx`):** Real-time SVG polygon visualizer plotting candidate cognitive balance.
- **Digital Career Passport Certificate (`PassportCertificate.jsx`):** High-resolution credential badge with custom ID (`#CP-2026-XXXX`), verified digital seal, QR code, and **PDF Dossier Export**.
- **Dynamic Passport Telemetry Sync:** Completing the assessment dynamically injects the candidate's dominant Holland code, archetype, and matched career stream into their 3D Digital Passport.

---

### 💼 1.4 Global Career Bank & Comparison (`/careers` & `/careers/:id`)
- **150+ Career Blueprints:** Real-world entry/mid/senior salaries, industry demand scores, and growth trajectories.
- **Multi-Filter Command Center (`CareerFilterBar.jsx`):** Real-time search debounce, domain filters, experience level, and salary slider.
- **3-Way Comparison Matrix Tray & Modal (`CareerCompareModal.jsx`):** Side-by-side comparison of 2–3 roles on compensation, demand, lifestyle, and hard skill overlaps.
- **7-Section Career Pathway Dossier:**
  1. Role Hero & Passport Code Badge (`#CP-AI-01`)
  2. 4-Tier Compensation Progression Ladder (`SalaryProgressionLadder.jsx`)
  3. Hour-by-Hour "Day in the Life" Timeline (`DayInLifeTimeline.jsx`)
  4. Core Skill Tree & Tool Stack Matrix (`SkillTreeMatrix.jsx`)
  5. 3-Phase Step-by-Step Verified Learning Roadmap (`RoadmapTimeline.jsx`)
  6. Certified Credentials & Academic Prerequisites
  7. Adjacent Career Lateral Pivots

---

### 🤖 1.5 Volt 3D Robot Auth & Gmail SMTP Engine (`/login` & `/register`)
- **Volt 3D Robot Guardian (`VoltAuthCard.jsx`):**
  - Real-time 3D cursor tracking for head and eyes (`rotateX`, `rotateY`, `translateY`).
  - Zero-knowledge privacy turn-around: Robot turns 180° around on password input focus.
  - 4-level LED password strength meter on robot back-head.
- **Live Gmail SMTP Relay ([`emailService.js`](file:///d:/Quantic_(Career_Passport)/server/services/emailService.js)):**
  - Real email delivery via Google Gmail App Password (`ciphe7432@gmail.com`).
  - Dark glassmorphic HTML email templates for **Welcome Onboarding**, **Password Reset OTP**, and **Digital Passport Verification**.
- **MongoDB Atlas Auth & Password Persistence:** User accounts, passwords, and profiles are synced to MongoDB Atlas (`bcrypt` hashing) and `localStorage`.

---

### 🛡️ 1.6 Candidate Digital Passport Command Center (`/dashboard`)
- **3D Holographic Passport ID Card (`DigitalPassportIDCard.jsx`):**
  - Animated character avatar presets (8 gamer & developer presets).
  - Career stage switcher (*Student, Graduate, Professional Track*).
  - Dynamic Holland RIASEC code, career stage, and readiness level.
- **Email OTP Passport Verification Protocol (`VerificationModal.jsx`):**
  - Amber `UNVERIFIED` badge unlocks a 6-digit cryptographic verification code sent via Gmail SMTP.
  - Entering OTP permanently grants the glowing emerald `VERIFIED` badge on MongoDB Atlas and local storage.
- **Zero-Inflation Baseline Stats:** Fresh accounts start strictly at 0% Readiness, 0 completed tasks, 0 sessions, 0.0 hrs; all metrics calculate in real-time from completed tasks.
- **Interactive 90-Day Roadmap Checklist (`RoadmapChecklist.jsx`):** 10 actionable milestones with custom task creator and per-user storage.
- **Multi-Axis Skill Competency Radar (`SkillCompetencyRadar.jsx`):** 6 competency axes with industry benchmark lines.
- **Pinned Career Blueprints Hub (`SavedCareersHub.jsx`):** User-keyed bookmarking engine.
- **My Published Stories Management Hub (`MyStoriesHub.jsx`):** View, edit, and delete published transformation stories directly from the dashboard!

---

### 🌟 1.7 Community Transformation Stories Engine (`/stories` & `/stories/submit`)
- **100% Dynamic MongoDB Atlas Feed:** Live transformation stories loaded from backend API with filtering by Category and Domain.
- **Real-Time Telemetry Ticker:** Header statistics (+315% Avg Compensation Jump, 5.4 Mos Pivot Duration, 98.4% Placement Rate) calculated dynamically from live story data.
- **Live Upvote System:** Likes start at `0` and increment atomically in MongoDB on click (`POST /api/v1/stories/:id/like`).
- **Interactive Story Submission Studio (`StorySubmitPage.jsx` & `StorySubmitForm.jsx`):**
  - Auto-prefills candidate identity from active profile.
  - Live 3D Holographic Card Preview with real-time salary jump calculator (e.g. `$38,000 → $165,000 = +$127k (+334%)`).
  - 3-stage transition narrative builder (Starting Ground → Pivot & Roadblocks → Offer Placement).
  - Instant publication to MongoDB Atlas and local cache.
- **Deep-Dive Case Study Modal (`StoryModal.jsx`):** Full 3-stage timeline breakdown, salary visualizer, golden advice, and tool badges.

---

## ⏳ 2. What Is Remaining (To Be Built)

```
├── 1. Multimedia Masterclasses Hub (/multimedia & /multimedia/:id)
│   ├── Video Player with Custom Playback Speed, Chapters & Notes
│   ├── Audio Podcast Streaming Player with Audio Waveforms
│   ├── Filterable Categories & Watch-Time Telemetry Tracking
│   └── Mentor / Speaker Profiles & Community Discussion
│
├── 2. Document Resource Library (/resources)
│   ├── Downloadable System Design Cheat Sheets, Blueprints & PDF Roadmaps
│   ├── In-Browser PDF Live Preview Viewer
│   ├── Category Filtering & Popularity Sorting
│   └── Live Download Telemetry Counter
│
└── 3. Enterprise Admin Command Center (/admin)
    ├── Platform Analytics & User Traffic Telemetry
    ├── MongoDB Atlas CRUD Career Blueprint Editor
    ├── Community Story Moderation Queue (Approve / Reject / Feature)
    └── User Role Manager (Student / Graduate / Professional / Admin)
```

---

## 💻 3. Complete Step-by-Step Setup & Execution Guide

Follow this guide to run the entire PathSeeker platform locally on your machine.

### 📋 Prerequisites
Make sure you have the following installed on your system:
- **Node.js**: Version `18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Version `9.0.0` or higher (comes with Node.js)
- **Git**: ([Download Git](https://git-scm.com/))
- A modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox)

---

### 📥 Step 1: Clone the Repository
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/Quantic_Career_Passport.git

# Navigate into project directory
cd Quantic_(Career_Passport)
```

---

### ⚙️ Step 2: Configure Environment Variables

#### Backend Configuration (`server/.env`):
Navigate to the `server` directory and verify or create the `.env` file:
```env
PORT=5000
NODE_ENV=development

# MongoDB Atlas Cloud Database URI
MONGO_URI=mongodb+srv://sy3dahm3d920_db_user:PathSeeker2026@cluster0.40gvxbg.mongodb.net/pathseeker?retryWrites=true&w=majority&appName=Cluster0

# JWT Authentication Secret
JWT_SECRET=pathseeker_super_secure_jwt_secret_key_2026
JWT_EXPIRE=7d

# Live Gmail SMTP Relay Credentials
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ciphe7432@gmail.com
SMTP_PASS=yyvrendtwpwhehkm
EMAIL_FROM="PathSeeker Career Passport" <ciphe7432@gmail.com>

# Frontend URL
CLIENT_URL=http://localhost:5173
```

#### Frontend Configuration (`client/.env` - optional):
```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

### 📦 Step 3: Install Dependencies

Open two terminal windows (one for the backend, one for the frontend):

#### Terminal 1 (Backend Server):
```bash
cd server
npm install
```

#### Terminal 2 (Frontend Client):
```bash
cd client
npm install
```

---

### 🗄️ Step 4: Seed the Database (Optional but Recommended)
To populate MongoDB Atlas with 150+ careers, quiz questions, multimedia items, and verified community stories:
```bash
# In the server/ directory:
npm run seed
```

---

### 🚀 Step 5: Start the Development Servers

#### Terminal 1 (Start Backend Server):
```bash
cd server
npm run dev
```
> Server will start on `http://localhost:5000` and output:  
> `🚀 PathSeeker Server running in development mode on http://localhost:5000`  
> `✅ MongoDB Connected: ac-8mvbq4u-shard-00-00.40gvxbg.mongodb.net`

#### Terminal 2 (Start Frontend Client):
```bash
cd client
npm run dev
```
> Vite dev server will start on `http://localhost:5173`. Open your browser and visit:  
> **`http://localhost:5173`**

---

### 🔑 Step 6: Test Credentials & User Flows

You can register a brand new account or use the following pre-seeded accounts:

| User Type | Email | Password | Role |
| :--- | :--- | :--- | :--- |
| **Demo Student** | `student@pathseeker.com` | `Password@2026` | Student |
| **Demo Professional** | `pro@pathseeker.com` | `Password@2026` | Professional |
| **Administrator** | `admin@pathseeker.com` | `Password@2026` | Admin |

#### Recommended Testing Workflows:
1. **Register a New Account (`/login`):**
   - Create an account using your real email address or a temp-mail inbox (e.g. from `temp-mail.org`).
   - Receive the automated Welcome & Onboarding email in your inbox!
2. **Verify 3D Passport via Email OTP (`/dashboard`):**
   - Click the amber `UNVERIFIED` badge on your 3D Passport card.
   - Click "Send Code" → check your inbox for the 6-digit code.
   - Enter the code to unlock the permanent glowing green `VERIFIED` badge!
3. **Take the AI Interest Quiz (`/quiz`):**
   - Complete the 7-step test and view your Holland RIASEC radar polygon.
   - Watch your dominant Holland code automatically sync into your 3D Passport card!
4. **Publish a Transformation Story (`/stories/submit`):**
   - Fill in your previous and new salary, role, company, and 3-stage timeline.
   - Watch the live 3D preview compute your salary jump in real time.
   - Publish the story and manage it directly from your Candidate Dashboard!

---

### 🔨 Step 7: Build for Production (Verification)
To verify that all frontend code compiles with 0 errors:
```bash
cd client
npm run build
```

---

## 🛠️ 4. Technology Stack Summary

```
PathSeeker Ecosystem
├── Frontend
│   ├── Framework: React 18 (Vite Bundler)
│   ├── Styling: Vanilla Tailwind CSS + Custom Ultra-Glassmorphism
│   ├── Animations: GSAP 3 (ScrollTrigger), Three.js, Framer Motion
│   ├── Icons: FontAwesome 6 SVG Icons
│   └── State & Routing: React Router v6, React Context API, React Hot Toast
│
├── Backend
│   ├── Runtime: Node.js (ES Modules)
│   ├── Framework: Express.js
│   ├── Database: MongoDB Atlas Cloud (Mongoose ODM)
│   ├── Authentication: JWT (JSON Web Tokens) & Bcrypt Password Hashing
│   └── Email Delivery: Nodemailer with Gmail SMTP SSL Relay
│
└── Cloud & Services
    ├── Database: MongoDB Atlas Serverless M0 Cluster
    ├── Mail Relay: Google Gmail Secure App Password Gateway
    └── AI Engine: Google Gemini 1.5 Flash API Connector with Heuristic Fallback
```

---

## 🤝 5. Contributing & Troubleshooting

- **Email Delivery Issues:** Ensure `SMTP_USER` and `SMTP_PASS` (Google App Password with 2FA enabled) in `server/.env` are valid.
- **MongoDB Connection:** If the server fails to connect to MongoDB, ensure your IP address is whitelisted in MongoDB Atlas Network Access (`0.0.0.0/0` for universal development access).
- **Port Conflicts:** If port `5000` or `5173` is busy, stop existing node processes with `taskkill /F /IM node.exe` (Windows) or `killall node` (macOS/Linux).

---

© 2026 **PathSeeker**. Built for **TechWiz 6 Global Web Competition**. All rights reserved.
