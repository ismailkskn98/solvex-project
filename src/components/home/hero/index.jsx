import { Meteors } from "@/components/ui/meteors";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";
import HeroContent from "./HeroContent";
import HeroIcons from "./HeroIcons";

export default function Hero() {
  return (
    <main className="hero-bg relative flex h-[calc(100dvh-240px)] w-full items-center justify-center overflow-hidden rounded-lg">
      <section
        suppressHydrationWarning
        className="absolute top-0 left-1/2 z-50 h-full w-full max-w-[250px] -translate-x-1/2 rotate-[8deg] overflow-hidden"
      >
        <Meteors />
      </section>
      <StarsBackground />
      <ShootingStars />
      <HeroContent />
      <HeroIcons />
    </main>
  );
}
