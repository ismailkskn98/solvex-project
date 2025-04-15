import { useTranslations } from "next-intl";
import React from "react";

export default function HeroContent() {
  const t = useTranslations("HomePage");
  return (
    <article className="relative z-50 flex w-full max-w-[1300px] flex-col items-center justify-center gap-3">
      <div className="from-lavender-light flex flex-col items-center justify-center bg-gradient-to-l to-white bg-clip-text text-center text-transparent">
        <h1 className="text-[min(10vw,50px)] font-black">Solvex Network</h1>
        <p className="text-[min(10vw,30px)] font-medium">{t("heroContent")}</p>
      </div>
      <p className="text-center text-white/60">{t("heroSubContent")}</p>
      <div className="mt-2 flex items-center gap-4 font-bold capitalize">
        <button className="cursor-pointer rounded-full border-2 border-white/20 bg-white/15 px-5 py-3 text-white transition hover:bg-white/30">
          Get Started
        </button>
        <button className="cursor-pointer rounded-full bg-white px-5 py-3 text-black/80 transition hover:bg-white/70">
          Satın Al
        </button>
      </div>
    </article>
  );
}
