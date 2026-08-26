import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BAND_HEIGHT = 115;
const IMAGE_HEIGHT = 95;
const IMAGE_GAP = 18;
const CLONE_COUNT = 3;
const MAX_IMAGE_WIDTH = 280;

// Curated Project-Specific Career & Tech Images (AI, Cloud, UI/UX, Quant, Cyber, Coding, Keynotes, Robotics)
const ImageBand1 = [
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400',
  'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
];

const ImageBand2 = [
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
];

const ImageBand3 = [
  'https://images.unsplash.com/photo-1581291518655-9523c93269c4?w=400',
  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
];

const ImageBand4 = [
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
  'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400',
  'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=400',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
];

const ImageBand5 = [
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
  'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400',
];

const ImageBand6 = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
  'https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=400',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400',
];

const ImageBand7 = [
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
];

const ImageBand8 = [
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
  'https://images.unsplash.com/photo-1535378181097-9cf5e853b572?w=400',
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400',
];

const bandConfigs = [
  { offsetY: -360, speed: 0.9, rotation: (6 * Math.PI) / 180, curveAmount: 30.0, curveDirection: 1 },
  { offsetY: -260, speed: 1.2, rotation: (5 * Math.PI) / 180, curveAmount: 25.0, curveDirection: 1 },
  { offsetY: -160, speed: 1.5, rotation: (6 * Math.PI) / 180, curveAmount: 30.0, curveDirection: 1 },
  { offsetY: -60,  speed: 0.8, rotation: (5 * Math.PI) / 180, curveAmount: 25.0, curveDirection: 1 },
  { offsetY: 40,   speed: 0.5, rotation: (6 * Math.PI) / 180, curveAmount: 30.0, curveDirection: 1 },
  { offsetY: 140,  speed: 1.1, rotation: (5 * Math.PI) / 180, curveAmount: 25.0, curveDirection: 1 },
  { offsetY: 240,  speed: 0.7, rotation: (6 * Math.PI) / 180, curveAmount: 30.0, curveDirection: 1 },
  { offsetY: 340,  speed: 1.3, rotation: (5 * Math.PI) / 180, curveAmount: 25.0, curveDirection: 1 },
];

function getImageUrlsForBand(bandIndex) {
  switch (bandIndex) {
    case 0: return ImageBand1;
    case 1: return ImageBand2;
    case 2: return ImageBand3;
    case 3: return ImageBand4;
    case 4: return ImageBand5;
    case 5: return ImageBand6;
    case 6: return ImageBand7;
    case 7: return ImageBand8;
    default: return ImageBand1;
  }
}

function createHorizontalTextureForBand(images) {
  let sequenceWidth = 0;
  const imagesPerBand = images.length;
  for (let i = 0; i < imagesPerBand; i++) {
    const imageInfo = images[i];
    if (imageInfo && imageInfo.loaded) {
      sequenceWidth += imageInfo.width + IMAGE_GAP;
    }
  }
  sequenceWidth -= IMAGE_GAP;
  const totalWidth = sequenceWidth * CLONE_COUNT;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(totalWidth, 600);
  canvas.height = BAND_HEIGHT;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, totalWidth, BAND_HEIGHT);

  let currentX = 0;
  for (let clone = 0; clone < CLONE_COUNT; clone++) {
    for (let i = 0; i < imagesPerBand; i++) {
      const imageInfo = images[i];
      if (imageInfo && imageInfo.loaded && imageInfo.img) {
        const imgWidth = imageInfo.width;
        const imgHeight = imageInfo.height;
        const centeredY = (BAND_HEIGHT - imgHeight) / 2;

        ctx.save();
        ctx.drawImage(imageInfo.img, currentX, centeredY, imgWidth, imgHeight);
        ctx.restore();
        currentX += imgWidth + IMAGE_GAP;
      }
    }
  }
  return {
    canvas,
    totalWidth: canvas.width,
    sequenceWidth: Math.max(sequenceWidth, 300),
  };
}

export default function InfiniteDriftHeroBackground() {
  const mountRef = useRef(null);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const lastWindowScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const materials = [];
    const meshes = [];

    const loadImagesForBand = (bandIndex, callback) => {
      const imageUrls = getImageUrlsForBand(bandIndex);
      const images = [];
      let loaded = 0;

      for (let i = 0; i < imageUrls.length; i++) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        const imageObj = {
          loaded: false,
          img: null,
          width: 140,
          height: IMAGE_HEIGHT,
        };
        images.push(imageObj);

        img.onload = () => {
          const ratio = img.naturalWidth / (img.naturalHeight || 1);
          let targetHeight = IMAGE_HEIGHT;
          let targetWidth = Math.round(targetHeight * ratio);
          if (targetWidth > MAX_IMAGE_WIDTH) {
            targetWidth = MAX_IMAGE_WIDTH;
            targetHeight = Math.round(targetWidth / ratio);
          }
          imageObj.loaded = true;
          imageObj.img = img;
          imageObj.width = targetWidth;
          imageObj.height = targetHeight;
          loaded++;
          if (loaded === imageUrls.length) callback(images);
        };

        img.onerror = () => {
          // Fallback canvas if network restricted
          const fbCanvas = document.createElement('canvas');
          fbCanvas.width = 140;
          fbCanvas.height = IMAGE_HEIGHT;
          const fbCtx = fbCanvas.getContext('2d');
          fbCtx.fillStyle = '#E8602E';
          fbCtx.fillRect(0, 0, 140, IMAGE_HEIGHT);
          imageObj.loaded = true;
          imageObj.img = fbCanvas;
          loaded++;
          if (loaded === imageUrls.length) callback(images);
        };

        img.src = imageUrls[i];
      }
    };

    const initBands = async () => {
      for (let bandIndex = 0; bandIndex < bandConfigs.length; bandIndex++) {
        const config = bandConfigs[bandIndex];
        loadImagesForBand(bandIndex, (images) => {
          const textureData = createHorizontalTextureForBand(images);
          const texture = new THREE.Texture(textureData.canvas);
          texture.needsUpdate = true;

          const material = new THREE.ShaderMaterial({
            uniforms: {
              uResolution: { value: new THREE.Vector2(width, height) },
              uTexture: { value: texture },
              uTextureWidth: { value: textureData.totalWidth },
              uSequenceWidth: { value: textureData.sequenceWidth },
              uBandHeight: { value: BAND_HEIGHT },
              uScroll: { value: 0 },
              uSpeed: { value: config.speed },
              uOffsetY: { value: config.offsetY },
              uRotation: { value: config.rotation },
              uCurveAmount: { value: config.curveAmount },
              uCurveDirection: { value: config.curveDirection },
            },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              precision highp float;
              uniform vec2 uResolution;
              uniform sampler2D uTexture;
              uniform float uTextureWidth;
              uniform float uSequenceWidth;
              uniform float uBandHeight;
              uniform float uScroll;
              uniform float uSpeed;
              uniform float uOffsetY;
              uniform float uRotation;
              uniform float uCurveAmount;
              uniform float uCurveDirection;
              varying vec2 vUv;

              mat2 rotate2d(float angle) {
                return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              }

              void main() {
                vec2 pixelCoord = vUv * uResolution;
                vec2 originalPixelCoord = pixelCoord;

                float normalizedX = pixelCoord.x / uResolution.x;
                float curveFactor = 4.0 * (normalizedX - 0.5) * (normalizedX - 0.5);
                float curveOffset = (0.5 - curveFactor) * uCurveAmount * uCurveDirection;

                float bandTopBase = (uResolution.y - uBandHeight) * 0.5 + uOffsetY;
                float bandTop = bandTopBase + curveOffset;
                float bandBottom = bandTop + uBandHeight;
                float bandCenterY = bandTopBase + (uBandHeight * 0.5);

                vec2 rotationCenter = vec2(uResolution.x * 0.5, bandCenterY);
                pixelCoord -= rotationCenter;
                pixelCoord = rotate2d(uRotation) * pixelCoord;
                pixelCoord += rotationCenter;

                originalPixelCoord -= rotationCenter;
                originalPixelCoord = rotate2d(uRotation) * originalPixelCoord;
                originalPixelCoord += rotationCenter;

                vec2 rotatedBandTop = rotate2d(uRotation) * (vec2(0.0, bandTop) - rotationCenter) + rotationCenter;
                vec2 rotatedBandBottom = rotate2d(uRotation) * (vec2(0.0, bandBottom) - rotationCenter) + rotationCenter;

                bandTop = min(rotatedBandTop.y, rotatedBandBottom.y);
                bandBottom = max(rotatedBandTop.y, rotatedBandBottom.y);

                float margin = 2.0;
                if (pixelCoord.y < bandTop - margin || pixelCoord.y > bandBottom + margin) {
                  discard;
                  return;
                }

                float scrollPos = uScroll * uSpeed;
                float wrappedX = mod(originalPixelCoord.x + scrollPos, uSequenceWidth);
                float cloneIndex = 1.0;
                float textureX = (wrappedX + (cloneIndex * uSequenceWidth)) / uTextureWidth;
                float texY = (pixelCoord.y - bandTop) / (bandBottom - bandTop);

                if (textureX < 0.0 || textureX > 1.0 || texY < 0.0 || texY > 1.0) {
                  discard;
                  return;
                }

                vec4 color = texture2D(uTexture, vec2(textureX, texY));
                if (color.a < 0.2) {
                  discard;
                  return;
                }

                // Smooth fade on band edges
                float edge = min(pixelCoord.y - bandTop, bandBottom - pixelCoord.y);
                if (edge < margin) {
                  color.a *= smoothstep(0.0, margin, edge);
                }

                // Fiery orange / warm ambient grading
                color.rgb *= vec3(1.05, 0.95, 0.9);
                gl_FragColor = color;
              }
            `,
            transparent: true,
            depthTest: false,
            depthWrite: false,
          });

          materials.push(material);
          const geometry = new THREE.PlaneGeometry(2, 2);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = bandIndex * -0.05;
          scene.add(mesh);
          meshes.push(mesh);
        });
      }
    };

    initBands();

    // Scroll & Wheel Acceleration Listeners
    const handlePageScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastWindowScrollY.current;
      targetScrollY.current += deltaY * 2.2;
      scrollVelocity.current = deltaY * 0.35;
      lastWindowScrollY.current = currentY;
    };

    const handleWheel = (e) => {
      targetScrollY.current += e.deltaY * 0.9;
      scrollVelocity.current += e.deltaY * 0.2;
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      targetScrollY.current += deltaY * 1.8;
      scrollVelocity.current = deltaY * 0.3;
      touchStartY = touchY;
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Auto Drift + Inertia Physics Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Inertia & velocity damping
      targetScrollY.current += scrollVelocity.current;
      scrollVelocity.current *= 0.92;
      if (Math.abs(scrollVelocity.current) < 0.05) {
        scrollVelocity.current = 0;
      }

      // Base smooth idle drift
      targetScrollY.current += 0.65;

      // Lerp smoothing
      scrollY.current += (targetScrollY.current - scrollY.current) * 0.1;

      materials.forEach((mat) => {
        if (mat.uniforms.uScroll) {
          mat.uniforms.uScroll.value = scrollY.current;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      materials.forEach((mat) => {
        if (mat.uniforms.uResolution) {
          mat.uniforms.uResolution.value.set(width, height);
        }
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handlePageScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      materials.forEach((m) => m.dispose());
      meshes.forEach((m) => m.geometry.dispose());
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none overflow-hidden z-0 opacity-45 brightness-90 contrast-115"
    />
  );
}
