

const CostBreakdownCard = () => {
  const data = [
    { label: "GPT-4", value: 4821 },
    { label: "GPU", value: 3690 },
    { label: "Claude", value: 2540 },
    { label: "Embed", value: 1120 },
    { label: "Storage", value: 640 },
  ];

  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-[420px] min-w-[420px] bg-[#07110a] border border-[#77B900]/20 rounded-3xl p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white/70 text-sm tracking-wider">
          COST BREAKDOWN · THIS MONTH
        </h3>

        <span className="bg-[#0f2a17] text-[#9fdc00] text-xs px-3 py-1 rounded-full">
          Live
        </span>
      </div>

      {/* 🔥 MINI GRAPH */}
      <div className="mb-6">

        <div className="flex items-end justify-between h-[70px] px-3 mb-3">
          {data.map((item, i) => {
            const height = (item.value / max) * 60;

            return (
              <div key={i} className="flex flex-col items-center w-[42px]">

                <div
                  className="w-[26px] rounded-[4px] transition-all duration-500"
                  style={{
                    height: `${height}px`,
                    background:
                      i === 3
                        ? "linear-gradient(180deg, #22c55e, #16a34a)"
                        : "linear-gradient(180deg, #5B8CFF, #3B6EF5)",
                    boxShadow:
                      i === 3
                        ? "0 0 10px rgba(34,197,94,0.4)"
                        : "0 0 10px rgba(91,140,255,0.4)",
                  }}
                />

              </div>
            );
          })}
        </div>

        {/* LABELS */}
        <div className="flex justify-between text-[11px] text-white/40 px-3">
          {data.map((item, i) => (
            <span key={i} className="w-[42px] text-center">
              {item.label}
            </span>
          ))}
        </div>

      </div>

      {/* 🔥 PROGRESS LIST */}
      <div className="space-y-4">
        {data.map((item, i) => {
          const percent = (item.value / max) * 100;

          return (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/80">{item.label}</span>
                <span className="text-white/60">${item.value}</span>
              </div>

              <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percent}%`,
                    background:
                      i === 3
                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                        : "linear-gradient(90deg, #9fdc00, #77B900)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CostBreakdownCard;