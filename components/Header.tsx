"use client";
import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(headerRef.current, { y: -100, opacity: 0 });
    gsap.set(logoRef.current, { x: -50, opacity: 0 });
    gsap.set(".nav-item", { y: -30, opacity: 0 });
    gsap.set(buttonRef.current, { x: 50, opacity: 0, scale: 0.8 });
    gsap.set(hamburgerRef.current, { x: 50, opacity: 0, scale: 0.8 });

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
        [buttonRef.current, hamburgerRef.current],
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

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          ".mobile-nav-item",
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            delay: 0.1,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      {/* Desktop Header */}
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

      {/* Mobile Header */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between px-5 py-4 md:hidden bg-gradient-to-b from-zinc-900 to-zinc-900/0 backdrop-blur-sm">
        <Link
          href="#home"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Image src="/logo.png" alt="TechBuddy" width={35} height={35} />
          TechBuddy
        </Link>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-gradient-to-br from-[#040C18] to-[#040C7B] text-white hover:shadow-xl transition-all duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-zinc-900 to-zinc-800 z-40 transform translate-x-full md:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Navigation Items */}
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div key={item.id} className="mobile-nav-item">
                <Link
                  href={item.url}
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-white hover:text-blue-300 transition-colors duration-200 py-3 border-b border-gray-700 hover:border-blue-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <div className="mt-8 mobile-nav-item">
            <button
              onClick={closeMobileMenu}
              className="w-full px-8 py-3 rounded-full bg-gradient-to-br from-purple-700 to-blue-900 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Close Menu Footer */}
          <div className="mt-auto mb-8 mobile-nav-item">
            <p className="text-gray-400 text-sm text-center">
              TechBuddy - Empowering Every Industry
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Background Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

export default Header;
