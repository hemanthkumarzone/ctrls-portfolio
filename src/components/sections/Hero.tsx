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

  if (!hero) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full">

      <div className="flex flex-col items-center text-center 
        pt-[60px] md:pt-[80px] lg:pt-[100px] 
        pb-[0px] px-6 max-w-[1200px] mx-auto">

        {/* TITLE */}
        <h1 className="text-white font-semibold 
          text-[34px] md:text-[48px] lg:text-[50px] 
          leading-[110%] tracking-tight">
          {hero.title}
        </h1>

        {/* IMAGE */}
        <div className="mt-2 flex justify-center w-full">
          <img
            src="/laptop_1.png"
            alt="dashboard"
            className="w-[95%] md:w-[650px] lg:w-[900px] animate-float"
          />
        </div>

        {/* TEXT */}
        <p className="text-white 
          text-[13px] md:text-[15px] lg:text-[16px] 
          mt-0 max-w-[800px] opacity-80">
          {hero.description}
        </p>

      </div>
    </section>
  );
}