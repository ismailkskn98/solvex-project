"use client";
import { Globe } from "@/components/magicui/globe";
import { DotBackground } from "@/components/ui/dotBackground";
import React from "react";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdToken } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

export default function WhatSolvex() {
  return (
    <main className="relative mt-32 flex w-full flex-col items-center justify-center rounded-lg border-2 border-white/15 bg-white/5 px-16 py-14 min-[900px]:flex-row min-[900px]:justify-between">
      <DotBackground />
      <div className="from-purple-bright/30 absolute inset-0 h-full w-full bg-gradient-to-br to-black/60"></div>
      <section className="relative h-[500px] max-h-[570px] max-w-[780px] flex-1">
        <Globe className="drop-shadow-[drop-shadow(0_0_7px_#bf6fad)]" />
      </section>
      <section className="flex flex-1 flex-col items-start justify-center gap-2 backdrop-blur-[.5px]">
        <h2 className="bg-gradient-to-t from-black/10 to-white bg-clip-text text-[min(3.6vw,50px)] font-bold text-transparent">
          Solvex Network Nedir?
        </h2>
        <p className="font-base text-[min(1.3vw,15px)] leading-9 text-white/80">
          Solvex Network, BNB Chain Ecosystem üzerinde yer alan, merkeziyetsiz
          ve topluluk odaklı bir kripto para projesidir. İlk aşamalarında
          merkeziyetsiz finans (DeFi) çözümlerine odaklanan proje, daha sonra
          topluluk tarafından yönetilen bir modele geçiş yaparak, dolaşımdaki
          token miktarının yakılması ve likiditenin kilitlenmesi gibi önlemlerle
          uzun vadeli istikrar sağlamayı amaçlamıştır. Bu yapı, projenin
          güvenilirliğini artırarak yatırımcıların ve kullanıcıların güvenini
          kazanmayı hedeflemektedir.
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
