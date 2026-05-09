import { useState } from "react";
import axios from "axios";

export default function BookDemo() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [email, setEmail] = useState(""); // ✅ NEW
  const [name, setName] = useState("");   // ✅ OPTIONAL (better UX)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const slots = [
    { date: "Monday, May 4", time: "10:00 AM - 10:30 AM" },
    { date: "Monday, May 4", time: "2:00 PM - 2:30 PM" },
    { date: "Tuesday, May 5", time: "11:00 AM - 11:30 AM" },
    { date: "Wednesday, May 6", time: "9:00 AM - 9:30 AM" },
  ];

  const handleConfirm = async () => {
    if (!selectedSlot) {
      setMessage("⚠️ Please select a slot");
      return;
    }

    if (!email) {
      setMessage("⚠️ Please enter your email");
      return;
    }

    const [date, time] = selectedSlot.split("|");

    try {
      setLoading(true);
      setMessage(null);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/confirm-demo/",
        {
          name: name || "User",
          email: email, // ✅ DYNAMIC EMAIL
          selected_date: date,
          selected_time: time,
        }
      );

      console.log("✅ RESPONSE:", response.data);

      setMessage("🎉 Demo confirmed! Check your email.");
    } catch (error: any) {
      console.error("❌ ERROR:", error.response || error.message);

      if (error.response) {
        setMessage(`❌ ${error.response.data?.error || "Server error"}`);
      } else {
        setMessage("❌ Backend not reachable. Check server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2 style={{ marginBottom: "20px" }}>Book Your Demo</h2>

      {/* NAME INPUT */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "10px",
          width: "100%",
          borderRadius: "6px",
        }}
      />

      {/* EMAIL INPUT */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          borderRadius: "6px",
        }}
      />

      {/* SLOT LIST */}
      {slots.map((slot, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="radio"
            name="slot"
            disabled={loading}
            onChange={() =>
              setSelectedSlot(`${slot.date}|${slot.time}`)
            }
          />
          <span style={{ marginLeft: "10px" }}>
            {slot.date} — {slot.time}
          </span>
        </div>
      ))}

      {/* BUTTON */}
      <button
        onClick={handleConfirm}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: loading ? "#999" : "#77B900",
          border: "none",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
          color: "white",
        }}
      >
        {loading ? "Processing..." : "Confirm Booking"}
      </button>

      {/* MESSAGE */}
      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}