import type { CSSProperties } from 'react';

const canopyParticles = Array.from({ length: 96 }, (_, index) => {
  const angle = index * 2.399963;
  const radius = 24 + ((index * 37) % 165);
  const squash = 0.42 + ((index % 7) * 0.015);
  return {
    cx: 260 + Math.cos(angle) * radius,
    cy: 154 + Math.sin(angle) * radius * squash - Math.abs(Math.cos(angle)) * 18,
    r: 1.1 + (index % 5) * 0.55,
    delay: (index % 12) * 0.18,
    opacity: 0.34 + (index % 6) * 0.08,
  };
});

const flyingLeaves = [
  { left: 16, top: 22, delay: 0.2, duration: 11, size: 18, driftX: 76, driftY: -26, rotate: -36 },
  { left: 32, top: 12, delay: 3.1, duration: 13, size: 22, driftX: -58, driftY: 44, rotate: 48 },
  { left: 51, top: 18, delay: 1.4, duration: 12, size: 17, driftX: 68, driftY: 36, rotate: -52 },
  { left: 70, top: 34, delay: 4.6, duration: 14, size: 20, driftX: -72, driftY: -32, rotate: 42 },
  { left: 82, top: 16, delay: 2.2, duration: 12, size: 15, driftX: 44, driftY: 56, rotate: -64 },
  { left: 24, top: 54, delay: 5.5, duration: 15, size: 16, driftX: 62, driftY: 38, rotate: 58 },
];

function DigitalLeaf({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 64 36" width={size * 1.7} height={size} aria-hidden="true">
      <path
        d="M4 19C18 2 42 2 60 16 45 33 19 35 4 19Z"
        fill="url(#leafGlow)"
      />
      <path
        d="M6 19C23 18 41 16 59 16M25 17l-4-9M38 16l6-8"
        fill="none"
        stroke="rgba(215,255,246,.78)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="leafGlow" x1="4" y1="4" x2="60" y2="33">
          <stop stopColor="#d9ff9a" stopOpacity=".96" />
          <stop offset=".42" stopColor="#68f2cf" stopOpacity=".86" />
          <stop offset="1" stopColor="#27a4ff" stopOpacity=".62" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function GinkgoField() {
  return (
    <div className="ginkgo-field" aria-hidden="true">
      <svg viewBox="0 0 520 560" className="digital-tree-svg" aria-hidden="true">
        <defs>
          <linearGradient id="treeLine" x1="260" y1="54" x2="260" y2="532">
            <stop stopColor="#f5fff9" />
            <stop offset=".3" stopColor="#66e8ff" />
            <stop offset=".68" stopColor="#238dff" />
            <stop offset="1" stopColor="#55f4c2" />
          </linearGradient>
          <radialGradient id="canopyMist" cx="50%" cy="42%" r="58%">
            <stop stopColor="#66e8ff" stopOpacity=".28" />
            <stop offset=".52" stopColor="#238dff" stopOpacity=".09" />
            <stop offset="1" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="treeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse className="tree-mist" cx="260" cy="162" rx="224" ry="118" fill="url(#canopyMist)" />
        <path
          className="tree-root tree-root-main"
          d="M260 414C217 446 160 463 82 464M260 414C216 486 174 520 105 535M260 414C315 457 369 478 456 466M260 414C307 501 352 529 432 538M260 414C234 442 208 454 167 452M260 414C292 439 326 449 384 444"
        />
        <path
          className="tree-trunk"
          d="M260 414C266 353 263 300 253 252C243 205 238 156 259 91"
        />
        <path
          className="tree-trunk tree-trunk-secondary"
          d="M248 414C255 349 253 300 242 250M273 414C273 350 268 297 258 245"
        />
        <path
          className="tree-branch"
          d="M252 258C203 247 160 220 119 174M253 238C201 207 176 172 164 119M259 216C217 178 203 140 202 93M264 226C306 187 333 148 342 91M268 249C329 231 374 200 408 151M266 277C337 272 390 253 443 217"
        />
        <path
          className="tree-canopy-line"
          d="M93 175C78 120 131 62 198 78C226 28 302 29 326 78C400 59 457 123 430 185C455 235 397 289 326 264C291 314 221 302 198 258C135 276 74 231 93 175Z"
        />

        {canopyParticles.map((particle, index) => (
          <circle
            key={index}
            className="tree-particle"
            cx={particle.cx}
            cy={particle.cy}
            r={particle.r}
            style={
              {
                '--particle-delay': `${particle.delay}s`,
                '--particle-opacity': particle.opacity,
              } as CSSProperties
            }
          />
        ))}

        <path
          className="tree-circuit"
          d="M80 466H38M105 535H62M456 466h42M432 538h54M119 174H71M408 151h54M443 217h40"
        />
      </svg>

      {flyingLeaves.map((leaf) => (
        <div
          key={`${leaf.left}-${leaf.top}`}
          className="digital-leaf"
          style={
            {
              '--leaf-left': `${leaf.left}%`,
              '--leaf-top': `${leaf.top}%`,
              '--leaf-delay': `${leaf.delay}s`,
              '--leaf-duration': `${leaf.duration}s`,
              '--leaf-x': `${leaf.driftX}px`,
              '--leaf-y': `${leaf.driftY}px`,
              '--leaf-rotate': `${leaf.rotate}deg`,
            } as CSSProperties
          }
        >
          <DigitalLeaf size={leaf.size} />
        </div>
      ))}
    </div>
  );
}
