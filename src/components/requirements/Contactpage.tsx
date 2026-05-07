import { useState, useEffect } from "react";
import { submitContactForm } from "../../services/contactApi";

export default function ContactPage() {

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    location: "",
    city: "",
    message: "",
    inquiry_type: "",
    source: "",
    consent: false,
    subscribe: false,
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  // AUTO CLOSE POPUP
  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popup.show]);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await submitContactForm(form);

      setPopup({
        show: true,
        type: "success",
        message: "Your request has been submitted successfully. Our team will contact you shortly.",
      });

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        location: "",
        city: "",
        message: "",
        inquiry_type: "",
        source: "",
        consent: false,
        subscribe: false,
      });

    } catch (error) {
      console.error(error);

      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-16 pt-24 pb-16 text-white">

      {/* TITLE */}
      <h1 className="text-[#77B900] text-3xl md:text-5xl font-semibold mb-16">
        Contact Us
      </h1>

      <div className="max-w-5xl">

        {/* HEADER */}
        <h2 className="text-[#77B900] text-2xl md:text-3xl font-semibold mb-2">
          Ask Us Anything
        </h2>

        <p className="text-gray-300 text-sm">
          General Information Request
        </p>

        {/* DROPDOWN */}
        <div className="mt-6 mb-12">
          <select
            name="inquiry_type"
            value={form.inquiry_type}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#77B900]"
          >
            <option value="" disabled hidden>
              Select the Reason for Your Inquiry*
            </option>
            <option value="General Inquiry" className="bg-black">General Inquiry</option>
            <option value="Sales" className="bg-black">Sales</option>
            <option value="Support" className="bg-black">Support</option>
            <option value="Partnership" className="bg-black">Partnership</option>
          </select>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">

          <Input name="first_name" placeholder="First Name*" value={form.first_name} onChange={handleChange} />
          <Input name="last_name" placeholder="Last Name*" value={form.last_name} onChange={handleChange} />

          <Input name="email" placeholder="Email*" value={form.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone*" value={form.phone} onChange={handleChange} />

          <Input name="company" placeholder="Company" value={form.company} onChange={handleChange} />

          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#77B900]"
          >
            <option value="" className="bg-black">Position</option>
            <option value="Developer" className="bg-black">Developer</option>
            <option value="Manager" className="bg-black">Manager</option>
            <option value="CEO" className="bg-black">CEO</option>
            <option value="Other" className="bg-black">Other</option>
          </select>

          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#77B900]"
          >
            <option value="" className="bg-black">Location*</option>
            <option value="India" className="bg-black">India</option>
            <option value="USA" className="bg-black">USA</option>
            <option value="UK" className="bg-black">UK</option>
            <option value="Other" className="bg-black">Other</option>
          </select>

          <Input name="city" placeholder="City" value={form.city} onChange={handleChange} />

        </div>

        {/* MESSAGE */}
        <div className="mt-12">
          <textarea
            name="message"
            placeholder="Your inquiry or comments"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#77B900] py-3 text-sm placeholder-gray-500"
          />
        </div>

        {/* SOURCE */}
        <div className="mt-10">
          <select
            name="source"
            value={form.source}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#77B900]"
          >
            <option value="" className="bg-black">How did you hear about CtrlS?*</option>
            <option value="Google" className="bg-black">Google</option>
            <option value="LinkedIn" className="bg-black">LinkedIn</option>
            <option value="Referral" className="bg-black">Referral</option>
            <option value="Other" className="bg-black">Other</option>
          </select>
        </div>

        {/* CHECKBOXES */}
        <div className="mt-8 flex flex-col gap-6 text-xs text-gray-400">

          <label className="flex gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="accent-[#77B900]"
            />
            I Consent to CtrlS Systems processing my data.
          </label>

          <label className="flex gap-3">
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}
              onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
              className="accent-[#77B900]"
            />
            Subscribe to updates.
          </label>

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="bg-[#77B900] text-black px-8 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
          >
            Submit
          </button>
        </div>

      </div>

      {/* POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#0b1605] border border-[#77B900]/30 rounded-xl p-6 w-[90%] max-w-md text-center">

            <div className="text-3xl mb-4">
              {popup.type === "success" ? " " : " "}
            </div>

            <h2 className="text-white text-lg font-semibold mb-2">
              {popup.type === "success" ? "Success" : "Error"}
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              {popup.message}
            </p>

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="bg-[#77B900] text-black px-6 py-2 rounded-lg"
            >
              OK
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

/* INPUT */
function Input({ name, placeholder, value, onChange }: any) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#77B900] py-3 text-sm placeholder-gray-500"
    />
  );
}