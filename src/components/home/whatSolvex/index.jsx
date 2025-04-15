"use client";
import { Globe } from "@/components/magicui/globe";
import { DotBackground } from "@/components/ui/dotBackground";
import React from "react";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdToken } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

export default function WhatSolvex() {
  return (
    <main className="relative w-full flex flex-col min-[900px]:flex-row items-center justify-center min-[900px]:justify-between mt-32 border-2 bg-white/5 border-white/15 rounded-lg py-14 px-16">
      <DotBackground />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-bright/30 to-black/60"></div>
      <section className="relative flex-1 h-[500px] max-h-[570px] max-w-[780px]">
        <Globe className="drop-shadow-[drop-shadow(0_0_7px_#bf6fad)]" />
      </section>
      <section className="flex-1 flex flex-col items-start justify-center gap-2 backdrop-blur-[.5px]">
        <h2 className="text-transparent bg-gradient-to-t from-black/10 to-white bg-clip-text font-bold text-[min(3.6vw,50px)]">Solvex Network Nedir?</h2>
        <p className="text-white/80 font-base text-[min(1.3vw,15px)] leading-9">
          Solvex Network, BNB Chain Ecosystem üzerinde yer alan, merkeziyetsiz ve topluluk odaklı bir kripto para projesidir. İlk aşamalarında merkeziyetsiz finans (DeFi) çözümlerine odaklanan proje, daha sonra
          topluluk tarafından yönetilen bir modele geçiş yaparak, dolaşımdaki token miktarının yakılması ve likiditenin kilitlenmesi gibi önlemlerle uzun vadeli istikrar sağlamayı amaçlamıştır. Bu yapı, projenin
          güvenilirliğini artırarak yatırımcıların ve kullanıcıların güvenini kazanmayı hedeflemektedir.
        </p>
        <article className="flex items-center gap-5 mt-3">
          <div className="rounded-lg bg-purple-bright/5 border border-white/15 p-3 text-2xl text-white hover:bg-white/25 transition">
            <RiUserCommunityFill />
          </div>
          <div className="rounded-lg bg-purple-bright/5 border border-white/15 p-3 text-2xl text-white hover:bg-white/25 transition">
            <MdToken />
          </div>
          <div className="rounded-lg bg-purple-bright/5 border border-white/15 p-3 text-2xl text-white hover:bg-white/25 transition">
            <MdHealthAndSafety />
          </div>
        </article>
      </section>
    </main>
  );
}
