import { useParams } from "react-router-dom";

import KoreValueSection from "../../components/sections/KoreValueSection";

const BlogCloud = () => {
  const { id } = useParams();

  return (
    <div className="w-full min-h-screen text-white">

      {/* ================= HEADER ================= */}
    <div className="relative w-full mt-4 overflow-hidden">

  {/* BACKGROUND GRADIENT (MAIN LOOK) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#2E4A0A] via-[#243f08] to-[#1a2d00]" />

  {/* TOP LIGHT STRIP */}
  <div className="absolute top-0 left-0 w-full h-[6px] bg-[#77B900]/70" />

  {/* BOTTOM LIGHT STRIP */}
  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#77B900]/40" />

  {/* SOFT INNER GLOW (IMPORTANT FOR FIGMA LOOK) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#77B90030,transparent_60%)] pointer-events-none" />

  {/* CONTENT */}
  <div className="relative max-w-[1200px] mx-auto px-6 py-4">

    <h1 className="text-[#9FEF00] text-[30px] font-semibold leading-[1.3] mb-5 max-w-[450px]">
      IBM Cloudability Advanced Containers for Kubernetes FinOps
    </h1>

    <p className="text-[#D9D9D9] text-[18px] leading-[1.6] max-w-[800px]">
        Extend IBM Cloudability with real-time Kubernetes analytics, optimization, and automation.

    </p>

  </div>

</div>


      <div className="w-full mt-4">
  <div className="max-w-[1400px] mx-auto px-6 flex gap-6 items-start">
    
    {/* LEFT CONTENT */}
    <div className="flex-1">
      <div className="w-full min-h-[900px]  rounded-[10px] border border-[#77B900] relative overflow-hidden">

  {/* BACKGROUND (same as your theme) */}
  <div className="absolute inset-0 " />

  {/* GRID DOT PATTERN (optional but matches design) */}
  <div className="absolute inset-0 opacity-20 
    bg-[radial-gradient(#77B900_1px,transparent_1px)]
    [background-size:16px_16px]"
  />

  {/* GREEN GLOW (bottom) */}
  <div className="absolute bottom-0 left-0 w-full h-[200px]
    bg-gradient-to-t from-[#77B900]/30 to-transparent"
  />

</div>
    </div>
    

    {/* RIGHT SIDEBAR */}
    <div className="w-[430px]">
      <div className="rounded-[10px] border border-[#77B900] p-5  relative overflow-hidden">

  {/* GLOW */}
  <div className="absolute bottom-0 left-0 w-full h-[120px]
    bg-[#77B900]/20 blur-[80px]"
  />

  <div className="relative">

    <h3 className="text-white text-[18px] font-semibold mb-4">
      Article contents
    </h3>

    <ul className="space-y-3 text-[#A3A3A3] text-[13px]">
      <li>IBM Cloudability Advanced Containers</li>
      <li>Built Into IBM Cloudability</li>
    </ul>

    <div className="mt-6">
      <p className="text-white text-[14px] mb-2">Categories</p>
      <p className="text-[#A3A3A3] text-[13px]">FinOps</p>
    </div>

    <div className="mt-4">
      <p className="text-white text-[14px] mb-2">Tags</p>
      <p className="text-[#A3A3A3] text-[13px]">Announcements,Product Updates</p>
    </div>

    <button className="mt-6 w-full bg-[#77B900] text-black py-2 rounded-[8px] font-medium">
      Start a free Trial
    </button>

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
</div>

      
      
<KoreValueSection />
    </div>
  );
 
};


export default BlogCloud;