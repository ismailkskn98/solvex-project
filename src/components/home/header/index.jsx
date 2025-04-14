import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import LanguageChange from "./LanguageChange";
import { Link } from "@/i18n/navigation";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/images/common/logo.png"} width={150} height={70} alt="" className="w-[min(10vw,64px)] h-[min(10vw,64px)]" />
        <span className="font-black text-white text-[min(10vw,30px)]">Solvex</span>
      </Link>
      <Navbar />
      <article>
        <button className="flex items-center gap-3 rounded-full bg-pure-white font-medium capitalize">
          A<span>Hemen Satın Al</span>
        </button>
        <LanguageChange />
      </article>
    </header>
  );
}
