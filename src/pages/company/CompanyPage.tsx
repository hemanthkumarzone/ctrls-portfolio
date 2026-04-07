import { useParams } from "react-router-dom";
import ResourceCard from "../../components/ui/ResourceCard";
import { companyData } from "../../content/companyData";

const CompanyPage = () => {
  const { type } = useParams();

  const data = companyData[type as keyof typeof companyData];

  if (!data) {
    return (
      <div className="text-white p-10">
        <h1>Company page not found</h1>
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

        {/* CONTENT CARDS */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item: string, index: number) => (
            <ResourceCard key={index} title={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CompanyPage;