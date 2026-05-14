import { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import GlobalBackground from "./components/ui/GlobalBackground";

import Hero from "./components/sections/Hero";
import Infrastructure from "./components/sections/Infrastructure";
import VisibilitySection from "./components/sections/VisibilitySection";
import DemoSection from "./components/sections/DemoSection";
import KoreValueSection from "./components/sections/KoreValueSection";
import ServicesSection from "./components/sections/ServicesSection";

import ResourcesPage from "./pages/resources/ResourcesPage";
import HtmlViewer from "./pages/company/HtmlViewer";

import AboutPage from "./pages/company/AboutPage";
import Customers from "./pages/company/Customers";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import GovernancePage from "./pages/company/governancepage";

import BlogPage from "./pages/resources/BlogPage";
import BlogDetails from "./pages/resources/BlogDetails";

import BookDemo from "./pages/BookDemo";
import PricingPage from "./pages/PricingPage";

import KubernetesROITracking from "./pages/platform/KubernetesROITracking";

import Contactpage from "./components/requirements/Contactpage";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const scroll = params.get("scroll");

    // ✅ DEMO SECTION SCROLL
    if (scroll === "demo") {
      setTimeout(() => {
        document
          .getElementById("demo")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 200);
    }

    // ✅ VIDEO SECTION SCROLL
    if (scroll === "video") {
      setTimeout(() => {
        const section =
          document.getElementById("video-section");

        if (section) {
          const yOffset = -110;

          const y =
            section.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND */}
      <GlobalBackground />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[30px]" />
                  </div>

                  <Infrastructure />

                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[50px]" />
                  </div>

                  <VisibilitySection />

                  <DemoSection />

                  <KoreValueSection />
                </>
              }
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={
                <>
                  <ServicesSection />

                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[10px]" />
                  </div>

                  <KoreValueSection />
                </>
              }
            />

            {/* PLATFORM */}
            <Route
              path="/platform/kubernetes-roi-tracking"
              element={<KubernetesROITracking />}
            />

            {/* SERVICES → HTML */}
            <Route
              path="/services/:type"
              element={<HtmlViewer />}
            />

            {/* PLATFORM → HTML */}
            <Route
              path="/platform/:type"
              element={<HtmlViewer />}
            />

            {/* COMPANY */}
            <Route
              path="/company/about"
              element={<AboutPage />}
            />

            <Route
              path="/company/customers"
              element={<Customers />}
            />

            <Route
              path="/company/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/company/governance"
              element={<GovernancePage />}
            />

            {/* COMPANY → HTML */}
            <Route
              path="/company/:type"
              element={<HtmlViewer />}
            />

            {/* RESOURCES */}
            <Route
              path="/resources/:type"
              element={<ResourcesPage />}
            />

            {/* BLOG */}
            <Route
              path="/resources/blog"
              element={<BlogPage />}
            />

            <Route
              path="/blog/:id"
              element={<BlogDetails />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contactpage />}
            />

            {/* BOOK DEMO */}
            <Route
              path="/book-demo"
              element={<BookDemo />}
            />

            {/* PRICING */}
            <Route
              path="/pricing"
              element={<PricingPage />}
            />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;