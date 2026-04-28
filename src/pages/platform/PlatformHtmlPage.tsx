import { useParams } from "react-router-dom";

const PlatformHtmlPage = () => {
  const { type } = useParams();

  const safeType = (type || "").toLowerCase().trim();

  const filePath = `/pages/platform/${safeType}.html`;

  return (
    <div className="w-full h-screen">
      <iframe
        src={filePath}
        className="w-full h-full border-none"
        title={safeType}
      />
    </div>
  );
};

export default PlatformHtmlPage;