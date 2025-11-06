import Image from "next/image";
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative text-white product_Card overflow-hidden h-[30ch] bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-3">{description}</p>
      <Image
        src={icon}
        alt={`${title} icon`}
        className="absolute right-0 -bottom-6 h-auto w-full rounded-lg"
        width={500}
        height={500}
      />
    </div>
  );
};

export default InfoCard;
