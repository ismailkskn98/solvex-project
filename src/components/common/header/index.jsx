import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import LanguageChange from "./LanguageChange";
import { Link } from "@/i18n/navigation";
import { SlEnergy } from "react-icons/sl";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={"/images/common/logo.png"}
          width={150}
          height={70}
          alt=""
          className="h-[min(10vw,64px)] w-[min(10vw,64px)]"
        />
        <span className="text-[min(10vw,30px)] font-black text-white">
          Solvex
        </span>
      </Link>
      <Navbar />
      <article className="flex items-center justify-center gap-2">
        <LanguageChange />
        <button className="flex cursor-pointer items-center gap-1 rounded-full bg-white px-5 py-3 font-medium text-black/80 transition hover:bg-white/70">
          <SlEnergy className="text-lg" />
          <span>Satın Al</span>
        </button>
      </article>
    </header>
  );
}
