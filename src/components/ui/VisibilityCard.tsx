type CardProps = {
  icon: string
  title: string
  description: string
  className?: string
}

export default function VisibilityCard({
  icon,
  title,
  description,
  className = ""
}: CardProps) {
  return (
    <div
      className={`
        w-full
        max-w-[260px] sm:max-w-[280px] lg:max-w-[300px]
        min-h-[190px] sm:min-h-[210px] lg:min-h-[230px]
        bg-[#0f1412]
        rounded-[18px] sm:rounded-[20px] lg:rounded-[22px]
        border border-[#1f2a10]
        flex flex-col items-center text-center
        px-4 lg:px-5
        pt-6
        transition-all duration-300 ease-in-out

        hover:border-[#77B900]
        hover:shadow-[0_0_20px_rgba(119,185,0,0.25)]
        hover:scale-[1.03]

        ${className}
      `}
    >

      {/* 🔹 ICON */}
      <img
        src={icon}
        alt={title}
        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px] mb-3"
      />

      {/* 🔹 TITLE */}
      <h3
        className="text-white text-[15px] sm:text-[16px] lg:text-[17px] font-semibold mb-2"
        dangerouslySetInnerHTML={{ __html: title as string }}
      />

      {/* 🔹 DESCRIPTION */}
      <div
        className="text-[#a0a0a0] text-[12px] sm:text-[13px] leading-[20px] sm:leading-[24px]"
        dangerouslySetInnerHTML={{ __html: description as string }}
      />

    </div>
  )
}