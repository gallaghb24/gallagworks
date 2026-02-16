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
  [0, 380, 120, 380],
  [40, 40, 140, 40],
  [100, 80, 200, 80],
  [140, 120, 240, 120],
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
  // Extra dead-end stubs
  [0, 320, 40, 320],
  [200, 340, 200, 400],
  [260, 320, 300, 320],
];

// Valid path waypoints: left edge → core
const VALID_PATH: [number, number][] = [
  [0, 220], [100, 220], [100, 340], [200, 340],
  [220, 340], [220, 200], [260, 200], [260, 320],
  [300, 320], [310, 320], [310, 240],
];

// Dead-end paths (dots that get trapped)
const DEAD_PATHS: [number, number][][] = [
  [[0, 60], [80, 60], [80, 140], [60, 140], [60, 260]],
  [[40, 40], [160, 40], [160, 120], [240, 120], [240, 240]],
  [[0, 380], [120, 380], [180, 380], [180, 260]],
];

// Core square
const CORE = { x: 290, y: 200, size: 60 };

// Output paths (from core right side to canvas edge)
const OUTPUT_Y = [CORE.y + 10, CORE.y + 30, CORE.y + 50]; // top, centre, bottom

interface Pulse {
  id: number;
  waypoints: [number, number][];
  currentIdx: number;
  progress: number; // 0-1 between current and next waypoint
  speed: number; // px per frame (~16ms)
  opacity: number;
  dead: boolean;
  phase: "maze" | "output";
  x: number;
  y: number;
}

const HeroSchematic = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const [phase, setPhase] = useState<"build" | "flow" | "result">("build");
  const [buildProgress, setBuildProgress] = useState(0); // 0 to MAZE_LINES.length
  const [coreProgress, setCoreProgress] = useState(0); // 0-4 edges
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [showFlash, setShowFlash] = useState(false);
  const startTimeRef = useRef(0);
  const pulseIdRef = useRef(0);
  const outputSpawnRef = useRef(0);

  // ── Phase 1: Build ──
  useEffect(() => {
    startTimeRef.current = performance.now();
    const totalLines = MAZE_LINES.length;
    const stagger = 60; // ms per line
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i <= totalLines; i++) {
      timers.push(setTimeout(() => setBuildProgress(i), i * stagger));
    }

    // Core edges draw after maze
    const coreStart = totalLines * stagger;
    for (let e = 1; e <= 4; e++) {
      timers.push(setTimeout(() => setCoreProgress(e), coreStart + e * 150));
    }

    // Transition to flow phase
    timers.push(setTimeout(() => setPhase("flow"), 1800));

    return () => timers.forEach(clearTimeout);
  }, []);

  // ── Helpers ──
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const getLineLength = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const advancePulse = useCallback((p: Pulse): Pulse => {
    if (p.currentIdx >= p.waypoints.length - 1) {
      return { ...p, dead: true, opacity: Math.max(0, p.opacity - 0.05) };
    }

    const [cx, cy] = p.waypoints[p.currentIdx];
    const [nx, ny] = p.waypoints[p.currentIdx + 1];
    const segLen = getLineLength(cx, cy, nx, ny);
    const step = segLen > 0 ? p.speed / segLen : 1;
    let newProgress = p.progress + step;

    if (newProgress >= 1) {
      newProgress = 0;
      const newIdx = p.currentIdx + 1;
      const wp = p.waypoints[newIdx];
      return {
        ...p,
        currentIdx: newIdx,
        progress: 0,
        x: wp[0],
        y: wp[1],
      };
    }

    return {
      ...p,
      progress: newProgress,
      x: lerp(cx, nx, newProgress),
      y: lerp(cy, ny, newProgress),
    };
  }, []);

  // ── Phase 2: Flow ──
  useEffect(() => {
    if (phase !== "flow") return;

    // Spawn dead-end pulses + valid pulse
    const initial: Pulse[] = DEAD_PATHS.map((wp, i) => ({
      id: pulseIdRef.current++,
      waypoints: wp,
      currentIdx: 0,
      progress: 0,
      speed: 1.5 + i * 0.3,
      opacity: 1,
      dead: false,
      phase: "maze" as const,
      x: wp[0][0],
      y: wp[0][1],
    }));

    // Valid pulse spawns slightly later
    setTimeout(() => {
      setPulses((prev) => [
        ...prev,
        {
          id: pulseIdRef.current++,
          waypoints: VALID_PATH,
          currentIdx: 0,
          progress: 0,
          speed: 2,
          opacity: 1,
          dead: false,
          phase: "maze" as const,
          x: VALID_PATH[0][0],
          y: VALID_PATH[0][1],
        },
      ]);
    }, 400);

    setPulses(initial);

    // Transition to result after flow completes
    const timer = setTimeout(() => setPhase("result"), 2700);
    return () => clearTimeout(timer);
  }, [phase]);

  // ── Animation loop (Phase 2 + 3) ──
  useEffect(() => {
    if (phase !== "flow" && phase !== "result") return;

    const animate = () => {
      setPulses((prev) => {
        let updated = prev.map((p) => {
          if (p.dead && p.opacity <= 0) return p;
          if (p.dead) return { ...p, opacity: Math.max(0, p.opacity - 0.03) };
          return advancePulse(p);
        });

        // Check if valid pulse reached the core
        updated = updated.map((p) => {
          if (
            !p.dead &&
            p.phase === "maze" &&
            p.currentIdx >= p.waypoints.length - 1
          ) {
            // Reached end of valid path → flash
            setShowFlash(true);
            setTimeout(() => setShowFlash(false), 200);
            return { ...p, dead: true, opacity: 0 };
          }
          return p;
        });

        // Remove fully faded
        updated = updated.filter((p) => p.opacity > 0 || !p.dead);

        return updated;
      });

      // Phase 3: spawn output pulses
      if (phase === "result") {
        outputSpawnRef.current++;
        if (outputSpawnRef.current % 12 === 0) {
          const newPulse: Pulse = {
            id: pulseIdRef.current++,
            waypoints: [
              [CORE.x + CORE.size, OUTPUT_Y[1]],
              [620, OUTPUT_Y[1]],
            ],
            currentIdx: 0,
            progress: 0,
            speed: 5,
            opacity: 1,
            dead: false,
            phase: "output",
            x: CORE.x + CORE.size,
            y: OUTPUT_Y[1],
          };
          setPulses((prev) => [...prev, newPulse]);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, advancePulse]);

  // ── SVG line length for dash animation ──
  const lineLen = (i: number) => {
    const [x1, y1, x2, y2] = MAZE_LINES[i];
    return getLineLength(x1, y1, x2, y2);
  };

  // Core edge paths
  const coreEdges = [
    `M${CORE.x},${CORE.y} L${CORE.x + CORE.size},${CORE.y}`,
    `M${CORE.x + CORE.size},${CORE.y} L${CORE.x + CORE.size},${CORE.y + CORE.size}`,
    `M${CORE.x + CORE.size},${CORE.y + CORE.size} L${CORE.x},${CORE.y + CORE.size}`,
    `M${CORE.x},${CORE.y + CORE.size} L${CORE.x},${CORE.y}`,
  ];

  return (
    <div className="hidden lg:block w-full h-full relative">
      <svg
        ref={svgRef}
        viewBox="0 0 620 460"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* Glow filter for core flash */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Zone 1: The Mess */}
        {MAZE_LINES.map(([x1, y1, x2, y2], i) => {
          const len = lineLen(i);
          const revealed = i < buildProgress;
          return (
            <line
              key={`maze-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
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

        {/* Zone 2: The Core */}
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
            x={CORE.x}
            y={CORE.y}
            width={CORE.size}
            height={CORE.size}
            fill="none"
            stroke="#F5F5F5"
            strokeWidth={2}
            filter="url(#glow)"
          />
        )}

        {/* Zone 3: Output paths */}
        {OUTPUT_Y.map((y, i) => {
          const isCenter = i === 1;
          const len = 620 - (CORE.x + CORE.size);
          const revealed = coreProgress >= 4;
          return (
            <line
              key={`output-${i}`}
              x1={CORE.x + CORE.size}
              y1={y}
              x2={620}
              y2={y}
              stroke={isCenter ? "#FF5F1F" : "#2F3133"}
              strokeWidth={isCenter ? 2 : 1}
              strokeDasharray={len}
              strokeDashoffset={revealed ? 0 : len}
              style={{
                transition: revealed
                  ? "stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
            />
          );
        })}

        {/* Data pulses */}
        {pulses.map(
          (p) =>
            p.opacity > 0 && (
              <circle
                key={p.id}
                cx={p.x}
                cy={p.y}
                r={p.phase === "output" ? 2.5 : 2}
                fill="#FF5F1F"
                opacity={p.opacity}
                filter={p.phase === "output" ? undefined : undefined}
              />
            )
        )}
      </svg>
    </div>
  );
};

export default HeroSchematic;
