import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import GridCard from "./ui/GridCard";
import { capabilities, InfoData } from "@/data";

function TrustWorthyLLMs() {
  return (
    <section className="px-8 md:px-12 py-20">
      <h2 className="text-2xl font-bold parag">Why Choose Us?</h2>
      <p className="my-4 text-[#81afdd] max-w-[50ch]">
        We're bridging the gap between education and industry with personalized
        guidance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {capabilities.map((info) => (
          <GridCard
            key={info.title}
            title={info.title}
            description={info.description}
            icon={
              <Image src={info.icon} alt={info.title} width={90} height={90} />
            }
            colSpan={info.colSpan as 1 | 2 | undefined}
            rowSpan={info.rowSpan as 1 | 2 | undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default TrustWorthyLLMs;
