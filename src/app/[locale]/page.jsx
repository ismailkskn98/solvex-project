import Hero from "@/components/home/hero";
import WhatSolvex from "@/components/home/whatSolvex";
import LogoMarquee from "@/components/home/logoMarquee";
import Services from "@/components/home/services";
import { ColdWallet } from "@/components/home/coldWallet";
import Token from "@/components/home/token";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />

      <WhatSolvex />
      <Services />
      <Token />
      <ColdWallet />
    </>
  );
}
