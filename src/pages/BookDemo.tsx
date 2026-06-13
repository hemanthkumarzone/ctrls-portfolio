import {
  useState,
  useEffect
} from "react";

import {
  useParams
} from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";


export default function BookDemo() {
  const { bookingId } = useParams();

  const [selectedDate, setSelectedDate] =
  useState<Date>(new Date());

  const [selectedTime, setSelectedTime] =
    useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [linkedin, setLinkedin] =
    useState("");

  const [notes, setNotes] = useState("");

  const [captchaChecked, setCaptchaChecked] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [meetingLink, setMeetingLink] =
    useState("");

  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  const [bookedSlots, setBookedSlots] =
  useState<string[]>([]);
  
  const [timezone, setTimezone] =
  useState("");
  
  const [isRescheduleMode, setIsRescheduleMode] =
  useState(false);

  const times = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];
  useEffect(() => {

  const detectedTimezone =
    Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone;

  setTimezone(detectedTimezone);

}, []);

  useEffect(() => {

  if (!bookingId) return;

  setIsRescheduleMode(true);

  const fetchBookingDetails =
    async () => {

      try {

        const response =
          await axios.get(
            `http://127.0.0.1:8000/booking-details/${bookingId}/`
          );

        const data = response.data;

        setName(data.name);

        setEmail(data.email);

        setLinkedin(
          data.linkedin || ""
        );

        setNotes(
          data.notes || ""
        );

        setSelectedTime(
          data.selected_time
        );

        setSelectedDate(
          new Date(data.selected_date)
        );

      } catch (error) {

        console.error(
          "Failed to load booking"
        );
      }
    };

  fetchBookingDetails();

}, [bookingId]);

  useEffect(() => {

  const fetchBookedSlots = async () => {

    try {

      const formattedDate =
        selectedDate
          .toISOString()
          .split("T")[0];

      const response = await axios.get(
        `http://127.0.0.1:8000/booked-slots/?date=${formattedDate}`
      );

      setBookedSlots(
        response.data.booked_slots
      );

    } catch (error) {

      console.error(
        "Failed to fetch booked slots"
      );
    }
  };

  fetchBookedSlots();

}, [selectedDate]);

  const copyMeetingLink = async () => {

  try {

    await navigator.clipboard.writeText(
      meetingLink
    );

    alert("Meeting link copied!");

  } catch (error) {

    console.error(error);
  }
};

  const handleSubmit = async () => {

    if (!selectedTime) {

      setMessage(
        "Please select a time slot"
      );

      return;
    }

    if (!name || !email) {

      setMessage(
        "Please fill required fields"
      );

      return;
    }

    if (!captchaChecked) {

      setMessage(
        "Please verify captcha"
      );

      return;
    }

    try {

      setLoading(true);

      const response = isRescheduleMode

  ? await axios.put(

      `http://127.0.0.1:8000/reschedule-booking/${bookingId}/`,

      {

        selected_date:
          selectedDate,

        selected_time:
          selectedTime,

        timezone:
          timezone,
      }
    )

  : await axios.post(

      "http://127.0.0.1:8000/confirm-demo/",

      {

        name,

        email,

        linkedin,

        notes,

        selected_date:
          selectedDate,

        selected_time:
          selectedTime,

        timezone:
          timezone,
      }
    );

      console.log(response.data);

      setMeetingLink(
  response.data.meeting_link
);

setShowSuccessModal(true);

setSelectedTime("");

setName("");

setEmail("");

setLinkedin("");

setNotes("");

setCaptchaChecked(false);

setMessage("");

    } catch (error: any) {

      console.error(error);

      setMessage(
        error.response?.data?.message ||
        "Booking failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="
      min-h-screen
      bg-[#0A0F0B]
      text-white
      flex
      items-center
      justify-center
      px-4
      py-12
    ">

      <div className="
        w-full
        max-w-7xl
        bg-[#111]
        border
        border-[#2A3416]
        rounded-3xl
        overflow-hidden
        grid
        grid-cols-1
        lg:grid-cols-2
        glow-green
      ">

        {/* LEFT SIDE */}

        <div className="
          p-8
          border-r
          border-[#2A3416]
        ">

          <h1 className="
            text-4xl
            font-bold
            mb-6
          ">
            {
  isRescheduleMode
    ? "Reschedule Demo"
    : "Book a Demo"
}
          </h1>

          <div className="
            custom-calendar
          ">
            <Calendar
  onChange={(value) => {

    setSelectedDate(value as Date);

    // RESET TIME WHEN DATE CHANGES
    setSelectedTime("");

  }}

  value={selectedDate}

  minDate={new Date()}

  tileClassName={({ date, view }) => {

    if (view === "month") {

      const today = new Date();

      const isPast =
        date <
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );

      const isSelected =
        date.toDateString() ===
        selectedDate.toDateString();

      if (isSelected) {
        return "selected-date";
      }

      if (isPast) {
        return "past-date";
      }
    }

    return "";
  }}
/>
          </div>

          {/* TIME SLOTS */}

          <div className="mt-8">

            <h2 className="
              text-xl
              font-semibold
              mb-4
            ">
              Select Time
            </h2>

            <div className="
              grid
              grid-cols-2
              gap-3
              max-h-[350px]
              overflow-y-auto
              scrollbar-hide
              pr-2
            ">

              {times.map((time) => (

                <button
  key={time}

  disabled={bookedSlots.includes(time)}

  onClick={() =>
    setSelectedTime(time)
  }

  className={`
    py-3
    rounded-xl
    border
    transition-all
    duration-300

    ${
      bookedSlots.includes(time)

        ? "bg-[#181818] text-gray-500 border-[#333] cursor-not-allowed opacity-70"

        : selectedTime === time

        ? "bg-[#77B900] text-black border-[#77B900] shadow-[0_0_18px_rgba(119,185,0,0.4)]"

        : "bg-[#0A0F0B] border-[#2A3416] text-white hover:border-[#77B900]"
    }
  `}
>
  {
    bookedSlots.includes(time)
      ? `${time} • Booked`
      : time
  }
</button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="p-8">

          <div className="space-y-5">

            {/* NAME */}

            <div>

              <label className="
                text-sm
                text-gray-300
              ">
                Your Name *
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="John Doe"
                className="
                  w-full
                  mt-2
                  bg-[#0A0F0B]
                  border
                  border-[#2A3416]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-[#77B900]
                "
              />
            </div>

            {/* EMAIL */}

            <div>

              <label className="
                text-sm
                text-gray-300
              ">
                Email Address *
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="your@email.com"
                className="
                  w-full
                  mt-2
                  bg-[#0A0F0B]
                  border
                  border-[#2A3416]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-[#77B900]
                "
              />
            </div>

            {/* LINKEDIN */}

            <div>

              <label className="
                text-sm
                text-gray-300
              ">
                LinkedIn Profile
              </label>

              <input
                type="text"
                value={linkedin}
                onChange={(e) =>
                  setLinkedin(e.target.value)
                }
                placeholder="linkedin.com/in/..."
                className="
                  w-full
                  mt-2
                  bg-[#0A0F0B]
                  border
                  border-[#2A3416]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-[#77B900]
                "
              />
            </div>

            {/* NOTES */}

            <div>

              <label className="
                text-sm
                text-gray-300
              ">
                Additional Notes
              </label>

              <textarea
                rows={5}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="
                  Tell us what you'd like to discuss...
                "
                className="
                  w-full
                  mt-2
                  bg-[#0A0F0B]
                  border
                  border-[#2A3416]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-[#77B900]
                "
              />
            </div>

            

            {/* CAPTCHA */}

<div
  className="
    bg-[#111]
    border
    border-[#2A3416]
    rounded-2xl
    px-5
    py-4
    flex
    items-center
    justify-between
    max-w-[420px]
    shadow-[0_0_20px_rgba(119,185,0,0.12)]
  "
>

  {/* LEFT */}

  <div className="flex items-center gap-4">

    <input
      type="checkbox"
      checked={captchaChecked}
      onChange={() =>
        setCaptchaChecked(!captchaChecked)
      }
      className="
        w-6
        h-6
        accent-[#77B900]
        cursor-pointer
        transition-all
      "
    />

    <div className="flex flex-col">

      <span className="text-white text-[18px] font-medium">
        I'm not a robot
      </span>

      <span className="text-gray-500 text-[11px]">
        reCAPTCHA
      </span>

    </div>
  </div>

  {/* RIGHT */}

  <div className="flex flex-col items-center">

    <img
      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
      alt="captcha"
      className="
        w-10
        h-10
        object-contain
        opacity-80
      "
    />

    <span className="text-[9px] text-gray-500 mt-1">
      Privacy - Terms
    </span>

  </div>
</div>
            {/* MESSAGE */}

            {message && (

              <div className="
                text-sm
                text-[#77B900]
              ">
                {message}
              </div>
            )}

            {/* BUTTON */}

            <button
              onClick={() => {if (!loading) { handleSubmit();}
             }}
              disabled={loading}
              className="
                w-full
                py-4
                rounded-xl
                bg-[#77B900]
                text-black
                font-semibold
                hover:opacity-90
                transition-all
              "
            >
              {
                loading
                  ? "Processing..."
                  : isRescheduleMode
  ? "Reschedule Event"
  : "Schedule Event"
              }
            </button>
          </div>
        </div>
      </div>
      {/* SUCCESS MODAL */}

{showSuccessModal && (

  <div
    className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      px-4
    "
  >

    <div
      className="
        w-full
        max-w-lg
        bg-[#111]
        border
        border-[#2A3416]
        rounded-3xl
        p-8
        glow-green
      "
    >

      <div className="text-center">

        <div
          className="
            w-20
            h-20
            rounded-full
            bg-[#77B900]
            text-black
            flex
            items-center
            justify-center
            text-4xl
            mx-auto
            mb-6
          "
        >
          ✓
        </div>

        <h2
          className="
            text-3xl
            font-bold
            mb-3
          "
        >
          Demo Scheduled!
        </h2>

        <p className="text-gray-400 mb-8">
          Your meeting has been confirmed.
          Please check your email.
        </p>

        <div
          className="
            bg-[#0A0F0B]
            border
            border-[#2A3416]
            rounded-2xl
            p-4
            mb-6
            text-left
          "
        >

          <div className="mb-3">

            <p className="text-gray-400 text-sm">
              Date
            </p>

            <p className="font-medium">
              {
                selectedDate.toDateString()
              }
            </p>
          </div>

          <div className="mb-3">

            <p className="text-gray-400 text-sm">
              Time
            </p>

            <p className="font-medium">
              {selectedTime}
            </p>
          </div>

          <div className="mb-3">

            <p className="text-gray-400 text-sm">
              Timezone
            </p>

            <p className="font-medium">
              {timezone}
            </p>
          </div>

          <div>

            <p className="text-gray-400 text-sm mb-2">
              Meeting Link
            </p>

            <div className="flex gap-2">

              <input
                value={meetingLink}
                readOnly
                className="
                  flex-1
                  bg-[#111]
                  border
                  border-[#2A3416]
                  rounded-xl
                  px-3
                  py-2
                  text-sm
                  text-[#77B900]
                "
              />

              <button
                onClick={copyMeetingLink}
                className="
                  px-4
                  rounded-xl
                  bg-[#77B900]
                  text-black
                  font-semibold
                "
              >
                Copy
              </button>

            </div>
          </div>
        </div>

        <button
          onClick={() =>{
            setShowSuccessModal(false)
            setMeetingLink("");
          } }
          className="
            w-full
            py-4
            rounded-xl
            bg-[#77B900]
            text-black
            font-semibold
          "
        >
          Close
        </button>

      </div>
    </div>
  </div>
)}
    </div>
  );
}