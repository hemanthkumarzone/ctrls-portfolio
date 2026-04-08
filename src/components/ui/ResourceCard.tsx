type Props = {
  title: string;
  description: string;
  type?: string;
};

const ResourceCard = ({ title, description, type }: Props) => {
  return (
    <div
      className="
      p-6 rounded-2xl
      bg-[#0F1800]
      border border-[#436900]
      transition-all duration-300
      hover:shadow-[0_0_25px_rgba(119,185,0,0.25)]
      hover:-translate-y-1
    "
    >
      <h3 className="text-xl font-semibold text-[#9fdc00]">
        {title}
      </h3>

      <p className="text-sm text-white/60 mt-3 leading-relaxed">
        {description}
      </p>

      {/* ✅ DOWNLOAD BUTTON FIXED */}
      {type === "ebooks" && (
        <button
          className="
          mt-5 px-4 py-2
          bg-[#77B900]
          text-black
          rounded-lg
          font-medium
          hover:opacity-90
        "
        >
          Download
        </button>
      )}
    </div>
  );
};

export default ResourceCard;