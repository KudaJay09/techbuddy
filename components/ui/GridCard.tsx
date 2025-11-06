"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface GridCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

const GridCard: React.FC<GridCardProps> = ({
  title,
  description,
  icon,
  className,
  colSpan = 1,
  rowSpan = 1,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const iconEl = iconRef.current;

    if (!card || !iconEl) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconEl, {
        rotation: 360,
        scale: 1.2,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconEl, {
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  // Generate responsive span classes
  // Mobile: always 1 column, Tablet: respect colSpan (max 2), Desktop: respect colSpan (max 2)
  const spanClass = `col-span-1 md:col-span-${colSpan} row-span-${rowSpan}`;

  // Adjust height based on row span
  const heightClass = rowSpan === 2 ? "h-[37rem]" : "h-72";

  return (
    <div
      ref={cardRef}
      className={cn(
        "group/card relative flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 product_Card p-6 transition-all duration-300 hover:shadow-xl shadow-zinc-700 bg-gradient-to-br from-slate-800 to-slate-900",
        spanClass,
        heightClass,
        className
      )}
    >
      {/* Content container */}
      <div className="flex flex-col h-full transition duration-200 group-hover/card:translate-x-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover/card:text-blue-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm font-normal text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Icon container */}
        <div className="flex items-center justify-end mt-6 opacity-80 group-hover/card:opacity-100 transition-opacity">
          <div
            ref={iconRef}
            className="text-blue-400 group-hover/card:scale-110 transition-transform duration-200"
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Subtle background pattern for larger cards */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
      </div>
    </div>
  );
};

export default GridCard;
