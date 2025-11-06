import React from "react";
import ImgsortMobile from "./ImgsortMobile";

function Imgsort() {
  const images = [
    { src: "/singapore_01.png", alt: "image 1", initialScale: "scale-95" },
    { src: "/singapore_02.png", alt: "image 2", initialScale: "scale-105" },
    { src: "/singapore_03.png", alt: "image 3", initialScale: "scale-90" },
    { src: "/singapore_04.png", alt: "image 4", initialScale: "scale-100" },
  ];

  return (
    <>
      {/* Mobile Component - visible on small devices */}
      <ImgsortMobile />

      {/* Desktop Component - visible on medium and larger devices */}
      <div className="mx-5 hidden gap-4 md:flex md:justify-between xl:min-h-[300px] 2xl:min-h-[500px] py-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center transition-all duration-500 cursor-pointer group"
            tabIndex={0}
          >
            <img
              className={`h-auto w-auto rounded-lg transition-all duration-500 ${image.initialScale} group-hover:scale-115 transform-gpu`}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Imgsort;
