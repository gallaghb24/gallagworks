import { useEffect, useRef, useState, useCallback } from "react";

// ── Maze line segments (x1, y1, x2, y2) ──
const MAZE_LINES: [number, number, number, number][] = [
  // Horizontal runs
  [0, 60, 80, 60],
  [20, 100, 120, 100],
  [0, 140, 60, 140],
  [40, 180, 160, 180],
  [0, 220, 100, 220],
  [60, 260, 180, 260],
  [20, 300, 140, 300],
  [80, 340, 200, 340],
  [0, 380, 180, 380],        // extended to x=180
  [40, 40, 160, 40],         // extended to x=160
  [100, 80, 200, 80],
  [140, 120, 320, 120],      // extended to x=320 (core top alignment)
  [100, 160, 220, 160],
  [160, 200, 260, 200],
  [120, 240, 260, 240],
  // Vertical runs
  [80, 60, 80, 140],
  [120, 100, 120, 180],
  [60, 140, 60, 260],
  [160, 40, 160, 120],
  [200, 80, 200, 200],
  [140, 180, 140, 300],
  [100, 220, 100, 340],
  [240, 120, 240, 240],
  [220, 160, 220, 340],
  [180, 260, 180, 380],
  [40, 300, 40, 400],
  [260, 200, 260, 320],
  // Extra stubs
  [0, 320, 40, 320],
  [200, 340, 200, 400],
  [260, 320, 300, 320],
  // Connector segments into core
  [320, 120, 320, 200],      // vertical drop into core top
  [160, 180, 160, 200],      // short bridge for Path B
  [260, 230, 290, 230],      // horizontal into core left
  [180, 260, 290, 260],      // horizontal into core bottom
];

// Core square
const CORE = { x: 290, y: 200, size: 60 };

// 3 input paths that all reach the core
const INPUT_PATHS: [number, number][][] = [
  // Path A (top entry → drops into core top)
  [
    [40, 40], [160, 40], [160, 120], [320, 120], [320, 200],
  ],
  // Path B (left entry → threads through middle → enters core left)
  [
    [20, 100], [120, 100], [120, 180], [160, 180],
    [160, 200], [260, 200], [260, 230], [290, 230],
  ],
  // Path C (bottom entry → rises into core bottom)
  [
    [0, 380], [180, 380], [180, 260], [290, 260],
  ],
];

// Output paths (from core right side to canvas edge)
const OUTPUT_Y = [CORE.y + 10, CORE.y + 30, CORE.y + 50];

interface Pulse {
  id: number;
  waypoints: [number, number][];
  currentIdx: number;
  progress: number;
  speed: number;
  opacity: number;
  done: boolean;
  phase: "input" | "output";
  x: number;
  y: number;
}

const MAX_INPUT_PULSES = 15;

const HeroSchematic = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const [buildPhase, setBuildPhase] = useState(true);
  const [buildProgress, setBuildProgress] = useState(0);
  const [coreProgress, setCoreProgress] = useState(0);
  const pulsesRef = useRef<Pulse[]>([]);
  const [renderTick, setRenderTick] = useState(0);
  const pulseIdRef = useRef(0);
  const frameCountRef = useRef(0);
  const hasFlashedRef = useRef(false);
  const [showFlash, setShowFlash] = useState(false);
  const arrivalsRef = useRef(0);
  const [outputRevealed, setOutputRevealed] = useState(false);

  // ── Phase 1: Build ──
  useEffect(() => {
    const totalLines = MAZE_LINES.length;
    const stagger = 60;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i <= totalLines; i++) {
      timers.push(setTimeout(() => setBuildProgress(i), i * stagger));
    }

    const coreStart = totalLines * stagger;
    for (let e = 1; e <= 4; e++) {
      timers.push(setTimeout(() => setCoreProgress(e), coreStart + e * 150));
    }

    timers.push(setTimeout(() => setBuildPhase(false), 2200));

    return () => timers.forEach(clearTimeout);
  }, []);

  // ── Helpers ──
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const getLineLength = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const advancePulse = useCallback((p: Pulse): Pulse => {
    if (p.currentIdx >= p.waypoints.length - 1) {
      return { ...p, done: true, opacity: Math.max(0, p.opacity - 0.06) };
    }

    const [cx, cy] = p.waypoints[p.currentIdx];
    const [nx, ny] = p.waypoints[p.currentIdx + 1];
    const segLen = getLineLength(cx, cy, nx, ny);
    const step = segLen > 0 ? p.speed / segLen : 1;
    let newProgress = p.progress + step;

    if (newProgress >= 1) {
      const newIdx = p.currentIdx + 1;
      const wp = p.waypoints[newIdx];
      return { ...p, currentIdx: newIdx, progress: 0, x: wp[0], y: wp[1] };
    }

    return { ...p, progress: newProgress, x: lerp(cx, nx, newProgress), y: lerp(cy, ny, newProgress) };
  }, []);

  // ── Running phase: continuous animation loop ──
  useEffect(() => {
    if (buildPhase) return;

    const animate = () => {
      frameCountRef.current++;

      // Advance all pulses
      let pulses = pulsesRef.current.map((p) => {
        if (p.done && p.opacity <= 0) return p;
        if (p.done) return { ...p, opacity: Math.max(0, p.opacity - 0.06) };
        const advanced = advancePulse(p);
        // Count first-time arrivals for input pulses
        if (!p.done && advanced.done && advanced.phase === "input") {
          arrivalsRef.current++;
          if (arrivalsRef.current >= 3) {
            setOutputRevealed(true);
          }
        }
        return advanced;
      });

      // Flash on first arrival
      if (!hasFlashedRef.current) {
        const arrived = pulses.find(p => p.phase === "input" && p.done && p.opacity > 0.5);
        if (arrived) {
          hasFlashedRef.current = true;
          setShowFlash(true);
          setTimeout(() => setShowFlash(false), 200);
        }
      }

      // Remove fully faded
      pulses = pulses.filter((p) => p.opacity > 0 || !p.done);

      // Spawn input pulses (staggered across 3 paths)
      const inputCount = pulses.filter(p => p.phase === "input").length;
      if (inputCount < MAX_INPUT_PULSES) {
        const pathIdx = frameCountRef.current % 270; // cycle through 3 paths
        if (pathIdx === 0 || pathIdx === 90 || pathIdx === 180) {
          const which = pathIdx / 90;
          const wp = INPUT_PATHS[which];
          pulses.push({
            id: pulseIdRef.current++,
            waypoints: wp,
            currentIdx: 0,
            progress: 0,
            speed: 1.8 + Math.random() * 0.8,
            opacity: 1,
            done: false,
            phase: "input",
            x: wp[0][0],
            y: wp[0][1],
          });
        }
      }

      // Spawn output pulses (only after dots reach core)
      if (outputRevealed && frameCountRef.current % 18 === 0) {
        const wp: [number, number][] = [
          [CORE.x + CORE.size, OUTPUT_Y[1]],
          [620, OUTPUT_Y[1]],
        ];
        pulses.push({
          id: pulseIdRef.current++,
          waypoints: wp,
          currentIdx: 0,
          progress: 0,
          speed: 5,
          opacity: 1,
          done: false,
          phase: "output",
          x: wp[0][0],
          y: wp[0][1],
        });
      }

      pulsesRef.current = pulses;
      setRenderTick(t => t + 1);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [buildPhase, advancePulse, outputRevealed]);

  const lineLen = (i: number) => {
    const [x1, y1, x2, y2] = MAZE_LINES[i];
    return getLineLength(x1, y1, x2, y2);
  };

  const coreEdges = [
    `M${CORE.x},${CORE.y} L${CORE.x + CORE.size},${CORE.y}`,
    `M${CORE.x + CORE.size},${CORE.y} L${CORE.x + CORE.size},${CORE.y + CORE.size}`,
    `M${CORE.x + CORE.size},${CORE.y + CORE.size} L${CORE.x},${CORE.y + CORE.size}`,
    `M${CORE.x},${CORE.y + CORE.size} L${CORE.x},${CORE.y}`,
  ];

  const pulses = pulsesRef.current;

  return (
    <div className="hidden lg:block w-full h-full relative">
      <svg
        ref={svgRef}
        viewBox="0 0 620 460"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            @keyframes pulse-glow {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
          `}</style>
        </defs>

        {/* Maze lines */}
        {MAZE_LINES.map(([x1, y1, x2, y2], i) => {
          const len = lineLen(i);
          const revealed = i < buildProgress;
          return (
            <line
              key={`maze-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#2F3133"
              strokeWidth={1}
              strokeDasharray={len}
              strokeDashoffset={revealed ? 0 : len}
              style={{
                transition: revealed
                  ? "stroke-dashoffset 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
            />
          );
        })}

        {/* Core box */}
        {coreEdges.map((d, i) => {
          const edgeLen = CORE.size;
          const revealed = i < coreProgress;
          return (
            <path
              key={`core-${i}`}
              d={d}
              fill="none"
              stroke="#F5F5F5"
              strokeWidth={1}
              strokeDasharray={edgeLen}
              strokeDashoffset={revealed ? 0 : edgeLen}
              style={{
                transition: revealed
                  ? "stroke-dashoffset 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
            />
          );
        })}

        {/* Core flash */}
        {showFlash && (
          <rect
            x={CORE.x} y={CORE.y}
            width={CORE.size} height={CORE.size}
            fill="none" stroke="#F5F5F5" strokeWidth={2}
            filter="url(#glow)"
          />
        )}

        {/* Output lines */}
        {OUTPUT_Y.map((y, i) => {
          const isCenter = i === 1;
          const len = 620 - (CORE.x + CORE.size);
          const revealed = outputRevealed;
          return (
            <line
              key={`output-${i}`}
              x1={CORE.x + CORE.size} y1={y}
              x2={620} y2={y}
              stroke={isCenter ? "#FF5F1F" : "#2F3133"}
              strokeWidth={isCenter ? 2 : 1}
              strokeDasharray={len}
              strokeDashoffset={revealed ? 0 : len}
              filter={isCenter && revealed ? "url(#glow)" : undefined}
              style={{
                transition: revealed
                  ? "stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
                ...(isCenter && revealed ? { animation: "pulse-glow 2s ease-in-out infinite" } : {}),
              }}
            />
          );
        })}

        {/* Pulses */}
        {pulses.map((p) =>
          p.opacity > 0 ? (
            <circle
              key={p.id}
              cx={p.x} cy={p.y}
              r={p.phase === "output" ? 2.5 : 2}
              fill="#FF5F1F"
              opacity={p.opacity}
            />
          ) : null
        )}
      </svg>
    </div>
  );
};

export default HeroSchematic;
