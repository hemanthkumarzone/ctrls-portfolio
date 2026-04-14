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

  // HANDLE INPUT
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async () => {

    // ✅ VALIDATION
    if (!form.name || !form.email || !form.message) {
      setMsg("Please fill all fields ⚠️");
      return;
    }

    if (!form.email.includes("@")) {
      setMsg("Enter valid email ");
      return;
    }

    try {
      setLoading(true);

      // 🔥 FIXED URL (IMPORTANT)
      const BASE_URL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";
      const url = `${BASE_URL}/contact/`; // ✅ FIXED

      const response = await axios.post(
        url,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("SUCCESS:", response.data);

      setMsg("Message sent successfully ");

      // RESET FORM
      setForm({
        name: "",
        email: "",
        message: "",
      });

      // CLOSE POPUP AFTER 1.5s
      setTimeout(() => {
        setActiveForm(null);
      }, 1500);

    } catch (error: any) {
      console.error("ERROR:", error.response?.data || error.message);

      // 🔥 BETTER ERROR MESSAGE
      if (error.response) {
        setMsg("Error: " + JSON.stringify(error.response.data));
      } else {
        setMsg("Failed to send ");
      }

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

        {/* NAME */}
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#77B900] text-black w-full py-2 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {/* MESSAGE */}
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