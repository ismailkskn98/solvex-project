import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import LanguageChange from "./LanguageChange";
import { Link } from "@/i18n/navigation";
import { SlEnergy } from "react-icons/sl";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/images/common/logo.png"} width={150} height={70} alt="" className="w-[min(10vw,64px)] h-[min(10vw,64px)]" />
        <span className="font-black text-white text-[min(10vw,30px)]">Solvex</span>
      </Link>
      <Navbar />
      <article className="flex items-center justify-center gap-2">
        <LanguageChange />
        <button className="px-5 py-3 rounded-full bg-white cursor-pointer text-black/80 hover:bg-white/70 transition flex items-center gap-1 font-medium">
          <SlEnergy className="text-lg" />
          <span>Satın Al</span>
        </button>
      </article>
    </header>
  );
}
