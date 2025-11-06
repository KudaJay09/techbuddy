"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text content slide in from left
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image float in from right with rotation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous floating animation for the image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="px-8 md:px-12 py-20">
      <div className="flex items-center justify-center flex-col md:flex-row md:gap-8 lg:gap-16">
        <div
          ref={textRef}
          className="flex-1 p-8 py-16 md:p-8 flex flex-col justify-center max-w-2xl"
        >
          <h3 className="text-2xl parag">Why Us?</h3>
          <p className="text-4xl mt-2 max-w-[40ch] leading-11">
            <span className="gotham-light-italic">The </span>
            <span className="gotham-bold grad-text">
              PERFECT COMBINATION
            </span>{" "}
            <span className="gotham-light-italic">
              of Technology, Product, Talent, and Resources
            </span>
          </p>
        </div>

        <div
          ref={imageRef}
          className="flex-1 hidden md:flex items-center justify-center max-w-2xl"
        >
          <Image src="/ball.png" alt="How It Works" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
