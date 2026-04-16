import { useEffect, useState } from "react";
import { getInfrastructure } from "../../services/infrastructureApi";

import Graph from "./Graph";
import FinOpsChart from "./FinOpsChart";
import SpendChart from "./SpendChart";

type InfrastructureCard = {
  id: number;
  title: string;
  description: string;
};

export default function Infrastructure() {
  const [cards, setCards] = useState<InfrastructureCard[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfrastructure();
        setCards(data);
      } catch (error) {
        console.error("Infra API error:", error);
        setCards([]);
      }
    };

    fetchData();
  }, []);

  if (cards === null) {
    return (
      <div className="text-white text-center mt-10">
        Loading Infrastructure...
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        No infrastructure data available.
      </div>
    );
  }

  return (
    <section
      className="w-full flex items-center justify-center 
      px-4 sm:px-6 lg:px-10 
      min-h-[90vh] 
      pt-6 sm:pt-8 
      pb-8 sm:pb-10"
    >
      <div className="w-full max-w-[1200px]">

        {cards.map((card, index) => (
          <div
            key={card.id}
            className="
              grid grid-cols-1 lg:grid-cols-2
              items-center
              gap-6 sm:gap-8 lg:gap-12
              mb-10 sm:mb-12 lg:mb-16 last:mb-0
            "
          >

            {/* LEFT */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left">

              <h3
                className="text-white 
                text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] 
                font-semibold leading-tight"
                dangerouslySetInnerHTML={{ __html: card.title as string }}
              />

              <div
                className="text-[#7E7E7E] 
                text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] 
                leading-relaxed 
                max-w-full lg:max-w-[500px] 
                mx-auto lg:mx-0"
                dangerouslySetInnerHTML={{ __html: card.description as string }}
              />

            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center lg:justify-end">

              <div
                className="
                  w-full
                  max-w-[100%] sm:max-w-[450px] lg:max-w-[600px]
                  min-h-[180px] sm:min-h-[220px] md:min-h-[250px] lg:min-h-[280px]
                  rounded-[30px] lg:rounded-[50px]
                  p-[2px]
                  bg-[linear-gradient(135deg,#0F1800,#77B900)]
                "
              >

                <div
                  className="
                    w-full h-auto
                    rounded-[25px] lg:rounded-[50px]
                    bg-[#131814]
                    p-3 sm:p-4 md:p-5
                    flex flex-col justify-start
                    overflow-visible
                  "
                >

                  <div className="w-full h-auto">
                    {index === 0 ? (
                      <FinOpsChart />
                    ) : index === 1 ? (
                      <SpendChart />
                    ) : index === 2 ? (
                      <Graph />
                    ) : null}
                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}