import { useParams, useLocation } from "react-router-dom";

const HtmlViewer = () => {
  const { type } = useParams();
  const location = useLocation();

  // 🔥 Detect route type
  const isCompany = location.pathname.startsWith("/company");

  // 🔥 Set correct folder
  const filePath = isCompany
    ? `/pages/${type}.html`              // company files
    : `/pages/services/${type}.html`;   // services files

  console.log("Loading file:", filePath);

  return (
    <iframe
      src={filePath}
      className="w-full h-screen border-none"
      title={type}
    />
  );
};

export default HtmlViewer;