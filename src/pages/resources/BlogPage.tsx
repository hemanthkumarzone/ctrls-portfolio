import { Link } from "react-router-dom";
import KoreValueSection from "../../components/sections/KoreValueSection";

const NeonCard = ({ children, className = "" }: any) => {
  return (
    <div className={`relative rounded-[24px] ${className}`}>

      {/* OUTER STRIP */}
      <div className="absolute inset-0 rounded-[24px] border border-[#77B900]" />

      {/* INNER DARK EDGE */}
      <div className="absolute inset-[1px] rounded-[23px] border border-[#1a2d00]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full rounded-[23px]">
        {children}
      </div>

    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="w-full min-h-screen text-white">

      {/* ================= HEADER ================= */}
      <div className="relative w-full bg-[#2E4A0A] mt-6">

        {/* TOP STRIP */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#77B900]/60" />

        {/* BOTTOM STRIP */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#77B900]/40" />

        <div className="max-w-[1200px] mx-auto px-6 py-6">

          <h1 className="text-[#77B900] text-[32px] font-semibold mb-3">
            Blog
          </h1>

          <p className="text-[#D9D9D9] text-[18px] leading-[1.6] max-w-[850px]">
            Follow the latest developments in managing IT Finance, Cloud resources,
            and Agile planning to improve your technology investment decisions
          </p>

        </div>
      </div>

      {/* ================= FEATURED SECTION ================= */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">

        <div className="flex justify-center gap-10 flex-wrap">

          {/* LEFT BIG CARD */}
          <Link to="/blog/1">
            <NeonCard className="w-[720px] h-[360px] cursor-pointer">

              <div className="flex items-center justify-between h-full px-8 py-6">

                <div className="max-w-[320px]">
                  <h2 className="text-white text-[22px] font-medium leading-[1.3] mb-4">
                    It’s Here : Meet the New IBM CtrlS Report Studio - A Faster,
                    More Intuitive Approach to Reporting
                  </h2>

                  <p className="text-[#7E7E7E] text-[13px] leading-[1.6] mb-6">
                    A fully modernized reporting experience that makes report creation
                    faster,simpler, and more flexible, enabling teams to clearly
                    communicate and demonstrate IT value.
                  </p>

                  <button className="bg-[#77B900] text-black px-6 py-2 rounded-[8px] text-[14px] font-medium">
                    Read More
                  </button>
                </div>

                <div className="w-[300px] h-[240px] rounded-[10px] overflow-hidden">
                  <img
                    src="/Background.png"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </NeonCard>
          </Link>

          {/* RIGHT SMALL CARD */}
          <NeonCard className="w-[300px] h-[360px]">

            <div className="flex flex-col justify-between h-full px-6 py-6">

              <h3 className="text-white text-[18px] font-semibold">
                FinOps Intelligence
              </h3>

              <div className="text-[#BFBFBF] text-[13px] space-y-5">

                <div>
                  It’s Here: Meet the New IBM CtrlS Report studio - A Faster,
                  More Intuitive Approach to Reporting
                </div>

                <div className="h-[1px] bg-[#77B900]/15 w-[70%] mx-auto" />

                <div>
                  New Tech, Same Rules: Cloud Lessons for an AI Advantages
                </div>

                <div className="h-[1px] bg-[#77B900]/15 w-[70%] mx-auto" />

                <div>
                  IBM Cloudability Advanced Containers for Kubernetes Finops
                </div>

              </div>

              <button
                className="
                  border border-[#77B900]/30
                  text-[#77B900]
                  bg-transparent
                  hover:bg-[#77B900]/10
                  transition-all
                  py-2
                  rounded-[8px]
                  text-[14px]
                  font-medium
                "
              >
                Explore Insights
              </button>

            </div>

          </NeonCard>

          {/* ================= CATEGORY CARDS ================= */}
          <div className="max-w-[1200px] mx-auto px-6 pb-16">

            <div className="flex justify-center gap-8 flex-wrap max-w-[1200px] mx-auto">

              {/* ===== CARD ===== */}
              {[
                {
                  title: "FinOps Intelligence",
                  img: "/financeBackground.png",
                  main: "Modern Reporting for FinOps Teams",
                  desc: "AI-powered insights for cost visibility, forecasting, and financial governance.",
                  items: [
                    "Forecasting AI Spend with Confidence",
                    "Building Smarter Cost Governance",
                    "Modern Financial Visibility for Enterprises"
                  ],
                  button: "Explore Insights"
                },

                {
                  title: "Cloud Optimization",
                  img: "/cloudBackground.png",
                  main: "Real-Time Kubernetes Analytics",
                  desc: "Strategies for reducing cloud waste and improving infrastructure efficiency.",
                  items: [
                    "Intelligent Forecasting for Cloud Spend",
                    "Driving FinOps in 2026",
                    "Optimizing Multi-Cloud Infrastructure"
                  ],
                  button: "View Research"
                },

                {
                  title: "Infrastructure Automation",
                  img: "/devopsBackground.png",
                  main: "Resource Rightsizing at Scale",
                  desc: "Automation frameworks for Kubernetes, DevOps, and scalable platform operations.",
                  items: [
                    "Reducing Kubernetes Waste",
                    "Infrastructure Ownership Models",
                    "Automation for Modern DevOps Teams"
                  ],
                  button: "Open Collection"
                }

              ].map(
                (
                  card: {
                    title: string;
                    img: string;
                    main: string;
                    desc: string;
                    items: string[];
                    button: string;
                  },
                  index
                ) => (
                  <Link
                    key={index}
                    to={
                      index === 0
                        ? "/blog/finance"
                        : index === 1
                          ? "/blog/cloud"
                          : index === 2
                            ? "/blog/devops"
                            : "#"
                    }
                  >

                    <div
                      className="
                        bg-[#10150D]
                        border border-[#77B900]/30
                        w-[320px]
                        h-[560px]
                        rounded-[14px]
                        p-5
                        flex flex-col justify-between
                        cursor-pointer
                        transition-all duration-300
                        hover:border-[#77B900]/60
                        hover:shadow-[0_0_20px_rgba(119,185,0,0.12)]
                      "
                    >

                      {/* TITLE */}
                      <h2 className="text-white font-semibold text-[20px] mb-4">
                        {card.title}
                      </h2>

                      {/* IMAGE */}
                      <div className="rounded-[8px] overflow-hidden border border-[#77B900]/20 mb-4">
                        <img
                          src={card.img}
                          className="w-full h-[140px] object-cover"
                        />
                      </div>

                      {/* MAIN TEXT */}
                      <div className="text-white text-[14px] leading-[1.5] mb-3">
                        {card.main}
                      </div>

                      {/* DESCRIPTION */}
                      <div className="text-[#A3A3A3] text-[12px] mb-4 leading-[1.6]">
                        {card.desc}
                      </div>

                      {/* LIST */}
                      <div className="space-y-3 flex-1 text-[#FFFFFF] text-[12px]">

                        {card.items.map((item, i) => (
                          <div key={i}>

                            <div>{item}</div>

                            {i !== card.items.length - 1 && (
                              <div className="h-[1px] bg-[#77B900]/15 mt-2" />
                            )}

                          </div>
                        ))}

                      </div>

                      {/* BUTTON */}
                      <button
                        className="
                          mt-5
                          border border-[#77B900]/30
                          text-[#77B900]
                          bg-transparent
                          hover:bg-[#77B900]/10
                          transition-all
                          text-[12px]
                          px-4
                          py-2
                          rounded-md
                          self-start
                        "
                      >
                        {card.button}
                      </button>

                    </div>

                  </Link>
                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ================= DEMO SECTION ================= */}
      <div className="relative w-full bg-[#0b1f05] py-4 mt-0 overflow-hidden">

        {/* ===== BOTTOM GLOW ===== */}
        <div className="absolute bottom-0 left-0 w-full h-[180px] pointer-events-none">
          <div
            className="w-full h-full 
            bg-gradient-to-t from-[#77B900]/40 via-[#77B900]/20 to-transparent"
          />

          <div
            className="absolute bottom-0 left-0 w-full h-[120px] 
            bg-[#77B900]/30 blur-[80px]"
          />
        </div>

        {/* ===== INNER CONTAINER ===== */}
        <div className="relative max-w-[1000px] mx-auto px-6">

          <div className="flex justify-between items-start gap-16">

            {/* LEFT */}
            <div className="max-w-[480px]">

              <p className="text-[#BFBFBF] text-[14px] mb-3">
                Request a demo
              </p>

              <h2 className="text-white text-[30px] font-semibold leading-[1.3] mb-4">
                Answer IT cost questions 95% faster
              </h2>

              <p className="text-[#9CA3AF] text-[14px] leading-[1.6] mb-4">
                Take control of your IT investments with smarter spend that leads to greater impact.
                IBM CtrlS gives you trusted, actionable insights that drive better business outcomes - fast.
              </p>

              <p className="text-[#9CA3AF] text-[14px] leading-[1.6] mb-4">
                Request a demo customized for your needs and see how you can transform IT spend into business value.
              </p>

              <p className="text-[#9CA3AF] text-[14px]">
                Ready to chat now?{" "}
                <span className="text-[#77B900] cursor-pointer">
                  Start a conversation.
                </span>
              </p>

            </div>

            {/* RIGHT */}
            <div className="w-[380px]">

              <div className="grid grid-cols-2 gap-4">

                <input
                  className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]"
                  placeholder="First Name"
                />

                <input
                  className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]"
                  placeholder="Last Name"
                />

                <input
                  className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]"
                  placeholder="Work Email"
                />

                <input
                  className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]"
                  placeholder="Phone"
                />

                <input
                  className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]"
                  placeholder="Company"
                />

                <select className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]">
                  <option className="text-black">Country</option>
                  <option className="text-black">India</option>
                  <option className="text-black">USA</option>
                </select>

              </div>

              <button className="mt-6 w-full bg-[#77B900] text-black py-3 rounded-[12px] text-[16px] font-medium">
                Request a Demo
              </button>

            </div>

          </div>

        </div>

      </div>

      <KoreValueSection />

    </div>
  );
};

export default BlogPage;