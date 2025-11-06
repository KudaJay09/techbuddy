"use client";
import { AboutData } from "@/data";
import Imgsort from "./Imgsort";
import { LucideArrowRightCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function JoinUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header text stagger
      gsap.fromTo(
        ".join-text-word",
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Images animation
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description fade in
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button entrance with bounce
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.5, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button hover animations
      const button = buttonRef.current?.querySelector("button");
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          button.removeEventListener("mouseenter", handleMouseEnter);
          button.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="mx-5 px-4 md:px-8 py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] rounded-lg"
    >
      <div ref={headerRef}>
        <h4 className="text-xl parag gotham-light join-text-word">Join Us</h4>
        <p className="uppercase text-4xl">
          <span className="gotham-bold grad-text join-text-word">
            Discover{" "}
          </span>
          <span className="merriweather-light-italic join-text-word">
            Your{" "}
          </span>
          <span className="gotham-bold grad-text join-text-word">Impact </span>
        </p>
      </div>

      <div className="mt-4">
        <div ref={imagesRef}>
          <Imgsort />
        </div>
        <p
          ref={descriptionRef}
          className="max-w-[50ch] lg:max-w-[70ch] mx-auto mt-8 text-[#81afdd]"
        >
          <span className="text-purple-400">✦ </span>
          {AboutData.desc}
        </p>{" "}
        <div ref={buttonRef} className="flex justify-center mt-8">
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
