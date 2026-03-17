"use client";

/**
 * Animated neural network that gathers into the Cogerphere logo.
 * Nodes and arcs draw in to form the logo — "gathering knowledge".
 */
export function NeuralLogoLoader() {
  const circleLength = 2 * Math.PI * 42; // ~264
  const arcLength = 140; // approximate path length for curved arcs

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center fixed inset-0 z-50" role="status" aria-label="Loading">
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
            {/* Outer circle — forms last, "sphere" boundary */}
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
            {/* Arc 1: top-left → bottom-right (curved through center) */}
            <path
              d="M 28 28 C 50 8 95 50 72 72"
              className="text-stone-900"
              style={{
                strokeDasharray: arcLength,
                strokeDashoffset: arcLength,
                animation: "neural-draw-arc1 0.1s ease-out 0.02s forwards",
              }}
            />
            {/* Arc 2: top-right → bottom-left (curved through center) */}
            <path
              d="M 72 28 C 95 50 50 92 28 72"
              className="text-stone-900"
              style={{
                strokeDasharray: arcLength,
                strokeDashoffset: arcLength,
                animation: "neural-draw-arc2 0.1s ease-out 0.06s forwards",
              }}
            />
            {/* Node 1: upper-right quadrant */}
            <circle
              cx="68"
              cy="32"
              r="5"
              fill="currentColor"
              className="text-stone-900"
              style={{
                opacity: 0,
                transformOrigin: "center",
                animation: "neural-node-appear 0.08s ease-out 0s forwards",
              }}
            />
            {/* Node 2: lower-left quadrant */}
            <circle
              cx="32"
              cy="68"
              r="5"
              fill="currentColor"
              className="text-stone-900"
              style={{
                opacity: 0,
                transformOrigin: "center",
                animation: "neural-node-appear 0.08s ease-out 0.04s forwards",
              }}
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-stone-500 animate-pulse">Gathering knowledge</p>
      </div>
    </div>
  );
}
