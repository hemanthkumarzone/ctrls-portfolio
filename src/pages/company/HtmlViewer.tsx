import { useParams, useLocation } from "react-router-dom";
import GlobalBackground from "../../components/ui/GlobalBackground";

const HtmlViewer = () => {
  const { type } = useParams();
  const location = useLocation();

  const safeType = (type || "").toLowerCase().trim();

  let filePath = "";

  // ✅ ONLY THESE HAVE HTML FILES
  const validPlatformPages = [
    "ai-financial-management",
    "savings-acquisition-cost",
    "cost-per-result",
    "hybrid-systems",
    "gpu-cost-attribution",
    "unified-billing",
    "pricing",
    "tco_hybrid_systems_finops"
  ];

  // ✅ COMPANY PAGES
  if (location.pathname.startsWith("/company")) {
    filePath = `/pages/${safeType}.html`;
  }

  // ✅ SERVICES PAGES
  else if (location.pathname.startsWith("/services")) {
    filePath = `/pages/services/${safeType}.html`;
  }

  // ✅ PLATFORM PAGES
  else if (location.pathname.startsWith("/platform")) {
    filePath = `/pages/platform/${safeType}.html`;
  }

  // ✅ PRICING PAGE
  else if (location.pathname.startsWith("/pricing")) {
    filePath = `/pages/platform/pricing.html`;
  }

  // ✅ ONLY LOAD PLATFORM IFRAME IF VALID
  const shouldRenderIframe =
    !location.pathname.startsWith("/platform") ||
    validPlatformPages.includes(safeType);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* ✅ REAL WEBSITE GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* ✅ PAGE CONTENT */}
      <div className="relative z-10 w-full min-h-screen">

        {shouldRenderIframe ? (
          <iframe
  src={filePath}
  title="html-view"
  
  className="w-full min-h-screen border-none"
  style={{
    background: "transparent",
    opacity: 1,
  }}
/>
        ) : (
          <div className="w-full min-h-screen" />
        )}

      </div>
    </div>
  );
};

export default HtmlViewer;