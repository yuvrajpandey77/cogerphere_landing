"use client";

/**
 * Animated Cogerphere logo — outer ring, plain arc (top-left → bottom-right),
 * and dotted arc with nodes (bottom-left → top-right), matching cogerpherelogoonly.png.
 */
export function NeuralLogoLoader() {
  const circleLength = 2 * Math.PI * 42;
  const plainArcLength = 155;
  const dottedArcLength = 155;

  // Ring anchor points (clock positions on r=42, center 50,50)
  const plainStart = { x: 22, y: 22 }; // ~10 o'clock
  const plainEnd = { x: 78, y: 78 }; // ~4 o'clock
  const dotStart = { x: 29, y: 86 }; // ~7 o'clock — node on ring
  const dotEnd = { x: 71, y: 14 }; // ~2 o'clock — node on ring

  return (
    <div
      className="min-h-screen bg-stone-50 flex items-center justify-center fixed inset-0 z-50"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="w-28 h-28">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              className="text-stone-900"
              style={{
                strokeDasharray: circleLength,
                strokeDashoffset: circleLength,
                animation: "neural-draw-circle 0.12s ease-out 0.18s forwards",
              }}
            />
            {/* Plain arc: top-left → bottom-right (no nodes) */}
            <path
              d={`M ${plainStart.x} ${plainStart.y} C 50 6 94 50 ${plainEnd.x} ${plainEnd.y}`}
              className="text-stone-900"
              style={{
                strokeDasharray: plainArcLength,
                strokeDashoffset: plainArcLength,
                animation: "neural-draw-arc1 0.1s ease-out 0.06s forwards",
              }}
            />
            {/* Dotted arc: bottom-left → top-right (nodes at endpoints on ring) */}
            <path
              d={`M ${dotStart.x} ${dotStart.y} C 10 58 58 10 ${dotEnd.x} ${dotEnd.y}`}
              className="text-stone-900"
              style={{
                strokeDasharray: dottedArcLength,
                strokeDashoffset: dottedArcLength,
                animation: "neural-draw-arc2 0.1s ease-out 0.02s forwards",
              }}
            />
            <circle
              cx={dotStart.x}
              cy={dotStart.y}
              r="5"
              fill="currentColor"
              className="text-stone-900"
              style={{
                opacity: 0,
                transformOrigin: "center",
                animation: "neural-node-appear 0.08s ease-out 0.1s forwards",
              }}
            />
            <circle
              cx={dotEnd.x}
              cy={dotEnd.y}
              r="5"
              fill="currentColor"
              className="text-stone-900"
              style={{
                opacity: 0,
                transformOrigin: "center",
                animation: "neural-node-appear 0.08s ease-out 0.14s forwards",
              }}
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-stone-500 animate-pulse">Gathering knowledge</p>
      </div>
    </div>
  );
}
