import { useState, useEffect } from "react";
import { loginUser } from "../../services/loginApi";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GlobalBackground from "../ui/GlobalBackground";

export default function LoginForm({ setActiveForm }: any) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setForm({ email: "", password: "" });
    setMessage("");
  }, []);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setMessage("Please fill all fields");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      setMessage("Login successful");

      setTimeout(() => {
        setActiveForm(null);
        navigate("/");
      }, 1000);

    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">

      {/* 🌌 GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* 🔝 LOGO */}
      <div className="absolute top-4 left-5 z-10">
        <img src="/CtrlS.png" alt="CtrlS" className="w-[180px]" />
      </div>

      {/* 🧠 HEADER */}
      <div className="text-center z-10 mb-4">
        <h1 className="text-xl md:text-2xl font-semibold text-white">
  FinOps Dashboard
</h1>

<p className="text-white/70 mt-1 text-[10px] md:text-xs">
  Advanced Cost Management Platform
</p>
      </div>

      {/* 🔐 LOGIN BOX */}
      <div className="
        relative z-10
        w-[55%] max-w-[280px]
        bg-transparent
        border border-[#77B900]
        rounded-2xl
        p-6
      ">

        {/* ❌ CLOSE */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-3 right-4 text-lg text-white/70 hover:text-white"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-lg font-semibold mb-4 text-white text-center">
          Sign In
        </h2>

        {/* EMAIL */}
        <label className="text-xs mb-1 block text-white/80">
          Email *
        </label>
        <input
          name="email"
          placeholder="Your@email.com"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 
          bg-black/80 border border-[#436900] 
          rounded-lg focus:border-[#77B900] outline-none text-white text-sm"
        />

        {/* PASSWORD */}
        <label className="text-xs mb-1 block text-white/80">
          Password *
        </label>

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 
            bg-black/80 border border-[#436900] 
            rounded-lg focus:border-[#77B900] outline-none text-white text-sm"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 cursor-pointer text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* FORGOT */}
        <div
  onClick={() => setActiveForm("forgot")}
  className="text-right text-xs text-[#77B900] mt-1 mb-3 cursor-pointer"
>
  Forgot Password?
</div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-2 bg-[#77B900] text-black rounded-lg text-sm font-medium"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="mt-2 text-center text-xs text-red-400">
            {message}
          </p>
        )}

        {/* SIGNUP */}
        <p className="text-center text-xs mt-3 text-white/70">
  New to CtrlS?{" "}
  <span
    onClick={() => setActiveForm("signup")}
    className="text-[#77B900] cursor-pointer"
  >
    Create Account →
  </span>
</p>
      </div>

      {/* FOOTER */}
      <p className="mt-3 text-white/50 text-[10px] text-center z-10">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </p>

    </div>
  );
}