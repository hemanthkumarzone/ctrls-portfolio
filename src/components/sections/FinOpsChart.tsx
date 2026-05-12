import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bars = [
  { label: "AWS", value: 220 },
  { label: "AZURE", value: 145 },
  { label: "GCP", value: 85 },
];

const max = 240;

export default function FinOpsChart() {
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateKey((p) => p + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-2 px-1">

        <div className="flex items-center gap-2">

          {/* GLOW DOT */}
          <motion.div
            className="w-2 h-2 rounded-full bg-[#84cc16]"
            animate={{
              boxShadow: [
                "0 0 5px #84cc16",
                "0 0 18px #84cc16",
                "0 0 5px #84cc16",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <div className="text-white text-[10px] sm:text-xs font-medium tracking-wide">
            FinOps Autopilot
          </div>

        </div>

        {/* LIVE BADGE */}
        <div
          className="
            px-2 py-[2px]

            rounded-full

            border border-[#84cc16]/30

            bg-[#84cc16]/10

            text-[#84cc16]

            text-[8px]

            font-medium
          "
        >
          LIVE
        </div>

      </div>

      {/* MAIN CHART CARD */}
      <div
        className="
          relative

          flex-1

          rounded-[18px]

          overflow-hidden

          bg-[linear-gradient(180deg,#06110A_0%,#020806_100%)]

          border border-[#84cc16]/10

          shadow-[0_0_35px_rgba(132,204,22,0.08)]

          px-3
          py-3
        "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.08),transparent_45%)]

            pointer-events-none
          "
        />

        {/* SVG */}
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full relative z-10"
        >

          {/* DEFINITIONS */}
          <defs>

            {/* PREMIUM GREEN */}
            <linearGradient
              id="premiumGreen"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="45%" stopColor="#a3e635" />
              <stop offset="100%" stopColor="#65a30d" />
            </linearGradient>

            {/* BAR GLOW */}
            <filter id="premiumGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

          </defs>

          {/* GRID LINES */}
          {[0, 1, 2].map((_, i) => {
            const y = 36 + i * 34;

            return (
              <motion.line
                key={i}
                x1="70"
                y1={y + 8}
                x2="470"
                y2={y + 8}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                }}
              />
            );
          })}

          {/* AXIS */}
          <g stroke="#3F4A45" strokeWidth="1">

            {/* Y */}
            <line x1="70" y1="20" x2="70" y2="118" />

            {/* X */}
            <line x1="70" y1="118" x2="470" y2="118" />

          </g>

          {/* X TICKS */}
          {[0, 50, 100, 150, 200].map((tick, i) => {
            const x = 70 + (tick / max) * 400;

            return (
              <g key={i}>
                <line
                  x1={x}
                  y1="118"
                  x2={x}
                  y2="122"
                  stroke="#3F4A45"
                />

                <text
                  x={x}
                  y="135"
                  fill="#6B7280"
                  fontSize="8"
                  textAnchor="middle"
                >
                  ₹{tick}k
                </text>
              </g>
            );
          })}

          {/* BARS */}
          {bars.map((bar, index) => {
            const y = 28 + index * 34;

            const width = (bar.value / max) * 400;

            return (
              <g key={`${animateKey}-${index}`}>

                {/* LABEL */}
                <text
                  x="18"
                  y={y + 10}
                  fill="#9CA3AF"
                  fontSize="9"
                  fontWeight="500"
                >
                  {bar.label}
                </text>

                {/* GLOW BAR */}
                <motion.rect
                  x="70"
                  y={y}
                  rx="4"
                  ry="4"
                  height="16"
                  fill="url(#premiumGreen)"
                  filter="url(#premiumGlow)"
                  opacity="0.45"
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                />

                {/* MAIN BAR */}
                <motion.rect
                  x="70"
                  y={y}
                  rx="4"
                  ry="4"
                  height="16"
                  fill="url(#premiumGreen)"
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                />

                {/* SHINE SWEEP */}
                

              </g>
            );
          })}

        </svg>
      </div>

      {/* FOOTER */}
      <div
        className="
          flex justify-between items-center

          px-2
          mt-2

          text-[9px]
        "
      >

        {/* AWS */}
        <div className="text-center">
          <div className="text-[#6B7280] tracking-wide">
            AWS
          </div>

          <motion.div
            className="text-[#84cc16] font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            +12%
          </motion.div>
        </div>

        {/* AZURE */}
        <div className="text-center">
          <div className="text-[#6B7280] tracking-wide">
            AZURE
          </div>

          <motion.div
            className="text-[#ef4444] font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4,
            }}
          >
            -3%
          </motion.div>
        </div>

        {/* GCP */}
        <div className="text-center">
          <div className="text-[#6B7280] tracking-wide">
            GCP
          </div>

          <motion.div
            className="text-[#84cc16] font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.8,
            }}
          >
            +8%
          </motion.div>
        </div>

      </div>
    </div>
  );
}