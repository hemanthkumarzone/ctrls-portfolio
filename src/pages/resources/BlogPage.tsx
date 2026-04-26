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
                Latest posts
              </h3>

              <div className="text-[#BFBFBF] text-[13px] space-y-5">

                <div>
                  It’s Here: Meet the New IBM CtrlS Report studio - A Faster,
                  More Intuitive Approach to Reporting
                </div>

                <div className="h-[1px] bg-white/20 w-[70%] mx-auto" />

                <div>
                  New Tech, Same Rules: Cloud Lessons for an AI Advantages
                </div>

                <div className="h-[1px] bg-white/20 w-[70%] mx-auto" />

                <div>
                  IBM Cloudability Advanced Containers for Kubernetes Finops
                </div>

              </div>

              <button className="bg-[#77B900] text-black py-2 rounded-[8px] text-[14px] font-medium">
                See All Posts
              </button>

            </div>

          </NeonCard>
          {/* ================= CATEGORY CARDS ================= */}
<div className="max-w-[1200px] mx-auto px-6 pb-16">

  <div className="flex justify-center gap-8 flex-wrap max-w-[1200px] mx-auto">

    {/* ===== CARD ===== */}
    {[
      {
        title: "Latest posts",
        img: "/financeBackground.png",
        main: "It’s Here : Meet the New IBM Ctrls Report Studio - A Faster ,More Intuitive Approach to Reporting",
        desc: "A fully modernized reporting experience that makes report creation faster, simpler, and more flexible, enabling teams to clearly communicate and demonstrate IT value.",
        items: [
          "New Tech,Same Rules: Cloud Lessons for an AI Advantage",
          "The Next Era of IT Financial Management Reporting with the New IBM CtrlS Report Studio",
          "From Guesswork to Confidence: Introducing Intelligent Forecasting for Tech Spend Planning"
        ],
        button: "See All IT Finance Posts"
      },
      {
        title: "Cloud",
        img: "/cloudBackground.png",
        main: "IBM Cloudability Advanced Containers for Kubernetes FinOps",
        desc: "Extend IBM Cloudability with real-time Kubernetes analytics, optimization, and automation.",
        items: [
          "From Guesswork to Confidence: Introducing Intelligent Forecasting for Tech Spend Planning",
          "Driving FinOps Forward in 2025 and Beyond",
          "FinOps for AI: Enabling the Next Wave of Cloud Innovation"
        ],
        button: "See All Cloud Posts"
      },
      {
        title: "DevOps",
        img: "/devopsBackground.png",
        main: "IBM Kubecost 3.1: Kubernetes Resource Quota Rightsizing",
        desc: "Explore new Savings Insights for Resource Quotas, with recommendations to right-size and actions to create or update quotas.",
        items: [
          "IBM Kubecost 3.0: Faster, Smarter, and Built for Scale",
          "Essential K8s Cost Metrics for Reducing Spend",
          "K8s Cost Ownership: Who’s Responsible and How to Make It Work"
        ],
        button: "See All DevOps Posts"
      }
    ].map((card: { title: string; img: string; main: string; desc: string; items: string[]; button: string }, index) => (
  <Link key={index} to={
  index === 0 ? "/blog/finance" :
  index === 1 ? "/blog/cloud" :
  index === 2 ? "/blog/devops" : "#"
}>
  <div className="bg-[#77B900] w-[320px] h-[560px] rounded-[10px] p-5 flex flex-col justify-between cursor-pointer">

        {/* TITLE */}
        <h2 className="text-black font-semibold text-[20px] mb-4">
          {card.title}
        </h2>

        {/* IMAGE */}
        <div className="rounded-[8px] overflow-hidden border border-black mb-4">
          <img src={card.img} className="w-full h-[140px] object-cover" />
        </div>

        {/* MAIN TEXT */}
        <div className="text-black text-[14px] leading-[1.5] mb-3">
          {card.main}
        </div>

        {/* DESCRIPTION */}
        <div className="text-[#FFEDED] text-[12px] mb-4">
          {card.desc}
        </div>

        {/* LIST */}
        <div className="space-y-3 flex-1 text-[#FFFFFF] text-[12px]">

          {card.items.map((item, i) => (
            <div key={i}>
              <div>{item}</div>
              {i !== card.items.length - 1 && (
                <div className="h-[1px] bg-black/40 mt-2" />
              )}
            </div>
          ))}

        </div>

        {/* BUTTON */}
        <button className="mt-5 bg-black text-[#77B900] text-[12px] px-4 py-2 rounded-md self-start">
          {card.button}
        </button>

      </div>
      </Link>
    ))}
    

  </div>
  

</div>

 

        </div>


      </div>
      <div className="relative w-full bg-[#0b1f05] py-4 mt-0 overflow-hidden">

  {/* ===== BOTTOM GLOW ===== */}
  <div className="absolute bottom-0 left-0 w-full h-[180px] pointer-events-none">
    <div className="w-full h-full 
      bg-gradient-to-t from-[#77B900]/40 via-[#77B900]/20 to-transparent"
    />
    <div className="absolute bottom-0 left-0 w-full h-[120px] 
      bg-[#77B900]/30 blur-[80px]"
    />
  </div>

  {/* ===== INNER CONTAINER (IMPORTANT FIX) ===== */}
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

          <input className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]" placeholder="First Name" />
          <input className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]" placeholder="Last Name" />
          <input className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]" placeholder="Work Email" />
          <input className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]" placeholder="Phone" />
          <input className="bg-black border border-[#436900] text-white px-4 py-3 rounded-[10px]" placeholder="Company" />

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