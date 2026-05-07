import { useParams, useLocation } from "react-router-dom";

const HtmlViewer = () => {
  const { type } = useParams();
  const location = useLocation();

  const safeType = (type || "").toLowerCase().trim();

  let filePath = "";

  // ✅ ONLY THESE HAVE HTML FILES (EDIT THIS LIST)
  const validPlatformPages = [
    "ai-financial-management",
    "savings-acquisition-cost",
    "cost-per-result",
    "tco-hybrid-systems",
    "gpu-cost-attribution",
    "kubernetes-roi-tracking",
    "unified-billing",
    "pricing"
  ];

  if (location.pathname.startsWith("/company")) {
    filePath = `/pages/${safeType}.html`;
  } else if (location.pathname.startsWith("/services")) {
    filePath = `/pages/services/${safeType}.html`;
  } else if (location.pathname.startsWith("/platform")) {
    filePath = `/pages/platform/${safeType}.html`;
  } else if (location.pathname.startsWith("/pricing")) {
    filePath = `/pages/platform/pricing.html`;
  }

  // ✅ ONLY LOAD IFRAME IF PAGE EXISTS IN LIST
  const shouldRenderIframe =
    !location.pathname.startsWith("/platform") ||
    validPlatformPages.includes(safeType);

  return (
    <div className="w-full h-screen">
      {shouldRenderIframe ? (
        <iframe
          src={filePath}
          className="w-full h-full border-none"
          title="html-view"
        />
      ) : (
        <div className="w-full h-full" /> // ✅ BLANK PAGE
      )}
    </div>
  );
};

export default HtmlViewer;