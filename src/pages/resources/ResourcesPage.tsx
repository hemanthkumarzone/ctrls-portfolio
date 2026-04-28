const dummyEbooks = [
  {
    id: 1,
    title: "FinOps Guide 2026",
    description: "This is sample content. Real data will come from backend later.",
    file: "#",
  },
  {
    id: 2,
    title: "Cloud Cost Mastery",
    description: "This is sample content. Real data will come from backend later.",
    file: "#",
  },
  {
    id: 3,
    title: "AI Infrastructure Optimization",
    description: "This is sample content. Real data will come from backend later.",
    file: "#",
  },
];
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

const ResourcesPage = () => {
  const { type } = useParams();

  const [section, setSection] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ KEEP ORIGINAL BLOG LOGIC (DO NOT TOUCH)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const dropdownMap: Record<string, number> = {
    blog: 1,
    ebooks: 2,
    "release-notes": 3,
  };

  const isBlog = type === "blog";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dropdownId = dropdownMap[type || ""];

        if (!dropdownId) return;

        const sectionRes = await axios.get(
          `${BASE_URL}/sections/?dropdown_id=${dropdownId}`
        );

        if (!sectionRes.data.length) return;

        const sectionData = sectionRes.data[0];
        setSection(sectionData);

        const cardsRes = await axios.get(
          `${BASE_URL}/cards/?section_id=${sectionData.id}`
        );

        setCards(cardsRes.data);
      } catch (err) {
        console.error("❌ Resource error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!section && type !== "ebooks") {
  return <div className="text-white p-10">No data found</div>;
}

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">

        {/* 🔹 HEADER */}
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#9fdc00]"
            dangerouslySetInnerHTML={{
  __html: section?.title || "Download E-Books",
}}
          />

          <div
            className="text-white/70 mt-5 text-lg"
            dangerouslySetInnerHTML={{
  __html:
    section?.description ||
    "Get in-depth guides on cost management and cloud optimization.",
}}
          />
        </div>

        {/* 🔥 BLOG → KEEP EXACT (UNCHANGED) */}
        {isBlog ? (

          <div className="mt-14 max-w-4xl mx-auto space-y-6">

            {cards.map((card, index) => (
              <div
                key={card.id}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >

                <div className="
                  px-6 py-5
                  rounded-xl
                  border border-[#436900]
                  bg-[#0F1800]
                  flex justify-between items-center
                  cursor-pointer
                  transition-all duration-200 ease-out
                  hover:border-[#77B900]
                  hover:shadow-[0_0_20px_rgba(119,185,0,0.15)]
                ">
                  <h3
                    className="text-[#9fdc00] text-lg font-semibold"
                    dangerouslySetInnerHTML={{ __html: card.title as string }}
                  />

                  <span
                    className={`text-[#77B900] text-xl transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </div>

                <div
                  className={`
                    absolute left-0 w-full z-10
                    origin-top
                    transition-all duration-200 ease-out
                    ${
                      activeIndex === index
                        ? "opacity-100 translate-y-2 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-0 scale-95 pointer-events-none"
                    }
                  `}
                >
                  <div className="
                    mt-3
                    bg-[#131814]
                    border border-[#283E00]
                    rounded-xl
                    p-5
                    shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  ">
                    <div
                      className="text-white/70 text-sm leading-[26px]"
                      dangerouslySetInnerHTML={{
                        __html: card.description as string,
                      }}
                    />
                  </div>
                </div>

              </div>
            ))}

          </div>

        ) : (

          // ✅ ONLY UPDATED THIS PART (EBOOKS + RELEASE NOTES)
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {(type === "ebooks" && cards.length === 0 ? dummyEbooks : cards).map((card) => (
              <div
  key={card.id}
  className="
    p-8
    rounded-[22px]
    bg-[#0F1800]
    border border-[#436900]
    transition-all duration-300
    hover:shadow-[0_0_40px_rgba(119,185,0,0.35)]
    hover:-translate-y-2
  "
>

                {/* TITLE */}
                <h3
                  className="text-xl font-semibold text-[#9fdc00]"
                  dangerouslySetInnerHTML={{ __html: card.title as string }}
                />

                {/* ✅ RELEASE NOTES FIX */}
                <div
                  className={`text-white/60 mt-3 ${
                    type === "release-notes"
                      ? "text-sm truncate"
                      : "text-sm leading-relaxed"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: card.description as string,
                  }}
                />

                {type === "ebooks" && card.file && (
  <div className="mt-5">
    <a
      href={
  card.file?.startsWith("http")
    ? card.file
    : `http://127.0.0.1:8000${card.file}`
}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="
          px-5 py-2
          bg-[#77B900]
          text-black
          rounded-lg
          font-medium
          hover:scale-105
          transition-all duration-200
        "
      >
        Download
      </button>
    </a>
  </div>
)}

              </div>
            ))}

          </div>

        )}

      </div>
    </div>
  );
};

export default ResourcesPage;