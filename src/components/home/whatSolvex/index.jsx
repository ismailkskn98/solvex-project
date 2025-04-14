"use client";
import { Globe } from "@/components/magicui/globe";
import React from "react";

export default function WhatSolvex() {
  return (
    <main className="relative w-full flex items-center justify-between mt-24">
      <section className="relative flex-1 h-[500px] max-w-[750px]">
        <Globe className="drop-shadow-[drop-shadow(0_0_7px_#bf6fad)]" />
      </section>
      <section className="flex-1 flex flex-col items-start justify-center gap-2">
        <h2 className="text-white font-medium text-[min(10vw,50px)]">Solvex Network Nedir?</h2>
        <p className="text-white/80 font-base text-lg leading-9">
          Solvex Network, BNB Chain Ecosystem üzerinde yer alan, merkeziyetsiz ve topluluk odaklı bir kripto para projesidir. İlk aşamalarında merkeziyetsiz finans (DeFi) çözümlerine odaklanan proje, daha sonra
          topluluk tarafından yönetilen bir modele geçiş yaparak, dolaşımdaki token miktarının yakılması ve likiditenin kilitlenmesi gibi önlemlerle uzun vadeli istikrar sağlamayı amaçlamıştır. Bu yapı, projenin
          güvenilirliğini artırarak yatırımcıların ve kullanıcıların güvenini kazanmayı hedeflemektedir.
        </p>
      </section>
    </main>
  );
}
