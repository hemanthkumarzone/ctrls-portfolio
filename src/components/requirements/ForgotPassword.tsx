import { useState } from "react";
import GlobalBackground from "../ui/GlobalBackground";

type Props = {
  setActiveForm: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ForgotPassword({ setActiveForm }: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!email) {
      setMessage("Please enter email");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    setActiveForm("verify");
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* 🌌 GLOBAL BACKGROUND ONLY */}
      <GlobalBackground />

      {/* 🔝 LOGO */}
      <div className="absolute top-6 left-8 z-10">
        <img src="/CtrlS.png" alt="CtrlS" className="w-[160px]" />
      </div>

      {/* 📦 FORM CARD */}
      <div
        className="
        relative z-10
        w-[90%] max-w-[360px]
        border border-[#77B900]/40
        rounded-[28px]
        px-8 py-10
        bg-transparent
      "
      >

        {/* ❌ CLOSE */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-4 right-5 text-white text-lg"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl text-white font-semibold text-center mb-8">
          Forgot Password
        </h2>

        {/* EMAIL */}
        <label className="text-sm text-white/80 block mb-2">
          Email *
        </label>

        <input
          type="email"
          placeholder="Your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full px-4 py-3 mb-6
            bg-black/80
            border border-[#436900]
            rounded-lg
            text-white
            outline-none
            focus:border-[#77B900]
          "
        />

        {/* BUTTON */}
        <button
          onClick={handleSend}
          className="
            w-full py-3
            bg-[#77B900]
            text-black
            rounded-lg
            font-medium
            hover:opacity-90
            transition
          "
        >
          Send
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="text-center text-sm mt-4 text-[#77B900]">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}