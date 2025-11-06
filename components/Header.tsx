import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 z-50 hidden w-full items-center justify-between px-5 py-4 transition-all md:flex bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <Link href="#home" className="flex items-center gap-2 text-xl font-bold">
        <Image src="/logo.png" alt="TechBuddy" width={45} height={45} />
        TechBuddy
      </Link>

      <div className="flex md:gap-8 lg:gap-14 xl:gap-[86px]">
        {navItems.map((item) => (
          <div className="relative" key={item.id}>
            <div className="hover:-translate-y-[3px] cursor-pointer leading-[40px] transition duration-300 ease-in-out ">
              <span className="border-b-2 border-b-transparent pb-1 hover:border-b-primary-40">
                <Link href={item.url}>{item.name}</Link>
              </span>
            </div>
            <div className="absolute top-[40px] z-50 mt-[6px] flex min-w-40 flex-col gap-4"></div>
            <div className="mt-[6px] w-full flex-col gap-4 hidden"></div>
          </div>
        ))}

        <button className="px-8 py-2 rounded-full bg-gradient-to-br from-[#040C18] to-[#040C7B] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition border border-gray-300 duration-200">
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
