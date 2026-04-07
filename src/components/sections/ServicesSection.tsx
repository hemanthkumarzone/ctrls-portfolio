import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceApi";
import ServiceCard from "../ui/ServiceCard";

type Service = {
  id: number;
  icon_type: string;
  icon: string;
  title: string;
  description: string;
};

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error("Services API error:", error);
    }
  };

  if (!services.length) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-white">
        Loading Services...
      </div>
    );
  }

  // 🔥 SPLIT DATA
  const firstEight = services.slice(0, 8);
  const lastTwo = services.slice(8);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16">

      {/* 🔥 FIRST 8 CARDS (4 + 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {firstEight.map((item) => (
          <ServiceCard
            key={item.id}
            icon={item.icon_type === "image" ? item.icon : undefined}
            emoji={item.icon_type === "text" ? item.icon : undefined}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* 🔥 LAST 2 CARDS (CENTERED) */}
      {lastTwo.length > 0 && (
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {lastTwo.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon_type === "image" ? item.icon : undefined}
              emoji={item.icon_type === "text" ? item.icon : undefined}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ServicesSection;