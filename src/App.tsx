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
import HtmlViewer from "./pages/company/HtmlViewer";
import PlatformHtmlPage from "./pages/platform/PlatformHtmlPage";


import AboutPage from "./pages/company/AboutPage";
import Customers from "./pages/company/Customers";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import GovernancePage from "./pages/company/governancepage";

import BlogPage from "./pages/resources/BlogPage";
import BlogDetails from "./pages/resources/BlogDetails";
import Blogcloud from "./pages/resources/BlogCloud";
import BlogDevops from "./pages/resources/BlogDevops";

import Contactpage from "./components/requirements/Contactpage";

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

              {/* SERVICES */}
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

              {/* SERVICES → HTML */}
              <Route path="/services/:type" element={<HtmlViewer />} />

              {/* PLATFORM → IFRAME (FIXED) */}
              <Route path="/platform/:type" element={<HtmlViewer />} />

              {/* COMPANY STATIC */}
              <Route path="/company/about" element={<AboutPage />} />
              <Route path="/company/customers" element={<Customers />} />
              <Route path="/company/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/company/governance" element={<GovernancePage />} />

              {/* COMPANY → HTML */}
              <Route path="/company/:type" element={<HtmlViewer />} />

              {/* RESOURCES */}
              <Route path="/resources/:type" element={<ResourcesPage />} />

              {/* BLOG */}
              <Route path="/resources/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/blog/cloud" element={<Blogcloud />} />
              <Route path="/blog/devops" element={<BlogDevops />} />

              {/* CONTACT */}
              <Route path="/contact" element={<Contactpage />} />
              <Route path="/platform/:type" element={<PlatformHtmlPage />} />
              <Route path="/pricing" element={<HtmlViewer />} />

            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;