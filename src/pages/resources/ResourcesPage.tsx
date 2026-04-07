import { useParams } from "react-router-dom";
import ResourceCard from "../../components/ui/ResourceCard";
import { resourcesData } from "../../content/resourcesData";

const ResourcesPage = () => {
  const { type } = useParams();

  const data = resourcesData[type as keyof typeof resourcesData];

  if (!data) {
    return (
      <div className="text-white p-10">
        <h1>Resource not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1200] text-white">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* HEADER SECTION */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9fdc00] leading-tight">
            {data.title}
          </h1>

          <p className="text-white/70 mt-5 text-lg">
            {data.description}
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item: string, index: number) => (
            <ResourceCard key={index} title={item} type={type} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;