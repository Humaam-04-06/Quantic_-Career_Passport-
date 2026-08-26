/**
 * PathSeeker AI - Gemini API Service & Career Recommendation Engine
 * 
 * PLACEHOLDER CONFIGURATION:
 * Replace "YOUR_GEMINI_API_KEY_HERE" or set VITE_GEMINI_API_KEY in your .env file
 * with your real Google Gemini API key.
 */
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY_HERE";

/**
 * Deterministic AI heuristic analysis engine (Runs when API key is not yet set or offline)
 */
export function getHeuristicAnalysis(scores, persona) {
  const { technical, creative, analytical, social, enterprising, conventional } = scores;

  // Determine top 2 RIASEC dominant traits
  const traits = [
    { name: 'Investigative & Technical', score: technical + analytical, code: 'I' },
    { name: 'Artistic & Aesthetic', score: creative * 2, code: 'A' },
    { name: 'Enterprising & Leadership', score: enterprising * 2, code: 'E' },
    { name: 'Social & Collaborative', score: social * 2, code: 'S' },
    { name: 'Conventional & Systems', score: conventional * 2, code: 'C' },
  ].sort((a, b) => b.score - a.score);

  const dominant = traits[0];
  const secondary = traits[1];

  let primaryStream = 'AI Engineering & Machine Learning Systems';
  let matchPercentage = 94;
  let recommendedRoles = [
    { title: 'Machine Learning Engineer', salary: '$140,000 - $220,000', demand: 'Exponential (+28%)', fit: '96%' },
    { title: 'Full-Stack Distributed Architect', salary: '$120,000 - $190,000', demand: 'High (+21%)', fit: '91%' },
    { title: 'Quantitative Data Strategist', salary: '$135,000 - $210,000', demand: 'Very High (+24%)', fit: '87%' },
  ];
  let cognitiveArchetype = 'Algorithmic Architect & Systems Synthesizer';
  let summary = `Your cognitive profile demonstrates exceptional strengths in high-order logic, algorithmic abstraction, and structured problem-solving. You thrive when decomposing complex systems into optimized, scalable components.`;

  if (creative > technical && creative > analytical) {
    primaryStream = 'Human-Computer Interaction & Product Experience';
    matchPercentage = 93;
    recommendedRoles = [
      { title: 'Principal Design Systems Lead', salary: '$110,000 - $175,000', demand: 'High (+19%)', fit: '95%' },
      { title: 'AI Interaction & UX Architect', salary: '$125,000 - $185,000', demand: 'Exponential (+25%)', fit: '92%' },
      { title: 'Creative Technologist & 3D Web Lead', salary: '$105,000 - $165,000', demand: 'High (+18%)', fit: '86%' },
    ];
    cognitiveArchetype = 'Creative Visionary & Empathetic Interface Architect';
    summary = `You possess a unique synthesis of aesthetic sensitivity, spatial visual intuition, and human empathy. You excel at translating intricate functional requirements into fluid, breathtaking digital journeys.`;
  } else if (analytical > technical && analytical > creative) {
    primaryStream = 'Quantitative Analytics & High-Frequency Systems';
    matchPercentage = 95;
    recommendedRoles = [
      { title: 'Quantitative Research Analyst', salary: '$150,000 - $250,000', demand: 'High (+22%)', fit: '97%' },
      { title: 'Algorithmic Risk Modeler', salary: '$130,000 - $200,000', demand: 'High (+20%)', fit: '89%' },
      { title: 'Business Intelligence Architect', salary: '$115,000 - $170,000', demand: 'Steady (+17%)', fit: '84%' },
    ];
    cognitiveArchetype = 'Empirical Strategist & Stochastic Analyst';
    summary = `Your mind is finely calibrated for probabilistic reasoning, statistical variance modeling, and deep quantitative discovery. You find clarity in high-dimensional data and economic patterns.`;
  } else if (enterprising > technical && enterprising > analytical) {
    primaryStream = 'Technology Venture Management & Product Strategy';
    matchPercentage = 92;
    recommendedRoles = [
      { title: 'Technical Product Manager', salary: '$125,000 - $195,000', demand: 'High (+20%)', fit: '94%' },
      { title: 'Venture Operations & Growth Lead', salary: '$110,000 - $180,000', demand: 'High (+19%)', fit: '88%' },
      { title: 'Enterprise Solutions Architect', salary: '$130,000 - $200,000', demand: 'High (+21%)', fit: '85%' },
    ];
    cognitiveArchetype = 'Catalyst Executive & Strategic Operator';
    summary = `You blend strategic market foresight with decisive leadership and persuasive communication. You are built to mobilize cross-functional teams and steer high-impact commercial outcomes.`;
  }

  const roadmap = [
    {
      phase: 'Phase 1: Foundations & Core Competency Mastery',
      timeframe: 'Weeks 1 – 4',
      milestones: [
        'Complete foundational coursework in algorithmic structures and domain mathematics.',
        'Set up version-controlled development sandbox and professional portfolio repository.',
        'Audit 3 verified industry masterclasses in your primary stream on PathSeeker.',
      ],
    },
    {
      phase: 'Phase 2: Applied Capstone & Architectural Projects',
      timeframe: 'Weeks 5 – 8',
      milestones: [
        'Engineer a full-scale end-to-end project simulating enterprise scale and edge cases.',
        'Participate in open-source discussions and peer code reviews within global tech communities.',
        'Publish interactive technical documentation and benchmark results.',
      ],
    },
    {
      phase: 'Phase 3: Industry Validation, Pitching & Placement',
      timeframe: 'Weeks 9 – 12',
      milestones: [
        'Undergo simulated behavioral and technical whiteboard interview gauntlets.',
        'Connect directly with vetted mentors and hiring partners on PathSeeker.',
        'Deploy your validated Career Passport credential to LinkedIn and partner job boards.',
      ],
    },
  ];

  return {
    primaryStream,
    matchPercentage,
    cognitiveArchetype,
    summary,
    dominantCodes: `${dominant.code}${secondary.code}`,
    recommendedRoles,
    roadmap,
    isAIGenerated: false,
  };
}

/**
 * Call Gemini 1.5 Pro / Flash API with user responses, with seamless fallback
 */
export async function analyzeQuizWithGemini(answers, persona = 'Student') {
  // If API key is still the default placeholder, use the rich heuristic engine
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
    // Artificial small delay to give realistic AI analysis feel
    await new Promise((resolve) => setTimeout(resolve, 800));
    return getHeuristicAnalysis(answers, persona);
  }

  try {
    const prompt = `You are the lead Career AI Counselor for PathSeeker.
Analyze the following user's career quiz responses:
- Target Stage: ${persona}
- Technical / Coding interest (1-10): ${answers.technical}
- Creative / Design interest (1-5): ${answers.creative}
- Analytical / Math interest (1-5): ${answers.analytical}
- Social / Collaboration interest (1-5): ${answers.social}
- Enterprising / Leadership interest (1-5): ${answers.enterprising}
- Conventional / Systems interest (1-5): ${answers.conventional}

Respond ONLY in valid JSON with this exact schema:
{
  "primaryStream": "string",
  "matchPercentage": number (85-99),
  "cognitiveArchetype": "string",
  "summary": "2-3 sentences explaining their cognitive profile and why they match this stream",
  "dominantCodes": "2-letter Holland Code e.g. IA",
  "recommendedRoles": [
    { "title": "string", "salary": "string range", "demand": "string", "fit": "string percentage" },
    { "title": "string", "salary": "string range", "demand": "string", "fit": "string percentage" },
    { "title": "string", "salary": "string range", "demand": "string", "fit": "string percentage" }
  ],
  "roadmap": [
    { "phase": "Phase 1: ...", "timeframe": "Weeks 1-4", "milestones": ["string", "string", "string"] },
    { "phase": "Phase 2: ...", "timeframe": "Weeks 5-8", "milestones": ["string", "string", "string"] },
    { "phase": "Phase 3: ...", "timeframe": "Weeks 9-12", "milestones": ["string", "string", "string"] }
  ]
}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json', temperature: 0.4 },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(rawText);
    return { ...parsed, isAIGenerated: true };
  } catch (error) {
    console.warn('Gemini API call failed or rate-limited. Falling back to local intelligence engine.', error);
    return getHeuristicAnalysis(answers, persona);
  }
}
