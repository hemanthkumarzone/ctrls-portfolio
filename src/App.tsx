import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import GlobalBackground from "./components/ui/GlobalBackground";

import Hero from "./components/sections/Hero";
import Infrastructure from "./components/sections/Infrastructure";
import VisibilitySection from "./components/sections/VisibilitySection";
import DemoSection from "./components/sections/DemoSection";
import KoreValueSection from "./components/sections/KoreValueSection";
import ServicesSection from "./components/sections/ServicesSection";

import ResourcesPage from "./pages/resources/ResourcesPage";
import PlatformPage from "./pages/platform/PlatformPage";
import CompanyPage from "./pages/company/CompanyPage";

// 🔥 IMPORTANT IMPORT (DETAIL PAGE)
import ServiceDetailsPage from "./pages/service/ServiceDetailsPage";

function App() {
  return (
    <BrowserRouter>
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
                    <Infrastructure />

                    <div className="w-full flex justify-center">
                      <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                    </div>

                    <VisibilitySection />
                    <DemoSection />
                    <KoreValueSection />
                  </>
                }
              />

              {/* SERVICES MAIN PAGE (LIST OF 11 CARDS) */}
              <Route
                path="/services"
                element={
                  <>
                    <ServicesSection />

                    <div className="w-full flex justify-center">
                      <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                    </div>

                    <KoreValueSection />
                  </>
                }
              />

              {/* 🔥 SERVICE DETAIL PAGE (DYNAMIC) */}
              <Route path="/services/:type" element={<ServiceDetailsPage />} />

              {/* RESOURCES */}
              <Route path="/resources/:type" element={<ResourcesPage />} />

              {/* PLATFORM */}
              <Route path="/platform/:type" element={<PlatformPage />} />

              {/* COMPANY */}
              <Route path="/company/:type" element={<CompanyPage />} />

            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;