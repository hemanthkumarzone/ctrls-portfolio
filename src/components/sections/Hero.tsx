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
    <section
      className="
        w-full 
        min-h-[85vh] sm:min-h-screen 
        flex items-center justify-center
      "
    >
      <div
        className="
          flex flex-col items-center text-center 
          pt-[5px] sm:pt-[20px] md:pt-[40px] 
          pb-[10px] 
          px-4 sm:px-6 
          max-w-[1100px] mx-auto
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-white font-semibold 
            text-[20px] sm:text-[26px] md:text-[38px] lg:text-[42px] 
            leading-[120%] tracking-tight
          "
          dangerouslySetInnerHTML={{ __html: hero.title as string }}
        />

        {/* IMAGE */}
        <div className="mt-2 flex justify-center w-full">
          <img
            src="/laptop_1.png"
            alt="dashboard"
            className="
              w-[92%] sm:w-[85%] md:w-[500px] lg:w-[650px] 
              animate-float
            "
          />
        </div>

        {/* DESCRIPTION */}
        <div
          className="
            text-white 
            text-[12px] sm:text-[13px] md:text-[15px] 
            mt-2 
            max-w-[90%] sm:max-w-[700px] 
            opacity-80 
            leading-[18px] sm:leading-normal
          "
          dangerouslySetInnerHTML={{ __html: hero.description as string }}
        />

      </div>
    </section>
  );
}