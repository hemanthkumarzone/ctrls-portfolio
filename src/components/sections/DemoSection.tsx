import { useEffect, useState } from "react";
import { getDemo } from "../../services/demoApi";
import { submitDemoForm } from "../../services/demoFormApi";

type DemoType = {
  id: number;
  heading: string;
  title: string;
  description: string;
  form: {
    title: string;
    name: string;
    email: string;
    organization: string;
    source: string;
    submit: string;
  };
};

export default function DemoSection() {

  const [demo, setDemo] = useState<DemoType | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    source: "",
  });

  // ✅ NEW STATES (ADDED)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    // ✅ VALIDATION (ADDED)
    if (!formData.name || !formData.email || !formData.organization) {
      setMessage("Please fill all required fields ⚠️");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Enter valid email ❌");
      return;
    }

    try {
      if (!demo) return;

      setLoading(true);
      setMessage("");

      const payload = {
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        source: formData.source,
        demo: demo.id,
      };

      console.log("Sending payload:", payload);

      await submitDemoForm(payload);

      // ❌ alert removed
      // ✅ replaced with message
      setMessage("Submitted Successfully ✅");

      setFormData({
        name: "",
        email: "",
        organization: "",
        source: "",
      });

      // ✅ SCROLL TO TOP (ADDED)
      window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (error: any) {
      console.log("FULL ERROR:", error.response);
      console.log("ERROR DATA:", error.response?.data);

      setMessage("Submission Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDemo();
        console.log("DEMO DATA:", data);

        if (data.length > 0) {
          setDemo(data[0]);
        }
      } catch (error) {
        console.error("Demo API error:", error);
      }
    };

    fetchData();
  }, []);

  if (!demo) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <section id="demo" className="w-full flex justify-center">

      {/* DESKTOP */}
      <div
        className="hidden lg:block relative w-[1728px] h-[1117px] border-[8px] border-transparent"
        style={{ borderImage: "linear-gradient(180deg,#283E00,#182500) 1" }}
      >

        <div className="absolute left-[77px] top-[150px]">
          <p className="text-white text-[36px] font-semibold">
            {demo.heading}
          </p>
        </div>

        <div className="absolute left-[74px] top-[250px] w-[695px]">
          <h1 className="text-[#77B900] text-[72px] font-semibold leading-[100px]">
            {demo.title}
          </h1>
        </div>

        <div className="absolute left-[77px] top-[740px] w-[704px]">
          <p className="text-white text-[16px] leading-[44px]">
            {demo.description}
          </p>
        </div>

        {/* FORM */}
        <div className="absolute left-[791px] top-[160px]">

          <div className="w-[445px] rounded-[30px] border-2 border-[#283E00] p-[40px]">

            <h2 className="text-white text-[32px] mb-[30px]">
              {demo.form.title}
            </h2>

            {[
              { name: "name", label: demo.form.name, placeholder: "Your Name" },
              { name: "email", label: demo.form.email, placeholder: "your@email.com" },
              { name: "organization", label: demo.form.organization, placeholder: "Company Name" },
              { name: "source", label: demo.form.source, placeholder: "Referral, Social Media, etc." }
            ].map((item, i) => (
              <div key={i} className="mb-[22px]">
                <label className="text-white text-[16px]">
                  {item.label} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  name={item.name}
                  value={(formData as any)[item.name]}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-white placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-[#77B900] focus:border-[#77B900]"
                  style={{ backgroundColor: "#0F180F" }}
                />
              </div>
            ))}

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={loading} // ✅ ADDED
                className="w-[136px] h-[48px] bg-[#77B900] rounded-[11px] text-black text-[20px]"
              >
                {loading ? "Submitting..." : demo.form.submit} {/* ✅ UPDATED */}
              </button>
            </div>

            {/* ✅ MESSAGE UI (ADDED) */}
            {message && (
              <p className={`text-center mt-4 ${
                message.includes("Successfully") ? "text-green-400" : "text-red-400"
              }`}>
                {message}
              </p>
            )}

          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden w-full px-6 py-16">

        <p className="text-white text-[20px] mb-4">
          {demo.heading}
        </p>

        <h1 className="text-[#77B900] text-[36px] mb-6">
          {demo.title}
        </h1>

        <p className="text-white text-[14px] mb-10">
          {demo.description}
        </p>

        <div className="max-w-[420px] mx-auto border-2 border-[#283E00] rounded-[30px] p-[30px]">

          <h2 className="text-white text-[26px] mb-6">
            {demo.form.title}
          </h2>

          {[
            { name: "name", label: demo.form.name, placeholder: "Your Name" },
            { name: "email", label: demo.form.email, placeholder: "your@email.com" },
            { name: "organization", label: demo.form.organization, placeholder: "Company Name" },
            { name: "source", label: demo.form.source, placeholder: "Referral, Social Media, etc." }
          ].map((item, i) => (
            <div key={i} className="mb-5">
              <label className="text-white text-[14px]">
                {item.label} <span className="text-[#77B900]">*</span>
              </label>

              <input
                name={item.name}
                value={(formData as any)[item.name]}
                onChange={handleChange}
                placeholder={item.placeholder}
                className="w-full h-[55px] bg-[#0F180F] border border-[#2E5A00] rounded-[16px] mt-2 px-[14px] text-white placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-[#77B900] focus:border-[#77B900]"
                style={{ backgroundColor: "#0F180F" }}
              />
            </div>
          ))}

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-[120px] h-[44px] bg-[#77B900] rounded-[10px] text-black"
            >
              {loading ? "Submitting..." : demo.form.submit}
            </button>
          </div>

          {/* ✅ MESSAGE */}
          {message && (
            <p className={`text-center mt-4 ${
              message.includes("Successfully") ? "text-green-400" : "text-red-400"
            }`}>
              {message}
            </p>
          )}

        </div>
      </div>

    </section>
  );
}