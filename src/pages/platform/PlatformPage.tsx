import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResourceCard from "../../components/ui/ResourceCard";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

const PlatformPage = () => {
  const { type } = useParams();

  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ CORRECT SLUG MAPPING
  const dropdownMap: Record<string, number> = {
    "ai-cost-management": 4,
    "cost-to-save": 5,
    "cost-to-outcomes": 6,
    "hybrid-cloud": 7,
    "gpu-chargeback": 8,
    "kubernetes-cost": 9,
    "tier2-azure": 10,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dropdownId = dropdownMap[type || ""];

        console.log("URL TYPE:", type);
        console.log("DROPDOWN ID:", dropdownId);

        if (!dropdownId) {
          console.error("❌ Invalid type:", type);
          setSections([]);
          return;
        }

        // 🔥 GET SECTIONS
        const sectionRes = await axios.get(
          `${BASE_URL}/sections/?dropdown_id=${dropdownId}`
        );

        console.log("SECTIONS:", sectionRes.data);

        // 🔥 GET CARDS FOR EACH SECTION
        const sectionsWithCards = await Promise.all(
          sectionRes.data.map(async (section: any) => {
            const cardsRes = await axios.get(
              `${BASE_URL}/cards/?section_id=${section.id}`
            );

            return {
              ...section,
              cards: cardsRes.data,
            };
          })
        );

        setSections(sectionsWithCards);
      } catch (error) {
        console.error("❌ Platform error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  // ⏳ LOADING
  if (loading) {
    return (
      <div className="text-white p-10 text-lg">
        Loading platform data...
      </div>
    );
  }

  // ❌ NO DATA
  if (!sections.length) {
    return (
      <div className="text-white p-10 text-lg">
        No data found for this platform.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* 🔁 LOOP SECTIONS */}
        {sections.map((section, index) => (
          <div key={index} className="mb-20">

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#9fdc00]">
              {section.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/70 mt-5 text-lg max-w-3xl">
              {section.description}
            </p>

            {/* CARDS */}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {section.cards.length > 0 ? (
                section.cards.map((card: any) => (
                  <ResourceCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                  />
                ))
              ) : (
                <p className="text-white/50">No cards available</p>
              )}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PlatformPage;