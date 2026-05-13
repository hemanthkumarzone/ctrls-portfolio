import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function SpendChart() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((p) => p + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const chartStart = 50;
  const chartEnd = 500;

  const step =
    (chartEnd - chartStart) / (months.length - 1);

  const points = months.map((_, i) => ({
    x: chartStart + i * step,
    y: 180 - i * 10,
  }));

  const splitIndex = 6;

  const leftPoints = points.slice(0, splitIndex);

  const rightPoints = points.slice(splitIndex - 1);

  const buildPath = (pts: any[]) =>
    pts
      .map((p, i) =>
        `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`
      )
      .join(" ");

  const buildArea = (pts: any[]) => `
    ${buildPath(pts)}
    L ${pts[pts.length - 1].x} 180
    L ${pts[0].x} 180
    Z
  `;

  const linePath = buildPath(points);

  return (
    <div className="w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="mb-2">

        <div className="flex items-center justify-between">

          <div className="text-white text-[10px] sm:text-xs font-medium">
            Spend Over Time
          </div>

          {/* LIVE BADGE */}
          <motion.div
            className="
              px-2 py-[2px]

              rounded-full

              border border-[#84cc16]/20

              bg-[#84cc16]/10

              text-[#84cc16]

              text-[8px]
            "
            animate={{
              boxShadow: [
                "0 0 0px rgba(132,204,22,0.2)",
                "0 0 10px rgba(132,204,22,0.5)",
                "0 0 0px rgba(132,204,22,0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            LIVE
          </motion.div>

        </div>

        <div className="text-[9px] text-gray-500 mt-[2px]">
          Current Time
        </div>

      </div>

      {/* CHART CARD */}
      <div
        className="
          relative

          flex-1

          rounded-[18px]

          overflow-hidden

          border border-[#84cc16]/10

          bg-[linear-gradient(180deg,#06110A_0%,#020806_100%)]

          shadow-[0_0_30px_rgba(132,204,22,0.08)]

          px-3
          pt-3
          pb-6
        "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.08),transparent_45%)]

            pointer-events-none
          "
        />

        {/* SVG */}
        <svg
          viewBox="0 0 520 220"
          className="w-full h-full relative z-10"
        >

          <defs>

            {/* REVEAL CLIP */}
            <clipPath id={`clip-${key}`}>
              <motion.rect
                key={key}
                x={chartStart}
                y="0"
                height="220"
                initial={{ width: 0 }}
                animate={{
                  width: chartEnd - chartStart,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
              />
            </clipPath>

            {/* FLOATING GREEN GRADIENT */}
            <linearGradient
              id="animatedGreen"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >

              <stop offset="0%" stopColor="#022c22">

                <animate
                  attributeName="stop-color"
                  values="
                    #022c22;
                    #065f46;
                    #10b981;
                    #065f46;
                    #022c22
                  "
                  dur="5s"
                  repeatCount="indefinite"
                />

              </stop>

              <stop offset="50%" stopColor="#10b981">

                <animate
                  attributeName="stop-color"
                  values="
                    #10b981;
                    #84cc16;
                    #34d399;
                    #84cc16;
                    #10b981
                  "
                  dur="4s"
                  repeatCount="indefinite"
                />

              </stop>

              <stop offset="100%" stopColor="#065f46">

                <animate
                  attributeName="stop-color"
                  values="
                    #065f46;
                    #022c22;
                    #10b981;
                    #022c22;
                    #065f46
                  "
                  dur="6s"
                  repeatCount="indefinite"
                />

              </stop>

            </linearGradient>

            {/* FORECAST LINE GLOW */}
            <filter id="lineGlow">

              <feGaussianBlur
                stdDeviation="8"
                result="blur"
              />

              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 18 -7
                "
                result="glow"
              />

              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>

            </filter>

          </defs>

          {/* GRID */}
          {[0, 50, 100, 150, 200].map((v, i) => {
            const y = 180 - (v / 200) * 160;

            return (
              <line
                key={i}
                x1={chartStart}
                y1={y}
                x2={chartEnd}
                y2={y}
                stroke="rgba(255,255,255,0.04)"
                strokeDasharray="4 6"
              />
            );
          })}

          {/* AXIS */}
          <g stroke="#334155" strokeWidth="1">

            <line
              x1={chartStart}
              y1="20"
              x2={chartStart}
              y2="180"
            />

            <line
              x1={chartStart}
              y1="180"
              x2={chartEnd}
              y2="180"
            />

          </g>

          {/* Y LABELS */}
          {[0, 50, 100, 150, 200].map((v, i) => {
            const y = 180 - (v / 200) * 160;

            return (
              <text
                key={i}
                x="8"
                y={y + 4}
                fill="#9ca3af"
                fontSize="9"
              >
                ${v}M
              </text>
            );
          })}

          {/* LEFT AREA */}
          <path
            d={buildArea(leftPoints)}
            fill="#0f3d3e"
            opacity="0.75"
            clipPath={`url(#clip-${key})`}
          />

          {/* RIGHT AREA WITH FLOATING COLOR */}
          <motion.path
            d={buildArea(rightPoints)}
            fill="url(#animatedGreen)"
            opacity="0.9"
            clipPath={`url(#clip-${key})`}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          

          {/* MAIN FORECAST LINE */}
          <motion.path
            key={`line-${key}`}
            d={linePath}
            fill="none"
            stroke="#84cc16"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />

        </svg>

        {/* MONTH LABELS */}
        {/* MONTH LABELS */}

  <div className="relative h-[26px] -mt-3 ml-[85px] mr-[70px]">

  {points.map((p, i) => (
    <div
      key={i}
      style={{
        position: "absolute",

        left: `${
          ((p.x - chartStart) / (chartEnd - chartStart)) * 100
        }%`,

        transform: "translateX(-50%)",
      }}
      className="text-center"
    >

      <div className="text-[8px] text-gray-300 leading-none">
        {months[i]}
      </div>

      <div className="text-[7px] text-gray-500 leading-none mt-[2px]">
        FY26
      </div>

    </div>
  ))}

</div>

      </div>

      {/* LEGEND */}
      <div
        className="
          flex justify-center gap-5

          mt-2

          text-[8px]
          text-gray-500
        "
      >

        <div className="flex items-center gap-1.5">

          <div className="w-2 h-2 bg-[#0f3d3e]" />

          <span>Actual</span>

        </div>

        <div className="flex items-center gap-1.5">

          <div className="w-2 h-2 bg-[#065f46]" />

          <span>Estimate</span>

        </div>

        <div className="flex items-center gap-1.5">

          <div className="w-5 h-[2px] bg-[#84cc16]" />

          <span>Forecast</span>

        </div>

      </div>

    </div>
  );
}