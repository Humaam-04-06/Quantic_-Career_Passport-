import React from 'react';

/**
 * Custom SVG Radar / Spider Chart for Holland Code (RIASEC) Cognitive Strengths
 */
export default function RadarSkillChart({ scores }) {
  // Normalize scores to scale 0 - 100
  const normalized = {
    Technical: Math.min(100, (scores.technical || 7) * 10),
    Creative: Math.min(100, (scores.creative || 4) * 20),
    Analytical: Math.min(100, (scores.analytical || 4) * 20),
    Social: Math.min(100, (scores.social || 3) * 20),
    Enterprising: Math.min(100, (scores.enterprising || 3) * 20),
    Conventional: Math.min(100, (scores.conventional || 3) * 20),
  };

  const axes = [
    { name: 'Technical', key: 'Technical', code: 'R/I' },
    { name: 'Creative', key: 'Creative', code: 'A' },
    { name: 'Analytical', key: 'Analytical', code: 'I' },
    { name: 'Social', key: 'Social', code: 'S' },
    { name: 'Enterprising', key: 'Enterprising', code: 'E' },
    { name: 'Conventional', key: 'Conventional', code: 'C' },
  ];

  const size = 320;
  const center = size / 2;
  const maxRadius = size * 0.38;
  const numAxes = axes.length;
  const angleStep = (2 * Math.PI) / numAxes;

  // Calculate polygon points based on normalized scores
  const polygonPoints = axes.map((axis, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const value = normalized[axis.key] || 50;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Concentric background grid rings (25%, 50%, 75%, 100%)
  const rings = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="relative flex flex-col items-center justify-center p-4 rounded-3xl glass-panel-ultra overflow-hidden w-full max-w-[360px] mx-auto">
      <div className="flex items-center justify-between w-full mb-2 px-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E]">
          RIASEC Cognitive Polygon
        </span>
        <span className="text-[11px] font-mono text-[#A1A1AA]">6-Dimensional Map</span>
      </div>

      <svg width={size} height={size} className="overflow-visible">
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8602E" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#BC4C22" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E8602E" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Concentric Guide Rings */}
        {rings.map((ring, idx) => (
          <polygon
            key={idx}
            points={axes
              .map((_, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const r = ring * maxRadius;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                return `${x},${y}`;
              })
              .join(' ')}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
        ))}

        {/* Axis Spokes from Center */}
        {axes.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + maxRadius * Math.cos(angle);
          const y = center + maxRadius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeDasharray="2,2"
              strokeWidth="1"
            />
          );
        })}

        {/* Filled Data Polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radarGlow)"
          stroke="#E8602E"
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out filter drop-shadow-[0_0_12px_rgba(232,96,46,0.6)]"
        />

        {/* Individual Data Vertices Dots */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const value = normalized[axis.key] || 50;
          const r = (value / 100) * maxRadius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4.5"
              fill="#FFFFFF"
              stroke="#E8602E"
              strokeWidth="2"
              className="filter drop-shadow-[0_0_6px_#E8602E]"
            />
          );
        })}

        {/* Axis Labels */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelRadius = maxRadius + 22;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] font-bold fill-white tracking-wider font-sans select-none"
            >
              {axis.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
