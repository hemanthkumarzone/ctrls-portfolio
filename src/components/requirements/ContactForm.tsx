import { useState } from "react";
import axios from "axios";

export default function ContactForm({ setActiveForm }: any) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    // ✅ Validation
    if (!form.name || !form.email || !form.message) {
      setMsg("Please fill all fields ⚠️");
      return;
    }

    if (!form.email.includes("@")) {
      setMsg("Enter valid email ❌");
      return;
    }

    try {
      setLoading(true);
      const url = `${import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api"}/contact`;

      await axios.post(url, form);

      setMsg("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setActiveForm(null);
      }, 1500);

    } catch (error: any) {
      setMsg("Failed to send ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999]">

      <div className="bg-[#0F180F] p-6 rounded-xl text-white w-[350px] relative border border-[#77B900]">

        {/* CLOSE */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-2 right-3 text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl mb-4 text-center">Contact Us</h2>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#77B900] text-black w-full py-2 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {msg && (
          <p className={`mt-3 text-center ${
            msg.includes("success") ? "text-green-400" : "text-red-400"
          }`}>
            {msg}
          </p>
        )}

      </div>
    </div>
  );
}