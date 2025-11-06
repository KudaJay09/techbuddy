import React from "react";
import "@/styles/JoinUs.css";
import Image from "next/image";

function ImgsortMobile() {
  const images = [
    { src: "/singapore_01.png", alt: "image 1", initialScale: "scale-95" },
    { src: "/singapore_02.png", alt: "image 2", initialScale: "scale-105" },
    { src: "/singapore_03.png", alt: "image 3", initialScale: "scale-90" },
    { src: "/singapore_04.png", alt: "image 4", initialScale: "scale-100" },
  ];

  return (
    <div className="md:hidden">
      {/* Horizontal scrollable container */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-60 flex items-center justify-center snap-center group cursor-pointer"
            tabIndex={0}
          >
            <Image
              className={`h-full w-full object-cover rounded-lg transition-all duration-500 JounUs_fade_in_image__MH_a5 ${image.initialScale} group-hover:scale-110 group-focus:scale-110 transform-gpu shadow-lg`}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default ImgsortMobile;
