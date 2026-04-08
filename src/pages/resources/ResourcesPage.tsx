import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ResourceCard from "../../components/ui/ResourceCard";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

const ResourcesPage = () => {
  const { type } = useParams();

  const [section, setSection] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ CORRECT MAPPING (MATCH YOUR URL)
  const dropdownMap: Record<string, number> = {
    blog: 1,
    ebooks: 2,
    "release-notes": 3,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dropdownId = dropdownMap[type || ""];

        console.log("RESOURCE TYPE:", type);
        console.log("DROPDOWN ID:", dropdownId);

        if (!dropdownId) {
          console.error("❌ Invalid resource type:", type);
          return;
        }

        const sectionRes = await axios.get(
          `${BASE_URL}/sections/?dropdown_id=${dropdownId}`
        );

        if (!sectionRes.data.length) {
          console.error("❌ No section found");
          return;
        }

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

  if (!section) {
    return <div className="text-white p-10">No data found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9fdc00]">
            {section.title}
          </h1>

          <p className="text-white/70 mt-5 text-lg">
            {section.description}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ResourceCard
              key={card.id}
              title={card.title}
              description={card.description}
              type={type}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;