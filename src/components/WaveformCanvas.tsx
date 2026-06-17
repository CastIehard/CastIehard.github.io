import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  attribute vec2 a_gridPosition;
  attribute vec2 a_offset;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_waveSpeed;
  uniform float u_waveFrequency;
  uniform float u_waveAmplitude;
  uniform vec2 u_mouse;
  uniform float u_mouseInfluence;

  varying float v_elevation;
  varying vec2 v_gridPosition;
  varying vec2 v_uv;

  void main() {
    vec3 pos = position;

    float x = a_gridPosition.x + a_offset.x;
    float y = a_gridPosition.y + a_offset.y;

    float aspect = u_resolution.x / u_resolution.y;
    float nx = (x / u_resolution.x) * 2.0 - 1.0;
    float ny = (y / u_resolution.y) * 2.0 - 1.0;

    float dist = sqrt(nx * nx + ny * ny);
    float wave = sin(dist * u_waveFrequency - u_time * u_waveSpeed);

    float ripple = sin((nx + ny) * 3.0 + u_time * 1.5) * 0.15;

    float mouseEffect = 0.0;
    if (u_mouseInfluence > 0.0) {
      vec2 mouseNorm = u_mouse * 2.0 - 1.0;
      float mouseDist = sqrt((nx - mouseNorm.x) * (nx - mouseNorm.x) + (ny - mouseNorm.y) * (ny - mouseNorm.y));
      mouseEffect = exp(-mouseDist * mouseDist * 8.0) * u_mouseInfluence;
    }

    float elevation = wave + ripple + mouseEffect;
    v_elevation = elevation;

    vec3 worldPos = vec3(x, y, elevation * u_waveAmplitude);

    pos.xy *= 0.8;
    vec4 mvPosition = modelViewMatrix * vec4(worldPos, 1.0);
    mvPosition.xy += pos.xy;
    gl_Position = projectionMatrix * mvPosition;

    v_gridPosition = a_gridPosition;
    v_uv = uv;
  }
`;

const fragmentShader = `
  uniform vec3 u_colorBright;
  uniform vec3 u_colorDim;
  uniform float u_opacity;

  varying float v_elevation;
  varying vec2 v_gridPosition;
  varying vec2 v_uv;

  void main() {
    vec2 cxy = 2.0 * v_uv - 1.0;
    float r = dot(cxy, cxy);
    float alpha = 1.0 - smoothstep(0.5, 1.0, r);
    if (alpha < 0.01) discard;

    float t = clamp(v_elevation * 0.5 + 0.5, 0.0, 1.0);
    vec3 color = mix(u_colorDim, u_colorBright, t);

    float edgeFade = smoothstep(0.0, 60.0, v_gridPosition.x) *
                     smoothstep(0.0, 60.0, v_gridPosition.y);

    gl_FragColor = vec4(color, alpha * u_opacity * edgeFade);
  }
`;

const quadVertexShader = `
  varying vec2 v_uv;
  void main() {
    v_uv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const quadFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float u_time;
  uniform float u_rotationSpeed;
  varying vec2 v_uv;

  void main() {
    vec2 center = vec2(0.5, 0.5);
    vec2 offset = v_uv - center;
    float angle = u_time * u_rotationSpeed;
    float cosA = cos(angle);
    float sinA = sin(angle);
    vec2 rotated = vec2(
      offset.x * cosA - offset.y * sinA,
      offset.x * sinA + offset.y * cosA
    );
    vec2 finalUV = rotated + center;
    gl_FragColor = texture2D(tDiffuse, finalUV);
  }
`;

function getGridDimensions() {
  const isMobile = window.innerWidth < 768;
  const gridScale = isMobile ? 0.25 : 0.35;
  const cols = Math.max(20, Math.ceil(window.innerWidth * gridScale / 10) * 10);
  const rows = Math.max(15, Math.ceil(window.innerHeight * gridScale / 10) * 10);
  return { cols, rows, gridScale };
}

export default function WaveformCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<{
    fboRenderer: THREE.WebGLRenderer | null;
    mainRenderer: THREE.WebGLRenderer | null;
    fbo: THREE.WebGLRenderTarget | null;
    material: THREE.ShaderMaterial | null;
    quadMaterial: THREE.ShaderMaterial | null;
    clock: THREE.Clock | null;
    rafId: number;
    dots: THREE.InstancedMesh | null;
    fboScene: THREE.Scene | null;
    fboCamera: THREE.OrthographicCamera | null;
    mainScene: THREE.Scene | null;
    mainCamera: THREE.OrthographicCamera | null;
    disposed: boolean;
  }>({
    fboRenderer: null,
    mainRenderer: null,
    fbo: null,
    material: null,
    quadMaterial: null,
    clock: null,
    rafId: 0,
    dots: null,
    fboScene: null,
    fboCamera: null,
    mainScene: null,
    mainCamera: null,
    disposed: false,
  });

  useEffect(() => {
    const r = refs.current;
    if (!containerRef.current) return;

    const mouse = { x: 0.5, y: 0.5 };
    let { cols, rows } = getGridDimensions();

    // FBO Renderer
    const fboRenderer = new THREE.WebGLRenderer({ antialias: false });
    fboRenderer.setSize(cols, rows);
    fboRenderer.setPixelRatio(1);
    fboRenderer.domElement.style.display = 'none';
    document.body.appendChild(fboRenderer.domElement);
    r.fboRenderer = fboRenderer;

    // FBO
    const fbo = new THREE.WebGLRenderTarget(cols, rows, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    r.fbo = fbo;

    // FBO Scene
    const fboScene = new THREE.Scene();
    const fboCamera = new THREE.OrthographicCamera(
      0, window.innerWidth,
      0, window.innerHeight,
      -1000, 1000
    );
    fboCamera.position.z = 1;
    r.fboScene = fboScene;
    r.fboCamera = fboCamera;

    // Main Renderer
    const mainRenderer = new THREE.WebGLRenderer({ alpha: true });
    mainRenderer.setSize(window.innerWidth, window.innerHeight);
    mainRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mainRenderer.domElement.style.position = 'fixed';
    mainRenderer.domElement.style.inset = '0';
    mainRenderer.domElement.style.zIndex = '-1';
    mainRenderer.domElement.style.pointerEvents = 'none';
    mainRenderer.domElement.setAttribute('aria-hidden', 'true');
    containerRef.current.appendChild(mainRenderer.domElement);
    r.mainRenderer = mainRenderer;

    // Main Scene
    const mainScene = new THREE.Scene();
    const mainCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    mainCamera.position.z = 1;
    r.mainScene = mainScene;
    r.mainCamera = mainCamera;

    // Instanced Dots
    function createDots(colsVal: number, rowsVal: number) {
      const geometry = new THREE.PlaneGeometry(1, 1);
      const count = colsVal * rowsVal;

      const gridPositions = new Float32Array(count * 2);
      const offsets = new Float32Array(count * 2);
      const stepX = window.innerWidth / colsVal;
      const stepY = window.innerHeight / rowsVal;

      for (let i = 0; i < colsVal; i++) {
        for (let j = 0; j < rowsVal; j++) {
          const idx = (i * rowsVal + j) * 2;
          gridPositions[idx] = i * stepX;
          gridPositions[idx + 1] = j * stepY;
          offsets[idx] = (Math.random() - 0.5) * stepX * 0.5;
          offsets[idx + 1] = (Math.random() - 0.5) * stepY * 0.5;
        }
      }

      geometry.setAttribute('a_gridPosition', new THREE.InstancedBufferAttribute(gridPositions, 2));
      geometry.setAttribute('a_offset', new THREE.InstancedBufferAttribute(offsets, 2));

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
          u_resolution: { value: new THREE.Vector2(colsVal, rowsVal) },
          u_waveSpeed: { value: 0.6 },
          u_waveFrequency: { value: 3.5 },
          u_waveAmplitude: { value: 18.0 },
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
          u_mouseInfluence: { value: window.innerWidth < 768 ? 0.0 : 0.3 },
          u_colorBright: { value: new THREE.Color('#d1a8ff') },
          u_colorDim: { value: new THREE.Color('#3a1c5c') },
          u_opacity: { value: 0.7 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const dots = new THREE.InstancedMesh(geometry, material, count);
      dots.frustumCulled = false;

      return { dots, material, geometry };
    }

    const { dots, material } = createDots(cols, rows);
    fboScene.add(dots);
    r.dots = dots;
    r.material = material;

    // Fullscreen Quad
    const quadGeometry = new THREE.PlaneGeometry(2, 2);
    const quadMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: fbo.texture },
        u_time: { value: 0.0 },
        u_rotationSpeed: { value: 0.05 },
      },
      vertexShader: quadVertexShader,
      fragmentShader: quadFragmentShader,
      depthWrite: false,
      depthTest: false,
    });
    r.quadMaterial = quadMaterial;

    const quad = new THREE.Mesh(quadGeometry, quadMaterial);
    mainScene.add(quad);

    // Clock
    const clock = new THREE.Clock();
    r.clock = clock;

    // Mouse
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Touch: disable mouse influence
    const onTouchStart = () => {
      material.uniforms.u_mouseInfluence.value = 0.0;
    };
    window.addEventListener('touchstart', onTouchStart, { once: true });

    // Reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      material.uniforms.u_waveSpeed.value = 0.0;
    }

    // Render Loop
    function animate() {
      if (r.disposed) return;
      r.rafId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      material.uniforms.u_time.value = elapsed;
      material.uniforms.u_mouse.value.set(mouse.x, mouse.y);
      quadMaterial.uniforms.u_time.value = elapsed;

      fboRenderer.setRenderTarget(fbo);
      fboRenderer.render(fboScene, fboCamera);

      fboRenderer.setRenderTarget(null);
      mainRenderer.render(mainScene, mainCamera);
    }
    animate();

    // Resize
    const onResize = () => {
      const newDims = getGridDimensions();
      const newCols = newDims.cols;
      const newRows = newDims.rows;

      fbo.setSize(newCols, newRows);
      fboRenderer.setSize(newCols, newRows);
      mainRenderer.setSize(window.innerWidth, window.innerHeight);

      // Recreate dots with new grid
      fboScene.remove(dots);
      dots.geometry.dispose();
      material.dispose();

      const newDotsData = createDots(newCols, newRows);
      fboScene.add(newDotsData.dots);
      r.dots = newDotsData.dots;
      r.material = newDotsData.material;

      cols = newCols;
      rows = newRows;
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onResize, 200);
    };
    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      r.disposed = true;
      cancelAnimationFrame(r.rafId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('resize', debouncedResize);

      fboRenderer.dispose();
      fbo.dispose();
      mainRenderer.dispose();
      dots.geometry.dispose();
      material.dispose();
      quadGeometry.dispose();
      quadMaterial.dispose();

      if (fboRenderer.domElement.parentNode) {
        fboRenderer.domElement.parentNode.removeChild(fboRenderer.domElement);
      }
      if (mainRenderer.domElement.parentNode) {
        mainRenderer.domElement.parentNode.removeChild(mainRenderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: -1 }} aria-hidden="true" role="presentation" />;
}
