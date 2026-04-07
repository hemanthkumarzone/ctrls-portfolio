import { useEffect, useState } from "react";
import { getFooter } from "../../services/footerApi";
import { Link } from "react-router-dom";


export default function KoreValueSection() {

  // ✅ STATE
  const [data, setData] = useState<any>(null);

  // ✅ API CALL
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await getFooter();
        console.log("FOOTER DATA:", res);

        setData(res[0] || {});
      } catch (error) {
        console.error("Footer API error:", error);
      }
    };

    fetchFooter();
  }, []);

  // ✅ PREVENT CRASH
  if (!data) return null;

  // ✅ BACKEND → FRONTEND MAPPING
  const sections = data.sections || [];

  const getSection = (name: string) => {
    return (
      sections.find(
        (s: any) => s.title?.toLowerCase() === name.toLowerCase()
      ) || { title: "", items: [] }
    );
  };

  const servicesSection = getSection("Services");
  const resourceSection = getSection("Resource");
  const companySection = getSection("Company");
  const platformSection = getSection("Platform");

  // ✅ FIX: EVEN SPLIT (NO MISSING ITEMS)
  const mid = Math.ceil((servicesSection.items?.length || 0) / 2);

  const safeData = {
    services: {
      title: servicesSection.title,
      left: servicesSection.items?.slice(0, mid) || [],
      right: servicesSection.items?.slice(mid) || []
    },
    resource: resourceSection,
    company: companySection,
    platform: platformSection,
    followText: "Follow us on", // ✅ FIXED
    copyright: data.copyright || ""
  };

  return (
    <section className="w-full flex justify-center">

      {/* 🔴 MOBILE VIEW */}
      <div className="w-full px-4 py-10 lg:hidden">

        <img
          src="/Footerctrls.png"
          alt="logo"
          className="w-[147px] h-[64px] mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* SERVICES */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {safeData.services.title}
            </h3>

            <div className="flex gap-6 text-[#7E7E7E] text-[14px] leading-[24px]">
              <div>
                {safeData.services.left.map((item: any, i: number) => (
                  <div key={i}>{item.name}</div>
                ))}
              </div>

              <div className="whitespace-nowrap">
                {safeData.services.right.map((item: any, i: number) => (
                  <div key={i}>{item.name}</div>
                ))}
              </div>
            </div>
          </div>

          {/* RESOURCE */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {safeData.resource.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {safeData.resource.items?.map((item: any, i: number) => (
                <div key={i}>{item.name}</div>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {safeData.company.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {safeData.company.items?.map((item: any, i: number) => (
                <div key={i}>{item.name}</div>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {safeData.platform.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {safeData.platform.items?.map((item: any, i: number) => (
                <div key={i}>{item.name}</div>
              ))}
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-[#77B900] my-8" />

        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#77B900] text-[16px]">
            {safeData.followText}
          </span>

          <img src="/Insta.svg" className="w-4" />
          <img src="/Linkedin.svg" className="w-4" />
          <img src="/twitter.svg" className="w-5" />
        </div>

        <div className="text-[#7E7E7E] text-[12px] text-center">
          {safeData.copyright}
        </div>

      </div>

      {/* 🟢 DESKTOP VIEW */}
      <div className="hidden lg:flex w-full justify-center overflow-visible">

        <div className="w-full flex justify-center">

          <div
            style={{
              transform: `${
                typeof window !== "undefined"
                  ? `scale(${Math.min(window.innerWidth / 1728, 1)})`
                  : "scale(1)"
              }`,
              transformOrigin: "top center",
              width: "1728px"
            }}
          >

            {/* ✅ FIXED HEIGHT */}
            <div className="relative w-[1728px] min-h-[600px]">

              {/* LOGO */}
              <img
                src="/Footerctrls.png"
                alt="logo"
                className="absolute"
                style={{
                  width: "147px",
                  height: "64px",
                  top: "43px",
                  left: "74px"
                }}
              />

              {/* SERVICES */}
              <div className="absolute" style={{ top: "133px", left: "74px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {safeData.services.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {safeData.services.left.map((item: any, i: number) => (
                    <Link key={i} to={item.path || "/"}>
  <div className="hover:text-[#9fdc00] cursor-pointer transition">
    {item.name}
  </div>
</Link>
                  ))}
                </div>

                <div
                  className="absolute text-[#7E7E7E] text-[18px] leading-[32px] w-[320px] whitespace-nowrap"
                  style={{ top: "48px", left: "240px" }}
                >
                  {safeData.services.right.map((item: any, i: number) => (
                    <Link key={i} to={item.path || "/"}>
  <div className="hover:text-[#9fdc00] cursor-pointer transition">
    {item.name}
  </div>
</Link>
                  ))}
                </div>
              </div>

              {/* RESOURCE */}
              <div className="absolute" style={{ top: "133px", left: "577px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {safeData.resource.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {safeData.resource.items?.map((item: any, i: number) => (
                    <Link key={i} to={item.path || "/"}>
  <div className="hover:text-[#9fdc00] cursor-pointer transition">
    {item.name}
  </div>
</Link>
                  ))}
                </div>
              </div>

              {/* COMPANY */}
              <div className="absolute" style={{ top: "125px", left: "791px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {safeData.company.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {safeData.company.items?.map((item: any, i: number) => (
                    <Link key={i} to={item.path || "/"}>
  <div className="hover:text-[#9fdc00] cursor-pointer transition">
    {item.name}
  </div>
</Link>
                  ))}
                </div>
              </div>

              {/* PLATFORM */}
              <div className="absolute" style={{ top: "125px", left: "1016px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {safeData.platform.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {safeData.platform.items?.map((item: any, i: number) => (
                    <Link key={i} to={item.path || "/"}>
  <div className="hover:text-[#9fdc00] cursor-pointer transition">
    {item.name}
  </div>
</Link>
                  ))}
                </div>
              </div>

              {/* LINE */}
              <div
                className="absolute w-[1728px] border-t-[3px] border-[#77B900]"
                style={{ top: "650px" }}
              />

              {/* FOLLOW */}
              <div
                className="absolute text-[#77B900] text-[22px]"
                style={{ top: "680px", left: "74px" }}
              >
                {safeData.followText}
              </div>

              {/* ICONS */}
              <img src="/Insta.svg" className="absolute" style={{ top: "684px", left: "229px", width: "20px" }} />
              <img src="/Linkedin.svg" className="absolute" style={{ top: "685px", left: "273px", width: "20px" }} />
              <img src="/twitter.svg" className="absolute" style={{ top: "686px", left: "313px", width: "22px" }} />

              {/* COPYRIGHT */}
              <div
                className="absolute text-center w-full text-[#7E7E7E] text-[14px]"
                style={{ top: "730px" }}
              >
                {safeData.copyright}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}