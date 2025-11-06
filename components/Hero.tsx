"use client";
import { LuSquareChevronDown } from "react-icons/lu";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Split main text into letters and wrap each in a span
    if (mainTextRef.current) {
      const text = mainTextRef.current.innerHTML;
      const letters = text.split("").map((char) => {
        if (char === "<") {
          // Handle HTML tags like <br />
          const tagMatch = text.match(/<[^>]+>/);
          if (tagMatch) {
            return tagMatch[0];
          }
        }
        if (char === " ") return '<span class="letter"> </span>';
        if (char === "\n" || char.includes("<br")) return char;
        return `<span class="letter">${char}</span>`;
      });

      // Reconstruct the text with proper HTML handling
      let reconstructed = "";
      let i = 0;
      while (i < text.length) {
        if (text[i] === "<") {
          // Find the end of the HTML tag
          let tagEnd = text.indexOf(">", i);
          if (tagEnd !== -1) {
            reconstructed += text.substring(i, tagEnd + 1);
            i = tagEnd + 1;
          } else {
            reconstructed += `<span class="letter">${text[i]}</span>`;
            i++;
          }
        } else if (text[i] === " ") {
          reconstructed += '<span class="letter"> </span>';
          i++;
        } else {
          reconstructed += `<span class="letter">${text[i]}</span>`;
          i++;
        }
      }

      mainTextRef.current.innerHTML = reconstructed;
    }

    // Set initial states
    gsap.set([titleRef.current, descriptionRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });

    // Set initial state for letters
    gsap.set(".letter", {
      opacity: 0,
      y: 50,
      rotationX: -90,
    });

    // Animate elements with stagger
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        ".letter",
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.03,
        },
        "-=0.2"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-centerpx-3 sm:px-4 lg:px-0"
    >
      <div className="relative m-2 sm:m-4 lg:m-5 bg-gray-50/50 backdrop-blur-sm w-full rounded-2xl">
        <div className="p-4 sm:p-6 lg:p-8 max-w-[80ch] space-y-1 sm:space-y-2">
          <h3 ref={titleRef} className="text-2xl sm:text-2xl lg:text-3xl">
            TechBuddy
          </h3>
          <p
            ref={mainTextRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight sm:leading-tight lg:leading-20"
          >
            Empowering <br />
            Every <br />
            Industry By <br />
            Trustworthy AI.
          </p>
          <p
            ref={descriptionRef}
            className="max-w-lg text-base sm:text-base lg:text-lg"
          >
            Connect with experienced tech professionals for personalized
            mentorship, skill-building, and career guidance.
          </p>
        </div>
        <div
          ref={buttonsRef}
          className="p-6 sm:p-6 lg:p-8 pt-0 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
        >
          <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 text-sm sm:text-base rounded-full font-medium gotham-medium bg-gradient-to-br from-purple-700 to-blue-900 text-white hover:from-purple-600 hover:to-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 text-sm sm:text-base rounded-full font-medium gotham-medium border-2 border-purple-200 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 hover:border-purple-300 transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent">
              Learn More
            </span>
          </button>
        </div>
        {/* <div className="flex sm:justify-end pr-4 sm:pr-6 lg:pr-8 pb-6 sm:pb-8"> */}
        <div className="absolute bottom-4 right-0 pr-5">
          <LuSquareChevronDown
            size={30}
            className="text-gray-300 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
