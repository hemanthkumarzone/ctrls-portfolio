import { useParams } from "react-router-dom";
import { platformData } from "../../content/platformData";
import ResourceCard from "../../components/ui/ResourceCard";


const PlatformPage = () => {
  const { type } = useParams();

  const data = platformData[type as keyof typeof platformData];

  if (!data) {
    return (
      <div className="text-white p-10">
        <h1>Platform not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#9fdc00]">
          {data.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/70 mt-5 text-lg max-w-3xl">
          {data.description}
        </p>

        {/* FEATURES */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((item: string, index: number) => (
  <ResourceCard key={index} title={item} />
))}
        </div>

      </div>
    </div>
  );
};

export default PlatformPage;