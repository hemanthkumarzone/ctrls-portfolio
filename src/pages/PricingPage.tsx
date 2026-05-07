import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PricingPreview from "./PricingPreview";

export default function PricingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("token");

    if (isLoggedIn) {
      // 🔐 Redirect to actual pricing HTML
      navigate("/platform/pricing");
    }
  }, [navigate]);

  // 🔓 Not logged in → show preview
  return <PricingPreview />;
}