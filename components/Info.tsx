"use client";
import React, { useEffect, useRef } from "react";
import InfoCard from "./ui/Cards";
import { InfoData } from "@/data";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const endTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".info-card",
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // End text reveal animation
      gsap.fromTo(
        ".end-text-word",
        { opacity: 0, rotationX: -90, y: 50 },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: endTextRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-12 mx-5 rounded-xl bg-[#040C18]"
    >
      <div className="px-4 md:px-8">
        <h2 ref={titleRef} className="text-2xl heading parag gotham-bold">
          TechBuddy Application Product
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:py-12"
        >
          {InfoData.map((info) => (
            <div key={info.id} className="ladder info-card">
              <InfoCard
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
            </div>
          ))}
        </div>
        <div ref={endTextRef} className="flex items-center justify-end mt-10">
          <p className="text-4xl max-w-[25ch] leading-11">
            <span className="gotham-bold grad-text end-text-word">
              VERSATILE{" "}
            </span>
            <span className="merriweather-light-italic end-text-word">
              Innovation Endless{" "}
            </span>
            <span className="gotham-bold grad-text end-text-word">
              POSSIBILITIES.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
