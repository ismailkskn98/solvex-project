import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import LanguageChange from "./LanguageChange";
import { Link } from "@/i18n/navigation";
import { SlEnergy } from "react-icons/sl";
import MobileNavbar from "./mobileNavbar";

export default function Header() {
  return (
    <>
      <section className="fluid gridContainer relative w-full px-3 py-3 lg:!hidden">
        <main className="fluid flex w-full items-center justify-end">
          <LanguageChange />
        </main>
      </section>
      <header className="flex w-full items-center justify-between pt-0 pr-3 pb-6 pl-1 lg:px-0 lg:py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/images/common/logo.webp"}
            width={60}
            height={60}
            alt=""
            className="h-[min(10vw,45px)] w-[min(10vw,45px)]"
          />
          <span className="text-[min(10vw,22px)] font-black text-white">
            Solvex
          </span>
        </Link>
        <Navbar />
        <MobileNavbar />
        <article className="hidden items-center justify-center gap-2 lg:flex">
          <LanguageChange />
          <button className="flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 text-[clamp(12px,1.2vw,16px)] text-nowrap text-black/80 transition hover:bg-white/70">
            <SlEnergy className="text-lg" />
            <span>Satın Al</span>
          </button>
        </article>
      </header>
    </>
  );
}
