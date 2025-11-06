"use client";
import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(headerRef.current, { y: -100, opacity: 0 });
    gsap.set(logoRef.current, { x: -50, opacity: 0 });
    gsap.set(".nav-item", { y: -30, opacity: 0 });
    gsap.set(buttonRef.current, { x: 50, opacity: 0, scale: 0.8 });

    // Animate header elements
    tl.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        logoRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .to(
        ".nav-item",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 hidden w-full items-center justify-between px-5 py-4 transition-all md:flex bg-gradient-to-b from-zinc-900 to-zinc-900/0"
    >
      <Link
        ref={logoRef}
        href="#home"
        className="flex items-center gap-2 text-xl font-bold"
      >
        <Image src="/logo.png" alt="TechBuddy" width={45} height={45} />
        TechBuddy
      </Link>

      <div ref={navRef} className="flex md:gap-8 lg:gap-14 xl:gap-[86px]">
        {navItems.map((item) => (
          <div className="relative nav-item" key={item.id}>
            <div className="hover:-translate-y-[3px] cursor-pointer leading-[40px] transition duration-300 ease-in-out ">
              <span className="border-b-2 border-b-transparent pb-1 hover:border-b-primary-40">
                <Link href={item.url}>{item.name}</Link>
              </span>
            </div>
            <div className="absolute top-[40px] z-50 mt-[6px] flex min-w-40 flex-col gap-4"></div>
            <div className="mt-[6px] w-full flex-col gap-4 hidden"></div>
          </div>
        ))}

        <button
          ref={buttonRef}
          className="px-8 py-2 rounded-full bg-gradient-to-br from-[#040C18] to-[#040C7B] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition border border-gray-300 duration-200"
        >
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
