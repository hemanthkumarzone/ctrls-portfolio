import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

import VisibilityCard from "../ui/VisibilityCard";
import { getVisibility } from "../../services/visibilityApi";
import demoVideo from "../../assets/demo.mp4";

type Card = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

type VisibilityData = {
  title: string;
  description: string;
  cards: Card[];
};

export default function VisibilitySection() {
  const [visibility, setVisibility] = useState<VisibilityData | null>(null);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate(); // ✅ ADD THIS

  // 🎯 SCROLL → AUTO PAUSE VIDEO
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (!entry.isIntersecting) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // 🎯 API CALL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVisibility();
        setVisibility(data);
      } catch (error) {
        console.error("Visibility API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ FIXED: CONTACT BUTTON → ROUTE NAVIGATION
  const handleContactClick = () => {
    navigate("/contact");
  };

  // 🎯 DEMO SCROLL
  const handleDemoClick = () => {
    const section = document.getElementById("demo");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // 🎯 LOADING
  if (loading) {
    return (
      <div className="text-white text-center mt-10">
        Loading Visibility...
      </div>
    );
  }

  if (!visibility) {
    return (
      <div className="text-white text-center mt-10">
        No visibility data available.
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      id="video-section"
      className="relative w-full flex flex-col items-center py-16 lg:py-20"
    >

      {/* 🎥 VIDEO */}
      <div className="w-full flex justify-center -mt-16 md:-mt-24 lg:-mt-28 mb-12 px-4">
        <div className="w-full max-w-[740px] relative">
          <div className="relative w-full pb-[56%]">

            <div className="absolute inset-0 rounded-[60px] p-[2px] bg-gradient-to-r from-[#0F1800] to-[#77B900]">
              <div className="w-full h-full rounded-[58px] bg-[#131814] overflow-hidden">

                <video
                  ref={videoRef}
                  src={demoVideo}
                  
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🔘 BUTTONS */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 px-4">
        <button
          onClick={handleContactClick}
          className="w-[176px] h-[48px] text-[#77B900] border border-[#77B900] rounded-lg hover:bg-[#77B900] hover:text-black transition"
        >
          Contact Us
        </button>

        <button
          onClick={handleDemoClick}
          className="w-[176px] h-[48px] bg-[#77B900] text-black rounded-lg hover:opacity-90 transition"
        >
          Get Demo
        </button>
      </div>

      {/* 🔲 CONTENT */}
      <div className="relative w-full max-w-[1600px] px-4 md:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[#77B900] text-[24px] md:text-[32px] lg:text-[40px] font-semibold mb-6 lg:mb-8"
            dangerouslySetInnerHTML={{ __html: visibility.title }}
          />

          <div
            className="text-[#7E7E7E] text-[14px] md:text-[18px] lg:text-[20px] max-w-[1200px] mx-auto"
            dangerouslySetInnerHTML={{ __html: visibility.description }}
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {visibility.cards.map((card: Card) => (
            <VisibilityCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}