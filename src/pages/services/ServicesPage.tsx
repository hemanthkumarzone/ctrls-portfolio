import { useParams, useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white px-6 py-16 max-w-[1200px] mx-auto">

      {/* 🔥 BACK BUTTON */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#9fdc00] hover:underline"
        >
          ← Back
        </button>
      </div>

      {/* 🔥 BREADCRUMB */}
      <div className="text-sm text-white/60 mb-6">
        Home / Services /{" "}
        <span className="text-[#9fdc00] capitalize">
          {type?.replace("-", " ")}
        </span>
      </div>

      {/* 🔥 TITLE */}
      <h1 className="text-4xl font-bold text-[#9fdc00] capitalize">
        {type?.replace("-", " ")}
      </h1>

      {/* 🔥 DESCRIPTION */}
      <p className="mt-4 text-white/70 max-w-2xl">
        This section contains detailed information about the selected service.
      </p>

      {/* 🔥 SAMPLE CONTENT */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="border border-[#9fdc00]/30 rounded-xl p-6 hover:bg-[#9fdc00]/10 transition"
          >
            <h3 className="text-[#9fdc00] font-semibold">
              Feature {i + 1}
            </h3>
            <p className="text-white/70 mt-2">
              Feature description goes here.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServicesPage;