import { useTranslations } from "next-intl";
import Hero from "@/components/home/hero";
import WhatSolvex from "@/components/home/whatSolvex";
import LogoMarquee from "@/components/home/logoMarquee";
import Services from "@/components/home/services";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Hero />
      <LogoMarquee />
      <WhatSolvex />
      <Services />
    </>
  );
}
