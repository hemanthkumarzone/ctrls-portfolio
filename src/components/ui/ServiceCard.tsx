import { Link } from "react-router-dom";

type Props = {
  icon?: string;
  emoji?: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, emoji, title, description }: Props) => {

  // 🔥 CREATE URL SLUG
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/services/${slug}`}>
      <div className="w-full max-w-[290px] h-[224px] bg-[#0F1A12] border border-[#77B900]/30 rounded-[20px] flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(119,185,0,0.4)] cursor-pointer">

        {icon ? (
          <img src={icon} alt={title} className="w-[32px] h-[32px] mb-[12px]" />
        ) : (
          <div className="text-[#77B900] text-[48px] mb-[12px]">
            {emoji}
          </div>
        )}

        <h3
  className="text-white text-[20px] font-semibold mb-[8px]"
  dangerouslySetInnerHTML={{ __html: title as string }}
/>

        <div
  className="text-[#929292] text-[13px] leading-[28px] px-6"
  dangerouslySetInnerHTML={{ __html: description as string }}
/>

      </div>
    </Link>
  );
};

export default ServiceCard;