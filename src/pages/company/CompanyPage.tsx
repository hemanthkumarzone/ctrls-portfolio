import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResourceCard from "../../components/ui/ResourceCard";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

const CompanyPage = () => {
  const { type } = useParams();

  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ MATCH THIS WITH YOUR DJANGO DROPDOWN IDs
  const dropdownMap: Record<string, number> = {
   "about": 11,
  "customers": 12,
  "governance": 13,
  "privacy-policy": 14,
  "terms-of-use": 15,   
  "security": 16, 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dropdownId = dropdownMap[type || ""];

        console.log("TYPE:", type);
        console.log("DROPDOWN ID:", dropdownId);

        if (!dropdownId) {
          console.error("Invalid company type:", type);
          setSections([]);
          return;
        }

        const res = await axios.get(
          `${BASE_URL}/sections/?dropdown_id=${dropdownId}`
        );

        console.log("COMPANY API:", res.data);

        setSections(res.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!sections.length) {
    return <div className="text-white p-10">No data found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">
      <div className="w-full px-6 py-16">

        {sections.map((section, index) => (
          <div key={index} className="mb-20">

            <h1
  className="text-4xl md:text-5xl font-bold text-[#9fdc00]"
  dangerouslySetInnerHTML={{ __html: section.title as string }}
/>

           <div
  className="text-white/70 mt-5 text-lg w-full leading-relaxed"
  dangerouslySetInnerHTML={{ __html: section.description as string }}
/>

            <div className="mt-14 grid gap-8 grid-cols-1">
              {section.cards?.length > 0 ? (
                section.cards.map((card: any, i: number) => (
                  <ResourceCard
                    key={i}
                    title={card.title}
                    description={card.description}
                  />
                ))
              ) : (
                <p>No cards available</p>
              )}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CompanyPage;