"use client";
import { Email, FooterData, Slogan, Socials } from "@/data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Footer columns stagger
      gsap.fromTo(
        ".footer-column",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-column",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social icons animation
      gsap.fromTo(
        ".social-icon",
        { opacity: 0, scale: 0, rotation: 90 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".social-icon",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slogan sliding animation
      gsap.fromTo(
        sloganRef.current,
        { x: "100%" },
        {
          x: "-100%",
          duration: 20,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: sloganRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);
  return (
    <footer ref={footerRef} className="bg-[#031B34] mt-20">
      {/* Desktop footer */}
      <div className="text-white relative w-full justify-center hidden xl:flex flex-col">
        <div className="w-[90%] pt-12 lg:w-[96%] 2xl:w-[90%] mx-auto">
          <div className="grid items-start md:gap-6 grid-cols-[0.5fr_7fr_1fr] 2xl:gap-12">
            <div>
              <img ref={logoRef} src={"./logo.png"} width={60} height={60} />
            </div>

            <div className="grid grid-cols-5 md:gap-2 xl:gap-10 2xl:gap-14">
              {FooterData.map((item) => (
                <div key={item.title} className="footer-column">
                  <h4 className="font-bold">{item.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {item.url.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.link}
                          className="text-gray-400 hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 ml-14">
              {Socials.map((social) => (
                <div
                  key={social.title}
                  className="flex items-center space-x-2 social-icon"
                >
                  <social.icon
                    size={25}
                    className="text-gray-400 hover:text-white"
                  />
                  <a
                    href={social.link}
                    className="text-gray-400 hover:underline"
                  >
                    {social.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-x-32 mt-20">
            {Email.map((email, index) => (
              <div
                key={`desktop-${email.title}-${index}`}
                className="flex flex-col justify-between"
              >
                <h4 className="font-bold">{email.title}</h4>
                <p className="text-gray-400">{email.email}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center animation-slide-through pb-2 border-b overflow-hidden">
          <div ref={sloganRef} className="slide-through">
            <div
              className="gotham-bold text-white"
              style={{
                whiteSpace: "nowrap",
                opacity: 0.3,
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#fff",
                fontSize: "118px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {Slogan.text}
            </div>
          </div>
        </div>
        <p className="text-gray-400 py-2 px-6">
          &copy; {new Date().getFullYear()} TechBuddy. All rights reserved.
        </p>
      </div>

      {/* Mobile responsive footer */}
      <div className="xl:hidden p-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-b pb-4">
            <img src={"./logo.png"} width={60} height={60} />

            <div className="flex gap-4 ml-4">
              {Socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  className="text-gray-400 hover:text-white"
                >
                  <social.icon size={35} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-rows-4 space-y-6 my-6">
          {Email.map((email, index) => (
            <div
              key={`mobile-${email.title}-${index}`}
              className="flex flex-col justify-between nth-[4]:justify-start"
            >
              <h4 className="font-bold">{email.title}</h4>
              <p className="text-gray-400">{email.email}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 border-t py-1 text-center">
          &copy; {new Date().getFullYear()} TechBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
