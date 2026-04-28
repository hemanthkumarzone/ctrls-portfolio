import { useParams, useLocation } from "react-router-dom";

const HtmlViewer = () => {
  const { type } = useParams();
  const location = useLocation();

  const safeType = (type || "").toLowerCase().trim();

  let filePath = "";

  if (location.pathname.startsWith("/company")) {
    filePath = `/pages/${safeType}.html`;
  } else if (location.pathname.startsWith("/services")) {
    filePath = `/pages/services/${safeType}.html`;
  } else if (location.pathname.startsWith("/platform")) {
    filePath = `/pages/platform/${safeType}.html`;
  } else if (location.pathname.startsWith("/pricing")) {
    filePath = `/pages/platform/pricing.html`;
  }

  return (
    <div className="w-full h-screen">
      {filePath ? (
        <iframe
          src={filePath}
          className="w-full h-full border-none"
          title="html-view"
        />
      ) : (
        <div className="text-white p-10">Page not found</div>
      )}
    </div>
  );
};

export default HtmlViewer;