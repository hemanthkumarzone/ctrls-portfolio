import { useEffect, useState } from "react";
import { getHero } from "../../services/heroApi";

type HeroType = {
  id: number;
  title: string;
  description: string;
};

export default function Hero() {
  const [hero, setHero] = useState<HeroType | null>(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const data = await getHero();
      if (data.length > 0) {
        setHero(data[0]);
      }
    } catch (error) {
      console.error("Hero API error:", error);
    }
  };

  // ✅ FIX: Prevent layout breaking
  if (!hero) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen">

      <div className="relative z-10 flex flex-col items-center text-center 
        pt-[100px] md:pt-[140px] lg:pt-[180px] 
        pb-[40px] px-6 max-w-[1728px] mx-auto">

        <h1 className="text-white font-semibold 
          text-[34px] md:text-[48px] lg:text-[65px] 
          leading-[110%] tracking-tight">
          {hero.title}
        </h1>

        <p className="text-white 
          text-[16px] md:text-[20px] lg:text-[24px] 
          mt-6 max-w-[900px] opacity-80">
          {hero.description}
        </p>

        <div className="mt-10 flex justify-center w-full">
          <img
            src="/ctrlslaptop.png"
            alt="dashboard"
            className="w-[90%] md:w-[700px] lg:w-[1000px]"
          />
        </div>

      </div>
    </section>
  );
}