import { useState } from "react";
import GlobalBackground from "../ui/GlobalBackground";

type Props = {
  setActiveForm: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function VerificationForm({ setActiveForm }: Props) {

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = () => {
    if (!code) {
      setMessage("Please enter verification code");
      return;
    }

    if (code.length < 4) {
      setMessage("Invalid code");
      return;
    }

    // 👉 Later API call here
    setMessage("Code verified successfully");

    // 👉 Next step (reset password page later)
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* 🌌 GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* 🔝 LOGO */}
      <div className="absolute top-4 left-5 z-10">
        <img src="/CtrlS.png" alt="CtrlS" className="w-[180px]" />
      </div>

      {/* 🟩 FORM */}
      <div className="
        relative z-10
        w-[90%] max-w-[340px]
        border border-[#77B900]
        rounded-[26px]
        px-8 py-8
        bg-transparent
      ">

        {/* ❌ CLOSE */}
        <button
          onClick={() => setActiveForm(null)}
          className="absolute top-3 right-4 text-white/70 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-white text-xl font-semibold text-center mb-6">
          Verification
        </h2>

        {/* LABEL */}
        <label className="text-sm text-white/80 block mb-2">
          Verification code *
        </label>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Enter the verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="
            w-full px-4 py-3 mb-6
            bg-black
            border border-[#436900]
            rounded-lg
            text-white
            outline-none
            focus:border-[#77B900]
          "
        />

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          className="
            w-full py-3
            bg-[#77B900]
            text-black
            rounded-lg
            font-medium
            hover:opacity-90
          "
        >
          Verify
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