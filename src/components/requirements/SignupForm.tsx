import { useState } from "react";
import { signupUser } from "../../services/signupApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupForm({ setActiveForm }: any) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // HANDLE INPUT
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async () => {

    // ✅ VALIDATION
    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill all fields ⚠️");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Enter valid email ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await signupUser(form);

      setMessage("Account created successfully ✅");

      // 👉 Auto switch to login
      setTimeout(() => {
        setActiveForm("login");
      }, 1200);

    } catch (error: any) {
      console.log(error.response);

      setMessage(
        error.response?.data?.message || "Signup failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="relative bg-[#0F180F] p-6 rounded-2xl w-[320px] shadow-lg border border-[#436900]">

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ×
        </button>

        <h2 className="text-center text-white text-lg mb-4">Sign Up</h2>

        {/* NAME */}
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-600"
        />

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-600"
        />

        {/* PASSWORD WITH EYE ICON */}
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-600"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#77B900] text-black py-2 rounded font-medium flex justify-center items-center"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {/* MESSAGE */}
        {message && (
          <p className={`text-center mt-3 text-sm ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}>
            {message}
          </p>
        )}

      </div>
    </div>
  );
}