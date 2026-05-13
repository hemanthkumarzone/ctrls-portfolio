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
      className="
        w-full
        flex items-center justify-center

        px-4 sm:px-6 lg:px-10

        pt-4 lg:pt-6
        pb-6 lg:pb-8
      "
    >
      <div className="w-full max-w-[1180px]">

        {cards.map((card, index) => (

          <div
            key={card.id}
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.9fr_1fr]

              items-center

              gap-3 lg:gap-4

              mb-8 lg:mb-15
              last:mb-0
            "
          >

            {/* LEFT CONTENT */}

            <div
              className="
                flex flex-col

                gap-2 lg:gap-2

                text-center
                lg:text-left

                lg:pl-[110px]
              "
            >

              <h3
                className="
                  text-white

                  text-[20px]
                  sm:text-[28px]
                  md:text-[34px]
                  lg:text-[32px]

                  font-semibold

                  leading-[1.08]

                  tracking-[-0.02em]
                "
                dangerouslySetInnerHTML={{
                  __html: card.title as string
                }}
              />

              <div
                className="
                  text-[#6F6F6F]

                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[16px]

                  leading-[1.5]

                  max-w-full
                  lg:max-w-[420px]

                  mx-auto
                  lg:mx-0
                "
                dangerouslySetInnerHTML={{
                  __html: card.description as string
                }}
              />

            </div>

            {/* RIGHT CARD */}

            <div
              className="
                flex
                justify-center
                lg:justify-center
                
              "
            >

              <div
                className="
                  relative

                  w-full
                  max-w-[480px]

                  h-[165px]
                  sm:h-[190px]
                  md:h-[210px]
                  lg:h-[230px]

                  rounded-[20px]
                  lg:rounded-[28px]

                  p-[1.2px]

                  bg-[linear-gradient(135deg,#0F1800,#77B900)]

                  overflow-hidden

                  shadow-[0_0_18px_rgba(119,185,0,0.10)]
                "
              >

                {/* INNER CARD */}

                <div
                  className="
                    w-full
                    h-full

                    bg-[#131814]

                    rounded-[19px]
                    lg:rounded-[27px]

                    overflow-hidden

                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* CONTENT */}

                  <div
                    className="
                      w-full
                      h-full

                      px-2 sm:px-3
                      py-2
                    "
                  >

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