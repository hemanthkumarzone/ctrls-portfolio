import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServiceDetails } from "../../services/serviceApi";
import API from "../../api/api";

const ServiceDetailsPage = () => {
  const { type } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    try {
      // ✅ STEP 1: GET DROPDOWNS
      const dropdownRes = await API.get("/dropdowns/");

      // ✅ STEP 2: MATCH SLUG CORRECTLY
      const match = dropdownRes.data.find((item: any) => {
        const slug = item.path.split("/").pop();
        return slug === type;
      });

      if (!match) {
        console.error("Dropdown not found");
        return;
      }

      console.log("MATCH:", match);

      // ✅ STEP 3: GET SECTION DATA
      const res = await getServiceDetails(match.id);

      setData(res[0]);
    } catch (err) {
      console.error("Service Details Error:", err);
    }
  };

  if (!data)
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* 🔙 BACK BUTTON */}
        <div
          className="text-[#9fdc00] cursor-pointer mb-6"
          onClick={() => window.history.back()}
        >
          ← Back
        </div>

        {/* 🔥 BREADCRUMB */}
        <p className="text-white/60 mb-4">
          Home / Services /{" "}
          <span className="text-[#9fdc00] capitalize">
            {type?.replace(/-/g, " ")}
          </span>
        </p>

        {/* 🟢 TITLE */}
       <h1
  className="text-4xl md:text-5xl font-bold text-[#9fdc00]"
  dangerouslySetInnerHTML={{ __html: data.title as string }}
/>

        <div
  className="text-white/70 mt-5 text-lg max-w-3xl"
  dangerouslySetInnerHTML={{ __html: data.description as string }}
/>
        {/* 🟢 CARDS */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card: any) => (
            <div
              key={card.id}
              className="border border-[#77B900]/30 rounded-[20px] p-6 bg-[#0F1A12] transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(119,185,0,0.4)]"
            >
              <h3 className="text-[#9fdc00] text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm leading-[24px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsPage;