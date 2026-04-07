import { useState } from "react";
import { loginUser } from "../../services/loginApi";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm({ setActiveForm }: any) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    // ✅ Validation
    if (!form.email || !form.password) {
      setMessage("Please fill all fields ⚠️");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Enter valid email ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      // ✅ STORE TOKEN
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      }

      setMessage("Login successful ✅");

      // ✅ CLOSE POPUP
      setActiveForm(null);

      // ✅ REDIRECT TO DASHBOARD (FIXED)
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error: any) {
      console.log(error.response);

      setMessage(
        error.response?.data?.message || "Invalid credentials ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]">

      <div className="bg-[#0F180F] p-6 rounded-xl text-white w-[320px] relative border border-[#436900]">

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-2 right-3 text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl mb-4 text-center">Sign In</h2>

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
        />

        {/* PASSWORD */}
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-3 p-2 bg-black border border-gray-500 rounded"
          />

          {/* 👁 EYE ICON */}
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
          className="bg-[#77B900] text-black w-full py-2 rounded flex justify-center items-center"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* MESSAGE */}
        {message && (
          <p className={`mt-3 text-center text-sm ${
            message.includes("successful") ? "text-green-500" : "text-red-500"
          }`}>
            {message}
          </p>
        )}

      </div>
    </div>
  );
}