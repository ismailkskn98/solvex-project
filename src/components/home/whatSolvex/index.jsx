"use client";
import { Globe } from "@/components/magicui/globe";
import { DotBackground } from "@/components/ui/dotBackground";
import React from "react";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdToken } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function WhatSolvex() {
  const t = useTranslations("HomePage");
  return (
    <main className="relative mt-20 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-white/15 bg-white/5 px-6 py-14 min-[900px]:flex-row min-[900px]:justify-between md:px-10 lg:mt-32 xl:px-14 2xl:px-16">
      <DotBackground />
      <div className="from-purple-bright/30 absolute inset-0 h-full w-full bg-gradient-to-br to-black/60"></div>
      <section className="relative h-[290px] max-w-[45%] flex-1 xl:h-[390px] 2xl:h-[490px]">
        <Globe className="drop-shadow-[drop-shadow(0_0_7px_#bf6fad)]" />
      </section>
      <section className="flex flex-1 flex-col items-start justify-center gap-2 backdrop-blur-[.5px]">
        <h2 className="bg-gradient-to-t from-black/10 to-white bg-clip-text text-[min(7vw,50px)] font-bold text-transparent capitalize">
          {t("whySolvex")}
        </h2>
        <p className="font-base text-[clamp(13px,2.6vw,15px)] leading-6 text-white/80 lg:leading-8 xl:leading-9">
          {t("whySolvexReply")}
        </p>
        <article className="mt-3 flex items-center gap-5">
          <div className="bg-purple-bright/5 rounded-lg border border-white/15 p-3 text-2xl text-white transition hover:bg-white/25">
            <RiUserCommunityFill />
          </div>
          <div className="bg-purple-bright/5 rounded-lg border border-white/15 p-3 text-2xl text-white transition hover:bg-white/25">
            <MdToken />
          </div>
          <div className="bg-purple-bright/5 rounded-lg border border-white/15 p-3 text-2xl text-white transition hover:bg-white/25">
            <MdHealthAndSafety />
          </div>
        </article>
      </section>
    </main>
  );
}
