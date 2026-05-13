import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Graph() {
  const [key, setKey] = useState(0);

  // LOOP GRAPH ANIMATION
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // =================================================
  // REQUIRED CURVE
  // =================================================
  const required = [
    [60, 170],
    [90, 172],
    [120, 164],
    [150, 166],
    [180, 158],
    [210, 160],
    [240, 150],
    [270, 152],
    [300, 168],
    [330, 146],
    [360, 146],
    [390, 146],
    [430, 140],
  ];

  // =================================================
  // ALLOCATED CURVE
  // =================================================
  const allocated = [
    [60, 78],
    [90, 70],
    [120, 72],
    [150, 92],
    [180, 95],
    [210, 76],
    [240, 82],
    [270, 102],
    [300, 110],
    [330, 126],
    [360, 132],
    [390, 118],
    [430, 120],
  ];

  // =================================================
  // BUILD SMOOTH PATH
  // =================================================
  const buildSmoothPath = (points: number[][]) => {
    let d = `M ${points[0][0]} ${points[0][1]}`;

    for (let i = 0; i < points.length - 1; i++) {
      const x1 = points[i][0];
      const y1 = points[i][1];

      const x2 = points[i + 1][0];
      const y2 = points[i + 1][1];

      const cx = (x1 + x2) / 2;

      d += ` C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
    }

    return d;
  };

  const requiredPath = buildSmoothPath(required);
  const allocatedPath = buildSmoothPath(allocated);

  return (
    <div className="w-full h-full flex flex-col">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <div className="flex justify-between items-start px-[4px]">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-[10px] h-[10px] rounded-full bg-[#84ff00]"
            animate={{
              boxShadow: [
                "0 0 5px #84ff00",
                "0 0 16px #84ff00",
                "0 0 5px #84ff00",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />

          <div className="text-white text-[20px] font-semibold">
            CtrlS
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-right">
          <div className="text-[8px] text-[#8F8F8F]">
            Waste
          </div>

          <div className="text-[#84ff00] text-[13px] font-semibold">
            13%
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* CHART BOX */}
      {/* ================================================= */}
      <div
        className="
          relative
          flex-1
          mt-3

          rounded-[22px]

          bg-black/85

          overflow-hidden

          border border-[#84ff00]/10
        "
      >
        {/* ================================================= */}
        {/* SVG */}
        {/* ================================================= */}
        <svg
          viewBox="0 0 520 240"
          className="w-full h-full"
        >
          <defs>
            {/* GREEN FLOW */}
            <linearGradient
              id="greenFlow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00ffb3">
                <animate
                  attributeName="stop-color"
                  values="
                    #00ffb3;
                    #84ff00;
                    #00ffb3
                  "
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>

              <stop offset="100%" stopColor="#84ff00">
                <animate
                  attributeName="stop-color"
                  values="
                    #84ff00;
                    #00ffb3;
                    #84ff00
                  "
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* GREEN GLOW */}
            <filter id="greenGlow">
              <feGaussianBlur
                stdDeviation="3"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* BLUE GLOW */}
            <filter id="blueGlow">
              <feGaussianBlur
                stdDeviation="2"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================================================= */}
          {/* Y LABELS */}
          {/* ================================================= */}
          {[100, 50, 0].map((v, i) => {
            const y = 62 + i * 58;

            return (
              <text
                key={i}
                x="10"
                y={y}
                fill="white"
                fontSize="12"
                fontWeight="500"
              >
                {v}%
              </text>
            );
          })}

          {/* ================================================= */}
          {/* DASH LINE */}
          {/* ================================================= */}
          <line
            x1="210"
            y1="45"
            x2="210"
            y2="185"
            stroke="#84ff00"
            strokeWidth="2"
            strokeDasharray="8 8"
            opacity="0.8"
          />

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}
          <text
            x="222"
            y="58"
            fill="white"
            fontSize="13"
            fontWeight="600"
          >
            CtrlS
          </text>

          {/* ================================================= */}
          {/* ALLOCATED */}
          {/* ================================================= */}
          <motion.path
            key={`alloc-${key}`}
            d={allocatedPath}
            fill="none"
            stroke="url(#greenFlow)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#greenGlow)"
            initial={{
              pathLength: 0,
              opacity: 0.7,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
          />

          {/* ================================================= */}
          {/* REQUIRED */}
          {/* ================================================= */}
          <motion.path
            key={`req-${key}`}
            d={requiredPath}
            fill="none"
            stroke="#1ea7ff"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#blueGlow)"
            initial={{
              pathLength: 0,
              opacity: 0.7,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 3,
              delay: 0.15,
              ease: "linear",
            }}
          />

          {/* ================================================= */}
          {/* END DOTS */}
          {/* ================================================= */}
          <motion.circle
            cx="430"
            cy="120"
            r="4"
            fill="#84ff00"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />

          <motion.circle
            cx="430"
            cy="140"
            r="4"
            fill="#84ff00"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 0.3,
            }}
          />
        </svg>

        {/* ================================================= */}
        {/* LEGEND */}
        {/* ================================================= */}
        <div
          className="
            absolute
            bottom-[12px]
            left-[62px]

            flex items-center gap-14

            text-[10px]
          "
        >
          {/* REQUIRED */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-[2px] bg-[#1ea7ff]" />

            <span className="text-gray-300">
              Required
            </span>
          </div>

          {/* ALLOCATED */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-[2px] bg-[#00ffb3]" />

            <span className="text-gray-300">
              Allocated
            </span>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <div className="flex items-center justify-between mt-3 px-2">
        {/* BUTTON */}
        <div
          className="
            px-5
            py-2

            rounded-[12px]

            bg-[#1d3408]

            text-white
            text-[12px]
            font-medium
          "
        >
          Optimized
        </div>

        {/* CENTER */}
        <div className="text-center">
          <div className="text-[10px] text-gray-300">
            CPU/GPU/Memory
          </div>

          <div className="text-[10px] text-gray-500">
            Resources
          </div>
        </div>

        {/* ALLOCATED */}
        <div className="text-center">
          <div className="text-[10px] text-gray-400">
            Allocated
          </div>

          <div className="text-[#00ffb3] text-[14px] font-semibold">
            52%
          </div>
        </div>

        {/* REQUIRED */}
        <div className="text-center">
          <div className="text-[10px] text-gray-400">
            Required
          </div>

          <div className="text-[#1ea7ff] text-[14px] font-semibold">
            39%
          </div>
        </div>
      </div>
    </div>
  );
}