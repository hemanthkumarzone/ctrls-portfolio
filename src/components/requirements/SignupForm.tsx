import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GlobalBackground from "../ui/GlobalBackground";
import { signupUser } from "../../services/signupApi";

export default function SignupForm({ setActiveForm }: any) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: "Admin",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  // ✅ NEW
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {   // ✅ CHANGED to async
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // ✅ API CALL ADDED
      const res = await signupUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log("Signup success:", res.data);

      setMessage("Account created successfully");

      setTimeout(() => {
        setActiveForm("login");
        navigate("/");
      }, 1000);

    } catch (error: any) {
      console.error("Signup error:", error);
      setMessage("Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* BACKGROUND */}
      <GlobalBackground />

    
     
      {/* LOGO */}
      <div className="absolute top-4 left-5 z-10">
        <img src="/CtrlS.png" alt="CtrlS" className="w-[180px]" />
      </div>

      {/* FORM */}
      <div className="
        relative z-10
        w-[90%] max-w-[320px]
        bg-transparent
        border border-[#77B900]/50
        rounded-3xl
        px-4 py-4
      ">

        {/* CLOSE */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-3 right-4 text-white/70 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-white text-[18px] font-semibold text-center mb-3">
          Create Account
        </h2>

        {/* PROFILE */}
        <div className="flex items-center gap-3 mb-3">

          <div className="relative w-10 h-10 rounded-full border border-[#77B900] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">

            {/* ✅ IMAGE PREVIEW */}
            {preview ? (
              <img
                src={preview}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z"
                  stroke="#77B900"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            )}

            {/* CAMERA ICON */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-[-2px] right-[-2px] w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#77B900] flex items-center justify-center cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h3l2-2h6l2 2h3v12H4V7z"
                  stroke="#77B900"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3"
                  stroke="#77B900"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* HIDDEN INPUT */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setPreview(url);
                }
              }}
            />

          </div>

          <div>
            <p className="text-white text-[13px]">
              Profile Picture <span className="text-white/50">(optional)</span>
            </p>
            <p className="text-white/50 text-[10px]">
              Max 5MB, JPG/PNG/WebP
            </p>
          </div>

        </div>

        {/* INPUTS */}
        <div className="space-y-2">

          <div>
            <label className="text-[11px] text-white/80">Name *</label>
            <input
              name="name"
              placeholder="First Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1.5 bg-black border border-[#436900] rounded text-white text-sm outline-none focus:border-[#77B900]"
            />
          </div>

          <div>
            <label className="text-[11px] text-white/80">Role *</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1.5 bg-black border border-[#436900] rounded text-white text-sm outline-none focus:border-[#77B900]"
            >
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] text-white/80">Email *</label>
            <input
              name="email"
              placeholder="Your@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1.5 bg-black border border-[#436900] rounded text-white text-sm outline-none focus:border-[#77B900]"
            />
          </div>

          <div>
            <label className="text-[11px] text-white/80">Password *</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1.5 bg-black border border-[#436900] rounded text-white text-sm outline-none focus:border-[#77B900]"
            />
          </div>

          <div>
            <label className="text-[11px] text-white/80">Confirm Password *</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1.5 bg-black border border-[#436900] rounded text-white text-sm outline-none focus:border-[#77B900]"
            />
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-3 py-2 bg-[#77B900] text-black rounded text-sm font-medium"
        >
          Create Account
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="text-center text-[11px] mt-2 text-red-400">
            {message}
          </p>
        )}

        {/* LOGIN */}
        <p className="text-center text-[11px] mt-2 text-white/70">
          Already have an account?{" "}
          <span
            onClick={() => setActiveForm("login")}
            className="text-[#77B900] cursor-pointer"
          >
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
}