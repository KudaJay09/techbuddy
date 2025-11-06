import React from "react";
import InfoCard from "./ui/Cards";
import { InfoData } from "@/data";
import { cn } from "@/lib/utils";

const Info: React.FC = () => {
  return (
    <section id="features" className="py-12 mx-5 rounded-xl bg-[#040C18]">
      <div className="px-4 md:px-8">
        <h2 className="text-2xl heading parag gotham-bold">
          TechBuddy Application Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:py-12">
          {InfoData.map((info) => (
            <div key={info.id} className="ladder">
              <InfoCard
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end mt-10">
          <p className="text-4xl max-w-[25ch] leading-11">
            <span className="gotham-bold grad-text">VERSATILE </span>
            <span className="merriweather-light-italic">
              Innovation Endless{" "}
            </span>
            <span className="gotham-bold grad-text">POSSIBILITIES.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
