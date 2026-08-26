import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const RENDERER = { MAX_PIXEL_RATIO: 2 };

const RIPPLE = {
  SLOT_COUNT: 4,
  DECAY_RATE: 1.1,
  RING_FREQUENCY: 7.0,
  RING_SPEED_MUL: 9.0,
  DIST_FALLOFF: 2.2,
  AMPLITUDE: 1.8,
};

const MOUSE_SWELL = {
  DIST_FALLOFF: 2.5,
  FREQUENCY: 9.0,
  SPEED_MUL: 5.0,
  AMPLITUDE: 1.2,
};

const CONTOUR = {
  LINE_WIDTH: 0.24,
  AA_BASE: 0.015,
  AA_DENSITY_SCALE: 0.005,
  WAVE_SCALE: 0.5,
};

const MASK_BLEND = { EDGE_LO: 0.38, EDGE_HI: 0.62 };

// Sheryians-inspired Color Theme
// BG: Pure Black #000000, Water Fill: Fiery Orange #E8602E, Wave Line Accent: Pure White #FFFFFF
const PALETTE = {
  BG: [0.0, 0.0, 0.0],
  FILL: [0.91, 0.376, 0.18], // #E8602E
  LINE: [1.0, 1.0, 1.0],     // #FFFFFF
};

const BASE_WAVES = [
  { amp: 1.0, fx: 2.4, fy: 0.9, ts: 1.15, phase: 0 },
  { amp: 0.82, fx: -1.3, fy: 2.6, ts: -0.87, phase: Math.PI / 2 },
  { amp: 0.65, fx: 1.7, fy: -2.0, ts: 1.41, phase: Math.PI },
  { amp: 0.7, fx: -2.8, fy: -1.2, ts: -0.66, phase: 0.8 },
  { amp: 0.5, fx: 0.9, fy: 3.1, ts: 1.05, phase: 2.3 },
  { amp: 0.38, fx: 3.2, fy: 0.7, ts: -1.23, phase: 4.7 },
  { amp: 0.3, fx: -1.0, fy: -2.4, ts: 1.56, phase: 5.5 },
  { amp: 0.28, fx: 2.1, fy: 1.7, ts: 0.54, phase: 1.1 },
];

const TURB_WAVES = [
  { amp: 0.35, fx: 5.6, fy: 4.4, ts: 1.1, hFold: 0.8 },
  { amp: 0.18, fx: 8.3, fy: -7.0, ts: -0.9, hFold: 1.3 },
  { amp: 0.1, fx: 12.0, fy: 9.5, ts: 1.6, hFold: 1.8 },
];

const glslFloat = (n) => (Number.isInteger(n) ? n.toFixed(1) : String(n));
const f4 = (n) => n.toFixed(4);

function baseWaveGLSL(w) {
  const phase = w.phase !== 0 ? ` + ${f4(w.phase)}` : '';
  return `        h += ${f4(w.amp)} * sin(${f4(w.fx)}*p.x + ${f4(w.fy)}*p.y + t*${f4(w.ts)}${phase});`;
}

function turbWaveGLSL(w) {
  return `          h += uTurb * ${f4(w.amp)} * sin(${f4(w.fx)}*p.x + ${f4(w.fy)}*p.y + t*${f4(w.ts)} + h*${f4(w.hFold)});`;
}

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float     uTime;
  uniform vec2      uRes;
  uniform vec2      uMouse;
  uniform float     uDensity;
  uniform float     uSpeed;
  uniform float     uTurb;
  uniform sampler2D uMask;
  uniform vec4      uR0, uR1, uR2, uR3;

  const vec3 COLOR_BG   = vec3(${PALETTE.BG.map((v) => v.toFixed(3)).join(', ')});
  const vec3 COLOR_FILL = vec3(${PALETTE.FILL.map((v) => v.toFixed(3)).join(', ')});
  const vec3 COLOR_LINE = vec3(${PALETTE.LINE.map((v) => v.toFixed(3)).join(', ')});

  const float MASK_EDGE_LO = ${glslFloat(MASK_BLEND.EDGE_LO)};
  const float MASK_EDGE_HI = ${glslFloat(MASK_BLEND.EDGE_HI)};

  const float RIPPLE_DECAY_RATE   = ${glslFloat(RIPPLE.DECAY_RATE)};
  const float RIPPLE_RING_FREQ    = ${glslFloat(RIPPLE.RING_FREQUENCY)};
  const float RIPPLE_RING_SPEED   = ${glslFloat(RIPPLE.RING_SPEED_MUL)};
  const float RIPPLE_DIST_FALLOFF = ${glslFloat(RIPPLE.DIST_FALLOFF)};
  const float RIPPLE_AMPLITUDE    = ${glslFloat(RIPPLE.AMPLITUDE)};

  const float SWELL_DIST_FALLOFF = ${glslFloat(MOUSE_SWELL.DIST_FALLOFF)};
  const float SWELL_FREQUENCY    = ${glslFloat(MOUSE_SWELL.FREQUENCY)};
  const float SWELL_SPEED_MUL    = ${glslFloat(MOUSE_SWELL.SPEED_MUL)};
  const float SWELL_AMPLITUDE    = ${glslFloat(MOUSE_SWELL.AMPLITUDE)};

  const float CONTOUR_LINE_WIDTH   = ${glslFloat(CONTOUR.LINE_WIDTH)};
  const float CONTOUR_AA_BASE      = ${glslFloat(CONTOUR.AA_BASE)};
  const float CONTOUR_AA_DENSITY   = ${glslFloat(CONTOUR.AA_DENSITY_SCALE)};
  const float CONTOUR_WAVE_SCALE   = ${glslFloat(CONTOUR.WAVE_SCALE)};

  float tri(float x) {
    return abs(fract(x + 0.5) - 0.5) * 2.0;
  }

  float ripple(vec4 r, vec2 uv, float t) {
    if (r.z < 0.0) return 0.0;
    float age       = t - r.z;
    float decay     = exp(-age * RIPPLE_DECAY_RATE);
    float ar        = uRes.x / uRes.y;
    vec2  delta     = (uv - r.xy) * vec2(ar, 1.0);
    float dist      = length(delta);
    float ringPhase = dist * RIPPLE_RING_FREQ - age * uSpeed * RIPPLE_RING_SPEED;
    return decay * sin(ringPhase) * exp(-dist * RIPPLE_DIST_FALLOFF) * RIPPLE_AMPLITUDE;
  }

  void main() {
    vec2  uv = gl_FragCoord.xy / uRes;
    float ar = uRes.x / uRes.y;
    vec2  p  = vec2(uv.x * ar, uv.y);
    float t  = uTime * uSpeed;

    float insideMask = texture2D(uMask, uv).r;
    float mask       = smoothstep(MASK_EDGE_LO, MASK_EDGE_HI, insideMask);

    if (mask < 0.001) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    float h = 0.0;
${BASE_WAVES.map(baseWaveGLSL).join('\n')}

    if (uTurb > 0.0) {
${TURB_WAVES.map(turbWaveGLSL).join('\n')}
    }

    vec2  swellDelta = (uv - uMouse) * vec2(ar, 1.0);
    float swellDist  = length(swellDelta);
    h += SWELL_AMPLITUDE
       * exp(-swellDist * SWELL_DIST_FALLOFF)
       * sin(swellDist * SWELL_FREQUENCY - t * SWELL_SPEED_MUL);

    h += ripple(uR0, uv, uTime);
    h += ripple(uR1, uv, uTime);
    h += ripple(uR2, uv, uTime);
    h += ripple(uR3, uv, uTime);

    float bands     = tri(h * uDensity * CONTOUR_WAVE_SCALE);
    float aaRadius  = CONTOUR_AA_BASE + CONTOUR_AA_DENSITY * uDensity;
    float isOnLine  = 1.0 - smoothstep(CONTOUR_LINE_WIDTH - aaRadius, CONTOUR_LINE_WIDTH + aaRadius, bands);
    
    // Mix Fiery Orange fill with White topographical contour lines
    vec3  fluidColor = mix(COLOR_FILL, COLOR_LINE, isOnLine);

    // Alpha mask blend
    gl_FragColor = vec4(fluidColor, mask);
  }
`;

export default function HeroFluidText({
  line1 = 'Discover What',
  line2 = 'Fits You Best',
  density = 8.5,
  speed = 28,
  turb = 45,
}) {
  const mountRef = useRef(null);
  const uniformsRef = useRef(null);
  const maskTexRef = useRef(null);
  const rippleIndexRef = useRef(0);
  const maskCanvasRef = useRef(document.createElement('canvas'));

  const buildMask = (w, h) => {
    const W = Math.max(w, 320);
    const H = Math.max(h, 120);
    const maskCanvas = maskCanvasRef.current;
    maskCanvas.width = W;
    maskCanvas.height = H;
    const maskCtx = maskCanvas.getContext('2d');

    maskCtx.fillStyle = '#000';
    maskCtx.fillRect(0, 0, W, H);

    // Choose font size based on container width
    const isMobile = W < 640;
    const isTablet = W < 1024;
    
    maskCtx.fillStyle = '#fff';
    maskCtx.textAlign = 'center';
    maskCtx.textBaseline = 'middle';

    if (isMobile) {
      // 2 lines stacked on mobile
      const fontSize = Math.min(W * 0.12, H * 0.38);
      maskCtx.font = `900 ${fontSize}px "Outfit", "Inter", "Arial Black", sans-serif`;
      maskCtx.fillText(line1.toUpperCase(), W / 2, H * 0.32);
      maskCtx.fillText(line2.toUpperCase(), W / 2, H * 0.72);
    } else if (isTablet) {
      // 2 lines on tablet
      const fontSize = Math.min(W * 0.09, H * 0.42);
      maskCtx.font = `900 ${fontSize}px "Outfit", "Inter", "Arial Black", sans-serif`;
      maskCtx.fillText(line1.toUpperCase(), W / 2, H * 0.32);
      maskCtx.fillText(line2.toUpperCase(), W / 2, H * 0.72);
    } else {
      // Single line or unified hero title on large desktop
      const fullText = `${line1} ${line2}`.toUpperCase();
      const fontSize = Math.min(W * 0.075, H * 0.65);
      maskCtx.font = `900 ${fontSize}px "Outfit", "Inter", "Arial Black", sans-serif`;
      maskCtx.fillText(fullText, W / 2, H / 2);
    }

    if (maskTexRef.current) {
      maskTexRef.current.image = maskCanvas;
      maskTexRef.current.needsUpdate = true;
    } else {
      maskTexRef.current = new THREE.CanvasTexture(maskCanvas);
      maskTexRef.current.minFilter = THREE.LinearFilter;
      maskTexRef.current.magFilter = THREE.LinearFilter;
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 180;

    buildMask(width, height);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER.MAX_PIXEL_RATIO));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent canvas background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0.0 },
      uRes: {
        value: new THREE.Vector2(
          width * renderer.getPixelRatio(),
          height * renderer.getPixelRatio()
        ),
      },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uDensity: { value: density },
      uSpeed: { value: speed / 100 },
      uTurb: { value: turb / 100 },
      uMask: { value: maskTexRef.current },
      uR0: { value: new THREE.Vector4(0, 0, -1, 0) },
      uR1: { value: new THREE.Vector4(0, 0, -1, 0) },
      uR2: { value: new THREE.Vector4(0, 0, -1, 0) },
      uR3: { value: new THREE.Vector4(0, 0, -1, 0) },
    };

    uniformsRef.current = uniforms;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `void main(){ gl_Position = vec4(position, 1.0); }`,
      fragmentShader,
      transparent: true,
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 180;
      renderer.setSize(width, height);
      const pr = renderer.getPixelRatio();
      uniforms.uRes.value.set(width * pr, height * pr);
      buildMask(width, height);
      uniforms.uMask.value = maskTexRef.current;
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      uniforms.uMouse.value.set(x, y);
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      const rippleSlots = [uniforms.uR0, uniforms.uR1, uniforms.uR2, uniforms.uR3];
      rippleSlots[rippleIndexRef.current % RIPPLE.SLOT_COUNT].value.set(
        x,
        y,
        uniforms.uTime.value,
        1
      );
      rippleIndexRef.current++;
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    let animationFrameId;
    let lastTimestamp = null;
    let elapsed = 0;

    const loop = (timestamp) => {
      animationFrameId = requestAnimationFrame(loop);
      const dt = lastTimestamp === null ? 0 : Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;
      elapsed += dt;
      uniforms.uTime.value = elapsed;
      renderer.render(scene, camera);
    };

    loop(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px] flex items-center justify-center cursor-pointer select-none"
      title="Hover & Click to Create Fluid Ripples"
    />
  );
}
