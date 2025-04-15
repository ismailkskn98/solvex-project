import { Meteors } from "@/components/ui/meteors";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";
import HeroContent from "./HeroContent";
import HeroIcons from "./HeroIcons";

export default function Hero() {
  return (
    <main className="relative w-full h-[calc(100dvh-240px)] hero-bg rounded-lg flex items-center justify-center overflow-hidden">
      <section suppressHydrationWarning className="absolute h-full w-full max-w-[250px] top-0 left-1/2 -translate-x-1/2 overflow-hidden z-50 rotate-[8deg]">
        <Meteors />
      </section>
      <StarsBackground />
      <ShootingStars />
      <HeroContent />
      <HeroIcons />
    </main>
  );
}
