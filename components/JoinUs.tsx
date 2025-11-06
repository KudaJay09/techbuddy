import { AboutData } from "@/data";
import Imgsort from "./Imgsort";
import { LucideArrowRightCircle } from "lucide-react";

function JoinUs() {
  return (
    <section className="mx-5 px-4 md:px-8 py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] rounded-lg">
      <h4 className="text-xl parag gotham-light">Join Us</h4>
      <p className="uppercase text-4xl">
        <span className="gotham-bold grad-text">Discover </span>
        <span className="merriweather-light-italic">Your </span>
        <span className="gotham-bold grad-text">Impact </span>
      </p>

      <div className="mt-4">
        <Imgsort />
        <p className="max-w-[50ch] lg:max-w-[70ch] mx-auto mt-8 text-[#81afdd]">
          <span className="text-purple-400">✦ </span>
          {AboutData.desc}
        </p>{" "}
        <div className="flex justify-center mt-8">
          <button className=" flex items-center gap-4 px-8 py-2 rounded-full bg-gradient-to-br from-[#040C18] to-[#040C7B] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition border border-gray-300 duration-200">
            <LucideArrowRightCircle size={25} />
            Resume Submission
          </button>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
